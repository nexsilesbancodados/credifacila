import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Loader2, LogIn, UserPlus, Mail, Lock } from "lucide-react";

const Auth = () => {
  const nav = useNavigate();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

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
        <div className="mx-auto max-w-md rounded-3xl border border-white/15 bg-white/5 p-8 text-white shadow-[var(--shadow-elev)] backdrop-blur-md">
          <div className="mb-6 grid grid-cols-2 rounded-full bg-white/10 p-1 text-sm font-semibold">
            <button onClick={() => setMode("login")} className={`rounded-full py-2 transition ${mode === "login" ? "bg-[hsl(var(--gold))] text-[hsl(var(--navy-deep))]" : "text-white/70"}`}>Entrar</button>
            <button onClick={() => setMode("signup")} className={`rounded-full py-2 transition ${mode === "signup" ? "bg-[hsl(var(--gold))] text-[hsl(var(--navy-deep))]" : "text-white/70"}`}>Criar conta</button>
          </div>

          <button onClick={google} className="flex w-full items-center justify-center gap-3 rounded-full border border-white/20 bg-white px-5 py-3 text-sm font-bold text-[hsl(var(--navy-deep))] transition hover:bg-white/90">
            <svg className="h-5 w-5" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.4 29.3 35.5 24 35.5c-6.4 0-11.5-5.1-11.5-11.5S17.6 12.5 24 12.5c2.9 0 5.6 1.1 7.6 2.9l5.7-5.7C33.6 6.3 29.1 4.5 24 4.5 13.2 4.5 4.5 13.2 4.5 24S13.2 43.5 24 43.5 43.5 34.8 43.5 24c0-1.2-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12.5 24 12.5c2.9 0 5.6 1.1 7.6 2.9l5.7-5.7C33.6 6.3 29.1 4.5 24 4.5 16.3 4.5 9.7 8.9 6.3 14.7z"/><path fill="#4CAF50" d="M24 43.5c5 0 9.5-1.7 13.1-4.7l-6-5.1c-2 1.4-4.5 2.3-7.1 2.3-5.3 0-9.7-3.1-11.3-7.5l-6.5 5C9.5 39.1 16.2 43.5 24 43.5z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.2 5.7l6 5.1c-.4.4 6.4-4.7 6.4-14.8 0-1.2-.1-2.4-.4-3.5z"/></svg>
            Continuar com Google
          </button>

          <div className="my-5 flex items-center gap-3 text-xs text-white/40">
            <div className="h-px flex-1 bg-white/15" />ou<div className="h-px flex-1 bg-white/15" />
          </div>

          <form onSubmit={submit} className="space-y-3">
            {mode === "signup" && (
              <input value={name} onChange={(e) => setName(e.target.value)} required placeholder="Seu nome completo" className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm placeholder:text-white/50 outline-none focus:border-[hsl(var(--gold))]" />
            )}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="seu@email.com" className="w-full rounded-full border border-white/20 bg-white/10 pl-11 pr-5 py-3 text-sm placeholder:text-white/50 outline-none focus:border-[hsl(var(--gold))]" />
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} placeholder="Senha (mín. 6 caracteres)" className="w-full rounded-full border border-white/20 bg-white/10 pl-11 pr-5 py-3 text-sm placeholder:text-white/50 outline-none focus:border-[hsl(var(--gold))]" />
            </div>
            {err && <p className="text-sm text-red-300">{err}</p>}
            <button disabled={loading} type="submit" className="btn-gold w-full">
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : mode === "login" ? <LogIn className="h-4 w-4" /> : <UserPlus className="h-4 w-4" />}
              {mode === "login" ? "Entrar" : "Criar conta"}
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-white/50">
            Ao continuar você concorda com nossos termos. <Link to="/" className="underline hover:text-white">Voltar ao site</Link>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Auth;