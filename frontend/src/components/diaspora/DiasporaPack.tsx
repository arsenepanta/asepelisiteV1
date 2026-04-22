const features = [
  { icon: "📸", text: "Rapport photos avant/après" },
  { icon: "💬", text: "Suivi WhatsApp en temps réel" },
  { icon: "👷", text: "Technicien vérifié & assuré" },
  { icon: "📋", text: "Devis détaillé en 24h" },
  { icon: "💳", text: "Paiement international sécurisé" },
  { icon: "🔁", text: "Retravaux gratuits si insatisfait" },
  { icon: "📞", text: "Conseiller dédié francophone" },
  { icon: "⏱️", text: "Intervention sous 48h" },
];

const plans = [
  {
    name: "Diaspora Essentiel",
    price: "25",
    currency: "€",
    period: "par intervention",
    desc: "Pour les petites réparations et urgences ponctuelles.",
    features: ["Rapport photos", "Suivi WhatsApp", "1 technicien", "Devis gratuit"],
    cta: "Commencer",
    highlight: false,
  },
  {
    name: "Diaspora Premium",
    price: "79",
    currency: "€",
    period: "par mois",
    desc: "Gestion complète de votre bien. Idéal pour propriétaires.",
    features: [
      "Tout l'essentiel",
      "Conseiller dédié",
      "Interventions illimitées",
      "Rapport mensuel complet",
      "Paiement multi-devises",
      "Priorité 24h/7j",
    ],
    cta: "Choisir Premium",
    highlight: true,
  },
  {
    name: "Diaspora Famille",
    price: "49",
    currency: "€",
    period: "par intervention",
    desc: "Pour les travaux importants. Accompagnement complet.",
    features: [
      "Devis en 24h",
      "Suivi quotidien",
      "Photos d'avancement",
      "Garantie résultat",
    ],
    cta: "Nous contacter",
    highlight: false,
  },
];

export default function DiasporaPack() {
  return (
    <section id="pack-diaspora" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 rounded-full px-4 py-2 text-sm font-medium mb-4">
            💎 Offres diaspora
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Des formules pensées pour vous
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Payez en euros depuis l'étranger, on s'occupe de tout à Kinshasa.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-8 border-2 transition-all ${
                plan.highlight
                  ? "bg-blue-600 border-blue-600 text-white shadow-2xl shadow-blue-500/30 scale-105"
                  : "bg-white border-gray-100 text-gray-900"
              }`}
            >
              {plan.highlight && (
                <div className="inline-flex items-center gap-1 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full mb-4">
                  ⭐ Plus populaire
                </div>
              )}
              <h3 className={`font-bold text-xl mb-2 ${plan.highlight ? "text-white" : "text-gray-900"}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${plan.highlight ? "text-blue-100" : "text-gray-500"}`}>
                {plan.desc}
              </p>
              <div className="flex items-end gap-1 mb-6">
                <span className={`text-4xl font-black ${plan.highlight ? "text-white" : "text-gray-900"}`}>
                  {plan.currency}{plan.price}
                </span>
                <span className={`text-sm mb-1 ${plan.highlight ? "text-blue-200" : "text-gray-400"}`}>
                  {plan.period}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0 ${
                      plan.highlight ? "bg-white/20 text-white" : "bg-green-100 text-green-600"
                    }`}>✓</span>
                    <span className={plan.highlight ? "text-blue-100" : "text-gray-600"}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/243XXXXXXXXX"
                target="_blank"
                className={`block text-center font-bold py-3 rounded-xl transition-all ${
                  plan.highlight
                    ? "bg-white text-blue-600 hover:bg-blue-50"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Features grid */}
        <div className="bg-white rounded-3xl border border-gray-100 p-8">
          <h3 className="text-center font-bold text-gray-900 text-xl mb-8">
            ✅ Inclus dans tous nos services diaspora
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((f) => (
              <div key={f.text} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                <span className="text-2xl">{f.icon}</span>
                <span className="text-sm text-gray-700 font-medium">{f.text}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
