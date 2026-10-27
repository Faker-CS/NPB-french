import { ServicesCarousel } from "@/components/sections/ServicesCarousel";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { bookingHref, services } from "@/data/landing";

/*
 * Services (Figma "Frame 2147225380", 31:3798, 1280 × 821, 104 px below the locations):
 * split intro (heading 570 px, centred 270 px paragraph bottom-right), carousel 40 px lower.
 */
export function ServicesSection() {
  return (
    <section id="services" aria-labelledby="services-title" className="mt-26">
      <Container className="flex flex-col gap-10">
        <SectionIntro
          layout="split"
          titleId="services-title"
          eyebrow={services.eyebrow}
          title={services.title}
          description={services.description}
          titleClassName="lg:max-w-150.5"
          descriptionClassName="lg:max-w-75.5 lg:text-center"
        />
        <ServicesCarousel slides={services.slides} linkHref={bookingHref} />
      </Container>
    </section>
  );
}
