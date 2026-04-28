import { useMemo, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Lock,
  Sparkles,
} from "lucide-react";

const formatBRL = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 2 });

type Props = {
  variant?: "card" | "page";
};

const SimulatorCard = ({ variant = "card" }: Props) => {
  const [amount, setAmount] = useState(15000);
  const [installments, setInstallments] = useState(36);

  const monthly = useMemo(() => {
    const rate = 0.0149;
    const factor =
      (rate * Math.pow(1 + rate, installments)) / (Math.pow(1 + rate, installments) - 1);
    return amount * factor;
  }, [amount, installments]);

  const isPage = variant === "page";

  return (
    <div
      data-anim="scale-in"
      className={`relative rounded-[32px] border border-white bg-white/95 p-7 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] backdrop-blur-xl ${
        isPage ? "md:p-10" : ""
      }`}
    >
      <div
        className="pointer-events-none absolute inset-x-6 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, hsl(var(--brand-gold)), transparent)" }}
        aria-hidden="true"
      />
      <div
        className="absolute -top-3 left-7 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-gold-foreground shadow-[var(--shadow-gold)]"
        style={{ background: "var(--gradient-gold)" }}
      >
        <Sparkles className="h-3 w-3" />
        Simulador grátis
      </div>

      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className={`font-bold text-foreground ${isPage ? "text-2xl" : "text-xl"}`}>
            Simule seu empréstimo
          </h3>
          <p className="mt-1 text-xs text-foreground/55">
            Em 30 segundos você tem sua resposta.
          </p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-1 text-[10px] font-bold text-emerald-700">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Online
        </span>
      </div>

      <div className="mt-6">
        <label className="text-[11px] font-semibold uppercase tracking-wider text-foreground/60">
          Quanto você precisa?
        </label>
        <div className="mt-1 text-[32px] font-bold leading-none text-foreground">
          {formatBRL(amount)}
        </div>
        <input
          type="range"
          min={1000}
          max={50000}
          step={500}
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          aria-label="Valor do empréstimo"
          className="mt-3 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-foreground/10 accent-brand-gold"
          style={{
            background: `linear-gradient(to right, hsl(var(--brand-gold)) 0%, hsl(var(--brand-gold)) ${
              ((amount - 1000) / 49000) * 100
            }%, hsl(30 10% 90%) ${((amount - 1000) / 49000) * 100}%, hsl(30 10% 90%) 100%)`,
          }}
        />
        <div className="mt-2 flex justify-between text-[10px] font-medium text-foreground/50">
          <span>R$ 1.000</span>
          <span>R$ 50.000</span>
        </div>
      </div>

      <div className="mt-5">
        <label className="text-[11px] font-semibold uppercase tracking-wider text-foreground/60">
          Em quantas parcelas?
        </label>
        <div className="relative mt-2">
          <select
            value={installments}
            onChange={(e) => setInstallments(Number(e.target.value))}
            className="w-full appearance-none rounded-xl border border-foreground/15 bg-[hsl(40_30%_98%)] px-4 py-3 pr-10 text-sm font-semibold text-foreground transition-colors focus:border-brand-gold focus:outline-none"
          >
            {[12, 24, 36, 48, 60].map((n) => (
              <option key={n} value={n}>
                {n}x mensais
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/50" />
        </div>
      </div>

      <div className="relative mt-6 overflow-hidden rounded-2xl border border-brand-gold/25 bg-gradient-to-br from-[hsl(40_70%_94%)] to-[hsl(38_60%_88%)] p-4">
        <div
          className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-40"
          style={{ background: "radial-gradient(circle, hsl(var(--brand-gold) / 0.4), transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="relative flex items-center justify-between">
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-wider text-foreground/60">
              Parcela estimada
            </div>
            <div className="mt-1 text-[26px] font-bold leading-none text-foreground">
              {formatBRL(monthly)}
            </div>
            <div className="mt-1.5 inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700">
              <CheckCircle2 className="h-3 w-3" />
              Cabe no seu bolso
            </div>
          </div>
          <div className="h-12 w-px bg-foreground/10" />
          <div className="text-right">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-foreground/60">
              Taxa a partir de
            </div>
            <div className="mt-1 text-[26px] font-bold leading-none text-brand-gold">
              1,49<span className="text-xs">% a.m.</span>
            </div>
            <div className="mt-1.5 text-[10px] font-semibold text-foreground/55">
              CET sob consulta
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl py-4 text-[15px] font-bold text-brand-gold-foreground shadow-[var(--shadow-gold)] transition-all hover:scale-[1.02] hover:brightness-110"
        style={{ background: "var(--gradient-gold)" }}
      >
        Quero esse empréstimo
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>

      <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] font-medium text-foreground/55">
        <Lock className="h-3 w-3" />
        Simulação 100% gratuita · Não afeta seu score
      </div>
    </div>
  );
};

export default SimulatorCard;