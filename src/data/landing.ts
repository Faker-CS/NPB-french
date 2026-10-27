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
