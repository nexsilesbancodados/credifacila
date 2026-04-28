import { useEffect, useState } from "react";
import {
  MessageCircle,
  Zap,
  ShieldCheck,
  User,
  Handshake,
  TrendingUp,
  ChevronRight,
  ChevronLeft,
  Heart,
  ShieldAlert,
  Lock,
  Star,
  Clock,
  CheckCircle2,
} from "lucide-react";
import heroImage from "@/assets/hero-credifacil.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import logo from "@/assets/credifacil-logo.png";

const navItems = [
  { label: "Início", href: "#inicio", active: true },
  { label: "Empréstimos", href: "#emprestimos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Sobre nós", href: "#sobre" },
  { label: "Dúvidas", href: "#duvidas" },
  { label: "Fale conosco", href: "#contato" },
];

const heroSlides = [
  {
    src: heroImage,
    alt: "Casal sorridente representando clientes satisfeitos da Credifácil",
    objectPosition: "64% center",
  },
  {
    src: heroSlide2,
    alt: "Mulher sorrindo enquanto usa o aplicativo da Credifácil no celular",
    objectPosition: "70% center",
  },
  {
    src: heroSlide3,
    alt: "Família comemorando a aprovação do crédito Credifácil em casa",
    objectPosition: "60% center",
  },
];

const features = [
  {
    icon: Zap,
    title: "Aprovação em minutos",
    desc: "Simule, assine e receba\no dinheiro no mesmo dia.",
    metric: "3 min",
  },
  {
    icon: ShieldCheck,
    title: "100% seguro",
    desc: "Criptografia bancária\ne zero burocracia.",
    metric: "SSL 256",
  },
  {
    icon: User,
    title: "Atendimento humano",
    desc: "Especialistas reais\nte acompanham do início ao fim.",
    metric: "24/7",
  },
  {
    icon: Handshake,
    title: "Confiança comprovada",
    desc: "Mais de 50 mil clientes\njá realizaram seus sonhos.",
    metric: "+50k",
  },
];

