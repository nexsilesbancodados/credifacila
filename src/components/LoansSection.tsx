import {
  ShieldCheck,
  Clock,
  Headphones,
  ChevronRight,
  Star,
  Quote,
  Award,
  HandCoins,
  Lock,
  MessageCircle,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Users,
} from "lucide-react";
import { whatsappLink } from "@/config/site";
import { Counter } from "@/components/ui/Counter";
import loansHero from "@/assets/loans-hero.webp";
import loansHeroMd from "@/assets/loans-hero-md.webp";
import loansHeroSm from "@/assets/loans-hero-sm.webp";
import supportAgent from "@/assets/support-agent.webp";
import cardPersonalIllo from "@/assets/illustrations/card-personal.svg";
import cardCollateralIllo from "@/assets/illustrations/card-collateral.svg";
import cardPortabilityIllo from "@/assets/illustrations/card-portability.svg";
import cardBusinessIllo from "@/assets/illustrations/card-business.svg";

const trustItems = [
  { icon: ShieldCheck, title: "100% seguro", desc: "Criptografia bancária\ne dados protegidos." },
  { icon: Clock, title: "Aprovação em minutos", desc: "Resposta rápida\ne dinheiro no mesmo dia." },
  { icon: Headphones, title: "Atendimento humano", desc: "Pessoas reais para\nresolver de verdade." },
];

const products = [
  {
    illo: cardPersonalIllo,
    title: "Crédito Pessoal",
    desc: "Dinheiro livre na sua conta para realizar o que você quiser, sem precisar justificar.",
    tag: "Mais pedido",
    href: whatsappLink("Olá! Quero contratar Crédito Pessoal."),
  },
  {
    illo: cardCollateralIllo,
    title: "Crédito com Garantia",
    desc: "Use um imóvel ou veículo como garantia e tenha as menores taxas do mercado.",
    tag: "Menor taxa",
    href: whatsappLink("Olá! Quero contratar Crédito com Garantia."),
  },
  {
    illo: cardPortabilityIllo,
    title: "Portabilidade de Crédito",
    desc: "Traga seu contrato de outro banco para a Credifácil e reduza sua parcela hoje mesmo.",
    tag: null,
    href: whatsappLink("Olá! Quero fazer Portabilidade de Crédito."),
  },
  {
    illo: cardBusinessIllo,
    title: "Para Empresas",
    desc: "Capital de giro e linhas de crédito sob medida para impulsionar o seu negócio.",
    tag: "PJ",
    href: whatsappLink("Olá! Quero crédito para minha empresa."),
  },
];

const partnerItems = [
  { icon: Award, title: "Transparência total", desc: "Contratos simples e\nsem letras miúdas." },
  { icon: HandCoins, title: "Zero taxa escondida", desc: "Você sabe exatamente\no que vai pagar." },
  { icon: Lock, title: "Compromisso real", desc: "Estamos do seu lado\nem cada etapa." },
];

