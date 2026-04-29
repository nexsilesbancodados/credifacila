import Header from "@/components/Header";
import ContactFooter from "@/components/ContactFooter";
import AnimatedBackdrop from "@/components/AnimatedBackdrop";
import HumanizedSection from "@/components/HumanizedSection";

const Index = () => (
  <div className="relative min-h-screen">
    <AnimatedBackdrop variant="soft" />
    <Header />
    <main id="main">
      <HumanizedSection />
    </main>
    <ContactFooter />
  </div>
);

export default Index;
