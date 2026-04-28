import Header from "@/components/Header";
import LoansSection from "@/components/LoansSection";
import HowItWorks from "@/components/HowItWorks";
import AdvantagesSection from "@/components/AdvantagesSection";
import AboutSection from "@/components/AboutSection";
import FaqSection from "@/components/FaqSection";
import ContactFooter from "@/components/ContactFooter";
import AnimatedBackdrop from "@/components/AnimatedBackdrop";

const Index = () => (
  <div className="relative min-h-screen">
    <AnimatedBackdrop variant="soft" />
    <Header />
    <main id="main">
      {/* 1. Soluções (linhas de crédito) — primeiro contato com produtos */}
      <LoansSection />
      {/* 2. Como funciona — fluxo de contratação em 4 passos */}
      <HowItWorks />
      {/* 3. Vantagens + propósito + depoimentos */}
      <AdvantagesSection />
      {/* 4. Sobre nós + estatísticas com counters */}
      <AboutSection />
      {/* 5. FAQ */}
      <FaqSection />
    </main>
    <ContactFooter />
  </div>
);

export default Index;
