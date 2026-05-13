import { memo } from "react";
import { Banknote, BadgeCheck, Coins, FileCheck2, ShieldCheck, Wallet, Zap, RefreshCcw, Landmark, Users, UserCheck } from "lucide-react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import SectionTitle from "@/components/SectionTitle";
import FeatureGrid from "@/components/sections/FeatureGrid";
import StepTimeline from "@/components/sections/StepTimeline";
import CTASection from "@/components/CTASection";
import imgConsignado from "@/assets/img-consignado.jpg";
import FAQAccordion from "@/components/FAQAccordion";
import SectionBanner from "@/components/SectionBanner";
import bannerEscritorioClaro from "@/assets/banner-escritorio-claro.png";
import Reveal from "@/components/Reveal";

const Consignado = () => (
  <Layout tone="midnight">
    <SEOHead
      title="Crédito Consignado Online | Melhores Taxas do Mercado"
      description="Consignado para INSS e Servidores Públicos. Taxas reduzidas, liberação rápida e processo 100% digital seguro."
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Crédito Consignado",
        "description": "Solução de crédito com desconto em folha para aposentados, pensionistas e servidores.",
        "provider": { "@type": "FinancialService", "name": "Credifácil" },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "BRL",
          "description": "Taxas a partir de 1,15% a.m."
        }
      }}
    />
    <PageHeader
      eyebrow="Crédito com Garantia"
      title={<>Consignado com as <span className="text-gold-gradient">menores taxas</span> do Brasil</>}
      subtitle="A solução financeira mais inteligente para aposentados, pensionistas e servidores públicos. Crédito justo, sem burocracia e com liberação imediata."
      primaryCta={{ label: "Simular agora", href: "/contato" }}
      secondaryCta={{ label: "Vantagens", href: "#vantagens" }}
      bgImage={imgConsignado}
      className="-mt-[72px] pt-[72px] md:-mt-[84px] md:pt-[84px]"
    />

    <section id="vantagens" className="container-x -mt-16 relative z-10" aria-label="Principais vantagens">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { I: BadgeCheck, t: "Taxas a partir de 1,15% a.m.", d: "O crédito mais barato do mercado." },
          { I: Zap, t: "Liberação em até 24h", d: "Dinheiro na conta com rapidez." },
          { I: UserCheck, t: "100% Seguro & Digital", d: "Biometria facial e criptografia." },
          { I: ShieldCheck, t: "Mesmo para Negativados", d: "Sem consulta ao SPC ou Serasa." },
        ].map((item, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="card-modern flex flex-col items-center text-center p-8 bg-white/95 backdrop-blur-xl border-white/20 shadow-2xl">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary mb-6" aria-hidden="true">
                <item.I className="h-7 w-7" />
              </div>
              <p className="text-sm font-bold text-navy-deep uppercase tracking-widest">{item.t}</p>
              <p className="mt-2 text-xs text-slate-600 font-medium">{item.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="container-x py-24" aria-labelledby="public-title">
      <SectionTitle light eyebrow="Público Alvo" title="Para quem é o Consignado Credifácil?" id="public-title" />
      <div className="mt-12">
        <FeatureGrid
          cols={4}
          items={[
            { icon: Users, title: "Aposentados INSS", text: "Crédito garantido para quem já contribuiu e hoje desfruta da aposentadoria." },
            { icon: ShieldCheck, title: "Pensionistas", text: "Segurança financeira para pensionistas do INSS com as melhores condições." },
            { icon: Landmark, title: "Servidores Públicos", text: "Taxas exclusivas para funcionários federais, estaduais e municipais." },
            { icon: Banknote, title: "Convênios Privados", text: "Crédito para colaboradores de empresas parceiras com desconto em folha." },
          ]}
        />
      </div>
    </section>

    <section className="container-x py-24 bg-white/[0.02] rounded-[3rem]" aria-labelledby="workflow-title">
      <SectionTitle light eyebrow="Simplicidade" title="Como funciona o seu crédito" id="workflow-title" />
      <div className="mt-12">
        <StepTimeline
          steps={[
            { title: "Simulação Instantânea", text: "Avaliamos sua margem disponível em segundos junto aos órgãos pagadores." },
            { title: "Formalização Digital", text: "Assinatura do contrato via celular com total validade jurídica e segurança." },
            { title: "Averbação do Contrato", text: "O valor da parcela é reservado diretamente na sua folha de pagamento." },
            { title: "Depósito em Conta", text: "Receba seu dinheiro via TED ou Pix em qualquer banco de sua preferência." },
          ]}
        />
      </div>
    </section>

    <SectionBanner image={bannerEscritorioClaro} alt="Equipe de atendimento especializado Credifácil" />

    <section className="container-x py-24" aria-labelledby="solutions-title">
      <SectionTitle light eyebrow="Maximize seu Crédito" title="Soluções Inteligentes de Dívida" id="solutions-title" />
      <div className="mt-12">
        <FeatureGrid
          cols={3}
          items={[
            { icon: RefreshCcw, title: "Portabilidade de Crédito", text: "Reduza o juros da sua dívida atual trazendo seu contrato de outro banco para a Credifácil." },
            { icon: Landmark, title: "Refinanciamento", text: "Libere um novo valor extra mantendo o mesmo valor de parcela que você já paga hoje." },
            { icon: Coins, title: "Compra de Dívida", text: "Unificamos seus empréstimos em uma única parcela menor, sobrando mais dinheiro no mês." },
            { icon: ShieldCheck, title: "Seguro Prestamista", text: "Proteção para sua família em casos de imprevistos, garantindo a quitação do saldo devedor." },
            { icon: BadgeCheck, title: "Margem Reservada", text: "Utilize sua margem de cartão consignado para saques imediatos com taxas de juros baixíssimas." },
            { icon: Wallet, title: "Planejamento Financeiro", text: "Nossos consultores ajudam você a usar o crédito para sair de dívidas mais caras." },
          ]}
        />
      </div>
    </section>

    <section className="container-x py-24" aria-labelledby="faq-section-title">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionTitle light align="left" eyebrow="FAQ" title="Dúvidas comuns sobre o Consignado" id="faq-section-title" />
          <p className="mt-6 text-white/80 font-medium leading-relaxed">Entender o crédito consignado é o primeiro passo para uma vida financeira saudável. Confira as perguntas que nossos clientes mais fazem.</p>
        </div>
        <FAQAccordion
          dark
          items={[
            { q: "O que é margem consignável?", a: "É o percentual máximo do seu salário ou benefício (geralmente 35% a 45%) que pode ser usado para pagar as parcelas." },
            { q: "Posso fazer se estiver com o nome sujo?", a: "Sim. No consignado, a garantia é o próprio salário ou benefício, por isso não há consulta ao SPC/Serasa." },
            { q: "Como funciona a portabilidade?", a: "Nós 'compramos' sua dívida do banco atual e fazemos um novo contrato com taxas muito menores para você." },
            { q: "Qual o prazo máximo de pagamento?", a: "Para o INSS, o prazo pode chegar a 84 meses. Para servidores públicos, pode chegar a 96 ou 120 meses." },
          ]}
        />
      </div>
    </section>

    <CTASection 
      title="Pronto para realizar seus planos com juros justos?" 
      subtitle="Fale agora com um consultor e receba uma proposta personalizada."
      cta="Simular meu Consignado" 
    />
  </Layout>
);

export default memo(Consignado);
