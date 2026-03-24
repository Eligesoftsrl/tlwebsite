from datetime import datetime
from flask import Flask

def create_app():
    app = Flask(__name__, template_folder="templates", static_folder="static")

    # Importa le routes
    from .routes import register_routes
    register_routes(app)

    # Iniettiamo variabili globali nei template (footer, ecc.)
    @app.context_processor
    def inject_globals():
        return {"current_year": datetime.now().year}

    return app
