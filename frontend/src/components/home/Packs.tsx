"use client";

import { Check, Star, Zap } from "lucide-react";
import Link from "next/link";

const packs = [
  {
    name: "Essentiel",
    price: "15 000",
    currency: "FC",
    description: "Idéal pour un service ponctuel",
    color: "from-slate-600 to-slate-800",
    badge: null,
    features: [
      "1 intervention à domicile",
      "Diagnostic gratuit",
      "Technicien vérifié",
      "Garantie 7 jours",
      "Paiement Mobile Money",
    ],
    notIncluded: [
      "Pièces de rechange",
      "Suivi prioritaire",
    ],
    cta: "Choisir ce pack",
    href: "/contact?pack=essentiel",
  },
  {
    name: "Confort",
    price: "45 000",
    currency: "FC",
    description: "Le plus populaire pour les familles",
    color: "from-blue-600 to-blue-800",
    badge: "⭐ Populaire",
    features: [
      "3 interventions au choix",
      "Diagnostic gratuit",
      "Technicien vérifié",
      "Garantie 30 jours",
      "Paiement Mobile Money",
      "Suivi WhatsApp dédié",
      "Priorité de passage",
    ],
    notIncluded: [],
    cta: "Choisir ce pack",
    href: "/contact?pack=confort",
  },
  {
    name: "Premium",
    price: "120 000",
    currency: "FC",
    description: "Pour les entreprises et immeubles",
    color: "from-amber-500 to-orange-600",
    badge: "🏆 Entreprise",
    features: [
      "10 interventions au choix",
      "Diagnostic gratuit",
      "Technicien senior vérifié",
      "Garantie 90 jours",
      "Paiement Mobile Money",
      "Suivi WhatsApp dédié",
      "Priorité absolue 24h/7j",
      "Rapport d'intervention",
      "Pièces à tarif préférentiel",
    ],
    notIncluded: [],
    cta: "Nous contacter",
    href: "/contact?pack=premium",
  },
];

export default function Packs() {
  return (
    <section className="py-20 bg-gray-50" id="packs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            💼 Nos Packs
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Des formules adaptées à vos besoins
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choisissez le pack qui correspond à votre situation. 
            Paiement 100% sécurisé par Mobile Money.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {packs.map((pack, index) => (
            <div
              key={pack.name}
              className={`relative rounded-2xl overflow-hidden shadow-lg flex flex-col ${
                pack.badge === "⭐ Populaire" 
                  ? "ring-4 ring-blue-500 scale-105 shadow-2xl" 
                  : ""
              }`}
            >
              {/* Badge */}
              {pack.badge && (
                <div className="absolute top-4 right-4 bg-white text-blue-700 text-xs font-bold px-3 py-1 rounded-full shadow">
                  {pack.badge}
                </div>
              )}

              {/* Header Card */}
              <div className={`bg-gradient-to-br ${pack.color} p-8 text-white`}>
                <h3 className="text-xl font-bold mb-2">{pack.name}</h3>
                <p className="text-white/80 text-sm mb-4">{pack.description}</p>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-black">{pack.price}</span>
                  <span className="text-lg font-semibold mb-1">{pack.currency}</span>
                </div>
              </div>

              {/* Features */}
              <div className="bg-white p-8 flex-1 flex flex-col">
                <ul className="space-y-3 flex-1">
                  {pack.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                  {pack.notIncluded.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 opacity-40">
                      <div className="w-5 h-5 shrink-0 mt-0.5 flex items-center justify-center">
                        <div className="w-3 h-0.5 bg-gray-400 rounded" />
                      </div>
                      <span className="text-gray-500 text-sm line-through">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={pack.href}
                  className={`mt-8 block text-center py-3 px-6 rounded-xl font-semibold transition-all duration-200 ${
                    pack.badge === "⭐ Populaire"
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                  }`}
                >
                  {pack.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Note bas */}
        <p className="text-center text-gray-500 text-sm mt-10">
          💡 Paiement accepté via <strong>M-Pesa, Airtel Money, Orange Money</strong> — 
          Devis gratuit et sans engagement
        </p>
      </div>
    </section>
  );
}
