export default function RejoindreFormulaire() {
  return (
    <section id="formulaire" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 rounded-full px-4 py-2 text-sm font-medium mb-4">
            📝 Candidature
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Postuler pour rejoindre le réseau
          </h2>
          <p className="text-gray-500">
            Remplissez ce formulaire. Notre équipe vous contacte sous 24h.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
          <form className="space-y-6">

            {/* Nom + Prénom */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Prénom *
                </label>
                <input
                  type="text"
                  placeholder="Jean-Baptiste"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  placeholder="Kabila"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-gray-900"
                />
              </div>
            </div>

            {/* Téléphone */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Numéro WhatsApp *
              </label>
              <div className="flex gap-2">
                <span className="flex items-center px-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-500 text-sm font-medium">
                  🇨🇩 +243
                </span>
                <input
                  type="tel"
                  placeholder="XX XXX XXXX"
                  className="flex-1 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-gray-900"
                />
              </div>
            </div>

            {/* Métier */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Votre métier *
              </label>
              <select className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-gray-900 bg-white">
                <option value="">Sélectionner votre spécialité</option>
                <option>🔧 Plombier</option>
                <option>⚡ Électricien</option>
                <option>🎨 Peintre</option>
                <option>❄️ Technicien climatisation</option>
                <option>🚛 Déménagement</option>
                <option>🏗️ Maçon</option>
                <option>🪚 Menuisier</option>
                <option>Autre</option>
              </select>
            </div>

            {/* Expérience */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Années d'expérience *
              </label>
              <div className="grid grid-cols-4 gap-3">
                {["< 1 an", "1-3 ans", "3-5 ans", "5+ ans"].map((exp) => (
                  <label key={exp} className="cursor-pointer">
                    <input type="radio" name="experience" className="sr-only peer" />
                    <div className="text-center border-2 border-gray-200 peer-checked:border-green-500 peer-checked:bg-green-50 peer-checked:text-green-700 rounded-xl py-3 px-2 text-sm font-medium text-gray-600 transition-all hover:border-green-300">
                      {exp}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Zone */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Zone d'intervention à Kinshasa *
              </label>
              <input
                type="text"
                placeholder="Ex: Gombe, Lingwala, Kintambo..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-gray-900"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Parlez-nous de vous (optionnel)
              </label>
              <textarea
                rows={4}
                placeholder="Décrivez votre expérience, vos spécialités, pourquoi vous souhaitez rejoindre ASEPELI..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-gray-900 resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-8 rounded-2xl transition-all hover:scale-[1.02] shadow-lg text-lg"
            >
              👷 Envoyer ma candidature
            </button>

            <p className="text-center text-gray-400 text-sm">
              En soumettant ce formulaire, vous acceptez d'être contacté par l'équipe ASEPELI.
            </p>

          </form>
        </div>

        {/* Alternative WhatsApp */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 mb-4">Vous préférez passer par WhatsApp ?</p>
          <a
            href="https://wa.me/243XXXXXXXXX?text=Bonjour, je souhaite rejoindre le réseau ASEPELI. Je suis [votre métier] avec [X] ans d'expérience."
            target="_blank"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold py-3 px-6 rounded-2xl transition-all"
          >
            💬 Postuler via WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
