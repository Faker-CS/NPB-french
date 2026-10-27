import Image from "next/image";
import { notFound } from "next/navigation";
import * as Icons from "@/components/icons";
import { LocationPin } from "@/components/motion/LocationPin";
import { Marquee } from "@/components/motion/Marquee";
import { OfferFloat } from "@/components/motion/OfferFloat";
import { Reveal } from "@/components/motion/Reveal";
import { Sparkle } from "@/components/motion/Sparkle";
import { TyreStack } from "@/components/motion/TyreStack";
import { AccordionItem } from "@/components/ui/Accordion";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Checkbox, SearchField, TextArea, TextField } from "@/components/ui/FormFields";
import { PillButton } from "@/components/ui/PillButton";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { partnersMarquee } from "@/lib/motion";

/*
 * Development-only component sheet: every Phase 2 component and state, with Figma copy,
 * for side-by-side checks against the Figma frames. Returns 404 in production builds.
 */

const partners = ["nessglass", "oxxoglass", "npb", "nexxytire"] as const;
const partnerSizes = { nessglass: [194, 73], oxxoglass: [143, 68], npb: [127, 73], nexxytire: [169, 69] } as const;

function Block({ title, children, dark = false }: { title: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <section className={dark ? "bg-night py-12 text-snow" : "py-12"}>
      <Container>
        <h2 className="mb-6 px-4 font-mono text-eyebrow text-muted uppercase">{title}</h2>
        {children}
      </Container>
    </section>
  );
}

