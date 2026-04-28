import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "gold" | "outline" | "ghost-light" | "ghost-dark" | "soft";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  gold: "btn-gold",
  outline:
    "inline-flex items-center justify-center gap-2 rounded-2xl border border-brand-gold/50 bg-transparent text-brand-gold font-semibold transition-all hover:bg-brand-gold/10 hover:border-brand-gold",
  "ghost-light": "btn-ghost-light",
  "ghost-dark": "btn-ghost-dark",
  soft:
    "inline-flex items-center justify-center gap-2 rounded-2xl bg-white/80 px-5 py-3 text-sm font-semibold text-foreground shadow-sm transition-all hover:bg-white hover:shadow",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-4 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;
type LinkProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a"; href: string };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "gold", size = "md", className, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(variantClasses[variant], variant !== "gold" && sizeClasses[size], className)}
      {...props}
    >
      <span className="relative inline-flex items-center gap-2">{children}</span>
    </button>
  )
);
Button.displayName = "Button";

export const ButtonLink = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ variant = "gold", size = "md", className, children, as: _as, ...props }, ref) => (
    <a
      ref={ref}
      className={cn(variantClasses[variant], variant !== "gold" && sizeClasses[size], className)}
      {...props}
    >
      <span className="relative inline-flex items-center gap-2">{children}</span>
    </a>
  )
);
ButtonLink.displayName = "ButtonLink";
