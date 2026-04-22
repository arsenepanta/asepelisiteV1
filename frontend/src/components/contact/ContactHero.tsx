export default function ContactHero() {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-2 text-sm mb-6 text-blue-300">
          📞 Contactez-nous
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          On vous répond en{" "}
          <span className="text-yellow-400">moins de 30 minutes</span>
        </h1>
        <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-10">
          Une question, un devis, une urgence ? Notre équipe est disponible
          7j/7 pour vous accompagner depuis Kinshasa ou l'étranger.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { icon: "⚡", text: "Réponse en 30 min" },
            { icon: "🕐", text: "Disponible 7j/7" },
            { icon: "🌍", text: "France, Belgique, Canada" },
            { icon: "💬", text: "WhatsApp & Email" },
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
