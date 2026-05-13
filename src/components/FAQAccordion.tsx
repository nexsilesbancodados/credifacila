import { useState, memo, useId } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type FAQ = { q: string; a: string };

const FAQAccordionItem = memo(({ item, isOpen, onClick, dark, id }: { item: FAQ; isOpen: boolean; onClick: () => void; dark?: boolean; id: string }) => (
  <div
    className={cn(
      "overflow-hidden rounded-2xl border transition-all duration-300",
      dark
        ? "border-white/15 bg-white/5 text-white hover:bg-white/10"
        : "border-border bg-white text-slate-900 shadow-sm hover:shadow-md"
    )}
  >
    <button
      id={`btn-${id}`}
      onClick={onClick}
      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--gold-soft))] focus-visible:ring-inset"
      aria-expanded={isOpen}
      aria-controls={`panel-${id}`}
    >
      <span className={cn("text-sm font-bold md:text-base", dark && "text-white")}>{item.q}</span>
      <ChevronDown
        className={cn(
          "h-5 w-5 shrink-0 transition-transform duration-300",
          dark ? "text-[hsl(var(--gold-soft))]" : "text-[hsl(var(--royal))]",
          isOpen && "rotate-180"
        )}
        aria-hidden="true"
      />
    </button>
    <div 
      id={`panel-${id}`}
      role="region"
      aria-labelledby={`btn-${id}`}
      className={cn("grid transition-all duration-300 ease-in-out", isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}
    >
      <div className="overflow-hidden">
        <p
          className={cn(
            "px-6 pb-6 text-sm leading-relaxed font-medium",
            dark ? "text-white/90" : "text-slate-600"
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
  const baseId = useId();
  
  return (
    <div className="space-y-4">
      {items.map((it, i) => (
        <FAQAccordionItem 
          key={i} 
          id={`${baseId}-${i}`}
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
