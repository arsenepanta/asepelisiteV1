"use client";
import { useState } from "react";
import { api } from "@/lib/api";

const STATUTS = ["en_attente", "en_cours", "termine", "annule"];

const COLORS: Record<string, string> = {
  en_attente: "bg-yellow-100 text-yellow-700 border-yellow-300",
  en_cours: "bg-orange-100 text-orange-700 border-orange-300",
  termine: "bg-green-100 text-green-700 border-green-300",
  annule: "bg-red-100 text-red-700 border-red-300",
};

export default function StatutSelect({ id, statut }: { id: number; statut: string }) {
  const [current, setCurrent] = useState(statut);
  const [loading, setLoading] = useState(false);

  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatut = e.target.value;
    setLoading(true);
    try {
      await api.mettreAJourStatut(id, newStatut);
      setCurrent(newStatut);
    } catch {
      alert("Erreur lors de la mise à jour");
    } finally {
      setLoading(false);
    }
  };

  return (
    <select
      value={current}
      onChange={handleChange}
      disabled={loading}
      className={`px-3 py-1 rounded-full text-xs font-semibold border cursor-pointer ${COLORS[current]} ${loading ? "opacity-50" : ""}`}
    >
      {STATUTS.map(s => (
        <option key={s} value={s}>{s.replace("_", " ")}</option>
      ))}
    </select>
  );
}
