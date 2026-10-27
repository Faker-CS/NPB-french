import type { MediaSource } from "@/components/ui/BackgroundMedia";

/*
 * Landing page content, Figma text verbatim (section "Npb french", 31:7999). French copy comes from the
 * page frame and the instance overrides; manual line breaks are kept as "\n" where Figma has them.
 */

/** Primary booking target: the enquiry form. */
export const bookingHref = "#contact";

export const hero = {
  eyebrow: "Services de pare-brise",
  title: "VOTRE PARE-BRISE A BESOIN D'UNE EXPERTISE. NOUS VOUS REMETTRONS SUR LA ROUTE.",
  intro:
    "Réparation et remplacement de pare-brise professionnels pour tous les véhicules, toutes les marques et tous les modèles. Service rapide. Installation experte. Où que vous ayez besoin de nous.",
  primaryCta: "Prendre rendez-vous",
  secondaryCta: "Demander un rappel",
  media: {
    poster: "/images/hero-poster.webp",
    alt: "Technicien remplaçant le pare-brise d'une voiture dans un atelier",
  } satisfies MediaSource,
};

export const offers = {
  eyebrow: "Services de pare-brise",
  title: "UN PARE-BRISE. ZÉRO STRESS. VOTRE FRANCHISE POURRAIT ÊTRE COUVERTE.",
  description: "Faites remplacer votre pare-brise chez vous grâce à notre service national.",
  cta: "RÉCLAMEZ MAINTENANT",
  primaryCta: "Prendre rendez-vous",
  secondaryCta: "Demander un rappel",
  // Price parts: `highlight` runs use the "nrp theme" fill style (brand).
  cards: [
    {
      id: "virement",
      price: [{ text: "DE " }, { text: "200 €", highlight: true }, { text: " À " }, { text: "400 €", highlight: true }],
      label: "VIREMENT BANCAIRE",
      description: "Consultez les conditions de nos offres dans nos centres et sur notre site web",
      decoration: "coin",
    },
    {
      id: "pneus",
      price: [{ text: "DE " }, { text: "2", highlight: true }, { text: " À " }, { text: "4", highlight: true }],
      label: "NOUVEAUX PNEUS PROPOSÉS",
      description:
        "Franchise annulée jusqu'à 80 €*\nSous réserve de sélection et de disponibilité\nConsultez les conditions de nos offres dans nos centres et sur notre site web",
      decoration: "tyres",
    },
  ],
} as const;

export const locations = {
  eyebrow: "Trouvez-nous près de chez vous",
  title: "VOTRE CENTRE NESS LE PLUS PROCHE EST PLUS PRÈS QUE VOUS NE LE PENSEZ.",
  description:
    "Trouvez votre centre Ness Pare-Brise le plus proche et bénéficiez d'un service professionnel de vitrage automobile où que vous soyez en France.",
  searchLabel: "Entrez la ville ou le code postal...",
  searchCta: "Rechercher",
  count: "83 emplacements",
  avatars: ["/images/avatar-centre-1.webp", "/images/avatar-centre-2.webp", "/images/avatar-centre-3.webp"],
  // Tooltip of the hovered pin (1:1253), verbatim (PROGRESS.md, D8).
  pinLabel: "Parise",
};

/** Regions and centres from "Où nous intervenons" (31:4201); also the mock data behind the centre search. */
export const regions = [
  { name: "South-West", cities: ["Toulouse", "Carcassonne", "Perpignan"] },
  { name: "Pyrenees", cities: ["Pau", "Séméac"] },
  { name: "Central France", cities: ["Joué-lès-Tours", "Orléans"] },
  { name: "North", cities: ["Amiens", "Le Havre"] },
  { name: "Île-de-France", cities: ["Paris", "Versailles"] },
  { name: "South-East", cities: ["Lyon", "Marseille", "Nice"] },
];

export const services = {
  eyebrow: "Services de pare-brise",
  // Figma uses "\r" here, which renders as a space (natural wrap into 3 lines).
  title: "QUEL QUE SOIT LE DOMMAGE, NOUS VOUS PROTÉGEONS.",
  description: "Faites remplacer votre pare-brise à domicile avec notre service national.",
  // Two slides are designed (counter shows "/02", PROGRESS.md D14); captions are English in Figma (D8).
  slides: [
    { id: "panoramic-roof", label: "Panoramic Roof", title: "Keep your view clear.", image: "/images/service-panoramic-roof.webp", alt: "Technicien posant un toit panoramique" },
    { id: "windshield", label: "Windshield", title: "Cracked? WE'LL MAKE IT CLEAR AGAIN.", image: "/images/service-windshield.webp", alt: "Technicien remplaçant un pare-brise" },
  ],
};

