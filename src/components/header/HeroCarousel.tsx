import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-credifacil.webp";
import heroImageMd from "@/assets/hero-credifacil-md.webp";
import heroImageSm from "@/assets/hero-credifacil-sm.webp";
import heroSlide2 from "@/assets/hero-slide-2.webp";
import heroSlide2Md from "@/assets/hero-slide-2-md.webp";
import heroSlide2Sm from "@/assets/hero-slide-2-sm.webp";
import heroSlide3 from "@/assets/hero-slide-3.webp";
import heroSlide3Md from "@/assets/hero-slide-3-md.webp";
import heroSlide3Sm from "@/assets/hero-slide-3-sm.webp";
import heroSlide4 from "@/assets/hero-slide-4.webp";
import heroSlide4Md from "@/assets/hero-slide-4-md.webp";
import heroSlide4Sm from "@/assets/hero-slide-4-sm.webp";
import heroSlide5 from "@/assets/hero-slide-5.webp";
import heroSlide5Md from "@/assets/hero-slide-5-md.webp";
import heroSlide5Sm from "@/assets/hero-slide-5-sm.webp";

type Slide = { src: string; srcMd: string; srcSm: string; alt: string };

const slides: Slide[] = [
  { src: heroImage, srcMd: heroImageMd, srcSm: heroImageSm, alt: "O crédito que você precisa, com a confiança que você merece" },
  { src: heroSlide2, srcMd: heroSlide2Md, srcSm: heroSlide2Sm, alt: "Tudo pelo celular, sem sair de casa" },
  { src: heroSlide3, srcMd: heroSlide3Md, srcSm: heroSlide3Sm, alt: "Realize os sonhos da sua família com tranquilidade" },
  { src: heroSlide4, srcMd: heroSlide4Md, srcSm: heroSlide4Sm, alt: "O carro novo mais perto do que você imagina" },
  { src: heroSlide5, srcMd: heroSlide5Md, srcSm: heroSlide5Sm, alt: "As menores taxas do mercado no seu consignado" },
];

const HeroCarousel = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hiddenTab, setHiddenTab] = useState(false);
  const [offscreen, setOffscreen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (paused || hiddenTab || offscreen) return;
    const id = setInterval(() => setActive((p) => (p + 1) % slides.length), 5500);
    return () => clearInterval(id);
  }, [paused, hiddenTab, offscreen]);

  useEffect(() => {
    const onVis = () => setHiddenTab(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => setOffscreen(!entries[0]?.isIntersecting),
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative h-[520px] w-full overflow-hidden bg-background md:h-[640px] lg:h-[760px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Destaques Credifácil"
    >
      {slides.map((s, i) => {
        const next = (active + 1) % slides.length;
        const shouldRender = i === active || i === next;
        if (!shouldRender) return null;
        return (
          <img
            key={s.src}
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={i === active ? "high" : "low"}
            src={s.src}
            srcSet={`${s.srcSm} 640w, ${s.srcMd} 1200w, ${s.src} 1920w`}
            sizes="100vw"
            alt={s.alt}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-in-out ${
              active === i ? "opacity-100" : "opacity-0"
            }`}
            width={1920}
            height={1080}
            aria-hidden={active !== i}
          />
        );
      })}

      <button
        type="button"
        onClick={() => setActive((p) => (p - 1 + slides.length) % slides.length)}
        aria-label="Slide anterior"
        className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-foreground/10 bg-background/70 text-foreground/80 backdrop-blur-md transition-all hover:scale-110 hover:bg-background"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => setActive((p) => (p + 1) % slides.length)}
        aria-label="Próximo slide"
        className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-foreground/10 bg-background/70 text-foreground/80 backdrop-blur-md transition-all hover:scale-110 hover:bg-background"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-foreground/10 bg-background/70 px-3 py-2 backdrop-blur-md">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Ir para slide ${i + 1}`}
            aria-current={active === i ? "true" : undefined}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              active === i ? "w-8 bg-primary" : "w-1.5 bg-foreground/30 hover:bg-foreground/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
