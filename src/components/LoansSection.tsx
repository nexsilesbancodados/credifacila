import {
  ShieldCheck,
  Clock,
  Headphones,
  ChevronRight,
  Star,
  Quote,
  Award,
  HandCoins,
  Lock,
  MessageCircle,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Users,
  ChevronLeft,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { whatsappLink } from "@/config/site";
import loansHero from "@/assets/loans-hero.webp";
import loansHeroMd from "@/assets/loans-hero-md.webp";
import loansHeroSm from "@/assets/loans-hero-sm.webp";
import cardPersonalIllo from "@/assets/illustrations/card-personal.svg";
import cardCollateralIllo from "@/assets/illustrations/card-collateral.svg";
import cardPortabilityIllo from "@/assets/illustrations/card-portability.svg";
import cardBusinessIllo from "@/assets/illustrations/card-business.svg";

const products = [
  {
    illo: cardPersonalIllo,
    title: "Crédito Pessoal",
    desc: "Dinheiro livre na sua conta para realizar o que você quiser, sem precisar justificar.",
    tag: "Mais pedido",
    rate: "1,79%",
    rateLabel: "a.m. a partir de",
    term: "até 60x",
    href: whatsappLink("Olá! Quero contratar Crédito Pessoal."),
  },
  {
    illo: cardCollateralIllo,
    title: "Crédito com Garantia",
    desc: "Use um imóvel ou veículo como garantia e tenha as menores taxas do mercado.",
    tag: "Menor taxa",
    rate: "0,89%",
    rateLabel: "a.m. a partir de",
    term: "até 240x",
    href: whatsappLink("Olá! Quero contratar Crédito com Garantia."),
  },
  {
    illo: cardPortabilityIllo,
    title: "Portabilidade de Crédito",
    desc: "Traga seu contrato de outro banco para a Credifácil e reduza sua parcela hoje mesmo.",
    tag: null,
    rate: "−40%",
    rateLabel: "na parcela em média",
    term: "sem custo",
    href: whatsappLink("Olá! Quero fazer Portabilidade de Crédito."),
  },
  {
    illo: cardBusinessIllo,
    title: "Para Empresas",
    desc: "Capital de giro e linhas de crédito sob medida para impulsionar o seu negócio.",
    tag: "PJ",
    rate: "1,49%",
    rateLabel: "a.m. a partir de",
    term: "até 36x",
    href: whatsappLink("Olá! Quero crédito para minha empresa."),
  },
];

const testimonials = [
  {
    initials: "CR",
    name: "Camila R.",
    meta: "Cliente desde 2024 · São Paulo",
    text: "Em poucos cliques resolvi tudo. Simples, rápido e sem stress!",
  },
  {
    initials: "JM",
    name: "João M.",
    meta: "Cliente desde 2023 · Belo Horizonte",
    text: "Aprovaram em minutos e o dinheiro caiu no mesmo dia. Recomendo demais!",
  },
  {
    initials: "AP",
    name: "Ana P.",
    meta: "Cliente desde 2025 · Curitiba",
    text: "Atendimento humano de verdade. Me explicaram tudo sem letrinha miúda.",
  },
];

const LoansSection = () => {
  const [tIndex, setTIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (paused) return;
    timerRef.current = window.setInterval(() => {
      setTIndex((i) => (i + 1) % testimonials.length);
    }, 5500);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [paused]);

  const goTo = (i: number) =>
    setTIndex(((i % testimonials.length) + testimonials.length) % testimonials.length);
  const prev = () => goTo(tIndex - 1);
  const next = () => goTo(tIndex + 1);

  return (
    <section
      id="solucoes"
      className="relative w-full px-5 py-16 md:px-8 md:py-20 lg:px-10"
      aria-label="Linhas de crédito Credifácil"
    >
      <div className="mx-auto max-w-7xl">
        {/* HERO row: text + image */}
        <div
          className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-12"
          data-anim-stagger
        >
          {/* Left text */}
          <div className="flex flex-col justify-center">
            <span className="pill-eyebrow w-fit">
              <Sparkles className="h-3 w-3" />
              Crédito sob medida pra você
            </span>

            <h2 className="mt-5 font-display text-[40px] font-bold leading-[1.02] tracking-tight text-foreground md:text-[56px]">
              Solicite, aprove e
              <br />
              receba{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-gold-gradient">no mesmo dia</span>
                <svg
                  className="absolute -bottom-1 left-0 h-2.5 w-full"
                  viewBox="0 0 200 8"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M2,5 Q100,1 198,5"
                    stroke="hsl(var(--brand-gold))"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    opacity="0.55"
                  />
                </svg>
              </span>
              .
            </h2>

            <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/70 md:text-lg">
              Sem fila, sem papelada e sem surpresas. Descubra em segundos a parcela que cabe no seu bolso.
            </p>

            {/* Bullet checklist */}
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-foreground/75">
              {[
                "Resposta em até 3 minutos",
                "Sem consulta ao SPC/Serasa",
                "100% online",
              ].map((b) => (
                <li key={b} className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-brand-gold" strokeWidth={2.4} />
                  <span className="font-medium">{b}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-stretch">
              <a
                href={whatsappLink("Olá! Quero solicitar meu crédito Credifácil.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold group sm:self-start"
              >
                <MessageCircle className="h-4 w-4" />
                Solicitar agora
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>

              {/* Discover-lines card CTA */}
              <a
                href="#linhas"
                className="group relative flex flex-1 items-center gap-3 overflow-hidden rounded-2xl border border-foreground/10 bg-white/75 px-4 py-3 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-brand-gold/45 hover:bg-white hover:shadow-[var(--shadow-card)] sm:max-w-md"
              >
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-brand-gold/30 bg-brand-gold/10 text-brand-gold transition-transform group-hover:scale-105 group-hover:rotate-[-3deg]"
                  aria-hidden
                >
                  <HandCoins className="h-[18px] w-[18px]" strokeWidth={2.2} />
                </span>
                <div className="min-w-0 flex-1 leading-tight">
                  <div className="text-[13px] font-bold text-foreground">
                    Veja todas as linhas de crédito
                  </div>
                  <div className="mt-0.5 text-[11px] text-foreground/72">
                    Pessoal, com garantia, portabilidade e PJ — escolha a sua.
                  </div>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-brand-gold/40 bg-white px-2.5 py-1.5 text-[11px] font-bold text-brand-gold transition-all group-hover:gap-1.5 group-hover:bg-brand-gold group-hover:text-brand-gold-foreground">
                  Ver
                  <ChevronRight className="h-3.5 w-3.5" />
                </span>
                <span
                  className="pointer-events-none absolute inset-y-0 -left-10 w-10 -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 transition-all duration-700 group-hover:left-[110%] group-hover:opacity-100"
                  aria-hidden
                />
              </a>
            </div>

          </div>

          {/* Right image with floating testimonial */}
          <div className="relative hidden overflow-hidden rounded-[28px] shadow-[var(--shadow-card)] lg:block min-h-[560px] ring-1 ring-foreground/10">
            <img
              src={loansHero}
              srcSet={`${loansHeroSm} 640w, ${loansHeroMd} 1200w, ${loansHero} 1920w`}
              sizes="(max-width: 1024px) 0px, 40vw"
              alt="Cliente satisfeita simulando empréstimo no celular"
              className="absolute inset-0 h-full w-full object-cover object-[60%_center] transition-transform duration-[1200ms] ease-out hover:scale-[1.03]"
              loading="lazy"
              decoding="async"
              width={1024}
              height={1024}
            />
            {/* Top fade for badge legibility */}
            <div
              className="absolute inset-x-0 top-0 h-36"
              style={{
                background:
                  "linear-gradient(180deg, hsl(220 16% 7% / 0.7) 0%, hsl(220 16% 7% / 0.25) 60%, transparent 100%)",
              }}
              aria-hidden
            />
            {/* Bottom fade for testimonial */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 35%, hsl(220 16% 7% / 0.88) 100%)",
              }}
              aria-hidden
            />

            {/* Top-left status badge */}
            <div className="badge-live anim-pop-in absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-foreground shadow-md backdrop-blur" style={{ animationDelay: "200ms" }}>
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              Aprovado em 3 min
            </div>

            {/* Top-right floating chip — live counter */}
            <div className="anim-pop-in absolute right-4 top-4 flex items-center gap-2 rounded-full border border-white/25 bg-[hsl(220_16%_7%)]/85 px-3 py-1.5 text-[10px] font-semibold text-white shadow-md backdrop-blur-md transition-transform hover:-translate-y-0.5" style={{ animationDelay: "350ms" }}>
              <Users className="h-3 w-3 text-brand-gold" />
              <span className="text-white/95">
                <span className="font-bold text-white">2.341</span> aprovados hoje
              </span>
            </div>

            {/* Testimonial carousel */}
            <div
              className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-[hsl(220_16%_7%)]/92 p-4 text-white shadow-lg backdrop-blur-md"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              role="region"
              aria-roledescription="carousel"
              aria-label="Depoimentos de clientes"
            >
              <div className="flex items-start justify-between gap-3">
                <Quote className="h-5 w-5 shrink-0 text-brand-gold" />
                <div className="flex">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-3 w-3 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
              </div>

              {/* Slides */}
              <div className="relative mt-2 min-h-[88px]">
                {testimonials.map((t, i) => (
                  <div
                    key={t.name}
                    aria-hidden={i !== tIndex}
                    className={`transition-all duration-500 ${
                      i === tIndex
                        ? "relative opacity-100 translate-y-0"
                        : "pointer-events-none absolute inset-0 opacity-0 translate-y-1"
                    }`}
                  >
                    <p className="text-sm leading-relaxed text-white/90">
                      "{t.text}"
                    </p>
                    <div className="mt-3 flex items-center gap-2.5 border-t border-white/10 pt-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-brand-gold to-brand-gold-soft text-[11px] font-bold text-brand-gold-foreground">
                        {t.initials}
                      </span>
                      <div className="leading-tight">
                        <div className="text-xs font-bold">{t.name}</div>
                        <div className="text-[10px] text-white/75">{t.meta}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Controls */}
              <div className="mt-3 flex items-center justify-between gap-3 border-t border-white/10 pt-2.5">
                <div className="flex items-center gap-1.5" role="tablist" aria-label="Selecionar depoimento">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      role="tab"
                      aria-selected={i === tIndex}
                      aria-label={`Depoimento ${i + 1} de ${testimonials.length}`}
                      onClick={() => goTo(i)}
                      className={`h-1.5 rounded-full transition-all ${
                        i === tIndex
                          ? "w-6 bg-brand-gold"
                          : "w-1.5 bg-white/30 hover:bg-white/55"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Depoimento anterior"
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/82 transition-all hover:border-brand-gold/60 hover:bg-brand-gold/15 hover:text-brand-gold"
                  >
                    <ChevronLeft className="h-3.5 w-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Próximo depoimento"
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/82 transition-all hover:border-brand-gold/60 hover:bg-brand-gold/15 hover:text-brand-gold"
                  >
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PRODUCTS row */}
        <div
          id="linhas"
          className="mt-12 scroll-mt-20 rounded-3xl border border-foreground/10 bg-white/80 p-6 shadow-[var(--shadow-card)] backdrop-blur-sm md:p-8"
          data-anim="fade-up"
        >
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-gold">
                <Sparkles className="h-3 w-3" />
                Linhas de crédito
              </span>
              <h3 className="mt-1 font-display text-2xl font-bold leading-tight text-foreground md:text-[28px]">
                A solução certa para{" "}
                <span className="text-brand-gold">cada necessidade</span>
              </h3>
              <p className="mt-1.5 text-sm text-foreground/65">
                Taxas a partir de <strong className="text-foreground/85">0,89% a.m.</strong> · simulação grátis e sem compromisso.
              </p>
            </div>
            <a
              href={whatsappLink("Olá! Quero contratar um crédito Credifácil.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 rounded-full border border-brand-gold/40 px-4 py-2 text-xs font-semibold text-brand-gold transition-all hover:bg-brand-gold/10 hover:gap-2.5"
            >
              Falar no WhatsApp
              <ChevronRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" data-anim-stagger>
            {products.map((p) => (
              <a
                key={p.title}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-white transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-gold)] ${
                  p.tag === "Mais pedido"
                    ? "border-brand-gold/45 ring-1 ring-brand-gold/30 hover:border-brand-gold/70"
                    : "border-foreground/10 hover:border-brand-gold/40"
                }`}
              >
                {/* Illustration */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={p.illo}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {p.tag && (
                    <span
                      className="absolute right-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-gold-foreground shadow-[var(--shadow-gold-sm)]"
                      style={{ background: "var(--gradient-gold)" }}
                    >
                      {p.tag}
                    </span>
                  )}
                  {/* Rate chip */}
                  <div className="absolute bottom-3 left-3 rounded-xl border border-foreground/10 bg-white/95 px-2.5 py-1.5 shadow-sm backdrop-blur">
                    <div className="text-[9px] font-semibold uppercase tracking-wider text-foreground/55 leading-none">
                      {p.rateLabel}
                    </div>
                    <div className="mt-0.5 font-display text-[15px] font-bold leading-none text-foreground">
                      {p.rate}
                    </div>
                  </div>
                  {/* Term chip */}
                  <div className="absolute bottom-3 right-3 rounded-full border border-foreground/10 bg-white/95 px-2.5 py-1 text-[10px] font-bold text-foreground/75 shadow-sm backdrop-blur">
                    {p.term}
                  </div>
                </div>
                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  <h4 className="font-display text-[16px] font-bold text-foreground transition-colors group-hover:text-brand-gold">
                    {p.title}
                  </h4>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-foreground/75">
                    {p.desc}
                  </p>
                  <div className="mt-4 inline-flex items-center justify-between gap-2 border-t border-foreground/10 pt-3">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-gold transition-all group-hover:gap-2">
                      Falar no WhatsApp
                      <ChevronRight className="h-3.5 w-3.5" />
                    </span>
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-brand-gold/35 bg-brand-gold/5 text-brand-gold transition-all group-hover:bg-brand-gold group-hover:text-brand-gold-foreground group-hover:border-brand-gold">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
                {/* Shine sweep on hover */}
                <span
                  className="pointer-events-none absolute inset-y-0 -left-16 w-16 -skew-x-12 bg-gradient-to-r from-transparent via-white/55 to-transparent opacity-0 transition-all duration-700 group-hover:left-[110%] group-hover:opacity-100"
                  aria-hidden
                />
              </a>
            ))}
          </div>

          {/* Reassurance bar */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 rounded-2xl border border-foreground/10 bg-white/60 px-4 py-3 text-[11px] font-medium text-foreground/70 backdrop-blur-sm">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-brand-gold" /> Autorizada pelo Banco Central
            </span>
            <span className="hidden h-3 w-px bg-foreground/15 sm:inline-block" />
            <span className="inline-flex items-center gap-1.5">
              <Lock className="h-3.5 w-3.5 text-brand-gold" /> Seus dados protegidos pela LGPD
            </span>
            <span className="hidden h-3 w-px bg-foreground/15 sm:inline-block" />
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-brand-gold" /> Simulação 100% gratuita
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoansSection;
