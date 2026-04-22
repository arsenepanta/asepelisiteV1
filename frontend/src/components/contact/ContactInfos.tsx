const infos = [
  {
    icon: "💬",
    title: "WhatsApp",
    primary: "+243 XX XXX XXXX",
    secondary: "Réponse en moins de 30 min",
    action: { label: "Écrire sur WhatsApp", href: "https://wa.me/243XXXXXXXXX" },
    color: "bg-green-50 border-green-200",
    iconBg: "bg-green-100 text-green-600",
    btnColor: "bg-green-500 hover:bg-green-600 text-white",
  },
  {
    icon: "📧",
    title: "Email",
    primary: "contact@asepeli.com",
    secondary: "Réponse sous 2h en journée",
    action: { label: "Envoyer un email", href: "mailto:contact@asepeli.com" },
    color: "bg-blue-50 border-blue-200",
    iconBg: "bg-blue-100 text-blue-600",
    btnColor: "bg-blue-600 hover:bg-blue-700 text-white",
  },
  {
    icon: "📍",
    title: "Adresse",
    primary: "Kinshasa, RDC",
    secondary: "Intervention dans tout Kinshasa",
    action: { label: "Voir les zones", href: "#zones" },
    color: "bg-purple-50 border-purple-200",
    iconBg: "bg-purple-100 text-purple-600",
    btnColor: "bg-purple-600 hover:bg-purple-700 text-white",
  },
  {
    icon: "🕐",
    title: "Horaires",
    primary: "Lun - Sam : 7h - 20h",
    secondary: "Urgences disponibles 24h/24",
    action: { label: "Demander une urgence", href: "https://wa.me/243XXXXXXXXX" },
    color: "bg-orange-50 border-orange-200",
    iconBg: "bg-orange-100 text-orange-600",
    btnColor: "bg-orange-500 hover:bg-orange-600 text-white",
  },
];

export default function ContactInfos() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Tous nos canaux de contact
          </h2>
          <p className="text-gray-600">
            Choisissez le canal qui vous convient le mieux
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {infos.map((info, i) => (
            <div
              key={i}
              className={`rounded-2xl border-2 p-6 flex flex-col gap-4 ${info.color}`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${info.iconBg}`}>
                {info.icon}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">{info.title}</h3>
                <p className="font-semibold text-gray-800 mt-1">{info.primary}</p>
                <p className="text-gray-500 text-sm mt-1">{info.secondary}</p>
              </div>
              <a
                href={info.action.href}
                className={`inline-block text-center py-2 px-4 rounded-xl text-sm font-semibold transition-colors ${info.btnColor}`}
              >
                {info.action.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
