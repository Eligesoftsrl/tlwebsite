from fastapi import FastAPI, APIRouter, Request
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse, FileResponse
from fastapi.templating import Jinja2Templates
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import json
import random
import httpx

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main FastAPI app
app = FastAPI(title="Tenuta Leone API")

# Setup templates and static files
templates = Jinja2Templates(directory=str(ROOT_DIR / "templates"))

# Mount static files
app.mount("/static", StaticFiles(directory=str(ROOT_DIR / "static")), name="static")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class ContactRequest(BaseModel):
    name: str
    email: str
    phone: str = ""
    event_type: str = ""
    event_date: str = ""
    guests: str = ""
    message: str = ""

class ContactResponse(BaseModel):
    success: bool
    message: str
    id: str = ""

# API URL del gestionale
GESTIONALE_API_URL = "https://www.tenutaleone.eliclient.it/api/nuova_richiesta"

# Helper function to load stanze data
def load_stanze():
    cfg_path = ROOT_DIR / "config" / "stanze_dimora_con_slug.json"
    try:
        with cfg_path.open(encoding="utf-8") as f:
            data = json.load(f)
    except Exception as e:
        return {}

    if isinstance(data, list):
        stanze = {item["slug"]: item for item in data if "slug" in item}
    elif isinstance(data, dict) and "slug" in data:
        stanze = {data["slug"]: data}
    elif isinstance(data, dict):
        stanze = data
    else:
        stanze = {}
    return stanze

# Template context
def get_template_context(request: Request):
    return {
        "request": request,
        "current_year": datetime.now().year,
        "url_for": lambda name, **kwargs: app.url_path_for(name, **kwargs) if name != 'static' else f"/static/{kwargs.get('filename', '')}"
    }

# API Routes
@api_router.get("/")
async def api_root():
    return {"message": "Tenuta Leone API", "status": "running"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks

@api_router.post("/contact", response_model=ContactResponse)
async def submit_contact(contact: ContactRequest):
    """Submit a contact form request and forward to gestionale"""
    # Validate required fields
    if not contact.name or not contact.name.strip():
        return ContactResponse(
            success=False,
            message="Il nome è obbligatorio."
        )
    if not contact.email or not contact.email.strip():
        return ContactResponse(
            success=False,
            message="L'email è obbligatoria."
        )
    
    try:
        # Save to local DB
        contact_doc = {
            "id": str(uuid.uuid4()),
            "name": contact.name.strip(),
            "email": contact.email.strip(),
            "phone": contact.phone.strip() if contact.phone else "",
            "event_type": contact.event_type,
            "event_date": contact.event_date,
            "guests": contact.guests,
            "message": contact.message.strip() if contact.message else "",
            "created_at": datetime.now(timezone.utc).isoformat(),
            "status": "new"
        }
        await db.contacts.insert_one(contact_doc)
        
        # Forward to gestionale API
        gestionale_data = {
            "nome_cliente": contact.name.strip(),
            "data_evento": contact.event_date if contact.event_date else "",
            "telefono": contact.phone.strip() if contact.phone else "",
            "email": contact.email.strip(),
            "numero_invitati": contact.guests if contact.guests else "",
            "cerca": contact.event_type if contact.event_type else "Informazioni",
            "messaggio": contact.message.strip() if contact.message else "Richiesta informazioni dal sito"
        }
        
        async with httpx.AsyncClient(timeout=10.0) as client:
            response = await client.post(GESTIONALE_API_URL, json=gestionale_data)
            if response.status_code == 200:
                api_response = response.json()
                gestionale_msg = api_response.get("messaggio", "Richiesta inviata con successo")
                logging.info(f"Gestionale API success: {gestionale_msg}")
            else:
                logging.warning(f"Gestionale API error: {response.status_code} - {response.text}")
        
        return ContactResponse(
            success=True,
            message="Grazie per averci contattato! Ti risponderemo al più presto.",
            id=contact_doc["id"]
        )
    except httpx.RequestError as e:
        logging.error(f"Gestionale API connection error: {e}")
        # Still return success since we saved locally
        return ContactResponse(
            success=True,
            message="Grazie per averci contattato! Ti risponderemo al più presto.",
            id=contact_doc.get("id", "")
        )
    except Exception as e:
        logging.error(f"Contact form error: {e}")
        return ContactResponse(
            success=False,
            message="Si è verificato un errore. Per favore riprova più tardi."
        )

# Include the router in the main app
app.include_router(api_router)

# Page Routes
@app.get("/", response_class=HTMLResponse)
async def index(request: Request):
    ctx = get_template_context(request)
    return templates.TemplateResponse("index.html", ctx)

@app.get("/contatti", response_class=HTMLResponse)
async def contact_page(request: Request):
    ctx = get_template_context(request)
    return templates.TemplateResponse("contatti.html", ctx)

@app.get("/brigata", response_class=HTMLResponse)
async def brigata_page(request: Request):
    ctx = get_template_context(request)
    return templates.TemplateResponse("brigata.html", ctx)

@app.get("/piatti", response_class=HTMLResponse)
async def piatti_page(request: Request):
    ctx = get_template_context(request)
    return templates.TemplateResponse("piatti.html", ctx)

@app.get("/pasticceria", response_class=HTMLResponse)
async def pasticceria_page(request: Request):
    ctx = get_template_context(request)
    return templates.TemplateResponse("pasticceria.html", ctx)

@app.get("/room", response_class=HTMLResponse)
async def room_page(request: Request):
    ctx = get_template_context(request)
    return templates.TemplateResponse("index.html", ctx)

@app.get("/testimonial", response_class=HTMLResponse)
async def testimonial_page(request: Request):
    ctx = get_template_context(request)
    return templates.TemplateResponse("index.html", ctx)

@app.get("/sala/{slug}", response_class=HTMLResponse)
async def sala_page(request: Request, slug: str):
    stanze = load_stanze()
    stanza = stanze.get(slug)
    if not stanza:
        return HTMLResponse(content="Stanza non trovata", status_code=404)
    others = [s for s_slug, s in stanze.items() if s_slug != slug]
    related = random.sample(others, k=min(3, len(others))) if others else []
    ctx = get_template_context(request)
    ctx["stanza"] = stanza
    ctx["related"] = related
    return templates.TemplateResponse("sala.html", ctx)

@app.get("/tour", response_class=HTMLResponse)
async def tour_page(request: Request):
    stanze = load_stanze()
    ctx = get_template_context(request)
    ctx["stanze"] = list(stanze.values())
    return templates.TemplateResponse("tour.html", ctx)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
