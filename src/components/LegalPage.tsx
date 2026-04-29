import { Link } from "react-router-dom";
import { ArrowLeft, FileText, ShieldCheck, MessageCircle, Mail } from "lucide-react";
import logo from "@/assets/credifacil-logo.webp";
import { site, mailLink, whatsappLink } from "@/config/site";
import { useSeo } from "@/hooks/useSeo";
import ContactFooter from "@/components/ContactFooter";

type Section = {
  title: string;
  paragraphs?: string[];
  list?: string[];
};

type Props = {
  eyebrow: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  lastUpdated: string;
  sections: Section[];
  contactSubject?: string;
};

const LegalPage = ({
  eyebrow,
  title,
  metaTitle,
  metaDescription,
  intro,
  lastUpdated,
  sections,
  contactSubject,
}: Props) => {
  useSeo({ title: metaTitle, description: metaDescription });

  return (
    <div className="min-h-screen bg-[hsl(220_16%_98%)]">
      {/* Top bar */}
      <header className="absolute top-0 z-50 w-full bg-transparent">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-6 md:px-8">
          <Link to="/" className="flex items-center gap-3" aria-label="Credifácil">
            <img
              src={logo}
              alt="Credifácil"
              className="h-9 w-auto brightness-0 invert md:h-10"
              width={1795}
              height={605}
            />
          </Link>
          <Link to="/" className="btn-ghost-light">
            <ArrowLeft className="h-3.5 w-3.5" />
            Voltar ao início
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[hsl(215_48%_16%)] pb-16 pt-28 text-white md:pt-36">
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] opacity-50"
          style={{
            background:
              "radial-gradient(ellipse at center, hsl(199 85% 58% / 0.4), transparent 65%)",
          }}
          aria-hidden
        />
        <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-5 md:px-8">
          <span className="pill-eyebrow-dark">
            <FileText className="h-3.5 w-3.5" />
            {eyebrow}
          </span>
          <h1 className="mt-6 font-display text-3xl font-extrabold leading-[1.1] tracking-tight md:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/82">{intro}</p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[11px] font-medium text-white/78 backdrop-blur-md">
            <ShieldCheck className="h-3 w-3 text-brand-gold" />
            Última atualização: {lastUpdated}
          </div>
        </div>
      </section>

      {/* Conteúdo */}
      <main className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
        <article className="prose-legal">
          {sections.map((s, i) => (
            <section key={i} className="mb-10">
              <h2 className="mb-3 font-display text-xl font-bold tracking-tight text-foreground md:text-2xl">
                {i + 1}. {s.title}
              </h2>
              {s.paragraphs?.map((p, j) => (
                <p key={j} className="mb-3 text-[15px] leading-relaxed text-foreground/75">
                  {p}
                </p>
              ))}
              {s.list && (
                <ul className="mt-3 flex flex-col gap-2 pl-5">
                  {s.list.map((item, j) => (
                    <li key={j} className="list-disc text-[15px] leading-relaxed text-foreground/75 marker:text-brand-gold">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </article>

        {/* CTA contato */}
        <div className="mt-16 rounded-3xl border border-brand-gold/30 bg-white/80 p-6 backdrop-blur-sm md:p-8">
          <h2 className="font-display text-lg font-bold text-foreground md:text-xl">
            Precisa falar com a gente sobre este tema?
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-foreground/75">
            Nossa equipe responde em até 1 dia útil. Entre em contato pelo canal preferido.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={whatsappLink(`Olá! Quero falar sobre: ${contactSubject ?? title}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href={mailLink(contactSubject ?? title)}
              className="btn-ghost-dark"
            >
              <Mail className="h-4 w-4" />
              {site.contact.email}
            </a>
          </div>
        </div>

        <div className="mt-10 text-center text-xs text-foreground/50">
          {site.legal.razaoSocial} · CNPJ {site.legal.cnpj}
          <br />
          {site.contact.address}
        </div>
      </main>
      <ContactFooter />
    </div>
  );
};

export default LegalPage;