export const insurance = {
  eyebrow: "Assistance Assurance",
  title: "MOINS DE PAPIERS.\nMOINS DE COÛT.\nPLUS DE TRANQUILLITÉ D'ESPRIT.",
  description: "Faites remplacer votre pare-brise à domicile avec notre service national.",
  benefits: [
    { icon: "insurers", label: "Toutes les compagnies d'assurance" },
    { icon: "euro", label: "0 € d'avance" },
    { icon: "bolt", label: "Service rapide" },
    { icon: "document", label: "Zéro paperasse" },
    { icon: "map", label: "Service national" },
    { icon: "lock", label: "Garantie d'installation à vie" },
  ],
  cta: "Book appointment",
} as const;

export const experts = {
  eyebrow: "Experts en verre automobile",
  title: "VOTRE VERRE. NOTRE EXPERTISE.",
  description:
    "Réparation et remplacement de verre automobile professionnels, disponibles dans nos centres ou où que vous soyez.",
  photos: [
    { src: "/images/experts-1.webp", alt: "Technicien posant un pare-brise" },
    { src: "/images/experts-2.webp", alt: "Pare-brise en cours de remplacement" },
    { src: "/images/experts-3.webp", alt: "Réparation d'un impact sur un pare-brise" },
    { src: "/images/experts-4.webp", alt: "Technicien au travail dans l'atelier" },
  ],
  features: [
    { title: "Service rapide", text: "Reprenez la route rapidement." },
    { title: "Verre de qualité", text: "Verre approuvé répondant aux normes du fabricant." },
    { title: "Qualité garantie", text: "Installation professionnelle en qui vous pouvez avoir confiance." },
    { title: "Service mobile", text: "Nous venons directement à vous." },
  ],
  // Not overridden in the French instance (PROGRESS.md, D8).
  cta: "Book appointment",
};

export const howItWorks = {
  eyebrow: "Comment ça marche",
  title: "VOUS ÊTES À 3 ÉTAPES DE RETROUVER LA ROUTE.",
  description:
    "Réparation et remplacement de verre automobile professionnels, disponibles dans nos centres ou où que vous ayez besoin de nous.",
  steps: [
    { number: "01", title: "Contactez-nous", text: "Dites-nous ce qui s'est passé et soumettez votre demande." },
    { number: "02", title: "Nous vous contactons", text: "Un expert de Ness Pare-Brise vous contacte pour comprendre vos besoins." },
    { number: "03", title: "Prenez votre rendez-vous", text: "Choisissez votre emplacement et recevez un service professionnel rapide." },
  ],
  cta: "Réserver un rendez-vous",
};

export const comeToYou = {
  eyebrow: "Nous venons à vous",
  title: "VOTRE VOITURE\nN'A PAS BESOIN\nde SE DÉPLACER.",
  description:
    "Pare-brise, vitre latérale, lunette arrière ou rétroviseurs — nos spécialistes s'occupent du vitrage de votre véhicule.",
  chips: ["À Domicile", "Au Travail", "Où que vous ayez besoin de nous"],
  cta: "Prendre rendez-vous",
  media: {
    poster: "/images/come-to-you-poster.webp",
    alt: "Technicien réparant le vitrage d'une voiture sur place",
  } satisfies MediaSource,
};

export const why = {
  eyebrow: "Pourquoi Ness Pare-Brise ?",
  title: "SERVICE RAPIDE. MAINS D'EXPERT.\nPAS DE TRACAS INUTILES.",
  description:
    "Service de vitrage automobile professionnel avec des rendez-vous rapides, une installation experte et une expérience sans tracas du début à la fin.",
  // Image boxes are the Figma nodes in the 341 × 385 card (final state 1:1978).
  cards: [
    { title: "Expertise", text: "Spécialistes qualifiés utilisant un équipement professionnel.", image: "/images/why-expertise.webp", box: { x: 200, y: 97, width: 150, height: 175 } },
    { title: "Vitesse", text: "Réparations en 30 minutes. \nRemplacements en moins de 2 heures.", image: "/images/why-speed.webp", box: { x: 183, y: 95, width: 164, height: 179 } },
    // Figma has an empty text node before this title, which pushes it 10 px right.
    { title: "Soutien aux assurances", text: "Nous simplifions le processus avec votre compagnie d'assurance.", image: "/images/why-insurance.webp", box: { x: 191, y: 112, width: 150, height: 161 }, titleIndent: true },
    { title: "Garantie à vie", text: "Installation professionnelle soutenue \npar notre garantie.", image: "/images/why-guarantee.webp", box: { x: 184.5, y: 117, width: 151, height: 151 } },
    { title: "Service mobile", text: "Nous venons directement chez vous \nou sur votre lieu de travail.", image: "/images/why-mobile.webp", box: { x: 181.5, y: 108, width: 155, height: 154 } },
  ],
  cta: "Prendre rendez-vous",
};

