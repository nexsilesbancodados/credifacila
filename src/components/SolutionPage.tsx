import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles, Phone, Mail, MessageCircle, type LucideIcon } from "lucide-react";
import logo from "@/assets/credifacil-logo.png";

type IconType = LucideIcon;

export interface SolutionPageProps {
  eyebrow: string;
  title: string;
  titleGold: string;
  description: string;
  heroImg: string;
  heroAlt: string;
  metaTitle: string;
  metaDescription: string;
  intro: { heading: string; paragraphs: string[] };
  benefits: { icon: IconType; title: string; desc: string }[];
  howItWorks: { step: string; title: string; desc: string }[];
  forWho: string[];
  faq: { q: string; a: string }[];
  ctaTitle: string;
  ctaSubtitle: string;
}

const SolutionPage = ({
  eyebrow,
  title,
  titleGold,
  description,
  heroImg,
  heroAlt,
  metaTitle,
  metaDescription,
  intro,
  benefits,
  howItWorks,
  forWho,
  faq,
  ctaTitle,
  ctaSubtitle,
}: SolutionPageProps) => {
  useEffect(() => {
    document.title = metaTitle;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", metaDescription);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [metaTitle, metaDescription]);

  return (
    <div className="min-h-screen bg-[hsl(40_30%_98%)]">
      {/* Top bar */}
      <header className="absolute top-0 z-50 w-full bg-transparent">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 md:px-8">
          <Link to="/" className="flex items-center gap-3" aria-label="Credifácil">
            <img
              src={logo}
              alt="Credifácil"
              className="h-9 w-auto brightness-0 invert md:h-10"
              width={1795}
              height={605}
            />
          </Link>
          <Link
            to="/securitizadora"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 hover:text-brand-gold"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Voltar à Securitizadora
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[620px] w-full overflow-hidden md:h-[720px]">
        <img
          src={heroImg}
          alt={heroAlt}
          className="absolute inset-0 h-full w-full object-cover"
          width={1600}
          height={900}
          fetchPriority="high"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(95deg, hsl(30 22% 5% / 0.95) 0%, hsl(30 22% 5% / 0.78) 35%, hsl(30 22% 5% / 0.45) 65%, transparent 100%)",
          }}
        />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-5 md:px-8">
          <div className="max-w-2xl pt-20">
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-brand-gold/40 bg-brand-gold/[0.08] px-3.5 py-1.5 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-brand-gold" strokeWidth={2.4} />
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-brand-gold">
                {eyebrow}
              </span>
            </div>
            <h1
              className="text-[42px] font-bold leading-[1.02] tracking-tight text-white md:text-[60px] lg:text-[68px]"
              style={{ textShadow: "0 2px 24px hsl(30 30% 4% / 0.45)" }}
            >
              {title}{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-gold)" }}
              >
                {titleGold}
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contato"
                className="group inline-flex items-center gap-3 rounded-2xl px-7 py-4 text-base font-bold text-brand-gold-foreground shadow-[var(--shadow-gold)] transition-all hover:scale-[1.03] hover:brightness-110"
                style={{ background: "var(--gradient-gold)" }}
              >
                Falar com especialista
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#como"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/[0.06] px-5 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-brand-gold/60 hover:bg-white/10 hover:text-brand-gold"
              >
                Como funciona
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-[hsl(30_22%_12%)] md:text-4xl">
            {intro.heading}
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-brand-gold" />
          <div className="mt-8 space-y-5 text-left text-[15px] leading-relaxed text-[hsl(30_15%_30%)] md:text-[17px]">
            {intro.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[hsl(40_30%_96%)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold">
              Benefícios
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[hsl(30_22%_12%)] md:text-4xl">
              Por que escolher essa solução
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="group rounded-2xl border border-[hsl(30_15%_88%)] bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-gold/50 hover:shadow-xl"
                >
                  <div
                    className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl text-brand-gold-foreground shadow-[var(--shadow-gold)]"
                    style={{ background: "var(--gradient-gold)" }}
                  >
                    <Icon className="h-6 w-6" strokeWidth={2.2} />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-[hsl(30_22%_12%)]">{b.title}</h3>
                  <p className="text-[14px] leading-relaxed text-[hsl(30_15%_38%)]">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="como" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold">
              Passo a passo
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[hsl(30_22%_12%)] md:text-4xl">
              Como funciona
            </h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((s) => (
              <div key={s.step} className="relative">
                <div
                  className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full text-xl font-extrabold text-brand-gold-foreground shadow-[var(--shadow-gold)]"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  {s.step}
                </div>
                <h3 className="mb-2 text-lg font-bold text-[hsl(30_22%_12%)]">{s.title}</h3>
                <p className="text-[14px] leading-relaxed text-[hsl(30_15%_38%)]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For who */}
      <section className="bg-[hsl(30_18%_6%)] py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <div className="text-center">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold">
              Para quem é
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Indicado para o seu negócio
            </h2>
          </div>
          <ul className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
            {forWho.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4 text-white/85 backdrop-blur-md"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-gold" />
                <span className="text-[15px] font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <div className="text-center">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold">
              Dúvidas frequentes
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[hsl(30_22%_12%)] md:text-4xl">
              Perguntas comuns
            </h2>
          </div>
          <div className="mt-12 space-y-4">
            {faq.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-[hsl(30_15%_88%)] bg-[hsl(40_30%_98%)] p-6 transition-all open:border-brand-gold/40 open:shadow-md"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-[15px] font-semibold text-[hsl(30_22%_12%)] md:text-base">
                  {f.q}
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-brand-gold/40 text-brand-gold transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-[14px] leading-relaxed text-[hsl(30_15%_38%)]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contato" className="relative overflow-hidden bg-[hsl(30_22%_8%)] py-20 md:py-28">
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, hsl(38 90% 55% / 0.4), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-5 text-center md:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            {ctaTitle}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-white/70 md:text-lg">
            {ctaSubtitle}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#whatsapp"
              className="group inline-flex items-center gap-3 rounded-2xl px-7 py-4 text-base font-bold text-brand-gold-foreground shadow-[var(--shadow-gold)] transition-all hover:scale-[1.03] hover:brightness-110"
              style={{ background: "var(--gradient-gold)" }}
            >
              <MessageCircle className="h-5 w-5" />
              Falar no WhatsApp
            </a>
            <a
              href="tel:08000000000"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/[0.06] px-5 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-brand-gold/60 hover:bg-white/10 hover:text-brand-gold"
            >
              <Phone className="h-4 w-4" />
              0800 000 0000
            </a>
            <a
              href="mailto:contato@credifacil.com.br"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/[0.06] px-5 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-brand-gold/60 hover:bg-white/10 hover:text-brand-gold"
            >
              <Mail className="h-4 w-4" />
              contato@credifacil.com.br
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionPage;