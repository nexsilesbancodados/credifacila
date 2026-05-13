import { ArrowRight, ShieldCheck, Percent, Clock, UserCheck, Briefcase, HeartHandshake, Headphones, MessagesSquare, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import heroImg from "@/assets/consignado-hero.png";
import whoCanImg from "@/assets/consignado/who-can.jpg";
import howItWorksImg from "@/assets/consignado/how-it-works.jpg";
import supportImg from "@/assets/consignado/support.jpg";

const benefits = [
  {
    icon: Percent,
    title: "Taxas reduzidas",
    desc: "Entre as menores do mercado, com desconto direto em folha.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança total",
    desc: "Aprovação para aposentados, pensionistas e servidores.",
  },
  {
    icon: Clock,
    title: "Liberação rápida",
    desc: "Crédito na conta em até 24h após a aprovação.",
  },
];

const eligibles = [
  { icon: UserCheck, label: "Aposentados e pensionistas do INSS" },
  { icon: Briefcase, label: "Servidores públicos federais, estaduais e municipais" },
  { icon: ShieldCheck, label: "Militares das Forças Armadas" },
  { icon: HeartHandshake, label: "Trabalhadores CLT de empresas conveniadas" },
];

const steps = [
  { n: "01", title: "Simulação online", desc: "Em menos de 1 minuto você descobre quanto pode contratar." },
  { n: "02", title: "Envio de documentos", desc: "Tudo digital, sem precisar sair de casa." },
  { n: "03", title: "Análise rápida", desc: "Aprovação automática para a maioria dos perfis." },
  { n: "04", title: "Dinheiro liberado", desc: "Crédito direto na sua conta em até 24h." },
];

const Consignado = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative w-full overflow-hidden">
        <div className="relative aspect-[16/9] sm:aspect-[21/9] lg:aspect-[21/8] w-full">
          <img
            src={heroImg}
            alt="Crédito Consignado — mais tranquilidade para o seu dia a dia"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 md:h-32 bg-gradient-to-t from-background to-transparent" />
        </div>
      </section>

      {/* Intro / benefits */}
      <section className="relative py-20 md:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <span className="pill-gold">Crédito Consignado</span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Crédito com{" "}
              <span className="text-gold-gradient">desconto em folha</span>,
              feito para o seu ritmo
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-foreground/65 md:text-lg">
              A modalidade mais segura e econômica do mercado. Ideal para
              aposentados, pensionistas do INSS, servidores públicos e
              militares.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3 md:gap-6">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-[hsl(var(--gold))/0.45] hover:shadow-[0_30px_80px_-30px_hsl(var(--gold)/0.4)] md:p-7"
              >
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
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <a
              href="/contato"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-soft))] px-7 py-3.5 text-sm font-bold uppercase tracking-[0.15em] text-[#0a1428] shadow-[0_15px_40px_-10px_hsl(var(--gold)/0.6)] transition hover:scale-[1.02] hover:shadow-[0_20px_50px_-10px_hsl(var(--gold)/0.8)]"
            >
              Simular consignado
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Quem pode contratar */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="container-x">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <Reveal className="order-2 md:order-1">
              <span className="pill-gold">Quem pode contratar</span>
              <h2 className="mt-6 font-display text-3xl font-bold leading-[1.1] tracking-tight text-foreground md:text-4xl lg:text-5xl">
                Crédito feito para{" "}
                <span className="text-gold-gradient">quem merece confiança</span>
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-foreground/65">
                O consignado é exclusivo para perfis com renda estável. Veja se
                você se encaixa em algum desses grupos:
              </p>
              <ul className="mt-8 space-y-3">
                {eligibles.map(({ icon: Icon, label }, i) => (
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
                <Parallax amount={50} className="relative rounded-[2rem] border border-white/10 shadow-[0_40px_120px_-40px_hsl(var(--gold)/0.4)]">
                  <div className="relative aspect-[5/4]">
                    <img
                      src={whoCanImg}
                      alt="Casal sorrindo, ideal para crédito consignado"
                      loading="lazy"
                      width={1280}
                      height={896}
                      className="h-[120%] w-full -translate-y-[10%] object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-transparent" />
                  </div>
                </Parallax>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Como funciona — etapas */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[hsl(var(--gold))/0.04] via-transparent to-transparent" />
        <div className="container-x relative">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <Reveal>
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-[hsl(var(--gold))/0.25] via-transparent to-transparent blur-2xl" />
                <Parallax amount={50} className="relative rounded-[2rem] border border-white/10 shadow-[0_40px_120px_-40px_hsl(var(--gold)/0.4)]">
                  <div className="relative aspect-[5/4]">
                    <img
                      src={howItWorksImg}
                      alt="Assinatura de contrato com caneta dourada"
                      loading="lazy"
                      width={1280}
                      height={896}
                      className="h-[120%] w-full -translate-y-[10%] object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-tl from-background/40 via-transparent to-transparent" />
                  </div>
                </Parallax>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <span className="pill-gold">Como funciona</span>
              <h2 className="mt-6 font-display text-3xl font-bold leading-[1.1] tracking-tight text-foreground md:text-4xl lg:text-5xl">
                Quatro passos até o seu{" "}
                <span className="text-gold-gradient">crédito aprovado</span>
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-foreground/65">
                Um processo simples, transparente e 100% online — sem filas e
                sem burocracia.
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

      {/* Atendimento humano */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a1428] shadow-[0_40px_120px_-40px_hsl(var(--gold)/0.4)]">
              <div className="grid items-stretch md:grid-cols-2">
                <div className="relative min-h-[320px] overflow-hidden md:min-h-[480px]">
                  <img
                    src={supportImg}
                    alt="Consultora especializada em atendimento ao cliente"
                    loading="lazy"
                    width={1280}
                    height={896}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent to-[#0a1428] md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-[#0a1428]" />
                </div>
                <div className="relative flex flex-col justify-center p-8 md:p-12 lg:p-16">
                  <span className="pill-gold w-fit">Atendimento humano</span>
                  <h2 className="mt-6 font-display text-3xl font-bold leading-[1.1] tracking-tight text-foreground md:text-4xl">
                    Especialistas que escutam{" "}
                    <span className="text-gold-gradient">antes de oferecer</span>
                  </h2>
                  <p className="mt-5 max-w-md text-sm leading-relaxed text-foreground/65 md:text-base">
                    Nada de robôs ou respostas prontas. Um consultor real entende
                    seu momento e desenha a melhor solução para você.
                  </p>

                  <ul className="mt-8 grid gap-4 sm:grid-cols-3">
                    {[
                      { Icon: Headphones, label: "Suporte dedicado" },
                      { Icon: MessagesSquare, label: "Resposta rápida" },
                      { Icon: Sparkles, label: "Sem burocracia" },
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
                    className="group mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-[hsl(var(--gold))/0.45] bg-white/5 px-6 py-3 text-sm font-bold uppercase tracking-[0.15em] text-[hsl(var(--gold-soft))] backdrop-blur-md transition hover:bg-[hsl(var(--gold))/0.1] hover:text-[hsl(var(--gold))]"
                  >
                    Falar com um especialista
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

export default Consignado;