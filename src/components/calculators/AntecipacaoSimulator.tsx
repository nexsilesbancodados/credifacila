import React, { useState, useEffect } from "react";
import { Banknote, Percent, ArrowRight, Zap, Info } from "lucide-react";
import { Card } from "@/components/ui/card";
import { whatsappLink } from "@/config/site";

const AntecipacaoSimulator = () => {
  const [value, setValue] = useState(50000);
  const [days, setDays] = useState(30);
  const [netValue, setNetValue] = useState(0);
  const [cost, setCost] = useState(0);

  const baseRate = 0.015; // 1.5% fixed
  const adValorem = 0.005; // 0.5%

  useEffect(() => {
    const monthlyRate = 0.025; // 2.5% a.m.
    const dailyRate = monthlyRate / 30;
    const discount = value * (dailyRate * days) + (value * baseRate) + (value * adValorem);
    setCost(discount);
    setNetValue(value - discount);
  }, [value, days]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(val);
  };

  return (
    <section id="simulador" className="relative py-20 bg-card/20 border-y border-brand-gold/10">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold">Fluxo de Caixa</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
              Simule sua <span className="text-gold-gradient">antecipação</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Saiba quanto você recebe hoje ao antecipar suas vendas a prazo. 
              Sem taxas escondidas e com liberação em até 24 horas.
            </p>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <Zap className="h-5 w-5 text-brand-gold" />
                <div>
                  <h4 className="text-sm font-bold text-white">Liberação Expressa</h4>
                  <p className="text-xs text-muted-foreground">Crédito na conta em poucas horas após aprovação.</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <Percent className="h-5 w-5 text-brand-gold" />
                <div>
                  <h4 className="text-sm font-bold text-white">Taxas B2B</h4>
                  <p className="text-xs text-muted-foreground">Condições exclusivas para empresas com volume recorrente.</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="p-8 border-brand-gold/20 bg-card/50 backdrop-blur-xl relative">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-white/80">Valor das Notas/Duplicatas</label>
                  <span className="text-xl font-display font-bold text-brand-gold">{formatCurrency(value)}</span>
                </div>
                <input
                  type="range"
                  min="10000"
                  max="500000"
                  step="5000"
                  value={value}
                  onChange={(e) => setValue(Number(e.target.value))}
                  className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-gold"
                />
                <div className="flex justify-between text-[10px] text-muted-foreground uppercase font-bold">
                  <span>R$ 10k</span>
                  <span>R$ 500k</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-white/80">Prazo médio de recebimento</label>
                  <span className="text-xl font-display font-bold text-brand-gold">{days} dias</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="120"
                  step="1"
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-gold"
                />
                <div className="flex justify-between text-[10px] text-muted-foreground uppercase font-bold">
                  <span>1 dia</span>
                  <span>120 dias</span>
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-brand-gold/5 border border-brand-gold/10">
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold block mb-1">Você recebe</span>
                  <span className="text-lg font-display font-bold text-white">{formatCurrency(netValue)}</span>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold block mb-1">Custo total</span>
                  <span className="text-lg font-display font-bold text-white/60">{formatCurrency(cost)}</span>
                </div>
              </div>

              <a 
                href={whatsappLink(`Olá! Tenho R$ ${value} em recebíveis para antecipar (prazo médio ${days} dias). Gostaria de uma cotação oficial.`)}
                className="btn-gold w-full flex items-center justify-center gap-2"
              >
                <Banknote className="h-5 w-5" />
                Antecipar Agora
                <ArrowRight className="h-4 w-4" />
              </a>
              
              <div className="flex items-center gap-2 justify-center">
                <Info className="h-3 w-3 text-muted-foreground" />
                <p className="text-[10px] text-muted-foreground">
                  *Simulação meramente ilustrativa. Sujeito a análise de crédito e taxa final de mercado.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AntecipacaoSimulator;