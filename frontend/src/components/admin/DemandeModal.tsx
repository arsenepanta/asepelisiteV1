"use client";
import { DemandeResponse } from "@/lib/api";

export default function DemandeModal({
  demande,
  onClose,
}: {
  demande: DemandeResponse;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold"
        >×</button>

        <h2 className="text-xl font-bold text-gray-800 mb-6">📋 Détail de la demande #{demande.id}</h2>

        <div className="space-y-4">
          {[
            { label: "Nom", value: demande.nom },
            { label: "Email", value: demande.email },
            { label: "Téléphone", value: demande.telephone },
            { label: "Ville", value: demande.ville },
            { label: "Service", value: demande.service },
            { label: "Statut", value: demande.statut?.replace("_", " ") },
            { label: "Date", value: demande.created_at ? new Date(demande.created_at).toLocaleString("fr-FR") : "-" },
          ].map(({ label, value }) => (
            <div key={label} className="flex justify-between border-b pb-2">
              <span className="text-gray-500 font-medium">{label}</span>
              <span className="text-gray-800 capitalize">{value}</span>
            </div>
          ))}

          {demande.message && (
            <div className="pt-2">
              <p className="text-gray-500 font-medium mb-1">Message</p>
              <p className="text-gray-700 bg-gray-50 rounded-lg p-3 text-sm">{demande.message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
