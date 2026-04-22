const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export interface DemandeCreate {
  nom: string;
  telephone: string;
  email?: string;
  service: string;
  description: string;
  adresse: string;
  ville: string;
}

export interface DemandeResponse {
  id: number;
  nom: string;
  telephone: string;
  email?: string;
  message?: string;
  service: string;
  description: string;
  adresse: string;
  ville: string;
  statut: string;
  created_at: string;
}


export const api = {
  async creerDemande(data: DemandeCreate): Promise<DemandeResponse> {
    const res = await fetch(`${API_URL}/api/demandes/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Erreur lors de la création");
    return res.json();
  },

  async listerDemandes(): Promise<DemandeResponse[]> {
    const res = await fetch(`${API_URL}/api/demandes/`);
    if (!res.ok) throw new Error("Erreur lors du chargement");
    return res.json();
  },

  async mettreAJourStatut(id: number, statut: string): Promise<DemandeResponse> {
    const res = await fetch(`${API_URL}/api/demandes/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ statut }),
    });
    if (!res.ok) throw new Error("Erreur lors de la mise à jour");
    return res.json();
  },
};
