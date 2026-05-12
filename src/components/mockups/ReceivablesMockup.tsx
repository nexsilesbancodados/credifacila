import { TrendingUp, Wallet, Zap } from "lucide-react";
import Logo from "../Logo";

const ReceivablesMockup = () => (
  <div className="relative mx-auto w-full max-w-md">
    <div className="absolute -inset-6 rounded-[2rem] bg-[hsl(var(--sky))/0.3] blur-3xl" />
    <div className="relative rounded-3xl border border-white/15 bg-white/95 p-5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)]">
      <div className="flex items-center justify-between">
        <div className="rounded-xl bg-white px-2 py-1 ring-1 ring-border">
          <Logo className="h-5" />
        </div>
        <span className="pill">Empresarial</span>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-gradient-to-br from-[hsl(var(--royal))] to-[hsl(var(--sky))] p-4 text-white">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-white/80">Antecipado</p>
          <p className="mt-1 text-xl font-extrabold tabular-nums">R$ 184k</p>
          <Zap className="mt-2 h-4 w-4 text-[hsl(var(--gold-soft))]" />
        </div>
        <div className="rounded-2xl border border-border p-4">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">A receber</p>
          <p className="mt-1 text-xl font-extrabold tabular-nums">R$ 312k</p>
          <Wallet className="mt-2 h-4 w-4 text-[hsl(var(--royal))]" />
        </div>
      </div>
      <div className="mt-4 rounded-xl border border-border p-4">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-bold uppercase text-muted-foreground">Recebíveis 90d</p>
          <p className="text-[11px] font-bold text-emerald-600 inline-flex items-center gap-1"><TrendingUp className="h-3 w-3" /> +24%</p>
        </div>
        <div className="mt-3 flex h-20 items-end gap-1.5">
          {[40, 55, 48, 70, 60, 78, 65, 85, 72, 92, 80, 98].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-[hsl(var(--navy))] to-[hsl(var(--royal))]" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
      <div className="mt-3 rounded-xl bg-emerald-50 p-3 text-xs font-semibold text-emerald-700">
        Liberação em até 24h após aprovação
      </div>
    </div>
  </div>
);

export default ReceivablesMockup;