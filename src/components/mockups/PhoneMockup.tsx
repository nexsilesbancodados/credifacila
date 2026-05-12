import { ArrowDownLeft, ArrowUpRight, CreditCard, QrCode, Receipt, Wallet } from "lucide-react";
import Logo from "../Logo";

const PhoneMockup = () => (
  <div className="relative mx-auto w-[300px]">
    <div className="absolute -inset-8 rounded-[3rem] bg-[hsl(var(--royal))/0.3] blur-3xl" />
    <div className="relative rounded-[2.5rem] border-[10px] border-[hsl(var(--navy-deep))] bg-[hsl(var(--navy-deep))] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
      <div className="absolute left-1/2 top-1.5 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-[hsl(var(--navy-deep))]" />
      <div className="overflow-hidden rounded-[1.7rem] bg-gradient-to-b from-white to-[hsl(var(--gray-50))]">
        {/* App header */}
        <div className="bg-gradient-to-br from-[hsl(var(--navy-deep))] to-[hsl(var(--royal))] px-5 pb-7 pt-9 text-white">
          <div className="flex items-center justify-between">
            <div className="rounded-lg bg-white/95 px-2 py-1">
              <Logo className="h-4" />
            </div>
            <span className="text-[10px] text-white/70">Conta Luri</span>
          </div>
          <p className="mt-5 text-[10px] uppercase tracking-wider text-white/70">Saldo disponível</p>
          <p className="mt-1 text-2xl font-extrabold tabular-nums">R$ 12.480,55</p>
          <div className="mt-4 grid grid-cols-4 gap-2 text-center text-[10px] font-semibold">
            {[
              { I: QrCode, l: "Pix" },
              { I: Receipt, l: "Boletos" },
              { I: ArrowUpRight, l: "Enviar" },
              { I: CreditCard, l: "Cartão" },
            ].map(({ I, l }) => (
              <div key={l} className="flex flex-col items-center gap-1">
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/15">
                  <I className="h-4 w-4" />
                </div>
                {l}
              </div>
            ))}
          </div>
        </div>

        {/* Transactions */}
        <div className="space-y-2 p-4">
          <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Movimentações</p>
          {[
            { I: ArrowDownLeft, name: "Pix recebido", v: "+R$ 1.250,00", color: "emerald" },
            { I: Wallet, name: "Pagamento", v: "-R$ 320,00", color: "rose" },
            { I: ArrowUpRight, name: "Transferência", v: "-R$ 480,00", color: "rose" },
          ].map((t, i) => (
            <div key={i} className="flex items-center justify-between rounded-xl border border-border bg-white p-2.5">
              <div className="flex items-center gap-2.5">
                <div className={`grid h-8 w-8 place-items-center rounded-lg ${t.color === "emerald" ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"}`}>
                  <t.I className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-bold">{t.name}</p>
                  <p className="text-[10px] text-muted-foreground">Hoje</p>
                </div>
              </div>
              <p className={`text-xs font-extrabold ${t.color === "emerald" ? "text-emerald-600" : "text-rose-600"}`}>{t.v}</p>
            </div>
          ))}

          <div className="mt-3 rounded-xl bg-gradient-to-br from-[hsl(var(--gold-soft))] to-[hsl(var(--gold))] p-3 text-[hsl(var(--navy-deep))]">
            <p className="text-[10px] font-bold uppercase tracking-wider opacity-80">Cartão virtual</p>
            <p className="font-extrabold">•••• 4218</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PhoneMockup;