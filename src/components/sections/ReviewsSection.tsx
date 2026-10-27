import { ReviewCard } from "@/components/cards/ReviewCard";
import { ReviewsCarousel } from "@/components/sections/ReviewsCarousel";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { reviews } from "@/data/landing";

/*
 * Reviews (Figma "Frame 2147225470", 31:4314, 1281 × 511, 34 px below the regions): split intro
 * (heading 570 px, paragraph 421 px), carousel 40 px lower.
 */
export function ReviewsSection() {
  const count = reviews.pages * reviews.perPage;
  return (
    <section id="avis" aria-labelledby="avis-title" className="mt-8.5">
      <Container className="flex flex-col gap-10">
        <SectionIntro
          layout="split"
          titleId="avis-title"
          eyebrow={reviews.eyebrow}
          title={reviews.title}
          description={reviews.description}
          titleClassName="lg:max-w-150.5"
          descriptionClassName="lg:max-w-113.25"
        />
        <ReviewsCarousel pages={reviews.pages}>
          {Array.from({ length: count }, (_, index) => (
            <li key={index} className="snap-start">
              <ReviewCard {...reviews.review} />
            </li>
          ))}
        </ReviewsCarousel>
      </Container>
    </section>
  );
}
