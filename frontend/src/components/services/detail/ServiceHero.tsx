import { Service } from "@/data/servicesData";
import Link from "next/link";

export default function ServiceHero({ service }: { service: Service }) {
  return (
    <section className="bg-gradient-to-br from-indigo-900 via-blue-900 to-blue-800 text-white py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-blue-300 text-sm mb-6">
          <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <span>/</span>
          <span className="text-white">{service.name}</span>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-6xl mb-4">{service.emoji}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.name}</h1>
            <p className="text-xl text-yellow-400 font-medium mb-4">{service.tagline}</p>
            <p className="text-blue-200 mb-8">{service.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-yellow-400 text-gray-900 font-bold px-8 py-4 rounded-xl hover:bg-yellow-300 transition-colors text-center"
              >
                📋 Devis gratuit
              </Link>
              <a
                href="https://wa.me/243XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-600 transition-colors text-center"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {service.interventions.slice(0, 4).map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-4 text-sm">
                <span className="text-green-400 mr-2">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
