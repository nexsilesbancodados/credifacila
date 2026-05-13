import { ArrowRight, Award, Banknote, Building2, GraduationCap, Headset, HeartHandshake, Lock, Receipt, ShieldCheck, Smartphone, Sparkles, TrendingUp, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";
import HeroImage from "@/components/HeroImage";
import Reveal from "@/components/Reveal";
import TrustBadges from "@/components/TrustBadges";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import FAQAccordion from "@/components/FAQAccordion";
import AnimatedStat from "@/components/AnimatedStat";
import PartnerLogos from "@/components/PartnerLogos";
import SocialProofToast from "@/components/SocialProofToast";
import heroHome from "@/assets/img-hero-home.jpg";
import imgEquipe from "@/assets/img-equipe.jpg";
import imgConsignado from "@/assets/img-consignado.jpg";
import imgAntecipacao from "@/assets/img-antecipacao.jpg";
import imgBoleto from "@/assets/img-boleto.jpg";
import imgLuri from "@/assets/img-luri.jpg";
import imgInvestimentos from "@/assets/img-investimentos.jpg";
import imgSecuritizadora from "@/assets/img-securitizadora.jpg";
import FeatureGrid from "@/components/sections/FeatureGrid";
import StepTimeline from "@/components/sections/StepTimeline";
import ServiceCard from "@/components/sections/ServiceCard";
import BlogCard from "@/components/sections/BlogCard";
import { POSTS } from "@/data/posts";

const Index = () => (
  <Layout tone="royal">
    <SEOHead
      title="Credifácil | Crédito rápido, seguro e descomplicado"
      description="Crédito pessoal, consignado e empresarial 100% online. Aprovação em minutos, sem burocracia. Mais de 50 mil clientes confiam na Credifácil."
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Credifácil",
        url: typeof window !== "undefined" ? window.location.origin : "",
        potentialAction: { "@type": "SearchAction", target: "/blog?q={search_term_string}", "query-input": "required name=search_term_string" },
      }}
    />
    {/* HERO */}
    <section className="relative -mt-[72px] overflow-hidden pt-[72px] md:-mt-[84px] md:pt-[84px]">
      <img
        src={heroHome}
        alt=""
        aria-hidden="true"
        loading="eager"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover brightness-[0.4]"
      />
      <div className="blob -left-20 top-32 h-96 w-96 anim-floaty" style={{ background: "hsl(202 100% 56% / 0.5)" }} />
      <div className="blob right-0 top-10 h-80 w-80 anim-floaty" style={{ background: "hsl(40 78% 48% / 0.35)", animationDelay: "1.5s" }} />
      <div className="container-x relative py-16 md:py-24">
        <div className="max-w-3xl text-white">
          <span className="pill-light"><Sparkles className="h-3 w-3" /> Soluções financeiras inteligentes</span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] md:text-5xl lg:text-6xl">
            Crédito fácil, <span className="text-gold-gradient">rápido e seguro</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-white/95 md:text-lg">
            Soluções financeiras inteligentes para realizar seus planos e impulsionar seu negócio com tranquilidade.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contato" className="btn-gold">Solicitar crédito <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/contato" className="btn-ghost">Fale com um especialista</Link>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-2 gap-3 text-white sm:grid-cols-4">
            <AnimatedStat value="20000" label="clientes" />
            <AnimatedStat value="98%" label="aprovação" />
            <AnimatedStat value="24h" label="liberação" />
            <AnimatedStat value="1.15%" label="a partir" />
          </div>
        </div>
      </div>

      {/* Benefit strip */}
      <div className="container-x relative pb-16">
        <div className="rounded-3xl border border-white/15 bg-white/95 p-6 text-slate-900 shadow-[var(--shadow-elev)] backdrop-blur-xl">
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { I: Zap, t: "Aprovação rápida", s: "Resposta em minutos" },
              { I: TrendingUp, t: "Taxas competitivas", s: "A partir de 1,15% a.m." },
              { I: Headset, t: "Atendimento humanizado", s: "Especialistas reais" },
              { I: Lock, t: "100% digital e seguro", s: "Criptografia ponta a ponta" },
            ].map(({ I, t, s }) => (
              <div key={t} className="flex items-start gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[hsl(var(--royal))/0.12] to-[hsl(var(--sky))/0.12] text-[hsl(var(--royal))]">
                  <I className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-extrabold">{t}</p>
                  <p className="text-xs text-muted-foreground">{s}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* TRUST BADGES */}
    <Reveal>
      <TrustBadges />
    </Reveal>

    {/* PARCEIROS */}
    <PartnerLogos />

     {/* SOLUÇÕES */}
     <section className="container-x py-20">
       <Reveal>
       <SectionTitle
         light
         eyebrow="Nossas soluções"
         title={<>Soluções completas para você <span className="text-royal-gradient">e seu negócio</span></>}
         subtitle="Crédito, gestão e investimentos em um único lugar — com tecnologia, segurança e atendimento humano."
       />
       </Reveal>
       <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
         {[
           <ServiceCard key="c" icon={Banknote} title="Consignado" text="Aprovação facilitada com taxas reduzidas e parcelas que cabem no seu orçamento." href="/consignado" image={imgConsignado} />,
           <ServiceCard key="a" icon={Receipt} title="Antecipação de Recebíveis" text="Transforme vendas futuras em capital imediato para sua empresa crescer." href="/securitizadora/antecipacao-de-recebiveis" image={imgAntecipacao} />,
           <ServiceCard key="b" icon={ShieldCheck} title="Boleto Garantido" text="Mais segurança nas vendas e previsibilidade no recebimento." href="/securitizadora/boleto-garantido" accent="gold" image={imgBoleto} />,
           <ServiceCard key="l" icon={Smartphone} title="Conta Digital Luri" text="Conta completa para pessoas e empresas com Pix, pagamentos e gestão." href="/securitizadora/conta-digital-luri" image={imgLuri} />,
           <ServiceCard key="i" icon={TrendingUp} title="Invista Conosco" text="Oportunidades estruturadas com transparência e acompanhamento consultivo." href="/invista-conosco" accent="gold" image={imgInvestimentos} />,
           <ServiceCard key="s" icon={Building2} title="Securitizadora" text="Soluções financeiras inteligentes para empresas crescerem com segurança." href="/securitizadora" image={imgSecuritizadora} />,
         ].map((card, i) => (
           <Reveal key={i} delay={i * 0.06}>{card}</Reveal>
         ))}
       </div>
     </section>
 
     {/* FAQ */}
     <section className="container-x py-20">
       <div className="grid gap-12 lg:grid-cols-2">
         <Reveal>
           <div>
             <SectionTitle
               light
               align="left"
               eyebrow="Tire suas dúvidas"
               title="Perguntas frequentes"
               subtitle="Separamos as principais dúvidas dos nossos clientes para te ajudar."
             />
             <div className="mt-8">
               <Link to="/duvidas" className="btn-outline-white">Ver FAQ completo</Link>
             </div>
           </div>
         </Reveal>
         <Reveal delay={0.1}>
           <FAQAccordion
             dark
             items={[
               { q: "Qual o prazo para liberação do crédito?", a: "Após a aprovação final, o valor é liberado em sua conta em até 24 horas úteis." },
               { q: "Quais são as taxas de juros?", a: "As taxas variam conforme a modalidade e perfil, iniciando em 1,15% ao mês para consignado." },
               { q: "Posso contratar se estiver negativado?", a: "Sim, para a modalidade de crédito consignado, realizamos análise mesmo para negativados." },
               { q: "O processo é totalmente digital?", a: "Sim, você pode fazer tudo pelo seu celular ou computador com total segurança e rapidez." },
             ]}
           />
         </Reveal>
       </div>
     </section>
 
    {/* EQUIPE */}
    <section className="container-x py-20">
      <Reveal>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <HeroImage src={imgEquipe} alt="Equipe Credifácil" withLogo />
        </div>
        <div>
          <span className="pill"><Users className="h-3 w-3" /> Quem somos</span>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
            Mais de uma década construindo <span className="text-royal-gradient">histórias financeiras</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            Nascemos da convicção de que crédito e investimento devem ser acessíveis, claros e justos. Hoje, somos uma equipe multidisciplinar formada por economistas, analistas de risco e consultores certificados — pessoas que tratam cada cliente pelo nome.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div>
              <p className="text-3xl font-extrabold text-[hsl(var(--royal))]">12+</p>
              <p className="text-xs uppercase tracking-wider font-bold text-muted-foreground">anos de mercado</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-[hsl(var(--royal))]">120</p>
              <p className="text-xs uppercase tracking-wider font-bold text-muted-foreground">colaboradores</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-[hsl(var(--royal))]">4.8</p>
              <p className="text-xs uppercase tracking-wider font-bold text-muted-foreground">nota Reclame Aqui</p>
            </div>
          </div>
        </div>
      </div>
      </Reveal>
    </section>

    {/* COMO FUNCIONA */}
    <section className="container-x py-20">
      <Reveal><SectionTitle
        light
        eyebrow="Como funciona"
        title="Da solicitação ao dinheiro em conta"
        subtitle="Um fluxo único, transparente e sem letras miúdas — pensado para você acompanhar cada etapa em tempo real."
      /></Reveal>
      <Reveal delay={0.1}><div className="mt-12">
        <StepTimeline
          steps={[
            { title: "Conte sua história", text: "Em até 3 minutos você nos diz o que precisa — sem formulários longos." },
            { title: "Análise inteligente", text: "Cruzamos dados em tempo real e um analista valida tudo manualmente." },
            { title: "Proposta sob medida", text: "Você compara taxas, prazos e parcelas antes de qualquer compromisso." },
            { title: "Dinheiro liberado", text: "Crédito disponível na sua conta em até 24h após assinatura digital." },
          ]}
        />
      </div></Reveal>
    </section>

    {/* RECONHECIMENTOS */}
    <section className="relative overflow-hidden py-20">
      <div className="container-x">
        <Reveal><SectionTitle
          light
          eyebrow="Reconhecimentos"
          title={<>Premiada pelo mercado, <span className="text-royal-gradient">aprovada pelos clientes</span></>}
          subtitle="Resultados que comprovam nosso compromisso com excelência e transparência."
        /></Reveal>
        <Reveal delay={0.1}><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { I: Award, big: "Top 5", small: "Fintechs de crédito 2025 — Valor Econômico" },
            { I: ShieldCheck, big: "RA1000", small: "Selo de excelência no atendimento Reclame Aqui" },
            { I: HeartHandshake, big: "NPS 78", small: "Clientes que recomendam a Credifácil" },
            { I: GraduationCap, big: "ANBIMA", small: "Certificação de boas práticas em distribuição" },
          ].map((it) => (
            <div key={it.big} className="card-soft p-6">
              <it.I className="h-7 w-7 text-[hsl(var(--gold-soft))]" />
              <p className="mt-4 text-2xl font-extrabold">{it.big}</p>
              <p className="mt-1 text-xs leading-relaxed">{it.small}</p>
            </div>
          ))}
        </div></Reveal>
      </div>
    </section>

    {/* BLOG */}
    <section className="container-x py-20">
      <Reveal><SectionTitle
        light
        eyebrow="Conteúdos"
        title="Aprenda mais sobre dinheiro, crédito e investimentos"
        subtitle="Conteúdos práticos para você decidir com mais segurança."
      /></Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {POSTS.slice(0, 3).map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.08}>
            <BlogCard post={p} idx={i} />
          </Reveal>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link to="/blog" className="btn-outline-white">Ver todos os conteúdos</Link>
      </div>
    </section>

    {/* DEPOIMENTOS */}
    <Reveal><Testimonials /></Reveal>

    {/* NEWSLETTER */}
    <Reveal><Newsletter /></Reveal>

    {/* CTA */}
    <CTASection
      title="Pronto para transformar seus planos em realidade?"
      subtitle="Fale com nossos especialistas e descubra a melhor solução para você."
      cta="Fale com um especialista"
    />
    <SocialProofToast />
  </Layout>
);

export default Index;