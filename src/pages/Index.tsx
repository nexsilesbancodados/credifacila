import heroAsset from "@/assets/hero.png.asset.json";
import Navbar from "@/components/Navbar";
import CtaSection from "@/components/CtaSection";
import ServicesGrid from "@/components/ServicesGrid";
import ArchShowcase from "@/components/ArchShowcase";

const Index = () => (
  <main className="min-h-screen text-foreground">
    <Navbar />
    <section className="relative w-full h-screen overflow-hidden">
      <img
        src={heroAsset.url}
        alt="CredMais hero"
        className="absolute inset-0 w-full h-full object-cover img-fade-bottom"
      />
    </section>
    <ServicesGrid />
    <ArchShowcase />
    <CtaSection />
  </main>
);

export default Index;