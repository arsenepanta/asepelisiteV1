const faqs = [
  {
    q: "Comment se passe la sélection ?",
    a: "Après réception de votre candidature, notre équipe vous contacte sous 24h pour un entretien rapide. Nous vérifions vos compétences et vos références. Le processus prend 2-3 jours maximum.",
  },
  {
    q: "Combien puis-je gagner avec ASEPELI ?",
    a: "Cela dépend de votre spécialité et disponibilité. Nos techniciens actifs gagnent en moyenne 300$ à 800$ par mois selon leur métier et le nombre de missions effectuées.",
  },
  {
    q: "Comment suis-je payé ?",
    a: "Vous êtes payé en Mobile Money (M-Pesa, Orange Money, Airtel Money) dans les 48h suivant la fin de la mission et la validation du client. Pas d'attente, pas de complications.",
  },
  {
    q: "Dois-je avoir mon propre matériel ?",
    a: "Pour les petites missions, oui. ASEPELI peut vous aider à vous équiper progressivement. Pour les grands travaux, le matériel est souvent fourni par le client ou inclus dans le devis.",
  },
  {
    q: "Est-ce que je peux travailler pour d'autres clients en parallèle ?",
    a: "Oui, absolument. ASEPELI ne vous impose pas l'exclusivité. Vous restez indépendant et gérez votre planning librement.",
  },
  {
    q: "Y a-t-il des frais pour rejoindre le réseau ?",
    a: "L'inscription est gratuite. ASEPELI prend une commission sur les missions générées via notre plateforme. Aucun frais caché.",
  },
];

export default function RejoindreFAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-600 rounded-full px-4 py-2 text-sm font-medium mb-4">
            ❓ Questions fréquentes
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Vos questions, nos réponses
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform text-xl flex-shrink-0">
                    ↓
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              </details>
            </div>
          ))}
        </div>

        {/* CTA Final */}
        <div className="mt-12 text-center bg-gray-900 rounded-3xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-3">Prêt à rejoindre l'équipe ?</h3>
          <p className="text-gray-400 mb-6">
            150+ techniciens nous font déjà confiance. Rejoignez-les !
          </p>
          <a
            href="#formulaire"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-8 rounded-2xl transition-all hover:scale-105"
          >
            👷 Postuler maintenant
          </a>
        </div>

      </div>
    </section>
  );
}
