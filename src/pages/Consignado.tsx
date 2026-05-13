import { Banknote, BadgeCheck, CalendarClock, Coins, FileCheck2, Headset, Lock, ShieldCheck, Wallet, Zap, RefreshCcw, Landmark } from "lucide-react";
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

const Consignado = () => (
  <Layout tone="indigo">
    <SEOHead
      title="Crédito Consignado | Credifácil"
      description="Consignado para INSS, servidores públicos e conveniadas. Taxas a partir de 1,15% a.m., aprovação rápida e desconto direto em folha."
    />
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
      <SectionTitle light eyebrow="Para quem é" title="Quem pode contratar o consignado?" />
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
      <SectionTitle light eyebrow="Processo Transparente" title="Sua jornada para o crédito justo" />
      <div className="mt-12">
        <StepTimeline
          steps={[
            { title: "Cálculo de Margem", text: "Verificamos quanto você pode comprometer mensalmente sem apertar seu orçamento." },
            { title: "Formalização Digital", text: "Você assina o contrato pelo celular, com biometria facial — seguro e sem papel." },
            { title: "Averbação", text: "O órgão pagador reserva o valor da parcela, garantindo as taxas mais baixas do mercado." },
            { title: "Depósito Imediato", text: "O valor entra na sua conta via TED ou Pix em poucas horas após a averbação." },
          ]}
        />
      </div>
    </section>

    <SectionBanner image={bannerEscritorioClaro} alt="Consultora Credifácil em ambiente corporativo" />

    <section className="container-x py-20">
      <SectionTitle light eyebrow="Diferenciais" title="Soluções além do básico" />
      <div className="mt-12">
        <FeatureGrid
          cols={3}
          items={[
            { icon: RefreshCcw, title: "Portabilidade de Crédito", text: "Traga sua dívida de outro banco e reduza o valor das parcelas mensais." },
            { icon: Landmark, title: "Refinanciamento", text: "Libere dinheiro extra mantendo o mesmo valor de parcela que você já paga." },
            { icon: Coins, title: "Margem Livre", text: "Uso imediato da margem disponível para novos empréstimos com as melhores taxas." },
            { icon: ShieldCheck, title: "Crédito para Negativados", text: "Como o desconto é em folha, não consultamos SPC ou Serasa." },
            { icon: BadgeCheck, title: "Averbação em 24h", text: "Agilidade máxima na comunicação com o INSS e órgãos públicos." },
            { icon: Wallet, title: "Parcelas que cabem", text: "O desconto nunca ultrapassa o limite legal, garantindo sua saúde financeira." },
          ]}
        />
      </div>
    </section>

    <section className="container-x py-20">
      <SectionTitle light eyebrow="Perguntas frequentes" title="Tire suas dúvidas sobre o consignado" />
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