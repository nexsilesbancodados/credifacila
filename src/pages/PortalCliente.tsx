 import { useState } from "react";
 import { User, Lock, ArrowRight, CheckCircle2, LayoutDashboard, Wallet, PieChart, ShieldCheck } from "lucide-react";
 import Navbar from "@/components/Navbar";
 import Footer from "@/components/Footer";
 
 const PortalCliente = () => {
   const [isLogin, setIsLogin] = useState(true);
 
   return (
     <div className="min-h-screen bg-background text-foreground">
       <Navbar />
       
       <main className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
         {/* Abstract background elements */}
         <div className="absolute top-0 -left-1/4 h-[500px] w-[500px] rounded-full bg-[hsl(var(--gold))]/5 blur-[120px]" />
         <div className="absolute bottom-0 -right-1/4 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[120px]" />
 
         <div className="container-x relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">
           {/* Left side: Information/Social Proof */}
           <div className="hidden space-y-8 lg:block">
             <div className="space-y-4">
               <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                 Sua vida financeira em <span className="text-gradient">um só lugar.</span>
               </h1>
               <p className="max-w-md text-lg text-muted-foreground">
                 Acesse o Portal do Cliente Credifácil para gerenciar seus investimentos, 
                 acompanhar antecipações e visualizar seu extrato completo.
               </p>
             </div>
 
             <div className="grid gap-4 sm:grid-cols-2">
               {[
                 { icon: LayoutDashboard, title: "Painel Completo", desc: "Visão 360º das suas finanças" },
                 { icon: Wallet, title: "Gestão de Ativos", desc: "Acompanhe seus rendimentos" },
                 { icon: PieChart, title: "Relatórios", desc: "Análises detalhadas mensais" },
                 { icon: ShieldCheck, title: "Segurança", desc: "Dados protegidos com criptografia" },
               ].map((feature, i) => (
                 <div key={i} className="flex flex-col gap-3 rounded-2xl border border-white/5 bg-white/5 p-5 backdrop-blur-sm">
                   <feature.icon className="h-6 w-6 text-[hsl(var(--gold))]" />
                   <div>
                     <h3 className="font-semibold">{feature.title}</h3>
                     <p className="text-xs text-muted-foreground">{feature.desc}</p>
                   </div>
                 </div>
               ))}
             </div>
           </div>
 
           {/* Right side: Login Form */}
           <div className="flex justify-center lg:justify-end">
             <div className="w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] shadow-2xl backdrop-blur-md">
               <div className="p-8 sm:p-10">
                 <div className="mb-8 text-center">
                   <h2 className="text-2xl font-bold">
                     {isLogin ? "Bem-vindo de volta" : "Criar sua conta"}
                   </h2>
                   <p className="mt-2 text-sm text-muted-foreground">
                     {isLogin 
                       ? "Acesse sua conta para continuar gerenciando seus ativos." 
                       : "Junte-se a nós e comece a investir com estratégia."}
                   </p>
                 </div>
 
                 <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                   {!isLogin && (
                     <div className="space-y-1.5">
                       <label className="text-sm font-medium text-foreground/80 ml-1">Nome completo</label>
                       <div className="group relative">
                         <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-[hsl(var(--gold))]" />
                         <input 
                           type="text" 
                           placeholder="João Silva" 
                           className="h-12 w-full rounded-xl border border-white/10 bg-white/5 pl-11 pr-4 text-sm transition-all focus:border-[hsl(var(--gold))/50] focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-[hsl(var(--gold))/50]"
                         />
                       </div>
                     </div>
                   )}
                   
                   <div className="space-y-1.5">
                     <label className="text-sm font-medium text-foreground/80 ml-1">E-mail ou CPF</label>
                     <div className="group relative">
                       <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-[hsl(var(--gold))]" />
                       <input 
                         type="text" 
                         placeholder="email@exemplo.com" 
                         className="h-12 w-full rounded-xl border border-white/10 bg-white/5 pl-11 pr-4 text-sm transition-all focus:border-[hsl(var(--gold))/50] focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-[hsl(var(--gold))/50]"
                       />
                     </div>
                   </div>
 
                   <div className="space-y-1.5">
                     <div className="flex items-center justify-between ml-1">
                       <label className="text-sm font-medium text-foreground/80">Senha</label>
                       {isLogin && (
                         <a href="#" className="text-xs text-[hsl(var(--gold-soft))] hover:underline">Esqueceu a senha?</a>
                       )}
                     </div>
                     <div className="group relative">
                       <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-[hsl(var(--gold))]" />
                       <input 
                         type="password" 
                         placeholder="••••••••" 
                         className="h-12 w-full rounded-xl border border-white/10 bg-white/5 pl-11 pr-4 text-sm transition-all focus:border-[hsl(var(--gold))/50] focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-[hsl(var(--gold))/50]"
                       />
                     </div>
                   </div>
 
                   <button 
                     className="group mt-2 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[hsl(var(--gold-soft))] to-[hsl(var(--gold))] font-bold text-background transition-all hover:scale-[1.02] active:scale-[0.98]"
                   >
                     {isLogin ? "Entrar na Conta" : "Criar Cadastro"}
                     <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                   </button>
                 </form>
 
                 <div className="mt-8 flex items-center gap-4">
                   <div className="h-px flex-1 bg-white/10" />
                   <span className="text-xs text-muted-foreground">OU</span>
                   <div className="h-px flex-1 bg-white/10" />
                 </div>
 
                 <p className="mt-8 text-center text-sm text-muted-foreground">
                   {isLogin ? "Ainda não é cliente?" : "Já possui conta?"}{" "}
                   <button 
                     onClick={() => setIsLogin(!isLogin)}
                     className="font-semibold text-[hsl(var(--gold-soft))] hover:text-[hsl(var(--gold))] hover:underline"
                   >
                     {isLogin ? "Cadastre-se aqui" : "Faça login"}
                   </button>
                 </p>
               </div>
             </div>
           </div>
         </div>
       </main>
 
       <Footer />
     </div>
   );
 };
 
 export default PortalCliente;
 