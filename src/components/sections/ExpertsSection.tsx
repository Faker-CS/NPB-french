import { ExpertsCollage } from "@/components/sections/ExpertsCollage";
import { Container } from "@/components/ui/Container";
import { bookingHref, experts } from "@/data/landing";

/** "Votre verre. Notre expertise." (Figma instance 31:3847, 1280 × 723, 34 px below the insurance block). */
export function ExpertsSection() {
  return (
    <section id="expertise" aria-labelledby="experts-title" className="mt-8.5">
      <Container>
        <ExpertsCollage {...experts} ctaHref={bookingHref} />
      </Container>
    </section>
  );
}
