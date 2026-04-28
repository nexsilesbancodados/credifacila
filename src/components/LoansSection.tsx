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
  User,
  Home,
  CreditCard,
  Building2,
  Award,
  HandCoins,
  Lock,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import loansHero from "@/assets/loans-hero.jpg";
import supportAgent from "@/assets/support-agent.jpg";

const trustItems = [
  { icon: ShieldCheck, title: "100% seguro", desc: "Seus dados protegidos\ncom tecnologia avançada." },
  { icon: Clock, title: "Resposta rápida", desc: "Análise ágil e retorno\nem pouco tempo." },
  { icon: Headphones, title: "Atendimento humano", desc: "Fale com pessoas reais\nsempre que precisar." },
];

const products = [
  { icon: User, title: "Crédito Pessoal", desc: "Dinheiro na conta para o que você precisar, sem burocracia." },
  { icon: Home, title: "Crédito com Garantia", desc: "Use um bem como garantia e tenha taxas mais baixas." },
  { icon: CreditCard, title: "Portabilidade de Crédito", desc: "Traga seu contrato para a Credifácil e pague menos." },
  { icon: Building2, title: "Para Empresas", desc: "Soluções de crédito para impulsionar o crescimento do seu negócio." },
];

const partnerItems = [
  { icon: Award, title: "Transparência", desc: "Contratos claros e\nsem letras pequenas." },
  { icon: HandCoins, title: "Sem taxas escondidas", desc: "Tudo explicado do\ninício ao fim." },
  { icon: Lock, title: "Compromisso com você", desc: "Estamos com você\nem cada etapa." },
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
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.05fr_1fr_0.9fr]">
          {/* Left text */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-brand-gold">
              <Heart className="h-3.5 w-3.5" />
              Empréstimos que cabem no seu momento
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-[44px]">
              Escolha o valor ideal
              <br />
              e <span className="text-brand-gold">simule agora</span> mesmo
            </h2>

            <p className="mt-4 max-w-md text-base leading-relaxed text-foreground/70">
              É rápido, sem compromisso e você descobre as melhores condições para o seu bolso.
            </p>

            <ul className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {trustItems.map((t) => (
                <li key={t.title} className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-gold/30 bg-brand-gold/10 text-brand-gold">
                    <t.icon className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <div className="leading-snug">
                    <div className="text-sm font-bold text-foreground">{t.title}</div>
                    <div className="mt-1 whitespace-pre-line text-[11px] text-foreground/60">
                      {t.desc}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Simulator card */}
          <div className="rounded-3xl border border-foreground/10 bg-white p-6 shadow-[var(--shadow-card)]">
            <h3 className="text-lg font-bold text-foreground">Simule seu empréstimo</h3>

            <div className="mt-5">
              <label className="text-xs font-medium text-foreground/70">
                1. Quanto você precisa?
              </label>
              <div className="mt-1 text-3xl font-bold text-foreground">
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
              <div className="mt-2 flex justify-between text-[11px] text-foreground/50">
                <span>R$ 1.000</span>
                <span>R$ 50.000</span>
              </div>
            </div>

            <div className="mt-5">
              <label className="text-xs font-medium text-foreground/70">
                2. Em quantas parcelas?
              </label>
              <div className="relative mt-2">
                <select
                  value={installments}
                  onChange={(e) => setInstallments(Number(e.target.value))}
                  className="w-full appearance-none rounded-xl border border-foreground/15 bg-background/50 px-4 py-3 pr-10 text-sm font-medium text-foreground focus:border-brand-gold focus:outline-none"
                >
                  {[12, 24, 36, 48, 60].map((n) => (
                    <option key={n} value={n}>
                      {n}x
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/50" />
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between rounded-2xl bg-[hsl(40_60%_94%)] p-4">
              <div>
                <div className="text-[11px] text-foreground/60">Parcela estimada</div>
                <div className="mt-0.5 text-xl font-bold text-foreground">
                  {formatBRL(monthly)}
                </div>
              </div>
              <div className="text-right">
                <div className="text-[11px] text-foreground/60">Taxa a partir de</div>
                <div className="mt-0.5 text-xl font-bold text-brand-gold">
                  1,49<span className="text-xs">% a.m.</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold text-brand-gold-foreground shadow-[var(--shadow-gold)] transition-all hover:scale-[1.01] hover:brightness-110"
              style={{ background: "var(--gradient-gold)" }}
            >
              Simular agora
            </button>

            <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-foreground/55">
              <Lock className="h-3 w-3" />
              Não impacta seu score
            </div>
          </div>

          {/* Right image with floating testimonial */}
          <div className="relative hidden h-[480px] overflow-hidden rounded-3xl shadow-[var(--shadow-card)] lg:block">
            <img
              src={loansHero}
              alt="Cliente satisfeita simulando empréstimo no celular"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              width={1024}
              height={1024}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 50%, hsl(30 18% 7% / 0.6) 100%)",
              }}
              aria-hidden="true"
            />

            {/* Floating testimonial */}
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-[hsl(30_18%_7%)]/90 p-4 text-white shadow-lg backdrop-blur-md">
              <Quote className="h-3.5 w-3.5 text-brand-gold" />
              <p className="mt-2 text-xs leading-relaxed text-white/85">
                "Consegui realizar meus planos com tranquilidade e sem complicação. Recomendo!"
              </p>
              <div className="mt-3 flex items-center justify-between">
                <div className="leading-tight">
                  <div className="text-xs font-bold">Camila R.</div>
                  <div className="text-[10px] text-white/55">Cliente Credifácil</div>
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
        <div className="mt-10 rounded-3xl border border-foreground/10 bg-white/70 p-6 shadow-[var(--shadow-card)] backdrop-blur-sm md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h3 className="text-2xl font-bold text-foreground md:text-[26px]">
              Soluções de crédito para{" "}
              <span className="text-brand-gold">cada necessidade</span>
            </h3>
            <a
              href="#emprestimos"
              className="inline-flex items-center gap-1.5 rounded-full border border-brand-gold/40 px-4 py-2 text-xs font-semibold text-brand-gold transition-all hover:bg-brand-gold/10"
            >
              Ver todos os empréstimos
              <ChevronRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p, i) => (
              <article
                key={p.title}
                className={`group flex flex-col rounded-2xl p-5 transition-all hover:bg-[hsl(40_50%_96%)] ${
                  i < 3 ? "lg:border-r lg:border-foreground/10" : ""
                }`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[hsl(40_70%_92%)] text-brand-gold transition-transform group-hover:scale-110">
                  <p.icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <h4 className="mt-4 text-[15px] font-bold text-foreground">{p.title}</h4>
                <p className="mt-1.5 text-xs leading-relaxed text-foreground/65">{p.desc}</p>
                <a
                  href="#simular"
                  className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand-gold transition-all group-hover:gap-2"
                >
                  Simular agora
                  <ChevronRight className="h-3.5 w-3.5" />
                </a>
              </article>
            ))}
          </div>
        </div>

        {/* PARTNER row */}
        <div className="relative mt-6 overflow-hidden rounded-3xl border border-brand-gold/15 bg-white/60 p-6 shadow-[var(--shadow-card)] backdrop-blur-sm md:p-8">
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1.1fr_2fr_auto]">
            <div>
              <h3 className="text-xl font-bold leading-tight text-foreground md:text-[22px]">
                Mais que crédito,
                <br />
                um parceiro para{" "}
                <span className="text-brand-gold">seus sonhos.</span>
              </h3>
              <p className="mt-2 text-xs text-foreground/65">
                Conte com a Credifácil em todas as suas conquistas.
              </p>
            </div>

            <ul className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {partnerItems.map((p) => (
                <li key={p.title} className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-gold/30 bg-brand-gold/10 text-brand-gold">
                    <p.icon className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <div className="leading-snug">
                    <div className="text-sm font-bold text-foreground">{p.title}</div>
                    <div className="mt-0.5 whitespace-pre-line text-[11px] text-foreground/60">
                      {p.desc}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4">
              <img
                src={supportAgent}
                alt="Atendente Credifácil"
                className="h-20 w-20 shrink-0 rounded-full object-cover ring-2 ring-brand-gold/30"
                loading="lazy"
                width={512}
                height={512}
              />
              <div>
                <div className="text-sm font-bold text-foreground">Fale com a gente</div>
                <div className="mt-0.5 text-[11px] text-foreground/60">
                  Nosso time está pronto
                  <br />
                  para te ajudar.
                </div>
                <a
                  href="#whatsapp"
                  className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-brand-gold/50 px-3 py-1.5 text-[11px] font-semibold text-brand-gold transition-all hover:bg-brand-gold/10"
                >
                  <MessageCircle className="h-3 w-3" />
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* sparkle deco */}
          <Sparkles
            className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 text-brand-gold/10"
            strokeWidth={1}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
};

export default LoansSection;