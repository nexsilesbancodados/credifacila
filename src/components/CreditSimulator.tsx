 import { useState, useEffect } from "react";
 import { motion } from "framer-motion";
 import { Calculator, ArrowRight, Zap, Info } from "lucide-react";
 
 const CreditSimulator = () => {
   const [amount, setAmount] = useState(10000);
   const [months, setMonths] = useState(24);
   const [rate, setRate] = useState(1.15);
   const [monthlyPayment, setMonthlyPayment] = useState(0);
   const [totalPayable, setTotalPayable] = useState(0);
 
   useEffect(() => {
     const r = rate / 100;
     const payment = (amount * r) / (1 - Math.pow(1 + r, -months));
     setMonthlyPayment(payment);
     setTotalPayable(payment * months);
   }, [amount, months, rate]);
 
   const formatCurrency = (val: number) =>
     new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(val);
 
   return (
     <div className="card-soft overflow-hidden">
       <div className="bg-gradient-to-r from-[hsl(var(--royal))/0.2] to-transparent p-6 md:p-8">
         <div className="flex items-center gap-3">
           <div className="grid h-10 w-10 place-items-center rounded-xl bg-[hsl(var(--gold))] text-[hsl(var(--navy-deep))]">
             <Calculator className="h-5 w-5" />
           </div>
           <h3 className="text-xl font-extrabold text-white md:text-2xl">Simulador de Crédito</h3>
         </div>
         <p className="mt-2 text-sm text-white/80">Simule seu crédito com taxas a partir de 1,15% ao mês.</p>
       </div>
 
       <div className="grid gap-8 p-6 md:grid-cols-2 md:p-8">
         <div className="space-y-8">
           {/* Amount */}
           <div>
             <div className="mb-4 flex items-center justify-between">
               <label className="text-sm font-bold uppercase tracking-wider text-white/70">Quanto você precisa?</label>
               <span className="text-xl font-extrabold text-[hsl(var(--gold-soft))]">{formatCurrency(amount)}</span>
             </div>
             <input
               type="range"
               min="1000"
               max="500000"
               step="1000"
               value={amount}
               onChange={(e) => setAmount(Number(e.target.value))}
               className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-white/20 accent-[hsl(var(--gold))]"
             />
             <div className="mt-2 flex justify-between text-[10px] font-bold text-white/40 uppercase">
               <span>R$ 1.000</span>
               <span>R$ 500.000</span>
             </div>
           </div>
 
           {/* Months */}
           <div>
             <div className="mb-4 flex items-center justify-between">
               <label className="text-sm font-bold uppercase tracking-wider text-white/70">Em quantas parcelas?</label>
               <span className="text-xl font-extrabold text-[hsl(var(--gold-soft))]">{months}x</span>
             </div>
             <input
               type="range"
               min="6"
               max="84"
               step="6"
               value={months}
               onChange={(e) => setMonths(Number(e.target.value))}
               className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-white/20 accent-[hsl(var(--gold))]"
             />
             <div className="mt-2 flex justify-between text-[10px] font-bold text-white/40 uppercase">
               <span>6 meses</span>
               <span>84 meses</span>
             </div>
           </div>
         </div>
 
         <div className="flex flex-col justify-between rounded-2xl bg-white/5 p-6 border border-white/10">
           <div className="space-y-6">
             <div>
               <p className="text-xs font-bold uppercase tracking-widest text-white/50">Valor da parcela (estimado)</p>
               <p className="mt-1 text-3xl font-extrabold text-white md:text-4xl">{formatCurrency(monthlyPayment)}</p>
             </div>
             <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
               <div>
                 <p className="text-[10px] font-bold uppercase tracking-widest text-white/50">Total a pagar</p>
                 <p className="text-sm font-bold text-white/90">{formatCurrency(totalPayable)}</p>
               </div>
               <div>
                 <p className="text-[10px] font-bold uppercase tracking-widest text-white/50">Taxa estimada</p>
                 <p className="text-sm font-bold text-[hsl(var(--gold-soft))]">{rate}% a.m.</p>
               </div>
             </div>
           </div>
 
           <div className="mt-8 space-y-4">
             <a href="/contato" className="btn-gold w-full flex items-center justify-center gap-2">
               Solicitar agora <ArrowRight className="h-4 w-4" />
             </a>
             <div className="flex items-start gap-2 rounded-xl bg-blue-500/10 p-3 text-[10px] text-blue-200/80">
               <Info className="h-3.5 w-3.5 shrink-0 text-blue-400" />
               <p>As taxas e condições podem variar conforme análise de crédito e perfil do cliente. Sujeito à aprovação.</p>
             </div>
           </div>
         </div>
       </div>
     </div>
   );
 };
 
 export default CreditSimulator;