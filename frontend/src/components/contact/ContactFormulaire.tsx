"use client";
import { useState } from "react";
import { api, DemandeCreate } from "@/lib/api";

const services = [
  "plomberie", "electricite", "peinture", "menuiserie", "climatisation", "nettoyage"
];

export default function ContactFormulaire() {
  const [form, setForm] = useState<DemandeCreate>({
    nom: "", telephone: "", email: "", service: "",
    description: "", adresse: "", ville: ""
  });
  const [statut, setStatut] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatut("loading");
    try {
      await api.creerDemande(form);
      setStatut("success");
      setMessage("✅ Votre demande a été envoyée ! Nous vous contactons bientôt.");
      setForm({ nom: "", telephone: "", email: "", service: "", description: "", adresse: "", ville: "" });
    } catch {
      setStatut("error");
      setMessage("❌ Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <section className="py-20 bg-white" id="formulaire">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left - Formulaire */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 rounded-full px-4 py-2 text-sm font-medium mb-6">
              ✉️ Formulaire de contact
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Envoyez-nous un message
            </h2>
            <p className="text-gray-600 mb-8">
              Remplissez ce formulaire, notre équipe vous contacte dans les 30 minutes.
            </p>

            {statut === "success" && (
              <div className="bg-green-100 border border-green-400 text-green-800 px-4 py-3 rounded-xl mb-6">
                {message}
              </div>
            )}
            {statut === "error" && (
              <div className="bg-red-100 border border-red-400 text-red-800 px-4 py-3 rounded-xl mb-6">
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nom complet *</label>
                  <input name="nom" value={form.nom} onChange={handleChange} required
                    type="text" placeholder="Jean Mbala"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Téléphone *</label>
                  <input name="telephone" value={form.telephone} onChange={handleChange} required
                    type="text" placeholder="+243 8XX XXX XXX"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input name="email" value={form.email} onChange={handleChange}
                  type="email" placeholder="jean@email.com"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Service demandé *</label>
                <select name="service" value={form.service} onChange={handleChange} required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors">
                  <option value="">-- Choisir un service --</option>
                  {services.map(s => (
                    <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Adresse *</label>
                  <input name="adresse" value={form.adresse} onChange={handleChange} required
                    type="text" placeholder="Avenue Lumumba 12"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Ville *</label>
                  <input name="ville" value={form.ville} onChange={handleChange} required
                    type="text" placeholder="Kinshasa"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Description *</label>
                <textarea name="description" value={form.description} onChange={handleChange} required rows={4}
                  placeholder="Décrivez votre problème en détail..."
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors resize-none" />
              </div>

              <button type="submit" disabled={statut === "loading"}
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 rounded-xl transition disabled:opacity-50">
                {statut === "loading" ? "Envoi en cours..." : "Envoyer ma demande →"}
              </button>
            </form>
          </div>

          {/* Right - Infos */}
          <div className="bg-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Pourquoi nous choisir ?</h3>
            <ul className="space-y-4">
              {[
                "⚡ Intervention en 30 minutes",
                "✅ Artisans certifiés et vérifiés",
                "💰 Devis gratuit sans engagement",
                "🛡️ Garantie satisfaction 100%",
                "📞 Support disponible 24h/24",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg">{item}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
