import type { ComponentType, SVGProps } from "react";
import { BoltIcon, DocumentIcon, EuroIcon, InsurersIcon, LockIcon, MapIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { bookingHref, insurance } from "@/data/landing";

const icons: Record<(typeof insurance.benefits)[number]["icon"], ComponentType<SVGProps<SVGSVGElement>>> = {
  insurers: InsurersIcon,
  euro: EuroIcon,
  bolt: BoltIcon,
  document: DocumentIcon,
  map: MapIcon,
  lock: LockIcon,
};

/*
 * Insurance assistance (Figma "Frame 2147225391", 31:3731, 1280 × 750, 34 px below the services).
 * Split intro; 80 px lower a 3 × 2 grid of benefits (389 px columns, inset 16, ~40 px gaps): a 98 px
 * tile (tile grey, 1 px outside border, radius 10) with a 36 px brand icon, then Inter Semi Bold 18.
 * "Book appointment" right-aligned 80 px below.
 */
export function InsuranceSection() {
  return (
    <section id="assurance" aria-labelledby="assurance-title" className="mt-8.5">
      <Container className="flex flex-col">
        <SectionIntro
          layout="split"
          titleId="assurance-title"
          eyebrow={insurance.eyebrow}
          title={insurance.title}
          description={insurance.description}
          titleClassName="lg:max-w-198.5"
          descriptionClassName="lg:max-w-75.5 lg:px-2 lg:text-center"
        />

        <ul className="mt-20 grid gap-x-10 gap-y-10 px-4 sm:grid-cols-2 lg:grid-cols-3">
          {insurance.benefits.map(({ icon, label }) => {
            const Icon = icons[icon];
            return (
              <li key={label} className="flex items-center gap-2">
                <span className="flex size-24.5 shrink-0 items-center justify-center rounded-tile bg-tile text-brand ring-1 ring-tile-line">
                  <Icon />
                </span>
                <span className="px-4 py-2 text-title font-semibold text-ink">{label}</span>
              </li>
            );
          })}
        </ul>

        <div className="mt-20 flex justify-end px-4 py-2">
          <ButtonLink href={bookingHref} arrow>
            {insurance.cta}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
