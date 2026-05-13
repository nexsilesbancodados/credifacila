import { memo } from "react";
import { BarChart3, HandCoins, LineChart, Receipt, ShieldCheck, Smartphone, TrendingUp, Wallet, Fingerprint, Search, Briefcase, Network } from "lucide-react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/sections/ServiceCard";
import StepTimeline from "@/components/sections/StepTimeline";
import CTASection from "@/components/CTASection";
import imgSecuritizadora from "@/assets/img-securitizadora.jpg";
import SectionBanner from "@/components/SectionBanner";
import bannerEquipe from "@/assets/banner-equipe.png";
import Reveal from "@/components/Reveal";

const Securitizadora = () => (
  <Layout tone="midnight">
    <SEOHead
      title="Securitizadora Credifácil | Engenharia Financeira para Empresas"
      description="Soluções estruturadas para transformar recebíveis em capital estratégico. Liquidez, segurança e governança de alto nível para sua gestão financeira corporativa."
    />
    <PageHeader
      eyebrow="Structured Finance"
      title={<>Engenharia financeira para empresas que <span className="text-gold-gradient">dominam o mercado</span></>}
      subtitle="Transformamos seus ativos creditórios em liquidez imediata através de estruturas sólidas de securitização e fomento comercial."
      primaryCta={{ label: "Consultar Limite Operacional", href: "/contato" }}
      secondaryCta={{ label: "Nossas Soluções", href: "#solucoes" }}
      bgImage={imgSecuritizadora}
      className="-mt-[72px] pt-[72px] md:-mt-[84px] md:pt-[84px]"
    />

    <section className="container-x py-24" aria-labelledby="definition-title">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <div>
            <span className="pill-gold"><Briefcase className="h-3 w-3" aria-hidden="true" /> Soluções B2B</span>
            <h2 id="definition-title" className="mt-6 text-3xl font-black leading-tight text-white md:text-5xl tracking-tighter">O que é a Securitização Estratégica?</h2>
            <p className="mt-6 text-lg text-white/80 font-medium leading-relaxed">
              Diferente da antecipação bancária comum, a securitização é um processo de engenharia financeira que isola o risco dos ativos, permitindo taxas mais competitivas e maior fôlego para o fluxo de caixa da sua empresa.
            </p>
            <div className="mt-8 p-8 rounded-[2rem] bg-white/5 border border-white/10">
              <p className="text-sm italic text-white/60 leading-relaxed">"A securitizadora atua como um braço financeiro externo, permitindo que a empresa foque em sua atividade core enquanto garantimos a liquidez do faturamento."</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-6" aria-label="Indicadores de performance">
            {[
              { I: TrendingUp, t: "Alavancagem Saudável", v: "+92%", d: "Crescimento sem dívida" },
              { I: ShieldCheck, t: "Segurança de Lastro", v: "100%", d: "Operações auditadas" },
              { I: Wallet, t: "Cash-on-hand", v: "Imediato", d: "Liquidez em D+0" },
              { I: BarChart3, t: "Efficiency Score", v: "A+", d: "Rating de performance" },
            ].map((s) => (
              <div key={s.t} className="card-soft p-6 border-white/5">
                <s.I className="h-6 w-6 text-[hsl(var(--gold-soft))]" aria-hidden="true" />
                <p className="mt-4 text-3xl font-black text-white">{s.v}</p>
                <p className="text-xs font-black text-white/50 uppercase tracking-widest mt-1">{s.t}</p>
                <p className="mt-2 text-[10px] text-white/50 uppercase tracking-[0.1em] font-bold">{s.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>

    <section id="solucoes" className="container-x py-24 bg-white/[0.02] rounded-[3rem]" aria-labelledby="solutions-main-title">
      <SectionTitle id="solutions-main-title" light eyebrow="Business Solutions" title="Soluções de Liquidez & Gestão" />
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        <ServiceCard icon={Receipt} title="Antecipação de Recebíveis" text="Transforme duplicatas e contratos em capital de giro instantâneo." href="/securitizadora/antecipacao-de-recebiveis" />
        <ServiceCard icon={ShieldCheck} title="Boleto Garantido" text="Venda a prazo com a segurança de recebimento à vista." href="/securitizadora/boleto-garantido" accent="gold" />
        <ServiceCard icon={Smartphone} title="Conta Digital Luri" text="Gestão transacional completa integrada ao seu fomento." href="/securitizadora/conta-digital-luri" />
      </div>
    </section>

    <section className="container-x py-24" aria-labelledby="intelligence-title">
      <div className="grid lg:grid-cols-[1fr_2fr] gap-16">
        <Reveal>
          <div>
            <span className="pill-gold"><Network className="h-3 w-3" aria-hidden="true" /> Gestão de Risco</span>
            <h2 id="intelligence-title" className="mt-6 text-3xl font-black text-white tracking-tighter">Ecossistema de Inteligência</h2>
            <p className="mt-4 text-white/80 font-medium leading-relaxed">Utilizamos Big Data e algoritmos proprietários para blindar sua operação contra riscos sistêmicos e inadimplência.</p>
          </div>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2" role="list">
          {[
            { icon: Search, title: "Credit Scoring Premium", text: "Análise profunda do comportamento de pagamento de seus sacados e parceiros comerciais." },
            { icon: Fingerprint, title: "Validação de Lastro", text: "Checagem automatizada de notas fiscais junto à SEFAZ em tempo real para total segurança." },
            { icon: LineChart, title: "Tributação Otimizada", text: "Vantagens fiscais específicas para operações de securitização com isenção total de IOF." },
            { icon: HandCoins, title: "Limites Progressivos", text: "Aumento de teto operacional conforme o track record e volume de faturamento da empresa." }
          ].map((item, i) => (
            <div key={i} role="listitem" className="p-8 rounded-[2rem] border border-white/10 bg-white/5 transition-all hover:bg-white/10 group">
              <item.icon className="h-8 w-8 text-[hsl(var(--gold-soft))] transition-transform group-hover:scale-110" aria-hidden="true" />
              <h4 className="mt-6 font-black text-white text-lg uppercase tracking-tighter">{item.title}</h4>
              <p className="mt-3 text-sm text-white/60 font-medium leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <SectionBanner image={bannerEquipe} alt="Suporte especializado corporativo Credifácil" />

    <section className="container-x py-24" aria-labelledby="onboarding-title">
      <SectionTitle id="onboarding-title" light eyebrow="Onboarding" title="Processo de Credenciamento" />
      <div className="mt-12">
        <StepTimeline
          steps={[
            { title: "Análise Cadastral", text: "Levantamento rápido do perfil financeiro e limites de faturamento do grupo econômico." },
            { title: "Instalação de Limite", text: "Aprovação do teto operacional e definição da régua de taxas customizada." },
            { title: "Integração Digital", text: "Conexão via API ou portal para envio automatizado de XMLs e borderôs." },
            { title: "Operacionalização", text: "Liberação de recursos na conta Luri ou banco de preferência em poucas horas." },
          ]}
        />
      </div>
    </section>

    <CTASection 
      title="Leve sua tesouraria para o próximo nível." 
      subtitle="Fale com um gerente de contas especializado em grandes operações de fomento."
      cta="Agendar Reunião Técnica" 
    />
  </Layout>
);

export default memo(Securitizadora);
