import { Link } from "react-router-dom";
 import { ArrowRight, Banknote, ShieldCheck, FileCheck2, Sparkles, MessageCircle, BarChart3, Zap, Clock, Lock } from "lucide-react";
import TopNav from "@/components/header/TopNav";
import ContactFooter from "@/components/ContactFooter";
import AnimatedBackdrop from "@/components/AnimatedBackdrop";
import { useSeo } from "@/hooks/useSeo";
import { whatsappLink } from "@/config/site";
import heroSec from "@/assets/hero-securitizadora-wide.webp";
import imgAntecipacao from "@/assets/showcase-antecipacao.webp";
import imgBoleto from "@/assets/showcase-boleto.webp";
import imgLuri from "@/assets/luri-hero.webp";

const products = [
  {
    href: "/securitizadora/antecipacao-de-recebiveis",
    image: imgAntecipacao,
    title: "Antecipação de Recebíveis",
    desc: "Transforme duplicatas, NFs e contratos em capital de giro em até 24h.",
    icon: Banknote,
  },
  {
    href: "/securitizadora/boleto-garantido",
    image: imgBoleto,
    title: "Boleto Garantido",
    desc: "Receba 100% das suas vendas no boleto, mesmo na inadimplência.",
    icon: ShieldCheck,
  },
  {
    href: "/securitizadora/conta-digital-luri",
    image: imgLuri,
    title: "Conta Digital Luri",
    desc: "Conta PJ e PF integrada, sem tarifas e com crédito embutido.",
    icon: FileCheck2,
  },
];

const Securitizadora = () => {
  useSeo({
    title: "Credifácil Securitizadora — Capital de giro e soluções B2B",
    description: "Securitizadora autorizada com soluções de antecipação de recebíveis, boleto garantido e conta digital para empresas.",
  });

  return (
     <div className="relative min-h-screen pt-[72px] md:pt-[88px]">
      <TopNav />
      <main id="main">
        {/* Hero */}
         <section className="relative overflow-hidden py-16 sm:py-24 md:py-32">
           <div className="pointer-events-none absolute inset-0 opacity-30">
             <img src={heroSec} alt="" className="h-full w-full object-cover" />
           </div>
           <div className="relative mx-auto max-w-5xl px-5 text-center md:px-8">
             <span className="pill-eyebrow-dark mx-auto">
               <Sparkles className="h-3.5 w-3.5" /> Credifácil Securitizadora
             </span>
             <h1
               className="mt-6 font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-6xl lg:text-7xl"
             >
               Soluções financeiras <br className="hidden md:block" />
               <span className="text-gold-gradient">sob medida para empresas</span>
             </h1>
             <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
               Capital de giro, garantia de recebimento e infraestrutura financeira moderna.
               Tudo o que sua empresa precisa para crescer sem fricção.
             </p>
             <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
               <a href={whatsappLink("Olá! Quero conhecer as soluções da Securitizadora.")} className="btn-gold group">
                 <MessageCircle className="h-5 w-5" /> Falar com consultor B2B
               </a>
               <a href="#produtos" className="btn-ghost-light">Ver soluções</a>
             </div>
           </div>
         </section>

          {/* Vantagens */}
          <section className="relative py-20 bg-card/30">
            <div className="mx-auto max-w-7xl px-5 md:px-8">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                  <BarChart3 className="h-10 w-10 text-brand-gold mb-4" />
                  <h4 className="text-white font-bold mb-2">Taxas Competitivas</h4>
                  <p className="text-sm text-muted-foreground">Otimizamos sua estrutura de capital com as melhores taxas do mercado secundário.</p>
                </div>
                <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                  <Zap className="h-10 w-10 text-brand-gold mb-4" />
                  <h4 className="text-white font-bold mb-2">Liquidez Imediata</h4>
                  <p className="text-sm text-muted-foreground">Transforme ativos ilíquidos em caixa em até 24 horas para sua operação não parar.</p>
                </div>
                <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                  <Clock className="h-10 w-10 text-brand-gold mb-4" />
                  <h4 className="text-white font-bold mb-2">Agilidade Digital</h4>
                  <p className="text-sm text-muted-foreground">Processos 100% online, sem papelada e com análise de crédito em tempo real.</p>
                </div>
                <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                  <Lock className="h-10 w-10 text-brand-gold mb-4" />
                  <h4 className="text-white font-bold mb-2">Segurança CVM</h4>
                  <p className="text-sm text-muted-foreground">Operamos sob as mais rígidas normas regulatórias para sua total tranquilidade.</p>
                </div>
              </div>
            </div>
          </section>
 
          {/* Produtos */}
         <section id="produtos" className="relative py-20 md:py-28">
           <div className="mx-auto max-w-7xl px-5 md:px-8">
             <div className="mx-auto max-w-2xl text-center">
               <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold">Nossas soluções</span>
               <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
                 Três soluções, uma plataforma
               </h2>
               <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-brand-gold" />
             </div>
             <div className="mt-14 grid gap-6 md:grid-cols-3">
              {products.map((p) => {
                const Icon = p.icon;
                return (
                  <Link
                    key={p.href}
                    to={p.href}
                    className="group glow-gold-hover relative overflow-hidden rounded-3xl border border-brand-gold/15 bg-card/85 backdrop-blur-xl"
                  >
                    <div className="relative h-52 w-full overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/95 via-card/40 to-transparent" />
                      <div
                        className="absolute -bottom-6 left-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl text-brand-gold-foreground shadow-[var(--shadow-gold)] ring-4 ring-card transition-transform group-hover:rotate-6 group-hover:scale-110"
                        style={{ background: "var(--gradient-gold)" }}
                      >
                        <Icon className="h-6 w-6" strokeWidth={2.2} />
                      </div>
                    </div>
                    <div className="p-7 pt-10">
                      <h3 className="font-display text-xl font-bold text-foreground">{p.title}</h3>
                      <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">{p.desc}</p>
                      <span className="mt-5 inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.15em] text-brand-gold">
                        Saiba mais <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <ContactFooter />
    </div>
  );
};

export default Securitizadora;
