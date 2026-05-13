import { memo } from "react";

export type Step = { title: string; text: string };

const StepTimeline = ({ steps }: { steps: Step[] }) => {
  return (
    <div className="relative">
      {/* Desktop horizontal line */}
      <div className="absolute top-12 left-0 right-0 hidden h-0.5 bg-white/10 lg:block" aria-hidden="true" />
      
      <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
        {steps.map((s, i) => (
          <li key={i} className="relative">
            <div className="group flex flex-col">
              <div 
                className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-[hsl(var(--gold-soft))] shadow-xl transition-all group-hover:bg-[hsl(var(--gold-soft))] group-hover:text-navy-deep"
                aria-hidden="true"
              >
                <span className="text-2xl font-black italic">{i + 1}</span>
              </div>
              <div className="card-soft p-8 h-full flex-1">
                <h3 className="text-lg font-black text-white">{s.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/60 font-medium">{s.text}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default memo(StepTimeline);
