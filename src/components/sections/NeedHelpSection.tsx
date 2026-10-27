import type { ComponentType, SVGProps } from "react";
import { CalendarIcon, ChatIcon, MapPinOutlineIcon } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { needHelp } from "@/data/landing";

const icons: Record<(typeof needHelp.actions)[number]["icon"], ComponentType<SVGProps<SVGSVGElement>>> = {
  calendar: CalendarIcon,
  pin: MapPinOutlineIcon,
  chat: ChatIcon,
};

/*
 * "Besoin d'aide ?" (Figma "Frame 2147225437", 31:4050, 931 × 451, centred, 104 px below the dark block).
 * Centred intro (paragraph 422 px); 40 px lower three 215 px actions with a 51 px gap (98 px tile like the
 * insurance benefits, Inter Semi Bold 18 label 16 px below); then the "NESS PARE-BRISE" signature line.
 */
export function NeedHelpSection() {
  return (
    <section id="aide" aria-labelledby="aide-title" className="mt-26">
      <Container>
        <div className="mx-auto flex max-w-232.75 flex-col items-center">
          <SectionIntro
            titleId="aide-title"
            eyebrow={needHelp.eyebrow}
            title={needHelp.title}
            description={needHelp.description}
            className="w-full"
            descriptionClassName="max-w-113.5"
          />

          <ul className="mt-10 flex flex-wrap justify-center gap-x-12.75 gap-y-8">
            {needHelp.actions.map(({ icon, label, href }) => {
              const Icon = icons[icon];
              return (
                <li key={label} className="w-53.75">
                  <a href={href} className="group flex flex-col items-center gap-4 rounded-tile">
                    <span className="flex size-24.5 items-center justify-center rounded-tile bg-tile text-brand ring-1 ring-tile-line transition-colors group-hover:bg-tile-line">
                      <Icon />
                    </span>
                    <span className="px-2 py-1 text-title font-semibold text-ink">{label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <p className="mt-10 flex flex-wrap items-center justify-center">
            <span className="px-2 py-1 text-title font-semibold text-ink">{needHelp.signature.name}</span>
            <span className="px-2 py-1 font-medium text-muted">{needHelp.signature.tagline}</span>
          </p>
        </div>
      </Container>
    </section>
  );
}
