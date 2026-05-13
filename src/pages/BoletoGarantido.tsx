import {
  ArrowRight,
  ShieldCheck,
  Receipt,
  CalendarCheck,
  TrendingUp,
  Lock,
  Sparkles,
  Clock,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import heroImg from "@/assets/boleto-hero.png";
import personEmpresaria from "@/assets/boleto/person-empresaria.png";

const steps = [
  {
    n: "01",
    title: "Você vende e emite o boleto",
    desc: "Sua empresa fecha a venda a prazo e gera o boleto normalmente para o cliente final.",
  },
  {
    n: "02",
    title: "Nós garantimos o título",
    desc: "Assumimos o boleto e cuidamos da cobrança e do risco de inadimplência.",
  },
  {
    n: "03",
    title: "Adiantamos o dinheiro",
    desc: "Em poucas horas o valor do boleto cai direto na conta da sua empresa.",
  },
  {
    n: "04",
    title: "Você foca no negócio",
    desc: "Sem ligar para o cliente cobrando, sem dor de cabeça com vencimento.",
  },
];

const stats = [
  { value: 24, suffix: "h", label: "Liberação em até" },
  { value: 100, suffix: "%", label: "Risco assumido por nós" },
  { value: 0, suffix: "", label: "Burocracia bancária" },
];

const advantages = [
  { icon: ShieldCheck, title: "Risco zero de calote", desc: "A gente assume a inadimplência, você fica com o dinheiro." },
  { icon: TrendingUp, title: "Caixa previsível", desc: "Receba antes do vencimento e planeje com segurança." },
  { icon: Lock, title: "Operação 100% segura", desc: "Processo regulado, contrato digital e auditoria completa." },
  { icon: Sparkles, title: "Sem mexer no crédito", desc: "Não impacta seu balanço, não consome limite bancário." },
];

const marqueeWords = [
  "Boleto Garantido",
  "Recebimento na hora",
  "Sem inadimplência",
  "100% digital",
  "Caixa previsível",
  "Aprovação ágil",
];

const BoletoGarantido = () => {
  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar />

      {/* HERO — full bleed image */}
      <section className="relative w-full">
        <div className="relative aspect-[16/9] sm:aspect-[21/9] lg:aspect-[21/8] w-full">
          <img
            src={heroImg}
            alt="Boleto Garantido — mais previsibilidade para o financeiro da sua empresa"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 md:h-32 bg-gradient-to-t from-background to-transparent" />
        </div>
      </section>

      {/* INTRO — editorial split with floating tilted boletos */}
      <section className="relative py-24 md:py-32">
        <div className="container-x">
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-6">
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-[hsl(var(--gold))]" />
                <span className="text-xs font-semibold uppercase tracking-[0.32em] text-[hsl(var(--gold-soft))]">
                  O que é
                </span>
              </div>
              <h2 className="mt-6 font-display text-4xl font-bold leading-[0.95] tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Vendeu a prazo?
                <br />
                <span className="text-gold-gradient">A gente garante.</span>
              </h2>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-foreground/70">
                Você vende algo e o cliente paga em boleto para depois.{" "}
                <span className="text-foreground">A Credifácil compra esse boleto</span>{" "}
                e adianta o dinheiro para sua empresa hoje. Quem corre o risco do
                não-pagamento é a gente.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-foreground/65">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[hsl(var(--gold-soft))]" />
                  Liberação no mesmo dia
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="h-4 w-4 text-[hsl(var(--gold-soft))]" />
                  100% digital e seguro
                </div>
              </div>
            </Reveal>

            {/* Floating boleto cards */}
            <div className="relative lg:col-span-6">
              <div className="relative mx-auto h-[420px] w-full max-w-[520px]">
                {/* glow */}
                <div className="absolute inset-0 rounded-full bg-[hsl(var(--gold))/0.18] blur-3xl" />

                {/* Boleto card 1 — back */}
                <Reveal delay={150}>
                  <BoletoCard
                    className="absolute left-2 top-6 w-[78%] rotate-[-8deg] opacity-70 hover:rotate-[-6deg] hover:opacity-90"
                    valor="R$ 12.480,00"
                    venc="15/05/2026"
                  />
                </Reveal>

                {/* Boleto card 2 — middle */}
                <Reveal delay={300}>
                  <BoletoCard
                    className="absolute left-1/2 top-[28%] w-[82%] -translate-x-1/2 rotate-[2deg] hover:-translate-y-2 hover:rotate-[1deg]"
                    valor="R$ 8.950,00"
                    venc="22/05/2026"
                    accent
                  />
                </Reveal>

                {/* Boleto card 3 — front */}
                <Reveal delay={450}>
                  <BoletoCard
                    className="absolute right-2 bottom-6 w-[78%] rotate-[6deg] hover:rotate-[4deg]"
                    valor="R$ 24.300,00"
                    venc="30/05/2026"
                  />
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA — sticky scrolly timeline */}
      <section className="relative border-y border-white/5 bg-[#080f1f] py-24 md:py-32">
        <div className="container-x">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            {/* Sticky left */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <div className="flex items-center gap-4">
                  <span className="h-px w-12 bg-[hsl(var(--gold))]" />
                  <span className="text-xs font-semibold uppercase tracking-[0.32em] text-[hsl(var(--gold-soft))]">
                    Como funciona
                  </span>
                </div>
                <h2 className="mt-6 font-display text-4xl font-bold leading-[0.95] tracking-tight text-foreground md:text-5xl">
                  Quatro passos.
                  <br />
                  <span className="text-gold-gradient">Zero burocracia.</span>
                </h2>
                <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/65">
                  Da emissão do boleto ao dinheiro na conta — tudo digital, com
                  acompanhamento em tempo real.
                </p>
              </div>
            </div>

            {/* Right timeline */}
            <div className="relative lg:col-span-7">
              {/* vertical line */}
              <div className="absolute left-[28px] top-2 bottom-2 w-px bg-gradient-to-b from-[hsl(var(--gold))/0.1] via-[hsl(var(--gold))/0.4] to-[hsl(var(--gold))/0.1]" />

              <ol className="space-y-6">
                {steps.map((s, i) => (
                  <Reveal key={s.n} delay={i * 120}>
                    <li className="relative pl-20">
                      {/* dot */}
                      <span className="absolute left-0 top-2 inline-flex h-14 w-14 items-center justify-center rounded-full border border-[hsl(var(--gold))/0.45] bg-[#0a1428] font-display text-base font-bold text-[hsl(var(--gold-soft))] shadow-[0_0_30px_-5px_hsl(var(--gold)/0.5)]">
                        {s.n}
                      </span>
                      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition hover:-translate-y-0.5 hover:border-[hsl(var(--gold))/0.45]">
                        <h3 className="font-display text-xl font-bold text-foreground md:text-2xl">
                          {s.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-foreground/65 md:text-base">
                          {s.desc}
                        </p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* NÚMEROS — editorial counters */}
      <section className="relative py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-10 bg-[hsl(var(--gold))]" />
                <span className="text-xs font-semibold uppercase tracking-[0.32em] text-[hsl(var(--gold-soft))]">
                  Por que confiar
                </span>
                <span className="h-px w-10 bg-[hsl(var(--gold))]" />
              </div>
              <h2 className="mt-6 font-display text-4xl font-bold leading-[1] tracking-tight text-foreground md:text-5xl">
                Os números falam por si
              </h2>
            </div>
          </Reveal>

          <div className="mx-auto mt-16 max-w-5xl divide-y divide-white/10 border-y border-white/10 md:grid md:grid-cols-3 md:divide-x md:divide-y-0">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 150}>
                <div className="px-4 py-10 text-center md:px-8 md:py-14">
                  <p className="font-display text-6xl font-bold leading-none text-gold-gradient md:text-7xl lg:text-8xl">
                    <CountUp end={s.value} suffix={s.suffix} duration={1600} />
                  </p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/65 md:text-sm">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VANTAGENS — bento grid */}
      <section className="relative py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <div className="max-w-2xl">
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-[hsl(var(--gold))]" />
                <span className="text-xs font-semibold uppercase tracking-[0.32em] text-[hsl(var(--gold-soft))]">
                  Vantagens
                </span>
              </div>
              <h2 className="mt-6 font-display text-4xl font-bold leading-[0.95] tracking-tight text-foreground md:text-5xl">
                Tudo que você ganha com{" "}
                <span className="text-gold-gradient">o Boleto Garantido</span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-4 md:grid-cols-12 md:gap-5">
            {advantages.map(({ icon: Icon, title, desc }, i) => {
              // Bento sizing: alternate spans for asymmetric look
              const span =
                i === 0
                  ? "md:col-span-7"
                  : i === 1
                    ? "md:col-span-5"
                    : i === 2
                      ? "md:col-span-5"
                      : "md:col-span-7";
              return (
                <Reveal key={title} delay={i * 100} className={span}>
                  <article className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-[hsl(var(--gold))/0.45] md:p-9">
                    {/* corner glow */}
                    <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[hsl(var(--gold))/0.15] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[hsl(var(--gold))/0.35] bg-background/60 text-[hsl(var(--gold-soft))]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-6 font-display text-2xl font-bold text-foreground md:text-[28px]">
                      {title}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-foreground/65 md:text-base">
                      {desc}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* PARA QUEM É — composite banner with cut-out person */}
      <section className="relative py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-[hsl(var(--gold))/0.35] bg-gradient-to-br from-[#0a1428] via-[#0d1a36] to-[#0a1428] shadow-[0_40px_120px_-40px_hsl(var(--gold)/0.4)]">
              <div className="pointer-events-none absolute -right-32 -bottom-24 h-[500px] w-[500px] rounded-full bg-[hsl(var(--gold))/0.18] blur-3xl" />

              <div className="relative grid items-stretch md:grid-cols-12">
                <div className="relative z-10 col-span-12 flex flex-col justify-center p-8 md:col-span-7 md:p-14 lg:p-16">
                  <span className="pill-gold w-fit">Para quem é</span>
                  <h2 className="mt-6 font-display text-3xl font-bold leading-[1.05] tracking-tight text-foreground md:text-4xl lg:text-5xl">
                    Para empresas que vendem{" "}
                    <span className="text-gold-gradient">a prazo</span> e querem dormir tranquilas
                  </h2>
                  <p className="mt-5 max-w-lg text-base leading-relaxed text-foreground/70">
                    Indústria, comércio, distribuidoras, prestadoras de serviço —
                    qualquer negócio que emite boleto pode garantir o recebimento
                    e antecipar o caixa com a gente.
                  </p>

                  <a
                    href="/contato"
                    className="group mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-soft))] px-6 py-3 text-sm font-bold uppercase tracking-[0.15em] text-[#0a1428] shadow-[0_15px_40px_-10px_hsl(var(--gold)/0.6)] transition hover:scale-[1.02] hover:shadow-[0_20px_50px_-10px_hsl(var(--gold)/0.8)]"
                  >
                    Quero garantir meus boletos
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>

                <div className="relative col-span-12 min-h-[380px] md:col-span-5 md:min-h-0">
                  <div className="pointer-events-none absolute inset-y-0 -left-20 hidden w-40 bg-gradient-to-r from-[#0a1428] to-transparent md:block" />
                  <img
                    src={personEmpresaria}
                    alt="Empresária tranquila"
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="absolute bottom-0 right-0 h-[110%] w-auto max-w-none object-contain object-bottom drop-shadow-[0_30px_40px_rgba(0,0,0,0.5)]"
                  />
                  <div className="absolute left-4 top-6 z-10 md:right-6 md:left-auto">
                    <Reveal delay={200}>
                      <div className="flex items-center gap-3 rounded-2xl border border-[hsl(var(--gold))/0.45] bg-[#0a1428]/85 px-4 py-3 backdrop-blur-md">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[hsl(var(--gold))] to-[hsl(var(--gold-soft))] text-[#0a1428]">
                          <Receipt className="h-4 w-4" />
                        </span>
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-foreground/60">Boleto garantido</p>
                          <p className="text-sm font-bold text-foreground">100% recebido</p>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MARQUEE de garantias */}
      <section className="relative overflow-hidden border-y border-white/10 bg-[#080f1f] py-8">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeWords, ...marqueeWords, ...marqueeWords].map((w, i) => (
            <span key={i} className="mx-8 inline-flex items-center gap-6 font-display text-3xl font-bold uppercase tracking-tight md:text-5xl">
              <span className={i % 2 === 0 ? "text-gold-gradient" : "text-foreground/30"}>
                {w}
              </span>
              <span className="text-[hsl(var(--gold))] text-3xl md:text-4xl">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="relative py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-[hsl(var(--gold))/0.35] bg-gradient-to-br from-[#0a1428] via-[#0d1a36] to-[#0a1428] p-10 text-center md:p-20">
              <div className="pointer-events-none absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-[hsl(var(--gold))/0.2] blur-3xl" />
              <div className="pointer-events-none absolute -right-32 -bottom-32 h-[500px] w-[500px] rounded-full bg-[hsl(var(--gold))/0.15] blur-3xl" />
              <div className="relative">
                <span className="pill-gold">Comece agora</span>
                <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
                  Transforme cada boleto em{" "}
                  <span className="text-gold-gradient">recebimento certo</span>
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-foreground/70 md:text-lg">
                  Fale com nosso time e descubra como o Boleto Garantido pode
                  blindar o caixa da sua empresa.
                </p>
                <a
                  href="/contato"
                  className="group mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-soft))] px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-[#0a1428] shadow-[0_20px_50px_-10px_hsl(var(--gold)/0.7)] transition hover:scale-[1.03]"
                >
                  Falar com especialista
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
};

/* ---------- Boleto card sub-component ---------- */

const BoletoCard = ({
  className = "",
  valor,
  venc,
  accent = false,
}: {
  className?: string;
  valor: string;
  venc: string;
  accent?: boolean;
}) => (
  <div
    className={`group relative rounded-2xl border bg-gradient-to-br p-5 backdrop-blur-md shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] transition-all duration-500 ${
      accent
        ? "border-[hsl(var(--gold))/0.55] from-[#0a1428] to-[#10204a]"
        : "border-white/15 from-[#0d1830] to-[#0a1428]"
    } ${className}`}
  >
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[hsl(var(--gold))] to-[hsl(var(--gold-soft))] text-[#0a1428]">
          <CalendarCheck className="h-3.5 w-3.5" />
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground/60">
          Boleto
        </span>
      </div>
      {accent && (
        <span className="rounded-full border border-[hsl(var(--gold))/0.5] bg-[hsl(var(--gold))/0.1] px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--gold-soft))]">
          Garantido
        </span>
      )}
    </div>

    <div className="mt-5">
      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground/55">
        Valor
      </p>
      <p className="mt-1 font-display text-2xl font-bold text-foreground md:text-3xl">
        {valor}
      </p>
    </div>

    {/* faux barcode */}
    <div className="mt-4 flex items-end gap-[2px]">
      {Array.from({ length: 38 }).map((_, i) => (
        <span
          key={i}
          style={{ height: `${10 + ((i * 13) % 18)}px` }}
          className={`w-[2px] ${i % 3 === 0 ? "bg-foreground/80" : "bg-foreground/35"}`}
        />
      ))}
    </div>

    <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
      <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-foreground/55">
        Vencimento
      </span>
      <span className="text-xs font-bold text-foreground/85">{venc}</span>
    </div>
  </div>
);

export default BoletoGarantido;