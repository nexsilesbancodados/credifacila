import { useEffect, useState } from "react";
import { FileText, ShieldCheck, MessageCircle, Mail, ArrowUp } from "lucide-react";
import { site, mailLink, whatsappLink } from "@/config/site";
import { useSeo } from "@/hooks/useSeo";
import ContactFooter from "@/components/ContactFooter";
import TopNav from "@/components/header/TopNav";

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

  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const slug = (s: string) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  return (
    <div className="min-h-screen bg-[hsl(0_0%_4%)] text-white">
      <TopNav />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[hsl(215_48%_16%)] pb-12 pt-24 text-white sm:pb-16 sm:pt-28 md:pt-36">
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] opacity-50"
          style={{
            background:
              "radial-gradient(ellipse at center, hsl(42 78% 58% / 0.4, transparent 65%)",
          }}
          aria-hidden
        />
        <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-5 md:px-8">
          <span className="pill-eyebrow-dark">
            <FileText className="h-3.5 w-3.5" />
            {eyebrow}
          </span>
          <h1 className="mt-5 font-display text-2xl font-extrabold leading-[1.15] tracking-tight sm:text-3xl md:text-5xl">
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
      <main className="mx-auto grid max-w-6xl gap-12 px-4 py-10 sm:px-5 sm:py-16 md:px-8 md:py-20 lg:grid-cols-[220px_1fr]">
        {/* TOC */}
        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold">Nesta página</p>
            <ul className="space-y-2 border-l border-white/10 pl-4">
              {sections.map((s, i) => (
                <li key={i}>
                  <a href={`#${slug(s.title)}`} className="block text-[13px] text-white/55 transition-colors hover:text-brand-gold">
                    {i + 1}. {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div>
        <article className="prose-legal">
          {sections.map((s, i) => (
            <section key={i} id={slug(s.title)} className="mb-10 scroll-mt-32">
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
        <div className="mt-16 rounded-3xl border border-brand-gold/30 bg-card/80 p-6 backdrop-blur-sm md:p-8">
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
        </div>
        </div>
      </main>

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Voltar ao topo"
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-brand-gold/40 bg-[hsl(0_0%_4%/0.9)] text-brand-gold shadow-[var(--shadow-gold)] backdrop-blur-md transition-all hover:scale-110"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      <ContactFooter />
    </div>
  );
};

export default LegalPage;
