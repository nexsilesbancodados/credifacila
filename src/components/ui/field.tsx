import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type FieldProps = {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: ReactNode;
};

export const Field = ({ label, hint, error, required, className, children }: FieldProps) => (
  <label className={cn("flex flex-col gap-1.5", className)}>
    {label && (
      <span className="text-[11px] font-semibold uppercase tracking-wider text-foreground/60">
        {label}
        {required && <span className="text-brand-gold"> *</span>}
      </span>
    )}
    {children}
    {hint && !error && <span className="text-[11px] text-foreground/55">{hint}</span>}
    {error && <span className="text-[11px] font-medium text-destructive">{error}</span>}
  </label>
);

const inputBase =
  "w-full rounded-xl border border-foreground/15 bg-white px-4 py-3 text-sm font-medium text-foreground transition-all placeholder:text-foreground/40 focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/30";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input ref={ref} className={cn(inputBase, className)} {...props} />
  )
);
Input.displayName = "Input";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea ref={ref} className={cn(inputBase, "min-h-[100px] resize-y leading-relaxed", className)} {...props} />
  )
);
Textarea.displayName = "Textarea";
