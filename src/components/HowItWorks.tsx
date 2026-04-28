import { Calculator, FileText, ShieldCheck, Banknote, Sparkles, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/config/site";

const steps = [
  {
    icon: Calculator,
    title: "Solicite",
    desc: "Fale com nosso time pelo WhatsApp e conte o que precisa — sem afetar seu score.",
    time: "30 segundos",
  },
  {
    icon: FileText,
    title: "Envie seus dados",
    desc: "Preenchimento 100% online com criptografia bancária. Apenas o essencial.",
    time: "2 minutos",
  },
  {
    icon: ShieldCheck,
    title: "Análise",
    desc: "Nossa equipe avalia sua proposta com transparência total das condições.",
    time: "5 minutos",
  },
  {
    icon: Banknote,
    title: "Receba",
    desc: "Aprovado? O dinheiro cai na sua conta via PIX no mesmo dia.",
    time: "Mesmo dia",
  },
];

const HowItWorks = () => (
  <section
    id="como-funciona"
    className="relative w-full px-5 py-16 md:px-8 md:py-24 lg:px-10"
    aria-label="Como funciona"
  >
    <div className="mx-auto max-w-7xl">
      <div className="text-center" data-anim="fade-up">
        <span className="pill-eyebrow">
          <Sparkles className="h-3 w-3" />
          Processo simples
        </span>
        <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-[hsl(30_20%_15%)] md:text-4xl lg:text-[46px]">
          Em 4 passos,{" "}
          <span className="text-gold-gradient">o crédito é seu</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[hsl(30_15%_30%)] md:text-base">
          Sem filas, sem papelada e sem complicação. Tudo 100% online em poucos minutos.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative mt-14" data-anim-stagger>
        {/* Horizontal connector line (desktop) */}
        <div
          className="absolute left-[8%] right-[8%] top-[58px] hidden h-0.5 lg:block"
          style={{
            background:
              "linear-gradient(90deg, transparent, hsl(var(--brand-gold) / 0.6), hsl(var(--brand-gold) / 0.6), hsl(var(--brand-gold) / 0.6), transparent)",
          }}
          aria-hidden
        />
        <ol className="relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, i) => (
            <li key={step.title} className="relative">
              {/* Number badge */}
              <div className="relative mx-auto flex h-28 w-28 items-center justify-center">
                <div
                  className="absolute inset-0 rounded-full opacity-15"
                  style={{ background: "var(--gradient-gold)" }}
                />
                <div
                  className="absolute inset-2 rounded-full opacity-20"
                  style={{ background: "var(--gradient-gold)" }}
                />
                <div
                  className="relative flex h-20 w-20 items-center justify-center rounded-full text-brand-gold-foreground shadow-[var(--shadow-gold)]"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  <step.icon className="h-9 w-9" strokeWidth={2} />
                </div>
                <span className="absolute -right-1 -top-1 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[hsl(30_22%_8%)] font-display text-[13px] font-extrabold text-brand-gold shadow-md">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="mt-5 text-center">
                <h3 className="font-display text-lg font-bold text-[hsl(30_20%_15%)]">
                  {step.title}
                </h3>
                <div className="mt-1 inline-flex items-center gap-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/5 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-gold">
                  ⌚ {step.time}
                </div>
                <p className="mx-auto mt-3 max-w-[260px] text-[13px] leading-relaxed text-[hsl(30_15%_35%)]">
                  {step.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-12 text-center">
        <a
          href={whatsappLink("Olá! Quero começar minha solicitação de crédito.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold"
        >
          <MessageCircle className="h-4 w-4" />
          Falar com a Credifácil
        </a>
      </div>
    </div>
  </section>
);

export default HowItWorks;
