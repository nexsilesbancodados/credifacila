  import { useState } from "react";
  import { Link } from "react-router-dom";
 import { useSeo } from "@/hooks/useSeo";
 import TopNav from "@/components/header/TopNav";
 import ContactFooter from "@/components/ContactFooter";
 import { Button } from "@/components/ui/button";
 import { Card } from "@/components/ui/card";
 import { Input } from "@/components/ui/input";
 import { Label } from "@/components/ui/label";
 import { supabase } from "@/integrations/supabase/client";
 import { User, Calendar, LogIn, ShieldCheck, CheckCircle2, AlertCircle, FileText, TrendingUp, Wallet, Clock } from "lucide-react";
 // Substituindo useToast por um estado simples já que a lib não está presente
 import { format, isAfter, isBefore, addDays } from "date-fns";
 import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
 import { ptBR } from "date-fns/locale";
 
 interface Debt {
   id: string;
   amount: number;
   due_date: string;
   status: string;
   description: string;
 }
 
 const ClientPortal = () => {
   useSeo({ 
     title: "Portal do Cliente | Credifácil",
     description: "Acesse suas faturas, parcelas e informações de crédito com segurança."
   });
 
   const [errorMsg, setErrorMsg] = useState<string | null>(null);
   const [step, setStep] = useState<"login" | "dashboard">("login");
   const [isLoading, setIsLoading] = useState(false);
    const [document, setDocument] = useState("");

    const formatDocument = (value: string) => {
      const nums = value.replace(/\D/g, "");
      if (nums.length <= 11) {
        return nums
          .replace(/(\d{3})(\d)/, "$1.$2")
          .replace(/(\d{3})(\d)/, "$1.$2")
          .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
      } else {
        return nums
          .replace(/(\d{2})(\d)/, "$1.$2")
          .replace(/(\d{3})(\d)/, "$1.$2")
          .replace(/(\d{3})(\d)/, "$1.$2")
          .replace(/(\d{4})(\d{1,2})$/, "$1-$2");
      }
    };

    const handleDocumentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const formatted = formatDocument(e.target.value);
      if (formatted.length <= 18) {
        setDocument(formatted);
      }
    };
   const [birthDate, setBirthDate] = useState("");
   const [clientData, setClientData] = useState<any>(null);
   const [debts, setDebts] = useState<Debt[]>([]);
 
   const handleLogin = async (e: React.FormEvent) => {
     e.preventDefault();
     setIsLoading(true);
 
     try {
       // Limpar CPF para busca
        const cleanDoc = document.replace(/\D/g, "");

        const { data: client, error } = await supabase
          .from("clients")
          .select("*")
          .eq("document", cleanDoc)
          .eq("birth_date", birthDate)
          .maybeSingle();
 
       if (error) throw error;
 
       if (!client) {
         setErrorMsg("CPF ou data de nascimento não encontrados em nossa base.");
         return;
       }
 
       setClientData(client);
       
       const { data: clientDebts, error: debtsError } = await supabase
         .from("debts")
         .select("*")
         .eq("client_id", client.id)
         .order("due_date", { ascending: true });
 
       if (debtsError) throw debtsError;
 
       setDebts(clientDebts || []);
       setStep("dashboard");
       
       setErrorMsg(null);
     } catch (error: any) {
       console.error("Login error:", error);
       setErrorMsg("Ocorreu um problema ao validar seus dados. Tente novamente.");
     } finally {
       setIsLoading(false);
     }
   };
 
   const formatCurrency = (value: number) => {
     return new Intl.NumberFormat("pt-BR", {
       style: "currency",
       currency: "BRL",
     }).format(value);
   };
 
   if (step === "dashboard") {
     const paidDebts = debts.filter(d => d.status === "pago");
     const pendingDebts = debts.filter(d => d.status !== "pago");
     const overdueDebts = pendingDebts.filter(d => isBefore(new Date(d.due_date), new Date()) && d.status !== "pago");
     
     const totalValue = debts.reduce((acc, d) => acc + d.amount, 0);
     const paidValue = paidDebts.reduce((acc, d) => acc + d.amount, 0);
     const pendingValue = pendingDebts.reduce((acc, d) => acc + d.amount, 0);
 
     const chartData = [
       { name: "Pago", value: paidValue, color: "#10b981" },
       { name: "Pendente", value: pendingValue, color: "#eab308" },
     ];
 
     const nextDebt = pendingDebts
       .sort((a, b) => new Date(a.due_date).getTime() - new Date(b.due_date).getTime())[0];
 
     return (
       <div className="min-h-screen bg-[hsl(0_0%_4%)]">
         <TopNav />
         <main className="mx-auto max-w-5xl px-5 py-12 pt-[112px] md:pt-[132px]">
           <header className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
             <div>
               <h1 className="text-3xl font-bold text-white">Olá, {clientData.name}</h1>
               <p className="mt-2 text-white/50">Confira o status das suas parcelas e contratos.</p>
             </div>
             <Button 
               variant="outline" 
               onClick={() => setStep("login")}
               className="border-white/10 bg-transparent text-white hover:bg-white/5"
             >
               Sair do Portal
             </Button>
           </header>
 
             <div className="grid gap-6 lg:grid-cols-4">
               <Card className="border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl md:col-span-2 lg:col-span-1">
                 <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gold/10 text-brand-gold">
                   <Wallet className="h-5 w-5" />
                 </div>
                 <div className="text-2xl font-bold text-white">{formatCurrency(totalValue)}</div>
                 <div className="text-sm text-white/50 text-nowrap">Valor total em aberto</div>
               </Card>
               
               <Card className="border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl">
                 <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10 text-green-500">
                   <CheckCircle2 className="h-5 w-5" />
                 </div>
                 <div className="text-2xl font-bold text-white">{paidDebts.length} / {debts.length}</div>
                 <div className="text-sm text-white/50">Parcelas pagas</div>
               </Card>
   
               <Card className="border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl">
                 <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
                   <AlertCircle className="h-5 w-5" />
                 </div>
                 <div className="text-2xl font-bold text-white">{overdueDebts.length}</div>
                 <div className="text-sm text-white/50">Parcelas em atraso</div>
               </Card>

               <Card className="border-brand-gold/20 bg-brand-gold/5 p-6 backdrop-blur-xl">
                 <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gold/20 text-brand-gold">
                   <Clock className="h-5 w-5" />
                 </div>
                 <div className="text-lg font-bold text-white">
                   {nextDebt ? format(new Date(nextDebt.due_date), "dd/MM") : "---"}
                 </div>
                 <div className="text-xs font-medium text-brand-gold uppercase tracking-wider">Próximo Vencimento</div>
               </Card>
             </div>

             <div className="mt-8 grid gap-6 md:grid-cols-3">
               <Card className="border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl md:col-span-1">
                 <h3 className="mb-4 text-sm font-medium text-white/70 uppercase tracking-wider">Resumo de Pagamento</h3>
                 <div className="h-[200px] w-full">
                   <ResponsiveContainer width="100%" height="100%">
                     <PieChart>
                       <Pie
                         data={chartData}
                         cx="50%"
                         cy="50%"
                         innerRadius={60}
                         outerRadius={80}
                         paddingAngle={5}
                         dataKey="value"
                       >
                         {chartData.map((entry, index) => (
                           <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                         ))}
                       </Pie>
                       <Tooltip 
                        contentStyle={{ backgroundColor: "#111", border: "1px solid #333", borderRadius: "8px" }}
                        itemStyle={{ color: "#fff" }}
                        formatter={(value: number) => formatCurrency(value)}
                       />
                     </PieChart>
                   </ResponsiveContainer>
                 </div>
                 <div className="mt-4 space-y-2">
                   {chartData.map((item) => (
                     <div key={item.name} className="flex items-center justify-between text-xs">
                       <div className="flex items-center gap-2">
                         <div className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }} />
                         <span className="text-white/50">{item.name}</span>
                       </div>
                       <span className="font-bold text-white">{formatCurrency(item.value)}</span>
                     </div>
                   ))}
                 </div>
               </Card>

               <div className="md:col-span-2">
                 <Card className="h-full border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl">
                   <div className="flex items-center justify-between mb-6">
                     <h3 className="text-sm font-medium text-white/70 uppercase tracking-wider">Últimas Atividades</h3>
                     <TrendingUp className="h-4 w-4 text-brand-gold" />
                   </div>
                   <div className="space-y-4">
                     {debts.slice(0, 3).map((debt) => (
                       <div key={debt.id} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
                         <div className="flex items-center gap-3">
                           <div className={`h-8 w-8 rounded-full flex items-center justify-center ${debt.status === "pago" ? "bg-green-500/10 text-green-500" : "bg-brand-gold/10 text-brand-gold"}`}>
                             {debt.status === "pago" ? <CheckCircle2 className="h-4 w-4" /> : <Clock className="h-4 w-4" />}
                           </div>
                           <div>
                             <div className="text-sm font-medium text-white">{debt.description}</div>
                             <div className="text-[10px] text-white/40">{format(new Date(debt.due_date), "dd/MM/yyyy")}</div>
                           </div>
                         </div>
                         <div className="text-right">
                           <div className="text-sm font-bold text-white">{formatCurrency(debt.amount)}</div>
                           <div className={`text-[10px] uppercase font-bold ${debt.status === "pago" ? "text-green-500" : "text-brand-gold"}`}>
                             {debt.status === "pago" ? "Liquidado" : "A vencer"}
                           </div>
                         </div>
                       </div>
                     ))}
                     {debts.length === 0 && (
                       <p className="text-center text-white/30 py-8 italic">Sem atividades recentes</p>
                     )}
                   </div>
                 </Card>
               </div>
             </div>
  
            <div className="mt-10">
 
           <div className="mt-10">
             <h2 className="mb-6 text-xl font-bold text-white">Minhas Parcelas</h2>
             <Card className="overflow-hidden border-white/10 bg-white/[0.02] backdrop-blur-xl">
               <div className="overflow-x-auto">
                 <table className="w-full text-left">
                   <thead>
                     <tr className="border-b border-white/10 bg-white/5">
                       <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-white/40">Descrição</th>
                       <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-white/40">Vencimento</th>
                       <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-white/40">Valor</th>
                       <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-white/40">Status</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-white/5">
                     {debts.length > 0 ? (
                       debts.map((debt) => (
                         <tr key={debt.id} className="transition-colors hover:bg-white/[0.02]">
                           <td className="px-6 py-4 text-sm text-white/80">{debt.description}</td>
                           <td className="px-6 py-4 text-sm text-white/80">
                             {format(new Date(debt.due_date), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
                           </td>
                           <td className="px-6 py-4 text-sm font-medium text-white">
                             {formatCurrency(debt.amount)}
                           </td>
                           <td className="px-6 py-4">
                             <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                               debt.status === "pago" 
                                 ? "bg-green-500/10 text-green-500" 
                                 : new Date(debt.due_date) < new Date()
                                   ? "bg-red-500/10 text-red-500"
                                   : "bg-brand-gold/10 text-brand-gold"
                             }`}>
                               {debt.status === "pago" ? "Pago" : new Date(debt.due_date) < new Date() ? "Atrasado" : "Pendente"}
                             </span>
                           </td>
                         </tr>
                       ))
                     ) : (
                       <tr>
                         <td colSpan={4} className="px-6 py-12 text-center text-white/30">
                           Nenhuma parcela encontrada.
                         </td>
                       </tr>
                     )}
                   </tbody>
                 </table>
               </div>
             </Card>
           </div>
         </main>
         <ContactFooter />
       </div>
     );
   }
 
    return (
      <div className="min-h-[100dvh] bg-[hsl(0_0%_2%)] flex items-center justify-center p-4">
        <main className="w-full max-w-md">
           <header className="mb-10 text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-brand-gold shadow-2xl">
                <ShieldCheck className="h-10 w-10" />
             </div>
              <h1 className="text-4xl font-serif font-bold tracking-tight text-white uppercase">Portal do Cliente</h1>
              <p className="mt-4 text-white/40 max-w-[280px] mx-auto text-sm">Acesse seus contratos e realize pagamentos de forma segura</p>
           </header>
 
           <Card className="border-white/10 bg-white/[0.02] p-5 sm:p-8 shadow-2xl backdrop-blur-xl">
             {errorMsg && (
               <div className="mb-4 rounded-lg bg-red-500/10 p-3 text-sm text-red-500 border border-red-500/20">
                 {errorMsg}
               </div>
             )}
             <form className="space-y-6" onSubmit={handleLogin}>
               <div className="space-y-2">
                  <Label htmlFor="document" className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Identificação (CPF/CNPJ)</Label>
                 <div className="relative">
                   <User className="absolute left-3 top-3 h-4 w-4 text-white/20" />
                   <Input 
                      id="document" 
                      placeholder="000.000.000-00 ou 00.000.000/0000-00" 
                     className="border-white/10 bg-white/5 pl-10 text-white placeholder:text-white/20 focus:border-brand-gold/50"
                      value={document}
                      onChange={handleDocumentChange}
                     required
                   />
                 </div>
               </div>
               
               <div className="space-y-2">
                  <Label htmlFor="birthDate" className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Data de Nascimento</Label>
                 <div className="relative">
                   <Calendar className="absolute left-3 top-3 h-4 w-4 text-white/20" />
                   <Input 
                     id="birthDate" 
                     type="date" 
                     className="border-white/10 bg-white/5 pl-10 text-white placeholder:text-white/20 focus:border-brand-gold/50"
                     value={birthDate}
                     onChange={(e) => setBirthDate(e.target.value)}
                     required
                   />
                 </div>
               </div>
 
                <Button 
                  disabled={isLoading}
                  className="w-full h-14 bg-blue-600 font-bold uppercase tracking-wider text-white hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all"
                >
                  {isLoading ? "Validando..." : "Entrar no Portal"}
                </Button>
             </form>
           </Card>
           
            <div className="mt-8 text-center">
              <Link to="/" className="text-white/20 hover:text-white/40 text-xs transition-colors">
                Voltar para o site principal
              </Link>
            </div>
            
          <div className="mt-12 flex items-center justify-center gap-2 text-[10px] text-white/20 uppercase tracking-widest">
            Protegido por criptografia de ponta a ponta
          </div>
        </main>
      </div>
    );
 };
 
 export default ClientPortal;