import { useEffect, useRef, useState, memo } from "react";
import { motion, useInView } from "framer-motion";

type Stat = { value: string; label: string; prefix?: string };

function useCountUp(target: string, duration = 2000) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    const numeric = parseFloat(target.replace(/[^0-9.]/g, ""));
    const suffix = target.replace(/[0-9.]/g, "");
    const isFloat = target.includes(".");
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = numeric * eased;
      if (isFloat) {
        setDisplay(current.toFixed(2) + suffix);
      } else {
        setDisplay(Math.floor(current).toLocaleString("pt-BR") + suffix);
      }
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, target, duration]);

  return { ref, display };
}

const AnimatedStat = ({ value, label, prefix }: Stat) => {
  const { ref, display } = useCountUp(value, 2200);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
      aria-label={`${label}: ${prefix || ''}${value}`}
    >
      <div ref={ref} aria-hidden="true">
        <p className="text-2xl font-black text-white tracking-tighter">
          {prefix}{display}
        </p>
      </div>
      <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/50 mt-1" aria-hidden="true">
        {label}
      </p>
    </motion.div>
  );
}

export default memo(AnimatedStat);
