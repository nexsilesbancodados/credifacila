import {
  FileSignature,
  Search,
  CheckCircle2,
  Banknote,
  Smile,
  ShieldCheck,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { whatsappLink } from "@/config/site";
import portrait from "@/assets/howitworks-portrait.webp";

const steps = [
  {
    icon: FileSignature,
    title: "Cadastro",
    desc: "Preencha seus dados em poucos minutos, 100% online.",
  },
  {
    icon: Search,
    title: "Análise",
    desc: "Avaliamos seu perfil com tecnologia e cuidado humano.",
  },
  {
    icon: CheckCircle2,
    title: "Aprovação",
    desc: "Resposta ágil e transparente sobre as condições.",
  },
  {
    icon: Banknote,
    title: "Liberação",
    desc: "Dinheiro na sua conta em até 24 horas úteis.",
  },
  {
    icon: Smile,
    title: "Realização",
    desc: "Você conquista seus objetivos com tranquilidade.",
  },
];

const HowItWorks = () => (
  <section
    id="como-funciona"
    aria-label="Como funciona"
    className="relative w-full px-5 py-16 md:px-8 md:py-24 lg:px-10"
  >
    <div className="mx-auto max-w-7xl">
      <div
        className="relative overflow-hidden rounded-[36px] border border-brand-gold/15 bg-[hsl(215_50%_14%)] shadow-[0_30px_80px_-30px_hsl(30_30%_4%/0.6)]"
        data-anim="fade-up"
      >
        {/* subtle noise + ambient glow */}
        <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden />
        <div
          className="pointer-events-none absolute -left-32 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(circle, hsl(38 90% 55% / 0.18), transparent 65%)",
          }}
          aria-hidden
        />

        {/* HERO ROW */}
        <div className="relative grid grid-cols-1 gap-0 lg:grid-cols-[1.05fr_1fr]">
          {/* Left text */}
          <div className="relative z-10 px-7 pb-12 pt-12 md:px-12 md:pt-16 lg:pb-16 lg:pl-14 lg:pr-8 lg:pt-20">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-brand-gold/[0.08] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-gold backdrop-blur-md">
              <ShieldCheck className="h-3 w-3" />
              Processo simples e seguro
            </span>

            <h2
              className="mt-6 font-display text-[36px] font-extrabold leading-[1.05] tracking-tight text-white md:text-[52px] lg:text-[58px]"
              style={{ textShadow: "0 2px 24px hsl(215 52% 12% / 0.45)" }}
            >
              Do primeiro clique
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-gold)" }}
              >
                até a realização.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/82 md:text-base">
              Um caminho{" "}
              <span className="font-semibold text-brand-gold">
                claro, rápido e sem burocracia
              </span>{" "}
              para transformar planos em conquistas reais.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={whatsappLink("Olá! Quero começar minha solicitação de crédito.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-2xl px-6 py-3.5 text-sm font-bold text-brand-gold-foreground shadow-[var(--shadow-gold)] transition-all hover:scale-[1.03] hover:brightness-110"
                style={{ background: "var(--gradient-gold)" }}
              >
                <MessageCircle className="h-4 w-4" />
                Começar agora
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#solucoes"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/[0.05] px-5 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-brand-gold/60 hover:bg-white/10 hover:text-brand-gold"
              >
                Ver linhas de crédito
              </a>
            </div>
          </div>

          {/* Right portrait */}
          <div className="relative h-[320px] overflow-hidden md:h-[440px] lg:h-auto lg:min-h-[520px]">
            <img
              src={portrait}
              alt="Cliente Credifácil em ambiente sofisticado, refletindo confiança e tranquilidade"
              loading="lazy"
              decoding="async"
              width={1536}
              height={1280}
              className="absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: "60% center" }}
            />
            {/* Cinematic blend into the dark left side */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, hsl(220 16% 5%) 0%, hsl(215 50% 14% / 0.7) 18%, hsl(215 50% 14% / 0.15) 45%, transparent 75%)",
              }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
              style={{
                background:
                  "linear-gradient(180deg, transparent, hsl(220 16% 5%) 95%)",
              }}
              aria-hidden
            />
          </div>
        </div>

        {/* Decorative gold curve divider */}
        <div className="relative px-6 md:px-12">
          <svg
            className="h-3 w-full opacity-60 md:h-4"
            viewBox="0 0 1200 16"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M0,8 Q300,0 600,8 T1200,8"
              stroke="hsl(38 90% 55%)"
              strokeWidth="1"
              fill="none"
              opacity="0.7"
            />
          </svg>
        </div>

        {/* STEPS ROW */}
        <div className="relative px-6 pb-14 pt-6 md:px-12 md:pb-20 lg:px-14">
          <div className="text-center" data-anim="fade-up">
            <h3 className="font-display text-[26px] font-bold leading-tight tracking-tight text-white md:text-[34px]">
              Cinco etapas para você{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-gold)" }}
              >
                conquistar mais.
              </span>
            </h3>
            <div
              className="mx-auto mt-4 h-[2px] w-16 rounded-full"
              style={{ background: "var(--gradient-gold)" }}
              aria-hidden
            />
          </div>

          <ol
            className="relative mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-6"
            data-anim-stagger
          >
            {/* connector line */}
            <div
              className="pointer-events-none absolute left-[10%] right-[10%] top-[34px] hidden h-px lg:block"
              style={{
                background:
                  "linear-gradient(90deg, transparent, hsl(38 90% 55% / 0.4) 15%, hsl(38 90% 55% / 0.4) 85%, transparent)",
              }}
              aria-hidden
            />

            {steps.map((step, i) => (
              <li
                key={step.title}
                className="group relative flex flex-col items-center text-center"
              >
                <div className="relative">
                  <div
                    className="absolute inset-0 -m-2 rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: "hsl(38 90% 55% / 0.35)" }}
                    aria-hidden
                  />
                  <div
                    className="relative flex h-[68px] w-[68px] items-center justify-center rounded-2xl border border-brand-gold/40 bg-brand-gold/[0.08] text-brand-gold transition-all duration-300 group-hover:-translate-y-1 group-hover:border-brand-gold group-hover:bg-brand-gold/[0.14]"
                  >
                    <step.icon className="h-7 w-7" strokeWidth={1.8} />
                  </div>
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full border border-brand-gold/40 bg-[hsl(215_50%_14%)] font-display text-[10px] font-extrabold text-brand-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h4 className="mt-5 font-display text-[15px] font-bold tracking-tight text-white md:text-base">
                  {step.title}
                </h4>
                <p className="mx-auto mt-2 max-w-[180px] text-[12px] leading-relaxed text-white/78 md:text-[13px]">
                  {step.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
