import { Link } from "react-router-dom";
import {
  Award,
  CalendarDays,
  Lock,
  Headphones,
  User,
  FileText,
  Search,
  CheckCircle2,
  DollarSign,
  ArrowRight,
} from "lucide-react";
import showcaseImg from "@/assets/solucoes-financeira.jpg";

const benefits = [
  {
    icon: Award,
    title: "Taxas competitivas",
    desc: "Condições justas e transparentes para caber no seu bolso.",
  },
  {
    icon: CalendarDays,
    title: "Prazos flexíveis",
    desc: "Escolha o prazo que melhor se adapta à sua realidade.",
  },
  {
    icon: Lock,
    title: "Segurança total",
    desc: "Seus dados protegidos com tecnologia de ponta e criptografia avançada.",
  },
  {
    icon: Headphones,
    title: "Acompanhamento contínuo",
    desc: "Estamos com você em todas as etapas da sua jornada Credifácil.",
  },
];

const steps = [
  { icon: User, n: "01", title: "Simule seu crédito", desc: "Faça uma simulação rápida e sem compromisso." },
  { icon: FileText, n: "02", title: "Envie seus dados", desc: "Preencha seus dados e envie os documentos necessários." },
  { icon: Search, n: "03", title: "Análise de crédito", desc: "Nossos especialistas analisam sua proposta com agilidade." },
  { icon: CheckCircle2, n: "04", title: "Proposta aprovada", desc: "Você recebe a melhor proposta com as melhores condições." },
  { icon: DollarSign, n: "05", title: "Dinheiro na conta", desc: "Após a aprovação, o valor é liberado diretamente na sua conta." },
];

const SolutionsSection = () => (
  <section
    aria-label="Soluções e como funciona"
    className="relative w-full overflow-hidden bg-[hsl(0_0%_4%)] py-20 md:py-24"
  >
    <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 md:px-8">
      {/* Card 1: Benefícios + foto */}
      <div className="relative overflow-hidden rounded-[28px] border border-white/[0.06] bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-7 md:p-10">
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at center, hsl(42 78% 58% / 0.25), transparent 65%)",
          }}
          aria-hidden
        />
        <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.15fr_1fr]">
          {/* Left */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-gold">
              Mais benefícios para você
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-white md:text-[44px]">
              Soluções pensadas para facilitar{" "}
              <span className="text-gold-gradient">sua vida financeira.</span>
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/70">
              A Credifácil une tecnologia, atendimento humanizado e condições especiais
              para oferecer a melhor experiência do início ao fim.
            </p>

            <div className="mt-9 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
              {benefits.map((b) => {
                const Icon = b.icon;
                return (
                  <div
                    key={b.title}
                    className="group rounded-2xl border border-white/[0.06] bg-[hsl(0_0%_6%)] p-4 transition-all hover:-translate-y-0.5 hover:border-brand-gold/40"
                  >
                    <span
                      className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl border border-brand-gold/30 bg-brand-gold/10 text-brand-gold transition-colors group-hover:bg-brand-gold/20"
                      aria-hidden
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <h3 className="text-[13px] font-bold text-white">{b.title}</h3>
                    <p className="mt-1.5 text-[12px] leading-relaxed text-white/55">
                      {b.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <div
              className="pointer-events-none absolute -inset-3 rounded-[24px] opacity-60"
              style={{
                background:
                  "radial-gradient(ellipse at center, hsl(42 78% 58% / 0.2), transparent 70%)",
              }}
              aria-hidden
            />
            <img
              src={showcaseImg}
              alt="Especialista Credifácil sorrindo enquanto atende cliente em laptop"
              loading="lazy"
              decoding="async"
              width={1024}
              height={1024}
              className="relative aspect-[4/3] w-full rounded-[20px] border border-white/5 object-cover shadow-[0_30px_70px_-25px_hsl(0_0%_0%/0.7)]"
            />
          </div>
        </div>
      </div>

      {/* Card 2: Como funciona (steps) */}
      <div className="relative overflow-hidden rounded-[28px] border border-white/[0.06] bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-7 md:p-10">
        <div
          className="pointer-events-none absolute -left-32 -bottom-32 h-[420px] w-[420px] opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at center, hsl(42 78% 58% / 0.2), transparent 65%)",
          }}
          aria-hidden
        />
        <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_2.15fr] lg:items-center">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-gold">
              Simples do início ao fim
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-white md:text-[40px]">
              Como funciona na prática
            </h2>
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-white/70">
              Um processo 100% online,{" "}
              <span className="font-semibold text-brand-gold">seguro e descomplicado</span>{" "}
              feito pela Credifácil para você.
            </p>
            <Link
              to="/perguntas-frequentes"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-brand-gold/5 px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.12em] text-brand-gold transition-all hover:border-brand-gold hover:bg-brand-gold/15"
            >
              Tirar minhas dúvidas
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative">
            {/* Connector line */}
            <div
              className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px md:block"
              style={{
                background:
                  "linear-gradient(90deg, transparent, hsl(42 78% 55% / 0.4), hsl(42 78% 55% / 0.4), hsl(42 78% 55% / 0.4), transparent)",
              }}
              aria-hidden
            />
            <ol className="relative grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-5">
              {steps.map((s) => {
                const Icon = s.icon;
                return (
                  <li key={s.n} className="flex flex-col items-center text-center">
                    <span
                      className="flex h-14 w-14 items-center justify-center rounded-full border border-brand-gold/40 bg-[hsl(0_0%_6%)] text-brand-gold shadow-[0_0_24px_-6px_hsl(42_78%_55%/0.5)]"
                      aria-hidden
                    >
                      <Icon className="h-6 w-6" strokeWidth={1.8} />
                    </span>
                    <div className="mt-3 font-display text-base font-bold text-brand-gold">
                      {s.n}
                    </div>
                    <h3 className="mt-1 text-[13px] font-bold text-white">{s.title}</h3>
                    <p className="mt-1.5 text-[11.5px] leading-relaxed text-white/55">
                      {s.desc}
                    </p>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SolutionsSection;