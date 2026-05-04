import heroPrincipal from "@/assets/hero-principal.png";

const HeroCarousel = () => (
  <div
    className="relative w-full overflow-hidden aspect-[4/5] sm:aspect-[16/10] md:aspect-[16/9]"
    aria-label="Credifácil — Mais que crédito, um parceiro para seus melhores planos"
  >
    <img
      src={heroPrincipal}
      alt="Mais que crédito. Um parceiro para seus melhores planos — Credifácil"
      loading="eager"
      decoding="async"
      fetchPriority="high"
      className="absolute inset-0 h-full w-full object-cover object-center"
      width={1920}
      height={1080}
    />
  </div>
);

export default HeroCarousel;
