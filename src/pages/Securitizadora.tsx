import { BarChart3, Building2, FileSearch, HandCoins, LineChart, Receipt, ShieldCheck, Smartphone, TrendingUp, Wallet, Fingerprint, Search, Briefcase, Network } from "lucide-react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import SectionTitle from "@/components/SectionTitle";
import FeatureGrid from "@/components/sections/FeatureGrid";
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
      description="Soluções estruturadas para transformar recebíveis em capital estratégico. Liquidez, segurança e governança para sua gestão."
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

    <section className="container-x py-24">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <div>
            <span className="pill-gold"><Briefcase className="h-3 w-3" /> Soluções B2B</span>
            <h2 className="mt-6 text-3xl font-extrabold leading-tight text-white md:text-5xl">O que é a Securitização Estratégica?</h2>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              Diferente da antecipação bancária comum, a securitização é um processo de engenharia financeira que isola o risco dos ativos, permitindo taxas mais competitivas e maior fôlego para o fluxo de caixa da sua empresa.
            </p>
            <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-sm italic text-white/60">"A securitizadora atua como um braço financeiro externo, permitindo que a empresa foque em sua atividade core enquanto garantimos a liquidez do faturamento."</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-6">
            {[
              { I: TrendingUp, t: "Alavancagem Saudável", v: "+92%", d: "Crescimento sem dívida" },
              { I: ShieldCheck, t: "Segurança de Lastro", v: "100%", d: "Operações auditadas" },
              { I: Wallet, t: "Cash-on-hand", v: "Imediato", d: "Liquidez em D+0" },
              { I: BarChart3, t: "Efficiency Score", v: "A+", d: "Rating de performance" },
            ].map((s) => (
              <div key={s.t} className="card-soft p-6 border-white/5">
                <s.I className="h-6 w-6 text-[hsl(var(--gold-soft))]" />
                <p className="mt-4 text-3xl font-black text-white">{s.v}</p>
                <p className="text-sm font-bold text-white/90">{s.t}</p>
                <p className="mt-1 text-xs text-white/40">{s.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>

    <section id="solucoes" className="container-x py-24 bg-white/[0.02] rounded-[3rem]">
      <SectionTitle light eyebrow="Business Solutions" title="Soluções de Liquidez & Gestão" />
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        <ServiceCard icon={Receipt} title="Antecipação de Recebíveis" text="Transforme duplicatas e contratos em capital de giro instantâneo." href="/securitizadora/antecipacao-de-recebiveis" />
        <ServiceCard icon={ShieldCheck} title="Boleto Garantido" text="Venda a prazo com a segurança de recebimento à vista." href="/securitizadora/boleto-garantido" accent="gold" />
        <ServiceCard icon={Smartphone} title="Conta Digital Luri" text="Gestão transacional completa integrada ao seu fomento." href="/securitizadora/conta-digital-luri" />
      </div>
    </section>

    <section className="container-x py-24">
      <div className="grid lg:grid-cols-[1fr_2fr] gap-16">
        <Reveal>
          <div>
            <span className="pill-gold"><Network className="h-3 w-3" /> Gestão de Risco</span>
            <h2 className="mt-6 text-3xl font-extrabold text-white">Ecossistema de Inteligência</h2>
            <p className="mt-4 text-white/60">Utilizamos Big Data e algoritmos proprietários para blindar sua operação contra riscos sistêmicos.</p>
          </div>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            { icon: Search, title: "Credit Scoring Premium", text: "Análise profunda do comportamento de pagamento de seus sacados." },
            { icon: Fingerprint, title: "Validação de Lastro", text: "Checagem automatizada de notas fiscais junto à SEFAZ em tempo real." },
            { icon: LineChart, title: "Tributação Otimizada", text: "Vantagens fiscais específicas para operações de securitização (Isenção de IOF)." },
            { icon: HandCoins, title: "Limites Progressivos", text: "Aumento de teto operacional conforme o track record da empresa." }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-3xl border border-white/10 bg-white/5 transition-all hover:bg-white/10">
              <item.icon className="h-8 w-8 text-[hsl(var(--gold-soft))]" />
              <h4 className="mt-6 font-bold text-white text-lg">{item.title}</h4>
              <p className="mt-3 text-sm text-white/60 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <SectionBanner image={bannerEquipe} alt="Suporte especializado corporativo" />

    <section className="container-x py-24">
      <SectionTitle light eyebrow="Onboarding" title="Processo de Credenciamento" />
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
      subtitle="Fale com um gerente de contas especializado em grandes operações."
      cta="Agendar Reunião Técnica" 
    />
  </Layout>
);

export default Securitizadora;
