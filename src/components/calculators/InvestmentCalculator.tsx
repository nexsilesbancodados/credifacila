import React, { useState, useEffect } from "react";
import { TrendingUp, PieChart, ShieldCheck, ArrowRight, Wallet } from "lucide-react";
import { Card } from "@/components/ui/card";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";

const InvestmentCalculator = () => {
  const [initialValue, setInitialValue] = useState(50000);
  const [years, setYears] = useState(5);
  const [chartData, setChartData] = useState<any[]>([]);

  const cdiRate = 0.11; // CDI 11% p.a.
  const credifacilRate = cdiRate * 1.12; // 112% of CDI
  const savingsRate = 0.06; // Savings (Poupança) 6% p.a.

  useEffect(() => {
    const data = [];
    for (let i = 0; i <= years; i++) {
      const poupanca = initialValue * Math.pow(1 + savingsRate, i);
      const cdi = initialValue * Math.pow(1 + cdiRate, i);
      const credifacil = initialValue * Math.pow(1 + credifacilRate, i);
      
      data.push({
        year: i === 0 ? "Hoje" : `${i} ano${i > 1 ? 's' : ''}`,
        Poupanca: Math.round(poupanca),
        CDI: Math.round(cdi),
        Credifacil: Math.round(credifacil),
      });
    }
    setChartData(data);
  }, [initialValue, years]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="calculadora" className="relative py-20 bg-card/30 border-y border-brand-gold/10">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold">Comparativo de Performance</span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
            O poder dos <span className="text-gold-gradient">juros compostos</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Veja como seu capital pode evoluir ao longo do tempo investindo em nossos fundos de crédito estruturado.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-8">
            <Card className="p-6 border-brand-gold/20 bg-card/80 backdrop-blur-xl">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium text-white/80">Investimento Inicial</label>
                    <span className="text-lg font-display font-bold text-brand-gold">{formatCurrency(initialValue)}</span>
                  </div>
                  <input
                    type="range"
                    min="25000"
                    max="1000000"
                    step="5000"
                    value={initialValue}
                    onChange={(e) => setInitialValue(Number(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-gold"
                  />
                  <div className="flex justify-between text-[10px] text-muted-foreground uppercase font-bold">
                    <span>R$ 25k</span>
                    <span>R$ 1Mi</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium text-white/80">Prazo de Projeção</label>
                    <span className="text-lg font-display font-bold text-brand-gold">{years} anos</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-gold"
                  />
                  <div className="flex justify-between text-[10px] text-muted-foreground uppercase font-bold">
                    <span>1 ano</span>
                    <span>10 anos</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-brand-gold" />
                      <span className="text-sm text-white/90">Credifácil (112% CDI)</span>
                    </div>
                    <span className="font-bold text-white">{formatCurrency(chartData[years]?.Credifacil || 0)}</span>
                  </div>
                  <div className="flex justify-between items-center opacity-60">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-blue-500" />
                      <span className="text-sm text-white/90">CDI (100%)</span>
                    </div>
                    <span className="font-medium text-white">{formatCurrency(chartData[years]?.CDI || 0)}</span>
                  </div>
                </div>
              </div>
            </Card>

            <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
              <div className="flex items-start gap-4">
                <ShieldCheck className="h-6 w-6 text-brand-gold shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-bold text-sm">Rentabilidade com Lastro</h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    Nossos fundos buscam entregar alfa sobre o CDI com operações pulverizadas e garantias reais de recebíveis.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="lg:col-span-8 p-6 md:p-8 border-brand-gold/10 bg-card/40 overflow-hidden relative">
             <div className="h-[400px] w-full mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorCredifacil" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--brand-gold)" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="var(--brand-gold)" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                    <XAxis 
                      dataKey="year" 
                      stroke="#ffffff50" 
                      fontSize={12} 
                      tickLine={false} 
                      axisLine={false} 
                    />
                    <YAxis 
                      stroke="#ffffff50" 
                      fontSize={10} 
                      tickLine={false} 
                      axisLine={false} 
                      tickFormatter={(val) => `R$ ${val/1000}k`}
                    />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#111', borderColor: '#d4af3733', borderRadius: '12px' }}
                      itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                      formatter={(value: any) => formatCurrency(value)}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="Credifacil" 
                      stroke="var(--brand-gold)" 
                      strokeWidth={3}
                      fillOpacity={1} 
                      fill="url(#colorCredifacil)" 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="CDI" 
                      stroke="#3b82f6" 
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      fill="transparent" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
             </div>
             <div className="flex justify-center gap-6 mt-6">
               <div className="flex items-center gap-2">
                 <div className="h-2 w-4 rounded-full bg-brand-gold" />
                 <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Credifácil FIDC</span>
               </div>
               <div className="flex items-center gap-2">
                 <div className="h-2 w-4 rounded-full border border-blue-500 border-dashed" />
                 <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">CDI</span>
               </div>
             </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InvestmentCalculator;