export const repairOrReplace = {
  eyebrow: "Réparer ou remplacer ?",
  title: "PETIT IMPACT ? RÉPAREZ-LE.\nVERRE CRAQUÉ ? REMPLACEZ-LE.",
  description:
    "Petit impact ? Nous le réparerons rapidement. Verre craqué ? Nous le remplacerons en toute sécurité et de manière professionnelle.",
  repair: {
    title: "Réparation",
    subtitle: "La règle des 3–2–1",
    points: ["Moins de 3 impacts.", "Plus petit qu'une pièce de 2 €.", "En dehors du champ de vision direct du conducteur."],
    duration: "Environ 30 minutes.",
    image: { src: "/images/repair-impact.webp", alt: "Réparation d'un impact sur un pare-brise" },
  },
  replace: {
    title: "Remplacement",
    // Both column titles read "Peut être nécessaire lorsque :" in Figma (PROGRESS.md, D8).
    columns: [
      {
        subtitle: "Peut être nécessaire lorsque :",
        points: [
          "Il y a une fissure",
          "L'impact est plus grand qu'une pièce de 2 €",
          "Les dommages sont dans le champ de vision du conducteur",
          "Les dommages sont proches du bord du verre",
        ],
      },
      {
        subtitle: "Peut être nécessaire lorsque :",
        points: ["Sécurité", "Intégrité structurelle restaurée", "Visibilité améliorée", "Calibration ADAS si nécessaire"],
      },
    ],
    image: { src: "/images/replace-windshield.webp", alt: "Remplacement d'un pare-brise en atelier" },
  },
  unsure: { title: "Pas sûr ?", text: "Laissez nos spécialistes évaluer votre pare-brise." },
  cta: "Prendre rendez-vous",
};

export const needHelp = {
  eyebrow: "Besoin d'aide ?",
  title: "PRÊT À REPRENDRE LA ROUTE ?",
  description: "Dites-nous ce qui s'est passé. Notre équipe est là pour vous aider à trouver la bonne solution en verre.",
  // Figma has no targets: booking form, centre finder, phone (PROGRESS.md, D11).
  actions: [
    { icon: "calendar", label: "Réservez en ligne", href: "#contact" },
    { icon: "pin", label: "Trouvez un centre", href: "#centres" },
    { icon: "chat", label: "Parlez à un conseiller", href: "tel:+33000000000" },
  ],
  signature: { name: "NESS PARE-BRISE", tagline: "Votre expert en verre automobile." },
} as const;

export const rewards = {
  watermark: "Unlimited rewards",
  // "RENVOI" kept verbatim (PROGRESS.md, D8).
  title: "RECEVEZ 40 € POUR CHAQUE RENVOI !",
  text: "Un supplément de 40 € pour chaque 4 renvois (pour un total de 200 €)",
  payment: "MÉTHODE DE PAIEMENT : VIREMENT BANCAIRE",
  cta: "Profitez d'une remise allant jusqu'à 50 %",
};

export const articles = {
  eyebrow: "Experts en verre automobile",
  title: "CONNAISSEZ VOTRE VERRE. CONDUISEZ EN CONFIANCE.",
  description: "Comprenez votre pare-brise, choisissez la bonne solution et conduisez en toute confiance.",
  readMore: "Lire l'article →",
  all: "Voir tous les articles",
  // Article pages are out of scope (PROGRESS.md, D3); the three excerpts are identical in Figma (D8).
  items: [
    { label: "Article 01", category: "Assurance", title: "PARE-BRISE CRAQUÉ ?", image: "/images/article-insurance.webp", alt: "Conseillère remettant un document d'assurance à un client" },
    { label: "Article 02", category: "Réparation", title: "RÉPARATION D'IMPACT", image: "/images/article-impact-repair.webp", alt: "Technicien réparant un impact sur un pare-brise" },
    { label: "Article 03", category: "Sécurité", title: "INSPECTION DU VÉHICULE", image: "/images/article-inspection.webp", alt: "Technicien inspectant le pare-brise d'un véhicule" },
  ],
  excerpt: "Couverture d'assurance et que faire en cas de dommages.",
};

