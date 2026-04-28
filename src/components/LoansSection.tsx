import { useState } from "react";
import {
  Heart,
  ShieldCheck,
  Clock,
  Headphones,
  ChevronRight,
  ChevronDown,
  Star,
  Quote,
  Wallet,
  HomeIcon,
  Repeat,
  Building2,
  Award,
  HandCoins,
  Lock,
  MessageCircle,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import loansHero from "@/assets/loans-hero.jpg";
import supportAgent from "@/assets/support-agent.jpg";
import cardPersonal from "@/assets/card-personal.jpg";
import cardCollateral from "@/assets/card-collateral.jpg";
import cardPortability from "@/assets/card-portability.jpg";
import cardBusiness from "@/assets/card-business.jpg";

const trustItems = [
  { icon: ShieldCheck, title: "100% seguro", desc: "Criptografia bancária\ne dados protegidos." },
  { icon: Clock, title: "Aprovação em minutos", desc: "Resposta rápida\ne dinheiro no mesmo dia." },
  { icon: Headphones, title: "Atendimento humano", desc: "Pessoas reais para\nresolver de verdade." },
];

const products = [
  {
    icon: Wallet,
    title: "Crédito Pessoal",
    desc: "Dinheiro livre na sua conta para realizar o que você quiser, sem precisar justificar.",
    tag: "Mais pedido",
    bg: cardPersonal,
  },
  {
    icon: HomeIcon,
    title: "Crédito com Garantia",
    desc: "Use um imóvel ou veículo como garantia e tenha as menores taxas do mercado.",
    tag: "Menor taxa",
    bg: cardCollateral,
  },
  {
    icon: Repeat,
    title: "Portabilidade de Crédito",
    desc: "Traga seu contrato de outro banco para a Credifácil e reduza sua parcela hoje mesmo.",
    tag: null,
    bg: cardPortability,
  },
  {
    icon: Building2,
    title: "Para Empresas",
    desc: "Capital de giro e linhas de crédito sob medida para impulsionar o seu negócio.",
    tag: "PJ",
    bg: cardBusiness,
  },
];

const partnerItems = [
  { icon: Award, title: "Transparência total", desc: "Contratos simples e\nsem letras miúdas." },
  { icon: HandCoins, title: "Zero taxa escondida", desc: "Você sabe exatamente\no que vai pagar." },
  { icon: Lock, title: "Compromisso real", desc: "Estamos do seu lado\nem cada etapa." },
];

const formatBRL = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 2 });

