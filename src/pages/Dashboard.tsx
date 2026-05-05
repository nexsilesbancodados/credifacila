import { useState } from "react";
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
  Settings,
  Bell,
  Download
 } from "lucide-react";
 import TopNav from "@/components/header/TopNav";
 import ContactFooter from "@/components/ContactFooter";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
 
 const Dashboard = () => {
   useSeo({ title: "Painel Administrativo | Credifácil" });
  const [statusFilter, setStatusFilter] = useState<"Todos" | "Ativo" | "Pendente" | "Bloqueado">("Todos");
  const [search, setSearch] = useState("");
 
   const stats = [
    { label: "Total de Clientes", value: "1,284", trend: "+12%", icon: Users, color: "text-blue-500", bg: "bg-blue-500/10" },
    { label: "Contratos Ativos", value: "856", trend: "+8%", icon: FileText, color: "text-brand-gold", bg: "bg-brand-gold/10" },
    { label: "Volume Mensal", value: "R$ 452k", trend: "+24%", icon: TrendingUp, color: "text-green-500", bg: "bg-green-500/10" },
    { label: "Ticket Médio", value: "R$ 12.400", trend: "+3%", icon: DollarSign, color: "text-purple-500", bg: "bg-purple-500/10" },
   ];

  const monthlyData = [
    { month: "Jan", volume: 280, contratos: 620 },
    { month: "Fev", volume: 310, contratos: 660 },
    { month: "Mar", volume: 295, contratos: 690 },
    { month: "Abr", volume: 360, contratos: 720 },
    { month: "Mai", volume: 410, contratos: 770 },
    { month: "Jun", volume: 452, contratos: 856 },
  ];

  const allClients = [
    { name: "João Silva Santos", doc: "045.***.***-98", status: "Ativo", date: "Há 2 horas" },
    { name: "Maria Oliveira Lima", doc: "123.***.***-45", status: "Pendente", date: "Há 5 horas" },
    { name: "Empresa ABC Ltda", doc: "12.***.***/0001-90", status: "Ativo", date: "Ontem" },
    { name: "Ricardo Ferreira", doc: "876.***.***-32", status: "Bloqueado", date: "Ontem" },
    { name: "Fernanda Costa", doc: "234.***.***-11", status: "Ativo", date: "2 dias" },
    { name: "Carlos Mendes", doc: "567.***.***-22", status: "Pendente", date: "3 dias" },
  ];

  const filteredClients = allClients.filter((c) => {
    const matchesStatus = statusFilter === "Todos" || c.status === statusFilter;
    const matchesSearch = search.trim() === "" || c.name.toLowerCase().includes(search.toLowerCase());
    return matchesStatus && matchesSearch;
  });
 
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
              <Download className="mr-2 h-4 w-4" />
              Exportar
            </Button>
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
                    {stat.trend}
                 </div>
               </div>
               <div className="mt-6">
                 <div className="text-2xl font-bold text-white">{stat.value}</div>
                 <div className="mt-1 text-sm text-white/40">{stat.label}</div>
               </div>
             </Card>
           ))}
         </div>
 
          <Card className="mt-10 border-white/10 bg-white/[0.02] p-6 md:p-8 backdrop-blur-xl">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">Evolução de Volume e Contratos</h3>
                <p className="text-xs text-white/40 mt-1">Últimos 6 meses · valores em milhares de R$</p>
              </div>
              <div className="flex gap-2 text-[10px] uppercase tracking-wider">
                <span className="flex items-center gap-1.5 text-white/60"><span className="h-2 w-2 rounded-full bg-brand-gold" /> Volume</span>
                <span className="flex items-center gap-1.5 text-white/60"><span className="h-2 w-2 rounded-full bg-blue-500" /> Contratos</span>
              </div>
            </div>
            <div className="h-[280px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyData}>
                  <defs>
                    <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.6} />
                      <stop offset="95%" stopColor="#D4AF37" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="month" stroke="rgba(255,255,255,0.4)" fontSize={11} />
                  <YAxis stroke="rgba(255,255,255,0.4)" fontSize={11} />
                  <Tooltip
                    contentStyle={{ backgroundColor: "#111", border: "1px solid #333", borderRadius: "8px" }}
                    itemStyle={{ color: "#fff" }}
                  />
                  <Area type="monotone" dataKey="contratos" stroke="#3b82f6" strokeWidth={2} fill="url(#blueGrad)" />
                  <Area type="monotone" dataKey="volume" stroke="#D4AF37" strokeWidth={2} fill="url(#goldGrad)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>

         <div className="mt-10 grid gap-8 lg:grid-cols-3">
           <Card className="border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl lg:col-span-2">
              <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
               <h3 className="text-lg font-bold text-white">Clientes Recentes</h3>
               <div className="relative">
                 <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
                 <input 
                   type="text" 
                    placeholder="Buscar cliente..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                   className="h-9 rounded-full border border-white/10 bg-white/5 pl-10 pr-4 text-xs text-white placeholder:text-white/20 focus:border-brand-gold/50 focus:outline-none"
                 />
               </div>
             </div>

              <div className="mb-6 flex flex-wrap gap-2">
                {(["Todos", "Ativo", "Pendente", "Bloqueado"] as const).map((s) => (
                  <button
                    key={s}
                    onClick={() => setStatusFilter(s)}
                    className={`rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider transition ${
                      statusFilter === s
                        ? "bg-brand-gold text-black"
                        : "border border-white/10 bg-white/5 text-white/50 hover:text-white"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
             
             <div className="space-y-4">
                {filteredClients.length === 0 && (
                  <div className="py-10 text-center text-sm text-white/30">Nenhum cliente encontrado.</div>
                )}
                {filteredClients.map((item, i) => (
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