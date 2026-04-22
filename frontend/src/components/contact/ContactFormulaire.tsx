export default function ContactFormulaire() {
  return (
    <section className="py-20 bg-white" id="formulaire">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left - Formulaire */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 rounded-full px-4 py-2 text-sm font-medium mb-6">
              ✉️ Formulaire de contact
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Envoyez-nous un message
            </h2>
            <p className="text-gray-600 mb-8">
              Remplissez ce formulaire, notre équipe vous contacte dans les 30 minutes.
            </p>

            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    placeholder="Jean"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    placeholder="Dupont"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  placeholder="jean.dupont@email.com"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Téléphone / WhatsApp
                </label>
                <input
                  type="tel"
                  placeholder="+33 6 XX XX XX XX"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Sujet *
                </label>
                <select className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors bg-white">
                  <option value="">Sélectionnez un sujet</option>
                  <option>Demande de devis</option>
                  <option>Question sur un service</option>
                  <option>Service Diaspora</option>
                  <option>Urgence</option>
                  <option>Rejoindre le réseau</option>
                  <option>Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  rows={5}
                  placeholder="Décrivez votre demande en détail..."
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                📨 Envoyer mon message
              </button>

              <p className="text-center text-sm text-gray-500">
                Réponse garantie en moins de 30 minutes — 7j/7
              </p>
            </form>
          </div>

          {/* Right - Infos complémentaires */}
          <div className="space-y-6">
            <div className="bg-gray-900 text-white rounded-3xl p-8">
              <h3 className="text-xl font-bold mb-6">📞 Réponse rapide garantie</h3>
              <div className="space-y-4">
                {[
                  { step: "1", text: "Vous envoyez votre message" },
                  { step: "2", text: "Notre équipe analyse votre demande" },
                  { step: "3", text: "Un conseiller vous rappelle sous 30 min" },
                  { step: "4", text: "Devis gratuit envoyé sous 48h" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <p className="text-gray-300">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-green-50 border-2 border-green-200 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                💬 Préférez WhatsApp ?
              </h3>
              <p className="text-gray-600 mb-5">
                Pour une réponse encore plus rapide, écrivez-nous directement sur WhatsApp.
                On répond en moins de 5 minutes en journée !
              </p>
              <a
                href="https://wa.me/243XXXXXXXXX"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl transition-colors"
              >
                💬 Ouvrir WhatsApp
              </a>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-3xl p-6">
              <div className="flex items-start gap-4">
                <span className="text-3xl">🚨</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Urgence ?</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Fuite d'eau, panne électrique, problème urgent ?
                    Appelez directement notre ligne urgence.
                  </p>
                  <a
                    href="tel:+243XXXXXXXXX"
                    className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-xl text-sm transition-colors"
                  >
                    📞 Appel urgence 24h/24
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