const LoansSection = () => {
  const [amount, setAmount] = useState(15000);
  const [installments, setInstallments] = useState(36);

  // Simple illustrative calculation (1.49% a.m.)
  const rate = 0.0149;
  const factor = (rate * Math.pow(1 + rate, installments)) / (Math.pow(1 + rate, installments) - 1);
  const monthly = amount * factor;

  return (
    <section
      id="emprestimos"
      className="relative w-full px-5 py-16 md:px-8 md:py-20 lg:px-10"
      aria-label="Empréstimos e simulador"
    >
      <div className="mx-auto max-w-7xl">
        {/* HERO row: text + simulator + image */}
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[1.1fr_1fr_0.85fr]">
          {/* Left text */}
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-brand-gold">
              <Sparkles className="h-3.5 w-3.5" />
              Crédito sob medida pra você
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-[1.02] tracking-tight text-foreground md:text-[52px]">
              Simule, aprove e
              <br />
              receba{" "}
              <span className="relative inline-block text-brand-gold">
                no mesmo dia
                <svg
                  className="absolute -bottom-1 left-0 h-2 w-full"
                  viewBox="0 0 200 8"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M2,5 Q100,1 198,5" stroke="hsl(var(--brand-gold))" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.5" />
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
                    className="flex h-10 w-10 items-center justify-center rounded-xl text-brand-gold-foreground shadow-[var(--shadow-gold)] transition-transform group-hover:scale-105"
                    style={{ background: "var(--gradient-gold)" }}
                  >
                    <t.icon className="h-[18px] w-[18px]" strokeWidth={2.2} />
                  </span>
                  <div className="mt-3 text-[13px] font-bold leading-tight text-foreground">{t.title}</div>
                  <div className="mt-1 whitespace-pre-line text-[11px] leading-relaxed text-foreground/60">
                    {t.desc}
                  </div>
                </li>
              ))}
            </ul>

            {/* Mini stats */}
            <div className="mt-8 flex items-center gap-5 rounded-2xl border border-brand-gold/15 bg-gradient-to-br from-white/80 to-[hsl(40_50%_94%)]/60 px-5 py-4 backdrop-blur-sm">
              <div>
                <div className="text-2xl font-bold leading-none text-foreground">+50 mil</div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-foreground/55">clientes</div>
              </div>
              <div className="h-10 w-px bg-foreground/15" />
              <div>
                <div className="flex items-baseline gap-0.5 text-2xl font-bold leading-none text-foreground">
                  4,9
                  <Star className="h-4 w-4 fill-brand-gold text-brand-gold" />
                </div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-foreground/55">avaliação</div>
              </div>
              <div className="h-10 w-px bg-foreground/15" />
              <div>
                <div className="text-2xl font-bold leading-none text-foreground">R$ 1bi+</div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-foreground/55">liberados</div>
              </div>
            </div>
          </div>

          {/* Simulator card */}
          <div className="relative rounded-3xl border border-foreground/10 bg-white p-7 shadow-[var(--shadow-card)]">
            {/* gold top accent */}
            <div
              className="pointer-events-none absolute inset-x-6 top-0 h-px"
              style={{ background: "linear-gradient(90deg, transparent, hsl(var(--brand-gold)), transparent)" }}
              aria-hidden="true"
            />
            <div
              className="absolute -top-3 left-7 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-gold-foreground shadow-[var(--shadow-gold)]"
              style={{ background: "var(--gradient-gold)" }}
            >
              <Sparkles className="h-3 w-3" />
              Simulador grátis
            </div>
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-bold text-foreground">Simule seu empréstimo</h3>
                <p className="mt-1 text-xs text-foreground/55">Em 30 segundos você tem sua resposta.</p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-1 text-[10px] font-bold text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Online
              </span>
            </div>

            <div className="mt-6">
              <label className="text-[11px] font-semibold uppercase tracking-wider text-foreground/60">
                Quanto você precisa?
              </label>
              <div className="mt-1 text-[32px] font-bold leading-none text-foreground">
                {formatBRL(amount)}
              </div>
              <input
                type="range"
                min={1000}
                max={50000}
                step={500}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                aria-label="Valor do empréstimo"
                className="mt-3 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-foreground/10 accent-brand-gold"
                style={{
                  background: `linear-gradient(to right, hsl(var(--brand-gold)) 0%, hsl(var(--brand-gold)) ${
                    ((amount - 1000) / 49000) * 100
                  }%, hsl(30 10% 90%) ${((amount - 1000) / 49000) * 100}%, hsl(30 10% 90%) 100%)`,
                }}
              />
              <div className="mt-2 flex justify-between text-[10px] font-medium text-foreground/50">
                <span>R$ 1.000</span>
                <span>R$ 50.000</span>
              </div>
            </div>

            <div className="mt-5">
              <label className="text-[11px] font-semibold uppercase tracking-wider text-foreground/60">
                Em quantas parcelas?
              </label>
              <div className="relative mt-2">
                <select
                  value={installments}
                  onChange={(e) => setInstallments(Number(e.target.value))}
                  className="w-full appearance-none rounded-xl border border-foreground/15 bg-[hsl(40_30%_98%)] px-4 py-3 pr-10 text-sm font-semibold text-foreground transition-colors focus:border-brand-gold focus:outline-none"
                >
                  {[12, 24, 36, 48, 60].map((n) => (
                    <option key={n} value={n}>
                      {n}x mensais
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/50" />
              </div>
            </div>

            <div className="relative mt-6 overflow-hidden rounded-2xl border border-brand-gold/25 bg-gradient-to-br from-[hsl(40_70%_94%)] to-[hsl(38_60%_88%)] p-4">
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-40"
                style={{ background: "radial-gradient(circle, hsl(var(--brand-gold) / 0.4), transparent 70%)" }}
                aria-hidden="true"
              />
              <div className="relative flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-foreground/60">
                    Parcela estimada
                  </div>
                  <div className="mt-1 text-[26px] font-bold leading-none text-foreground">
                    {formatBRL(monthly)}
                  </div>
                  <div className="mt-1.5 inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700">
                    <CheckCircle2 className="h-3 w-3" />
                    Cabe no seu bolso
                  </div>
                </div>
                <div className="h-12 w-px bg-foreground/10" />
                <div className="text-right">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-foreground/60">
                    Taxa a partir de
                  </div>
                  <div className="mt-1 text-[26px] font-bold leading-none text-brand-gold">
                    1,49<span className="text-xs">% a.m.</span>
                  </div>
                  <div className="mt-1.5 text-[10px] font-semibold text-foreground/55">
                    CET sob consulta
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl py-4 text-[15px] font-bold text-brand-gold-foreground shadow-[var(--shadow-gold)] transition-all hover:scale-[1.02] hover:brightness-110"
              style={{ background: "var(--gradient-gold)" }}
            >
              Quero esse empréstimo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] font-medium text-foreground/55">
              <Lock className="h-3 w-3" />
              Simulação 100% gratuita · Não afeta seu score
            </div>
          </div>

          {/* Right image with floating testimonial */}
          <div className="relative hidden overflow-hidden rounded-3xl shadow-[var(--shadow-card)] lg:block">
            <img
              src={loansHero}
              alt="Cliente satisfeita simulando empréstimo no celular"
              className="absolute inset-0 h-full w-full object-cover object-[60%_center]"
              loading="lazy"
              width={1024}
              height={1024}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 35%, hsl(30 18% 7% / 0.85) 100%)",
              }}
              aria-hidden="true"
            />

            {/* Top floating badge */}
            <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-foreground shadow-md backdrop-blur">
              <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Aprovado em 3 min
            </div>

            {/* Floating testimonial */}
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
        <div className="mt-12 rounded-3xl border border-foreground/10 bg-white/80 p-6 shadow-[var(--shadow-card)] backdrop-blur-sm md:p-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-gold">
                Linhas de crédito
              </span>
              <h3 className="mt-1 text-2xl font-bold leading-tight text-foreground md:text-[28px]">
                A solução certa para{" "}
                <span className="text-brand-gold">cada necessidade</span>
              </h3>
            </div>
            <a
              href="#emprestimos"
              className="group inline-flex items-center gap-1.5 rounded-full border border-brand-gold/40 px-4 py-2 text-xs font-semibold text-brand-gold transition-all hover:bg-brand-gold/10 hover:gap-2.5"
            >
              Ver todas as linhas
              <ChevronRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <article
                key={p.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-foreground/8 bg-white p-5 transition-all hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-[var(--shadow-gold)]"
              >
                {/* Background image */}
                <img
                  src={p.bg}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width={800}
                  height={800}
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.18] transition-all duration-700 group-hover:scale-110 group-hover:opacity-30"
                />
                {/* Gradient overlay for legibility */}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, hsl(0 0% 100% / 0.92) 0%, hsl(0 0% 100% / 0.78) 45%, hsl(0 0% 100% / 0.95) 100%)",
                  }}
                  aria-hidden="true"
                />
                {/* Content wrapper */}
                <div className="relative flex flex-col">
                {p.tag && (
                  <span className="absolute right-0 top-0 rounded-full bg-brand-gold px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-gold-foreground shadow-[var(--shadow-gold)]">
                    {p.tag}
                  </span>
                )}
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl text-brand-gold-foreground shadow-[var(--shadow-gold)] transition-transform group-hover:scale-110 group-hover:rotate-3"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  <p.icon className="h-5 w-5" strokeWidth={2.2} />
                </div>
                <h4 className="mt-5 text-[16px] font-bold text-foreground">{p.title}</h4>
                <p className="mt-2 text-xs leading-relaxed text-foreground/65">{p.desc}</p>
                <a
                  href="/simular"
                  className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-brand-gold transition-all group-hover:gap-2"
                >
                  Simular agora
                  <ChevronRight className="h-3.5 w-3.5" />
                </a>
                </div>
              </article>
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
              <h3 className="mt-1 text-2xl font-bold leading-tight text-foreground md:text-[26px]">
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
                  href="#whatsapp"
                  className="mt-2.5 inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[11px] font-bold text-brand-gold-foreground shadow-[var(--shadow-gold)] transition-all hover:scale-[1.03] hover:brightness-110"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  Chamar no WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* sparkle deco */}
          <Sparkles
            className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 text-brand-gold/15"
            strokeWidth={1}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
};

export default LoansSection;