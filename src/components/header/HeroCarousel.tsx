import heroPrincipal from "@/assets/hero-principal.png";

const HeroCarousel = () => (
   <div
     className="relative w-full overflow-hidden aspect-[16/8] sm:aspect-[16/9]"
     aria-label="Credifácil — Mais que crédito, um parceiro para seus melhores planos"
    >
      <img
        src={heroPrincipal}
        alt="Mais que crédito. Um parceiro para seus melhores planos — Credifácil"
        loading="eager"
        decoding="async"
        fetchPriority="high"
        className="absolute inset-x-0 -top-[8%] h-[112%] w-full object-cover object-top bg-background"
        width={1920}
        height={1080}
      />
     {/* Subtle overlay gradient for better text legibility on child components if any */}
     <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60" aria-hidden="true" />
   </div>
);

export default HeroCarousel;
