export type Service = {
  slug: string;
  name: string;
  emoji: string;
  tagline: string;
  description: string;
  color: string;
  bgColor: string;
  image: string;
  interventions: string[];
  steps: { title: string; desc: string }[];
  pricing: { label: string; price: string; desc: string }[];
  faqs: { q: string; a: string }[];
};

export const servicesData: Record<string, Service> = {
  plomberie: {
    slug: "plomberie",
    name: "Plomberie",
    emoji: "🔧",
    tagline: "Fuites, canalisations, robinetterie — réglé en 24h",
    description:
      "Nos plombiers certifiés interviennent rapidement pour tous vos problèmes d'eau. Fuite, canalisation bouchée, installation sanitaire : nous avons la solution.",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    image: "/images/plomberie.jpg",
    interventions: [
      "Réparation de fuites d'eau",
      "Débouchage de canalisations",
      "Installation de robinetterie",
      "Remplacement de chauffe-eau",
      "Installation de WC / douche",
      "Détection de fuites cachées",
      "Réparation de tuyauterie",
      "Installation compteur d'eau",
    ],
    steps: [
      { title: "Devis gratuit", desc: "Décrivez votre problème, recevez un devis sous 24h" },
      { title: "Confirmation", desc: "Acceptez le devis et choisissez votre créneau" },
      { title: "Intervention", desc: "Le technicien arrive à l'heure avec le matériel" },
      { title: "Paiement", desc: "Payez uniquement après satisfaction via Mobile Money" },
    ],
    pricing: [
      { label: "Petite réparation", price: "$15 - $30", desc: "Robinet, joint, petit bouchage" },
      { label: "Intervention standard", price: "$30 - $80", desc: "Fuite, canalisation, WC" },
      { label: "Installation complète", price: "$80 - $200", desc: "Salle de bain, cuisine" },
    ],
    faqs: [
      { q: "Intervenez-vous en urgence ?", a: "Oui, pour les fuites importantes nous intervenons dans les 2h." },
      { q: "Le devis est-il vraiment gratuit ?", a: "Oui, 100% gratuit et sans engagement." },
      { q: "Fournissez-vous les pièces ?", a: "Oui, nous apportons le matériel nécessaire inclus dans le devis." },
    ],
  },
  electricite: {
    slug: "electricite",
    name: "Électricité",
    emoji: "⚡",
    tagline: "Installations, pannes, câblage — techniciens agréés",
    description:
      "Des électriciens agréés pour tous vos travaux électriques. Sécurité garantie, travail conforme aux normes.",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    image: "/images/electricite.jpg",
    interventions: [
      "Réparation de pannes électriques",
      "Installation de prises et interrupteurs",
      "Câblage de maison / bureau",
      "Installation de tableau électrique",
      "Pose de climatiseur",
      "Installation d'éclairage LED",
      "Mise aux normes électriques",
      "Installation groupe électrogène",
    ],
    steps: [
      { title: "Diagnostic gratuit", desc: "Description du problème et devis rapide" },
      { title: "Planification", desc: "Choix du créneau selon votre disponibilité" },
      { title: "Intervention sécurisée", desc: "Technicien agréé avec équipement certifié" },
      { title: "Paiement Mobile Money", desc: "Après vérification et satisfaction" },
    ],
    pricing: [
      { label: "Dépannage simple", price: "$10 - $25", desc: "Prise, interrupteur, ampoule" },
      { label: "Intervention standard", price: "$25 - $70", desc: "Tableau, câblage partiel" },
      { label: "Installation complète", price: "$70 - $300", desc: "Câblage maison entière" },
    ],
    faqs: [
      { q: "Vos électriciens sont-ils certifiés ?", a: "Oui, tous nos électriciens sont agréés et formés." },
      { q: "Travaillez-vous sur les installations solaires ?", a: "Oui, nous installons et réparons les systèmes solaires." },
      { q: "Intervenez-vous le week-end ?", a: "Oui, 7j/7 de 7h à 20h." },
    ],
  },
  peinture: {
    slug: "peinture",
    name: "Peinture",
    emoji: "🎨",
    tagline: "Intérieur, extérieur, finitions parfaites",
    description:
      "Transformez vos espaces avec nos peintres professionnels. Intérieur, extérieur, enduit, décoration.",
    color: "text-pink-600",
    bgColor: "bg-pink-50",
    image: "/images/peinture.jpg",
    interventions: [
      "Peinture intérieure complète",
      "Peinture extérieure / façade",
      "Enduit et lissage de murs",
      "Peinture décorative",
      "Reprise de peinture",
      "Traitement anti-humidité",
      "Peinture plafond",
      "Vernissage et lasure",
    ],
    steps: [
      { title: "Visite & devis", desc: "Estimation sur place ou sur photos" },
      { title: "Choix des couleurs", desc: "Conseils et échantillons offerts" },
      { title: "Travaux propres", desc: "Protection de vos meubles incluse" },
      { title: "Livraison & paiement", desc: "Inspection finale avant paiement" },
    ],
    pricing: [
      { label: "Pièce simple", price: "$20 - $50", desc: "Chambre ou salon (1 couche)" },
      { label: "Appartement", price: "$80 - $200", desc: "3-4 pièces, 2 couches" },
      { label: "Villa complète", price: "$200 - $600", desc: "Intérieur + extérieur" },
    ],
    faqs: [
      { q: "Fournissez-vous la peinture ?", a: "Oui, nous pouvons fournir la peinture ou utiliser la vôtre." },
      { q: "Combien de temps durent les travaux ?", a: "Une pièce = 1 jour. Un appartement = 2-3 jours." },
      { q: "Protégez-vous les meubles ?", a: "Oui, nous couvrons et protégeons tous vos meubles." },
    ],
  },
  climatisation: {
    slug: "climatisation",
    name: "Climatisation",
    emoji: "❄️",
    tagline: "Installation, entretien, réparation de climatiseurs",
    description:
      "Spécialistes de la climatisation à Kinshasa. Installation, entretien et réparation toutes marques.",
    color: "text-cyan-600",
    bgColor: "bg-cyan-50",
    image: "/images/climatisation.jpg",
    interventions: [
      "Installation de climatiseur split",
      "Entretien et nettoyage",
      "Recharge de gaz réfrigérant",
      "Réparation de pannes",
      "Déplacement de climatiseur",
      "Installation multi-split",
      "Climatisation industrielle",
      "Remplacement de pièces",
    ],
    steps: [
      { title: "Évaluation", desc: "Choix du modèle adapté à votre pièce" },
      { title: "Devis précis", desc: "Prix installation + matériel inclus" },
      { title: "Installation pro", desc: "Technicien certifié, travail soigné" },
      { title: "Test & paiement", desc: "Vérification de fonctionnement avant paiement" },
    ],
    pricing: [
      { label: "Entretien", price: "$15 - $30", desc: "Nettoyage et vérification" },
      { label: "Réparation", price: "$25 - $80", desc: "Diagnostic + réparation" },
      { label: "Installation", price: "$60 - $150", desc: "Pose complète + mise en service" },
    ],
    faqs: [
      { q: "Quelles marques réparez-vous ?", a: "Toutes marques : Samsung, LG, Midea, Hisense, Gree..." },
      { q: "À quelle fréquence entretenir son clim ?", a: "Idéalement tous les 6 mois pour un fonctionnement optimal." },
      { q: "Fournissez-vous les climatiseurs ?", a: "Oui, nous pouvons fournir et installer le climatiseur de votre choix." },
    ],
  },
  demenagement: {
    slug: "demenagement",
    name: "Déménagement",
    emoji: "🚚",
    tagline: "Déménagement rapide, sécurisé et abordable",
    description:
      "Déménagez en toute sérénité à Kinshasa. Équipe sérieuse, matériel adapté, livraison sécurisée.",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    image: "/images/demenagement.jpg",
    interventions: [
      "Déménagement appartement",
      "Déménagement villa",
      "Transport de meubles",
      "Emballage et protection",
      "Montage / démontage meubles",
      "Déménagement bureau",
      "Stockage temporaire",
      "Transport sur longue distance",
    ],
    steps: [
      { title: "Inventaire", desc: "Liste de vos affaires pour estimer le volume" },
      { title: "Devis gratuit", desc: "Prix fixe, pas de mauvaise surprise" },
      { title: "Jour J", desc: "Équipe ponctuelle avec camion adapté" },
      { title: "Installation & paiement", desc: "Meubles remontés, paiement Mobile Money" },
    ],
    pricing: [
      { label: "Studio / F1", price: "$40 - $80", desc: "Petite quantité, camionnette" },
      { label: "Appartement F2-F3", price: "$80 - $150", desc: "Camion 5 tonnes" },
      { label: "Villa complète", price: "$150 - $400", desc: "Grand camion + équipe" },
    ],
    faqs: [
      { q: "Emballez-vous les affaires ?", a: "Oui, nous proposons l'emballage complet avec cartons et protection." },
      { q: "Intervenez-vous en dehors de Kinshasa ?", a: "Oui, nous pouvons intervenir sur Brazzaville et environs sur demande." },
      { q: "Que faire si un objet est endommagé ?", a: "Nous sommes assurés. Tout dommage est remboursé." },
    ],
  },
  maconnerie: {
    slug: "maconnerie",
    name: "Maçonnerie",
    emoji: "🏗️",
    tagline: "Construction, rénovation, carrelage — devis gratuit",
    description:
      "Travaux de maçonnerie professionnels à Kinshasa. Construction, rénovation, carrelage, crépissage.",
    color: "text-stone-600",
    bgColor: "bg-stone-50",
    image: "/images/maconnerie.jpg",
    interventions: [
      "Pose de carrelage",
      "Crépissage et enduit",
      "Construction de murs",
      "Rénovation de sol",
      "Pose de faïence",
      "Réparation de fissures",
      "Construction de clôture",
      "Travaux de fondation",
    ],
    steps: [
      { title: "Visite technique", desc: "Évaluation gratuite sur place" },
      { title: "Devis détaillé", desc: "Matériaux et main d'œuvre inclus" },
      { title: "Travaux de qualité", desc: "Maçons expérimentés, finitions soignées" },
      { title: "Réception & paiement", desc: "Contrôle qualité avant paiement" },
    ],
    pricing: [
      { label: "Petite réparation", price: "$20 - $50", desc: "Fissure, joint, petite surface" },
      { label: "Carrelage (m²)", price: "$8 - $15/m²", desc: "Pose + matériaux" },
      { label: "Rénovation complète", price: "$200 - $1000", desc: "Pièce ou maison entière" },
    ],
    faqs: [
      { q: "Fournissez-vous les matériaux ?", a: "Oui, nous pouvons acheter et fournir tous les matériaux." },
      { q: "Faites-vous des constructions neuves ?", a: "Oui, de la fondation jusqu'à la finition." },
      { q: "Avez-vous des références ?", a: "Oui, nous pouvons vous montrer des photos de réalisations." },
    ],
  },
};
