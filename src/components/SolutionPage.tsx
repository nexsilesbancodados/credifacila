import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Phone,
  Mail,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import { site, whatsappLink, telLink, mailLink } from "@/config/site";
import { useSeo } from "@/hooks/useSeo";
import logo from "@/assets/credifacil-logo.webp";

type IconType = LucideIcon;

export interface SolutionPageProps {
  eyebrow: string;
  title: string;
  titleGold: string;
  description: string;
  /** SVG ilustrativo (preferido) ou foto (.webp) usada à direita do hero */
  heroIllustration: string;
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
  heroIllustration,
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
  useSeo({ title: metaTitle, description: metaDescription });

  return (
    <div className="min-h-screen bg-[hsl(220_16%_98%)]">
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
          <Link to="/securitizadora" className="btn-ghost-light">
            <ArrowLeft className="h-3.5 w-3.5" />
            Voltar à Securitizadora
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[hsl(220_16%_6%)] pb-16 pt-32 text-white md:pt-40">
        <div
          className="pointer-events-none absolute -right-32 top-10 h-[600px] w-[600px] opacity-50"
          style={{
            background:
              "radial-gradient(ellipse at center, hsl(35 85% 58% / 0.4), transparent 65%)",
          }}
          aria-hidden
        />
        <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div data-anim="fade-right">
            <span className="pill-eyebrow-dark">
              <Sparkles className="h-3.5 w-3.5" />
              {eyebrow}
            </span>
            <h1 className="mt-6 font-display text-[42px] font-extrabold leading-[1.02] tracking-tight md:text-[58px] lg:text-[64px]">
              {title}{" "}
              <span className="text-gold-gradient">{titleGold}</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contato" className="btn-gold group">
                Falar com especialista
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#como" className="btn-ghost-light">
                Como funciona
              </a>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative hidden lg:block" data-anim="fade-left">
            <img
              src={heroIllustration}
              alt={heroAlt}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="mx-auto h-auto w-full max-w-lg drop-shadow-[0_10px_40px_rgba(218,165,32,0.25)]"
            />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <h2 className="font-display text-3xl font-bold tracking-tight text-[hsl(220_16%_12%)] md:text-4xl">
            {intro.heading}
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-brand-gold" />
          <div className="mt-8 space-y-5 text-left text-[15px] leading-relaxed text-[hsl(220_15%_30%)] md:text-[17px]">
            {intro.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[hsl(220_16%_96%)] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mx-auto max-w-2xl text-center" data-anim="fade-up">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold">
              Benefícios
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[hsl(220_16%_12%)] md:text-4xl">
              Por que escolher essa solução
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-anim-stagger>
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="group rounded-2xl border border-[hsl(220_15%_88%)] bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-gold/50 hover:shadow-[var(--shadow-gold)]"
                >
                  <div
                    className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl text-brand-gold-foreground shadow-[var(--shadow-gold-sm)] transition-transform group-hover:rotate-6 group-hover:scale-110"
                    style={{ background: "var(--gradient-gold)" }}
                  >
                    <Icon className="h-6 w-6" strokeWidth={2.2} />
                  </div>
                  <h3 className="mb-2 font-display text-lg font-bold text-[hsl(220_16%_12%)]">{b.title}</h3>
                  <p className="text-[14px] leading-relaxed text-[hsl(220_15%_38%)]">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="como" className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mx-auto max-w-2xl text-center" data-anim="fade-up">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold">
              Passo a passo
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[hsl(220_16%_12%)] md:text-4xl">
              Como funciona
            </h2>
          </div>
          <div className="relative mt-14" data-anim-stagger>
            <div
              className="absolute left-[8%] right-[8%] top-9 hidden h-0.5 lg:block"
              style={{
                background:
                  "linear-gradient(90deg, transparent, hsl(var(--brand-gold) / 0.5), hsl(var(--brand-gold) / 0.5), hsl(var(--brand-gold) / 0.5), transparent)",
              }}
              aria-hidden
            />
            <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {howItWorks.map((s) => (
                <div key={s.step} className="text-center">
                  <div
                    className="mx-auto mb-4 inline-flex h-[72px] w-[72px] items-center justify-center rounded-full font-display text-2xl font-extrabold text-brand-gold-foreground shadow-[var(--shadow-gold)] ring-4 ring-white"
                    style={{ background: "var(--gradient-gold)" }}
                  >
                    {s.step}
                  </div>
                  <h3 className="mb-2 font-display text-lg font-bold text-[hsl(220_16%_12%)]">{s.title}</h3>
                  <p className="mx-auto max-w-[260px] text-[14px] leading-relaxed text-[hsl(220_15%_38%)]">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* For who */}
      <section className="relative overflow-hidden bg-[hsl(220_16%_6%)] py-20 md:py-24">
        <div
          className="pointer-events-none absolute -left-32 -top-32 h-[500px] w-[500px] opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at center, hsl(35 85% 58% / 0.5), transparent 65%)",
          }}
          aria-hidden
        />
        <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.04]" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-5 md:px-8">
          <div className="text-center" data-anim="fade-up">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold">
              Para quem é
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
              Indicado para o seu negócio
            </h2>
          </div>
          <ul
            className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2"
            data-anim-stagger
          >
            {forWho.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4 text-white/85 backdrop-blur-md transition-all hover:border-brand-gold/40 hover:bg-white/[0.07]"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-gold" />
                <span className="text-[15px] font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <div className="text-center" data-anim="fade-up">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold">
              Dúvidas frequentes
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[hsl(220_16%_12%)] md:text-4xl">
              Perguntas comuns
            </h2>
          </div>
          <div className="mt-12 space-y-4" data-anim-stagger>
            {faq.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-[hsl(220_15%_88%)] bg-[hsl(220_16%_98%)] p-6 transition-all open:border-brand-gold/40 open:shadow-md"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-[15px] font-semibold text-[hsl(220_16%_12%)] md:text-base">
                  {f.q}
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-brand-gold/40 text-brand-gold transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-[14px] leading-relaxed text-[hsl(220_15%_38%)]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section
        id="contato"
        className="relative overflow-hidden bg-[hsl(220_16%_8%)] py-20 md:py-24"
      >
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] opacity-30"
          style={{
            background:
              "radial-gradient(circle, hsl(38 90% 55% / 0.4), transparent 70%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-5xl px-5 text-center md:px-8">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
            {ctaTitle}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-white/70 md:text-lg">
            {ctaSubtitle}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappLink(`Olá! Tenho interesse em ${eyebrow}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold group"
            >
              <MessageCircle className="h-5 w-5" />
              Falar no WhatsApp
            </a>
            <a href={telLink(site.contact.phone0800)} className="btn-ghost-light">
              <Phone className="h-4 w-4" />
              {site.contact.phone0800Display}
            </a>
            <a href={mailLink(`Interesse em ${eyebrow}`)} className="btn-ghost-light">
              <Mail className="h-4 w-4" />
              {site.contact.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionPage;
