import { BarChart3, Building2, FileSearch, HandCoins, LineChart, Receipt, ShieldCheck, Smartphone, TrendingUp, Wallet } from "lucide-react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import FeatureGrid from "@/components/sections/FeatureGrid";
import ServiceCard from "@/components/sections/ServiceCard";
import StepTimeline from "@/components/sections/StepTimeline";
import CTASection from "@/components/CTASection";
import imgSecuritizadora from "@/assets/img-securitizadora.jpg";
import SectionBanner from "@/components/SectionBanner";
import bannerEquipe from "@/assets/banner-equipe.png";

const Securitizadora = () => (
  <Layout>
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
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            A securitizadora é a empresa que ajuda negócios a transformar recebíveis em soluções financeiras estruturadas, trazendo liquidez, previsibilidade e segurança para o caixa.
          </p>
          <p className="mt-3 text-base text-muted-foreground">
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
      <SectionTitle eyebrow="Soluções disponíveis" title="Inteligência financeira para sua empresa" />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        <ServiceCard icon={Receipt} title="Antecipação de Recebíveis" text="Transforme vendas futuras em capital imediato." href="/securitizadora/antecipacao-de-recebiveis" />
        <ServiceCard icon={ShieldCheck} title="Boleto Garantido" text="Mais segurança nas vendas e previsibilidade no recebimento." href="/securitizadora/boleto-garantido" accent="gold" />
        <ServiceCard icon={Smartphone} title="Conta Digital Luri" text="Conta completa para gestão financeira moderna." href="/securitizadora/conta-digital-luri" />
      </div>
    </section>

    <section className="container-x py-20">
      <SectionTitle eyebrow="Benefícios" title="Vantagens para empresas" />
      <div className="mt-12">
        <FeatureGrid
          cols={3}
          items={[
            { icon: HandCoins, title: "Mais capital de giro", text: "Recursos disponíveis para suas operações." },
            { icon: LineChart, title: "Previsibilidade financeira", text: "Planeje com mais segurança." },
            { icon: ShieldCheck, title: "Redução da inadimplência", text: "Receba com mais tranquilidade." },
            { icon: BarChart3, title: "Gestão moderna", text: "Tecnologia e dados a favor do seu negócio." },
            { icon: Building2, title: "Mais controle financeiro", text: "Visão clara de todo o fluxo." },
            { icon: TrendingUp, title: "Crescimento com segurança", text: "Estrutura sólida para expandir." },
          ]}
        />
      </div>
    </section>

    <SectionBanner image={bannerEquipe} alt="Equipe Credifácil em ambiente premium" />

    <section className="container-x py-20">
      <SectionTitle eyebrow="Como funciona" title="Quatro passos simples" />
      <div className="mt-12">
        <StepTimeline
          steps={[
            { title: "Cadastro", text: "Sua empresa se cadastra em poucos minutos." },
            { title: "Análise dos recebíveis", text: "Avaliação técnica e consultiva." },
            { title: "Proposta personalizada", text: "Oferta sob medida para seu negócio." },
            { title: "Liberação", text: "Capital disponível para uso imediato." },
          ]}
        />
      </div>
    </section>

    <CTASection title="Leve sua empresa para o próximo nível" cta="Falar com especialista" />
  </Layout>
);

export default Securitizadora;