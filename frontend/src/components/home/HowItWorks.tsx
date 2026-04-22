"use client";

import { PhoneCall, ClipboardList, Wrench, ThumbsUp } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    number: "01",
    title: "Contactez-nous",
    description:
      "Appelez-nous ou envoyez un message WhatsApp. Décrivez votre problème en quelques mots.",
    color: "bg-blue-100 text-blue-600",
    border: "border-blue-200",
  },
  {
    icon: ClipboardList,
    number: "02",
    title: "Diagnostic gratuit",
    description:
      "Un technicien évalue votre besoin et vous propose un devis clair et transparent.",
    color: "bg-purple-100 text-purple-600",
    border: "border-purple-200",
  },
  {
    icon: Wrench,
    number: "03",
    title: "Intervention à domicile",
    description:
      "Notre technicien vérifié se déplace chez vous à l'heure convenue pour réaliser le service.",
    color: "bg-orange-100 text-orange-600",
    border: "border-orange-200",
  },
  {
    icon: ThumbsUp,
    number: "04",
    title: "Paiement & Satisfaction",
    description:
      "Payez uniquement si vous êtes satisfait, via Mobile Money. Garantie incluse.",
    color: "bg-green-100 text-green-600",
    border: "border-green-200",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white" id="comment-ca-marche">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            🔧 Comment ça marche
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, rapide et transparent
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            En 4 étapes seulement, votre problème est réglé. 
            Pas de surprise, pas de frais cachés.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Ligne connecteur desktop */}
          <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200 w-1/2 mx-auto" 
               style={{left: '12.5%', right: '12.5%', width: '75%'}} />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="flex flex-col items-center text-center group">
                  
                  {/* Icône */}
                  <div className={`relative w-20 h-20 rounded-2xl ${step.color} border-2 ${step.border} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm z-10 bg-white`}>
                    <Icon className="w-8 h-8" />
                    <span className="absolute -top-3 -right-3 w-7 h-7 bg-gray-900 text-white text-xs font-black rounded-full flex items-center justify-center">
                      {step.number.slice(1)}
                    </span>
                  </div>

                  {/* Texte */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA bas */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-xl">
            <div className="text-left">
              <p className="font-bold text-lg">Prêt à commencer ?</p>
              <p className="text-blue-100 text-sm">Obtenez votre devis gratuit en moins de 5 minutes</p>
            </div>
            <a
              href="https://wa.me/243000000000?text=Bonjour%20ASEPELI,%20je%20voudrais%20un%20devis"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors shadow"
            >
              📲 Devis WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
