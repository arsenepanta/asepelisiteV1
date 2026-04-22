"use client";

import { useState } from "react";
import Link from "next/link";

const services = [
  {
    emoji: "🔧",
    title: "Plomberie",
    description: "Fuite d'eau, robinetterie, installation sanitaire, débouchage canalisation.",
    price: "À partir de 5 000 FC",
    delay: "Intervention en 2h",
    tags: ["Fuite", "Robinet", "WC", "Tuyaux"],
    color: "blue",
  },
  {
    emoji: "⚡",
    title: "Électricité",
    description: "Panne de courant, installation prise/interrupteur, tableau électrique, câblage.",
    price: "À partir de 7 000 FC",
    delay: "Intervention en 3h",
    tags: ["Panne", "Prise", "Câblage", "Tableau"],
    color: "yellow",
  },
  {
    emoji: "🎨",
    title: "Peinture",
    description: "Peinture intérieure et extérieure, ravalement façade, enduit, décoration murale.",
    price: "À partir de 20 000 FC",
    delay: "Devis sous 24h",
    tags: ["Intérieur", "Façade", "Enduit", "Déco"],
    color: "green",
  },
  {
    emoji: "❄️",
    title: "Climatisation",
    description: "Installation, entretien, nettoyage et réparation de climatiseurs toutes marques.",
    price: "À partir de 15 000 FC",
    delay: "Intervention en 4h",
    tags: ["Installation", "Entretien", "Réparation"],
    color: "cyan",
  },
  {
    emoji: "🚚",
    title: "Livraison & Déménagement",
    description: "Transport de meubles, déménagement local, livraison de matériaux de construction.",
    price: "À partir de 10 000 FC",
    delay: "Disponible 7j/7",
    tags: ["Meubles", "Déménagement", "Matériaux"],
    color: "orange",
  },
  {
    emoji: "🏗️",
    title: "Maçonnerie",
    description: "Petits travaux de construction, réparation mur, carrelage, rénovation.",
    price: "Sur devis",
    delay: "Devis sous 48h",
    tags: ["Construction", "Carrelage", "Rénovation"],
    color: "red",
  },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-50 border-blue-100 hover:border-blue-300",
  yellow: "bg-yellow-50 border-yellow-100 hover:border-yellow-300",
  green: "bg-green-50 border-green-100 hover:border-green-300",
  cyan: "bg-cyan-50 border-cyan-100 hover:border-cyan-300",
  orange: "bg-orange-50 border-orange-100 hover:border-orange-300",
  red: "bg-red-50 border-red-100 hover:border-red-300",
};

const tagColorMap: Record<string, string> = {
  blue: "bg-blue-100 text-blue-700",
  yellow: "bg-yellow-100 text-yellow-700",
  green: "bg-green-100 text-green-700",
  cyan: "bg-cyan-100 text-cyan-700",
  orange: "bg-orange-100 text-orange-700",
  red: "bg-red-100 text-red-700",
};

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            🛠️ Nos Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tous vos besoins, un seul appel
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Des techniciens vérifiés et expérimentés pour chaque type de travaux,
            disponibles à Kinshasa et ses environs.
          </p>
        </div>

        {/* Grille services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className={`
                relative border-2 rounded-2xl p-6 cursor-pointer
                transition-all duration-300
                ${colorMap[service.color]}
                ${hovered === index ? "shadow-xl -translate-y-1" : "shadow-sm"}
              `}
            >
              {/* Emoji */}
              <div className="text-4xl mb-4">{service.emoji}</div>

              {/* Titre + Prix */}
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
              </div>

              {/* Prix & délai */}
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-sm font-semibold text-gray-700 bg-white px-3 py-1 rounded-full shadow-sm border">
                  💰 {service.price}
                </span>
                <span className="text-sm font-semibold text-gray-500 bg-white px-3 py-1 rounded-full shadow-sm border">
                  ⏱ {service.delay}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {service.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`text-xs font-medium px-2 py-1 rounded-full ${tagColorMap[service.color]}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <a
                href={`https://wa.me/243000000000?text=Bonjour%20ASEPELI,%20j'ai%20besoin%20d'un%20service%20de%20${service.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-gray-900 text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-gray-700 transition-colors"
              >
                📲 Demander ce service
              </a>
            </div>
          ))}
        </div>

        {/* Bannière bas */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-center text-white">
          <p className="text-lg font-semibold mb-2">
            🔍 Vous ne trouvez pas ce dont vous avez besoin ?
          </p>
          <p className="text-gray-400 mb-6">
            Contactez-nous, nous avons des prestataires pour presque tous les corps de métier.
          </p>
          <a
            href="https://wa.me/243000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-3 rounded-xl transition-colors"
          >
            💬 Parler à un conseiller
          </a>
        </div>

      </div>
    </section>
  );
}
