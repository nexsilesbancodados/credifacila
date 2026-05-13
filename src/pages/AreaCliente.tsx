import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { LogOut, User, FileText, CreditCard, MessageCircle, Loader2, ShieldCheck, TrendingUp, Settings, ChevronRight } from "lucide-react";

const AreaCliente = () => {
  const nav = useNavigate();
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<{ display_name: string | null; avatar_url: string | null } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      if (!data.session) nav("/auth", { replace: true });
      else setLoading(false);
    });
    return () => sub.subscription.unsubscribe();
  }, [nav]);

  useEffect(() => {
    if (!session) return;
    supabase.from("profiles").select("display_name, avatar_url").eq("id", session.user.id).maybeSingle()
      .then(({ data }) => setProfile(data));
  }, [session]);

  const logout = async () => {
    await supabase.auth.signOut();
    nav("/", { replace: true });
  };

  if (loading) {
    return (
      <Layout tone="midnight">
        <div className="container-x py-32 flex flex-col items-center justify-center text-white/40">
          <Loader2 className="h-10 w-10 animate-spin mb-4 text-[hsl(var(--gold-soft))]" />
          <p className="text-sm font-bold uppercase tracking-widest">Sincronizando Sessão Segura...</p>
        </div>
      </Layout>
    );
  }

  const name = profile?.display_name || session?.user.email?.split("@")[0] || "Cliente";

  return (
    <Layout tone="midnight">
      <PageHeader 
        eyebrow="Portal de Relacionamento" 
        title={<>Bem-vindo, <span className="text-gold-gradient">{name}</span></>} 
        subtitle="Acesse seu dashboard consolidado, acompanhe propostas e gerencie suas operações estruturadas." 
      />
      
      <section className="container-x pb-24">
        <div className="grid gap-8 lg:grid-cols-4 mb-12">
          <Reveal>
            <div className="card-soft p-6 bg-white/5 border-white/10">
              <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Crédito Disponível</p>
              <p className="text-2xl font-black text-white">Análise Pendente</p>
              <div className="mt-4 h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-[hsl(var(--gold-soft))] rounded-full" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="card-soft p-6 bg-white/5 border-white/10">
              <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Contratos Ativos</p>
              <p className="text-2xl font-black text-white">--</p>
              <p className="mt-2 text-xs text-white/40">Nenhuma operação ativa</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card-soft p-6 bg-white/5 border-white/10">
              <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Investimento Total</p>
              <p className="text-2xl font-black text-white">R$ 0,00</p>
              <p className="mt-2 text-xs text-[hsl(var(--gold-soft))]">+0.0% este mês</p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="card-soft p-6 bg-gradient-to-br from-[hsl(var(--gold-soft))] to-[hsl(var(--gold))] border-none text-navy-deep">
              <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-2">Nível de Conta</p>
              <p className="text-2xl font-black">Private</p>
              <p className="mt-2 text-xs font-bold opacity-60">Wealth Management</p>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {[
            { icon: FileText, title: "Propostas & Drafts", desc: "Acompanhe o status e envie documentos para suas solicitações em análise.", cta: "Ver Propostas" },
            { icon: CreditCard, title: "Extrato Consolidado", desc: "Visualize seu fluxo de caixa, pagamentos e rendimentos mensais.", cta: "Acessar Extrato" },
            { icon: MessageCircle, title: "Luri Wealth Advisor", desc: "Consultoria técnica via IA treinada em mercado financeiro.", cta: "Abrir Consultoria", action: () => window.dispatchEvent(new CustomEvent("luri:open")) },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div className="group rounded-[2.5rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:bg-white/10 hover:border-[hsl(var(--gold-soft))/0.3]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-[hsl(var(--gold-soft))] mb-6 group-hover:scale-110 transition-transform">
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{c.desc}</p>
                <button onClick={c.action} className="mt-8 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white hover:text-[hsl(var(--gold-soft))] transition-colors">
                  {c.cta} <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          <Reveal delay={0.3}>
            <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 flex flex-col md:flex-row items-center gap-8 justify-between">
               <div className="flex items-center gap-4">
                 <div className="h-16 w-16 rounded-full border-4 border-white/10 p-1">
                   <div className="h-full w-full rounded-full bg-gradient-to-br from-[hsl(var(--royal))] to-[hsl(var(--sky))] flex items-center justify-center text-white">
                     <User className="h-6 w-6" />
                   </div>
                 </div>
                 <div>
                   <h4 className="text-xl font-bold text-white">{name}</h4>
                   <p className="text-sm text-white/40">{session?.user.email}</p>
                 </div>
               </div>
               <div className="flex gap-4">
                 <button className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-white hover:bg-white/10 transition-colors">
                   <Settings className="h-5 w-5" />
                 </button>
                 <button onClick={logout} className="flex h-12 px-6 items-center gap-2 rounded-2xl bg-rose-500/10 text-rose-500 hover:bg-rose-500/20 transition-colors font-bold text-xs uppercase tracking-widest">
                   <LogOut className="h-4 w-4" /> Logout
                 </button>
               </div>
            </div>
          </Reveal>
          
          <Reveal delay={0.4}>
             <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 flex items-center gap-6">
                <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div className="flex-1">
                   <h4 className="text-lg font-bold text-white">Verificação de Conta</h4>
                   <p className="text-sm text-white/40">Seu perfil está 100% verificado para operações de alto valor.</p>
                </div>
                <TrendingUp className="h-8 w-8 text-white/10" />
             </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default AreaCliente;
