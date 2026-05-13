import { LucideIcon } from "lucide-react";

export type Feature = { icon: LucideIcon; title: string; text?: string };

const FeatureGrid = ({ items, cols = 3 }: { items: Feature[]; cols?: 2 | 3 | 4 }) => {
  const colCls = { 2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "md:grid-cols-2 lg:grid-cols-4" }[cols];
  return (
    <div className={`grid gap-5 ${colCls}`}>
      {items.map((f, i) => (
        <div key={i} className="card-soft group p-6">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[hsl(var(--royal))/0.12] to-[hsl(var(--sky))/0.12] text-[hsl(var(--royal))] transition-transform group-hover:scale-110">
            <f.icon className="h-6 w-6" />
          </div>
          <h3 className="mt-4 text-base font-extrabold">{f.title}</h3>
          {f.text && <p className="mt-2 text-sm text-white/70">{f.text}</p>}
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;