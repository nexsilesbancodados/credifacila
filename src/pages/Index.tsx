import { lazy, Suspense, memo } from "react";
import { ArrowRight, Banknote, Receipt, ShieldCheck, Smartphone, TrendingUp, Briefcase, ShieldAlert, Landmark } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";
import HeroImage from "@/components/HeroImage";
import Reveal from "@/components/Reveal";
import TrustBadges from "@/components/TrustBadges";
import AnimatedStat from "@/components/AnimatedStat";
import PartnerLogos from "@/components/PartnerLogos";
import heroHome from "@/assets/img-hero-home.jpg";
import imgEquipe from "@/assets/img-equipe.jpg";
import imgConsignado from "@/assets/img-consignado.jpg";
import imgAntecipacao from "@/assets/img-antecipacao.jpg";
import imgBoleto from "@/assets/img-boleto.jpg";
import imgLuri from "@/assets/img-luri.jpg";
import imgInvestimentos from "@/assets/img-investimentos.jpg";
import imgSecuritizadora from "@/assets/img-securitizadora.jpg";
import StepTimeline from "@/components/sections/StepTimeline";
import ServiceCard from "@/components/sections/ServiceCard";

const Testimonials = lazy(() => import("@/components/Testimonials"));
const Newsletter = lazy(() => import("@/components/Newsletter"));
const FAQAccordion = lazy(() => import("@/components/FAQAccordion"));
const SocialProofToast = lazy(() => import("@/components/SocialProofToast"));

