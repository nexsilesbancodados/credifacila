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
import logo from "@/assets/credifacil-logo.png";

const navItems = [
  { label: "Início", href: "#inicio", active: true },
  { label: "Empréstimos", href: "#emprestimos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Sobre nós", href: "#sobre" },
  { label: "Dúvidas", href: "#duvidas" },
  { label: "Fale conosco", href: "#contato" },
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
          <div className="relative overflow-hidden">
            <img loading="eager" decoding="async" fetchPriority="high"
              src={heroImage}
              alt="Casal sorridente representando clientes satisfeitos da Credifácil"
              className="h-[600px] w-full object-cover object-[64%_center] md:h-[640px]"
              width={1920}
              height={1080}
            />
            {/* Dark gradient overlay on the left for text legibility */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, hsl(30 18% 6% / 0.96) 0%, hsl(30 18% 6% / 0.85) 30%, hsl(30 18% 6% / 0.4) 55%, transparent 75%)",
              }}
              aria-hidden="true"
            />
            {/* Decorative gold glow */}
            <div
              className="pointer-events-none absolute -right-32 top-0 h-[600px] w-[800px] opacity-40"
              style={{
                background:
                  "radial-gradient(ellipse at center, hsl(35 80% 55% / 0.55), transparent 65%)",
              }}
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
               <div className="w-full px-5 md:px-8 lg:px-10">
                 <div className="max-w-xl">
                  {/* Eyebrow badge */}
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-white/5 px-3 py-1.5 backdrop-blur-sm">
                    <span className="flex h-1.5 w-1.5 rounded-full bg-brand-gold" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand-gold">
                      Crédito sem complicação
                    </span>
                  </div>

                  <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-[58px]">
                    O crédito que
                    <br />
                    você precisa,
                    <br />
                    <span className="text-brand-gold">com a confiança</span>
                    <br />
                    <span className="text-brand-gold">que você merece.</span>
                  </h1>

                  <p className="mt-6 max-w-md text-base leading-relaxed text-white/70 md:text-lg">
                    Empréstimos rápidos, seguros e descomplicados para realizar seus planos e transformar sua vida.
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <a
                      href="#simular"
                      className="group inline-flex items-center gap-3 rounded-2xl bg-brand-gold px-7 py-4 text-base font-semibold text-brand-gold-foreground shadow-[var(--shadow-gold)] transition-all hover:scale-[1.03] hover:brightness-110"
                      style={{ background: "var(--gradient-gold)" }}
                    >
                      <TrendingUp className="h-5 w-5" strokeWidth={2.4} />
                      Solicitar meu empréstimo
                      <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </a>
                    <a
                      href="#simular"
                      className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-brand-gold/60 hover:text-brand-gold"
                    >
                      Simular agora
                    </a>
                  </div>

                  {/* Trust chips */}
                  <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
                    <div className="flex items-center gap-2 text-xs font-medium text-white/65">
                      <CheckCircle2 className="h-4 w-4 text-brand-gold" />
                      Aprovação em minutos
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-white/65">
                      <Clock className="h-4 w-4 text-brand-gold" />
                      Dinheiro na conta hoje
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-white/65">
                      <div className="flex">
                        {[0, 1, 2, 3, 4].map((i) => (
                          <Star key={i} className="h-3.5 w-3.5 fill-brand-gold text-brand-gold" />
                        ))}
                      </div>
                      +50 mil clientes
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel arrows */}
            <button
              aria-label="Anterior"
              className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white/70 backdrop-blur-sm transition hover:border-brand-gold/50 hover:bg-black/60 hover:text-brand-gold"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              aria-label="Próximo"
              className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white/70 backdrop-blur-sm transition hover:border-brand-gold/50 hover:bg-black/60 hover:text-brand-gold"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Carousel dots */}
            <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
              <span className="h-1.5 w-6 rounded-full bg-brand-gold" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
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