const LoansSection = () => {
  return (
    <section
      id="solucoes"
      className="relative w-full px-5 py-16 md:px-8 md:py-20 lg:px-10"
      aria-label="Linhas de crédito Credifácil"
    >
      <div className="mx-auto max-w-7xl">
        {/* HERO row: text + image */}
        <div
          className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-12"
          data-anim-stagger
        >
          {/* Left text */}
          <div className="flex flex-col justify-center">
            <span className="pill-eyebrow w-fit">
              <Sparkles className="h-3 w-3" />
              Crédito sob medida pra você
            </span>

            <h2 className="mt-5 font-display text-[40px] font-bold leading-[1.02] tracking-tight text-foreground md:text-[56px]">
              Solicite, aprove e
              <br />
              receba{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-gold-gradient">no mesmo dia</span>
                <svg
                  className="absolute -bottom-1 left-0 h-2.5 w-full"
                  viewBox="0 0 200 8"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M2,5 Q100,1 198,5"
                    stroke="hsl(var(--brand-gold))"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    opacity="0.55"
                  />
                </svg>
              </span>
              .
            </h2>

            <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/70 md:text-lg">
              Sem fila, sem papelada e sem surpresas. Descubra em segundos a parcela que cabe no seu bolso.
            </p>

            {/* Bullet checklist */}
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-foreground/75">
              {[
                "Resposta em até 3 minutos",
                "Sem consulta ao SPC/Serasa",
                "100% online",
              ].map((b) => (
                <li key={b} className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-brand-gold" strokeWidth={2.4} />
                  <span className="font-medium">{b}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={whatsappLink("Olá! Quero solicitar meu crédito Credifácil.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold group"
              >
                <MessageCircle className="h-4 w-4" />
                Solicitar agora
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#linhas"
                className="inline-flex items-center gap-1.5 rounded-2xl px-3.5 py-3.5 text-sm font-semibold text-foreground/80 transition-colors hover:text-brand-gold"
              >
                Conhecer linhas de crédito
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>

            {/* Trust cards */}
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {trustItems.map((t, i) => (
                <li
                  key={t.title}
                  className="trust-card group anim-pop-in"
                  style={{ animationDelay: `${120 + i * 90}ms` }}
                >
                  <span
                    className="trust-icon flex h-10 w-10 items-center justify-center rounded-xl text-brand-gold-foreground shadow-[var(--shadow-gold-sm)]"
                    style={{ background: "var(--gradient-gold)" }}
                  >
                    <t.icon className="h-[18px] w-[18px]" strokeWidth={2.2} />
                  </span>
                  <div className="mt-3 text-[13px] font-bold leading-tight text-foreground transition-colors group-hover:text-brand-gold">
                    {t.title}
                  </div>
                  <div className="mt-1 whitespace-pre-line text-[11px] leading-relaxed text-foreground/72">
                    {t.desc}
                  </div>
                  <span className="pointer-events-none absolute -right-6 -bottom-6 h-16 w-16 rounded-full bg-brand-gold/0 transition-colors duration-500 group-hover:bg-brand-gold/10" />
                </li>
              ))}
            </ul>

            {/* Mini stats — refined */}
            <div
              className="relative mt-8 overflow-hidden rounded-2xl border border-brand-gold/20 bg-gradient-to-br from-white/85 via-white/70 to-[hsl(40_60%_95%)]/70 px-5 py-4 shadow-[var(--shadow-soft)] backdrop-blur-sm anim-pop-in"
              style={{ animationDelay: "420ms" }}
            >
              <div className="flex items-center gap-5">
                <div className="stat-tile">
                  <div className="stat-value font-display text-2xl font-bold leading-none text-foreground md:text-[26px]">
                    <Counter value={50} prefix="+" suffix=" mil" />
                  </div>
                  <div className="mt-1.5 text-[10px] font-semibold uppercase tracking-wider text-foreground/70">
                    clientes
                  </div>
                </div>
                <div className="h-10 w-px bg-foreground/15" />
                <div className="stat-tile">
                  <div className="stat-value flex items-baseline gap-1 font-display text-2xl font-bold leading-none text-foreground md:text-[26px]">
                    <Counter value={4.9} decimals={1} />
                    <Star className="h-4 w-4 fill-brand-gold text-brand-gold transition-transform duration-500 [.stat-tile:hover_&]:rotate-[18deg] [.stat-tile:hover_&]:scale-110" />
                  </div>
                  <div className="mt-1.5 text-[10px] font-semibold uppercase tracking-wider text-foreground/70">
                    avaliação
                  </div>
                </div>
                <div className="h-10 w-px bg-foreground/15" />
                <div className="stat-tile">
                  <div className="stat-value font-display text-2xl font-bold leading-none text-foreground md:text-[26px]">
                    R$ 1bi<span className="text-brand-gold">+</span>
                  </div>
                  <div className="mt-1.5 text-[10px] font-semibold uppercase tracking-wider text-foreground/70">
                    liberados
                  </div>
                </div>
              </div>
              <Sparkles
                className="pointer-events-none absolute -right-3 -top-3 h-14 w-14 text-brand-gold/15 [animation:float_6s_ease-in-out_infinite]"
                strokeWidth={1}
                aria-hidden
              />
            </div>
          </div>

          {/* Right image with floating testimonial */}
          <div className="relative hidden overflow-hidden rounded-[28px] shadow-[var(--shadow-card)] lg:block min-h-[560px] ring-1 ring-foreground/10">
            <img
              src={loansHero}
              srcSet={`${loansHeroSm} 640w, ${loansHeroMd} 1200w, ${loansHero} 1920w`}
              sizes="(max-width: 1024px) 0px, 40vw"
              alt="Cliente satisfeita simulando empréstimo no celular"
              className="absolute inset-0 h-full w-full object-cover object-[60%_center] transition-transform duration-[1200ms] ease-out hover:scale-[1.03]"
              loading="lazy"
              decoding="async"
              width={1024}
              height={1024}
            />
            {/* Top fade for badge legibility */}
            <div
              className="absolute inset-x-0 top-0 h-36"
              style={{
                background:
                  "linear-gradient(180deg, hsl(220 16% 7% / 0.7) 0%, hsl(220 16% 7% / 0.25) 60%, transparent 100%)",
              }}
              aria-hidden
            />
            {/* Bottom fade for testimonial */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 35%, hsl(220 16% 7% / 0.88) 100%)",
              }}
              aria-hidden
            />

            {/* Top-left status badge */}
            <div className="badge-live anim-pop-in absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-foreground shadow-md backdrop-blur" style={{ animationDelay: "200ms" }}>
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              Aprovado em 3 min
            </div>

            {/* Top-right floating chip — live counter */}
            <div className="anim-pop-in absolute right-4 top-4 flex items-center gap-2 rounded-full border border-white/25 bg-[hsl(220_16%_7%)]/85 px-3 py-1.5 text-[10px] font-semibold text-white shadow-md backdrop-blur-md transition-transform hover:-translate-y-0.5" style={{ animationDelay: "350ms" }}>
              <Users className="h-3 w-3 text-brand-gold" />
              <span className="text-white/95">
                <span className="font-bold text-white">2.341</span> aprovados hoje
              </span>
            </div>

            {/* Testimonial card */}
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-[hsl(220_16%_7%)]/92 p-4 text-white shadow-lg backdrop-blur-md">
              <div className="flex items-start justify-between gap-3">
                <Quote className="h-5 w-5 shrink-0 text-brand-gold" />
                <div className="flex">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-3 w-3 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-white/90">
                "Em poucos cliques resolvi tudo. Simples, rápido e sem stress!"
              </p>
              <div className="mt-3 flex items-center gap-2.5 border-t border-white/10 pt-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-brand-gold to-brand-gold-soft text-[11px] font-bold text-brand-gold-foreground">
                  CR
                </span>
                <div className="leading-tight">
                  <div className="text-xs font-bold">Camila R.</div>
                  <div className="text-[10px] text-white/75">Cliente desde 2024 · São Paulo</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PRODUCTS row */}
        <div
          id="linhas"
          className="mt-12 scroll-mt-20 rounded-3xl border border-foreground/10 bg-white/80 p-6 shadow-[var(--shadow-card)] backdrop-blur-sm md:p-8"
          data-anim="fade-up"
        >
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-gold">
                Linhas de crédito
              </span>
              <h3 className="mt-1 font-display text-2xl font-bold leading-tight text-foreground md:text-[28px]">
                A solução certa para{" "}
                <span className="text-brand-gold">cada necessidade</span>
              </h3>
            </div>
            <a
              href={whatsappLink("Olá! Quero contratar um crédito Credifácil.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 rounded-full border border-brand-gold/40 px-4 py-2 text-xs font-semibold text-brand-gold transition-all hover:bg-brand-gold/10 hover:gap-2.5"
            >
              Falar no WhatsApp
              <ChevronRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" data-anim-stagger>
            {products.map((p) => (
              <a
                key={p.title}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-foreground/8 bg-white transition-all hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-[var(--shadow-gold)]"
              >
                {/* Illustration */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={p.illo}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {p.tag && (
                    <span className="absolute right-3 top-3 rounded-full bg-brand-gold px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-gold-foreground shadow-[var(--shadow-gold-sm)]">
                      {p.tag}
                    </span>
                  )}
                </div>
                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  <h4 className="font-display text-[16px] font-bold text-foreground">
                    {p.title}
                  </h4>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-foreground/75">
                    {p.desc}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand-gold transition-all group-hover:gap-2">
                    Falar no WhatsApp
                    <ChevronRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* PARTNER row */}
        <div className="relative mt-6 overflow-hidden rounded-3xl border border-brand-gold/20 bg-gradient-to-br from-white/80 to-[hsl(40_60%_94%)]/80 p-6 shadow-[var(--shadow-card)] backdrop-blur-sm md:p-8">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.1fr_2fr_auto]">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-gold">
                Nosso compromisso
              </span>
              <h3 className="mt-1 font-display text-2xl font-bold leading-tight text-foreground md:text-[26px]">
                Mais que crédito,
                <br />
                um parceiro para{" "}
                <span className="text-brand-gold">seus sonhos.</span>
              </h3>
              <p className="mt-3 text-sm text-foreground/75">
                Conte com a Credifácil em todas as suas conquistas — do primeiro sonho ao próximo grande passo.
              </p>
            </div>

            <ul className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {partnerItems.map((p) => (
                <li key={p.title} className="flex items-start gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-brand-gold/30 bg-gradient-to-br from-brand-gold/15 to-brand-gold/5 text-brand-gold">
                    <p.icon className="h-[18px] w-[18px]" strokeWidth={2} />
                  </span>
                  <div className="leading-snug">
                    <div className="text-[13px] font-bold text-foreground">{p.title}</div>
                    <div className="mt-1 whitespace-pre-line text-[11px] leading-relaxed text-foreground/72">
                      {p.desc}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 rounded-2xl border border-brand-gold/20 bg-white/70 p-4 backdrop-blur-sm">
              <div className="relative">
                <img
                  src={supportAgent}
                  alt="Atendente Credifácil"
                  className="h-16 w-16 shrink-0 rounded-full object-cover ring-2 ring-brand-gold/40"
                  loading="lazy"
                  width={512}
                  height={512}
                />
                <span className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-emerald-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </span>
              </div>
              <div>
                <div className="text-sm font-bold text-foreground">Fale com a gente</div>
                <div className="mt-0.5 text-[11px] text-foreground/72">
                  Online agora · resposta na hora
                </div>
                <a
                  href={whatsappLink("Olá! Quero falar com um especialista da Credifácil.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2.5 inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[11px] font-bold text-brand-gold-foreground shadow-[var(--shadow-gold)] transition-all hover:scale-[1.03] hover:brightness-110"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  Chamar no WhatsApp
                </a>
              </div>
            </div>
          </div>

          <Sparkles
            className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 text-brand-gold/15"
            strokeWidth={1}
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
};

export default LoansSection;