const Header = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative w-full overflow-hidden" aria-label="Cabeçalho Credifácil">
      {/* Top navigation - dark with gold arcs */}
      <div className="relative z-20 w-full bg-[hsl(30_18%_6%)]">
        {/* Top gold curve - thin, dipping down at the sides */}
        <svg
          className="pointer-events-none absolute -top-px left-0 h-2 w-full"
          viewBox="0 0 1440 8"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0,0 L1440,0 L1440,2 Q720,10 0,2 Z" fill="hsl(38 90% 50%)" />
        </svg>
        {/* Bottom gold curve - thicker, dipping up at the sides */}
        <svg
          className="pointer-events-none absolute -bottom-px left-0 h-4 w-full"
          viewBox="0 0 1440 16"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0,16 L1440,16 L1440,8 Q720,-6 0,8 Z" fill="hsl(38 90% 50%)" />
        </svg>

        <nav className="relative flex w-full items-center justify-between px-5 py-3.5 md:px-8 md:py-4 lg:px-12">
          {/* Logo */}
          <a href="#inicio" className="flex items-center transition-opacity hover:opacity-90" aria-label="Credifácil">
            <img loading="lazy" decoding="async"
              src={logo}
              alt="Credifácil"
              className="h-9 w-auto md:h-11"
              width={1795}
              height={605}
            />
          </a>

          {/* Menu */}
          <ul className="hidden items-center gap-9 lg:flex">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`relative text-[15px] font-medium transition-colors hover:text-brand-gold ${
                    item.active
                      ? "text-brand-gold"
                      : "text-white/85"
                  }`}
                >
                  {item.label}
                  {item.active && (
                    <span className="absolute -bottom-2 left-1/2 h-[2px] w-8 -translate-x-1/2 rounded-full bg-brand-gold" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* WhatsApp button */}
          <a
            href="#whatsapp"
            className="group flex items-center gap-2.5 rounded-full border border-brand-gold/80 py-2 pl-2 pr-5 text-sm font-semibold text-white transition-all hover:border-brand-gold hover:bg-brand-gold/15 hover:text-brand-gold"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-brand-gold/80 transition-colors group-hover:bg-brand-gold/20">
              <MessageCircle className="h-4 w-4 text-brand-gold" />
            </span>
            Fale no WhatsApp
          </a>
        </nav>
      </div>

      {/* Hero */}
      <div className="relative">
        {/* Hero image */}
        <div className="relative w-full">
          <div className="relative h-[640px] overflow-hidden md:h-[700px]">
            {/* Carousel slides */}
            {heroSlides.map((slide, i) => (
              <img
                key={slide.src}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={i === 0 ? "high" : "low"}
                src={slide.src}
                alt={slide.alt}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ease-in-out ${
                  activeSlide === i ? "opacity-100" : "opacity-0"
                }`}
                style={{ objectPosition: slide.objectPosition }}
                width={1920}
                height={1080}
                aria-hidden={activeSlide !== i}
              />
            ))}
            {/* Dark gradient overlay on the left for text legibility */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, hsl(30 18% 6% / 0.97) 0%, hsl(30 18% 6% / 0.88) 28%, hsl(30 18% 6% / 0.45) 55%, transparent 78%)",
              }}
              aria-hidden="true"
            />
            {/* Bottom vignette for blending into features card */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
              style={{
                background:
                  "linear-gradient(180deg, transparent, hsl(30 18% 6% / 0.55))",
              }}
              aria-hidden="true"
            />
            {/* Decorative gold glow */}
            <div
              className="pointer-events-none absolute -right-32 top-0 h-[700px] w-[820px] opacity-50"
              style={{
                background:
                  "radial-gradient(ellipse at center, hsl(35 85% 58% / 0.55), transparent 65%)",
              }}
              aria-hidden="true"
            />
            {/* Animated floating gold orbs */}
            <div
              className="pointer-events-none absolute left-[12%] top-[18%] h-2 w-2 rounded-full bg-brand-gold/70 blur-[1px]"
              style={{ animation: "float 6s ease-in-out infinite" }}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute left-[42%] top-[68%] h-1.5 w-1.5 rounded-full bg-brand-gold/60 blur-[1px]"
              style={{ animation: "float 8s ease-in-out infinite 1s" }}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute left-[28%] top-[35%] h-1 w-1 rounded-full bg-brand-gold/50"
              style={{ animation: "float 7s ease-in-out infinite 2s" }}
              aria-hidden="true"
            />
            {/* Subtle gold arc top-left */}
            <svg
              className="pointer-events-none absolute left-0 top-0 h-40 w-[60%] opacity-40"
              viewBox="0 0 800 200"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0,0 Q400,180 800,40 L800,0 Z"
                fill="hsl(38 80% 55% / 0.12)"
              />
            </svg>

            {/* Content */}
             <div className="absolute inset-0 flex items-center animate-fade-in">
               <div className="w-full px-5 md:px-8 lg:px-12">
                 <div className="max-w-[600px]">
                  {/* Eyebrow badge */}
                  <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-brand-gold/40 bg-brand-gold/[0.08] px-3.5 py-1.5 backdrop-blur-md">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inset-0 animate-ping rounded-full bg-brand-gold/60" />
                      <span className="relative h-2 w-2 rounded-full bg-brand-gold" />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-brand-gold">
                      Crédito sem complicação
                    </span>
                  </div>

                  <h1 className="text-[40px] font-bold leading-[1.02] tracking-tight text-white md:text-[62px]">
                    O crédito que
                    <br />
                    você precisa,
                    <br />
                    <span className="relative inline-block">
                      <span
                        className="bg-clip-text text-transparent"
                        style={{ backgroundImage: "var(--gradient-gold)" }}
                      >
                        com a confiança
                      </span>
                    </span>
                    <br />
                    <span
                      className="bg-clip-text text-transparent"
                      style={{ backgroundImage: "var(--gradient-gold)" }}
                    >
                      que você merece.
                    </span>
                  </h1>

                  <p className="mt-6 max-w-md text-base leading-relaxed text-white/75 md:text-[17px]">
                    Empréstimos rápidos, seguros e descomplicados para realizar seus planos e{" "}
                    <span className="font-semibold text-white">transformar sua vida</span>.
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <a
                      href="#simular"
                      className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl px-7 py-4 text-base font-bold text-brand-gold-foreground shadow-[var(--shadow-gold)] transition-all hover:scale-[1.03] hover:brightness-110"
                      style={{ background: "var(--gradient-gold)" }}
                    >
                      {/* shine sweep */}
                      <span
                        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                        aria-hidden="true"
                      />
                      <TrendingUp className="relative h-5 w-5" strokeWidth={2.4} />
                      <span className="relative">Solicitar meu empréstimo</span>
                      <ChevronRight className="relative h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </a>
                    <a
                      href="#simular"
                      className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/[0.06] px-5 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-brand-gold/60 hover:bg-white/10 hover:text-brand-gold"
                    >
                      Simular agora
                    </a>
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
                    <div className="flex items-center gap-1.5 text-xs font-medium text-white/75">
                      <div className="flex">
                        {[0, 1, 2, 3, 4].map((i) => (
                          <Star key={i} className="h-3.5 w-3.5 fill-brand-gold text-brand-gold" />
                        ))}
                      </div>
                      <span className="font-bold text-white">+50 mil</span> clientes
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel arrows */}
            <button
              type="button"
              onClick={() =>
                setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
              }
              aria-label="Anterior"
              className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white/70 backdrop-blur-sm transition hover:border-brand-gold/50 hover:bg-black/60 hover:text-brand-gold"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => setActiveSlide((prev) => (prev + 1) % heroSlides.length)}
              aria-label="Próximo"
              className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white/70 backdrop-blur-sm transition hover:border-brand-gold/50 hover:bg-black/60 hover:text-brand-gold"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Carousel dots */}
            <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveSlide(i)}
                  aria-label={`Ir para slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    activeSlide === i ? "w-6 bg-brand-gold" : "w-1.5 bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>

            {/* Floating dark badge */}
            <div className="absolute bottom-20 right-8 hidden max-w-xs items-start gap-3 rounded-2xl border border-brand-gold/25 bg-[hsl(var(--surface-elevated))]/90 p-4 text-white shadow-[var(--shadow-card)] backdrop-blur-md md:flex">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-gold/15 text-brand-gold">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="leading-snug">
                <div className="text-sm font-semibold">Segurança e transparência</div>
                <div className="mt-0.5 text-xs opacity-80">
                  Atendimento humanizado e condições justas para você.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features card */}
        <div className="relative z-10 -mt-12 w-full px-0">
          <div className="relative overflow-hidden rounded-2xl border border-brand-gold/15 bg-[hsl(var(--surface-elevated))]/90 p-5 shadow-[var(--shadow-card)] backdrop-blur-md md:p-7">
            {/* subtle gold top accent */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px"
              style={{ background: "linear-gradient(90deg, transparent, hsl(38 90% 55% / 0.6), transparent)" }}
              aria-hidden="true"
            />
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-2">
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className={`group relative flex items-start gap-4 rounded-xl p-3 transition-all hover:bg-white/[0.03] ${
                    i < 3 ? "lg:border-r lg:border-white/10" : ""
                  }`}
                >
                  <div
                    className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-brand-gold-foreground shadow-[var(--shadow-gold)] transition-transform group-hover:scale-105"
                    style={{ background: "var(--gradient-gold)" }}
                  >
                    <f.icon className="h-[22px] w-[22px]" strokeWidth={2.4} />
                  </div>
                  <div className="min-w-0 leading-snug">
                    <div className="flex items-center gap-2">
                      <div className="text-[15px] font-bold text-white">{f.title}</div>
                      <span className="rounded-full bg-brand-gold/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-gold">
                        {f.metric}
                      </span>
                    </div>
                    <div className="mt-1.5 whitespace-pre-line text-[13px] leading-relaxed text-white/65">
                      {f.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom dark bar */}
        <div className="mt-4 w-full px-0 pb-10">
          <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-brand-gold/15 bg-[hsl(var(--surface-dark))]/85 px-6 py-4 text-white backdrop-blur-md md:flex-row">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-gold/15">
                <Heart className="h-4 w-4 fill-brand-gold text-brand-gold" />
              </span>
              <span className="text-sm font-semibold tracking-tight">
                Aqui o seu sonho <span className="text-brand-gold">tem crédito</span>.
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <div className="flex items-center gap-2 text-xs font-medium text-white/80">
                <ShieldAlert className="h-4 w-4 text-brand-gold" />
                Empresa autorizada e regulamentada
              </div>
              <div className="hidden h-4 w-px bg-white/15 md:block" />
              <div className="flex items-center gap-2 text-xs font-medium text-white/80">
                <Lock className="h-4 w-4 text-brand-gold" />
                Dados protegidos com criptografia
              </div>
              <div className="hidden h-4 w-px bg-white/15 md:block" />
              <div className="flex items-center gap-1.5 text-xs font-medium text-white/80">
                <div className="flex">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-3 w-3 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                4,9 no Reclame Aqui
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
