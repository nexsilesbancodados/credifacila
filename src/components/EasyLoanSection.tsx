import { UserCheck, FileSearch, Wallet, Sparkles } from "lucide-react";
import peopleImg from "@/assets/easy-loan-people.jpg";

const steps = [
  {
    icon: UserCheck,
    title: "Cadastro rápido",
    desc: "Preencha seus dados em poucos minutos, 100% online e sem burocracia.",
  },
  {
    icon: FileSearch,
    title: "Análise inteligente",
    desc: "Avaliamos sua proposta com tecnologia e atendimento humano para encontrar a melhor condição.",
  },
  {
    icon: Sparkles,
    title: "Aprovação ágil",
    desc: "Resposta em minutos com taxas competitivas e parcelas que cabem no seu orçamento.",
  },
  {
    icon: Wallet,
    title: "Dinheiro na conta",
    desc: "Receba o valor diretamente na sua conta com total segurança e transparência.",
  },
];

const EasyLoanSection = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background flair */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-[hsl(var(--gold))/0.07] blur-3xl" />
      </div>

      <div className="container-x">
        {/* Header — split layout with portrait */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            {/* Thin gold accent line */}
            <div className="absolute -top-6 left-0 h-px w-40 bg-gradient-to-r from-[hsl(var(--gold))] via-[hsl(var(--gold-soft))] to-transparent" />
            <div className="absolute -top-[7px] left-40 h-[5px] w-[5px] rounded-full bg-[hsl(var(--gold-soft))] shadow-[0_0_12px_hsl(var(--gold))]" />

            <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Conseguir crédito com a{" "}
              <span className="text-gold-gradient">Credifácil</span> nunca foi tão simples
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/65 md:text-lg">
              Em poucos cliques você simula, contrata e recebe seu empréstimo com
              segurança, transparência e atendimento dedicado em cada etapa.
            </p>
          </div>

          {/* Portrait with curved gold ring */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="relative aspect-square overflow-hidden rounded-full border border-[hsl(var(--gold))/0.35] shadow-[0_0_60px_-15px_hsl(var(--gold)/0.4)]">
              <img
                src={peopleImg}
                alt="Atendimento Credifácil"
                loading="lazy"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-background/60 via-transparent to-transparent" />
            </div>
            {/* Outer faint ring */}
            <div className="pointer-events-none absolute -inset-4 rounded-full border border-[hsl(var(--gold))/0.12]" />
          </div>
        </div>

        {/* Steps grid */}
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--gold))/0.3] hover:bg-white/[0.06]"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[hsl(var(--gold))/0.06] blur-2xl transition-opacity group-hover:opacity-100" />

              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-[hsl(var(--gold))/0.25] bg-gradient-to-br from-[hsl(var(--gold))/0.15] to-transparent">
                <step.icon className="h-6 w-6 text-[hsl(var(--gold-soft))]" />
              </div>

              <div className="relative mt-6 flex items-baseline gap-3">
                <span className="font-display text-xs font-bold tracking-[0.2em] text-foreground/40">
                  0{i + 1}
                </span>
                <h3 className="font-display text-xl font-bold text-foreground">
                  {step.title}
                </h3>
              </div>

              <p className="relative mt-3 text-sm leading-relaxed text-foreground/60">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Trust strip */}
        <div className="mt-16 grid grid-cols-1 gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-8 sm:grid-cols-3 md:p-10">
          {[
            { v: "+15 anos", l: "de tradição no mercado financeiro" },
            { v: "+250 mil", l: "clientes atendidos com excelência" },
            { v: "98%", l: "de aprovação entre simulações qualificadas" },
          ].map((s) => (
            <div key={s.l} className="text-center sm:text-left">
              <div className="font-display text-3xl font-extrabold text-gold-gradient md:text-4xl">
                {s.v}
              </div>
              <div className="mt-2 text-sm text-foreground/60">{s.l}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/contato"
            className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-br from-[hsl(var(--gold-soft))] to-[hsl(var(--gold))] px-8 py-4 text-sm font-bold uppercase tracking-wider text-background shadow-2xl transition hover:scale-[1.02] sm:w-auto"
          >
            Simular meu empréstimo
          </a>
          <a
            href="/duvidas"
            className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-wider text-foreground transition hover:bg-white/10 sm:w-auto"
          >
            Tirar dúvidas
          </a>
        </div>
      </div>
    </section>
  );
};

export default EasyLoanSection;