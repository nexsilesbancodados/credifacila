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
  Sparkles,
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
  { icon: CreditCard, title: "Portabilidade de Crédito", desc: "Traga seu contrato para a Credifácil e pague menos." },
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
      {/* Dark overlay for legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, hsl(220 25% 12% / 0.92) 0%, hsl(220 22% 16% / 0.75) 40%, hsl(220 20% 20% / 0.3) 70%, hsl(220 15% 25% / 0.05) 100%)",
        }}
        aria-hidden="true"
      />
      {/* Gold ambient glow */}
      <div
        className="pointer-events-none absolute -left-40 top-20 h-[520px] w-[520px] rounded-full opacity-30 blur-[130px]"
        style={{ background: "radial-gradient(circle, hsl(42 95% 62%) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      {/* Bottom fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{ background: "linear-gradient(180deg, transparent, hsl(220 18% 16%) 95%)" }}
        aria-hidden="true"
      />

      {/* Top navigation */}
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="#inicio" className="flex items-center gap-2">
          <span className="text-3xl font-extrabold tracking-tight text-foreground">
            <span className="bg-gradient-to-br from-[hsl(45_95%_65%)] to-[hsl(38_90%_45%)] bg-clip-text text-transparent">
              C
            </span>
            redifácil
          </span>
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`relative text-sm font-medium transition-colors hover:text-brand-gold ${
                  item.active ? "text-brand-gold" : "text-foreground/85"
                }`}
              >
                {item.label}
                {item.active && (
                  <span className="absolute -bottom-2 left-1/2 h-[3px] w-7 -translate-x-1/2 rounded-full bg-gradient-to-r from-[hsl(38_90%_50%)] to-[hsl(45_95%_60%)] shadow-[0_0_12px_hsl(42_95%_55%/0.7)]" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#whatsapp"
          className="group flex items-center gap-2 rounded-full border border-foreground/20 bg-foreground/5 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur-sm transition-all hover:border-brand-gold/60 hover:bg-brand-gold/10 hover:text-brand-gold"
        >
          <MessageCircle className="h-4 w-4 transition-transform group-hover:scale-110" />
          Fale no WhatsApp
        </a>
      </nav>

      {/* Gold divider */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="h-px w-full bg-gradient-to-r from-brand-gold/70 via-brand-gold/20 to-transparent" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-12 pt-14 md:pt-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/5 px-4 py-2 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-brand-gold" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/95">
              Empréstimo Pessoal
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-foreground md:text-[64px]">
            Aqui o crédito
            <br />
            <span className="bg-gradient-to-r from-[hsl(38_90%_50%)] via-[hsl(45_95%_62%)] to-[hsl(38_90%_50%)] bg-clip-text text-transparent">
              é fácil, rápido
            </span>
            <br />
            e feito para você.
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-base leading-relaxed text-foreground/75">
            Na <span className="font-semibold text-brand-gold">Credifácil</span>, você encontra as melhores
            soluções para realizar seus planos com segurança e atendimento humanizado.
          </p>

          {/* Features */}
          <div className="mt-9 flex flex-wrap gap-x-10 gap-y-5">
            {features.map((f) => (
              <div key={f.title} className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-gold/40 bg-brand-gold/5 text-brand-gold shadow-[inset_0_0_20px_hsl(42_95%_55%/0.1)]">
                  <f.icon className="h-5 w-5" />
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-semibold text-foreground">{f.title}</div>
                  <div className="text-xs text-foreground/65">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA + security */}
          <div className="mt-10 flex flex-wrap items-center gap-7">
            <a
              href="#simular"
              className="group relative flex items-center gap-4 overflow-hidden rounded-2xl bg-gradient-to-r from-[hsl(38_90%_48%)] via-[hsl(42_95%_58%)] to-[hsl(45_95%_55%)] px-7 py-4 text-brand-gold-foreground shadow-[0_15px_40px_-10px_hsl(42_95%_55%/0.6)] transition-all hover:scale-[1.02] hover:shadow-[0_20px_50px_-10px_hsl(42_95%_55%/0.8)]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <Calculator className="relative h-6 w-6" strokeWidth={2.4} />
              <div className="relative text-left leading-tight">
                <div className="text-base font-bold">Simule seu empréstimo</div>
                <div className="text-[11px] font-medium opacity-80">É rápido, fácil e sem compromisso</div>
              </div>
              <ChevronRight className="relative h-5 w-5 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
            </a>

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/20 bg-foreground/5 text-brand-gold">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold text-foreground">Seus dados protegidos</div>
                <div className="text-xs text-foreground/65">com total segurança</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products strip */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-5">
        <div className="rounded-2xl border border-brand-gold/20 bg-[hsl(220_20%_18%/0.78)] p-7 shadow-[0_20px_60px_-20px_hsl(220_30%_5%/0.55)] backdrop-blur-xl">
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-4">
            {products.map((p, i) => (
              <div
                key={p.title}
                className={`group flex items-start gap-4 ${
                  i < 3 ? "lg:border-r lg:border-foreground/10 lg:pr-6" : ""
                }`}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brand-gold/25 bg-gradient-to-br from-brand-gold/15 to-brand-gold/5 text-brand-gold transition-all group-hover:scale-105 group-hover:border-brand-gold/50">
                  <p.icon className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <div className="leading-snug">
                  <div className="text-sm font-semibold text-foreground">{p.title}</div>
                  <div className="mt-1 text-xs text-foreground/60">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-12">
        <div className="rounded-2xl border border-foreground/10 bg-foreground/[0.04] p-5 backdrop-blur-md">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((t) => (
              <div key={t.title} className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-gold/20 bg-brand-gold/5 text-brand-gold">
                  <t.icon className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-semibold text-foreground">{t.title}</div>
                  <div className="text-xs text-foreground/60">{t.desc}</div>
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
