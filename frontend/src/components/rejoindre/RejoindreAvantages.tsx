const avantages = [
  {
    icon: "📱",
    title: "Missions via WhatsApp",
    description: "Recevez vos missions directement sur WhatsApp. Pas d'application à installer, pas de complication.",
    color: "bg-green-50 border-green-100",
    iconBg: "bg-green-100 text-green-600",
  },
  {
    icon: "💰",
    title: "Paiement rapide",
    description: "Payé en 48h maximum après chaque mission via Mobile Money (M-Pesa, Orange Money, Airtel Money).",
    color: "bg-yellow-50 border-yellow-100",
    iconBg: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: "⭐",
    title: "Badge certifié ASEPELI",
    description: "Obtenez le badge de technicien certifié. Ça rassure les clients et vous démarque de la concurrence.",
    color: "bg-blue-50 border-blue-100",
    iconBg: "bg-blue-100 text-blue-600",
  },
  {
    icon: "📈",
    title: "Plus de clients",
    description: "ASEPELI vous envoie des clients régulièrement. Finies les journées sans travail.",
    color: "bg-purple-50 border-purple-100",
    iconBg: "bg-purple-100 text-purple-600",
  },
  {
    icon: "🛡️",
    title: "Couverture assurance",
    description: "En cas de problème sur chantier, ASEPELI vous couvre. Travaillez l'esprit tranquille.",
    color: "bg-red-50 border-red-100",
    iconBg: "bg-red-100 text-red-600",
  },
  {
    icon: "📚",
    title: "Formation continue",
    description: "Accédez à des formations pour améliorer vos compétences et obtenir de meilleures missions.",
    color: "bg-indigo-50 border-indigo-100",
    iconBg: "bg-indigo-100 text-indigo-600",
  },
];

export default function RejoindreAvantages() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 rounded-full px-4 py-2 text-sm font-medium mb-4">
            🎯 Pourquoi nous rejoindre
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Les avantages du réseau ASEPELI
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Plus de 150 techniciens font confiance à ASEPELI pour développer leur activité à Kinshasa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {avantages.map((a, i) => (
            <div key={i} className={`${a.color} border rounded-2xl p-6 hover:shadow-md transition-shadow`}>
              <div className={`w-12 h-12 ${a.iconBg} rounded-xl flex items-center justify-center text-2xl mb-4`}>
                {a.icon}
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{a.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{a.description}</p>
            </div>
          ))}
        </div>

        {/* Témoignage technicien */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-4xl mb-4">💬</div>
            <p className="text-xl md:text-2xl font-medium italic mb-6">
              "Avant ASEPELI, je cherchais du travail chaque matin. Maintenant j'ai 3-4 missions par semaine,
              je suis payé rapidement et mes clients sont contents. C'est la meilleure décision de ma carrière."
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-bold text-lg">
                JK
              </div>
              <div className="text-left">
                <p className="font-semibold">Jean-Baptiste K.</p>
                <p className="text-green-200 text-sm">⚡ Électricien — Réseau ASEPELI depuis 2023</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
