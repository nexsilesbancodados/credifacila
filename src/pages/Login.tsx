import { useSeo } from "@/hooks/useSeo";
import TopNav from "@/components/header/TopNav";
import ContactFooter from "@/components/ContactFooter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { LogIn, UserPlus, ShieldCheck, Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const Login = () => {
  useSeo({
    title: "Login Administrativo | Credifácil",
    description: "Acesso restrito à equipe Credifácil. Login administrativo seguro com criptografia de ponta a ponta.",
    noindex: true,
  });
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate("/dashboard", { replace: true });
    });
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMsg(null);
    try {
      if (mode === "signin") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        navigate("/dashboard", { replace: true });
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${window.location.origin}/dashboard` },
        });
        if (error) throw error;
        setMsg("Cadastro realizado. Verifique seu e-mail para confirmar.");
      }
    } catch (err: any) {
      setMsg(err.message ?? "Erro ao processar.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[hsl(0_0%_4%)]">
      <TopNav />
      
       <main className="flex flex-col items-center justify-center px-4 py-12 pt-[112px] sm:px-5 sm:py-24 sm:pt-[132px]">
        <div className="w-full max-w-md">
          <header className="mb-10 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-brand-gold/30 bg-brand-gold/5 text-brand-gold">
              <LogIn className="h-8 w-8" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white">{mode === "signin" ? "Bem-vindo de volta" : "Criar conta"}</h1>
            <p className="mt-3 text-white/50">Acesso restrito à equipe administrativa.</p>
          </header>

          <Card className="border-white/10 bg-white/[0.02] p-5 sm:p-8 shadow-2xl backdrop-blur-xl">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white/80">E-mail</Label>
                <Input 
                  id="email" 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="exemplo@email.com" 
                  className="border-white/10 bg-white/5 text-white placeholder:text-white/20 focus:border-brand-gold/50"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="pass" className="text-white/80">Senha</Label>
                </div>
                <div className="relative">
                  <Input 
                    id="pass" 
                    type={showPass ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                    placeholder="••••••••" 
                    className="border-white/10 bg-white/5 pr-11 text-white placeholder:text-white/20 focus:border-brand-gold/50"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(v => !v)}
                    aria-label={showPass ? "Ocultar senha" : "Mostrar senha"}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-brand-gold"
                  >
                    {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {msg && <p className="text-sm text-brand-gold">{msg}</p>}

              <Button type="submit" disabled={loading} className="w-full bg-brand-gold font-bold uppercase tracking-wider text-[hsl(0_0%_4%)] hover:bg-brand-gold/90">
                {loading ? "Aguarde..." : mode === "signin" ? "Entrar na conta" : "Criar conta"}
              </Button>
            </form>

            <div className="mt-8 flex flex-col gap-4 text-center">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-white/5"></span>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-[hsl(0_0%_4%)] px-2 text-white/30">{mode === "signin" ? "Ainda não tem conta?" : "Já tem conta?"}</span>
                </div>
              </div>
              
              <Button type="button" variant="outline" onClick={() => setMode(mode === "signin" ? "signup" : "signin")} className="border-white/10 bg-transparent text-white hover:bg-white/5">
                <UserPlus className="mr-2 h-4 w-4" />
                {mode === "signin" ? "Criar conta" : "Fazer login"}
              </Button>
            </div>
          </Card>
          
          <div className="mt-10 flex items-center justify-center gap-2 text-xs text-white/30">
            <ShieldCheck className="h-4 w-4 text-brand-gold" />
            Acesso criptografado e 100% seguro.
          </div>
        </div>
      </main>

      <ContactFooter />
    </div>
  );
};

export default Login;