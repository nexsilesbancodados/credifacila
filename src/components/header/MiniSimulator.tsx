import { Link } from "react-router-dom";
import { ChevronRight, ShieldCheck } from "lucide-react";
import { computeMonthly, formatBRL } from "@/config/site";

const DEFAULT_AMOUNT = 15_000;
const DEFAULT_INSTALLMENTS = 36;

const MiniSimulator = () => {
  const monthly = computeMonthly(DEFAULT_AMOUNT, DEFAULT_INSTALLMENTS);
  return (
    <div className="pointer-events-auto absolute right-6 top-1/2 z-10 hidden w-[280px] -translate-y-1/2 lg:block">
      <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[hsl(30_22%_5%)]/85 p-5 shadow-[0_30px_80px_-20px_hsl(30_30%_4%/0.7)] backdrop-blur-xl">
        <div
          className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-50"
          style={{
            background:
              "radial-gradient(circle, hsl(38 90% 55% / 0.4), transparent 70%)",
          }}
          aria-hidden
        />
        <div className="relative">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-emerald-300">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/70" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Ao vivo
            </span>
            <span className="text-[9px] font-semibold uppercase tracking-wider text-white/50">
              Simulador
            </span>
          </div>

          <div className="mt-4">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-white/50">
              Você recebe
            </div>
            <div className="mt-1 font-display text-[28px] font-bold leading-none text-white">
              {formatBRL(DEFAULT_AMOUNT)}
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.04] p-3">
            <div className="flex items-end justify-between">
              <div>
                <div className="text-[9px] font-semibold uppercase tracking-wider text-white/50">
                  Parcela
                </div>
                <div className="font-display text-base font-bold leading-tight text-white">
                  {formatBRL(monthly).replace("R$ ", "R$ ")}
                </div>
                <div className="text-[10px] text-white/50">em {DEFAULT_INSTALLMENTS}x</div>
              </div>
              <div className="text-right">
                <div className="text-[9px] font-semibold uppercase tracking-wider text-white/50">
                  Taxa
                </div>
                <div className="font-display text-base font-bold leading-tight text-brand-gold">
                  1,49<span className="text-[10px]">%</span>
                </div>
                <div className="text-[10px] text-white/50">a.m.</div>
              </div>
            </div>
          </div>

          <Link
            to="/simular"
            className="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 text-xs font-bold text-brand-gold-foreground shadow-[var(--shadow-gold)] transition-all hover:scale-[1.02] hover:brightness-110"
            style={{ background: "var(--gradient-gold)" }}
          >
            Simular agora
            <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>

          <div className="mt-3 flex items-center justify-center gap-1.5 text-[9px] font-medium text-white/50">
            <ShieldCheck className="h-3 w-3 text-brand-gold" />
            Não afeta seu score
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniSimulator;
