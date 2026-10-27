import Image from "next/image";
import { Marquee } from "@/components/motion/Marquee";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { partners } from "@/data/landing";
import { partnersMarquee } from "@/lib/motion";
import { cn } from "@/lib/cn";

/*
 * Partners (Figma "Frame 2147225475", 31:4330, 1280 × 356, 104 px below the reviews): centred intro
 * (paragraph 422 px), then 40 px lower the "our partner" marquee (1:1054): 214 × 100 tiles 140 px apart,
 * logos in luminosity blend (greyscale), one set of four (1417 px) every 10 s, linear.
 */
export function PartnersSection() {
  return (
    <section id="partenaires" aria-labelledby="partenaires-title" className="mt-26">
      <Container className="flex flex-col gap-10">
        <SectionIntro
          titleId="partenaires-title"
          eyebrow={partners.eyebrow}
          title={partners.title}
          description={partners.description}
          descriptionClassName="max-w-113.5"
        />
        <Marquee label="Logos de nos partenaires" duration={partnersMarquee.transition.duration} setClassName="gap-35 pr-35">
          {partners.logos.map((logo) => (
            <div
              key={logo.name}
              className={cn("flex h-25 w-53.5 shrink-0 bg-white", logo.align === "start" ? "items-start justify-start p-2.5" : "items-center justify-center p-3.5")}
            >
              <Image src={logo.src} alt={logo.name} width={logo.width} height={logo.height} className="mix-blend-luminosity" />
            </div>
          ))}
        </Marquee>
      </Container>
    </section>
  );
}
