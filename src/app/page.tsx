import { HeroSection } from "@/components/sections/HeroSection";
import { LocationsSection } from "@/components/sections/LocationsSection";
import { OffersSection } from "@/components/sections/OffersSection";
import { ServicesSection } from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <main id="contenu">
      <HeroSection />
      <OffersSection />
      <LocationsSection />
      <ServicesSection />
    </main>
  );
}
