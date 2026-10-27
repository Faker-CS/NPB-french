import { OfferCard } from "@/components/cards/OfferCard";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { bookingHref, offers } from "@/data/landing";

/*
 * Offers (Figma "Frame 2147225372", 31:3643, 1128 × 952 at x 171, 104 px below the hero).
 * Centred intro (931 px), two 556 px cards with a 16 px gap 40 px lower, CTAs centred 80 px below.
 * Figma places the block at x 171, i.e. 91 px into the content column rather than centred; kept.
 */
export function OffersSection() {
  return (
    <section id="offres" aria-labelledby="offres-title" className="mt-26">
      <Container>
        <div className="mx-auto flex max-w-282 flex-col items-center xl:mr-0 xl:ml-22.75">
          <SectionIntro
            titleId="offres-title"
            eyebrow={offers.eyebrow}
            title={offers.title}
            description={offers.description}
            className="max-w-232.75"
          />

          <div className="mt-10 grid w-full gap-4 lg:grid-cols-2">
            {offers.cards.map((card) => (
              <OfferCard
                key={card.id}
                price={card.price}
                label={card.label}
                description={card.description}
                decoration={card.decoration}
                cta={offers.cta}
                href={bookingHref}
              />
            ))}
          </div>

          <div className="mt-20 flex flex-wrap justify-center gap-4 px-4 py-2">
            <ButtonLink href={bookingHref} arrow>
              {offers.primaryCta}
            </ButtonLink>
            <ButtonLink href={bookingHref} variant="ghost" arrow>
              {offers.secondaryCta}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
