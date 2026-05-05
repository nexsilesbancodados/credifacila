import React, { useState, useEffect } from "react";
import { ShieldCheck, TrendingDown, Info, AlertTriangle, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { whatsappLink } from "@/config/site";

const BoletoGarantidoCalculator = () => {
  const [revenue, setRevenue] = useState(100000);
  const [inadimplencia, setInadimplencia] = useState(5);
  const [costWithGarantia, setCostWithGarantia] = useState(0);
  const [lossWithoutGarantia, setLossWithoutGarantia] = useState(0);

  const garantiaRate = 0.025; // 2.5% fixed for the sake of example

  useEffect(() => {
    const loss = revenue * (inadimplencia / 100);
    const cost = revenue * garantiaRate;
    setLossWithoutGarantia(loss);
    setCostWithGarantia(cost);
  }, [revenue, inadimplencia]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="calculadora" className="relative py-20 bg-card/20 border-y border-brand-gold/10">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold">Segurança Financeira</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
              Quanto custa a <span className="text-gold-gradient">inadimplência</span> para você?
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Compare o custo de perder pagamentos com o investimento em ter 100% de garantia.
              Com o Boleto Garantido, você elimina o risco e foca apenas em vender mais.
            </p>
            
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-red-500 shrink-0" />
                <p className="text-sm text-muted-foreground">
                  <strong className="text-white block">Sem Garantia:</strong> Sua empresa assume todo o prejuízo, gasta com cobrança e tem fluxo de caixa instável.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-6 w-6 text-brand-gold shrink-0" />
                <p className="text-sm text-muted-foreground">
                  <strong className="text-white block">Com Credifácil:</strong> 100% do valor no bolso no dia do vencimento. Sem sustos, sem cobrança manual.
                </p>
              </div>
            </div>
          </div>

          <Card className="p-8 border-brand-gold/20 bg-card/50 backdrop-blur-xl">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-white/80">Faturamento mensal no boleto</label>
                  <span className="text-xl font-display font-bold text-brand-gold">{formatCurrency(revenue)}</span>
                </div>
                <input
                  type="range"
                  min="10000"
                  max="1000000"
                  step="10000"
                  value={revenue}
                  onChange={(e) => setRevenue(Number(e.target.value))}
                  className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-gold"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-white/80">Taxa de inadimplência (%)</label>
                  <span className="text-xl font-display font-bold text-brand-gold">{inadimplencia}%</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  step="0.5"
                  value={inadimplencia}
                  onChange={(e) => setInadimplencia(Number(e.target.value))}
                  className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-gold"
                />
              </div>

              <div className="pt-6 border-t border-white/5 space-y-4">
                 <div className="flex justify-between items-center p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-red-500/70 block">Prejuízo Estimado</span>
                    <span className="text-xl font-display font-bold text-white">{formatCurrency(lossWithoutGarantia)}</span>
                  </div>
                  <TrendingDown className="h-6 w-6 text-red-500/50" />
                </div>
                
                <div className="flex justify-between items-center p-4 rounded-xl bg-brand-gold/5 border border-brand-gold/10">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-brand-gold/70 block">Investimento Garantia</span>
                    <span className="text-xl font-display font-bold text-white">{formatCurrency(costWithGarantia)}</span>
                  </div>
                  <ShieldCheck className="h-6 w-6 text-brand-gold/50" />
                </div>
              </div>

              <a 
                href={whatsappLink(`Olá! Tenho um faturamento de ${formatCurrency(revenue)} e gostaria de saber mais sobre o Boleto Garantido.`)}
                className="btn-gold w-full flex items-center justify-center gap-2"
              >
                Eliminar Inadimplência
                <ArrowRight className="h-4 w-4" />
              </a>

              <div className="flex items-center gap-2 justify-center">
                <Info className="h-3 w-3 text-muted-foreground" />
                <p className="text-[10px] text-muted-foreground">
                  *Cálculo baseado em taxa média de 2,5%. Sujeito a análise de volume e perfil de clientes.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BoletoGarantidoCalculator;