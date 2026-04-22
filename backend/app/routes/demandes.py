from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.database import get_db
from app.models.demande import Demande
from app.schemas.demande import DemandeCreate, DemandeResponse, DemandeUpdate

router = APIRouter(prefix="/demandes", tags=["demandes"])

@router.post("/", response_model=DemandeResponse)
def creer_demande(demande: DemandeCreate, db: Session = Depends(get_db)):
    db_demande = Demande(**demande.model_dump())
    db.add(db_demande)
    db.commit()
    db.refresh(db_demande)
    return db_demande

@router.get("/", response_model=List[DemandeResponse])
def lister_demandes(db: Session = Depends(get_db)):
    return db.query(Demande).order_by(Demande.created_at.desc()).all()

@router.get("/{demande_id}", response_model=DemandeResponse)
def obtenir_demande(demande_id: int, db: Session = Depends(get_db)):
    demande = db.query(Demande).filter(Demande.id == demande_id).first()
    if not demande:
        raise HTTPException(status_code=404, detail="Demande introuvable")
    return demande

@router.patch("/{demande_id}", response_model=DemandeResponse)
def mettre_a_jour_statut(demande_id: int, update: DemandeUpdate, db: Session = Depends(get_db)):
    demande = db.query(Demande).filter(Demande.id == demande_id).first()
    if not demande:
        raise HTTPException(status_code=404, detail="Demande introuvable")
    demande.statut = update.statut
    db.commit()
    db.refresh(demande)
    return demande
