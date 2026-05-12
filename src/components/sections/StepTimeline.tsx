export type Step = { title: string; text: string };

const StepTimeline = ({ steps }: { steps: Step[] }) => (
  <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
    {steps.map((s, i) => (
      <li key={i} className="relative card-soft p-6">
        <div className="flex items-baseline gap-3">
          <span className="text-gold-gradient text-4xl font-extrabold leading-none">0{i + 1}</span>
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Passo</span>
        </div>
        <h3 className="mt-3 text-lg font-extrabold">{s.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
      </li>
    ))}
  </ol>
);

export default StepTimeline;