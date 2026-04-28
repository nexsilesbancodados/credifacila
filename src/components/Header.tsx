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
} from "lucide-react";
import heroImage from "@/assets/hero-credifacil.png";

const navItems = [
  { label: "Início", href: "#inicio", active: true },
  { label: "Empréstimos", href: "#emprestimos" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Quem Somos", href: "#sobre" },
  { label: "Dúvidas", href: "#duvidas" },
];

const features = [
  { icon: Zap, title: "Rápido e fácil", desc: "Simulação simples e\ndinheiro na conta." },
  { icon: ShieldCheck, title: "Seguro", desc: "Processo 100% seguro\ne sem burocracia." },
  { icon: User, title: "Atendimento", desc: "Especialistas prontos\npara te ajudar." },
  { icon: Handshake, title: "Confiança", desc: "Milhares de clientes\natendidos com sucesso." },
];

const Header = () => {
  return (
    <header className="relative w-full overflow-hidden bg-background" aria-label="Cabeçalho Credifácil">
      {/* Top navigation */}
      <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#inicio" className="flex items-center gap-2">
          <span className="text-3xl font-extrabold tracking-tight text-brand-gold">
            Credifácil
          </span>
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`relative text-sm font-medium transition-colors hover:text-brand-gold ${
                  item.active ? "text-brand-gold" : "text-foreground/80"
                }`}
              >
                {item.label}
                {item.active && (
                  <span className="absolute -bottom-2 left-1/2 h-[3px] w-7 -translate-x-1/2 rounded-full bg-brand-gold" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#whatsapp"
          className="group flex items-center gap-2 rounded-full bg-brand-gold px-5 py-2.5 text-sm font-semibold text-brand-gold-foreground shadow-[var(--shadow-gold)] transition-all hover:scale-[1.02] hover:brightness-105"
        >
          <MessageCircle className="h-4 w-4" />
          Fale com um especialista
        </a>
      </nav>

      {/* Hero */}
      <div className="relative">
        {/* Hero image */}
        <div className="relative w-full">
          <div className="relative overflow-hidden">
            <img
              src={heroImage}
              alt="Casal sorridente representando clientes satisfeitos da Credifácil"
              className="h-[560px] w-full object-cover"
              width={1920}
              height={1080}
            />
            {/* Light gradient overlay on the left for text */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, hsl(40 30% 97% / 0.96) 0%, hsl(40 30% 97% / 0.85) 35%, hsl(40 30% 97% / 0.35) 60%, transparent 80%)",
              }}
              aria-hidden="true"
            />
            {/* Decorative gold curves */}
            <div
              className="pointer-events-none absolute -right-20 top-10 h-[500px] w-[700px] opacity-30"
              style={{
                background:
                  "radial-gradient(ellipse at center, hsl(35 75% 55% / 0.35), transparent 60%)",
              }}
              aria-hidden="true"
            />

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
                <div className="max-w-xl">
                  <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-[52px]">
                    O crédito que
                    <br />
                    você precisa,
                    <br />
                    <span className="text-brand-gold">com a confiança</span>
                    <br />
                    <span className="text-brand-gold">que você merece.</span>
                  </h1>

                  <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/75">
                    Empréstimos rápidos, seguros e descomplicados para realizar seus planos e transformar sua vida.
                  </p>

                  <a
                    href="#simular"
                    className="group mt-8 inline-flex items-center gap-3 rounded-2xl bg-brand-gold px-7 py-4 text-base font-semibold text-brand-gold-foreground shadow-[var(--shadow-gold)] transition-all hover:scale-[1.02] hover:brightness-105"
                  >
                    <TrendingUp className="h-5 w-5" strokeWidth={2.4} />
                    Solicitar meu empréstimo
                    <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Carousel arrows */}
            <button
              aria-label="Anterior"
              className="absolute left-4 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-foreground/10 text-foreground/70 backdrop-blur-sm transition hover:bg-foreground/20"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              aria-label="Próximo"
              className="absolute right-4 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-foreground/10 text-foreground/70 backdrop-blur-sm transition hover:bg-foreground/20"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Floating dark badge */}
            <div className="absolute bottom-8 right-8 hidden max-w-xs items-start gap-3 rounded-xl bg-[hsl(var(--surface-dark))]/95 p-4 text-[hsl(40_30%_97%)] shadow-[var(--shadow-card)] backdrop-blur md:flex">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-gold/15 text-brand-gold">
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
        <div className="relative z-10 mx-auto -mt-10 max-w-7xl px-6">
          <div className="rounded-2xl border border-foreground/8 bg-background p-6 shadow-[var(--shadow-card)]">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className={`flex items-start gap-4 ${
                    i < 3 ? "lg:border-r lg:border-foreground/10 lg:pr-6" : ""
                  }`}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-brand-gold/40 text-brand-gold">
                    <f.icon className="h-5 w-5" strokeWidth={2.2} />
                  </div>
                  <div className="leading-snug">
                    <div className="text-sm font-bold text-foreground">{f.title}</div>
                    <div className="mt-1 whitespace-pre-line text-xs text-foreground/60">
                      {f.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom dark bar */}
        <div className="mx-auto mt-5 max-w-7xl px-6 pb-10">
          <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-[hsl(var(--surface-dark))] px-6 py-4 text-[hsl(40_30%_97%)] md:flex-row">
            <div className="flex items-center gap-3">
              <Heart className="h-5 w-5 text-brand-gold" />
              <span className="text-sm font-medium">Aqui o seu sonho tem crédito.</span>
            </div>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
              <div className="flex items-center gap-2 text-sm opacity-90">
                <ShieldAlert className="h-4 w-4 text-brand-gold" />
                Empresa séria e autorizada
              </div>
              <div className="flex items-center gap-2 text-sm opacity-90">
                <Lock className="h-4 w-4 text-brand-gold" />
                Seus dados protegidos
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
