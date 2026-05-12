import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { LogOut, User, FileText, CreditCard, MessageCircle, Loader2 } from "lucide-react";

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
    return <Layout tone="midnight"><div className="container-x py-32 text-center text-white/70"><Loader2 className="mx-auto h-8 w-8 animate-spin" /></div></Layout>;
  }

  const name = profile?.display_name || session?.user.email?.split("@")[0] || "Cliente";

  return (
    <Layout tone="midnight">
      <PageHeader eyebrow="Área do cliente" title={`Olá, ${name} 👋`} subtitle="Sua central exclusiva Credifácil. Acompanhe propostas, contratos e fale com a Luri." />
      <section className="container-x pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: FileText, title: "Minhas propostas", desc: "Acompanhe o status das suas solicitações de crédito.", cta: "Em breve" },
            { icon: CreditCard, title: "Contratos ativos", desc: "Veja parcelas, vencimentos e quitações.", cta: "Em breve" },
            { icon: MessageCircle, title: "Falar com a Luri", desc: "Tire dúvidas com nossa assistente de IA 24h.", cta: "Abrir chat", action: () => window.dispatchEvent(new CustomEvent("luri:open")) },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="group h-full rounded-3xl border border-white/15 bg-gradient-to-br from-white/10 to-white/5 p-6 text-white backdrop-blur-md transition hover:border-[hsl(var(--gold))/0.5]">
                <c.icon className="h-8 w-8 text-[hsl(var(--gold-soft))]" />
                <h3 className="mt-4 text-lg font-extrabold">{c.title}</h3>
                <p className="mt-2 text-sm text-white/65">{c.desc}</p>
                <button onClick={c.action} className="mt-5 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white/80 transition hover:bg-white/10">
                  {c.cta}
                </button>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-white sm:flex-row sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-[hsl(var(--gold))/0.15] text-[hsl(var(--gold-soft))]">
              <User className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-bold">{name}</p>
              <p className="text-xs text-white/50">{session?.user.email}</p>
            </div>
          </div>
          <button onClick={logout} className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white/80 transition hover:bg-white/10">
            <LogOut className="h-4 w-4" /> Sair
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default AreaCliente;