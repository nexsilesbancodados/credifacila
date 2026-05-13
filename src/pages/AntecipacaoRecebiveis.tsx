import {
  ArrowRight,
  Wallet,
  Zap,
  ShieldCheck,
  FileText,
  Building2,
  Store,
  Truck,
  Stethoscope,
  Clock,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import heroImg from "@/assets/antecipacao-hero.png";
import personEmpresario from "@/assets/antecipacao/person-empresario.png";
import personEmpresaria from "@/assets/antecipacao/person-empresaria.png";
import personLojista from "@/assets/antecipacao/person-lojista.png";

const benefits = [
  {
    icon: Wallet,
    title: "Capital de giro imediato",
    desc: "Receba hoje o valor das suas duplicatas, cheques e boletos a vencer.",
  },
  {
    icon: Zap,
    title: "Aprovação ágil",
    desc: "Análise rápida e crédito liberado em poucas horas — sem burocracia.",
  },
  {
    icon: ShieldCheck,
    title: "Sem dívida no balanço",
    desc: "A operação é a venda do recebível: não compromete seu endividamento.",
  },
];

const sectors = [
  { icon: Store, label: "Comércio e varejo" },
  { icon: Truck, label: "Transporte e logística" },
  { icon: Building2, label: "Indústria e serviços" },
  { icon: Stethoscope, label: "Saúde e clínicas" },
];

const steps = [
  { n: "01", title: "Envie seus recebíveis", desc: "Duplicatas, cheques, boletos ou contratos a vencer." },
  { n: "02", title: "Análise expressa", desc: "Avaliamos os títulos e a sua operação com agilidade." },
  { n: "03", title: "Compramos sua dívida", desc: "Assumimos o recebível e cuidamos da cobrança no vencimento." },
  { n: "04", title: "Dinheiro na conta", desc: "Você recebe o valor antecipado direto na sua conta." },
];

const AntecipacaoRecebiveis = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative w-full overflow-hidden">
        <div className="relative aspect-[16/9] sm:aspect-[21/9] lg:aspect-[21/8] w-full">
          <img
            src={heroImg}
            alt="Antecipe seus recebíveis — capital de giro com agilidade"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 md:h-32 bg-gradient-to-t from-background to-transparent" />
        </div>
      </section>

      {/* Intro / benefits */}
      <section className="relative py-20 md:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <span className="pill-gold">Antecipação de Recebíveis</span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Transforme seus recebíveis em{" "}
              <span className="text-gold-gradient">dinheiro hoje</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-foreground/65 md:text-lg">
              Tem um valor a receber daqui alguns dias? A gente compra esse
              recebível e antecipa o dinheiro para você na hora — sem mexer no
              seu limite de crédito.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3 md:gap-6">
            {benefits.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 100}>
                <article className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-[hsl(var(--gold))/0.45] hover:shadow-[0_30px_80px_-30px_hsl(var(--gold)/0.4)] md:p-7">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[hsl(var(--gold))/0.35] bg-background/60 text-[hsl(var(--gold-soft))]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-foreground md:text-xl">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                    {desc}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="relative py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-[hsl(var(--gold))/0.35] bg-gradient-to-br from-[#0a1428] via-[#0d1a36] to-[#0a1428] shadow-[0_40px_120px_-40px_hsl(var(--gold)/0.4)]">
              {/* gold glow */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-[hsl(var(--gold))/0.18] blur-3xl" />
              <div className="pointer-events-none absolute -left-32 bottom-0 h-[300px] w-[300px] rounded-full bg-[hsl(var(--gold))/0.10] blur-3xl" />

              <div className="relative grid min-h-[520px] items-stretch md:grid-cols-12">
                {/* Texto */}
                <div className="relative z-10 col-span-12 flex flex-col justify-center p-8 md:col-span-7 md:p-14 lg:p-16">
                  <span className="pill-gold w-fit">Para quem é</span>
                  <h2 className="mt-6 font-display text-3xl font-bold leading-[1.05] tracking-tight text-foreground md:text-4xl lg:text-5xl">
                    Para empresas que precisam de{" "}
                    <span className="text-gold-gradient">caixa agora</span>
                  </h2>
                  <p className="mt-5 max-w-lg text-base leading-relaxed text-foreground/70">
                    Atendemos negócios de todos os portes que vendem a prazo e
                    querem girar o caixa com mais liberdade.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2.5">
                    {sectors.map(({ icon: Icon, label }, i) => (
                      <Reveal key={label} delay={i * 100}>
                        <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--gold))/0.35] bg-white/[0.04] px-4 py-2 text-xs font-semibold text-foreground/85 backdrop-blur-md md:text-sm">
                          <Icon className="h-4 w-4 text-[hsl(var(--gold-soft))]" />
                          {label}
                        </span>
                      </Reveal>
                    ))}
                  </div>
                </div>

                {/* Pessoa sangrando no fundo */}
                <div className="relative col-span-12 min-h-[360px] md:col-span-5 md:min-h-0">
                  <div className="pointer-events-none absolute inset-y-0 -left-20 hidden w-40 bg-gradient-to-r from-[#0a1428] to-transparent md:block" />
                  <Parallax amount={40} className="absolute inset-0">
                    <img
                      src={personEmpresario}
                      alt="Empresário sorrindo"
                      loading="lazy"
                      width={1024}
                      height={1280}
                      className="absolute bottom-0 right-0 h-[110%] w-auto max-w-none object-contain object-bottom drop-shadow-[0_30px_40px_rgba(0,0,0,0.5)]"
                    />
                  </Parallax>
                  {/* Badge sobreposto */}
                  <div className="absolute left-4 top-6 z-10 md:left-auto md:right-6">
                    <Reveal delay={200}>
                      <div className="flex items-center gap-3 rounded-2xl border border-[hsl(var(--gold))/0.45] bg-[#0a1428]/85 px-4 py-3 backdrop-blur-md">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[hsl(var(--gold))] to-[hsl(var(--gold-soft))] text-[#0a1428]">
                          <TrendingUp className="h-4 w-4" />
                        </span>
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-foreground/60">Caixa girando</p>
                          <p className="text-sm font-bold text-foreground">+R$ 250 mil/mês</p>
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

      {/* Como funciona */}
      <section className="relative py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-[hsl(var(--gold))/0.35] bg-gradient-to-bl from-[#0a1428] via-[#0d1a36] to-[#0a1428] shadow-[0_40px_120px_-40px_hsl(var(--gold)/0.4)]">
              <div className="pointer-events-none absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full bg-[hsl(var(--gold))/0.18] blur-3xl" />

              <div className="relative grid min-h-[600px] items-stretch md:grid-cols-12">
                {/* Pessoa à esquerda */}
                <div className="relative col-span-12 order-2 min-h-[360px] md:col-span-5 md:order-1 md:min-h-0">
                  <div className="pointer-events-none absolute inset-y-0 -right-20 hidden w-40 bg-gradient-to-l from-[#0a1428] to-transparent md:block" />
                  <Parallax amount={40} className="absolute inset-0">
                    <img
                      src={personEmpresaria}
                      alt="Empresária aprovando antecipação"
                      loading="lazy"
                      width={1024}
                      height={1280}
                      className="absolute bottom-0 left-0 h-[110%] w-auto max-w-none object-contain object-bottom drop-shadow-[0_30px_40px_rgba(0,0,0,0.5)]"
                    />
                  </Parallax>
                  {/* Badge tempo */}
                  <div className="absolute right-4 top-6 z-10 md:left-6 md:right-auto">
                    <Reveal delay={200}>
                      <div className="flex items-center gap-3 rounded-2xl border border-[hsl(var(--gold))/0.45] bg-[#0a1428]/85 px-4 py-3 backdrop-blur-md">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[hsl(var(--gold))] to-[hsl(var(--gold-soft))] text-[#0a1428]">
                          <Clock className="h-4 w-4" />
                        </span>
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-foreground/60">Liberação em</p>
                          <p className="text-sm font-bold text-foreground">Até 4 horas</p>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </div>

                {/* Steps à direita */}
                <div className="relative z-10 col-span-12 order-1 flex flex-col justify-center p-8 md:col-span-7 md:order-2 md:p-14 lg:p-16">
                  <span className="pill-gold w-fit">Como funciona</span>
                  <h2 className="mt-6 font-display text-3xl font-bold leading-[1.05] tracking-tight text-foreground md:text-4xl lg:text-5xl">
                    Quatro passos do recebível ao{" "}
                    <span className="text-gold-gradient">dinheiro na conta</span>
                  </h2>

                  <ol className="mt-8 grid gap-3 sm:grid-cols-2">
                    {steps.map((s, i) => (
                      <Reveal key={s.n} delay={i * 120}>
                        <li className="group relative flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md transition hover:border-[hsl(var(--gold))/0.45]">
                          <span className="font-display text-2xl font-bold text-gold-gradient">
                            {s.n}
                          </span>
                          <div>
                            <h3 className="font-display text-sm font-bold text-foreground md:text-base">
                              {s.title}
                            </h3>
                            <p className="mt-1 text-xs leading-relaxed text-foreground/65 md:text-sm">
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
          </Reveal>
        </div>
      </section>

      {/* Crescimento / CTA */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-[hsl(var(--gold))/0.35] bg-gradient-to-r from-[#0a1428] via-[#0d1a36] to-[#0a1428] shadow-[0_40px_120px_-40px_hsl(var(--gold)/0.4)]">
              <div className="pointer-events-none absolute -right-32 -bottom-24 h-[500px] w-[500px] rounded-full bg-[hsl(var(--gold))/0.18] blur-3xl" />
              <div className="relative grid items-stretch md:grid-cols-12">
                <div className="relative col-span-12 min-h-[340px] md:col-span-5 md:min-h-[520px]">
                  <div className="pointer-events-none absolute inset-y-0 -right-20 hidden w-40 bg-gradient-to-l from-[#0a1428] to-transparent md:block" />
                  <Parallax amount={40} className="absolute inset-0">
                    <img
                      src={personLojista}
                      alt="Lojista satisfeito"
                      loading="lazy"
                      width={1024}
                      height={1280}
                      className="absolute bottom-0 left-0 h-[110%] w-auto max-w-none object-contain object-bottom drop-shadow-[0_30px_40px_rgba(0,0,0,0.5)]"
                    />
                  </Parallax>
                  <div className="absolute right-4 top-6 z-10 md:left-6 md:right-auto">
                    <Reveal delay={200}>
                      <div className="flex items-center gap-3 rounded-2xl border border-[hsl(var(--gold))/0.45] bg-[#0a1428]/85 px-4 py-3 backdrop-blur-md">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[hsl(var(--gold))] to-[hsl(var(--gold-soft))] text-[#0a1428]">
                          <CheckCircle2 className="h-4 w-4" />
                        </span>
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-foreground/60">Aprovado</p>
                          <p className="text-sm font-bold text-foreground">100% digital</p>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </div>

                <div className="relative z-10 col-span-12 flex flex-col justify-center p-8 md:col-span-7 md:p-12 lg:p-16">
                  <span className="pill-gold w-fit">Cresça com fôlego</span>
                  <h2 className="mt-6 font-display text-3xl font-bold leading-[1.1] tracking-tight text-foreground md:text-4xl">
                    Mais caixa hoje,{" "}
                    <span className="text-gold-gradient">mais negócios amanhã</span>
                  </h2>
                  <p className="mt-5 max-w-md text-sm leading-relaxed text-foreground/65 md:text-base">
                    Use o capital antecipado para comprar estoque, contratar,
                    investir ou simplesmente respirar. Você decide o ritmo do
                    seu crescimento.
                  </p>

                  <ul className="mt-8 grid gap-4 sm:grid-cols-3">
                    {[
                      { Icon: Wallet, label: "Sem comprometer crédito" },
                      { Icon: Zap, label: "Liberação no mesmo dia" },
                      { Icon: FileText, label: "100% digital" },
                    ].map(({ Icon, label }, i) => (
                      <Reveal key={label} delay={i * 120}>
                        <li className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center transition hover:border-[hsl(var(--gold))/0.45]">
                          <Icon className="mx-auto h-5 w-5 text-[hsl(var(--gold-soft))]" />
                          <span className="mt-3 block text-xs font-semibold uppercase tracking-[0.12em] text-foreground/80">
                            {label}
                          </span>
                        </li>
                      </Reveal>
                    ))}
                  </ul>

                  <a
                    href="/contato"
                    className="group mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-soft))] px-6 py-3 text-sm font-bold uppercase tracking-[0.15em] text-[#0a1428] shadow-[0_15px_40px_-10px_hsl(var(--gold)/0.6)] transition hover:scale-[1.02] hover:shadow-[0_20px_50px_-10px_hsl(var(--gold)/0.8)]"
                  >
                    Antecipar agora
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AntecipacaoRecebiveis;