import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

const NOTIFICATIONS = [
  { name: "Mariana S.", location: "São Paulo, SP", action: "solicitou R$ 25.000 em consignado", time: "agora" },
  { name: "Carlos R.", location: "Rio de Janeiro, RJ", action: "antecipou R$ 42.000 em recebíveis", time: "há 2 min" },
  { name: "Juliana P.", location: "Belo Horizonte, MG", action: "abriu conta digital Luri", time: "há 5 min" },
  { name: "Felipe A.", location: "Curitiba, PR", action: "solicitou boleto garantido", time: "há 8 min" },
  { name: "Ana L.", location: "Salvador, BA", action: "investiu R$ 100.000", time: "há 12 min" },
];

const SocialProofToast = () => {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const show = () => {
      setCurrent((prev) => (prev + 1) % NOTIFICATIONS.length);
      setVisible(true);
      setTimeout(() => setVisible(false), 5000);
    };
    const initial = setTimeout(show, 4000);
    const interval = setInterval(show, 12000);
    return () => { clearTimeout(initial); clearInterval(interval); };
  }, []);

  const item = NOTIFICATIONS[current];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: -60, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -60, scale: 0.9 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-24 left-4 z-50 max-w-xs sm:bottom-6 sm:left-6"
        >
          <div className="rounded-2xl border border-white/15 bg-[hsl(226_70%_9%/0.92)] p-4 shadow-[var(--shadow-elev)] backdrop-blur-xl">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[hsl(var(--royal))/0.3] to-[hsl(var(--sky))/0.3] text-[hsl(var(--gold-soft))]">
                <span className="text-xs font-bold">{item.name.split(" ").map(n => n[0]).join("")}</span>
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold text-white truncate">
                  <span className="text-[hsl(var(--gold-soft))]">{item.name}</span> {item.action}
                </p>
                <div className="mt-1 flex items-center gap-2 text-[11px] text-white/60">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> {item.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {item.time}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SocialProofToast;
