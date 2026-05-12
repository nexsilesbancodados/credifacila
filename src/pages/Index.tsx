import { ArrowRight, Banknote, Building2, CheckCircle2, FileCheck2, Headset, Lock, Receipt, ShieldCheck, Smartphone, Sparkles, TrendingUp, Wallet, Zap } from "lucide-react";
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
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="blob -left-20 top-32 h-96 w-96 anim-floaty" style={{ background: "hsl(202 100% 56% / 0.5)" }} />
      <div className="blob right-0 top-10 h-80 w-80 anim-floaty" style={{ background: "hsl(40 78% 48% / 0.35)", animationDelay: "1.5s" }} />
      <div className="container-x relative py-16 md:py-24">
        <div className="max-w-3xl text-white">
          <span className="pill-light"><Sparkles className="h-3 w-3" /> Soluções financeiras inteligentes</span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] md:text-5xl lg:text-6xl">
            Crédito fácil, <span className="text-gold-gradient">rápido e seguro</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-white/80 md:text-lg">
            Soluções financeiras inteligentes para realizar seus planos e impulsionar seu negócio com tranquilidade.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contato" className="btn-gold">Solicitar crédito <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/contato" className="btn-ghost">Fale com um especialista</Link>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-2 gap-3 text-white sm:grid-cols-4">
            {[
              { l: "+20 mil", s: "clientes" },
              { l: "98%", s: "aprovação" },
              { l: "24h", s: "liberação" },
              { l: "1,15%", s: "a partir" },
            ].map((x) => (
              <div key={x.l} className="rounded-2xl border border-white/15 bg-white/5 p-3 backdrop-blur-md">
                <p className="text-xl font-extrabold">{x.l}</p>
                <p className="text-[11px] uppercase tracking-wider text-white/70">{x.s}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefit strip */}
      <div className="container-x relative pb-16">
        <div className="rounded-3xl border border-white/15 bg-white/95 p-6 shadow-[var(--shadow-elev)] backdrop-blur-xl">
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

    {/* SOLUÇÕES */}
    <section className="container-x py-20">
      <Reveal>
      <SectionTitle
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

    {/* EQUIPE */}
    <section className="container-x py-20">
      <Reveal>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <HeroImage src={imgEquipe} alt="Equipe Credifácil" withLogo />
        </div>
        <div>
          <span className="pill"><Sparkles className="h-3 w-3" /> Atendimento humano</span>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
            Especialistas reais, do seu lado <span className="text-royal-gradient">em cada decisão</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            Nossa equipe combina experiência financeira e atendimento humanizado para encontrar a melhor solução para você ou sua empresa.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {["Equipe certificada", "Análise consultiva", "Soluções sob medida", "Acompanhamento real"].map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm font-semibold">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" /> {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
      </Reveal>
    </section>

    {/* COMO FUNCIONA */}
    <section className="container-x py-20">
      <Reveal><SectionTitle
        eyebrow="Como funciona"
        title="Simples, rápido e 100% digital"
        subtitle="Em poucos passos você sai da simulação para o crédito liberado em conta."
      /></Reveal>
      <Reveal delay={0.1}><div className="mt-12">
        <StepTimeline
          steps={[
            { title: "Solicite", text: "Faça sua solicitação online em poucos minutos." },
            { title: "Análise", text: "Avaliação rápida e segura por nossos especialistas." },
            { title: "Aprovação", text: "Você recebe a melhor oferta personalizada." },
            { title: "Use como quiser", text: "Crédito liberado direto na sua conta." },
          ]}
        />
      </div></Reveal>
    </section>

    {/* POR QUE ESCOLHER */}
    <section className="relative overflow-hidden py-20">
      <div className="container-x">
        <Reveal><SectionTitle
          eyebrow="Por que Credifácil?"
          title={<>Confiança, agilidade e <span className="text-royal-gradient">resultado real</span></>}
        /></Reveal>
        <Reveal delay={0.1}><div className="mt-12">
          <FeatureGrid
            cols={3}
            items={[
              { icon: ShieldCheck, title: "Confiança e tradição", text: "Empresa consolidada no mercado financeiro com milhares de clientes atendidos." },
              { icon: Zap, title: "Agilidade", text: "Aprovação e liberação rápidas, sem burocracia desnecessária." },
              { icon: Headset, title: "Atendimento humano", text: "Especialistas reais, prontos para encontrar a melhor solução para você." },
              { icon: Lock, title: "Segurança", text: "Tecnologia bancária e proteção completa em todas as etapas." },
              { icon: TrendingUp, title: "Melhores condições", text: "Taxas competitivas e prazos que cabem no seu planejamento." },
              { icon: FileCheck2, title: "Processo transparente", text: "Tudo claro do início ao fim, sem letras miúdas ou surpresas." },
            ]}
          />
        </div></Reveal>
      </div>
    </section>

    {/* BLOG */}
    <section className="container-x py-20">
      <Reveal><SectionTitle
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
        <Link to="/blog" className="btn-outline">Ver todos os conteúdos</Link>
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
  </Layout>
);

export default Index;