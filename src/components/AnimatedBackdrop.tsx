import { memo } from "react";

/**
 * Corporate-elegant animated backdrop.
 * Two soft gold orbs that drift slowly (respects prefers-reduced-motion via CSS media query).
 * Pure decoration — pointer-events disabled and marked aria-hidden.
 */
type Variant = "default" | "dark" | "soft";

const paletteByVariant: Record<Variant, { primary: string; secondary: string; opacity: number }> = {
  default: {
    primary: "hsl(199 90% 60% / 0.22)",
    secondary: "hsl(198 80% 70% / 0.18)",
    opacity: 1,
  },
  dark: {
    primary: "hsl(199 90% 55% / 0.18)",
    secondary: "hsl(198 85% 65% / 0.12)",
    opacity: 1,
  },
  soft: {
    primary: "hsl(199 85% 62% / 0.14)",
    secondary: "hsl(198 80% 72% / 0.10)",
    opacity: 1,
  },
};

const AnimatedBackdrop = memo(({ variant = "default" }: { variant?: Variant }) => {
  const { primary, secondary, opacity } = paletteByVariant[variant];
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden motion-reduce:hidden"
      style={{ opacity }}
    >
      <span
        className="absolute -top-24 left-[-6%] h-[420px] w-[420px] rounded-full blur-3xl animate-float-slow"
        style={{ background: `radial-gradient(circle, ${primary}, transparent 65%)` }}
      />
      <span
        className="absolute bottom-[-10%] right-[-8%] h-[520px] w-[520px] rounded-full blur-3xl animate-drift-slow"
        style={{ background: `radial-gradient(circle, ${secondary}, transparent 65%)` }}
      />
    </div>
  );
});

AnimatedBackdrop.displayName = "AnimatedBackdrop";
export default AnimatedBackdrop;