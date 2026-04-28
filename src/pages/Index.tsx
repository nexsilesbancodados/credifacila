import Header from "@/components/Header";
import AdvantagesSection from "@/components/AdvantagesSection";
import LoansSection from "@/components/LoansSection";
import HowItWorks from "@/components/HowItWorks";
import AboutSection from "@/components/AboutSection";
import FaqSection from "@/components/FaqSection";
import ContactFooter from "@/components/ContactFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <AdvantagesSection />
      <LoansSection />
      <HowItWorks />
      <AboutSection />
      <FaqSection />
      <ContactFooter />
    </div>
  );
};

export default Index;
