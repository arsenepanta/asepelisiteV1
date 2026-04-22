export default function FAQCTA() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Vous n'avez pas trouvé votre réponse ? 🤔
        </h2>
        <p className="text-gray-600 mb-8">
          Notre équipe répond à toutes vos questions en moins de 30 minutes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-blue-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors"
          >
            📧 Nous contacter
          </a>
          <a
            href="https://wa.me/243XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-600 transition-colors"
          >
            💬 WhatsApp direct
          </a>
        </div>
      </div>
    </section>
  );
}
