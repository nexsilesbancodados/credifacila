import Header from "@/components/Header";
import ContactFooter from "@/components/ContactFooter";
import AnimatedBackdrop from "@/components/AnimatedBackdrop";
import HumanizedSection from "@/components/HumanizedSection";
import SolutionsSection from "@/components/SolutionsSection";

const Index = () => (
  <div className="relative min-h-screen">
    <AnimatedBackdrop variant="soft" />
    <Header />
    <main id="main">
      <HumanizedSection />
      <SolutionsSection />
    </main>
    <ContactFooter />
  </div>
);

export default Index;
