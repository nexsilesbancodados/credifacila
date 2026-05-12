import { useEffect, useState } from "react";
import { Cookie, X } from "lucide-react";
import { initAnalytics } from "@/lib/analytics";

const STORAGE_KEY = "credifacil:cookie-consent:v1";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const accepted = localStorage.getItem(STORAGE_KEY);
      if (!accepted) {
        const t = setTimeout(() => setVisible(true), 1800);
        return () => clearTimeout(t);
      }
    } catch {
      // localStorage indisponível — não exibimos
    }
  }, []);

  const accept = (full: boolean) => {
    try {
      localStorage.setItem(STORAGE_KEY, full ? "all" : "essential");
    } catch {
      // ignore
    }
    setVisible(false);
    if (full) {
      initAnalytics().catch(() => undefined);
    }
  };

  if (!visible) return null;

  return (
    <div
      className="animate-fade-in fixed bottom-24 left-3 right-3 z-[55] max-w-md rounded-2xl border border-foreground/10 bg-card p-4 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.25)] sm:bottom-5 md:bottom-8 md:left-8 md:right-auto md:p-5"
      role="dialog"
      aria-labelledby="cookie-title"
    >
      <div className="flex items-start gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-gold/10 text-brand-gold">
          <Cookie className="h-4 w-4" />
        </span>
        <div className="flex-1">
          <h3 id="cookie-title" className="text-sm font-bold text-foreground">
            Cuidamos da sua privacidade
          </h3>
          <p className="mt-1 text-[12px] leading-relaxed text-foreground/75">
            Usamos cookies para melhorar sua experiência e personalizar conteúdos. Ao continuar navegando, você concorda com nossa{" "}
            <a href="/privacidade" className="font-semibold text-brand-gold hover:underline">
              Política de Privacidade
            </a>
            .
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => accept(true)}
              className="btn-gold !px-4 !py-2 text-xs"
            >
              Aceitar e continuar
            </button>
            <button
              type="button"
              onClick={() => accept(false)}
              className="rounded-2xl border border-foreground/15 px-4 py-2 text-xs font-semibold text-foreground/70 transition-colors hover:bg-foreground/5"
            >
              Apenas essenciais
            </button>
          </div>
        </div>
        <button
          type="button"
          onClick={() => accept(false)}
          aria-label="Fechar aviso"
          className="text-foreground/40 transition-colors hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
