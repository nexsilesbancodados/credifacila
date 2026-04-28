import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { whatsappLink } from "@/config/site";

const DEFAULT_MESSAGE = "Olá! Tenho interesse em saber mais sobre os créditos da Credifácil.";

const FloatingWhatsApp = () => {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShown(true), 1200);
    return () => clearTimeout(t);
  }, []);

  if (!shown) return null;

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3 md:bottom-8 md:right-8">
      {open && (
        <div
          className="animate-fade-in w-[280px] overflow-hidden rounded-2xl border border-emerald-500/20 bg-white shadow-[0_24px_60px_-12px_rgba(0,0,0,0.25)]"
          role="dialog"
          aria-label="Falar no WhatsApp"
        >
          <div className="flex items-center justify-between gap-3 bg-emerald-600 px-4 py-3 text-white">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                <MessageCircle className="h-4 w-4" />
              </span>
              <div className="leading-tight">
                <div className="text-[13px] font-bold">Credifácil</div>
                <div className="flex items-center gap-1 text-[10px] font-medium text-emerald-50/90">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" /> Online agora
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fechar"
              className="text-white/80 transition-colors hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="bg-[hsl(40_30%_97%)] p-4">
            <div className="rounded-2xl rounded-tl-sm bg-white p-3 text-[13px] leading-relaxed text-foreground/85 shadow-sm">
              👋 Olá! Posso te ajudar a simular o seu crédito agora mesmo. Em quanto tempo precisa do dinheiro?
            </div>
          </div>
          <a
            href={whatsappLink(DEFAULT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-emerald-600 px-4 py-3.5 text-sm font-bold text-white transition-colors hover:bg-emerald-700"
          >
            <MessageCircle className="h-4 w-4" />
            Iniciar conversa
          </a>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Fechar WhatsApp" : "Abrir WhatsApp"}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-[0_12px_30px_-6px_rgba(16,185,129,0.6)] transition-all hover:scale-110 hover:bg-emerald-500"
      >
        <span className="absolute inset-0 -z-10 animate-pulse-ring rounded-full bg-emerald-500/40" aria-hidden />
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
};

export default FloatingWhatsApp;
