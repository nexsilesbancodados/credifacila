import { ArrowUpRight, CheckCircle2, ShieldCheck, Wallet } from "lucide-react";
import Logo from "../Logo";

const DashboardMockup = () => (
  <div className="relative mx-auto w-full max-w-md">
    {/* Glow */}
    <div className="absolute -inset-6 rounded-[2rem] bg-[hsl(var(--royal))/0.35] blur-3xl" />
    {/* Main card */}
    <div className="relative rounded-3xl border border-white/15 bg-white/95 p-5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)] backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="rounded-xl bg-white px-2 py-1 ring-1 ring-border">
            <Logo className="h-5" />
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[hsl(var(--royal))]">Painel</span>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" /> ao vivo
        </span>
      </div>

      <div className="mt-5 rounded-2xl bg-gradient-to-br from-[hsl(var(--navy-deep))] to-[hsl(var(--royal))] p-5 text-white">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-white/70">Crédito aprovado</p>
        <p className="mt-2 text-3xl font-extrabold tabular-nums">R$ 24.500,00</p>
        <div className="mt-3 flex items-center gap-2 text-xs text-white/85">
          <CheckCircle2 className="h-4 w-4 text-[hsl(var(--gold-soft))]" />
          Liberado em até 2h úteis
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        {[
          { label: "Parcela", value: "R$ 612", Icon: Wallet },
          { label: "Taxa", value: "1,15%", Icon: ArrowUpRight },
          { label: "Seguro", value: "100%", Icon: ShieldCheck },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border border-border p-3">
            <s.Icon className="h-4 w-4 text-[hsl(var(--royal))]" />
            <p className="mt-2 text-[10px] font-semibold uppercase text-muted-foreground">{s.label}</p>
            <p className="text-sm font-extrabold">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-xl border border-border p-4">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-semibold uppercase text-muted-foreground">Histórico</p>
          <p className="text-[11px] font-bold text-emerald-600">+18,4%</p>
        </div>
        <div className="mt-3 flex h-16 items-end gap-1.5">
          {[35, 55, 40, 70, 50, 78, 62, 90, 72, 95].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-md bg-gradient-to-t from-[hsl(var(--royal))] to-[hsl(var(--sky))]"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    </div>

    {/* Floating chips */}
    <div className="absolute -left-4 top-16 hidden rounded-2xl border border-white/15 bg-white p-3 shadow-xl anim-floaty md:block">
      <div className="flex items-center gap-2">
        <div className="grid h-8 w-8 place-items-center rounded-full bg-[hsl(var(--gold))/0.15]">
          <ShieldCheck className="h-4 w-4 text-[hsl(var(--gold))]" />
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Seguro</p>
          <p className="text-xs font-bold">SSL & 2FA</p>
        </div>
      </div>
    </div>
    <div className="absolute -right-4 bottom-16 hidden rounded-2xl border border-white/15 bg-white p-3 shadow-xl anim-floaty md:block" style={{ animationDelay: "1.5s" }}>
      <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Aprovação</p>
      <p className="text-xs font-extrabold text-emerald-600">98,4% rápida</p>
    </div>
  </div>
);

export default DashboardMockup;