export const coverage = {
  eyebrow: "Où nous intervenons",
  title: "SERVICE DE VERRE PROFESSIONNEL À TRAVERS LA FRANCE.",
  highlights: ["Service Rapide", "Soutien à l'Assurance", "Service Mobile"],
  // Label kept verbatim from Figma (PROGRESS.md, D8).
  cta: "Voir tous les articles",
  images: {
    "South-West": "/images/region-south-west.webp",
    Pyrenees: "/images/region-pyrenees.webp",
    "Central France": "/images/region-central-france.webp",
    North: "/images/region-north.webp",
    "Île-de-France": "/images/region-ile-de-france.webp",
    "South-East": "/images/region-south-east.webp",
  } as Record<string, string>,
};

export const reviews = {
  eyebrow: "Vrais clients",
  title: "UN BON SERVICE PARLE DE LUI-MÊME.",
  description:
    "Vraies expériences de clients qui nous ont choisis pour un service de vitrage automobile rapide, professionnel et sans tracas.",
  // Figma has 12 identical placeholder cards (3 pages of 4); only the first page is translated, the French
  // text is used for all of them (PROGRESS.md, D15).
  review: {
    quote: "« Le café est excellent et le service rapide. De première qualité. »",
    author: "Tumar Baris",
    date: "Il y a 10 mois",
    rating: 4,
    avatar: "/images/reviewer-avatar.webp",
  },
  pages: 3,
  perPage: 4,
};

export const partners = {
  eyebrow: "nos partenaires",
  title: "MARQUES D'IBI GROUP",
  description:
    "Fiable pour les grandes marques et partenaires de l'industrie pour fournir des solutions de vitrage automobile professionnelles et fiables.",
  // Logo box inside its 214 × 100 tile (Figma "our partner" 1:1055); the first one is top-left aligned.
  logos: [
    { name: "Ness Glass", src: "/images/partner-nessglass.webp", width: 194, height: 73, align: "start" },
    { name: "Oxxo Glass", src: "/images/partner-oxxoglass.webp", width: 143, height: 68, align: "center" },
    { name: "Ness Pare-Brise", src: "/images/partner-npb.webp", width: 127, height: 73, align: "center" },
    { name: "Nexxy Tire", src: "/images/partner-nexxytire.webp", width: 169, height: 69, align: "center" },
  ],
} as const;

export const contactForm = {
  label: "Enquire Form",
  // Figma sets this in GC EPICPRO Demo, which lacks "é"; it uses the display face (PROGRESS.md, D2).
  title: "Faites réparer votre pare-brise sans tracas.",
  image: { src: "/images/contact-technician.webp", alt: "Technicien au travail sur un pare-brise" },
  fields: {
    firstName: "Prénom",
    lastName: "Nom de famille",
    phone: "Numéro de téléphone",
    email: "Email",
    postalCode: "Code postal",
    message: "Dites-nous comment nous pouvons vous aider...",
  },
  consent:
    "J'accepte les [Conditions Générales] fournies par l'entreprise. En fournissant mon numéro de téléphone, j'accepte de recevoir des messages SMS et des appels de l'entreprise.",
  submit: "SEND MY REQUEST",
  // Not designed in Figma: confirmation after a (simulated) submit, PROGRESS.md D16.
  success: "Merci ! Votre demande a bien été envoyée. Notre équipe vous recontacte rapidement.",
};

export const faq = {
  eyebrow: "Questions Fréquemment Posées",
  title: "VOUS AVEZ DES QUESTIONS ?\nNOUS AVONS DES RÉPONSES.",
  description:
    "Obtenez des réponses claires et rapides à vos questions sur la réparation, le remplacement, l'assurance et le service de pare-brise.",
  // Only the first answer exists in Figma; the others are visible placeholders until supplied.
  items: [
    {
      question: "COMBIEN DE TEMPS APRÈS L'INSTALLATION PUIS-JE CONDUIRE ?",
      answer: "Généralement 1 à 2 heures, permettant à l'adhésif de durcir correctement et d'assurer votre sécurité sur la route.",
    },
    { question: "PUIS-JE LAVER MA VOITURE APRÈS LE REMPLACEMENT ?", answer: "[Réponse à fournir]" },
    { question: "MON CAPTEUR DE PLUIE FONCTIONNERA-T-IL TOUJOURS ?", answer: "[Réponse à fournir]" },
    { question: "LE REMPLACEMENT A-T-IL UN IMPACT SUR LA GARANTIE DE MON VÉHICULE ?", answer: "[Réponse à fournir]" },
  ],
};
