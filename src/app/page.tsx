import { ComeToYouSection } from "@/components/sections/ComeToYouSection";
import { ExpertsSection } from "@/components/sections/ExpertsSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { InsuranceSection } from "@/components/sections/InsuranceSection";
import { LocationsSection } from "@/components/sections/LocationsSection";
import { OffersSection } from "@/components/sections/OffersSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhySection } from "@/components/sections/WhySection";

export default function Home() {
  return (
    <main id="contenu">
      <HeroSection />
      <OffersSection />
      <LocationsSection />
      <ServicesSection />
      <InsuranceSection />
      <ExpertsSection />
      <HowItWorksSection />
      <ComeToYouSection />
      <WhySection />
    </main>
  );
}
