import { useState } from "react";
import { Plus, Minus, HelpCircle, MessageCircle } from "lucide-react";

const faqs = [
  {
    q: "Quanto tempo leva para o dinheiro cair na conta?",
    a: "Após a aprovação, o crédito é liberado em até algumas horas no mesmo dia útil — em muitos casos, em poucos minutos via PIX.",
  },
  {
    q: "Quais são as taxas de juros?",
    a: "Nossas taxas começam em 1,19% ao mês e variam conforme o seu perfil, valor e prazo. Tudo é apresentado de forma transparente antes de você assinar.",
  },
  {
    q: "Preciso ter conta em algum banco específico?",
    a: "Não. Você pode receber o crédito em qualquer conta bancária ou conta digital de sua titularidade.",
  },
  {
    q: "É seguro enviar meus dados?",
    a: "Sim. Utilizamos criptografia de padrão bancário SSL 256-bit e seguimos rigorosamente a LGPD para proteger todas as suas informações.",
  },
  {
    q: "Posso quitar o empréstimo antecipadamente?",
    a: "Pode sim, com desconto proporcional dos juros futuros. É um direito seu garantido por lei e nós facilitamos o processo.",
  },
  {
    q: "Quem pode solicitar um empréstimo?",
    a: "Qualquer pessoa com mais de 18 anos, CPF regular e renda comprovada. A aprovação depende da análise do seu perfil de crédito.",
  },
];

const FaqSection = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="duvidas"
      className="relative w-full px-5 py-16 md:px-8 md:py-20 lg:px-10"
      aria-label="Perguntas frequentes"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center" data-anim="fade-up">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-gold/50 bg-white/80 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-gold shadow-sm backdrop-blur-sm">
            <HelpCircle className="h-3 w-3" />
            Tire suas dúvidas
          </span>
          <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-[hsl(30_20%_15%)] md:text-4xl lg:text-[46px]">
            Perguntas{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-gold)" }}
            >
              frequentes
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[hsl(30_15%_30%)] md:text-base">
            Reunimos as principais dúvidas para você decidir com clareza e tranquilidade.
          </p>
        </div>

        <div className="flex flex-col gap-3" data-anim-stagger>
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={`overflow-hidden rounded-2xl border bg-white/80 backdrop-blur-sm transition-all ${
                  isOpen
                    ? "border-brand-gold/60 shadow-[var(--shadow-soft)]"
                    : "border-brand-gold/15 hover:border-brand-gold/40"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
                >
                  <span className="text-sm font-bold text-[hsl(30_20%_15%)] md:text-base">
                    {item.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-brand-gold-foreground shadow-[0_4px_12px_-4px_hsl(var(--brand-gold)/0.5)] transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    style={{ background: "var(--gradient-gold)" }}
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 pr-14 text-sm leading-relaxed text-[hsl(30_15%_35%)] md:px-6 md:pb-6 md:text-[15px]">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="mt-10 flex flex-col items-center gap-4 rounded-3xl border border-brand-gold/30 bg-white/70 p-6 text-center backdrop-blur-sm md:flex-row md:justify-between md:text-left"
        >
          <div>
            <h3 className="text-base font-bold text-[hsl(30_20%_15%)] md:text-lg">
              Ainda ficou com alguma dúvida?
            </h3>
            <p className="mt-1 text-sm text-[hsl(30_15%_35%)]">
              Fale com um especialista agora mesmo, sem compromisso.
            </p>
          </div>
          <a
            href="#contato"
            className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-xl px-5 py-3 text-sm font-semibold text-brand-gold-foreground shadow-[var(--shadow-gold)] transition-all hover:scale-[1.03] hover:brightness-110"
            style={{ background: "var(--gradient-gold)" }}
          >
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
            <MessageCircle className="h-4 w-4" />
            Falar com a Credifácil
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;