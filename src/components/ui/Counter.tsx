import { useEffect, useRef, useState } from "react";

type Props = {
  /** Valor numérico final (ex: 50000) */
  value: number;
  /** Duração da animação em ms */
  duration?: number;
  /** Sufixo (ex: "+", "k", "%") */
  suffix?: string;
  /** Prefixo (ex: "R$", "+") */
  prefix?: string;
  /** Casas decimais */
  decimals?: number;
  /** Formatador customizado — recebe o número atual */
  format?: (n: number) => string;
  /** Trigger quando entra no viewport (default true) */
  whenVisible?: boolean;
  className?: string;
};

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export const Counter = ({
  value,
  duration = 1600,
  suffix = "",
  prefix = "",
  decimals = 0,
  format,
  whenVisible = true,
  className,
}: Props) => {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }

    const start = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      const t0 = performance.now();
      const tick = (t: number) => {
        const elapsed = t - t0;
        const progress = Math.min(1, elapsed / duration);
        setDisplay(value * easeOutCubic(progress));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    if (!whenVisible || !ref.current) {
      start();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            start();
            io.disconnect();
          }
        }
      },
      { threshold: 0.4 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [value, duration, whenVisible]);

  const text = format
    ? format(display)
    : `${prefix}${display.toLocaleString("pt-BR", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}${suffix}`;

  return (
    <span ref={ref} className={className} aria-label={`${prefix}${value}${suffix}`}>
      {text}
    </span>
  );
};
