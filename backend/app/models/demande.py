from sqlalchemy import Column, Integer, String, DateTime, Text, Enum
from sqlalchemy.sql import func
from app.database import Base
import enum

class StatutDemande(str, enum.Enum):
    en_attente = "en_attente"
    en_cours = "en_cours"
    termine = "termine"
    annule = "annule"

class Demande(Base):
    __tablename__ = "demandes"

    id = Column(Integer, primary_key=True, index=True)
    
    # Infos client
    nom = Column(String(100), nullable=False)
    telephone = Column(String(20), nullable=False)
    email = Column(String(100), nullable=True)
    
    # Infos service
    service = Column(String(50), nullable=False)  # plomberie, electricite...
    description = Column(Text, nullable=False)
    adresse = Column(String(200), nullable=False)
    ville = Column(String(50), nullable=False)
    
    # Statut
    statut = Column(String(20), default="en_attente")
    
    # Dates
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
