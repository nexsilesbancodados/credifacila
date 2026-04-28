import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  as?: "div" | "section" | "header" | "footer" | "main";
};

const sizes = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
  xl: "max-w-[1400px]",
};

export const Container = ({ children, className, size = "lg", as: Tag = "div" }: Props) => (
  <Tag className={cn("mx-auto w-full px-5 md:px-8 lg:px-10", sizes[size], className)}>{children}</Tag>
);

export const Section = ({
  children,
  id,
  className,
  ariaLabel,
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  ariaLabel?: string;
}) => (
  <section
    id={id}
    aria-label={ariaLabel}
    className={cn("relative w-full py-16 md:py-20", className)}
  >
    {children}
  </section>
);

export const Eyebrow = ({
  children,
  icon,
  variant = "light",
}: {
  children: ReactNode;
  icon?: ReactNode;
  variant?: "light" | "dark";
}) => (
  <span className={variant === "dark" ? "pill-eyebrow-dark" : "pill-eyebrow"}>
    {icon}
    {children}
  </span>
);

type SectionTitleProps = {
  eyebrow?: ReactNode;
  eyebrowIcon?: ReactNode;
  eyebrowVariant?: "light" | "dark";
  children: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  invert?: boolean;
};

export const SectionTitle = ({
  eyebrow,
  eyebrowIcon,
  eyebrowVariant = "light",
  children,
  description,
  align = "center",
  invert = false,
}: SectionTitleProps) => (
  <div
    data-anim="fade-up"
    className={cn(
      "max-w-3xl",
      align === "center" ? "mx-auto text-center" : "text-left"
    )}
  >
    {eyebrow && (
      <Eyebrow icon={eyebrowIcon} variant={eyebrowVariant}>
        {eyebrow}
      </Eyebrow>
    )}
    <h2
      className={cn(
        "text-3xl font-bold leading-[1.1] tracking-tight md:text-4xl lg:text-[46px]",
        invert ? "text-white" : "text-[hsl(30_20%_15%)]"
      )}
    >
      {children}
    </h2>
    {description && (
      <p
        className={cn(
          "mt-4 text-sm leading-relaxed md:text-base",
          align === "center" ? "mx-auto max-w-xl" : "max-w-2xl",
          invert ? "text-white/70" : "text-[hsl(30_15%_30%)]"
        )}
      >
        {description}
      </p>
    )}
  </div>
);
