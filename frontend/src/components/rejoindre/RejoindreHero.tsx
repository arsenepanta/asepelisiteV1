export default function RejoindreHero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-80 h-80 bg-green-400 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-yellow-400 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div>
            <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2 text-sm mb-6 text-green-300">
              👷 Réseau de techniciens ASEPELI
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Rejoignez le réseau{" "}
              <span className="text-green-400">ASEPELI</span>{" "}
              et boostez votre activité
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Vous êtes plombier, électricien, peintre ou maçon à Kinshasa ?
              Rejoignez notre réseau de techniciens vérifiés et recevez des missions
              régulières, payées rapidement via Mobile Money.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              {[
                { icon: "💰", text: "Paiement rapide Mobile Money" },
                { icon: "📱", text: "Missions via WhatsApp" },
                { icon: "⭐", text: "Badge technicien certifié" },
                { icon: "📈", text: "Plus de clients garantis" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm">
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#formulaire"
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-8 rounded-2xl transition-all hover:scale-105 shadow-lg"
              >
                👷 Postuler maintenant
              </a>
              <a
                href="https://wa.me/243XXXXXXXXX?text=Bonjour, je souhaite rejoindre le réseau ASEPELI comme technicien"
                target="_blank"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold py-4 px-8 rounded-2xl transition-all"
              >
                💬 Nous écrire sur WhatsApp
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: "150+", label: "Techniciens actifs", icon: "👷", color: "from-green-500/20 to-green-600/20 border-green-500/30" },
              { number: "500+", label: "Missions réalisées", icon: "✅", color: "from-blue-500/20 to-blue-600/20 border-blue-500/30" },
              { number: "48h", label: "Délai paiement max", icon: "💰", color: "from-yellow-500/20 to-yellow-600/20 border-yellow-500/30" },
              { number: "4.8★", label: "Note moyenne réseau", icon: "⭐", color: "from-purple-500/20 to-purple-600/20 border-purple-500/30" },
            ].map((stat, i) => (
              <div key={i} className={`bg-gradient-to-br ${stat.color} border rounded-2xl p-6 text-center`}>
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
