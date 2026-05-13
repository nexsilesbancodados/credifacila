import { useState, memo } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type FAQ = { q: string; a: string };

const FAQAccordionItem = memo(({ item, isOpen, onClick, dark }: { item: FAQ; isOpen: boolean; onClick: () => void; dark?: boolean }) => (
  <div
    className={cn(
      "overflow-hidden rounded-2xl border transition-all duration-300",
      dark
        ? "border-white/15 bg-white/5 text-white hover:bg-white/10"
        : "border-border bg-white text-slate-900 shadow-sm hover:shadow-md"
    )}
  >
    <button
      onClick={onClick}
      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      aria-expanded={isOpen}
    >
      <span className={cn("text-sm font-bold md:text-base", dark && "text-white")}>{item.q}</span>
      <ChevronDown
        className={cn(
          "h-5 w-5 shrink-0 transition-transform duration-300",
          dark ? "text-[hsl(var(--gold-soft))]" : "text-[hsl(var(--royal))]",
          isOpen && "rotate-180"
        )}
      />
    </button>
    <div className={cn("grid transition-all duration-300 ease-in-out", isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
      <div className="overflow-hidden">
        <p
          className={cn(
            "px-6 pb-6 text-sm leading-relaxed font-medium",
            dark ? "text-white/70" : "text-slate-600"
          )}
        >
          {item.a}
        </p>
      </div>
    </div>
  </div>
));

const FAQAccordion = ({ items, dark }: { items: FAQ[]; dark?: boolean }) => {
  const [open, setOpen] = useState<number | null>(null);
  
  return (
    <div className="space-y-4">
      {items.map((it, i) => (
        <FAQAccordionItem 
          key={i} 
          item={it} 
          isOpen={open === i} 
          dark={dark} 
          onClick={() => setOpen(open === i ? null : i)} 
        />
      ))}
    </div>
  );
};

export default memo(FAQAccordion);
