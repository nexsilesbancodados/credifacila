import { BarChart3, Boxes, Building2, FileText, HandCoins, Headset, Receipt, ShieldCheck, Sparkles, Store, TrendingUp, Wallet, Zap } from "lucide-react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import SectionTitle from "@/components/SectionTitle";
import FeatureGrid from "@/components/sections/FeatureGrid";
import CTASection from "@/components/CTASection";
import imgAntecipacao from "@/assets/img-antecipacao.jpg";
import SectionBanner from "@/components/SectionBanner";
import bannerEquipe from "@/assets/banner-equipe.png";

const AntecipacaoRecebiveis = () => (
  <Layout tone="ocean">
    <SEOHead
      title="Antecipação de Recebíveis | Credifácil Securitizadora"
      description="Antecipe duplicatas, contratos e cartões com taxas competitivas. Capital imediato para sua empresa, 100% digital."
    />
    <PageHeader
      eyebrow="Antecipação de Recebíveis"
      title={<>Antecipe seus recebíveis e <span className="text-gold-gradient">fortaleça seu caixa</span></>}
      subtitle="Transforme vendas futuras em capital imediato para sua empresa crescer com segurança."
      primaryCta={{ label: "Fale com um consultor", href: "/contato" }}
      secondaryCta={{ label: "Saiba como funciona", href: "#como" }}
      bgImage={imgAntecipacao}
      className="-mt-[72px] pt-[72px] md:-mt-[84px] md:pt-[84px]"
    />

    <section id="como" className="container-x py-20">
      <SectionTitle eyebrow="Como funciona" title="Capital hoje, sem esperar pelo amanhã" subtitle="Sua empresa transforma valores a receber em capital disponível imediatamente, com taxas competitivas e processo 100% digital." />
      <div className="mt-12">
        <FeatureGrid
          cols={3}
          items={[
            { icon: FileText, title: "1. Envie os recebíveis", text: "Cadastre suas duplicatas, contratos ou cartões." },
            { icon: BarChart3, title: "2. Análise rápida", text: "Avaliamos e estruturamos a melhor proposta." },
            { icon: Wallet, title: "3. Receba na conta", text: "Capital disponível em até 24h após aprovação." },
          ]}
        />
      </div>
    </section>

    <section className="container-x py-20">
      <SectionTitle eyebrow="Quando usar" title="Use quando precisar acelerar seu negócio" />
      <div className="mt-12">
        <FeatureGrid
          cols={3}
          items={[
            { icon: HandCoins, title: "Capital de giro", text: "Mantenha as operações funcionando sem apertos." },
            { icon: Boxes, title: "Compra de estoque", text: "Garanta produtos para vender mais." },
            { icon: Receipt, title: "Pagamento de fornecedores", text: "Honre compromissos com tranquilidade." },
            { icon: TrendingUp, title: "Expansão do negócio", text: "Invista no crescimento sem travar o caixa." },
            { icon: BarChart3, title: "Organização financeira", text: "Equilibre prazos e melhore o fluxo." },
            { icon: Sparkles, title: "Oportunidades comerciais", text: "Aproveite negócios sem perder tempo." },
          ]}
        />
      </div>
    </section>

    <SectionBanner image={bannerEquipe} alt="Equipe Credifácil em ambiente corporativo" />

    <section className="container-x py-20">
      <SectionTitle eyebrow="Vantagens" title="Por que antecipar com a Credifácil" />
      <div className="mt-12">
        <FeatureGrid
          cols={3}
          items={[
            { icon: Zap, title: "Dinheiro rápido", text: "Liberação em até 24h úteis." },
            { icon: ShieldCheck, title: "Sem burocracia", text: "Processo simples, digital e seguro." },
            { icon: TrendingUp, title: "Taxas competitivas", text: "Custos justos e personalizados." },
            { icon: BarChart3, title: "Mais previsibilidade", text: "Planeje com segurança." },
            { icon: Building2, title: "Processo seguro", text: "Tecnologia e proteção em cada etapa." },
            { icon: Headset, title: "Atendimento consultivo", text: "Especialistas ao lado da sua empresa." },
          ]}
        />
      </div>
    </section>

    <section className="container-x py-20">
      <SectionTitle eyebrow="Casos reais" title="Exemplos que mostram o poder da antecipação" />
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {[
          { I: Store, t: "Loja precisa comprar estoque", s: "Antecipe vendas no cartão e abasteça o estoque para a temporada." },
          { I: Receipt, t: "Empresa precisa pagar fornecedores", s: "Use os recebíveis a vencer para honrar compromissos sem apertos." },
          { I: TrendingUp, t: "Negócio quer expandir", s: "Acelere a abertura de uma nova unidade com capital sob medida." },
          { I: BarChart3, t: "Empresa quer organizar o caixa", s: "Equilibre datas de entrada e saída com mais previsibilidade." },
        ].map(({ I, t, s }) => (
          <div key={t} className="card-soft p-7">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[hsl(var(--royal))] to-[hsl(var(--sky))] text-white"><I className="h-6 w-6" /></div>
            <h3 className="mt-4 text-lg font-extrabold">{t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s}</p>
          </div>
        ))}
      </div>
    </section>

    <CTASection title="Transforme seus recebíveis em crescimento" cta="Fale com um consultor" />
  </Layout>
);

export default AntecipacaoRecebiveis;