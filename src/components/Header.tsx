import {
  MessageCircle,
  Users,
  Clock,
  Lock,
  User,
  Calculator,
  ShieldCheck,
  ChevronRight,
  HandCoins,
  Home,
  CreditCard,
  Handshake,
  BadgeCheck,
  Award,
  CheckCircle2,
} from "lucide-react";
import heroImage from "@/assets/hero-credifacil.png";

const navItems = [
  { label: "Início", href: "#inicio", active: true },
  { label: "Empréstimos", href: "#emprestimos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Sobre nós", href: "#sobre" },
  { label: "Dúvidas", href: "#duvidas" },
  { label: "Fale conosco", href: "#contato" },
];

const features = [
  { icon: Clock, title: "Análise rápida", desc: "e descomplicada" },
  { icon: Lock, title: "Segurança", desc: "em cada etapa" },
  { icon: User, title: "Atendimento", desc: "humano e próximo" },
];

const products = [
  { icon: HandCoins, title: "Crédito Pessoal", desc: "Dinheiro na conta para você usar como quiser." },
  { icon: Home, title: "Crédito com Garantia", desc: "Use um bem como garantia e consiga melhores taxas." },
  { icon: CreditCard, title: "Portabilidade\nde Crédito", desc: "Traga seu contrato para a Credifácil e pague menos." },
  { icon: Handshake, title: "Para Empresas", desc: "Soluções de crédito para impulsionar seu negócio." },
];

const trustItems = [
  { icon: BadgeCheck, title: "Empresa confiável", desc: "Transparência e respeito com você." },
  { icon: Users, title: "Atendimento próximo", desc: "Fale com quem realmente te entende." },
  { icon: Award, title: "Condições justas", desc: "Taxas competitivas e contratos claros." },
  { icon: CheckCircle2, title: "Compromisso com você", desc: "Estamos com você do início ao fim." },
];

const Header = () => {
  return (
    <header className="relative w-full overflow-hidden bg-background" aria-label="Cabeçalho Credifácil">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
        aria-hidden="true"
      />
      {/* Dark overlay for text legibility on the left */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, hsl(0 0% 4% / 0.95) 0%, hsl(0 0% 4% / 0.75) 45%, hsl(0 0% 4% / 0.15) 75%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Top navigation */}
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold tracking-tight text-foreground">
            <span className="text-brand-gold">C</span>redifácil
          </span>
        </div>

        <ul className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`relative text-sm font-medium transition-colors hover:text-brand-gold ${
                  item.active ? "text-brand-gold" : "text-foreground/90"
                }`}
              >
                {item.label}
                {item.active && (
                  <span className="absolute -bottom-2 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-brand-gold" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#whatsapp"
          className="flex items-center gap-2 rounded-full border border-foreground/30 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-brand-gold hover:text-brand-gold"
        >
          <MessageCircle className="h-4 w-4" />
          Fale no WhatsApp
        </a>
      </nav>

      {/* Thin gold divider */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="h-px w-full bg-gradient-to-r from-brand-gold/60 via-brand-gold/20 to-transparent" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-10 pt-12 md:pt-16">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-foreground/5 px-4 py-2 backdrop-blur-sm">
            <Users className="h-4 w-4 text-brand-gold" />
            <span className="text-xs font-semibold tracking-widest text-foreground/90">
              EMPRÉSTIMO PESSOAL
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl">
            Aqui o crédito
            <br />
            <span className="text-brand-gold">é fácil, rápido</span>
            <br />
            e feito para você.
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/80">
            Na <span className="font-semibold text-brand-gold">Credifácil</span>, você encontra as melhores
            soluções para realizar seus planos com segurança e atendimento humanizado.
          </p>

          {/* Features */}
          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
            {features.map((f) => (
              <div key={f.title} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-gold/40 text-brand-gold">
                  <f.icon className="h-5 w-5" />
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-semibold text-foreground">{f.title}</div>
                  <div className="text-xs text-foreground/70">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA + security */}
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a
              href="#simular"
              className="group flex items-center gap-4 rounded-2xl bg-gradient-to-r from-[hsl(38_90%_50%)] to-[hsl(45_95%_60%)] px-6 py-4 text-brand-gold-foreground shadow-lg shadow-brand-gold/30 transition-transform hover:scale-[1.02]"
            >
              <Calculator className="h-6 w-6" />
              <div className="text-left leading-tight">
                <div className="text-base font-bold">Simule seu empréstimo</div>
                <div className="text-xs opacity-80">É rápido, fácil e sem compromisso</div>
              </div>
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20 text-brand-gold">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold text-foreground">Seus dados protegidos</div>
                <div className="text-xs text-foreground/70">com total segurança</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products strip */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-4">
        <div className="rounded-2xl border border-foreground/10 bg-black/70 p-6 backdrop-blur-md">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <div key={p.title} className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-gold/10 text-brand-gold">
                  <p.icon className="h-6 w-6" />
                </div>
                <div className="leading-tight">
                  <div className="whitespace-pre-line text-sm font-semibold text-foreground">{p.title}</div>
                  <div className="mt-1 text-xs text-foreground/65">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-10">
        <div className="rounded-2xl border border-foreground/10 bg-foreground/5 p-5 backdrop-blur-md">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((t) => (
              <div key={t.title} className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-foreground/5 text-brand-gold">
                  <t.icon className="h-5 w-5" />
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-semibold text-foreground">{t.title}</div>
                  <div className="text-xs text-foreground/65">{t.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
