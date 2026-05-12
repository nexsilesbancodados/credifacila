import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const KEY = "cf_exit_popup_dismissed";

const ExitIntentPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try { if (sessionStorage.getItem(KEY)) return; } catch {}
    let armed = false;
    const arm = setTimeout(() => { armed = true; }, 8000);
    const onLeave = (e: MouseEvent) => {
      if (!armed) return;
      if (e.clientY <= 0 && e.relatedTarget === null) {
        setOpen(true);
        try { sessionStorage.setItem(KEY, "1"); } catch {}
        document.removeEventListener("mouseout", onLeave);
      }
    };
    document.addEventListener("mouseout", onLeave);
    return () => { clearTimeout(arm); document.removeEventListener("mouseout", onLeave); };
  }, []);

  const close = () => setOpen(false);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] grid place-items-center bg-[hsl(var(--navy-deep))/0.7] backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-[hsl(var(--navy))] via-[hsl(var(--navy-soft))] to-[hsl(var(--royal))/0.6] p-8 text-white shadow-[var(--shadow-elev)] md:p-10"
          >
            <button onClick={close} aria-label="Fechar" className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-white/5 text-white/80 transition hover:bg-white/15">
              <X className="h-4 w-4" />
            </button>
            <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[hsl(var(--gold))/0.4] blur-3xl" />
            <span className="relative pill-gold"><Sparkles className="h-3 w-3" /> Antes de você ir...</span>
            <h3 className="relative mt-4 text-2xl font-extrabold leading-tight md:text-3xl">
              Simule grátis e descubra <span className="text-gold-gradient">a melhor oferta</span> pra você
            </h3>
            <p className="relative mt-3 text-sm text-white/75">
              Sem compromisso. Resposta em minutos com taxas a partir de <strong className="text-white">1,15% a.m.</strong>
            </p>
            <div className="relative mt-6 flex flex-wrap gap-3">
              <Link to="/contato" onClick={close} className="btn-gold">
                Quero simular agora <ArrowRight className="h-4 w-4" />
              </Link>
              <button onClick={close} className="btn-ghost">Agora não</button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentPopup;
