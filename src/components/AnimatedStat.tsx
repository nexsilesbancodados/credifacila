import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type Stat = { value: string; label: string };

function useCountUp(target: string, duration = 2000) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
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

const AnimatedStat = ({ value, label }: Stat) => {
  const { ref, display } = useCountUp(value, 2200);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border border-white/15 bg-white/5 p-3 backdrop-blur-md"
    >
      <p className="text-2xl font-extrabold text-white" ref={ref}>
        {display}
      </p>
      <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/80">
        {label}
      </p>
    </motion.div>
  );
};

export default AnimatedStat;
