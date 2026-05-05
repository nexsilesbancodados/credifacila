import { ArrowRight, MessageCircle, Sparkles, ShieldCheck } from "lucide-react";
import { whatsappLink } from "@/config/site";
import heroBg from "@/assets/hero-consignado-banner.png";

const HeroHome = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
    <div className="absolute inset-0 pointer-events-none">
      <img 
        src={heroBg} 
        alt="" 
        className="w-full h-full object-cover opacity-20 scale-110 blur-[2px]" 
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
    </div>
    
    <div className="relative mx-auto max-w-7xl px-5 md:px-8 w-full">
      <div className="max-w-3xl">
        <span className="pill-eyebrow-dark mb-6">
          <Sparkles className="h-4 w-4" /> Autorizada pelo Banco Central
        </span>
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[0.95] mb-8">
          O crédito que <br />
          <span className="text-gold-gradient">respeita você.</span>
        </h1>
        <p className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed mb-10">
          Do consignado à securitização de ativos, oferecemos soluções financeiras sólidas, transparentes e 100% digitais.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <a href={whatsappLink("Olá! Gostaria de conhecer as soluções da Credifácil.")} className="btn-gold px-8 py-4 text-lg">
            Falar com Especialista
            <ArrowRight className="h-5 w-5 ml-2" />
          </a>
          <a href="#solucoes" className="btn-ghost-light px-8 py-4 text-lg">
            Ver Soluções
          </a>
        </div>
        
        <div className="mt-16 flex items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           <div className="flex items-center gap-2">
             <ShieldCheck className="h-5 w-5 text-brand-gold" />
             <span className="text-xs uppercase tracking-widest font-bold text-white">Segurança Total</span>
           </div>
           <div className="flex items-center gap-2">
             <ShieldCheck className="h-5 w-5 text-brand-gold" />
             <span className="text-xs uppercase tracking-widest font-bold text-white">100% Digital</span>
           </div>
           <div className="flex items-center gap-2">
             <ShieldCheck className="h-5 w-5 text-brand-gold" />
             <span className="text-xs uppercase tracking-widest font-bold text-white">Atendimento Humano</span>
           </div>
        </div>
      </div>
    </div>
    
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
      <div className="w-1 h-12 rounded-full bg-gradient-to-b from-brand-gold to-transparent" />
    </div>
  </section>
);

export default HeroHome;