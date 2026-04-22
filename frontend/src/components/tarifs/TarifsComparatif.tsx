const rows = [
  { feature: "Devis gratuit", essentiel: true, confort: true, premium: true },
  { feature: "Délai devis", essentiel: "24h", confort: "2h", premium: "30 min" },
  { feature: "Interventions incluses", essentiel: "À la demande", confort: "2/mois", premium: "Illimitées" },
  { feature: "Paiement Mobile Money", essentiel: true, confort: true, premium: true },
  { feature: "Rapport photo", essentiel: true, confort: true, premium: true },
  { feature: "Rapport vidéo", essentiel: false, confort: false, premium: true },
  { feature: "Suivi prioritaire", essentiel: false, confort: true, premium: true },
  { feature: "Technicien dédié", essentiel: false, confort: false, premium: true },
  { feature: "Urgences 24h/24", essentiel: false, confort: false, premium: true },
  { feature: "Support WhatsApp", essentiel: true, confort: true, premium: true },
];

function Cell({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return (
      <span className={value ? "text-green-500 text-xl" : "text-gray-300 text-xl"}>
        {value ? "✓" : "✗"}
      </span>
    );
  }
  return <span className="text-gray-700 text-sm font-medium">{value}</span>;
}

export default function TarifsComparatif() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 rounded-full px-4 py-2 text-sm font-medium mb-4">
            📊 Comparatif
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Comparez les formules
          </h2>
          <p className="text-gray-600">Toutes les fonctionnalités en un coup d'œil.</p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left p-4 text-gray-600 font-medium">Fonctionnalité</th>
                <th className="text-center p-4 text-blue-600 font-bold">🔧 Essentiel</th>
                <th className="text-center p-4 text-green-600 font-bold bg-green-50">⭐ Confort</th>
                <th className="text-center p-4 text-purple-600 font-bold">👑 Premium</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                  <td className="p-4 text-gray-700 text-sm font-medium">{row.feature}</td>
                  <td className="p-4 text-center"><Cell value={row.essentiel} /></td>
                  <td className="p-4 text-center bg-green-50/30"><Cell value={row.confort} /></td>
                  <td className="p-4 text-center"><Cell value={row.premium} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
