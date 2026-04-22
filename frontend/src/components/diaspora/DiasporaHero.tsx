export default function DiasporaHero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
      {/* Déco background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Texte */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-2 text-sm mb-6">
              🌍 Service spécial diaspora
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Vous êtes à l'étranger,{" "}
              <span className="text-yellow-400">votre famille</span>{" "}
              est à Kinshasa ?
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              Gérez les travaux de votre maison à distance. ASEPELI s'occupe de tout :
              devis, techniciens vérifiés, suivi en temps réel et rapport photos.
              Vous payez depuis la France, la Belgique ou partout dans le monde.
            </p>

            {/* Flags */}
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { flag: "🇫🇷", pays: "France" },
                { flag: "🇧🇪", pays: "Belgique" },
                { flag: "🇨🇦", pays: "Canada" },
                { flag: "🇺🇸", pays: "USA" },
                { flag: "🇬🇧", pays: "UK" },
                { flag: "🇨🇭", pays: "Suisse" },
              ].map((p) => (
                <div key={p.pays} className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1.5 text-sm">
                  <span>{p.flag}</span>
                  <span>{p.pays}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/243XXXXXXXXX?text=Bonjour, je suis en diaspora et j'ai besoin d'un service pour ma famille à Kinshasa"
                target="_blank"
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-8 rounded-2xl transition-all hover:scale-105 shadow-lg shadow-green-500/30"
              >
                💬 Parler à un conseiller
              </a>
              <a
                href="#pack-diaspora"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold py-4 px-8 rounded-2xl transition-all"
              >
                Voir nos tarifs →
              </a>
            </div>
          </div>

          {/* Stats card */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { emoji: "🌍", number: "200+", label: "Clients diaspora", sub: "dans 15 pays" },
              { emoji: "📱", number: "100%", label: "Suivi en ligne", sub: "WhatsApp + photos" },
              { emoji: "⏱️", number: "48h", label: "Intervention", sub: "après validation" },
              { emoji: "💳", number: "Multi", label: "Devises acceptées", sub: "EUR, USD, CDF" },
            ].map((s) => (
              <div key={s.label} className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6">
                <div className="text-3xl mb-2">{s.emoji}</div>
                <div className="text-2xl font-bold text-yellow-400">{s.number}</div>
                <div className="font-semibold text-sm mt-1">{s.label}</div>
                <div className="text-blue-200 text-xs mt-0.5">{s.sub}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
