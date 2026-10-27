import Image from "next/image";
import { placeNode } from "@/components/motion/FigmaFrame";
import { ContactForm } from "@/components/sections/ContactForm";
import { contactForm } from "@/data/landing";

const card = { width: 692, height: 760 };
// "image 58": 754 × 1132 at (0, −233) inside the clipped 692 × 760 card.
const photo = { x: 0, y: -233, width: 754, height: 1132 };

/*
 * Enquiry block (Figma "Frame 2147225493", 31:4346, 1442 × 800, night, 100 px below the partners).
 * Inset 20: photo card (692 × 760, night-form fill, clipped) with the "Enquire Form" pill (brand 10 %,
 * Roboto Medium 14 uppercase, radius 42, background blur) and the 58 px heading at the bottom, then 32 px
 * to the right the form panel (616 px, vertically centred).
 */
export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="mt-25 bg-night text-snow">
      <div className="mx-auto flex max-w-360 flex-col gap-8 px-5 py-5 md:px-10 xl:h-200 xl:flex-row xl:items-center xl:px-5">
        <div className="relative isolate flex min-h-120 flex-col justify-end overflow-hidden bg-night-form p-4 xl:h-190 xl:w-173 xl:shrink-0">
          <div className="absolute -z-10 hidden xl:block" style={placeNode(card, photo)}>
            <Image src={contactForm.image.src} alt={contactForm.image.alt} fill sizes="754px" className="object-cover" />
          </div>
          <Image src={contactForm.image.src} alt={contactForm.image.alt} fill sizes="100vw" className="-z-10 object-cover xl:hidden" />
          <div className="flex max-w-126 flex-col">
            <div className="px-4 py-2">
              <p className="inline-flex rounded-form bg-brand/10 px-4 py-2 font-alt text-eyebrow font-medium text-brand uppercase backdrop-blur-form">
                {contactForm.label}
              </p>
            </div>
            <h2 id="contact-title" className="px-4 py-2 font-display text-form-title text-snow">
              {contactForm.title}
            </h2>
          </div>
        </div>

        <div className="xl:w-154">
          <ContactForm
            fields={contactForm.fields}
            consent={contactForm.consent}
            submit={contactForm.submit}
            success={contactForm.success}
          />
        </div>
      </div>
    </section>
  );
}
