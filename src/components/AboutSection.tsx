import { Award, Users, ShieldCheck, TrendingUp, Sparkles } from "lucide-react";
import { Counter } from "@/components/ui/Counter";
import heroGraphic from "@/assets/illustrations/hero-graphic.svg";

const stats: {
  icon: typeof Users;
  label: string;
  value?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  staticValue?: string;
}[] = [
  { icon: Users, value: 50, prefix: "+", suffix: " mil", label: "Clientes atendidos" },
  { icon: TrendingUp, staticValue: "R$ 1 bi+", label: "Em crédito liberado" },
  { icon: Award, value: 4.9, prefix: "", decimals: 1, suffix: "/5", label: "Avaliação no Reclame Aqui" },
  { icon: ShieldCheck, value: 12, prefix: "", suffix: " anos", label: "De mercado e confiança" },
];

const pillars = [
  {
    title: "Transparência total",
    desc: "Sem letras miúdas, sem surpresas. Você sabe exatamente o que vai pagar antes de assinar.",
  },
  {
    title: "Tecnologia + gente",
    desc: "Análise inteligente para liberar rápido, e pessoas reais para te ouvir quando precisar.",
  },
  {
    title: "Compromisso com você",
    desc: "Crédito responsável que cabe no seu bolso e respeita o seu momento de vida.",
  },
];

const AboutSection = () => {
  return (
    <section
      id="sobre"
      className="relative w-full px-5 py-16 md:px-8 md:py-20 lg:px-10"
      aria-label="Sobre a Credifácil"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div data-anim="fade-right">
            <span className="pill-eyebrow">
              <Sparkles className="h-3 w-3" />
              Sobre a Credifácil
            </span>
            <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-[hsl(220_16%_15%)] md:text-4xl lg:text-[46px]">
              Crédito que respeita{" "}
              <span className="text-gold-gradient">a sua história</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[hsl(220_15%_30%)]">
              Há mais de uma década, a Credifácil acredita que crédito bom é aquele que cabe na sua vida — com taxa justa, processo simples e atendimento humano de verdade. Nosso compromisso é abrir portas, não criar dívidas.
            </p>

            <ul className="mt-8 space-y-4">
              {pillars.map((p) => (
                <li
                  key={p.title}
                  className="rounded-2xl border border-brand-gold/20 bg-white/70 p-4 backdrop-blur-sm transition-all hover:border-brand-gold/50 hover:bg-white/90"
                >
                  <div className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-brand-gold-foreground shadow-[var(--shadow-gold-sm)]"
                      style={{ background: "var(--gradient-gold)" }}
                    >
                      <ShieldCheck className="h-3.5 w-3.5" strokeWidth={2.4} />
                    </span>
                    <div>
                      <h3 className="font-display text-sm font-bold text-[hsl(220_16%_15%)]">{p.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-[hsl(220_15%_35%)]">{p.desc}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right side: stats with illustration backdrop */}
          <div className="relative" data-anim="fade-left">
            {/* Decorative illustration as backdrop */}
            <img
              src={heroGraphic}
              alt=""
              aria-hidden
              loading="lazy"
              className="pointer-events-none absolute inset-0 -z-10 m-auto h-full w-full max-w-md opacity-40"
            />
            <div className="grid grid-cols-2 gap-4" data-anim-stagger>
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="group relative overflow-hidden rounded-3xl border border-brand-gold/25 bg-white/85 p-6 shadow-[var(--shadow-soft)] backdrop-blur-md transition-all hover:-translate-y-1 hover:border-brand-gold/60 hover:shadow-[var(--shadow-gold)]"
                >
                  <div
                    className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-20"
                    style={{
                      background:
                        "radial-gradient(circle, hsl(35 90% 60% / 0.6), transparent 70%)",
                    }}
                    aria-hidden
                  />
                  <div
                    className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-brand-gold-foreground shadow-[var(--shadow-gold-sm)]"
                    style={{ background: "var(--gradient-gold)" }}
                  >
                    <s.icon className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <div
                    className="relative bg-clip-text font-display text-3xl font-bold text-transparent md:text-[34px]"
                    style={{ backgroundImage: "var(--gradient-gold)" }}
                  >
                    {s.staticValue ? (
                      s.staticValue
                    ) : (
                      <Counter
                        value={s.value!}
                        prefix={s.prefix ?? ""}
                        suffix={s.suffix ?? ""}
                        decimals={s.decimals ?? 0}
                      />
                    )}
                  </div>
                  <div className="relative mt-1 text-xs font-medium leading-tight text-[hsl(220_15%_35%)]">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
