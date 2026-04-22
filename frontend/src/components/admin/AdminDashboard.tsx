"use client";
import { useState, useEffect, useCallback } from "react";
import { DemandeResponse, api } from "@/lib/api";
import StatutSelect from "./StatutSelect";
import DemandeModal from "./DemandeModal";

const STATUTS = ["tous", "en_attente", "en_cours", "termine", "annule"];

export default function AdminDashboard({ demandes: initial }: { demandes: DemandeResponse[] }) {
  const [demandes, setDemandes] = useState(initial);
  const [filtre, setFiltre] = useState("tous");
  const [selected, setSelected] = useState<DemandeResponse | null>(null);

  const refresh = useCallback(async () => {
    try {
      const data = await api.listerDemandes();
      setDemandes(data);
    } catch {}
  }, []);

  // Actualisation auto toutes les 30 secondes
  useEffect(() => {
    const interval = setInterval(refresh, 30000);
    return () => clearInterval(interval);
  }, [refresh]);

  const filtrees = filtre === "tous"
    ? demandes
    : demandes.filter(d => d.statut === filtre);

  return (
    <div className="min-h-screen bg-gray-100">
      {selected && <DemandeModal demande={selected} onClose={() => setSelected(null)} />}

      <div className="bg-blue-700 text-white px-8 py-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">🛠️ Dashboard Admin — Asepeli</h1>
          <p className="text-blue-200 text-sm mt-1">Gestion des demandes clients</p>
        </div>
        <button
          onClick={refresh}
          className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm transition"
        >
          🔄 Actualiser
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total", value: demandes.length, color: "bg-blue-500" },
            { label: "En attente", value: demandes.filter(d => d.statut === "en_attente").length, color: "bg-yellow-500" },
            { label: "En cours", value: demandes.filter(d => d.statut === "en_cours").length, color: "bg-orange-500" },
            { label: "Terminées", value: demandes.filter(d => d.statut === "termine").length, color: "bg-green-500" },
          ].map((s) => (
            <div key={s.label} className={`${s.color} text-white rounded-xl p-4 text-center shadow`}>
              <div className="text-3xl font-bold">{s.value}</div>
              <div className="text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Filtres */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {STATUTS.map(s => (
            <button
              key={s}
              onClick={() => setFiltre(s)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                filtre === s ? "bg-blue-700 text-white" : "bg-white text-gray-600 hover:bg-blue-50"
              }`}
            >
              {s.replace("_", " ")}
            </button>
          ))}
        </div>

        {/* Tableau */}
        <div className="bg-white rounded-xl shadow overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-500 uppercase text-xs">
              <tr>
                <th className="px-6 py-4 text-left">Nom</th>
                <th className="px-6 py-4 text-left">Service</th>
                <th className="px-6 py-4 text-left">Ville</th>
                <th className="px-6 py-4 text-left">Téléphone</th>
                <th className="px-6 py-4 text-left">Statut</th>
                <th className="px-6 py-4 text-left">Date</th>
                <th className="px-6 py-4 text-left">Détail</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtrees.length === 0 ? (
                <tr><td colSpan={7} className="text-center py-12 text-gray-400">Aucune demande</td></tr>
              ) : filtrees.map((d) => (
                <tr key={d.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-800">{d.nom}</td>
                  <td className="px-6 py-4 capitalize text-gray-600">{d.service}</td>
                  <td className="px-6 py-4 text-gray-600">{d.ville}</td>
                  <td className="px-6 py-4 text-gray-600">{d.telephone}</td>
                  <td className="px-6 py-4">
                    <StatutSelect id={d.id} statut={d.statut ?? "en_attente"} />
                  </td>
                  <td className="px-6 py-4 text-gray-400">
                    {d.created_at ? new Date(d.created_at).toLocaleDateString("fr-FR") : "-"}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => setSelected(d)}
                      className="text-blue-600 hover:underline text-xs font-medium"
                    >
                      Voir →
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
