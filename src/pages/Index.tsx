import Header from "@/components/Header";
import LoansSection from "@/components/LoansSection";
import HowItWorks from "@/components/HowItWorks";
import AdvantagesSection from "@/components/AdvantagesSection";
import PartnerBanks from "@/components/PartnerBanks";
import AboutSection from "@/components/AboutSection";
import FaqSection from "@/components/FaqSection";
import ContactFooter from "@/components/ContactFooter";
import AnimatedBackdrop from "@/components/AnimatedBackdrop";

const Index = () => (
  <div className="relative min-h-screen">
    <AnimatedBackdrop variant="soft" />
    <Header />
    <main id="main">
      {/* 1. Soluções — apresenta produtos logo após a hero */}
      <LoansSection />
      {/* 2. Vantagens — por que escolher a Vamos Crédito */}
      <AdvantagesSection />
      {/* 3. Bancos parceiros — prova social e credibilidade */}
      <PartnerBanks />
      {/* 4. Como funciona — desmistifica o processo em 4 passos */}
      <HowItWorks />
      {/* 5. Sobre nós — história, propósito e estatísticas */}
      <AboutSection />
      {/* 6. FAQ — remove últimas objeções antes do contato */}
      <FaqSection />
    </main>
    <ContactFooter />
  </div>
);

export default Index;
