import Link from "next/link";

const services = [
  { slug: "plomberie", label: "Plomberie", icon: "🔧", desc: "Réparation, installation, urgences" },
  { slug: "electricite", label: "Électricité", icon: "⚡", desc: "Câblage, dépannage, installation" },
  { slug: "peinture", label: "Peinture", icon: "🎨", desc: "Intérieur, extérieur, décoration" },
  { slug: "climatisation", label: "Climatisation", icon: "❄️", desc: "Installation, entretien, réparation" },
  { slug: "livraison", label: "Livraison & Déménagement", icon: "🚚", desc: "Transport, déménagement, livraison" },
  { slug: "maconnerie", label: "Maçonnerie", icon: "🧱", desc: "Construction, rénovation, carrelage" },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-24">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#1F3A6E] mb-4">Nos Services</h1>
        <p className="text-gray-500 mb-10">Choisissez un service pour en savoir plus.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="bg-white rounded-2xl p-6 shadow hover:shadow-lg border border-gray-100 hover:border-yellow-400 transition-all group"
            >
              <div className="text-4xl mb-3">{s.icon}</div>
              <h2 className="text-lg font-bold text-[#1F3A6E] group-hover:text-yellow-500 transition-colors">
                {s.label}
              </h2>
              <p className="text-sm text-gray-500 mt-1">{s.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
