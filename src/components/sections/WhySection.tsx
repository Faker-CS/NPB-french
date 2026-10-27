import { WhyCards } from "@/components/sections/WhyCards";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { bookingHref, why } from "@/data/landing";

/*
 * "Pourquoi Ness Pare-Brise ?" (Figma "Frame 2147225416", 31:3849, 1055 × 1224, centred, 104 px below
 * "Nous venons à vous"): centred intro (931 px, paragraph 552 px), cards 40 px lower, CTA centred.
 */
export function WhySection() {
  return (
    <section id="pourquoi" aria-labelledby="pourquoi-title" className="mt-26">
      <Container>
        <div className="mx-auto flex max-w-263.75 flex-col items-center gap-10">
          <SectionIntro
            titleId="pourquoi-title"
            eyebrow={why.eyebrow}
            title={why.title}
            description={why.description}
            className="max-w-232.75"
            descriptionClassName="max-w-142"
          />
          <WhyCards cards={why.cards} />
          <div className="px-4 py-2">
            <ButtonLink href={bookingHref} arrow>
              {why.cta}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
