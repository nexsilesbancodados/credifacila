import { memo } from "react";

/**
 * Corporate-elegant animated backdrop.
 * Two soft gold orbs that drift slowly (respects prefers-reduced-motion via CSS media query).
 * Pure decoration — pointer-events disabled and marked aria-hidden.
 */
type Variant = "default" | "dark" | "soft";

const paletteByVariant: Record<Variant, { primary: string; secondary: string; opacity: number }> = {
  default: {
    primary: "hsl(42 78% 60% / 0.22",
    secondary: "hsl(42 78% 60% / 0.18",
    opacity: 1,
  },
  dark: {
    primary: "hsl(42 78% 55% / 0.18",
    secondary: "hsl(42 78% 60% / 0.12",
    opacity: 1,
  },
  soft: {
    primary: "hsl(42 78% 60% / 0.14",
    secondary: "hsl(42 78% 60% / 0.10",
    opacity: 1,
  },
};

 const AnimatedBackdrop = memo(({ variant = "default" }: { variant?: Variant }) => {
   return null; // Removido para performance absoluta
 });

AnimatedBackdrop.displayName = "AnimatedBackdrop";
export default AnimatedBackdrop;