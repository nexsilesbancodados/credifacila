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
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import heroImg from "@/assets/antecipacao-hero.png";
import whoImg from "@/assets/antecipacao/who.jpg";
import howImg from "@/assets/antecipacao/how.jpg";
import growthImg from "@/assets/antecipacao/growth.jpg";

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
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="container-x">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <Reveal className="order-2 md:order-1">
              <span className="pill-gold">Para quem é</span>
              <h2 className="mt-6 font-display text-3xl font-bold leading-[1.1] tracking-tight text-foreground md:text-4xl lg:text-5xl">
                Para empresas que precisam de{" "}
                <span className="text-gold-gradient">caixa agora</span>
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-foreground/65">
                Atendemos empresas de todos os portes que vendem a prazo e
                querem antecipar seus recebíveis para girar o caixa com mais
                liberdade.
              </p>
              <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {sectors.map(({ icon: Icon, label }, i) => (
                  <Reveal key={label} delay={i * 100}>
                    <li className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md transition hover:border-[hsl(var(--gold))/0.45] hover:bg-white/[0.05]">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[hsl(var(--gold))/0.35] bg-background/60 text-[hsl(var(--gold-soft))] transition group-hover:scale-110">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-medium text-foreground/85 md:text-[15px]">
                        {label}
                      </span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={150} className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[hsl(var(--gold))/0.25] via-transparent to-transparent blur-2xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_40px_120px_-40px_hsl(var(--gold)/0.4)]">
                  <img
                    src={whoImg}
                    alt="Empresário analisando notas fiscais"
                    loading="lazy"
                    width={1280}
                    height={896}
                    className="aspect-[5/4] h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-transparent" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[hsl(var(--gold))/0.04] via-transparent to-transparent" />
        <div className="container-x relative">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <Reveal>
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-[hsl(var(--gold))/0.25] via-transparent to-transparent blur-2xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_40px_120px_-40px_hsl(var(--gold)/0.4)]">
                  <img
                    src={howImg}
                    alt="Operação de antecipação de recebíveis"
                    loading="lazy"
                    width={1280}
                    height={896}
                    className="aspect-[5/4] h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tl from-background/40 via-transparent to-transparent" />
                </div>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <span className="pill-gold">Como funciona</span>
              <h2 className="mt-6 font-display text-3xl font-bold leading-[1.1] tracking-tight text-foreground md:text-4xl lg:text-5xl">
                Quatro passos do recebível ao{" "}
                <span className="text-gold-gradient">dinheiro na conta</span>
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-foreground/65">
                Você nos passa o título, a gente assume a cobrança e adianta o
                valor para sua empresa imediatamente.
              </p>
              <ol className="mt-8 space-y-4">
                {steps.map((s, i) => (
                  <Reveal key={s.n} delay={i * 120}>
                    <li className="group relative flex gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md transition hover:border-[hsl(var(--gold))/0.45]">
                      <span className="font-display text-2xl font-bold text-gold-gradient md:text-3xl">
                        {s.n}
                      </span>
                      <div>
                        <h3 className="font-display text-base font-bold text-foreground md:text-lg">
                          {s.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-foreground/65">
                          {s.desc}
                        </p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Crescimento / CTA */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a1428] shadow-[0_40px_120px_-40px_hsl(var(--gold)/0.4)]">
              <div className="grid items-stretch md:grid-cols-2">
                <div className="relative min-h-[320px] overflow-hidden md:min-h-[480px]">
                  <img
                    src={growthImg}
                    alt="Gráfico de crescimento"
                    loading="lazy"
                    width={1280}
                    height={896}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent to-[#0a1428] md:via-transparent" />
                </div>
                <div className="relative flex flex-col justify-center p-8 md:p-12 lg:p-16">
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