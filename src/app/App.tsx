import { HeroSection } from "./components/HeroSection";
import { InfoSection } from "./components/InfoSection";
import { ProposalsSection } from "./components/ProposalsSection";
import { MenuSection } from "./components/MenuSection";
import { ContactSection } from "./components/ContactSection";
import { BurgerMenu } from "./components/BurgerMenu";

import { Logo } from "./components/Logo";

import { ReviewsSection } from "./components/ReviewsSection";
import { AvailabilityBadge } from "./components/AvailabilityBadge";

import { useSEO } from "../hooks/useSEO";

export default function App() {
  useSEO();
  return (
    <div className='min-h-screen bg-[#0d3b2e] relative'>
      <AvailabilityBadge />
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50">
        <Logo className="w-50 md:w-70 text-white" />
      </div>
      <BurgerMenu />
      <HeroSection />
      <InfoSection />
      <ProposalsSection />
      <MenuSection />
      <ReviewsSection />
      <ContactSection />
    </div>
  );
}
