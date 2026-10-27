import { HowItWorks } from "@/components/sections/HowItWorks";
import { Container } from "@/components/ui/Container";
import { bookingHref, howItWorks } from "@/data/landing";

/** "Comment ça marche" (Figma instance 31:3848, 1280 × 725, 104 px below the collage). */
export function HowItWorksSection() {
  return (
    <section id="comment-ca-marche" aria-labelledby="etapes-title" className="mt-26">
      <Container>
        <HowItWorks {...howItWorks} ctaHref={bookingHref} />
      </Container>
    </section>
  );
}
