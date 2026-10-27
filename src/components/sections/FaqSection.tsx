import { AccordionItem } from "@/components/ui/Accordion";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { faq } from "@/data/landing";

/*
 * FAQ (Figma "Frame 2147225473", 31:4387, 1281 × 434, 100 px below the enquiry block and 100 px above
 * the footer): left-aligned intro (heading 570 px, paragraph 421 px), 158 px gap, then four 618 px items
 * 16 px apart, the first one open.
 */
export function FaqSection() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="mt-25 mb-25">
      <Container>
        <div className="flex flex-col gap-10 xl:flex-row xl:items-center xl:gap-39.5">
          <SectionIntro
            layout="start"
            titleId="faq-title"
            eyebrow={faq.eyebrow}
            title={faq.title}
            description={faq.description}
            className="xl:mt-1 xl:w-124.75 xl:shrink-0"
            titleClassName="xl:w-150.5 xl:max-w-none"
            descriptionClassName="max-w-113.25"
          />
          <div className="flex w-full flex-col gap-4 xl:w-154.5">
            {faq.items.map((item, index) => (
              <AccordionItem key={item.question} question={item.question} answer={item.answer} defaultOpen={index === 0} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
