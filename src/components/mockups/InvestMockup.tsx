import { TrendingUp, ShieldCheck } from "lucide-react";
import Logo from "../Logo";

const InvestMockup = () => (
  <div className="relative mx-auto w-full max-w-md">
    <div className="absolute -inset-6 rounded-[2rem] bg-[hsl(var(--gold))/0.3] blur-3xl" />
    <div className="relative rounded-3xl border border-white/15 bg-white/95 p-5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)]">
      <div className="flex items-center justify-between">
        <div className="rounded-xl bg-white px-2 py-1 ring-1 ring-border">
          <Logo className="h-5" />
        </div>
        <span className="pill-gold">Invista</span>
      </div>
      <div className="mt-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Rentabilidade estimada</p>
        <p className="mt-1 text-3xl font-extrabold text-foreground">14,2% <span className="text-base text-muted-foreground">a.a.</span></p>
      </div>
      {/* Line chart */}
      <div className="relative mt-4 h-32 rounded-xl border border-border bg-gradient-to-b from-[hsl(var(--gray-50))] to-white p-3">
        <svg viewBox="0 0 200 80" className="h-full w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="grad-invest" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="hsl(218 100% 50%)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="hsl(218 100% 50%)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,60 L25,55 L50,48 L75,40 L100,32 L125,28 L150,18 L175,12 L200,5 L200,80 L0,80 Z" fill="url(#grad-invest)" />
          <path d="M0,60 L25,55 L50,48 L75,40 L100,32 L125,28 L150,18 L175,12 L200,5" fill="none" stroke="hsl(218 100% 50%)" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {[
          { l: "Aporte", v: "R$ 50k" },
          { l: "Prazo", v: "24m" },
          { l: "Risco", v: "Médio" },
        ].map((s) => (
          <div key={s.l} className="rounded-xl border border-border p-2.5 text-center">
            <p className="text-[10px] font-semibold uppercase text-muted-foreground">{s.l}</p>
            <p className="text-sm font-extrabold">{s.v}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2 rounded-xl bg-[hsl(var(--royal))/0.06] p-3 text-xs font-semibold text-[hsl(var(--royal))]">
        <ShieldCheck className="h-4 w-4" /> Operação estruturada e auditada
        <TrendingUp className="ml-auto h-4 w-4" />
      </div>
    </div>
  </div>
);

export default InvestMockup;