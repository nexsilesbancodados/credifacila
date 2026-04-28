import { useEffect, useRef, useState, type ComponentType, type SVGProps } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Smartphone,
  Home,
  Car,
  Briefcase,
  Heart,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Clock,
  Star,
} from "lucide-react";
import { whatsappLink } from "@/config/site";
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

type LucideIcon = ComponentType<SVGProps<SVGSVGElement>>;

type Slide = {
  src: string;
  srcMd: string;
  srcSm: string;
  alt: string;
  objectPosition: string;
  eyebrow: string;
  eyebrowIcon: LucideIcon;
  title: string[];
  goldFromLine: number;
  description: string;
  descriptionHighlight: string;
  ctaPrimary: { label: string; href: string; icon: LucideIcon };
  ctaSecondary: { label: string; href: string };
};

const slides: Slide[] = [
  {
    src: heroImage,
    srcMd: heroImageMd,
    srcSm: heroImageSm,
    alt: "Casal sorridente representando clientes satisfeitos da Credifácil",
    objectPosition: "64% center",
    eyebrow: "Crédito sem complicação",
    eyebrowIcon: Sparkles,
    title: ["O crédito que", "você precisa,", "com a confiança", "que você merece."],
    goldFromLine: 2,
    description: "Empréstimos rápidos, seguros e descomplicados para realizar seus planos e",
    descriptionHighlight: "transformar sua vida",
    ctaPrimary: {
      label: "Solicitar meu empréstimo",
      href: whatsappLink("Olá! Quero solicitar um empréstimo na Credifácil."),
      icon: TrendingUp,
    },
    ctaSecondary: { label: "Falar no WhatsApp", href: whatsappLink("Olá! Quero saber mais sobre os créditos da Credifácil.") },
  },
  {
    src: heroSlide2,
    srcMd: heroSlide2Md,
    srcSm: heroSlide2Sm,
    alt: "Mulher sorrindo enquanto usa o aplicativo da Credifácil no celular",
    objectPosition: "70% center",
    eyebrow: "100% Digital",
    eyebrowIcon: Smartphone,
    title: ["Tudo pelo", "celular,", "sem sair", "de casa."],
    goldFromLine: 2,
    description: "Simule, contrate e receba o dinheiro pelo app em poucos minutos, com",
    descriptionHighlight: "zero burocracia",
    ctaPrimary: {
      label: "Contratar pelo celular",
      href: whatsappLink("Olá! Quero contratar meu crédito pelo celular."),
      icon: Smartphone,
    },
    ctaSecondary: { label: "Ver como funciona", href: "#como-funciona" },
  },
  {
    src: heroSlide3,
    srcMd: heroSlide3Md,
    srcSm: heroSlide3Sm,
    alt: "Família comemorando a aprovação do crédito Credifácil em casa",
    objectPosition: "60% center",
    eyebrow: "Para a sua família",
    eyebrowIcon: Home,
    title: ["Realize os", "sonhos da sua", "família com", "tranquilidade."],
    goldFromLine: 2,
    description: "Use seu empréstimo para reformar a casa, viajar ou organizar as finanças com",
    descriptionHighlight: "parcelas que cabem no bolso",
    ctaPrimary: {
      label: "Quero realizar meu sonho",
      href: whatsappLink("Olá! Quero realizar meu sonho com a Credifácil."),
      icon: Heart,
    },
    ctaSecondary: { label: "Ver opções", href: "#solucoes" },
  },
  {
    src: heroSlide4,
    srcMd: heroSlide4Md,
    srcSm: heroSlide4Sm,
    alt: "Homem feliz segurando as chaves de um carro novo financiado pela Credifácil",
    objectPosition: "55% center",
    eyebrow: "Crédito com garantia",
    eyebrowIcon: Car,
    title: ["O carro novo", "mais perto", "do que você", "imagina."],
    goldFromLine: 2,
    description: "Use seu veículo como garantia e libere até R$ 150 mil com as",
    descriptionHighlight: "menores taxas do mercado",
    ctaPrimary: {
      label: "Solicitar crédito com veículo",
      href: whatsappLink("Olá! Quero crédito com garantia de veículo."),
      icon: Car,
    },
    ctaSecondary: { label: "Saber mais", href: "#solucoes" },
  },
  {
    src: heroSlide5,
    srcMd: heroSlide5Md,
    srcSm: heroSlide5Sm,
    alt: "Servidor público sorridente aproveitando as menores taxas do crédito consignado Credifácil",
    objectPosition: "60% center",
    eyebrow: "Crédito Consignado",
    eyebrowIcon: Briefcase,
    title: ["As menores taxas", "do mercado", "no seu", "consignado."],
    goldFromLine: 2,
    description: "Para servidores, aposentados e pensionistas do INSS — desconto direto em folha com",
    descriptionHighlight: "as menores taxas do mercado",
    ctaPrimary: { label: "Quero meu consignado", href: "/consignado", icon: Briefcase },
    ctaSecondary: {
      label: "Saber mais",
      href: "/consignado",
    },
  },
];

