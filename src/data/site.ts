/*
 * Site-wide content: header navigation, primary CTA, footer and contact details.
 * Labels are the Figma text verbatim (31:3603 header, 31:4408 footer). Figma has no link targets,
 * so every link points to the landing-page section that matches it (PROGRESS.md, D11).
 */

export type NavLink = {
  label: string;
  href: string;
};

export const mainNav: NavLink[] = [
  { label: "Vitre automobile", href: "#services" },
  { label: "Pare-brise", href: "#reparer-ou-remplacer" },
  { label: "Casse de verre", href: "#assurance" },
  { label: "Nos centres", href: "#centres" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const primaryCta: NavLink = { label: "Prendre rendez-vous", href: "#contact" };

export const contact = {
  // Placeholder number from Figma, kept verbatim.
  phone: "+33 (0)0 00 00 00 00",
  phoneHref: "tel:+33000000000",
  email: "contact@nesspare-brise.fr",
  hours: "Lun–Sam · 8:00–18:00",
};

export type FooterColumn = {
  title: string;
  links: NavLink[];
};

export const footerTagline =
  "Votre expert en vitrage automobile. Réparation et remplacement de pare-brise professionnels à travers la France.";

export const footerColumns: FooterColumn[] = [
  {
    title: "Nos services",
    links: [
      { label: "Remplacement de pare-brise", href: "#services" },
      { label: "Réparation d'impact", href: "#reparer-ou-remplacer" },
      { label: "Vitre arrière", href: "#services" },
      { label: "Vitre latérale", href: "#services" },
      { label: "Toit panoramique", href: "#services" },
      { label: "Calibration ADAS", href: "#reparer-ou-remplacer" },
    ],
  },
  {
    title: "Infos",
    links: [
      { label: "À propos", href: "#pourquoi" },
      { label: "Comment ça marche", href: "#comment-ca-marche" },
      { label: "Assurance", href: "#assurance" },
      { label: "Nos centres", href: "#centres" },
      { label: "Blog", href: "#blog" },
      { label: "FAQ", href: "#faq" },
    ],
  },
];

export type SocialNetwork = "facebook" | "instagram" | "youtube";

// Profile URLs are not in the design; "#" until they are supplied.
export const socials: { network: SocialNetwork; label: string; href: string }[] = [
  { network: "facebook", label: "Facebook", href: "#" },
  { network: "instagram", label: "Instagram", href: "#" },
  { network: "youtube", label: "YouTube", href: "#" },
];

export const footerLegal = {
  language: "Français (Fr)",
  copyright: "2026 Ness Pare-Brise. Tous droits réservés.",
  watermark: "NESS PARE BRISE",
};
