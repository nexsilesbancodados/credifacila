import { useEffect, useState, useId } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Loader2, LogIn, UserPlus, Mail, Lock, User } from "lucide-react";

const Auth = () => {
  const nav = useNavigate();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const id = useId();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) nav("/area-cliente", { replace: true });
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      if (session) nav("/area-cliente", { replace: true });
    });
    return () => sub.subscription.unsubscribe();
  }, [nav]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    setLoading(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: window.location.origin + "/area-cliente",
            data: { full_name: name },
          },
        });
        if (error) throw error;
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      }
    } catch (e: any) {
      setErr(e.message ?? "Erro ao autenticar");
    } finally {
      setLoading(false);
    }
  };

  const google = async () => {
    setErr(null);
    const r = await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin + "/area-cliente" });
    if (r.error) setErr(r.error.message ?? "Erro com Google");
  };

  return (
    <Layout tone="midnight">
      <PageHeader eyebrow="Acesso" title={mode === "login" ? "Entre na sua conta" : "Crie sua conta"} subtitle="Acesse sua área exclusiva e acompanhe tudo em um só lugar." />
      <section className="container-x pb-24">
        <div className="mx-auto max-w-md rounded-[2.5rem] border border-white/15 bg-white/5 p-10 text-white shadow-2xl backdrop-blur-md">
          <div className="mb-8 grid grid-cols-2 rounded-2xl bg-white/10 p-1.5 text-sm font-bold" role="tablist">
            <button 
              role="tab"
              aria-selected={mode === "login"}
              onClick={() => setMode("login")} 
              className={`rounded-xl py-3 transition-all outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--gold-soft))] ${mode === "login" ? "bg-[hsl(var(--gold-soft))] text-navy-deep shadow-lg" : "text-white/50 hover:text-white"}`}
            >
              Login
            </button>
            <button 
              role="tab"
              aria-selected={mode === "signup"}
              onClick={() => setMode("signup")} 
              className={`rounded-xl py-3 transition-all outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--gold-soft))] ${mode === "signup" ? "bg-[hsl(var(--gold-soft))] text-navy-deep shadow-lg" : "text-white/50 hover:text-white"}`}
            >
              Cadastro
            </button>
          </div>

          <button 
            onClick={google} 
            className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white px-5 py-4 text-sm font-black uppercase tracking-widest text-navy-deep transition-all hover:bg-white/90 outline-none focus-visible:ring-4 focus-visible:ring-white/20 shadow-xl"
            aria-label="Continuar com a conta Google"
          >
            <svg className="h-5 w-5" viewBox="0 0 48 48" aria-hidden="true"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.4 29.3 35.5 24 35.5c-6.4 0-11.5-5.1-11.5-11.5S17.6 12.5 24 12.5c2.9 0 5.6 1.1 7.6 2.9l5.7-5.7C33.6 6.3 29.1 4.5 24 4.5 13.2 4.5 4.5 13.2 4.5 24S13.2 43.5 24 43.5 43.5 34.8 43.5 24c0-1.2-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12.5 24 12.5c2.9 0 5.6 1.1 7.6 2.9l5.7-5.7C33.6 6.3 29.1 4.5 24 4.5 16.3 4.5 9.7 8.9 6.3 14.7z"/><path fill="#4CAF50" d="M24 43.5c5 0 9.5-1.7 13.1-4.7l-6-5.1c-2 1.4-4.5 2.3-7.1 2.3-5.3 0-9.7-3.1-11.3-7.5l-6.5 5C9.5 39.1 16.2 43.5 24 43.5z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.2 5.7l6 5.1c-.4.4 6.4-4.7 6.4-14.8 0-1.2-.1-2.4-.4-3.5z"/></svg>
            Google
          </button>

            <div className="my-8 flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
            <div className="h-px flex-1 bg-white/10" aria-hidden="true" />
            ou e-mail
            <div className="h-px flex-1 bg-white/10" aria-hidden="true" />
          </div>

          <form onSubmit={submit} className="space-y-4">
            {mode === "signup" && (
              <div className="space-y-1.5">
                <label htmlFor={`${id}-name`} className="sr-only">Nome Completo</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" aria-hidden="true" />
                  <input id={`${id}-name`} value={name} onChange={(e) => setName(e.target.value)} required placeholder="Seu nome completo" className="w-full rounded-2xl border border-white/10 bg-white/5 pl-11 pr-5 py-4 text-sm placeholder:text-white/30 outline-none focus:border-[hsl(var(--gold-soft))/0.5] transition-all" />
                </div>
              </div>
            )}
            <div className="space-y-1.5">
              <label htmlFor={`${id}-email`} className="sr-only">E-mail</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" aria-hidden="true" />
                <input id={`${id}-email`} type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="seu@email.com" className="w-full rounded-2xl border border-white/10 bg-white/5 pl-11 pr-5 py-4 text-sm placeholder:text-white/30 outline-none focus:border-[hsl(var(--gold-soft))/0.5] transition-all" />
              </div>
            </div>
            <div className="space-y-1.5">
              <label htmlFor={`${id}-pass`} className="sr-only">Senha</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" aria-hidden="true" />
                <input id={`${id}-pass`} type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} placeholder="Sua senha" className="w-full rounded-2xl border border-white/10 bg-white/5 pl-11 pr-5 py-4 text-sm placeholder:text-white/30 outline-none focus:border-[hsl(var(--gold-soft))/0.5] transition-all" />
              </div>
            </div>
            
            {err && (
              <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-bold" role="alert">
                {err}
              </div>
            )}
            
            <button disabled={loading} type="submit" className="btn-gold w-full flex justify-center py-4 mt-6">
              {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : mode === "login" ? <LogIn className="h-5 w-5 mr-2" /> : <UserPlus className="h-5 w-5 mr-2" />}
              {mode === "login" ? "Entrar na Conta" : "Criar minha Conta"}
            </button>
          </form>

          <p className="mt-8 text-center text-[10px] font-bold uppercase tracking-widest text-white/50 leading-relaxed">
            Ao continuar você concorda com nossos <br/> termos de uso. <Link to="/" className="text-white hover:text-[hsl(var(--gold-soft))] underline ml-1">Voltar ao site</Link>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Auth;
