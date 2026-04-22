import { Service } from "@/data/servicesData";
import Link from "next/link";

export default function ServiceCTA({ service }: { service: Service }) {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-5xl mb-4">{service.emoji}</div>
        <h2 className="text-3xl font-bold mb-4">
          Besoin d'un service {service.name.toLowerCase()} ?
        </h2>
        <p className="text-blue-200 mb-8 text-lg">
          Devis gratuit sous 24h. Paiement après satisfaction via Mobile Money.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-yellow-400 text-gray-900 font-bold px-8 py-4 rounded-xl hover:bg-yellow-300 transition-colors"
          >
            📋 Demander un devis gratuit
          </Link>
          <Link
            href="/services"
            className="bg-white/20 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/30 transition-colors border border-white/30"
          >
            ← Voir tous les services
          </Link>
        </div>
      </div>
    </section>
  );
}
