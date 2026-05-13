import { ReactNode, memo } from "react";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
  id?: string;
};

const SectionTitle = ({ eyebrow, title, subtitle, align = "center", light, className, id }: Props) => (
  <div
    id={id}
    className={cn(
      "max-w-4xl",
      align === "center" ? "mx-auto text-center" : "text-left",
      className
    )}
  >
    {eyebrow && (
      <span className={light ? "pill-gold" : "pill"}>{eyebrow}</span>
    )}
    <h2
      className={cn(
        "mt-6 text-3xl font-black leading-[1.1] sm:text-4xl md:text-6xl tracking-tighter",
        light ? "text-white" : "text-foreground"
      )}
    >
      {title}
    </h2>
     {subtitle && (
       <p className={cn(
         "mt-6 text-lg md:text-xl leading-relaxed max-w-2xl",
         align === "center" && "mx-auto",
         light ? "text-white/60 font-medium" : "text-slate-600 font-medium"
       )}>
         {subtitle}
       </p>
     )}
  </div>
);

export default memo(SectionTitle);
