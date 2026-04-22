from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

class DemandeCreate(BaseModel):
    nom: str
    telephone: str
    email: Optional[str] = None
    service: str
    description: str
    adresse: str
    ville: str

class DemandeResponse(BaseModel):
    id: int
    nom: str
    telephone: str
    service: str
    description: str
    adresse: str
    ville: str
    statut: str
    created_at: datetime

    model_config = {"from_attributes": True}

class DemandeUpdate(BaseModel):
    statut: str
