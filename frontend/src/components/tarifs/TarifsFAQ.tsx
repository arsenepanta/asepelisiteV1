"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Le devis est-il vraiment gratuit ?",
    a: "Oui, 100% gratuit et sans engagement. Vous recevez votre devis sous 24h (2h pour le pack Confort, 30 min pour Premium).",
  },
  {
    q: "Comment se passe le paiement ?",
    a: "Le paiement s'effectue après l'intervention via Mobile Money (M-Pesa, Orange Money, Airtel Money) ou en espèces. Aucun paiement avant intervention.",
  },
  {
    q: "Puis-je annuler une intervention ?",
    a: "Oui, vous pouvez annuler gratuitement jusqu'à 2h avant l'intervention prévue. Au-delà, des frais de déplacement peuvent s'appliquer.",
  },
  {
    q: "Les prix incluent-ils les matériaux ?",
    a: "Non, les prix indiqués sont pour la main d'œuvre. Les matériaux sont facturés séparément et détaillés dans le devis.",
  },
  {
    q: "Y a-t-il une garantie sur les travaux ?",
    a: "Oui, tous nos travaux sont garantis. Si vous n'êtes pas satisfait, nous revenons gratuitement pour corriger le problème.",
  },
];

export default function TarifsFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 rounded-full px-4 py-2 text-sm font-medium mb-4">
            ❓ FAQ Tarifs
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Questions sur nos tarifs
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">{faq.q}</span>
                <span className={`text-gray-400 text-xl transition-transform ${open === i ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-gray-600 leading-relaxed border-t border-gray-100">
                  <p className="pt-4">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
