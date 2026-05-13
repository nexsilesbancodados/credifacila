import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Pixels to translate at full effect. Negative = move up. */
  amount?: number;
  className?: string;
};

/** Subtle parallax: translates content on Y as the element passes the viewport. */
const Parallax = ({ children, amount = 60, className = "" }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let raf = 0;
    const update = () => {
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // progress: -1 (below viewport) → 0 (centered) → 1 (above)
      const center = rect.top + rect.height / 2;
      const progress = (center - vh / 2) / (vh / 2 + rect.height / 2);
      const clamped = Math.max(-1, Math.min(1, progress));
      setOffset(-clamped * amount);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [amount]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div
        style={{ transform: `translate3d(0, ${offset}px, 0)` }}
        className="relative h-full w-full will-change-transform transition-transform duration-100 ease-out"
      >
        {children}
      </div>
    </div>
  );
};

export default Parallax;