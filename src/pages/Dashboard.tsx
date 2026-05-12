import { useEffect, useState } from "react";
import { useSeo } from "@/hooks/useSeo";
import { useNavigate } from "react-router-dom";
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
import { supabase } from "@/integrations/supabase/client";
import { format, subMonths, startOfMonth } from "date-fns";
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
   useSeo({ title: "Painel Administrativo | Credifácil", description: "Painel interno de gestão de clientes e contratos.", noindex: true });
  const navigate = useNavigate();
  const [authChecked, setAuthChecked] = useState(false);
  const [statusFilter, setStatusFilter] = useState<"Todos" | "Ativo" | "Pendente" | "Bloqueado">("Todos");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [clientsCount, setClientsCount] = useState(0);
  const [debts, setDebts] = useState<Array<{ amount: number; status: string; due_date: string; created_at: string }>>([]);
  const [recentClients, setRecentClients] = useState<Array<{ name: string; document: string; created_at: string }>>([]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        navigate("/login", { replace: true });
      } else {
        setAuthChecked(true);
      }
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      if (!session) navigate("/login", { replace: true });
    });
    return () => sub.subscription.unsubscribe();
  }, [navigate]);

  useEffect(() => {
    if (!authChecked) return;
    const load = async () => {
      const [{ count: cCount }, { data: dData }, { data: rClients }] = await Promise.all([
        supabase.from("clients").select("id", { count: "exact", head: true }),
        supabase.from("debts").select("amount,status,due_date,created_at"),
        supabase.from("clients").select("name,document,created_at").order("created_at", { ascending: false }).limit(8),
      ]);
      setClientsCount(cCount ?? 0);
      setDebts((dData ?? []).map((d: any) => ({ ...d, amount: Number(d.amount) })));
      setRecentClients(rClients ?? []);
      setLoading(false);
    };
    load();

    const channel = supabase
      .channel("dashboard-live")
      .on("postgres_changes", { event: "*", schema: "public", table: "clients" }, load)
      .on("postgres_changes", { event: "*", schema: "public", table: "debts" }, load)
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [authChecked]);

  const fmtBRL = (v: number) =>
    v >= 1000 ? `R$ ${(v / 1000).toFixed(0)}k` : new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(v);

  const totalVolume = debts.reduce((s, d) => s + d.amount, 0);
  const activeContracts = debts.filter((d) => d.status !== "pago").length;
  const ticket = debts.length ? totalVolume / debts.length : 0;
  const overdueCount = debts.filter(
    (d) => d.status !== "pago" && new Date(d.due_date) < new Date(),
  ).length;
  const pendingValue = debts
    .filter((d) => d.status !== "pago")
    .reduce((s, d) => s + d.amount, 0);

  const exportCSV = () => {
    const rows = [
      ["Cliente", "Documento", "Cadastro"],
      ...recentClients.map((c) => [c.name, c.document, format(new Date(c.created_at), "dd/MM/yyyy")]),
    ];
    const csv = rows.map((r) => r.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(";")).join("\n");
    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `dashboard-clientes-${format(new Date(), "yyyy-MM-dd")}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };
 
   const stats = [
    { label: "Total de Clientes", value: String(clientsCount), trend: "live", icon: Users, color: "text-blue-500", bg: "bg-blue-500/10" },
    { label: "Contratos Ativos", value: String(activeContracts), trend: "live", icon: FileText, color: "text-brand-gold", bg: "bg-brand-gold/10" },
    { label: "Volume Total", value: fmtBRL(totalVolume), trend: "live", icon: TrendingUp, color: "text-green-500", bg: "bg-green-500/10" },
    { label: "Ticket Médio", value: fmtBRL(ticket), trend: "live", icon: DollarSign, color: "text-purple-500", bg: "bg-purple-500/10" },
   ];

  const monthlyData = (() => {
    const months: Array<{ month: string; volume: number; contratos: number; key: string }> = [];
    for (let i = 5; i >= 0; i--) {
      const d = startOfMonth(subMonths(new Date(), i));
      months.push({ month: format(d, "MMM"), key: format(d, "yyyy-MM"), volume: 0, contratos: 0 });
    }
    debts.forEach((d) => {
      const k = format(new Date(d.created_at), "yyyy-MM");
      const slot = months.find((m) => m.key === k);
      if (slot) {
        slot.volume += d.amount;
        slot.contratos += 1;
      }
    });
    return months;
  })();

  const maskDoc = (d: string) => {
    const n = (d ?? "").replace(/\D/g, "");
    if (n.length === 11) return `${n.slice(0, 3)}.***.***-${n.slice(-2)}`;
    if (n.length === 14) return `${n.slice(0, 2)}.***.***/${n.slice(8, 12)}-${n.slice(-2)}`;
    return d;
  };

  const allClients = recentClients.map((c) => ({
    name: c.name,
    doc: maskDoc(c.document),
    status: "Ativo" as const,
    date: format(new Date(c.created_at), "dd/MM/yyyy"),
  }));

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
            <Button onClick={exportCSV} variant="outline" className="border-white/10 bg-white/5 text-white hover:bg-white/10">
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
                  <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-green-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                    {stat.trend}
                 </div>
               </div>
               <div className="mt-6">
                  <div className="text-2xl font-bold text-white">{loading ? "—" : stat.value}</div>
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
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">Alertas do Sistema</h3>
                <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-green-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" /> Ao vivo
                </span>
              </div>
             <div className="space-y-6">
               <div className="flex gap-4">
                 <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                 <div>
                   <div className="text-sm font-bold text-white">Parcelas Vencidas</div>
                    <p className="mt-1 text-xs leading-relaxed text-white/40">
                      {overdueCount === 0
                        ? "Nenhuma parcela em atraso no momento."
                        : `Existem ${overdueCount} parcela(s) vencida(s) que requerem atenção.`}
                    </p>
                 </div>
               </div>
               <div className="flex gap-4">
                 <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-brand-gold shadow-[0_0_8px_rgba(212,175,55,0.5)]" />
                 <div>
                    <div className="text-sm font-bold text-white">Valor Pendente</div>
                    <p className="mt-1 text-xs leading-relaxed text-white/40">
                      {fmtBRL(pendingValue)} a receber em parcelas em aberto.
                    </p>
                 </div>
               </div>
               <div className="flex gap-4">
                 <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500" />
                 <div>
                    <div className="text-sm font-bold text-white">Base de Clientes</div>
                    <p className="mt-1 text-xs leading-relaxed text-white/40">
                      {clientsCount} cliente(s) ativo(s) no sistema.
                    </p>
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