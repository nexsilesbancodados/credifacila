import { Calculator, FileText, ShieldCheck, Banknote, ChevronRight } from "lucide-react";

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
      className="relative w-full bg-background px-5 py-16 md:px-8 md:py-20 lg:px-10"
      aria-label="Como funciona"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-[40px]">
            Como funciona é <span className="text-brand-gold">simples!</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-foreground/70">
            Em poucos passos, você solicita e recebe o crédito que precisa.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-foreground/8 bg-gradient-to-br from-[hsl(40_60%_96%)] to-background p-6 shadow-[var(--shadow-card)] md:p-8">
          <ol className="flex flex-col items-stretch gap-8 md:grid md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:items-center md:gap-4">
            {steps.map((step, i) => (
              <>
                <li key={step.title} className="flex flex-col items-center text-center">
                  <div className="relative">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-gold/10 text-brand-gold ring-1 ring-brand-gold/20">
                      <step.icon className="h-9 w-9" strokeWidth={1.8} />
                    </div>
                    <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-brand-gold text-xs font-bold text-brand-gold-foreground shadow-md">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-bold text-foreground">{step.title}</h3>
                  <p className="mt-1.5 max-w-[220px] text-sm leading-relaxed text-foreground/65">
                    {step.desc}
                  </p>
                </li>
                {i < steps.length - 1 && (
                  <li
                    aria-hidden="true"
                    className="hidden items-center justify-center md:flex"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(30_15%_15%)] text-[hsl(40_30%_97%)]">
                      <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
                    </span>
                  </li>
                )}
              </>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;