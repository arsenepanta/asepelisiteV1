"use client";
import { useState } from "react";

const categories = [
  {
    id: "general",
    label: "🏠 Général",
    faqs: [
      {
        q: "Qu'est-ce qu'ASEPELI ?",
        a: "ASEPELI est une plateforme de services à domicile basée à Kinshasa. Nous mettons en relation des clients avec des techniciens certifiés pour tous vos travaux : plomberie, électricité, peinture, climatisation, déménagement et maçonnerie.",
      },
      {
        q: "Dans quelles zones intervenez-vous ?",
        a: "Nous intervenons dans les 24 communes de Kinshasa : Gombe, Limete, Ngaliema, Kintambo, Barumbu, Kinshasa, Kasa-Vubu, Lingwala, Bumbu, Kalamu, Makala, Ngiri-Ngiri, Selembao, Lemba, Matete, Ndjili, Masina, Kisenso, Mont-Ngafula, Maluku et plus.",
      },
      {
        q: "ASEPELI est-il disponible 7j/7 ?",
        a: "Oui ! Notre service client est disponible 7j/7 de 7h à 20h. Pour les urgences (fuites d'eau, pannes électriques), nous avons une ligne d'urgence disponible 24h/24.",
      },
      {
        q: "Comment fonctionne la garantie satisfaction ?",
        a: "Si vous n'êtes pas satisfait du travail effectué, nous renvoyons un technicien gratuitement pour corriger le problème. 100% de nos clients recommandent ASEPELI.",
      },
    ],
  },
  {
    id: "reservation",
    label: "📋 Réservation",
    faqs: [
      {
        q: "Comment demander un devis ?",
        a: "Plusieurs options : via notre formulaire en ligne, par WhatsApp (+243 XX XXX XXXX), par email (contact@asepeli.com) ou en appelant directement. Le devis est 100% gratuit et sans engagement.",
      },
      {
        q: "Combien de temps pour recevoir un devis ?",
        a: "Selon votre pack : Essentiel sous 24h, Confort sous 2h, Premium sous 30 minutes. En dehors des packs, nous vous répondons généralement en moins de 2h en journée.",
      },
      {
        q: "Puis-je annuler ou reporter une intervention ?",
        a: "Oui, vous pouvez annuler ou reporter jusqu'à 2h avant l'intervention prévue sans frais. En dessous de 2h, des frais de déplacement peuvent s'appliquer.",
      },
      {
        q: "Comment se passe l'intervention ?",
        a: "1. Vous demandez un devis → 2. Nous analysons votre besoin → 3. Un technicien certifié se déplace → 4. Il effectue les travaux → 5. Vous validez et payez → 6. Vous recevez un rapport photo.",
      },
    ],
  },
  {
    id: "paiement",
    label: "💳 Paiement",
    faqs: [
      {
        q: "Quand dois-je payer ?",
        a: "Le paiement se fait après l'intervention, une fois que vous avez validé le travail. Vous ne payez que si vous êtes satisfait.",
      },
      {
        q: "Quels modes de paiement acceptez-vous ?",
        a: "Nous acceptons : M-Pesa, Airtel Money, Orange Money, et le paiement en espèces (USD ou CDF). Le paiement par carte bancaire sera bientôt disponible.",
      },
      {
        q: "Les prix sont-ils en USD ou CDF ?",
        a: "Nos prix sont affichés en USD pour plus de clarté, mais vous pouvez payer en CDF au taux du jour. Aucune surprise sur la conversion.",
      },
      {
        q: "Y a-t-il des frais cachés ?",
        a: "Non. Le prix du devis est le prix final. Les seuls suppléments possibles sont pour des travaux imprévus découverts lors de l'intervention, mais toujours avec votre accord préalable.",
      },
    ],
  },
  {
    id: "techniciens",
    label: "👷 Techniciens",
    faqs: [
      {
        q: "Comment sont sélectionnés vos techniciens ?",
        a: "Chaque technicien passe par un processus de vérification strict : vérification des diplômes et certifications, test pratique de compétences, vérification des antécédents, et période d'essai supervisée.",
      },
      {
        q: "Puis-je choisir mon technicien ?",
        a: "Avec le pack Premium, vous avez un technicien dédié qui connaît votre domicile. Pour les autres packs, nous assignons le meilleur technicien disponible dans votre zone.",
      },
      {
        q: "Les techniciens sont-ils assurés ?",
        a: "Oui, tous nos techniciens sont couverts par notre assurance responsabilité civile. En cas de dommage lors d'une intervention, vous êtes protégé.",
      },
      {
        q: "Combien de techniciens avez-vous ?",
        a: "Nous avons plus de 150 techniciens certifiés répartis dans toute Kinshasa, couvrant les 24 communes.",
      },
    ],
  },
  {
    id: "services",
    label: "🔧 Services",
    faqs: [
      {
        q: "Quels services proposez-vous ?",
        a: "Nous couvrons 6 domaines : Plomberie (fuites, robinets, canalisations), Électricité (installations, pannes, tableaux), Peinture (intérieure, extérieure, déco), Climatisation (installation, entretien, réparation), Déménagement (local, entre communes), Maçonnerie (rénovation, construction légère).",
      },
      {
        q: "Intervenez-vous pour les urgences ?",
        a: "Oui ! Pour les urgences (fuite d'eau importante, panne électrique totale, etc.), appelez notre ligne d'urgence 24h/24. Un technicien est envoyé dans les meilleurs délais.",
      },
      {
        q: "Apportez-vous le matériel ?",
        a: "Nos techniciens viennent avec leur outillage professionnel. Pour les matériaux (tuyaux, câbles, peinture, etc.), nous pouvons les fournir avec facture, ou vous pouvez les acheter vous-même selon votre préférence.",
      },
      {
        q: "Faites-vous des contrats d'entretien régulier ?",
        a: "Oui, nos packs Confort et Premium incluent des interventions régulières. Idéal pour l'entretien de votre climatisation, vérifications électriques et plomberie préventive.",
      },
    ],
  },
  {
    id: "diaspora",
    label: "✈️ Diaspora",
    faqs: [
      {
        q: "Je suis à l'étranger, puis-je gérer tout à distance ?",
        a: "Absolument ! C'est notre spécialité Diaspora. Vous gérez tout depuis l'étranger : devis par WhatsApp/email, suivi en temps réel, rapport photo/vidéo, paiement international par virement ou carte.",
      },
      {
        q: "Comment puis-je payer depuis l'étranger ?",
        a: "Depuis l'étranger, vous pouvez payer par virement bancaire, Western Union, MoneyGram, ou carte bancaire internationale. Nous vous envoyons une facture officielle.",
      },
      {
        q: "Puis-je faire confiance pour gérer ma propriété à Kinshasa ?",
        a: "Oui. Nous prenons des photos avant et après chaque intervention. Pour les gros travaux, nous pouvons organiser des visites vidéo en direct. Votre famille sur place peut aussi valider les travaux.",
      },
      {
        q: "Y a-t-il un suivi spécial pour la diaspora ?",
        a: "Oui, les clients diaspora ont un gestionnaire de compte dédié, des rapports détaillés par email, et une communication adaptée aux fuseaux horaires (France, Belgique, Canada).",
      },
    ],
  },
];

function FAQItem({ faq }: { faq: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-5 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
        <span
          className={`text-gray-400 text-2xl transition-transform flex-shrink-0 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      {open && (
        <div className="px-5 pb-5 text-gray-600 leading-relaxed border-t border-gray-100">
          <p className="pt-4">{faq.a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQContent() {
  const [activeCategory, setActiveCategory] = useState("general");

  const current = categories.find((c) => c.id === activeCategory)!;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {current.label}
          </h2>
          {current.faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} />
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { number: "24", label: "Communes couvertes" },
            { number: "150+", label: "Techniciens certifiés" },
            { number: "500+", label: "Clients satisfaits" },
            { number: "30 min", label: "Réponse garantie" },
          ].map((stat, i) => (
            <div key={i} className="bg-blue-50 rounded-2xl p-6">
              <div className="text-3xl font-bold text-blue-600 mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
