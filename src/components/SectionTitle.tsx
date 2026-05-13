import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

const SectionTitle = ({ eyebrow, title, subtitle, align = "center", light, className }: Props) => (
  <div
    className={cn(
      "max-w-3xl",
      align === "center" ? "mx-auto text-center" : "text-left",
      className
    )}
  >
    {eyebrow && (
      <span className={light ? "pill-light" : "pill"}>{eyebrow}</span>
    )}
    <h2
      className={cn(
        "mt-4 text-3xl font-extrabold leading-[1.1] sm:text-4xl md:text-5xl",
        light ? "text-white" : "text-foreground"
      )}
    >
      {title}
    </h2>
    {subtitle && (
      <p className={cn("mt-5 text-base md:text-lg", light ? "text-white/95" : "text-muted-foreground")}>
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionTitle;