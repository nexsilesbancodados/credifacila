import { useMemo, useState } from "react";
import Logo from "../Logo";

const fmt = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 0 });

const SimulatorMockup = () => {
  const [valor, setValor] = useState(15000);
  const [prazo, setPrazo] = useState(48);
  const parcela = useMemo(() => {
    const i = 0.0115; // 1,15% a.m.
    const p = (valor * i) / (1 - Math.pow(1 + i, -prazo));
    return p;
  }, [valor, prazo]);

  return (
    <div className="rounded-3xl border border-border bg-white p-6 shadow-[var(--shadow-elev)]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="rounded-lg bg-white px-2 py-1 ring-1 ring-border"><Logo className="h-5" /></div>
          <span className="pill">Simulador</span>
        </div>
        <span className="text-[11px] font-bold text-emerald-600">Taxa 1,15% a.m.</span>
      </div>

      <label className="form-label mt-6">Valor desejado</label>
      <div className="flex items-center justify-between rounded-xl bg-[hsl(var(--gray-50))] px-4 py-3">
        <span className="text-2xl font-extrabold tabular-nums">{fmt(valor)}</span>
        <span className="text-xs text-muted-foreground">R$ 1k – R$ 100k</span>
      </div>
      <input
        type="range" min={1000} max={100000} step={500}
        value={valor} onChange={(e) => setValor(Number(e.target.value))}
        className="mt-3 w-full accent-[hsl(var(--royal))]"
      />

      <label className="form-label mt-5">Prazo</label>
      <div className="grid grid-cols-4 gap-2">
        {[12, 24, 48, 72].map((p) => (
          <button
            key={p}
            onClick={() => setPrazo(p)}
            className={`rounded-xl border px-2 py-2 text-sm font-bold transition-all ${
              prazo === p
                ? "border-[hsl(var(--royal))] bg-[hsl(var(--royal))/0.08] text-[hsl(var(--royal))]"
                : "border-border hover:border-[hsl(var(--royal))/0.5]"
            }`}
          >
            {p}x
          </button>
        ))}
      </div>

      <div className="mt-6 rounded-2xl bg-gradient-to-br from-[hsl(var(--navy-deep))] to-[hsl(var(--royal))] p-5 text-white">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-white/70">Parcela estimada</p>
        <p className="mt-1 text-3xl font-extrabold tabular-nums">{fmt(parcela)}</p>
        <p className="mt-1 text-xs text-white/70">Em {prazo}x — sujeito a análise</p>
      </div>

      <button className="btn-primary mt-5 w-full">Simular agora</button>
    </div>
  );
};

export default SimulatorMockup;