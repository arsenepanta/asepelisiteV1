"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Mama Célestine K.",
    role: "Cliente — Kinshasa, Gombe",
    avatar: "👩🏾",
    stars: 5,
    text: "J'avais une fuite d'eau depuis 3 jours. ASEPELI a envoyé un plombier en moins de 2 heures. Travail sérieux, prix honnête. J'ai payé par M-Pesa sans problème. Je recommande à toute la famille !",
    service: "Plomberie",
    date: "Il y a 2 semaines",
  },
  {
    name: "Patrick M.",
    role: "Propriétaire immeuble — Limete",
    avatar: "👨🏾‍💼",
    stars: 5,
    text: "Nous gérons 3 immeubles à Limete. ASEPELI est notre partenaire pour toutes les interventions électriques et plomberie. Réactifs, professionnels, et les techniciens sont vraiment vérifiés. Pack Premium, excellent rapport qualité/prix.",
    service: "Pack Premium",
    date: "Il y a 1 mois",
  },
  {
    name: "Sandrine B.",
    role: "Cliente — Ngaliema",
    avatar: "👩🏾‍🦱",
    stars: 5,
    text: "Le climatiseur de mon salon tombait en panne chaque mois avec d'autres prestataires. ASEPELI a fait un vrai diagnostic, réparation complète. 4 mois après, zéro problème. Merci !",
    service: "Climatisation",
    date: "Il y a 3 semaines",
  },
  {
    name: "Jean-Pierre L.",
    role: "Restaurateur — Bandalungwa",
    avatar: "👨🏾‍🍳",
    stars: 5,
    text: "J'avais besoin de peindre mon restaurant avant une ouverture. En 48h, ASEPELI a mobilisé une équipe de 3 peintres. Travail impeccable, délai respecté. Mon restaurant est magnifique !",
    service: "Peinture",
    date: "Il y a 5 jours",
  },
  {
    name: "Anastasie M.",
    role: "Cliente diaspora — Paris → Kinshasa",
    avatar: "👩🏾‍💻",
    stars: 5,
    text: "Je vis à Paris et ma maman est à Kinshasa. Grâce à ASEPELI, je peux payer depuis la France pour des interventions chez elle. Service diaspora parfait, communication en français, suivi WhatsApp. Sérénité totale !",
    service: "Service Diaspora",
    date: "Il y a 2 mois",
  },
  {
    name: "Didier N.",
    role: "Client — Masina",
    avatar: "👨🏾",
    stars: 4,
    text: "Bonne expérience globale. Le technicien était compétent et poli. Petit délai dépassé de 30 minutes mais ils ont prévenu à l'avance. Honnêteté appréciée. Je reviendrai.",
    service: "Électricité",
    date: "Il y a 1 semaine",
  },
];

function StarRating({ stars }: { stars: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className={s <= stars ? "text-yellow-400" : "text-gray-300"}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="temoignages">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-yellow-100 text-yellow-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            ⭐ Témoignages
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Plus de <strong>500 clients satisfaits</strong> à Kinshasa et dans la diaspora.
          </p>

          {/* Score global */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex gap-1 text-2xl">
              {[1,2,3,4,5].map(s => <span key={s} className="text-yellow-400">★</span>)}
            </div>
            <span className="text-3xl font-black text-gray-900">4.9</span>
            <span className="text-gray-500 text-sm">/5 — basé sur 500+ avis</span>
          </div>
        </div>

        {/* Carousel desktop */}
        <div className="hidden md:grid grid-cols-3 gap-6 mb-12">
          {testimonials.slice(0, 3).map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{t.avatar}</span>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
              <StarRating stars={t.stars} />
              <p className="text-gray-700 text-sm mt-3 leading-relaxed italic">
                "{t.text}"
              </p>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                <span className="text-xs font-semibold bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                  {t.service}
                </span>
                <span className="text-xs text-gray-400">{t.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel mobile */}
        <div
          className="md:hidden"
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 min-h-[280px]">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">{testimonials[active].avatar}</span>
              <div>
                <p className="font-bold text-gray-900">{testimonials[active].name}</p>
                <p className="text-gray-500 text-sm">{testimonials[active].role}</p>
              </div>
            </div>
            <StarRating stars={testimonials[active].stars} />
            <p className="text-gray-700 text-sm mt-3 leading-relaxed italic">
              "{testimonials[active].text}"
            </p>
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
              <span className="text-xs font-semibold bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                {testimonials[active].service}
              </span>
              <span className="text-xs text-gray-400">{testimonials[active].date}</span>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === active ? "bg-blue-600 w-6" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Rangée 2 desktop */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {testimonials.slice(3, 6).map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{t.avatar}</span>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
              <StarRating stars={t.stars} />
              <p className="text-gray-700 text-sm mt-3 leading-relaxed italic">
                "{t.text}"
              </p>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                <span className="text-xs font-semibold bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                  {t.service}
                </span>
                <span className="text-xs text-gray-400">{t.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Logos confiance */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm mb-6">Paiement sécurisé via</p>
          <div className="flex flex-wrap justify-center gap-6 items-center">
            {["📱 M-Pesa", "📱 Airtel Money", "📱 Orange Money", "💳 Carte Visa"].map((logo, i) => (
              <span key={i} className="text-sm font-semibold text-gray-600 bg-gray-100 px-4 py-2 rounded-full">
                {logo}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