const Index = () => (
  <Layout tone="midnight">
    <SEOHead
      title="Credifácil | Inteligência Financeira & Crédito Estruturado"
      description="Soluções de crédito consignado, securitização e investimentos para alta performance financeira. Tecnologia e solidez bancária de referência nacional."
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "FinancialService",
        "name": "Credifácil Network",
        "description": "Plataforma de inteligência financeira e crédito estruturado.",
        "url": typeof window !== "undefined" ? window.location.origin : "",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Brasil"
        },
        "serviceType": ["Crédito Consignado", "Securitização", "Wealth Management"]
      }}
    />
    
    <section className="relative -mt-[72px] overflow-hidden pt-[72px] md:-mt-[84px] md:pt-[84px]" aria-label="Introdução e Destaques">
      <img
        src={heroHome}
        alt=""
        aria-hidden="true"
        loading="eager"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover brightness-[0.25]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(var(--midnight))/0.4] to-[hsl(var(--midnight))]" aria-hidden="true" />
      
      <div className="container-x relative py-20 md:py-32">
        <div className="max-w-4xl text-white">
          <Reveal>
            <span className="pill-gold"><ShieldAlert className="h-3 w-3" aria-hidden="true" /> Solidez Institucional & Tecnologia</span>
            <h1 className="mt-8 text-5xl font-black leading-[0.95] tracking-tighter md:text-7xl lg:text-8xl">
              Inteligência <br/> <span className="text-gold-gradient">Financeira</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-white/60 md:text-xl leading-relaxed font-medium">
              Elevamos o padrão do crédito no Brasil com estruturas personalizadas de fomento comercial e gestão de ativos para indivíduos e empresas de alta performance.
            </p>
            <nav className="mt-10 flex flex-wrap gap-4" aria-label="Ações principais">
              <Link to="/contato" className="btn-gold px-8 py-4 text-lg">Acessar Soluções <ArrowRight className="h-5 w-5 ml-2" aria-hidden="true" /></Link>
              <Link to="/sobre" className="btn-outline-white px-8 py-4 text-lg">Nossa Governança</Link>
            </nav>
            <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 border-t border-white/10 pt-10" aria-label="Estatísticas de mercado">
              <AnimatedStat value="1.2B" label="Liberados" prefix="R$" />
              <AnimatedStat value="65K" label="Clientes" />
              <AnimatedStat value="98%" label="Satisfação" />
              <AnimatedStat value="A+" label="Rating" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>

     <section className="container-x py-24" aria-labelledby="solutions-title">
       <Reveal>
         <SectionTitle
           light
           eyebrow="Portfolio"
           title={<>Ecossistema de <span className="text-gold-gradient">Alta Performance</span></>}
           subtitle="Integramos crédito, fomento e tecnologia em uma plataforma única para potencializar seus resultados financeiros."
           id="solutions-title"
         />
       </Reveal>
       <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
         {[
           <ServiceCard key="c" icon={Banknote} title="Consignado Premium" text="Taxas institucionais para servidores e beneficiários INSS com liberação recorde." href="/consignado" image={imgConsignado} />,
           <ServiceCard key="a" icon={Receipt} title="Asset-Based Lending" text="Antecipação estratégica de ativos para otimização do fluxo de caixa corporativo." href="/securitizadora/antecipacao-de-recebiveis" image={imgAntecipacao} />,
           <ServiceCard key="b" icon={ShieldCheck} title="Boleto Garantido" text="Estrutura de garantia de crédito para blindagem contra inadimplência B2B." href="/securitizadora/boleto-garantido" accent="gold" image={imgBoleto} />,
           <ServiceCard key="l" icon={Smartphone} title="Luri Digital Banking" text="O hub financeiro definitivo para gestão transacional e pix de crédito." href="/securitizadora/conta-digital-luri" image={imgLuri} />,
           <ServiceCard key="i" icon={TrendingUp} title="Wealth Management" text="Investimentos em ativos reais e crédito privado com gestão técnica especializada." href="/invista-conosco" accent="gold" image={imgInvestimentos} />,
           <ServiceCard key="s" icon={Briefcase} title="Securitizadora" text="Soluções de mercado de capitais para empresas em expansão estruturada." href="/securitizadora" image={imgSecuritizadora} />,
         ].map((card, i) => (
           <Reveal key={i} delay={i * 0.05}>{card}</Reveal>
         ))}
       </div>
     </section>
  
     <section className="container-x py-24 border-t border-white/5" aria-labelledby="governance-title">
       <div className="grid items-center gap-16 lg:grid-cols-2">
         <Reveal>
           <div className="relative">
             <div className="absolute -inset-4 bg-[hsl(var(--gold))/0.1] blur-3xl rounded-full" aria-hidden="true" />
             <HeroImage src={imgEquipe} alt="Time de consultores Wealth Advisory Credifácil" priority withLogo />
           </div>
         </Reveal>
         <Reveal delay={0.1}>
           <div>
             <span className="pill-gold"><Landmark className="h-3 w-3" aria-hidden="true" /> Governança & Solidez</span>
             <h2 id="governance-title" className="mt-6 text-4xl font-black leading-tight text-white md:text-5xl tracking-tighter">
               Mais que crédito: <br/> <span className="text-gold-gradient">Parceria Estratégica</span>
             </h2>
             <p className="mt-8 text-lg text-white/60 font-medium leading-relaxed">
               Nossa equipe multidisciplinar — formada por analistas de risco, economistas e consultores certificados — atua na ponta para garantir que cada solução seja um degrau para o seu crescimento.
             </p>
             <div className="mt-10 grid gap-8 sm:grid-cols-3" aria-label="Nossos números institucionais">
               <div>
                 <p className="text-4xl font-black text-white">12+</p>
                 <p className="text-[10px] uppercase tracking-widest font-bold text-white/30 mt-1">Anos de Mercado</p>
               </div>
               <div>
                 <p className="text-4xl font-black text-white">100%</p>
                 <p className="text-[10px] uppercase tracking-widest font-bold text-white/30 mt-1">Processo Digital</p>
               </div>
               <div>
                 <p className="text-4xl font-black text-white">A+</p>
                 <p className="text-[10px] uppercase tracking-widest font-bold text-white/30 mt-1">Rating Compliance</p>
               </div>
             </div>
           </div>
         </Reveal>
       </div>
     </section>

    <section className="bg-white/[0.02] py-24" aria-labelledby="workflow-section-title">
      <div className="container-x">
        <Reveal>
          <SectionTitle
            light
            eyebrow="Workflow"
            title="Do onboarding à liquidez"
            subtitle="Um processo fluido, seguro e totalmente transparente — sem letras miúdas."
            id="workflow-section-title"
          />
        </Reveal>
        <Reveal delay={0.1}><div className="mt-16">
          <StepTimeline
            steps={[
              { title: "Diagnóstico", text: "Entendemos seu cenário e necessidades em uma conversa técnica e direta." },
              { title: "Análise Digital", text: "Nosso motor de risco avalia a operação com base em dados em tempo real." },
              { title: "Estruturação", text: "Apresentamos a proposta com as melhores taxas e prazos do mercado." },
              { title: "Liquidez", text: "Assinatura digital e capital disponível em conta em até 24 horas úteis." },
            ]}
          />
        </div></Reveal>
      </div>
    </section>

    <section className="container-x py-24" aria-label="Ajuda e Novidades">
       <div className="grid gap-20 lg:grid-cols-2">
         <Reveal>
           <div role="region" aria-label="Perguntas Frequentes rápidas">
             <Suspense fallback={<div className="h-40 animate-pulse bg-white/5 rounded-3xl" aria-hidden="true" />}>
               <FAQAccordion
                 dark
                 items={[
                   { q: "Qual o SLA para liberação de crédito?", a: "Para a maioria das operações, a liquidez é garantida em até 24h úteis após aprovação." },
                   { q: "Quais são os ratings de taxas?", a: "Nossas taxas são customizadas por perfil, iniciando em patamares institucionais competitivos." },
                   { q: "Como funciona a segurança dos dados?", a: "Seguimos padrões bancários de criptografia e conformidade total com a LGPD." },
                 ]}
               />
             </Suspense>
           </div>
         </Reveal>
         <Reveal delay={0.1}>
            <section className="rounded-[3rem] bg-gradient-to-br from-[hsl(var(--gold-soft))] to-[hsl(var(--gold))] p-12 text-navy-deep shadow-2xl" aria-labelledby="newsletter-title">
              <h3 id="newsletter-title" className="text-3xl font-black leading-tight">Mantenha-se <br/>Atualizado</h3>
              <p className="mt-4 font-bold opacity-70">Receba análises de mercado e insights financeiros exclusivos do nosso comitê técnico.</p>
              <Suspense fallback={<div className="h-10 mt-6 animate-pulse bg-white/10 rounded-full" aria-hidden="true" />}>
                <Newsletter />
              </Suspense>
            </section>
         </Reveal>
       </div>
    </section>

    <section className="container-x py-24 border-t border-white/5" aria-labelledby="credentials-title">
       <Reveal>
         <SectionTitle
          light
          eyebrow="Credentials"
          title={<>Referência no <span className="text-gold-gradient">Mercado Financeiro</span></>}
          id="credentials-title"
        />
      </Reveal>
      <div className="mt-16">
         <Suspense fallback={<div className="h-64 animate-pulse bg-white/5 rounded-3xl" aria-hidden="true" />}>
           <Testimonials />
         </Suspense>
      </div>
    </section>

    <CTASection
      title="Pronto para elevar seu padrão financeiro?"
      subtitle="Converse agora com um de nossos Relationship Managers."
      cta="Acessar Consultoria"
    />
    
    <Suspense fallback={null}>
      <SocialProofToast />
    </Suspense>
  </Layout>
);

export default memo(Index);
