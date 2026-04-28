import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  srcSet?: string;
  sizes?: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  /** Posição do object (ex: "60% center") */
  objectPosition?: string;
  /** Variantes de overlay */
  overlay?: "dark-bottom" | "dark-left" | "dark-radial" | "soft" | "none";
  /** Acrescenta um glow dourado no canto */
  glow?: boolean;
  /** Borda dourada sutil */
  bordered?: boolean;
  /** Conteúdo posicionado por cima */
  children?: ReactNode;
  /** Atributos extras pra <img> */
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
  width?: number;
  height?: number;
};

const overlays: Record<NonNullable<Props["overlay"]>, string> = {
  "dark-bottom":
    "bg-[linear-gradient(180deg,transparent_30%,hsl(30_18%_7%/0.85)_100%)]",
  "dark-left":
    "bg-[linear-gradient(95deg,hsl(30_22%_5%/0.95)_0%,hsl(30_22%_5%/0.7)_35%,transparent_100%)]",
  "dark-radial":
    "bg-[radial-gradient(ellipse_70%_55%_at_30%_50%,hsl(30_22%_5%/0.85),transparent_75%)]",
  soft:
    "bg-[linear-gradient(180deg,transparent_55%,hsl(0_0%_100%/0.55)_100%)]",
  none: "",
};

export const ImageFrame = ({
  src,
  srcSet,
  sizes,
  alt,
  className,
  imgClassName,
  objectPosition = "center",
  overlay = "dark-bottom",
  glow = false,
  bordered = false,
  children,
  loading = "lazy",
  fetchPriority,
  width,
  height,
}: Props) => (
  <div
    className={cn(
      "relative overflow-hidden",
      bordered && "ring-1 ring-brand-gold/25",
      className
    )}
  >
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      loading={loading}
      decoding="async"
      fetchPriority={fetchPriority}
      width={width}
      height={height}
      className={cn(
        "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105",
        imgClassName
      )}
      style={{ objectPosition }}
    />
    <div className={cn("absolute inset-0", overlays[overlay])} aria-hidden />
    {glow && (
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(circle, hsl(35 85% 58% / 0.55), transparent 70%)",
        }}
        aria-hidden
      />
    )}
    {/* Subtle film grain on top for premium feel */}
    <div
      className="bg-noise pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
      aria-hidden
    />
    {children && <div className="relative z-10">{children}</div>}
  </div>
);
