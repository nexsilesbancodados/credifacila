import { BarChart3, Building2, FileSearch, HandCoins, LineChart, Receipt, ShieldCheck, Smartphone, TrendingUp, Wallet, Fingerprint, Search } from "lucide-react";
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

const Securitizadora = () => (
  <Layout tone="navy">
    <SEOHead
      title="Securitizadora Credifácil | Soluções financeiras para empresas"
      description="Transforme recebíveis em capital, reduza riscos e fortaleça o caixa da sua empresa com a Securitizadora Credifácil."
    />
    <PageHeader
      eyebrow="Securitizadora"
      title={<>Soluções financeiras para empresas que <span className="text-gold-gradient">querem crescer</span></>}
      subtitle="A Credifácil Securitizadora oferece alternativas inteligentes para transformar recebíveis em capital, reduzir riscos e fortalecer o fluxo de caixa."
      primaryCta={{ label: "Falar com especialista", href: "/contato" }}
      secondaryCta={{ label: "Conhecer soluções", href: "#solucoes" }}
      bgImage={imgSecuritizadora}
      className="-mt-[72px] pt-[72px] md:-mt-[84px] md:pt-[84px]"
    />

    <section className="container-x py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <span className="pill"><FileSearch className="h-3 w-3" /> O que é</span>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">O que é uma securitizadora?</h2>
          <p className="mt-5 text-base text-white/95 md:text-lg">
            A securitizadora é a empresa que ajuda negócios a transformar recebíveis em soluções financeiras estruturadas, trazendo liquidez, previsibilidade e segurança para o caixa.
          </p>
          <p className="mt-3 text-base text-white/90">
            Com a Credifácil, sua empresa antecipa vendas, protege pagamentos e ganha um parceiro consultivo para acelerar o crescimento.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { I: TrendingUp, t: "Liquidez", v: "+92%" },
            { I: ShieldCheck, t: "Segurança", v: "100%" },
            { I: Wallet, t: "Capital de giro", v: "imediato" },
            { I: BarChart3, t: "Previsibilidade", v: "+80%" },
          ].map((s) => (
            <div key={s.t} className="card-soft p-5">
              <s.I className="h-6 w-6 text-[hsl(var(--royal))]" />
              <p className="mt-3 text-2xl font-extrabold text-royal-gradient">{s.v}</p>
              <p className="text-sm text-muted-foreground">{s.t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="solucoes" className="container-x py-20">
      <SectionTitle light eyebrow="Soluções disponíveis" title="Inteligência financeira para sua empresa" />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        <ServiceCard icon={Receipt} title="Antecipação de Recebíveis" text="Transforme vendas futuras em capital imediato." href="/securitizadora/antecipacao-de-recebiveis" />
        <ServiceCard icon={ShieldCheck} title="Boleto Garantido" text="Mais segurança nas vendas e previsibilidade no recebimento." href="/securitizadora/boleto-garantido" accent="gold" />
        <ServiceCard icon={Smartphone} title="Conta Digital Luri" text="Conta completa para gestão financeira moderna." href="/securitizadora/conta-digital-luri" />
      </div>
    </section>

    <section className="container-x py-20">
      <SectionTitle light eyebrow="Gestão Estratégica" title="Muito mais que apenas crédito" />
      <div className="mt-12">
        <FeatureGrid
          cols={3}
          items={[
            { icon: Search, title: "Análise de Sacado", text: "Verificamos a saúde financeira dos seus clientes para reduzir riscos de crédito." },
            { icon: Fingerprint, title: "Prevenção de Fraudes", text: "Tecnologia de ponta para validar notas fiscais e contratos antes da operação." },
            { icon: LineChart, title: "Alavancagem Saudável", text: "Utilize seus próprios ativos para financiar o crescimento sem recorrer a dívidas bancárias." },
            { icon: ShieldCheck, title: "Isenção de IOF", text: "As operações de fomento mercantil possuem vantagens tributárias específicas para sua empresa." },
            { icon: HandCoins, title: "Liquidez sob Demanda", text: "Transforme faturamento a prazo em dinheiro na conta em poucos minutos." },
            { icon: BarChart3, title: "Dashboard de Gestão", text: "Visão em tempo real de todos os títulos, vencimentos e histórico de crédito." },
          ]}
        />
      </div>
    </section>

    <SectionBanner image={bannerEquipe} alt="Equipe Credifácil em ambiente premium" />

    <section className="container-x py-20">
      <SectionTitle light eyebrow="Rito de Passagem" title="Como sua empresa entra no jogo" />
      <div className="mt-12">
        <StepTimeline
          steps={[
            { title: "Abertura de Limite", text: "Analisamos o potencial de faturamento da sua empresa para definir seu limite operacional." },
            { title: "Borderô Eletrônico", text: "Você envia os XMLs das notas fiscais ou duplicatas direto pelo nosso sistema." },
            { title: "Checagem de Lastro", text: "Validamos as informações com os sacados para garantir a segurança da operação." },
            { title: "Recompra Automática", text: "Sistema inteligente para gestão de títulos com problemas ou devoluções de mercadoria." },
          ]}
        />
      </div>
    </section>

    <CTASection title="Leve sua empresa para o próximo nível" cta="Falar com especialista" />
  </Layout>
);

export default Securitizadora;