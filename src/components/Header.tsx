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
  Home,
  Car,
  Briefcase,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-credifacil.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import heroSlide4 from "@/assets/hero-slide-4.jpg";
import heroSlide5 from "@/assets/hero-slide-5.jpg";
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
    eyebrow: "Crédito sem complicação",
    eyebrowIcon: Sparkles,
    title: ["O crédito que", "você precisa,", "com a confiança", "que você merece."],
    goldFromLine: 2,
    description:
      "Empréstimos rápidos, seguros e descomplicados para realizar seus planos e",
    descriptionHighlight: "transformar sua vida",
    ctaPrimary: { label: "Solicitar meu empréstimo", href: "/simular", icon: TrendingUp },
    ctaSecondary: { label: "Simular agora", href: "/simular" },
  },
  {
    src: heroSlide2,
    alt: "Mulher sorrindo enquanto usa o aplicativo da Credifácil no celular",
    objectPosition: "70% center",
    eyebrow: "100% Digital",
    eyebrowIcon: Smartphone,
    title: ["Tudo pelo", "celular,", "sem sair", "de casa."],
    goldFromLine: 2,
    description: "Simule, contrate e receba o dinheiro pelo app em poucos minutos, com",
    descriptionHighlight: "zero burocracia",
    ctaPrimary: { label: "Simular pelo celular", href: "/simular", icon: Smartphone },
    ctaSecondary: { label: "Ver como funciona", href: "#como-funciona" },
  },
  {
    src: heroSlide3,
    alt: "Família comemorando a aprovação do crédito Credifácil em casa",
    objectPosition: "60% center",
    eyebrow: "Para a sua família",
    eyebrowIcon: Home,
    title: ["Realize os", "sonhos da sua", "família com", "tranquilidade."],
    goldFromLine: 2,
    description: "Use seu empréstimo para reformar a casa, viajar ou organizar as finanças com",
    descriptionHighlight: "parcelas que cabem no bolso",
    ctaPrimary: { label: "Quero realizar meu sonho", href: "/simular", icon: Heart },
    ctaSecondary: { label: "Ver opções", href: "#emprestimos" },
  },
  {
    src: heroSlide4,
    alt: "Homem feliz segurando as chaves de um carro novo financiado pela Credifácil",
    objectPosition: "55% center",
    eyebrow: "Crédito com garantia",
    eyebrowIcon: Car,
    title: ["O carro novo", "mais perto", "do que você", "imagina."],
    goldFromLine: 2,
    description: "Use seu veículo como garantia e libere até R$ 150 mil com as",
    descriptionHighlight: "menores taxas do mercado",
    ctaPrimary: { label: "Simular crédito com veículo", href: "/simular", icon: Car },
    ctaSecondary: { label: "Saber mais", href: "#emprestimos" },
  },
  {
    src: heroSlide5,
    alt: "Empreendedora sorridente em seu pequeno negócio impulsionado pelo crédito Credifácil",
    objectPosition: "60% center",
    eyebrow: "Crédito para empreender",
    eyebrowIcon: Briefcase,
    title: ["Impulsione o", "seu negócio", "com capital", "de giro."],
    goldFromLine: 2,
    description: "Empréstimo PJ rápido para investir, expandir ou equilibrar o caixa com",
    descriptionHighlight: "condições especiais",
    ctaPrimary: { label: "Quero crédito empresarial", href: "/simular", icon: Briefcase },
    ctaSecondary: { label: "Falar com especialista", href: "#whatsapp" },
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
  const slide = heroSlides[activeSlide];
  const EyebrowIcon = slide.eyebrowIcon;
  const PrimaryIcon = slide.ctaPrimary.icon;

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
          <div className="relative h-[680px] overflow-hidden md:h-[760px] lg:h-[820px]">
            {/* Carousel slides */}
            {heroSlides.map((slide, i) => (
              <img
                key={slide.src}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={i === 0 ? "high" : "low"}
                src={slide.src}
                alt={slide.alt}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1600ms] ease-in-out ${
                  activeSlide === i ? "scale-100 opacity-100" : "scale-105 opacity-0"
                }`}
                style={{ objectPosition: slide.objectPosition }}
                width={1920}
                height={1080}
                aria-hidden={activeSlide !== i}
              />
            ))}
            {/* Cinematic overlays — combined for depth and legibility */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(95deg, hsl(30 22% 5% / 0.97) 0%, hsl(30 22% 5% / 0.88) 28%, hsl(30 22% 5% / 0.42) 58%, transparent 82%)",
              }}
              aria-hidden="true"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 20% 50%, hsl(30 30% 4% / 0.55), transparent 70%)",
              }}
              aria-hidden="true"
            />
            {/* Subtle film grain texture */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
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
                  <div
                    key={`eyebrow-${activeSlide}`}
                    className="mb-6 inline-flex animate-fade-in items-center gap-2.5 rounded-full border border-brand-gold/40 bg-brand-gold/[0.08] px-3.5 py-1.5 backdrop-blur-md"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inset-0 animate-ping rounded-full bg-brand-gold/60" />
                      <span className="relative h-2 w-2 rounded-full bg-brand-gold" />
                    </span>
                    <EyebrowIcon className="h-3.5 w-3.5 text-brand-gold" strokeWidth={2.4} />
                    <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-brand-gold">
                      {slide.eyebrow}
                    </span>
                  </div>

                  <h1
                    key={`title-${activeSlide}`}
                    className="animate-fade-in text-[42px] font-bold leading-[1.02] tracking-tight text-white md:text-[64px] lg:text-[72px]"
                    style={{ textShadow: "0 2px 24px hsl(30 30% 4% / 0.45)" }}
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
                    key={`desc-${activeSlide}`}
                    className="mt-6 max-w-md animate-fade-in text-base leading-relaxed text-white/75 md:text-[17px]"
                  >
                    {slide.description}{" "}
                    <span className="font-semibold text-white">{slide.descriptionHighlight}</span>.
                  </p>

                  <div
                    key={`cta-${activeSlide}`}
                    className="mt-8 flex animate-fade-in flex-wrap items-center gap-3"
                  >
                    {(() => {
                      const isInternal = slide.ctaPrimary.href.startsWith("/");
                      const PrimaryEl: any = isInternal ? Link : "a";
                      const primaryProps = isInternal
                        ? { to: slide.ctaPrimary.href }
                        : { href: slide.ctaPrimary.href };
                      return (
                    <PrimaryEl
                      {...primaryProps}
                      className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl px-7 py-4 text-base font-bold text-brand-gold-foreground shadow-[var(--shadow-gold)] transition-all hover:scale-[1.03] hover:brightness-110"
                      style={{ background: "var(--gradient-gold)" }}
                    >
                      {/* shine sweep */}
                      <span
                        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                        aria-hidden="true"
                      />
                      <PrimaryIcon className="relative h-5 w-5" strokeWidth={2.4} />
                      <span className="relative">{slide.ctaPrimary.label}</span>
                      <ChevronRight className="relative h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </PrimaryEl>
                      );
                    })()}
                    {(() => {
                      const isInternal = slide.ctaSecondary.href.startsWith("/");
                      const SecondaryEl: any = isInternal ? Link : "a";
                      const secondaryProps = isInternal
                        ? { to: slide.ctaSecondary.href }
                        : { href: slide.ctaSecondary.href };
                      return (
                        <SecondaryEl
                          {...secondaryProps}
                          className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/[0.06] px-5 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-brand-gold/60 hover:bg-white/10 hover:text-brand-gold"
                        >
                          {slide.ctaSecondary.label}
                        </SecondaryEl>
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
                      {/* Mini avatars stack */}
                      <div className="flex -space-x-2">
                        {[
                          "hsl(35 80% 55%)",
                          "hsl(15 70% 50%)",
                          "hsl(45 85% 60%)",
                        ].map((c, i) => (
                          <span
                            key={i}
                            className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-[hsl(30_22%_5%)] text-[9px] font-bold text-white"
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
                        <span className="text-[10px] text-white/60">
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
              onClick={() =>
                setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
              }
              aria-label="Anterior"
              className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white/80 backdrop-blur-md transition-all hover:scale-110 hover:border-brand-gold/60 hover:bg-black/60 hover:text-brand-gold"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => setActiveSlide((prev) => (prev + 1) % heroSlides.length)}
              aria-label="Próximo"
              className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white/80 backdrop-blur-md transition-all hover:scale-110 hover:border-brand-gold/60 hover:bg-black/60 hover:text-brand-gold"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Carousel dots + counter */}
            <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/10 bg-black/40 px-4 py-2 backdrop-blur-md">
              <span className="text-[10px] font-bold tabular-nums text-white/70">
                <span className="text-brand-gold">
                  {String(activeSlide + 1).padStart(2, "0")}
                </span>
                <span className="mx-1 text-white/30">/</span>
                {String(heroSlides.length).padStart(2, "0")}
              </span>
              <div className="h-3 w-px bg-white/15" />
              <div className="flex items-center gap-1.5">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveSlide(i)}
                    aria-label={`Ir para slide ${i + 1}`}
                    className={`relative h-1.5 overflow-hidden rounded-full transition-all duration-500 ${
                      activeSlide === i
                        ? "w-8 bg-white/15"
                        : "w-1.5 bg-white/30 hover:bg-white/60"
                    }`}
                  >
                    {activeSlide === i && (
                      <span
                        key={`progress-${activeSlide}`}
                        className="absolute inset-y-0 left-0 bg-brand-gold"
                        style={{
                          animation: "heroProgress 5500ms linear forwards",
                        }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Floating mini-simulator preview card */}
            <div className="pointer-events-auto absolute right-6 top-1/2 z-10 hidden w-[280px] -translate-y-1/2 lg:block">
              <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[hsl(30_22%_5%)]/85 p-5 shadow-[0_30px_80px_-20px_hsl(30_30%_4%/0.7)] backdrop-blur-xl">
                {/* gold accent */}
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-50"
                  style={{
                    background:
                      "radial-gradient(circle, hsl(38 90% 55% / 0.4), transparent 70%)",
                  }}
                  aria-hidden="true"
                />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-emerald-300">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/70" />
                        <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      </span>
                      Ao vivo
                    </span>
                    <span className="text-[9px] font-semibold uppercase tracking-wider text-white/50">
                      Simulador
                    </span>
                  </div>

                  <div className="mt-4">
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-white/50">
                      Você recebe
                    </div>
                    <div className="mt-1 text-[28px] font-bold leading-none text-white">
                      R$ 15.000
                    </div>
                  </div>

                  <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.04] p-3">
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="text-[9px] font-semibold uppercase tracking-wider text-white/50">
                          Parcela
                        </div>
                        <div className="text-base font-bold leading-tight text-white">
                          R$ 542<span className="text-xs text-white/60">,30</span>
                        </div>
                        <div className="text-[10px] text-white/50">em 36x</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[9px] font-semibold uppercase tracking-wider text-white/50">
                          Taxa
                        </div>
                        <div className="text-base font-bold leading-tight text-brand-gold">
                          1,49<span className="text-[10px]">%</span>
                        </div>
                        <div className="text-[10px] text-white/50">a.m.</div>
                      </div>
                    </div>
                  </div>

                  <Link
                    to="/simular"
                    className="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 text-xs font-bold text-brand-gold-foreground shadow-[var(--shadow-gold)] transition-all hover:scale-[1.02] hover:brightness-110"
                    style={{ background: "var(--gradient-gold)" }}
                  >
                    Simular agora
                    <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>

                  <div className="mt-3 flex items-center justify-center gap-1.5 text-[9px] font-medium text-white/50">
                    <ShieldCheck className="h-3 w-3 text-brand-gold" />
                    Não afeta seu score
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
