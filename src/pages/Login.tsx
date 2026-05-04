import { useSeo } from "@/hooks/useSeo";
import TopNav from "@/components/header/TopNav";
import ContactFooter from "@/components/ContactFooter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LogIn, UserPlus, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  useSeo({ 
    title: "Área do Cliente | Credifácil",
    description: "Acesse sua conta Credifácil para gerenciar seus empréstimos e investimentos com segurança."
  });

  return (
    <div className="min-h-screen bg-[hsl(0_0%_4%)]">
      <TopNav />
      
      <main className="flex flex-col items-center justify-center px-4 py-12 sm:px-5 sm:py-24">
        <div className="w-full max-w-md">
          <header className="mb-10 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-brand-gold/30 bg-brand-gold/5 text-brand-gold">
              <LogIn className="h-8 w-8" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white">Bem-vindo de volta</h1>
            <p className="mt-3 text-white/50">Acesse sua conta para gerenciar seus planos.</p>
          </header>

          <Card className="border-white/10 bg-white/[0.02] p-5 sm:p-8 shadow-2xl backdrop-blur-xl">
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white/80">E-mail</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="exemplo@email.com" 
                  className="border-white/10 bg-white/5 text-white placeholder:text-white/20 focus:border-brand-gold/50"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="pass" className="text-white/80">Senha</Label>
                  <button type="button" className="text-xs text-brand-gold hover:underline">
                    Esqueceu a senha?
                  </button>
                </div>
                <Input 
                  id="pass" 
                  type="password" 
                  placeholder="••••••••" 
                  className="border-white/10 bg-white/5 text-white placeholder:text-white/20 focus:border-brand-gold/50"
                />
              </div>

              <Button className="w-full bg-brand-gold font-bold uppercase tracking-wider text-[hsl(0_0%_4%)] hover:bg-brand-gold/90">
                Entrar na conta
              </Button>
            </form>

            <div className="mt-8 flex flex-col gap-4 text-center">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-white/5"></span>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-[hsl(0_0%_4%)] px-2 text-white/30">Ainda não tem conta?</span>
                </div>
              </div>
              
              <Button variant="outline" className="border-white/10 bg-transparent text-white hover:bg-white/5">
                <UserPlus className="mr-2 h-4 w-4" />
                Solicitar acesso
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