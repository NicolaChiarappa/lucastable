import { HeroSection } from "./components/HeroSection";
import { InfoSection } from "./components/InfoSection";
import { ProposalsSection } from "./components/ProposalsSection";
import { MenuSection } from "./components/MenuSection";
import { ContactSection } from "./components/ContactSection";
import { BurgerMenu } from "./components/BurgerMenu";

export default function App() {
  return (
    <div className='min-h-screen bg-[#0d3b2e]'>
      <BurgerMenu />
      <HeroSection />
      <InfoSection />
      <ProposalsSection />
      <MenuSection />
      <ContactSection />
    </div>
  );
}
