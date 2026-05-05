import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Home, Search, MessageCircle } from "lucide-react";
import { useSeo } from "@/hooks/useSeo";
import { whatsappLink } from "@/config/site";

const NotFound = () => {
  const location = useLocation();

  useSeo({
    title: "Página não encontrada | Credifácil",
    description: "A página que você procura não existe ou foi movida.",
  });

  useEffect(() => {
    if (typeof console !== "undefined") {
      console.warn("404: rota inexistente acessada:", location.pathname);
    }
  }, [location.pathname]);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[hsl(215_50%_14%)] px-5 py-16 text-white">
      {/* Decorative gold glows */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(42 78% 58% / 0.4, transparent 65%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(42 78% 58% / 0.5, transparent 70%)",
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.06]" aria-hidden />

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <span className="pill-eyebrow-dark">
          <Search className="h-3.5 w-3.5" />
          Erro 404
        </span>
        <h1
          className="mt-6 font-display text-[120px] font-extrabold leading-none tracking-tighter text-gold-flow md:text-[180px]"
          aria-label="404"
        >
          404
        </h1>
        <p className="mx-auto mt-2 max-w-md text-lg font-bold text-white md:text-xl">
          Essa página decidiu tirar férias.
        </p>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-white/80 md:text-base">
          Mas seu crédito não precisa esperar. Volte para a página inicial ou fale com a gente agora.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link to="/" className="btn-gold">
            <Home className="h-4 w-4" />
            Voltar ao início
          </Link>
          <a
            href={whatsappLink("Olá! Não consegui encontrar uma página no site.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost-light"
          >
            <MessageCircle className="h-4 w-4" />
            Falar conosco
          </a>
        </div>

        <Link
          to="/"
          className="mt-10 inline-flex items-center gap-2 text-xs font-medium text-white/50 transition-colors hover:text-brand-gold"
        >
          <ArrowLeft className="h-3 w-3" />
          ou volte usando o navegador
        </Link>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">Páginas mais buscadas</p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { label: "Consignado", href: "/consignado" },
              { label: "Securitizadora", href: "/securitizadora" },
              { label: "Conta Luri", href: "/securitizadora/conta-digital-luri" },
              { label: "Invista Conosco", href: "/invista-conosco" },
              { label: "FAQ", href: "/perguntas-frequentes" },
              { label: "Portal do Cliente", href: "/portal-cliente" },
            ].map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/75 transition-all hover:border-brand-gold/50 hover:bg-brand-gold/10 hover:text-brand-gold"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
