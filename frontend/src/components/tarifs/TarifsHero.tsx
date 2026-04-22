export default function TarifsHero() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/30 rounded-full px-4 py-2 text-sm mb-6 text-yellow-300">
          💰 Tarifs transparents
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Des prix clairs,{" "}
          <span className="text-yellow-400">sans mauvaises surprises</span>
        </h1>
        <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-10">
          Choisissez le pack qui correspond à vos besoins. Devis gratuit,
          paiement après intervention via Mobile Money.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { icon: "✅", text: "Devis 100% gratuit" },
            { icon: "💳", text: "Paiement Mobile Money" },
            { icon: "🔒", text: "Prix fixé à l'avance" },
            { icon: "⭐", text: "Satisfaction garantie" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm"
            >
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
