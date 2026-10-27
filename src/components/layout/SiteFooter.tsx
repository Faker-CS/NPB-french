import type { ComponentType, SVGProps } from "react";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/icons";
import { Logo } from "@/components/layout/Logo";
import { Container } from "@/components/ui/Container";
import { contact, footerColumns, footerLegal, footerTagline, socials, type SocialNetwork } from "@/data/site";

const socialIcons: Record<SocialNetwork, ComponentType<SVGProps<SVGSVGElement>>> = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
};

const linkClasses = "transition-colors hover:text-accent";

/*
 * Footer (Figma "Frame 2147225253", 31:4408): night background, 625 px at 1440.
 * Logo on a white 140 × 86 tile (padding 10), Roboto Light tagline, link columns (Roboto Bold titles,
 * Roboto Regular links, gaps 24 / 16), socials, a bottom bar with a top border (Manrope Light), and the
 * "NESS PARE BRISE" watermark (HOOKRIDE 294.83, 10 % opacity) cut by the bottom edge.
 */
export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-night font-alt text-snow">
      <Container className="relative z-10 pt-12.5 pb-59.75">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="flex max-w-xs flex-col gap-6 lg:w-43.5">
            <div className="self-start bg-white p-2.5">
              <Logo />
            </div>
            <p className="font-light">{footerTagline}</p>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:flex lg:w-226.75 lg:justify-between lg:gap-0">
            {footerColumns.map((column) => (
              <nav key={column.title} aria-label={column.title} className="flex flex-col gap-6 lg:w-54.5">
                <h2 className="font-bold">{column.title}</h2>
                <ul className="flex flex-col gap-4">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className={linkClasses}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            <div className="flex flex-col gap-6 lg:w-39.25">
              <h2 className="font-bold">Contactez-nous</h2>
              <address className="flex flex-col gap-6 not-italic">
                <a href={contact.phoneHref} className={linkClasses}>
                  {contact.phone}
                </a>
                <a href={`mailto:${contact.email}`} className={`${linkClasses} whitespace-nowrap`}>
                  {contact.email}
                </a>
                <p className="whitespace-nowrap">{contact.hours}</p>
              </address>
            </div>

            <div className="flex flex-col gap-4 lg:w-35">
              <h2 className="font-bold">Réseaux sociaux</h2>
              <ul className="flex items-center gap-4">
                {socials.map(({ network, label, href }) => {
                  const Icon = socialIcons[network];
                  return (
                    <li key={network}>
                      <a href={href} aria-label={label} className={`flex size-9 items-center justify-center rounded-full ${linkClasses}`}>
                        <Icon />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-4.75 pb-5 font-lang font-light sm:flex-row sm:items-center sm:justify-between">
          <p lang="fr">{footerLegal.language}</p>
          <p>{footerLegal.copyright}</p>
        </div>
      </Container>

      <p
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[calc(100%-11rem)] text-center font-display text-watermark-footer whitespace-nowrap text-gradient-footer opacity-10 select-none"
      >
        {footerLegal.watermark}
      </p>
    </footer>
  );
}
