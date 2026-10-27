import { ArticlesSection } from "@/components/sections/ArticlesSection";
import { ComeToYouSection } from "@/components/sections/ComeToYouSection";
import { CoverageSection } from "@/components/sections/CoverageSection";
import { ExpertsSection } from "@/components/sections/ExpertsSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { InsuranceSection } from "@/components/sections/InsuranceSection";
import { LocationsSection } from "@/components/sections/LocationsSection";
import { NeedHelpSection } from "@/components/sections/NeedHelpSection";
import { OffersSection } from "@/components/sections/OffersSection";
import { RepairOrReplaceSection } from "@/components/sections/RepairOrReplaceSection";
import { RewardsSection } from "@/components/sections/RewardsSection";
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
      <RepairOrReplaceSection />
      <NeedHelpSection />
      <RewardsSection />
      <ArticlesSection />
      <CoverageSection />
    </main>
  );
}
