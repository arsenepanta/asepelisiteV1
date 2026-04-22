export default function TarifsCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Prêt à commencer ? 🚀
        </h2>
        <p className="text-green-100 text-lg mb-10 max-w-2xl mx-auto">
          Demandez votre devis gratuit maintenant. Notre équipe vous recontacte
          en moins de 30 minutes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-white text-green-700 font-bold px-8 py-4 rounded-xl hover:bg-green-50 transition-colors"
          >
            📋 Demander un devis gratuit
          </a>
          <a
            href="https://wa.me/243XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 border-2 border-white/30 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-400 transition-colors"
          >
            💬 WhatsApp direct
          </a>
        </div>
        <p className="text-green-200 text-sm mt-6">
          ✅ Sans engagement · ✅ Réponse sous 30 min · ✅ 150+ techniciens certifiés
        </p>
      </div>
    </section>
  );
}
