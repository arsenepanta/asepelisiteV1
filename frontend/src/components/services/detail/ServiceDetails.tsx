import { Service } from "@/data/servicesData";

export default function ServiceDetails({ service }: { service: Service }) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Interventions */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Ce que nous faisons ✅
            </h2>
            <ul className="space-y-3">
              {service.interventions.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xs font-bold flex-shrink-0">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Comment ça marche */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Comment ça marche 🔄
            </h2>
            <div className="space-y-6">
              {service.steps.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Questions fréquentes ❓</h2>
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Q: {faq.q}</h3>
                <p className="text-gray-600">→ {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
