import { Service } from "@/data/servicesData";

export default function ServicePricing({ service }: { service: Service }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Tarifs indicatifs 💰</h2>
          <p className="text-gray-600 mt-2">Devis gratuit et personnalisé selon votre besoin</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {service.pricing.map((price, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl p-6 shadow-sm border-2 ${
                i === 1 ? "border-blue-500 shadow-blue-100 shadow-lg" : "border-gray-100"
              }`}
            >
              {i === 1 && (
                <div className="text-center mb-3">
                  <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Le plus demandé
                  </span>
                </div>
              )}
              <h3 className="font-semibold text-gray-900 mb-2">{price.label}</h3>
              <div className="text-2xl font-bold text-blue-600 mb-2">{price.price}</div>
              <p className="text-gray-600 text-sm">{price.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-500 text-sm mt-6">
          💡 Ces prix sont indicatifs. Le devis final dépend de votre situation spécifique.
        </p>
      </div>
    </section>
  );
}
