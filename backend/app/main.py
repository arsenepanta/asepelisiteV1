from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import Base, engine
from app.routes import demandes

# Créer les tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="ASEPELI API", version="1.0.0")

# CORS pour Next.js
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(demandes.router, prefix="/api")

@app.get("/")
def root():
    return {"message": "ASEPELI API en ligne", "status": "ok"}
