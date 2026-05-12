import { ShieldCheck, Check } from "lucide-react";
import Logo from "../Logo";

const BoletoMockup = () => (
  <div className="relative mx-auto w-full max-w-md">
    <div className="absolute -inset-6 rounded-[2rem] bg-[hsl(var(--royal))/0.25] blur-3xl" />
    <div className="relative rounded-3xl border border-white/15 bg-white/95 p-5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)]">
      <div className="flex items-center justify-between">
        <div className="rounded-xl bg-white px-2 py-1 ring-1 ring-border">
          <Logo className="h-5" />
        </div>
        <span className="pill-gold inline-flex items-center gap-1.5"><ShieldCheck className="h-3 w-3" /> Garantido</span>
      </div>
      {/* Boleto */}
      <div className="mt-5 rounded-2xl border border-border p-4">
        <div className="flex items-center justify-between border-b border-dashed border-border pb-3">
          <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Cobrança</p>
          <p className="text-[10px] font-bold text-[hsl(var(--royal))]">Vence em 7 dias</p>
        </div>
        <p className="mt-3 text-[10px] uppercase text-muted-foreground">Valor</p>
        <p className="text-2xl font-extrabold">R$ 4.820,00</p>
        {/* barcode-style bars (no numbers) */}
        <div className="mt-3 flex h-10 items-stretch gap-[2px]">
          {Array.from({ length: 60 }).map((_, i) => (
            <div key={i} className="bg-[hsl(var(--navy-deep))]" style={{ width: i % 3 === 0 ? 3 : 1 }} />
          ))}
        </div>
        <div className="mt-3 flex items-center gap-2 rounded-lg bg-emerald-50 p-2 text-[11px] font-bold text-emerald-700">
          <Check className="h-3.5 w-3.5" /> Recebimento garantido
        </div>
      </div>
      {/* Mini chart */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-border p-3">
          <p className="text-[10px] font-semibold uppercase text-muted-foreground">Inadimplência</p>
          <p className="mt-1 text-lg font-extrabold text-emerald-600">-72%</p>
        </div>
        <div className="rounded-xl border border-border p-3">
          <p className="text-[10px] font-semibold uppercase text-muted-foreground">Previsibilidade</p>
          <p className="mt-1 text-lg font-extrabold text-[hsl(var(--royal))]">+98%</p>
        </div>
      </div>
    </div>
  </div>
);

export default BoletoMockup;