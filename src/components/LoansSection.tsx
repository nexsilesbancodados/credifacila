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
          className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[1.2fr_1fr]"
          data-anim-stagger
        >
          {/* Left text */}
          <div className="flex flex-col justify-center">
            <span className="pill-eyebrow w-fit">
              <Sparkles className="h-3 w-3" />
              Crédito sob medida pra você
            </span>

            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.02] tracking-tight text-foreground md:text-[52px]">
              Solicite, aprove e
              <br />
              receba{" "}
              <span className="relative inline-block text-brand-gold">
                no mesmo dia
                <svg
                  className="absolute -bottom-1 left-0 h-2 w-full"
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
                    opacity="0.5"
                  />
                </svg>
              </span>
              .
            </h2>

            <p className="mt-5 max-w-md text-base leading-relaxed text-foreground/70 md:text-lg">
              Sem fila, sem papelada e sem surpresas. Descubra em segundos a parcela que cabe no seu bolso.
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {trustItems.map((t) => (
                <li
                  key={t.title}
                  className="group rounded-2xl border border-foreground/8 bg-white/60 p-3.5 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-brand-gold/30 hover:bg-white hover:shadow-[var(--shadow-card)]"
                >
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-xl text-brand-gold-foreground shadow-[var(--shadow-gold-sm)] transition-transform group-hover:scale-105"
                    style={{ background: "var(--gradient-gold)" }}
                  >
                    <t.icon className="h-[18px] w-[18px]" strokeWidth={2.2} />
                  </span>
                  <div className="mt-3 text-[13px] font-bold leading-tight text-foreground">
                    {t.title}
                  </div>
                  <div className="mt-1 whitespace-pre-line text-[11px] leading-relaxed text-foreground/60">
                    {t.desc}
                  </div>
                </li>
              ))}
            </ul>

            {/* Mini stats */}
            <div className="mt-8 flex items-center gap-5 rounded-2xl border border-brand-gold/15 bg-gradient-to-br from-white/80 to-[hsl(40_50%_94%)]/60 px-5 py-4 backdrop-blur-sm">
              <div>
                <div className="font-display text-2xl font-bold leading-none text-foreground">
                  <Counter value={50} prefix="+" suffix=" mil" />
                </div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-foreground/55">
                  clientes
                </div>
              </div>
              <div className="h-10 w-px bg-foreground/15" />
              <div>
                <div className="flex items-baseline gap-0.5 font-display text-2xl font-bold leading-none text-foreground">
                  <Counter value={4.9} decimals={1} />
                  <Star className="h-4 w-4 fill-brand-gold text-brand-gold" />
                </div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-foreground/55">
                  avaliação
                </div>
              </div>
              <div className="h-10 w-px bg-foreground/15" />
              <div>
                <div className="font-display text-2xl font-bold leading-none text-foreground">R$ 1bi+</div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-foreground/55">
                  liberados
                </div>
              </div>
            </div>
          </div>

          {/* Right image with floating testimonial */}
          <div className="relative hidden overflow-hidden rounded-3xl shadow-[var(--shadow-card)] lg:block min-h-[520px]">
            <img
              src={loansHero}
              srcSet={`${loansHeroSm} 640w, ${loansHeroMd} 1200w, ${loansHero} 1920w`}
              sizes="(max-width: 1024px) 0px, 40vw"
              alt="Cliente satisfeita simulando empréstimo no celular"
              className="absolute inset-0 h-full w-full object-cover object-[60%_center]"
              loading="lazy"
              decoding="async"
              width={1024}
              height={1024}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 35%, hsl(220 16% 7% / 0.85) 100%)",
              }}
              aria-hidden
            />
            <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-foreground shadow-md backdrop-blur">
              <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Aprovado em 3 min
            </div>
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-[hsl(30_18%_7%)]/92 p-4 text-white shadow-lg backdrop-blur-md">
              <Quote className="h-4 w-4 text-brand-gold" />
              <p className="mt-2 text-xs leading-relaxed text-white/90">
                "Em poucos cliques resolvi tudo. Simples, rápido e sem stress!"
              </p>
              <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-3">
                <div className="leading-tight">
                  <div className="text-xs font-bold">Camila R.</div>
                  <div className="text-[10px] text-white/55">Cliente desde 2024</div>
                </div>
                <div className="flex">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-3 w-3 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PRODUCTS row */}
        <div
          className="mt-12 rounded-3xl border border-foreground/10 bg-white/80 p-6 shadow-[var(--shadow-card)] backdrop-blur-sm md:p-8"
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
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-foreground/65">
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
              <p className="mt-3 text-sm text-foreground/65">
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
                    <div className="mt-1 whitespace-pre-line text-[11px] leading-relaxed text-foreground/60">
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
                <div className="mt-0.5 text-[11px] text-foreground/60">
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
