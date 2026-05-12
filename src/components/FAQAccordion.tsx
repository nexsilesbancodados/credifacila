import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type FAQ = { q: string; a: string };

const FAQAccordion = ({ items }: { items: FAQ[] }) => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="overflow-hidden rounded-2xl border border-border bg-white">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="text-sm font-bold md:text-base">{it.q}</span>
              <ChevronDown className={cn("h-5 w-5 shrink-0 text-[hsl(var(--royal))] transition-transform", isOpen && "rotate-180")} />
            </button>
            <div className={cn("grid transition-all duration-300", isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{it.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;