import TopNav from "@/components/header/TopNav";
import HeroCarousel from "@/components/header/HeroCarousel";

const Header = () => (
  <header className="relative w-full overflow-hidden" aria-label="Cabeçalho Credifácil" id="inicio">
    <TopNav />
    <HeroCarousel />
  </header>
);

export default Header;
