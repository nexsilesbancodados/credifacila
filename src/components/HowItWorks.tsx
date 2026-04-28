import { Calculator, FileText, ShieldCheck, Banknote, ChevronRight, Sparkles } from "lucide-react";
import { Fragment } from "react";

const steps = [
  {
    icon: Calculator,
    title: "Simule seu crédito",
    desc: "Faça uma simulação rápida e descubra as melhores opções para você.",
  },
  {
    icon: FileText,
    title: "Envie seus dados",
    desc: "Preencha seus dados com segurança e envie sua proposta online.",
  },
  {
    icon: ShieldCheck,
    title: "Receba sua análise",
    desc: "Analisamos sua proposta de forma rápida e transparente.",
  },
  {
    icon: Banknote,
    title: "Crédito na sua conta",
    desc: "Aprovado? O dinheiro cai na sua conta para você realizar seus planos.",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="como-funciona"
      className="relative w-full px-5 py-16 md:px-8 md:py-20 lg:px-10"
      aria-label="Como funciona"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center" data-anim="fade-up">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-gold/50 bg-white/80 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-gold shadow-sm backdrop-blur-sm">
            <Sparkles className="h-3 w-3" />
            Processo simples
          </span>
          <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-[hsl(30_20%_15%)] md:text-4xl lg:text-[46px]">
            Em 4 passos,{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-gold)" }}
            >
              o crédito é seu
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[hsl(30_15%_30%)] md:text-base">
            Sem filas, sem papelada e sem complicação. Tudo 100% online em poucos minutos.
          </p>
        </div>

        <div className="mt-10 rounded-[28px] border border-brand-gold/20 bg-white/80 p-6 shadow-[var(--shadow-soft)] backdrop-blur-md md:p-8" data-anim="scale-in">
          <ol className="flex flex-col items-stretch gap-8 md:grid md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:items-center md:gap-3">
            {steps.map((step, i) => (
              <Fragment key={step.title}>
                <li className="flex items-start gap-4 text-left">
                  <div
                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-brand-gold-foreground shadow-[0_8px_20px_-6px_hsl(var(--brand-gold)/0.5)]"
                    style={{ background: "var(--gradient-gold)" }}
                  >
                    <step.icon className="h-7 w-7" strokeWidth={2} />
                  </div>
                  <div className="min-w-0 flex-1 pt-1">
                    <div className="flex items-center gap-2">
                      <span
                        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-brand-gold-foreground"
                        style={{ background: "var(--gradient-gold)" }}
                      >
                        {i + 1}
                      </span>
                      <h3 className="text-[15px] font-bold text-[hsl(30_20%_15%)]">{step.title}</h3>
                    </div>
                    <p className="mt-2 text-[13px] leading-relaxed text-[hsl(30_15%_35%)]">
                      {step.desc}
                    </p>
                  </div>
                </li>
                {i < steps.length - 1 && (
                  <li
                    aria-hidden="true"
                    className="hidden items-center justify-center md:flex"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-gold/40 bg-brand-gold/10 text-brand-gold">
                      <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
                    </span>
                  </li>
                )}
              </Fragment>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;