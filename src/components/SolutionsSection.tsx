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
    className="relative w-full overflow-hidden py-24 md:py-32"
  >
    <div className="relative mx-auto flex max-w-7xl flex-col gap-16 px-5 md:px-8 md:gap-24">
      {/* === Bloco 1: Benefícios === */}
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2.5">
            <span className="h-px w-8 bg-brand-gold" />
            <span className="text-[11px] font-bold uppercase tracking-[0.32em] text-brand-gold">
              Mais benefícios para você
            </span>
          </div>
          <h2 className="mt-6 font-display text-4xl font-extrabold leading-[0.98] tracking-tight text-white md:text-[56px]">
            Soluções pensadas
            <br />
            para facilitar{" "}
            <span className="relative inline-block">
              <span className="text-gold-gradient">sua vida financeira.</span>
              <span
                className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full opacity-60"
                style={{
                  background:
                    "linear-gradient(90deg, hsl(42 78% 55%), transparent)",
                }}
              />
            </span>
          </h2>
          <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-white/65">
            A <span className="font-semibold text-white">Credifácil</span> une tecnologia,
            atendimento humanizado e condições especiais para oferecer a melhor
            experiência do início ao fim.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.06] sm:grid-cols-2">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="group relative bg-[hsl(0_0%_5%)] p-6 transition-colors hover:bg-[hsl(0_0%_7%)]"
                >
                  <div className="flex items-start gap-4">
                    <span
                      className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-brand-gold"
                      style={{
                        background:
                          "linear-gradient(135deg, hsl(42 78% 55% / 0.18), hsl(42 78% 55% / 0.04))",
                        boxShadow:
                          "inset 0 0 0 1px hsl(42 78% 55% / 0.25), 0 0 20px -6px hsl(42 78% 55% / 0.4)",
                      }}
                      aria-hidden
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <div className="flex-1">
                      <h3 className="text-[14px] font-bold text-white">{b.title}</h3>
                      <p className="mt-1.5 text-[12.5px] leading-relaxed text-white/55">
                        {b.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Image */}
        <div className="relative order-1 lg:order-2">
          <div
            className="pointer-events-none absolute -inset-6 rounded-[32px] opacity-70"
            style={{
              background:
                "radial-gradient(ellipse at center, hsl(42 78% 58% / 0.3), transparent 70%)",
            }}
            aria-hidden
          />
          {/* Decorative gold corner brackets */}
          <div className="absolute -left-3 -top-3 h-12 w-12 border-l-2 border-t-2 border-brand-gold/60" aria-hidden />
          <div className="absolute -bottom-3 -right-3 h-12 w-12 border-b-2 border-r-2 border-brand-gold/60" aria-hidden />
          <img
            src={showcaseImg}
            alt="Especialista Credifácil sorrindo enquanto atende cliente em laptop"
            loading="lazy"
            decoding="async"
            width={1024}
            height={1024}
            className="relative aspect-[4/5] w-full rounded-[20px] border border-white/10 object-cover shadow-[0_40px_80px_-30px_hsl(0_0%_0%/0.8)]"
          />
          {/* Floating badge */}
          <div
            className="absolute -bottom-5 left-6 right-6 flex items-center justify-between gap-4 rounded-2xl border border-brand-gold/40 bg-[hsl(0_0%_5%/0.95)] px-5 py-4 backdrop-blur-md md:left-8 md:right-8"
            style={{ boxShadow: "0 20px 50px -15px hsl(42 78% 50% / 0.35)" }}
          >
            <div>
              <div className="font-display text-2xl font-extrabold text-brand-gold">+20 mil</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
                clientes atendidos
              </div>
            </div>
            <div className="h-10 w-px bg-brand-gold/30" />
            <div>
              <div className="font-display text-2xl font-extrabold text-brand-gold">12+</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
                anos de mercado
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === Bloco 2: Como funciona === */}
      <div className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2.5">
            <span className="h-px w-8 bg-brand-gold" />
            <span className="text-[11px] font-bold uppercase tracking-[0.32em] text-brand-gold">
              Simples do início ao fim
            </span>
            <span className="h-px w-8 bg-brand-gold" />
          </div>
          <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-white md:text-[52px]">
            Como funciona <span className="text-gold-gradient">na prática</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-white/65">
            Um processo 100% online,{" "}
            <span className="font-semibold text-brand-gold">seguro e descomplicado</span>,
            feito pela Credifácil para você.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Connector line */}
          <div
            className="pointer-events-none absolute left-[7%] right-[7%] top-10 hidden h-px md:block"
            style={{
              background:
                "linear-gradient(90deg, transparent, hsl(42 78% 55% / 0.5) 10%, hsl(42 78% 55% / 0.5) 90%, transparent)",
            }}
            aria-hidden
          />
          <ol className="relative grid grid-cols-2 gap-x-5 gap-y-12 sm:grid-cols-3 md:grid-cols-5 md:gap-x-3">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <li key={s.n} className="group flex flex-col items-center text-center">
                  <div className="relative">
                    <span
                      className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-brand-gold/40 bg-[hsl(0_0%_5%)] text-brand-gold transition-all duration-300 group-hover:scale-105 group-hover:border-brand-gold"
                      style={{
                        boxShadow:
                          "0 0 30px -8px hsl(42 78% 55% / 0.5), inset 0 0 20px -10px hsl(42 78% 55% / 0.4)",
                      }}
                      aria-hidden
                    >
                      <Icon className="h-7 w-7" strokeWidth={1.6} />
                    </span>
                    <span
                      className="absolute -right-1 -top-1 z-20 flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-extrabold text-[hsl(0_0%_5%)]"
                      style={{
                        background:
                          "linear-gradient(135deg, hsl(42 90% 65%), hsl(42 78% 50%))",
                        boxShadow: "0 4px 12px -2px hsl(42 78% 50% / 0.6)",
                      }}
                    >
                      {s.n}
                    </span>
                  </div>
                  <h3 className="mt-5 text-[14px] font-bold text-white">{s.title}</h3>
                  <p className="mt-2 max-w-[180px] text-[12px] leading-relaxed text-white/55">
                    {s.desc}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/consignado"
            className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[13px] font-bold uppercase tracking-[0.12em] text-[hsl(0_0%_5%)] shadow-[0_10px_30px_-8px_hsl(42_78%_55%/0.6)] transition-all hover:shadow-[0_14px_36px_-8px_hsl(42_78%_55%/0.8)]"
            style={{
              background:
                "linear-gradient(135deg, hsl(42 90% 65%) 0%, hsl(42 78% 50%) 50%, hsl(38 75% 45%) 100%)",
            }}
          >
            Simular meu crédito agora
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/perguntas-frequentes"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-[13px] font-bold uppercase tracking-[0.12em] text-white/85 transition-all hover:border-brand-gold/50 hover:bg-white/[0.06] hover:text-brand-gold"
          >
            Tirar dúvidas
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default SolutionsSection;