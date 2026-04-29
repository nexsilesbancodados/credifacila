import Header from "@/components/Header";
import ContactFooter from "@/components/ContactFooter";
import HumanizedSection from "@/components/HumanizedSection";
import SolutionsSection from "@/components/SolutionsSection";

const Index = () => (
  <div className="relative min-h-screen">
    <Header />
    <main id="main">
      <HumanizedSection />
      <SolutionsSection />
    </main>
    <ContactFooter />
  </div>
);

export default Index;
