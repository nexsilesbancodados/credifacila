import React, { useState, useEffect } from "react";
import { Calculator, Wallet, Calendar, TrendingDown, MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { whatsappLink } from "@/config/site";

const ConsignadoSimulator = () => {
  const [value, setValue] = useState(10000);
  const [months, setMonths] = useState(48);
  const [installment, setInstallment] = useState(0);
  const [total, setTotal] = useState(0);

  const rate = 0.0119; // 1.19% a.m.

  useEffect(() => {
    // Formula: PMT = PV * [i * (1 + i)^n] / [(1 + i)^n - 1]
    const pmt = (value * (rate * Math.pow(1 + rate, months))) / (Math.pow(1 + rate, months) - 1);
    setInstallment(pmt);
    setTotal(pmt * months);
  }, [value, months]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(val);
  };

  return (
    <section id="simulador" className="relative py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold">Simulador Online</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
              Simule seu crédito em <span className="text-gold-gradient">segundos</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Escolha o valor que você precisa e em quantas vezes deseja pagar.
              Nossa taxa é uma das menores do mercado, garantindo parcelas que cabem no seu bolso.
            </p>
            
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-brand-gold">
                  <TrendingDown className="h-5 w-5" />
                  <span className="font-bold">1,19% a.m.</span>
                </div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Taxa mínima</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-brand-gold">
                  <Calendar className="h-5 w-5" />
                  <span className="font-bold">Até 84x</span>
                </div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Prazo máximo</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-brand-gold">
                  <Wallet className="h-5 w-5" />
                  <span className="font-bold">24 horas</span>
                </div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Liberação rápida</span>
              </div>
            </div>
          </div>

          <Card className="p-8 border-brand-gold/20 bg-card/50 backdrop-blur-xl relative overflow-hidden group">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-gold/10 blur-3xl" />
            
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-white/80">Quanto você precisa?</label>
                  <span className="text-xl font-display font-bold text-brand-gold">{formatCurrency(value)}</span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="150000"
                  step="500"
                  value={value}
                  onChange={(e) => setValue(Number(e.target.value))}
                  className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-gold"
                />
                <div className="flex justify-between text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                  <span>R$ 1.000</span>
                  <span>R$ 150.000</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-white/80">Em quantos meses?</label>
                  <span className="text-xl font-display font-bold text-brand-gold">{months}x</span>
                </div>
                <input
                  type="range"
                  min="6"
                  max="84"
                  step="6"
                  value={months}
                  onChange={(e) => setMonths(Number(e.target.value))}
                  className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-gold"
                />
                <div className="flex justify-between text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                  <span>6 meses</span>
                  <span>84 meses</span>
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Parcela mensal estimada:</span>
                  <span className="text-2xl font-display font-bold text-white">{formatCurrency(installment)}</span>
                </div>
                <div className="flex justify-between items-center opacity-60">
                  <span className="text-xs text-muted-foreground">Total a pagar:</span>
                  <span className="text-sm font-medium text-white">{formatCurrency(total)}</span>
                </div>
              </div>

              <a 
                href={whatsappLink(`Olá! Simulei um consignado de ${formatCurrency(value)} em ${months}x e gostaria de prosseguir.`)}
                className="btn-gold w-full flex items-center justify-center gap-2 group"
              >
                <Calculator className="h-5 w-5" />
                Contratar Agora
                <MessageCircle className="h-4 w-4 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
              </a>
              
              <p className="text-[10px] text-center text-muted-foreground leading-tight">
                *Simulação baseada na taxa mínima de 1,19% a.m. Sujeito a análise de margem e convênio.
                O valor final pode variar de acordo com o banco escolhido.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ConsignadoSimulator;