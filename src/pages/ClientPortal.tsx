 import { useState } from "react";
 import { useSeo } from "@/hooks/useSeo";
 import TopNav from "@/components/header/TopNav";
 import ContactFooter from "@/components/ContactFooter";
 import { Button } from "@/components/ui/button";
 import { Card } from "@/components/ui/card";
 import { Input } from "@/components/ui/input";
 import { Label } from "@/components/ui/label";
 import { supabase } from "@/integrations/supabase/client";
 import { User, Calendar, LogIn, ShieldCheck, CheckCircle2, AlertCircle, FileText } from "lucide-react";
 import { useToast } from "@/hooks/use-toast";
 import { format } from "date-fns";
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
 
   const { toast } = useToast();
   const [step, setStep] = useState<"login" | "dashboard">("login");
   const [isLoading, setIsLoading] = useState(false);
   const [cpf, setCpf] = useState("");
   const [birthDate, setBirthDate] = useState("");
   const [clientData, setClientData] = useState<any>(null);
   const [debts, setDebts] = useState<Debt[]>([]);
 
   const handleLogin = async (e: React.FormEvent) => {
     e.preventDefault();
     setIsLoading(true);
 
     try {
       // Limpar CPF para busca
       const cleanCpf = cpf.replace(/\D/g, "");
 
       const { data: client, error } = await supabase
         .from("clients")
         .select("*")
         .eq("document", cleanCpf)
         .eq("birth_date", birthDate)
         .maybeSingle();
 
       if (error) throw error;
 
       if (!client) {
         toast({
           variant: "destructive",
           title: "Acesso negado",
           description: "CPF ou data de nascimento não encontrados em nossa base.",
         });
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
       
       toast({
         title: `Olá, ${client.name.split(" ")[0]}!`,
         description: "Bem-vindo ao seu portal do cliente.",
       });
     } catch (error: any) {
       console.error("Login error:", error);
       toast({
         variant: "destructive",
         title: "Erro ao acessar",
         description: "Ocorreu um problema ao validar seus dados. Tente novamente.",
       });
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
 
           <div className="grid gap-6 md:grid-cols-3">
             <Card className="border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl">
               <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gold/10 text-brand-gold">
                 <FileText className="h-5 w-5" />
               </div>
               <div className="text-2xl font-bold text-white">{debts.length}</div>
               <div className="text-sm text-white/50">Total de parcelas</div>
             </Card>
             
             <Card className="border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl">
               <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10 text-green-500">
                 <CheckCircle2 className="h-5 w-5" />
               </div>
               <div className="text-2xl font-bold text-white">{paidDebts.length}</div>
               <div className="text-sm text-white/50">Parcelas pagas</div>
             </Card>
 
             <Card className="border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl">
               <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gold/10 text-brand-gold">
                 <AlertCircle className="h-5 w-5" />
               </div>
               <div className="text-2xl font-bold text-white">{pendingDebts.length}</div>
               <div className="text-sm text-white/50">Aguardando pagamento</div>
             </Card>
           </div>
 
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
     <div className="min-h-screen bg-[hsl(0_0%_4%)]">
       <TopNav />
       
       <main className="flex flex-col items-center justify-center px-4 py-12 pt-[112px] sm:px-5 sm:py-24 sm:pt-[132px]">
         <div className="w-full max-w-md">
           <header className="mb-10 text-center">
             <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-brand-gold/30 bg-brand-gold/5 text-brand-gold">
               <LogIn className="h-8 w-8" />
             </div>
             <h1 className="text-3xl font-bold tracking-tight text-white">Área do Cliente</h1>
             <p className="mt-3 text-white/50">Acesse com seu CPF e data de nascimento.</p>
           </header>
 
           <Card className="border-white/10 bg-white/[0.02] p-5 sm:p-8 shadow-2xl backdrop-blur-xl">
             <form className="space-y-6" onSubmit={handleLogin}>
               <div className="space-y-2">
                 <Label htmlFor="cpf" className="text-white/80">CPF</Label>
                 <div className="relative">
                   <User className="absolute left-3 top-3 h-4 w-4 text-white/20" />
                   <Input 
                     id="cpf" 
                     placeholder="000.000.000-00" 
                     className="border-white/10 bg-white/5 pl-10 text-white placeholder:text-white/20 focus:border-brand-gold/50"
                     value={cpf}
                     onChange={(e) => setCpf(e.target.value)}
                     required
                   />
                 </div>
               </div>
               
               <div className="space-y-2">
                 <Label htmlFor="birthDate" className="text-white/80">Data de Nascimento</Label>
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
                 className="w-full bg-brand-gold font-bold uppercase tracking-wider text-[hsl(0_0%_4%)] hover:bg-brand-gold/90"
               >
                 {isLoading ? "Validando..." : "Entrar no Portal"}
               </Button>
             </form>
           </Card>
           
           <div className="mt-10 flex items-center justify-center gap-2 text-xs text-white/30">
             <ShieldCheck className="h-4 w-4 text-brand-gold" />
             Acesso seguro com criptografia de ponta.
           </div>
         </div>
       </main>
 
       <ContactFooter />
     </div>
   );
 };
 
 export default ClientPortal;