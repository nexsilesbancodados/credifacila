import heroAsset from "@/assets/hero.png.asset.json";
import Navbar from "@/components/Navbar";

const Index = () => (
  <main className="min-h-screen bg-background">
    <Navbar />
    <section className="relative w-full h-screen overflow-hidden">
      <img
        src={heroAsset.url}
        alt="CredMais hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </section>
  </main>
);

export default Index;