import { useEffect, useRef, useState } from "react";
import {
  FileSignature,
  Search,
  CheckCircle2,
  Banknote,
  Smile,
  ShieldCheck,
  MessageCircle,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { whatsappLink } from "@/config/site";
import img1 from "@/assets/journey-1-cadastro.webp";
import img2 from "@/assets/journey-2-analise.webp";
import img3 from "@/assets/journey-3-aprovacao.webp";
import img4 from "@/assets/journey-4-liberacao.webp";
import img5 from "@/assets/journey-5-realizacao.webp";

type Panel = {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  highlight: string;
  desc: string;
  image: string;
};

const panels: Panel[] = [
  {
    icon: FileSignature,
    eyebrow: "Etapa 01 · Cadastro",
    title: "O clique",
    highlight: "inicial.",
    desc: "Tudo começa com uma intenção clara. Preenchimento simples, 100% online — em poucos minutos sua jornada está em movimento.",
    image: img1,
  },
  {
    icon: Search,
    eyebrow: "Etapa 02 · Análise",
    title: "Caminho",
    highlight: "claro.",
    desc: "Tecnologia e cuidado humano avaliam seu perfil. Eliminamos as sombras para que cada passo seja dado com total segurança e transparência.",
    image: img2,
  },
  {
    icon: CheckCircle2,
    eyebrow: "Etapa 03 · Aprovação",
    title: "Zero",
    highlight: "burocracia.",
    desc: "Resposta ágil e transparente sobre as condições. Removemos as barreiras desnecessárias para acelerar a sua chegada ao objetivo.",
    image: img3,
  },
  {
    icon: Banknote,
    eyebrow: "Etapa 04 · Liberação",
    title: "Crédito",
    highlight: "no ar.",
    desc: "Dinheiro na sua conta em até 24 horas úteis. A energia da aprovação se converte em liquidez real para o seu projeto.",
    image: img4,
  },
  {
    icon: Smile,
    eyebrow: "Etapa 05 · Realização",
    title: "A",
    highlight: "realização.",
    desc: "O destino final é apenas o começo. Planos transformados em conquistas tangíveis, rápidas e impactantes para quem você ama.",
    image: img5,
  },
];

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    let ticking = false;
    const compute = () => {
      ticking = false;
      const rect = section.getBoundingClientRect();
      const stickyH = Math.min(600, Math.max(440, window.innerHeight * 0.58));
      const total = section.offsetHeight - stickyH;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const p = total > 0 ? scrolled / total : 0;
      setProgress(p);
      const idx = Math.min(panels.length - 1, Math.floor(p * panels.length + 0.0001));
      setActiveIndex(idx);
      // Translate horizontal track based on scroll
      const maxX = track.scrollWidth - window.innerWidth;
      track.style.transform = `translate3d(${-(p * maxX)}px, 0, 0)`;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(compute);
      }
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", compute);
    };
  }, []);

  // Mobile fallback: vertical stacked panels (no sticky horizontal)
  return (
    <section
      id="como-funciona"
      aria-label="Como funciona — jornada visual"
      className="relative w-full bg-[hsl(215_50%_8%)]"
    >
      {/* ====== DESKTOP / TABLET: sticky horizontal scroll ====== */}
      <div
        ref={sectionRef}
        className="relative hidden lg:block"
        style={{ height: `${panels.length * 50}vh` }}
      >
        <div className="sticky top-16 h-[58vh] min-h-[440px] max-h-[600px] w-full overflow-hidden">
          {/* Section eyebrow + nav */}
          <div className="pointer-events-none absolute left-0 right-0 top-0 z-30 flex items-center justify-between px-8 py-4">
            <div className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-black/30 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-gold backdrop-blur-md">
              <ShieldCheck className="h-3 w-3" />
              Jornada Credifácil
            </div>
            <div className="pointer-events-auto flex items-center gap-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
              <span>Início</span>
              <div className="h-px w-16 bg-white/20" />
              <span>Realização</span>
            </div>
          </div>

          {/* Horizontal track */}
          <div
            ref={trackRef}
            className="flex h-full"
            style={{
              width: `${panels.length * 100}vw`,
              willChange: "transform",
              transition: reduceMotion ? "transform 0.3s ease" : undefined,
            }}
          >
            {panels.map((p, i) => (
              <PanelCinematic key={p.eyebrow} panel={p} index={i} active={activeIndex === i} />
            ))}
          </div>

          {/* Progress bar */}
          <div className="pointer-events-none absolute bottom-4 left-1/2 z-30 w-[260px] -translate-x-1/2">
            <div className="mb-2 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.22em] text-white/55">
              <span>{String(activeIndex + 1).padStart(2, "0")} / {String(panels.length).padStart(2, "0")}</span>
              <span>{panels[activeIndex].eyebrow.split("·")[1]?.trim()}</span>
            </div>
            <div className="h-[2px] w-full overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${Math.max(2, progress * 100)}%`,
                  background: "var(--gradient-gold)",
                  boxShadow: "0 0 16px hsl(var(--brand-gold) / 0.55)",
                  transition: "width 120ms linear",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ====== MOBILE: stacked panels ====== */}
      <div className="lg:hidden">
        <div className="px-5 pb-3 pt-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-brand-gold/[0.08] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-gold">
            <ShieldCheck className="h-3 w-3" />
            Jornada Credifácil
          </span>
          <h2 className="mt-4 font-display text-[28px] font-extrabold leading-[1.05] tracking-tight text-white">
            Do primeiro clique
            <br />
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>
              até a realização.
            </span>
          </h2>
        </div>
        <div className="flex flex-col">
          {panels.map((p) => (
            <PanelCinematic key={p.eyebrow} panel={p} mobile />
          ))}
        </div>
      </div>

      {/* Final CTA strip */}
      <div className="relative overflow-hidden border-t border-white/5 bg-[hsl(215_50%_10%)] px-5 py-10 md:px-10 md:py-14">
        <div
          className="pointer-events-none absolute -left-32 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full opacity-40"
          style={{ background: "radial-gradient(circle, hsl(199 90% 55% / 0.18), transparent 65%)" }}
          aria-hidden
        />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
          <h3 className="font-display text-[24px] font-extrabold leading-[1.1] tracking-tight text-white md:text-[34px]">
            Pronto para iniciar a{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>
              sua jornada?
            </span>
          </h3>
          <p className="max-w-xl text-[14px] leading-relaxed text-white/75 md:text-[15px]">
            Atendimento humano, processo 100% digital e sem burocracia. Em 24h úteis seu plano vira realidade.
          </p>
          <div className="mt-1 flex flex-wrap items-center justify-center gap-3">
            <a
              href={whatsappLink("Olá! Quero começar minha solicitação de crédito.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-2xl px-6 py-3 text-sm font-bold text-brand-gold-foreground shadow-[var(--shadow-gold)] transition-all hover:scale-[1.03] hover:brightness-110"
              style={{ background: "var(--gradient-gold)" }}
            >
              <MessageCircle className="h-4 w-4" />
              Iniciar minha jornada
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#solucoes"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-brand-gold/60 hover:bg-white/10 hover:text-brand-gold"
            >
              Ver linhas de crédito
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const PanelCinematic = ({
  panel,
  index = 0,
  active = false,
  mobile = false,
}: {
  panel: Panel;
  index?: number;
  active?: boolean;
  mobile?: boolean;
}) => {
  const Icon = panel.icon;
  const num = String(index + 1).padStart(2, "0");
  return (
    <article
      className={`relative flex flex-shrink-0 overflow-hidden ${
        mobile
          ? "h-[58vh] min-h-[400px] w-full items-end"
          : "h-full w-screen items-center justify-start"
      }`}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={panel.image}
          alt={panel.title + " " + panel.highlight}
          loading={mobile || index > 0 ? "lazy" : "eager"}
          decoding="async"
          width={1600}
          height={1000}
          className={`h-full w-full object-cover transition-transform duration-[1200ms] ease-out ${
            active || mobile ? "scale-100" : "scale-110"
          }`}
        />
      </div>

      {/* Cinematic dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, hsl(215 50% 8% / 0.55) 0%, hsl(215 50% 8% / 0.4) 40%, hsl(215 50% 6% / 0.85) 100%)",
        }}
        aria-hidden
      />
      {/* Side gradient for text legibility */}
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          background:
            "linear-gradient(90deg, hsl(215 50% 6% / 0.92) 0%, hsl(215 50% 6% / 0.7) 30%, hsl(215 50% 6% / 0.2) 55%, transparent 70%)",
        }}
        aria-hidden
      />
      {/* Noise */}
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.06]" aria-hidden />

      {/* Giant section number */}
      <div
        className={`pointer-events-none absolute select-none font-display font-extrabold leading-none text-white/[0.06] ${
          mobile
            ? "right-3 top-3 text-[80px]"
            : "right-[5vw] top-1/2 -translate-y-1/2 text-[clamp(8rem,16vw,16rem)]"
        }`}
        aria-hidden
      >
        {num}
      </div>

      {/* Content */}
      <div
        className={`relative z-10 ${
          mobile
            ? "flex h-full w-full flex-col justify-end px-6 pb-7 pt-14"
            : "ml-[6vw] max-w-[480px] pl-2 pr-8 pt-12"
        }`}
      >
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-gold/40 bg-black/30 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-brand-gold backdrop-blur-md">
          <Icon className="h-3 w-3" strokeWidth={2.2} />
          {panel.eyebrow}
        </div>

        <h3
          className={`mt-4 font-display font-extrabold tracking-tight text-white ${
            mobile ? "text-[28px] leading-[1]" : "text-[clamp(30px,3.6vw,52px)] leading-[1]"
          }`}
          style={{ textShadow: "0 4px 32px hsl(215 52% 4% / 0.7)" }}
        >
          {panel.title}{" "}
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>
            {panel.highlight}
          </span>
        </h3>

        <div
          className="mt-3 h-[2px] w-10 rounded-full"
          style={{ background: "var(--gradient-gold)" }}
          aria-hidden
        />

        <p
          className={`mt-3 max-w-md leading-relaxed text-white/82 ${
            mobile ? "text-[13px]" : "text-[13.5px]"
          }`}
        >
          {panel.desc}
        </p>
      </div>

      {/* Bottom hairline gold accent */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, hsl(var(--brand-gold) / 0.55), transparent)",
        }}
        aria-hidden
      />
    </article>
  );
};

export default HowItWorks;