const HeroCarousel = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hiddenTab, setHiddenTab] = useState(false);
  const [offscreen, setOffscreen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const slide = slides[active];
  const EyebrowIcon = slide.eyebrowIcon;
  const PrimaryIcon = slide.ctaPrimary.icon;

  useEffect(() => {
    if (paused || hiddenTab || offscreen) return;
    const id = setInterval(() => {
      setActive((p) => (p + 1) % slides.length);
    }, 5500);
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
      className="relative h-[680px] overflow-hidden md:h-[760px] lg:h-[820px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Destaques da Credifácil"
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
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1600ms] ease-in-out ${
              active === i ? "scale-100 opacity-100" : "scale-105 opacity-0"
            }`}
            style={{ objectPosition: s.objectPosition }}
            width={1920}
            height={1080}
            aria-hidden={active !== i}
          />
        );
      })}

      {/* Cinematic overlay (combinado em 1 div) */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(95deg, hsl(215 50% 14% / 0.97) 0%, hsl(215 50% 14% / 0.85) 28%, hsl(215 50% 14% / 0.4) 58%, transparent 82%), radial-gradient(ellipse 80% 50% at 85% 50%, hsl(35 85% 58% / 0.35), transparent 65%)",
        }}
        aria-hidden
      />
      {/* Floating gold orb (única, suave) */}
      <div
        className="pointer-events-none absolute left-[12%] top-[20%] h-1.5 w-1.5 rounded-full bg-brand-gold/70 blur-[1px]"
        style={{ animation: "float 7s ease-in-out infinite", willChange: "transform, opacity" }}
        aria-hidden
      />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="w-full px-5 md:px-8 lg:px-12">
          <div className="max-w-[600px] animate-fade-in">
            <div
              key={`eyebrow-${active}`}
              className="mb-6 inline-flex animate-fade-in items-center gap-2.5 rounded-full border border-brand-gold/40 bg-brand-gold/[0.08] px-3.5 py-1.5 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-brand-gold/60" />
                <span className="relative h-2 w-2 rounded-full bg-brand-gold" />
              </span>
              <EyebrowIcon className="h-3.5 w-3.5 text-brand-gold" />
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-brand-gold">
                {slide.eyebrow}
              </span>
            </div>

            <h1
              key={`title-${active}`}
              className="animate-fade-in font-display text-[42px] font-extrabold leading-[1.02] tracking-tight text-white md:text-[64px] lg:text-[72px]"
              style={{ textShadow: "0 2px 24px hsl(215 52% 12% / 0.45)" }}
            >
              {slide.title.map((line, idx) => {
                const isGold = idx >= slide.goldFromLine;
                return (
                  <span key={idx}>
                    {isGold ? (
                      <span
                        className="bg-clip-text text-transparent"
                        style={{ backgroundImage: "var(--gradient-gold)" }}
                      >
                        {line}
                      </span>
                    ) : (
                      line
                    )}
                    {idx < slide.title.length - 1 && <br />}
                  </span>
                );
              })}
            </h1>

            <p
              key={`desc-${active}`}
              className="mt-6 max-w-md animate-fade-in text-base leading-relaxed text-white/75 md:text-[17px]"
            >
              {slide.description}{" "}
              <span className="font-semibold text-white">{slide.descriptionHighlight}</span>.
            </p>

            <div
              key={`cta-${active}`}
              className="mt-8 flex animate-fade-in flex-wrap items-center gap-3"
            >
              {(() => {
                const isInternal = slide.ctaPrimary.href.startsWith("/");
                const primaryClassName = "group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl px-7 py-4 text-base font-bold text-brand-gold-foreground shadow-[var(--shadow-gold)] transition-all hover:scale-[1.03] hover:brightness-110";
                const primaryContent = (
                  <>
                    <span
                      className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                      aria-hidden
                    />
                    <PrimaryIcon className="relative h-5 w-5" />
                    <span className="relative">{slide.ctaPrimary.label}</span>
                    <ChevronRight className="relative h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </>
                );

                return isInternal ? (
                  <Link
                    to={slide.ctaPrimary.href}
                    className={primaryClassName}
                    style={{ background: "var(--gradient-gold)" }}
                  >
                    {primaryContent}
                  </Link>
                ) : (
                  <a
                    href={slide.ctaPrimary.href}
                    className={primaryClassName}
                    style={{ background: "var(--gradient-gold)" }}
                  >
                    {primaryContent}
                  </a>
                );
              })()}
              {(() => {
                const isInternal = slide.ctaSecondary.href.startsWith("/");
                const isExternal = slide.ctaSecondary.href.startsWith("http");
                const secondaryClassName = "inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/[0.06] px-5 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-brand-gold/60 hover:bg-white/10 hover:text-brand-gold";

                return isInternal ? (
                  <Link to={slide.ctaSecondary.href} className={secondaryClassName}>
                    {slide.ctaSecondary.label}
                  </Link>
                ) : (
                  <a
                    href={slide.ctaSecondary.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className={secondaryClassName}
                  >
                    {slide.ctaSecondary.label}
                  </a>
                );
              })()}
            </div>

            {/* Trust chips */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-5">
              <div className="flex items-center gap-2 text-xs font-medium text-white/75">
                <CheckCircle2 className="h-4 w-4 text-brand-gold" />
                Aprovação em <span className="font-bold text-white">3 minutos</span>
              </div>
              <div className="hidden h-3 w-px bg-white/15 sm:block" />
              <div className="flex items-center gap-2 text-xs font-medium text-white/75">
                <Clock className="h-4 w-4 text-brand-gold" />
                Dinheiro na conta <span className="font-bold text-white">hoje</span>
              </div>
              <div className="hidden h-3 w-px bg-white/15 sm:block" />
              <div className="flex items-center gap-2 text-xs font-medium text-white/75">
                <div className="flex -space-x-2">
                  {["hsl(35 80% 55%)", "hsl(15 70% 50%)", "hsl(45 85% 60%)"].map((c, i) => (
                    <span
                      key={i}
                      className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-[hsl(215_50%_14%)] text-[9px] font-bold text-white"
                      style={{ background: c }}
                    >
                      {["AC", "JM", "RS"][i]}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col leading-tight">
                  <div className="flex items-center gap-0.5">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="h-3 w-3 fill-brand-gold text-brand-gold" />
                    ))}
                    <span className="ml-1 text-[11px] font-bold text-white">4,9</span>
                  </div>
                  <span className="text-[10px] text-white/78">
                    <span className="font-bold text-white">+50 mil</span> clientes felizes
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel arrows */}
      <button
        type="button"
        onClick={() => setActive((p) => (p - 1 + slides.length) % slides.length)}
        aria-label="Slide anterior"
        className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white/80 backdrop-blur-md transition-all hover:scale-110 hover:border-brand-gold/60 hover:bg-black/60 hover:text-brand-gold"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => setActive((p) => (p + 1) % slides.length)}
        aria-label="Próximo slide"
        className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white/80 backdrop-blur-md transition-all hover:scale-110 hover:border-brand-gold/60 hover:bg-black/60 hover:text-brand-gold"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Carousel dots + counter */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/10 bg-black/40 px-4 py-2 backdrop-blur-md">
        <span className="text-[10px] font-bold tabular-nums text-white/82">
          <span className="text-brand-gold">{String(active + 1).padStart(2, "0")}</span>
          <span className="mx-1 text-white/30">/</span>
          {String(slides.length).padStart(2, "0")}
        </span>
        <div className="h-3 w-px bg-white/15" />
        <div className="flex items-center gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Ir para slide ${i + 1}`}
              aria-current={active === i ? "true" : undefined}
              className={`relative h-1.5 overflow-hidden rounded-full transition-all duration-500 ${
                active === i ? "w-8 bg-white/15" : "w-1.5 bg-white/30 hover:bg-white/60"
              }`}
            >
              {active === i && !paused && (
                <span
                  key={`progress-${active}`}
                  className="absolute inset-y-0 left-0 bg-brand-gold"
                  style={{ animation: "heroProgress 5500ms linear forwards" }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
