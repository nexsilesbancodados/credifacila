 import Header from "@/components/Header";
 import HeroHome from "@/components/HeroHome";
import ContactFooter from "@/components/ContactFooter";
import HumanizedSection from "@/components/HumanizedSection";
import SolutionsSection from "@/components/SolutionsSection";
import PartnerBanks from "@/components/PartnerBanks";

const Index = () => (
  <div className="relative min-h-screen">
    <Header />
     <main id="main">
       <HeroHome />
       <HumanizedSection />
       <PartnerBanks />
       <SolutionsSection id="solucoes" />
     </main>
    <ContactFooter />
  </div>
);

export default Index;
