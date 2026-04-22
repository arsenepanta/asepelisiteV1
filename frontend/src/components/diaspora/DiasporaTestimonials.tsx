const testimonials = [
  {
    name: "Anastasie D.",
    location: "Paris → Kinshasa",
    flag: "🇫🇷",
    text: "Je vis à Paris et ma maman est à Kinshasa. Grâce à ASEPELI, j'ai pu faire refaire la plomberie complète de sa maison sans me déplacer. Ils m'ont envoyé des photos chaque jour. Service impeccable !",
    service: "Plomberie complète",
    rating: 5,
    avatar: "AD",
    color: "bg-blue-100 text-blue-700",
  },
  {
    name: "Jean-Pierre L.",
    location: "Bruxelles → Kinshasa",
    flag: "🇧🇪",
    text: "J'avais acheté une maison à Kinshasa depuis la Belgique. ASEPELI a géré toute la rénovation : peinture, électricité, carrelage. Rapport très professionnel avec photos avant/après. Je recommande !",
    service: "Rénovation complète",
    rating: 5,
    avatar: "JL",
    color: "bg-purple-100 text-purple-700",
  },
  {
    name: "Marie-Claire K.",
    location: "Montréal → Kinshasa",
    flag: "🇨🇦",
    text: "Ma famille avait un problème d'électricité urgent. J'ai contacté ASEPELI le soir, le lendemain matin un technicien était sur place. Paiement via virement, zéro stress. Merci !",
    service: "Urgence électricité",
    rating: 5,
    avatar: "MK",
    color: "bg-green-100 text-green-700",
  },
];

export default function DiasporaTestimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-700 rounded-full px-4 py-2 text-sm font-medium mb-4">
            ⭐ Ils nous font confiance
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            La diaspora nous fait confiance
          </h2>
          <p className="text-gray-500 text-lg">
            Plus de 200 clients à l'étranger ont confié leurs travaux à ASEPELI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${t.color}`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.flag} {t.location}</p>
                  </div>
                </div>
                <div className="bg-blue-50 text-blue-600 text-xs font-medium px-3 py-1 rounded-full">
                  {t.service}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Final */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-10 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Prêt à confier vos travaux à ASEPELI ?
          </h3>
          <p className="text-blue-100 mb-8 text-lg">
            Contactez-nous maintenant. Réponse en moins de 30 minutes, 7j/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/243XXXXXXXXX?text=Bonjour, je suis en diaspora et j'ai besoin d'un service pour ma famille à Kinshasa"
              target="_blank"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-8 rounded-2xl transition-all hover:scale-105 shadow-lg"
            >
              💬 Écrire sur WhatsApp
            </a>
            <a
              href="mailto:contact@asepeli.com"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold py-4 px-8 rounded-2xl transition-all"
            >
              ✉️ Envoyer un email
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
