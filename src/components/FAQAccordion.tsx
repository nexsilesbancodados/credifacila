import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type FAQ = { q: string; a: string };

 const FAQAccordion = ({ items, dark }: { items: FAQ[]; dark?: boolean }) => {
   const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
           <div
             key={i}
             className={cn(
               "overflow-hidden rounded-2xl border transition-all duration-300",
               dark
                 ? "border-white/15 bg-white/5 text-white hover:bg-white/10"
                 : "border-border bg-white text-slate-900 shadow-sm hover:shadow-md"
             )}
           >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
               <span className={cn("text-sm font-bold md:text-base", dark && "text-white")}>{it.q}</span>
               <ChevronDown
                 className={cn(
                   "h-5 w-5 shrink-0 transition-transform",
                   dark ? "text-[hsl(var(--gold-soft))]" : "text-[hsl(var(--royal))]",
                   isOpen && "rotate-180"
                 )}
               />
            </button>
            <div className={cn("grid transition-all duration-300", isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
              <div className="overflow-hidden">
                 <p
                   className={cn(
                     "px-5 pb-5 text-sm leading-relaxed font-medium",
                     dark ? "text-white/80" : "text-slate-700"
                   )}
                 >
                   {it.a}
                 </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;