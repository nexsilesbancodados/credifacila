 import { useSeo } from "@/hooks/useSeo";
 import { Card } from "@/components/ui/card";
 import { Button } from "@/components/ui/button";
 import { 
   Users, 
   FileText, 
   TrendingUp, 
   DollarSign, 
   Plus, 
   ArrowUpRight,
   Search,
   Settings
 } from "lucide-react";
 import TopNav from "@/components/header/TopNav";
 import ContactFooter from "@/components/ContactFooter";
 
 const Dashboard = () => {
   useSeo({ title: "Painel Administrativo | Credifácil" });
 
   const stats = [
     { label: "Total de Clientes", value: "1,284", icon: Users, color: "text-blue-500", bg: "bg-blue-500/10" },
     { label: "Contratos Ativos", value: "856", icon: FileText, color: "text-brand-gold", bg: "bg-brand-gold/10" },
     { label: "Volume Mensal", value: "R$ 452k", icon: TrendingUp, color: "text-green-500", bg: "bg-green-500/10" },
     { label: "Ticket Médio", value: "R$ 12.400", icon: DollarSign, color: "text-purple-500", bg: "bg-purple-500/10" },
   ];
 
   return (
     <div className="min-h-screen bg-[hsl(0_0%_4%)]">
       <TopNav />
       <main className="mx-auto max-w-7xl px-5 py-12 pt-[112px] md:pt-[132px]">
         <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-center">
           <div>
             <h1 className="text-3xl font-bold text-white font-serif tracking-tight">Painel de Gestão</h1>
             <p className="mt-2 text-white/50 text-sm">Visão geral do sistema e controle de operações.</p>
           </div>
           <div className="flex flex-wrap gap-3">
             <Button variant="outline" className="border-white/10 bg-white/5 text-white hover:bg-white/10">
               <Settings className="mr-2 h-4 w-4" />
               Configurações
             </Button>
             <Button className="bg-brand-gold text-black hover:bg-brand-gold/90 font-bold">
               <Plus className="mr-2 h-4 w-4" />
               Novo Cliente
             </Button>
           </div>
         </div>
 
         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
           {stats.map((stat) => (
             <Card key={stat.label} className="border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl">
               <div className="flex items-center justify-between">
                 <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${stat.bg} ${stat.color}`}>
                   <stat.icon className="h-6 w-6" />
                 </div>
                 <div className="flex items-center text-xs font-medium text-green-500">
                   <ArrowUpRight className="mr-1 h-3 w-3" />
                   12%
                 </div>
               </div>
               <div className="mt-6">
                 <div className="text-2xl font-bold text-white">{stat.value}</div>
                 <div className="mt-1 text-sm text-white/40">{stat.label}</div>
               </div>
             </Card>
           ))}
         </div>
 
         <div className="mt-10 grid gap-8 lg:grid-cols-3">
           <Card className="border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl lg:col-span-2">
             <div className="mb-8 flex items-center justify-between">
               <h3 className="text-lg font-bold text-white">Clientes Recentes</h3>
               <div className="relative">
                 <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
                 <input 
                   type="text" 
                   placeholder="Buscar..." 
                   className="h-9 rounded-full border border-white/10 bg-white/5 pl-10 pr-4 text-xs text-white placeholder:text-white/20 focus:border-brand-gold/50 focus:outline-none"
                 />
               </div>
             </div>
             
             <div className="space-y-4">
               {[
                 { name: "João Silva Santos", doc: "045.***.***-98", status: "Ativo", date: "Há 2 horas" },
                 { name: "Maria Oliveira Lima", doc: "123.***.***-45", status: "Pendente", date: "Há 5 horas" },
                 { name: "Empresa ABC Ltda", doc: "12.***.***/0001-90", status: "Ativo", date: "Ontem" },
                 { name: "Ricardo Ferreira", doc: "876.***.***-32", status: "Bloqueado", date: "Ontem" },
               ].map((item, i) => (
                 <div key={i} className="flex items-center justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0">
                   <div className="flex items-center gap-4">
                     <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 font-bold">
                       {item.name.substring(0, 1)}
                     </div>
                     <div>
                       <div className="text-sm font-bold text-white">{item.name}</div>
                       <div className="text-xs text-white/30">{item.doc}</div>
                     </div>
                   </div>
                   <div className="text-right">
                     <div className={`text-[10px] font-bold uppercase ${item.status === "Ativo" ? "text-green-500" : item.status === "Pendente" ? "text-brand-gold" : "text-red-500"}`}>
                       {item.status}
                     </div>
                     <div className="text-[10px] text-white/20">{item.date}</div>
                   </div>
                 </div>
               ))}
             </div>
             
             <Button variant="ghost" className="mt-8 w-full border border-white/5 text-white/40 hover:bg-white/5 hover:text-white">
               Ver Todos os Clientes
             </Button>
           </Card>
 
           <Card className="border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl">
             <h3 className="mb-6 text-lg font-bold text-white">Alertas do Sistema</h3>
             <div className="space-y-6">
               <div className="flex gap-4">
                 <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                 <div>
                   <div className="text-sm font-bold text-white">Parcelas Vencidas</div>
                   <p className="mt-1 text-xs leading-relaxed text-white/40">Existem 14 contratos com parcelas atrasadas há mais de 5 dias.</p>
                 </div>
               </div>
               <div className="flex gap-4">
                 <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-brand-gold shadow-[0_0_8px_rgba(212,175,55,0.5)]" />
                 <div>
                   <div className="text-sm font-bold text-white">Novos Leads</div>
                   <p className="mt-1 text-xs leading-relaxed text-white/40">8 novos clientes solicitaram acesso ao portal nas últimas 24h.</p>
                 </div>
               </div>
               <div className="flex gap-4">
                 <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500" />
                 <div>
                   <div className="text-sm font-bold text-white">Backup Concluído</div>
                   <p className="mt-1 text-xs leading-relaxed text-white/40">A sincronização com o banco de dados foi realizada com sucesso.</p>
                 </div>
               </div>
             </div>
             <Button className="mt-10 w-full bg-white/10 text-white hover:bg-white/20">
               Gerar Relatório Geral
             </Button>
           </Card>
         </div>
       </main>
       <ContactFooter />
     </div>
   );
 };
 
 export default Dashboard;