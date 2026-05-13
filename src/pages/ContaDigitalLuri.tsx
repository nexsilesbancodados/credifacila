import { BarChart3, CreditCard, Headset, QrCode, Receipt, ShieldCheck, Smartphone, Sparkles, TrendingUp, Wallet, Zap, Fingerprint, Banknote, ShieldAlert, Cpu, Globe } from "lucide-react";
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
import Reveal from "@/components/Reveal";

const ContaDigitalLuri = () => (
  <Layout tone="midnight">
    <SEOHead
      title="Conta Digital Luri | Experiência Bancária Premium"
      description="A conta digital que integra crédito, gestão e tecnologia. Pix, Cartões e Ecossistema Financeiro Completo para você e sua empresa."
    />
    <PageHeader
      eyebrow="Fintech & Digital Banking"
      title={<>Conta Luri: O <span className="text-gold-gradient">hub financeiro</span> do seu negócio</>}
      subtitle="Muito além de uma conta digital. Uma plataforma integrada de crédito e pagamentos desenhada para alta performance financeira."
      primaryCta={{ label: "Abrir Conta Business", href: "/contato" }}
      secondaryCta={{ label: "Explorar Tecnologia", href: "#tecnologia" }}
      bgImage={imgLuri}
      className="-mt-[72px] pt-[72px] md:-mt-[84px] md:pt-[84px]"
    />

    <section id="tecnologia" className="container-x py-24">
      <div className="grid gap-16 lg:grid-cols-2 items-center">
        <Reveal>
          <div>
            <span className="pill-gold"><Cpu className="h-3 w-3" /> Core Banking Moderno</span>
            <h2 className="mt-6 text-3xl font-extrabold leading-tight text-white md:text-5xl">Tecnologia que antecipa necessidades</h2>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              A Luri nasceu dentro da Credifácil para ser a ponte entre o crédito estruturado e o dia a dia transacional. Nossa infraestrutura garante segurança e velocidade em cada centavo movimentado.
            </p>
            
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[hsl(var(--gold-soft))]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Segurança de Dados</h4>
                  <p className="text-sm text-white/50">Criptografia de ponta a ponta e LGPD compliance.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[hsl(var(--gold-soft))]">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Open Finance</h4>
                  <p className="text-sm text-white/50">Integrado ao ecossistema financeiro nacional.</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative">
            <div className="absolute inset-0 bg-[hsl(var(--royal))/0.2] blur-[100px] rounded-full" />
            <div className="relative flex justify-center">
              <PhoneMockup />
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="bg-white/[0.02] py-24">
      <div className="container-x">
        <SectionTitle light eyebrow="Recursos Exclusivos" title="Diferenciais da Experiência Luri" />
        <div className="mt-12">
          <FeatureGrid
            cols={3}
            items={[
              { icon: QrCode, title: "Pix de Crédito", text: "Use seu limite de crédito da securitizadora para fazer Pix instantâneos sem comprometer o caixa." },
              { icon: Receipt, title: "Gestão de Recebíveis", text: "Visualização integrada de faturas antecipadas e a vencer diretamente no seu extrato." },
              { icon: Fingerprint, title: "Segurança Biométrica", text: "Reconhecimento facial avançado para aprovação de borderôs e transações de alto valor." },
              { icon: Banknote, title: "Cash Concentration", text: "Ferramentas para centralização de caixa de múltiplas filiais ou unidades de negócio." },
              { icon: CreditCard, title: "Multi-Cartões", text: "Emissão de cartões virtuais dinâmicos com limites específicos para cada colaborador ou projeto." },
              { icon: Smartphone, title: "Tap to Pay Business", text: "Receba pagamentos por aproximação direto no app Luri, sem necessidade de maquininha física." },
            ]}
          />
        </div>
      </div>
    </section>

    <SectionBanner image={bannerLuriApp} alt="Experiência Digital" />

    <section className="container-x py-24">
      <div className="rounded-[3rem] bg-gradient-to-br from-[hsl(var(--midnight))] to-[hsl(var(--navy-deep))] border border-white/10 p-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[hsl(var(--royal))/0.05] blur-3xl rounded-full translate-x-1/2" />
        <div className="relative z-10 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h3 className="text-3xl font-black text-white md:text-5xl">Sua empresa, seu banco, seu ritmo.</h3>
            <p className="mt-6 text-lg text-white/70">
              Elimine a barreira entre o faturamento e o uso do dinheiro. Com a Luri, o crédito antecipado está disponível no mesmo instante para pagamentos de folha e fornecedores.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="btn-gold">Abrir Conta Agora</button>
              <button className="btn-outline-white">Falar com Consultor</button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="card-soft p-6">
              <ShieldAlert className="h-8 w-8 text-[hsl(var(--gold-soft))]" />
              <h4 className="mt-4 font-bold text-white">Zero Mensalidade</h4>
              <p className="mt-2 text-xs text-white/50">Conta business sem taxas de manutenção abusivas.</p>
            </div>
            <div className="card-soft p-6">
              <TrendingUp className="h-8 w-8 text-[hsl(var(--gold-soft))]" />
              <h4 className="mt-4 font-bold text-white">CDI 100%</h4>
              <p className="mt-2 text-xs text-white/50">Seu saldo parado rende todos os dias úteis.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CTASection 
      title="Abra sua conta Luri e mude o patamar da sua gestão." 
      subtitle="Processo de abertura 100% digital em menos de 10 minutos."
      cta="Começar Agora" 
    />
  </Layout>
);

export default ContaDigitalLuri;
