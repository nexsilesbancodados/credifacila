import { Banknote, BadgeCheck, CalendarClock, Coins, FileCheck2, Headset, Lock, ShieldCheck, Wallet, Zap } from "lucide-react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import FeatureGrid from "@/components/sections/FeatureGrid";
import StepTimeline from "@/components/sections/StepTimeline";
import CTASection from "@/components/CTASection";
import imgConsignado from "@/assets/img-consignado.jpg";
import FAQAccordion from "@/components/FAQAccordion";
import SectionBanner from "@/components/SectionBanner";
import bannerEscritorioClaro from "@/assets/banner-escritorio-claro.png";

const Consignado = () => (
  <Layout tone="indigo">
    <PageHeader
      eyebrow="Crédito Consignado"
      title={<>Consignado com <span className="text-gold-gradient">taxas reduzidas</span></>}
      subtitle="Aprovação facilitada, segurança e parcelas que cabem no seu orçamento. Ideal para aposentados, pensionistas do INSS e servidores públicos."
      primaryCta={{ label: "Simular agora", href: "/contato" }}
      secondaryCta={{ label: "Falar com especialista", href: "/contato" }}
      bgImage={imgConsignado}
      className="-mt-[72px] pt-[72px] md:-mt-[84px] md:pt-[84px]"
    />

    {/* Floating benefits */}
    <section className="container-x -mt-12 relative z-10">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { I: BadgeCheck, t: "Aprovação rápida e segura" },
          { I: Coins, t: "Taxas a partir de 1,15% a.m." },
          { I: CalendarClock, t: "Parcelas fixas" },
          { I: Wallet, t: "Desconto em folha" },
        ].map(({ I, t }) => (
          <div key={t} className="card-soft flex items-center gap-3 p-4">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[hsl(var(--royal))/0.1] text-[hsl(var(--royal))]"><I className="h-5 w-5" /></div>
            <p className="text-sm font-bold">{t}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="container-x py-20">
      <SectionTitle eyebrow="Para quem é" title="Quem pode contratar o consignado?" />
      <div className="mt-12">
        <FeatureGrid
          cols={4}
          items={[
            { icon: Headset, title: "Aposentados INSS", text: "Aposentados pelo INSS com benefício ativo." },
            { icon: ShieldCheck, title: "Pensionistas", text: "Pensionistas do INSS com benefício regular." },
            { icon: Banknote, title: "Servidores públicos", text: "Federais, estaduais e municipais." },
            { icon: FileCheck2, title: "Profissionais conveniados", text: "Empresas e órgãos com convênio ativo." },
          ]}
        />
      </div>
    </section>

    <section className="container-x py-20">
      <SectionTitle eyebrow="Como funciona" title="Quatro passos para contratar" />
      <div className="mt-12">
        <StepTimeline
          steps={[
            { title: "Simule", text: "Faça sua simulação online em poucos minutos." },
            { title: "Envie seus dados", text: "Cadastro 100% digital e seguro." },
            { title: "Aguarde a análise", text: "Avaliação rápida com nossos especialistas." },
            { title: "Receba o crédito", text: "Liberação direto na sua conta." },
          ]}
        />
      </div>
    </section>

    <SectionBanner image={bannerEscritorioClaro} alt="Consultora Credifácil em ambiente corporativo" />

    <section className="container-x py-20">
      <SectionTitle eyebrow="Vantagens" title="Por que escolher o consignado Credifácil" />
      <div className="mt-12">
        <FeatureGrid
          cols={3}
          items={[
            { icon: Coins, title: "Taxas reduzidas", text: "Condições mais competitivas do mercado." },
            { icon: CalendarClock, title: "Parcelas fixas", text: "Sem surpresa: você sabe quanto pagar." },
            { icon: Zap, title: "Processo digital", text: "Tudo online, sem filas ou burocracia." },
            { icon: Lock, title: "Contratação segura", text: "Tecnologia e proteção bancária." },
            { icon: BadgeCheck, title: "Liberação rápida", text: "Crédito disponível em até 24h úteis." },
            { icon: Headset, title: "Atendimento humano", text: "Especialistas reais ao seu lado." },
          ]}
        />
      </div>
    </section>

    <section className="container-x py-20">
      <SectionTitle eyebrow="Perguntas frequentes" title="Tire suas dúvidas sobre o consignado" />
      <div className="mx-auto mt-12 max-w-3xl">
        <FAQAccordion
          items={[
            { q: "Quem pode contratar?", a: "Aposentados e pensionistas do INSS, servidores públicos e profissionais de empresas conveniadas." },
            { q: "Como funciona o desconto em folha?", a: "As parcelas são descontadas automaticamente do seu benefício ou salário, garantindo organização." },
            { q: "É seguro contratar online?", a: "Sim. Todo processo é criptografado e segue protocolos bancários de segurança." },
            { q: "Qual o prazo para liberação?", a: "Após aprovação, o valor é liberado em conta em até 24h úteis." },
            { q: "Posso antecipar parcelas?", a: "Sim, antecipações são permitidas conforme regras do contrato." },
          ]}
        />
      </div>
    </section>

    <CTASection
      title="Pronto para contratar seu consignado?"
      subtitle="Fale com um especialista e descubra a melhor condição para você."
      cta="Fale com um especialista"
    />
  </Layout>
);

export default Consignado;