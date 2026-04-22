const services = [
  {
    emoji: "🔧",
    name: "Plomberie",
    items: [
      { label: "Débouchage simple", price: "$15 - $30" },
      { label: "Réparation fuite", price: "$20 - $50" },
      { label: "Installation robinet", price: "$25 - $45" },
      { label: "Remplacement WC", price: "$50 - $100" },
    ],
  },
  {
    emoji: "⚡",
    name: "Électricité",
    items: [
      { label: "Remplacement prise", price: "$10 - $20" },
      { label: "Installation interrupteur", price: "$15 - $25" },
      { label: "Tableau électrique", price: "$80 - $150" },
      { label: "Câblage pièce", price: "$50 - $120" },
    ],
  },
  {
    emoji: "🎨",
    name: "Peinture",
    items: [
      { label: "Peinture pièce (murs)", price: "$40 - $80" },
      { label: "Peinture façade", price: "$150 - $300" },
      { label: "Enduit + peinture", price: "$60 - $120" },
      { label: "Peinture plafond", price: "$30 - $60" },
    ],
  },
  {
    emoji: "❄️",
    name: "Climatisation",
    items: [
      { label: "Installation clim", price: "$80 - $150" },
      { label: "Entretien / nettoyage", price: "$25 - $45" },
      { label: "Recharge gaz", price: "$40 - $70" },
      { label: "Dépannage clim", price: "$30 - $80" },
    ],
  },
  {
    emoji: "🚚",
    name: "Déménagement",
    items: [
      { label: "Studio", price: "$60 - $100" },
      { label: "2 pièces", price: "$100 - $180" },
      { label: "3 pièces", price: "$150 - $250" },
      { label: "Villa complète", price: "$250 - $500" },
    ],
  },
  {
    emoji: "🧱",
    name: "Maçonnerie",
    items: [
      { label: "Réparation fissure", price: "$20 - $50" },
      { label: "Carrelage (m²)", price: "$15 - $30/m²" },
      { label: "Construction mur", price: "$80 - $200" },
      { label: "Rénovation salle de bain", price: "$200 - $500" },
    ],
  },
];

export default function TarifsServices() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-600 rounded-full px-4 py-2 text-sm font-medium mb-4">
            💡 Tarifs indicatifs
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Prix par type de prestation
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Ces prix sont indicatifs. Le devis final est établi gratuitement
            après évaluation de votre situation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{service.emoji}</span>
                <h3 className="font-bold text-gray-900 text-lg">{service.name}</h3>
              </div>
              <div className="space-y-3">
                {service.items.map((item, j) => (
                  <div key={j} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                    <span className="text-gray-600 text-sm">{item.label}</span>
                    <span className="text-green-600 font-semibold text-sm">{item.price}</span>
                  </div>
                ))}
              </div>
              <a
                href="/contact"
                className="mt-5 block text-center text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                Obtenir un devis →
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center">
          <p className="text-blue-800 font-medium">
            📌 <strong>Note importante :</strong> Les prix varient selon la complexité,
            les matériaux et la zone d'intervention. Le devis final est toujours
            communiqué <strong>avant le début des travaux</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
