import { BarChart3, CreditCard, Headset, QrCode, Receipt, ShieldCheck, Smartphone, Sparkles, TrendingUp, Wallet, Zap } from "lucide-react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import SectionTitle from "@/components/SectionTitle";
import FeatureGrid from "@/components/sections/FeatureGrid";
import CTASection from "@/components/CTASection";
import PhoneMockup from "@/components/mockups/PhoneMockup";
import imgLuri from "@/assets/img-luri.jpg";
import SectionBanner from "@/components/SectionBanner";
import bannerLuriApp from "@/assets/banner-luri-app.png";

const ContaDigitalLuri = () => (
  <Layout tone="sky">
    <SEOHead
      title="Conta Digital Luri | Credifácil"
      description="Conta digital prática para pessoas e empresas: Pix, cartão, pagamentos e gestão financeira em um só lugar."
    />
    <PageHeader
      eyebrow="Conta Digital Luri"
      title={<>Conta Digital Luri: <span className="text-gold-gradient">gestão simples e moderna</span></>}
      subtitle="Controle seu dinheiro, pagamentos e movimentações em uma conta digital prática para pessoas e empresas."
      primaryCta={{ label: "Abrir minha conta", href: "/contato" }}
      secondaryCta={{ label: "Conhecer recursos", href: "#recursos" }}
      bgImage={imgLuri}
      className="-mt-[72px] pt-[72px] md:-mt-[84px] md:pt-[84px]"
    />

    <section id="recursos" className="container-x py-20">
      <SectionTitle light eyebrow="Recursos" title="Tudo que você precisa em um só lugar" />
      <div className="mt-12">
        <FeatureGrid
          cols={3}
          items={[
            { icon: QrCode, title: "Pix", text: "Envie e receba em segundos, 24/7." },
            { icon: Receipt, title: "Pagamentos", text: "Boletos e contas pelo app, sem filas." },
            { icon: BarChart3, title: "Extrato", text: "Histórico completo e organizado." },
            { icon: Wallet, title: "Gestão financeira", text: "Acompanhe entradas e saídas." },
            { icon: ShieldCheck, title: "Segurança", text: "Tecnologia bancária ponta a ponta." },
            { icon: CreditCard, title: "Cartão virtual", text: "Compre online com mais proteção." },
          ]}
        />
      </div>
    </section>

    <section className="container-x py-20">
      <SectionTitle light eyebrow="Benefícios" title="Por que escolher a Conta Luri" />
      <div className="mt-12">
        <FeatureGrid
          cols={3}
          items={[
            { icon: TrendingUp, title: "Mais controle", text: "Visão clara das finanças." },
            { icon: Zap, title: "Menos burocracia", text: "Cadastro 100% digital e rápido." },
            { icon: Smartphone, title: "Tudo pelo celular", text: "Aplicativo prático e intuitivo." },
            { icon: Headset, title: "Atendimento humano", text: "Especialistas reais quando precisar." },
            { icon: Sparkles, title: "Praticidade no dia a dia", text: "Resolva tudo em poucos toques." },
            { icon: BarChart3, title: "Organização financeira", text: "Mais clareza para crescer." },
          ]}
        />
      </div>
    </section>

    <SectionBanner image={bannerLuriApp} alt="Cliente usando soluções digitais da Credifácil no celular" />

    {/* Big phone showcase */}
    <section className="container-x py-20">
      <div className="relative overflow-hidden rounded-3xl bg-mesh-blue p-10 md:p-16">
        <div className="relative grid items-center gap-12 md:grid-cols-2">
          <div className="text-white">
            <span className="pill-light">Sua conta na palma da mão</span>
            <h3 className="mt-5 text-3xl font-extrabold leading-tight md:text-4xl">Banco completo, simples e seguro</h3>
            <p className="mt-5 text-base text-white/80">Pague, receba, transfira e organize tudo em um só app — feito para acompanhar a sua rotina.</p>
            <ul className="mt-6 space-y-3 text-sm text-white/85">
              {["Pix instantâneo 24h", "Cartão virtual ilimitado", "Pagamentos sem filas", "Suporte humano de verdade"].map((t) => (
                <li key={t} className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-[hsl(var(--gold-soft))]" /> {t}</li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center"><PhoneMockup /></div>
        </div>
      </div>
    </section>

    <CTASection title="Abra sua conta digital com a Credifácil" cta="Abrir minha conta" />
  </Layout>
);

export default ContaDigitalLuri;