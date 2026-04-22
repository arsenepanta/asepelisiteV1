const plans = [
  {
    name: "Essentiel",
    emoji: "🔧",
    price: "Gratuit",
    priceDetail: "Devis sans engagement",
    color: "blue",
    description: "Pour une intervention ponctuelle",
    features: [
      { text: "1 technicien certifié", ok: true },
      { text: "Devis gratuit sous 24h", ok: true },
      { text: "Paiement après intervention", ok: true },
      { text: "Rapport photo", ok: true },
      { text: "Garantie satisfaction", ok: true },
      { text: "Suivi prioritaire", ok: false },
      { text: "Technicien dédié", ok: false },
      { text: "Interventions illimitées", ok: false },
    ],
    cta: "Demander un devis",
    ctaLink: "#devis",
    popular: false,
  },
  {
    name: "Confort",
    emoji: "⭐",
    price: "$49",
    priceDetail: "par mois",
    color: "green",
    description: "Pour un suivi régulier de votre domicile",
    features: [
      { text: "2 interventions/mois incluses", ok: true },
      { text: "Devis gratuit sous 2h", ok: true },
      { text: "Paiement Mobile Money", ok: true },
      { text: "Rapport photo complet", ok: true },
      { text: "Garantie satisfaction", ok: true },
      { text: "Suivi prioritaire", ok: true },
      { text: "Technicien dédié", ok: false },
      { text: "Interventions illimitées", ok: false },
    ],
    cta: "Choisir Confort",
    ctaLink: "#devis",
    popular: true,
  },
  {
    name: "Premium",
    emoji: "👑",
    price: "$99",
    priceDetail: "par mois",
    color: "purple",
    description: "Pour une tranquillité totale",
    features: [
      { text: "Interventions illimitées", ok: true },
      { text: "Devis gratuit sous 30 min", ok: true },
      { text: "Paiement Mobile Money", ok: true },
      { text: "Rapport photo + vidéo", ok: true },
      { text: "Garantie satisfaction", ok: true },
      { text: "Suivi prioritaire 24/7", ok: true },
      { text: "Technicien dédié", ok: true },
      { text: "Urgences 24h/24", ok: true },
    ],
    cta: "Choisir Premium",
    ctaLink: "#devis",
    popular: false,
  },
];

const colorMap: Record<string, { bg: string; border: string; btn: string; badge: string }> = {
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    btn: "bg-blue-600 hover:bg-blue-700 text-white",
    badge: "bg-blue-100 text-blue-700",
  },
  green: {
    bg: "bg-white",
    border: "border-green-400 ring-2 ring-green-400",
    btn: "bg-green-500 hover:bg-green-600 text-white",
    badge: "bg-green-100 text-green-700",
  },
  purple: {
    bg: "bg-purple-50",
    border: "border-purple-200",
    btn: "bg-purple-600 hover:bg-purple-700 text-white",
    badge: "bg-purple-100 text-purple-700",
  },
};

export default function TarifsPlans() {
  return (
    <section className="py-20 bg-gray-50" id="plans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 rounded-full px-4 py-2 text-sm font-medium mb-4">
            📦 Nos packs
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choisissez votre formule
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Que ce soit pour une intervention ponctuelle ou un suivi mensuel,
            nous avons la formule qu'il vous faut.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => {
            const c = colorMap[plan.color];
            return (
              <div
                key={i}
                className={`relative rounded-3xl border-2 p-8 ${c.bg} ${c.border} flex flex-col`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-green-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow">
                      ⭐ Le plus populaire
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium mb-4 ${c.badge}`}>
                    {plan.emoji} {plan.name}
                  </div>
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500 mb-1">{plan.priceDetail}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm">
                      <span className={f.ok ? "text-green-500 text-base" : "text-gray-300 text-base"}>
                        {f.ok ? "✓" : "✗"}
                      </span>
                      <span className={f.ok ? "text-gray-700" : "text-gray-400"}>{f.text}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.ctaLink}
                  className={`w-full text-center py-3 rounded-xl font-semibold transition-colors ${c.btn}`}
                >
                  {plan.cta}
                </a>
              </div>
            );
          })}
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          💡 Tous les prix sont en USD. Paiement accepté en CDF via Mobile Money.
        </p>
      </div>
    </section>
  );
}
