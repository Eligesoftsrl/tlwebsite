from flask import render_template,current_app, abort
import json
from pathlib import Path
import random

def register_routes(app):

    @app.route("/")
    def index():
        return render_template("index.html")

    @app.route("/contatti")
    def contact():
        return render_template("contatti.html")
    
    @app.route("/brigata")
    def brigata():
        return render_template("brigata.html")
    
    @app.route("/piatti")
    def piatti():
        return render_template("piatti.html")
    
    @app.route("/pasticceria")
    def pasticceria():
        return render_template("pasticceria.html")
    
    @app.route("/room")
    def room():
        return render_template("index.html")
    
    @app.route("/testimonial")
    def testimonial():
        return render_template("index.html")
    
    def load_stanze():
        cfg_path = Path(current_app.root_path) / "config" / "stanze_dimora_con_slug.json"
        try:
            with cfg_path.open(encoding="utf-8") as f:
                data = json.load(f)
        except Exception as e:
            abort(500, f"Errore nel leggere {cfg_path.name}: {e}")

        # Normalizza a dict {slug: stanza}
        if isinstance(data, list):
            stanze = {item["slug"]: item for item in data if "slug" in item}
        elif isinstance(data, dict) and "slug" in data:
            stanze = {data["slug"]: data}
        elif isinstance(data, dict):
            stanze = data
        else:
            stanze = {}

        return stanze

    @app.route("/sala/<slug>")
    def sala(slug):
        stanze = load_stanze()
        stanza = stanze.get(slug)
        if not stanza:
            abort(404, f"Stanza non trovata: {slug}")

        # Related: altre 3, ordinate se disponibile "ordine" o per nome
        others = [s for s_slug, s in stanze.items() if s_slug != slug]
        related = random.sample(others, k=min(3, len(others)))
        return render_template("sala.html", stanza=stanza, related=related)

    @app.route("/tour")
    def tour():
        # Se hai già la funzione load_stanze(), usa questa riga:
        stanze = load_stanze()
        # In alternativa, copia qui la stessa lettura JSON che usi in /sala/<slug>
        return render_template("tour.html", stanze=list(stanze.values()))
