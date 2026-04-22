const zones = [
  "Gombe", "Limete", "Ngaliema", "Kintambo", "Barumbu",
  "Kinshasa", "Kasa-Vubu", "Lingwala", "Bumbu", "Kalamu",
  "Makala", "Ngiri-Ngiri", "Selembao", "Lemba", "Matete",
  "Ndjili", "Masina", "Kisenso", "Mont-Ngafula", "Maluku",
];

export default function ContactZone() {
  return (
    <section className="py-20 bg-gray-50" id="zones">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 rounded-full px-4 py-2 text-sm font-medium mb-4">
            📍 Zones d'intervention
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Nous intervenons dans toute Kinshasa
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Nos techniciens couvrent les 24 communes de Kinshasa.
            Intervention sous 48h garantie.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <div className="flex flex-wrap gap-3 justify-center">
            {zones.map((zone, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-2 text-sm font-medium"
              >
                📍 {zone}
              </span>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-gray-100">
            {[
              { icon: "⚡", title: "Intervention express", text: "Moins de 48h après validation du devis" },
              { icon: "📸", title: "Rapport photo", text: "Avant et après chaque intervention" },
              { icon: "✅", title: "Satisfaction garantie", text: "100% de nos clients recommandent ASEPELI" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