export default function KitPage() {
  if (process.env.NODE_ENV === "production") notFound();

  return (
    <main id="contenu">
      <section className="relative min-h-200 overflow-hidden rounded-card">
        <Image src="/images/hero-poster.webp" alt="" fill preload sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-black/20" />
        <Container className="relative flex flex-col gap-6 pt-40">
          <div className="px-4 py-2">
            <Eyebrow tone="glass" uppercase={false}>
              Services de pare-brise
            </Eyebrow>
          </div>
          <div className="flex flex-wrap gap-4 px-4 py-2">
            <ButtonLink href="#" arrow>
              Prendre rendez-vous
            </ButtonLink>
            <ButtonLink href="#" variant="ghost" tone="dark" arrow>
              Demander un rappel
            </ButtonLink>
            <PillButton variant="glass">Book appointment</PillButton>
          </div>
        </Container>
      </section>

      <Block title="SectionIntro · center (31:3645)">
        <SectionIntro
          eyebrow="Services de pare-brise"
          title="UN PARE-BRISE. ZÉRO STRESS. VOTRE FRANCHISE POURRAIT ÊTRE COUVERTE."
          description="Faites remplacer votre pare-brise chez vous grâce à notre service national."
          titleClassName="max-w-232.75"
        />
      </Block>

      <Block title="SectionIntro · start (31:3704)">
        <SectionIntro
          layout="start"
          eyebrow="Trouvez-nous près de chez vous"
          title="VOTRE CENTRE NESS LE PLUS PROCHE EST PLUS PRÈS QUE VOUS NE LE PENSEZ."
          description="Trouvez votre centre Ness Pare-Brise le plus proche et bénéficiez d'un service professionnel de vitrage automobile où que vous soyez en France."
          className="max-w-122.75"
        />
      </Block>

      <Block title="SectionIntro · split (31:3732)">
        <SectionIntro
          layout="split"
          eyebrow="Assistance Assurance"
          title={"MOINS DE PAPIERS.\nMOINS DE COÛT.\nPLUS DE TRANQUILLITÉ D'ESPRIT."}
          description="Faites remplacer votre pare-brise à domicile avec notre service national."
          titleClassName="max-w-198.5"
          descriptionClassName="max-w-75.5 text-center"
        />
      </Block>

      <Block title="SectionIntro · center, dark (31:3904)" dark>
        <SectionIntro
          tone="dark"
          eyebrowTone="accent"
          eyebrow="Réparer ou remplacer ?"
          title={"PETIT IMPACT ? RÉPAREZ-LE.\nVERRE CRAQUÉ ? REMPLACEZ-LE."}
          description="Petit impact ? Nous le réparerons rapidement. Verre craqué ? Nous le remplacerons en toute sécurité et de manière professionnelle."
        />
      </Block>

      <Block title="Buttons · default / disabled">
        <div className="flex flex-wrap items-center gap-4 px-4">
          <ButtonLink href="#">Prendre rendez-vous</ButtonLink>
          <ButtonLink href="#" arrow>
            Prendre rendez-vous
          </ButtonLink>
          <ButtonLink href="#" variant="ghost" arrow>
            Voir tous les articles
          </ButtonLink>
          <Button strong className="w-38">
            Rechercher
          </Button>
          <Button strong glow className="w-123">
            RÉCLAMEZ MAINTENANT
          </Button>
          <Button arrow disabled>
            Prendre rendez-vous
          </Button>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-4 bg-night-form p-4">
          <PillButton>Book appointment</PillButton>
          <PillButton variant="glass">Book appointment</PillButton>
          <PillButton variant="signal" type="submit">
            SEND MY REQUEST
          </PillButton>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-4 px-4">
          <ArrowButton label="Diapositive précédente" direction="prev" />
          <ArrowButton label="Diapositive suivante" />
          <span className="bg-slide p-2">
            <ArrowButton label="Voir le service" variant="light" />
          </span>
          <ArrowButton label="Ouvrir" variant="brand" direction="down" />
          <ArrowButton label="Fermer" variant="brand" direction="up" />
        </div>
      </Block>

      <Block title="Eyebrow tones">
        <div className="flex flex-wrap gap-4 bg-teal-night p-4">
          <Eyebrow>Services de pare-brise</Eyebrow>
          <Eyebrow tone="glass">Services de pare-brise</Eyebrow>
          <Eyebrow tone="accent">Réparer ou remplacer ?</Eyebrow>
        </div>
      </Block>

      <Block title="Fields">
        <div className="flex max-w-137.5 gap-2 px-4">
          <SearchField label="Entrez la ville ou le code postal..." name="kit-search" className="flex-1" />
          <Button strong className="w-38">
            Rechercher
          </Button>
        </div>
        <div className="mt-6 flex max-w-154 flex-col gap-5 bg-night-form p-4">
          <div className="grid grid-cols-2 gap-4">
            <TextField label="Prénom" name="kit-first" />
            <TextField label="Nom de famille" name="kit-last" />
          </div>
          <TextField label="Numéro de téléphone" name="kit-phone" type="tel" />
          <TextArea label="Dites-nous comment nous pouvons vous aider..." name="kit-message" />
          <Checkbox name="kit-consent">
            J&apos;accepte les [Conditions Générales] fournies par l&apos;entreprise. En fournissant mon numéro de téléphone, j&apos;accepte de recevoir des
            messages SMS et des appels de l&apos;entreprise.
          </Checkbox>
        </div>
      </Block>

      <Block title="FAQ items (open / closed)">
        <div className="flex max-w-154.5 flex-col gap-4">
          <AccordionItem
            defaultOpen
            question="COMBIEN DE TEMPS APRÈS L'INSTALLATION PUIS-JE CONDUIRE ?"
            answer="Généralement 1 à 2 heures, permettant à l'adhésif de durcir correctement et d'assurer votre sécurité sur la route."
          />
          <AccordionItem question="PUIS-JE LAVER MA VOITURE APRÈS LE REMPLACEMENT ?" answer="(Réponse absente de Figma)" />
        </div>
      </Block>

      <Block title="Motion primitives">
        <div className="flex flex-wrap items-start gap-8 px-4">
          <OfferFloat className="w-80 bg-surface" />
          <TyreStack className="w-60 bg-surface" />
          <Sparkle className="w-34 bg-surface" />
          <Sparkle className="w-22 bg-surface" />
          <div className="flex gap-6 bg-surface p-6">
            <LocationPin />
            <LocationPin />
          </div>
          <Reveal className="rounded-card bg-surface p-6">Reveal (fade in once)</Reveal>
        </div>
        <Marquee
          label="Nos partenaires"
          duration={partnersMarquee.transition.duration}
          className="mt-8"
          setClassName="items-center gap-[7.1px] pr-[7.1px]"
        >
          {partners.map((name) => (
            <div key={name} className="flex h-25 w-87.5 items-center justify-center rounded-card bg-surface">
              <Image src={`/images/partner-${name}.webp`} alt={name} width={partnerSizes[name][0]} height={partnerSizes[name][1]} />
            </div>
          ))}
        </Marquee>
      </Block>

      <Block title="Icons">
        <ul className="flex flex-wrap gap-4 px-4">
          {Object.entries(Icons).map(([name, Icon]) => (
            <li key={name} className="flex w-32 flex-col items-center gap-2 rounded-card bg-slide p-3 text-brand">
              <Icon />
              <span className="text-[11px] text-ink">{name.replace("Icon", "")}</span>
            </li>
          ))}
        </ul>
      </Block>
    </main>
  );
}
