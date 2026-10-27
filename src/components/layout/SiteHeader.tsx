import { Logo } from "@/components/layout/Logo";
import { SiteMenu } from "@/components/layout/SiteMenu";
import { ButtonLink } from "@/components/ui/Button";
import { mainNav, primaryCta } from "@/data/site";

/*
 * Header (Figma "Frame 113", 31:3600): 104 px, padding 16/80, over the hero video.
 * Logo (frame padding 0/16), glass nav pill (31:3603: background blur, radius 52, padding 8,
 * links Inter Medium 16 snow with 8/16 padding), "Prendre rendez-vous" without arrow.
 * The pill needs ~1100 px, so below `xl` it becomes the hamburger menu (PROGRESS.md, D9).
 */
export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex min-h-26 max-w-360 items-center justify-between gap-4 px-1 py-4 md:px-6 xl:px-20">
        <a href="#accueil" className="shrink-0 rounded-button px-4" aria-label="Ness Pare-Brise, retour en haut de page">
          <Logo eager />
        </a>

        <nav aria-label="Navigation principale" className="hidden xl:block">
          <ul className="flex items-center rounded-full p-2 backdrop-blur-nav">
            {mainNav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-full px-4 py-2 font-medium text-snow transition-colors hover:bg-white/10"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3 px-4 py-2">
          {/* Wrapped: cn() does not override the button's own inline-flex. Below `sm` the CTA lives in the menu. */}
          <div className="hidden whitespace-nowrap sm:block">
            <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>
          </div>
          <div className="xl:hidden">
            <SiteMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
