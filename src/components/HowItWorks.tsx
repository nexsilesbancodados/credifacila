import { Calculator, FileText, ShieldCheck, Banknote, ChevronRight } from "lucide-react";
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
        <div className="text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-gold backdrop-blur-sm">
            Processo simples
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-[44px]">
            Como funciona é <span className="text-brand-gold">simples!</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-white/65">
            Em poucos passos, você solicita e recebe o crédito que precisa.
          </p>
        </div>

        <div className="mt-10 rounded-[28px] border border-white/8 bg-[hsl(var(--surface-elevated))]/70 p-6 shadow-[var(--shadow-card)] backdrop-blur-md md:p-8">
          <ol className="flex flex-col items-stretch gap-8 md:grid md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:items-center md:gap-3">
            {steps.map((step, i) => (
              <Fragment key={step.title}>
                <li className="flex items-start gap-4 text-left">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-brand-gold/25 bg-brand-gold/10 text-brand-gold">
                    <step.icon className="h-10 w-10" strokeWidth={1.6} />
                  </div>
                  <div className="min-w-0 flex-1 pt-1">
                    <div className="flex items-center gap-2">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gold text-[11px] font-bold text-brand-gold-foreground">
                        {i + 1}
                      </span>
                      <h3 className="text-[15px] font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="mt-2 text-[13px] leading-relaxed text-white/60">
                      {step.desc}
                    </p>
                  </div>
                </li>
                {i < steps.length - 1 && (
                  <li
                    aria-hidden="true"
                    className="hidden items-center justify-center md:flex"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-gold/30 bg-brand-gold/10 text-brand-gold">
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