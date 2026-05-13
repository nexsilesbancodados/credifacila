 import { ArrowRight, ShieldCheck, Zap, Globe, TrendingUp, Users } from "lucide-react";
 import Navbar from "@/components/Navbar";
 
 const Index = () => {
   return (
     <div className="min-h-screen bg-black text-white font-sans selection:bg-gold selection:text-black">
       <Navbar />
       
       {/* Hero Section */}
       <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
           <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold/10 blur-[120px] rounded-full animate-pulse" />
           <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-gold/5 blur-[100px] rounded-full" />
         </div>
         
         <div className="container-x relative z-10">
           <div className="max-w-4xl">
             <div className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-2 mb-8 animate-fade-in">
               <span className="h-2 w-2 rounded-full bg-gold animate-ping" />
               <span className="text-[10px] font-bold uppercase tracking-widest text-gold">Inteligência Financeira</span>
             </div>
             
             <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 animate-fade-in">
               O banco do <span className="text-gold-gradient">amanhã</span>, hoje.
             </h1>
             
             <p className="text-lg md:text-2xl text-white/60 max-w-2xl mb-12 leading-relaxed animate-fade-in [animation-delay:200ms]">
               Soluções exclusivas em crédito, investimentos e gestão de ativos para quem busca excelência e solidez institucional.
             </p>
             
             <div className="flex flex-col sm:flex-row gap-4 animate-fade-in [animation-delay:400ms]">
               <button className="btn-gold py-5 px-10 text-lg">
                 Abra sua conta <ArrowRight className="ml-2 h-5 w-5" />
               </button>
               <button className="btn-outline-white py-5 px-10 text-lg">
                 Nossas Soluções
               </button>
             </div>
           </div>
         </div>
       </section>
 
       {/* Stats Section */}
       <section className="py-20 border-y border-white/5 bg-white/[0.02]">
         <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-12">
           {[
             { label: "Ativos sob Gestão", value: "R$ 2.4B+" },
             { label: "Clientes Ativos", value: "85K+" },
             { label: "Crescimento Anual", value: "140%" },
             { label: "Rating de Segurança", value: "AAA" },
           ].map((stat, i) => (
             <div key={i} className="text-center md:text-left">
               <p className="text-3xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
               <p className="text-xs uppercase tracking-widest text-white/40 font-bold">{stat.label}</p>
             </div>
           ))}
         </div>
       </section>
 
       {/* Solutions Section */}
       <section id="solutions" className="py-24 md:py-40">
         <div className="container-x">
           <div className="mb-20">
             <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
               Ecossistema de <span className="text-gold-gradient">Alta Performance</span>
             </h2>
             <p className="text-lg text-white/50 max-w-2xl">
               Combinamos tecnologia de ponta com expertise financeira para oferecer o que há de mais avançado no mercado.
             </p>
           </div>
 
           <div className="grid md:grid-cols-3 gap-8">
             {[
               { icon: ShieldCheck, title: "Segurança Bancária", desc: "Criptografia de nível militar e conformidade total com os órgãos reguladores." },
               { icon: Zap, title: "Crédito Instantâneo", desc: "Análise em tempo real com liberação de limites estruturados para seu perfil." },
               { icon: TrendingUp, title: "Investimentos", desc: "Acesso a produtos exclusivos e gestão profissional de patrimônio." },
               { icon: Globe, title: "Global Banking", desc: "Operações internacionais e câmbio com as melhores taxas do mercado." },
               { icon: Users, title: "Suporte VIP", desc: "Gerentes de relacionamento dedicados para acompanhar sua jornada." },
               { icon: Landmark, title: "Institucional", desc: "Soluções robustas para empresas e grandes corporações em expansão." },
             ].map((item, i) => (
               <div key={i} className="card-modern p-10 group">
                 <div className="h-14 w-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-8 group-hover:bg-gold/20 transition-colors">
                   <item.icon className="h-8 w-8 text-gold" />
                 </div>
                 <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                 <p className="text-white/50 leading-relaxed">{item.desc}</p>
               </div>
             ))}
           </div>
         </div>
       </section>
 
       {/* CTA Section */}
       <section id="contact" className="py-24 md:py-40">
         <div className="container-x">
           <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-white/10 to-transparent p-12 md:p-24 border border-white/10">
             <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 blur-[120px] -rotate-12 translate-x-1/2" />
             <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
               <div className="max-w-2xl text-center md:text-left">
                 <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
                   Pronto para o <span className="text-gold-gradient">próximo nível</span>?
                 </h2>
                 <p className="text-xl text-white/60 mb-0">
                   Junte-se a milhares de clientes que já transformaram sua relação com o dinheiro.
                 </p>
               </div>
               <div className="flex flex-col gap-4 w-full md:w-auto">
                 <button className="btn-gold py-6 px-12 text-xl whitespace-nowrap">
                   Começar agora
                 </button>
                 <p className="text-center text-sm text-white/30">Sem taxas de abertura ou manutenção.</p>
               </div>
             </div>
           </div>
         </div>
       </section>
 
       {/* Footer */}
       <footer className="py-20 border-t border-white/5">
         <div className="container-x">
           <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
             <div className="max-w-xs">
               <div className="flex items-center gap-2 mb-6">
                 <Landmark className="h-8 w-8 text-gold" />
                 <span className="text-xl font-bold tracking-tighter text-white">LURI<span className="text-gold">BANK</span></span>
               </div>
               <p className="text-white/40 leading-relaxed">
                 Redefinindo o sistema financeiro através de tecnologia, transparência e solidez institucional.
               </p>
             </div>
             
             <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
               <div>
                 <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Produto</h4>
                 <ul className="space-y-4 text-white/40 text-sm">
                   <li><a href="#" className="hover:text-gold transition-colors">Conta Digital</a></li>
                   <li><a href="#" className="hover:text-gold transition-colors">Cartões Premium</a></li>
                   <li><a href="#" className="hover:text-gold transition-colors">Crédito</a></li>
                 </ul>
               </div>
               <div>
                 <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Institucional</h4>
                 <ul className="space-y-4 text-white/40 text-sm">
                   <li><a href="#" className="hover:text-gold transition-colors">Sobre Nós</a></li>
                   <li><a href="#" className="hover:text-gold transition-colors">Segurança</a></li>
                   <li><a href="#" className="hover:text-gold transition-colors">Carreiras</a></li>
                 </ul>
               </div>
               <div className="col-span-2 md:col-span-1">
                 <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Legal</h4>
                 <ul className="space-y-4 text-white/40 text-sm">
                   <li><a href="#" className="hover:text-gold transition-colors">Privacidade</a></li>
                   <li><a href="#" className="hover:text-gold transition-colors">Termos de Uso</a></li>
                   <li><a href="#" className="hover:text-gold transition-colors">Ouvidoria</a></li>
                 </ul>
               </div>
             </div>
           </div>
           
           <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/20 text-xs">
             <p>© 2026 Luri Bank S.A. Todos os direitos reservados.</p>
             <p>CNPJ: 00.000.000/0000-00 | Av. Paulista, 1000 - São Paulo, SP</p>
           </div>
         </div>
       </footer>
     </div>
   );
 };
 
 export default Index;