import { Check, BarChart3, Building2, ShieldCheck, TrendingUp, Wallet, Zap, Headset, X, BellRing, Scale, ShieldAlert, BadgeCheck } from "lucide-react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import SectionTitle from "@/components/SectionTitle";
import FeatureGrid from "@/components/sections/FeatureGrid";
import StepTimeline from "@/components/sections/StepTimeline";
import CTASection from "@/components/CTASection";
import imgBoleto from "@/assets/img-boleto.jpg";
import SectionBanner from "@/components/SectionBanner";
import bannerSeguranca from "@/assets/banner-seguranca.png";
import Reveal from "@/components/Reveal";

const BoletoGarantido = () => (
  <Layout tone="midnight">
    <SEOHead
      title="Boleto Garantido | Proteção Contra Inadimplência"
      description="Receba suas vendas mesmo que seu cliente não pague. Proteção total do fluxo de caixa e gestão de cobrança profissional."
    />
    <PageHeader
      eyebrow="Credit Insurance & Protection"
      title={<>Boleto Garantido: <span className="text-gold-gradient">Risco Zero</span> na sua inadimplência</>}
      subtitle="A solução definitiva para empresas que buscam blindar o caixa contra o calote e garantir liquidez total em cada venda realizada."
      primaryCta={{ label: "Proteger meu Caixa", href: "/contato" }}
      secondaryCta={{ label: "Como funciona", href: "#como" }}
      bgImage={imgBoleto}
      className="-mt-[72px] pt-[72px] md:-mt-[84px] md:pt-[84px]"
    />

    <section className="container-x py-24">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <div>
            <span className="pill-gold"><ShieldAlert className="h-3 w-3" /> Blindagem de Fluxo</span>
            <h2 className="mt-6 text-3xl font-extrabold leading-tight text-white md:text-5xl">Venda hoje, receba sempre.</h2>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              O Boleto Garantido da Credifácil não é apenas uma cobrança: é um seguro de crédito integrado. Se o seu cliente não pagar no vencimento, nós honramos o título para sua empresa não parar.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-2xl font-black text-white">-72%</p>
                <p className="text-xs text-white/40 uppercase tracking-widest">Inadimplência Real</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-2xl font-black text-white">100%</p>
                <p className="text-xs text-white/40 uppercase tracking-widest">Garantia de Caixa</p>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/10">
              <img src={imgBoleto} alt="Segurança financeira" className="h-full w-full object-cover opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[hsl(var(--midnight))] via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-8 -right-8 p-8 bg-gradient-to-br from-[hsl(var(--gold-soft))] to-[hsl(var(--gold))] rounded-3xl shadow-2xl">
              <BadgeCheck className="h-10 w-10 text-white" />
              <p className="mt-4 text-white font-black">Selo de Proteção<br/>Ativo</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="bg-white/[0.02] py-24">
      <div className="container-x">
        <SectionTitle light eyebrow="Serviços Integrados" title="Gestão 360º do seu Recebimento" />
        <div className="mt-12">
          <FeatureGrid
            cols={3}
            items={[
              { icon: Scale, title: "Régua de Cobrança", text: "Processo de cobrança amigável automatizado via WhatsApp e E-mail, mantendo o bom relacionamento." },
              { icon: ShieldCheck, title: "Seguro de Crédito", text: "Garantia total do valor de face do título em caso de não pagamento pelo sacado." },
              { icon: BellRing, title: "Monitoramento Ativo", text: "Acompanhamento proativo de vencimentos para reduzir o esquecimento dos pagadores." },
              { icon: TrendingUp, title: "Aumento de Market Share", text: "Venda a prazo para novos clientes com a segurança de que o risco é nosso, não seu." },
              { icon: Wallet, title: "Liquidez Automática", text: "O crédito entra na sua conta na data do vencimento + D, independente da baixa do boleto." },
              { icon: Building2, title: "Relatórios de Performance", text: "Dashboard completo para visualizar a saúde da sua carteira de clientes em tempo real." },
            ]}
          />
        </div>
      </div>
    </section>

    <section id="como" className="container-x py-24">
      <SectionTitle light eyebrow="Operacional" title="Fluxo de Garantia Credifácil" />
      <div className="mt-12">
        <StepTimeline
          steps={[
            { title: "Emissão & Registro", text: "Os boletos são gerados com registro instantâneo no sistema bancário nacional via Luri." },
            { title: "Scoring de Crédito", text: "Nosso motor de risco avalia o pagador e ativa a garantia automaticamente para o título." },
            { title: "Cobrança Preventiva", text: "Enviamos lembretes e links de pagamento facilitados antes da data de vencimento." },
            { title: "Repasse de Recursos", text: "O valor é creditado em sua conta, finalizando o ciclo com segurança total para seu caixa." },
          ]}
        />
      </div>
    </section>

    <SectionBanner image={bannerSeguranca} alt="Segurança de dados e transações" />

    <section className="container-x py-24">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-[3rem] bg-white p-12 shadow-2xl overflow-hidden relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-black text-navy-deep leading-tight">Por que aceitar o risco se você pode delegá-lo?</h3>
              <p className="mt-6 text-muted-foreground">O Boleto Garantido transforma sua estrutura de cobrança em um centro de lucro e segurança.</p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-navy-deep font-bold">
                  <Check className="h-5 w-5 text-emerald-500" /> Sem custo de implantação
                </div>
                <div className="flex items-center gap-3 text-navy-deep font-bold">
                  <Check className="h-5 w-5 text-emerald-500" /> Integração via API ou ERP
                </div>
              </div>
            </div>
            <div className="bg-navy-deep rounded-3xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">Comparativo Real</h4>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="opacity-60">Cobrança Comum</span>
                  <span className="text-rose-400">Risco Total</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="opacity-60">Inadimplência</span>
                  <span className="text-rose-400">Variável</span>
                </div>
                <div className="flex justify-between font-bold text-[hsl(var(--gold-soft))]">
                  <span>Boleto Garantido</span>
                  <span>Risco Zero</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CTASection 
      title="Elimine a inadimplência do seu negócio hoje." 
      subtitle="Fale com um especialista em gestão de recebíveis."
      cta="Ativar Boleto Garantido" 
    />
  </Layout>
);

export default BoletoGarantido;
