const steps = [
  {
    num: "01",
    emoji: "💬",
    title: "Contactez-nous sur WhatsApp",
    desc: "Décrivez les travaux depuis où vous êtes. Envoyez des photos si possible. Notre conseiller répond en moins de 30 minutes.",
    detail: "Disponible 7j/7 · Français, Lingala, Swahili",
    color: "bg-blue-50 border-blue-100",
    numColor: "text-blue-600",
  },
  {
    num: "02",
    emoji: "📋",
    title: "Recevez un devis détaillé",
    desc: "On visite votre propriété, on évalue les travaux et on vous envoie un devis complet avec photos et estimation précise.",
    detail: "Devis gratuit · Visite sous 24h",
    color: "bg-yellow-50 border-yellow-100",
    numColor: "text-yellow-600",
  },
  {
    num: "03",
    emoji: "✅",
    title: "Validez et payez en ligne",
    desc: "Vous approuvez le devis depuis votre téléphone et payez en toute sécurité par virement, carte ou PayPal.",
    detail: "EUR, USD, GBP · 100% sécurisé",
    color: "bg-green-50 border-green-100",
    numColor: "text-green-600",
  },
  {
    num: "04",
    emoji: "🔨",
    title: "Suivi en temps réel",
    desc: "Nos techniciens interviennent. Vous recevez des photos d'avancement et un rapport final avec avant/après.",
    detail: "Rapport photos · WhatsApp live",
    color: "bg-purple-50 border-purple-100",
    numColor: "text-purple-600",
  },
];

export default function DiasporaHow() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 rounded-full px-4 py-2 text-sm font-medium mb-4">
            🚀 Simple & transparent
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comment ça marche depuis l'étranger ?
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            4 étapes simples pour gérer vos travaux à Kinshasa depuis Paris, Bruxelles ou New York.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              {/* Connector */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-200 z-0" style={{ width: "calc(100% - 2rem)", left: "calc(100% - 0rem)" }} />
              )}
              <div className={`relative border rounded-2xl p-6 ${step.color} z-10`}>
                <div className={`text-5xl font-black ${step.numColor} opacity-20 absolute top-4 right-4`}>
                  {step.num}
                </div>
                <div className="text-3xl mb-4">{step.emoji}</div>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{step.desc}</p>
                <div className="text-xs font-medium text-gray-500 bg-white/60 rounded-lg px-3 py-1.5 inline-block">
                  {step.detail}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
