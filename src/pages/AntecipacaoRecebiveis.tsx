import { memo } from "react";
import { BarChart3, Building2, FileText, HandCoins, Headset, Receipt, ShieldCheck, TrendingUp, Wallet, Zap, FileCheck2, Calculator, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import SectionTitle from "@/components/SectionTitle";
import FeatureGrid from "@/components/sections/FeatureGrid";
import CTASection from "@/components/CTASection";
import imgAntecipacao from "@/assets/img-antecipacao.jpg";
import SectionBanner from "@/components/SectionBanner";
import bannerEquipe from "@/assets/banner-equipe.png";
import Reveal from "@/components/Reveal";

const AntecipacaoRecebiveis = () => (
  <Layout tone="midnight">
    <SEOHead
      title="Antecipação de Recebíveis | Capital de Giro para Empresas"
      description="Transforme suas vendas a prazo em liquidez imediata. Taxas competitivas de fomento comercial, processo 100% digital e liberação no mesmo dia."
    />
    <PageHeader
      eyebrow="Cash Flow & Liquidez"
      title={<>Antecipe seus recebíveis e <span className="text-gold-gradient">impulsione seu caixa</span></>}
      subtitle="Soluções de fomento mercantil para transformar duplicatas e contratos em capital de giro imediato, sem gerar endividamento bancário."
      primaryCta={{ label: "Simular Operação", href: "/contato" }}
      secondaryCta={{ label: "Ver Diferenciais", href: "#diferenciais" }}
      bgImage={imgAntecipacao}
      className="-mt-[72px] pt-[72px] md:-mt-[84px] md:pt-[84px]"
    />

    <section id="diferenciais" className="container-x py-24" aria-labelledby="liquidity-title">
      <div className="grid gap-16 lg:grid-cols-2">
        <Reveal>
          <div>
            <span className="pill-gold"><Zap className="h-3 w-3" aria-hidden="true" /> Eficiência Operacional</span>
            <h2 id="liquidity-title" className="mt-6 text-3xl font-black leading-tight text-white md:text-5xl tracking-tighter">Liquidez no tempo do seu negócio</h2>
            <p className="mt-6 text-lg text-white/80 font-medium leading-relaxed">
              Diferente dos bancos tradicionais, nossa análise foca na qualidade do seu recebível e na saúde da operação, garantindo agilidade e taxas de securitização justas.
            </p>
            
            <div className="mt-10 space-y-4" role="list">
              {[
                "Liberação de recursos em até 4 horas úteis",
                "Sem cobrança de TAC ou tarifas administrativas ocultas",
                "Operação 100% digital via XML da NF-e e assinatura biométrica",
                "Melhoria imediata nos índices de liquidez corrente da empresa"
              ].map((item, i) => (
                <div key={i} role="listitem" className="flex items-center gap-3 text-white/90">
                  <CheckCircle2 className="h-5 w-5 text-[hsl(var(--gold-soft))]" aria-hidden="true" />
                  <span className="font-bold text-sm tracking-wide uppercase">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        
        <Reveal delay={0.1}>
          <div className="grid gap-4 sm:grid-cols-2" aria-label="Tipos de recebíveis antecipáveis">
            {[
              { icon: FileCheck2, title: "Faturas e NF-e", desc: "Antecipação de vendas de produtos com entrega comprovada via canhoto digital." },
              { icon: Calculator, title: "Contratos de Serviço", desc: "Fluxo de caixa para empresas de serviços com faturamento recorrente." },
              { icon: ShieldCheck, title: "Cartão de Crédito", desc: "Antecipe o fluxo das suas maquininhas com as melhores taxas do mercado." },
              { icon: Building2, title: "Governança", desc: "Relatórios detalhados para sua gestão contábil, fiscal e financeira estratégica." }
            ].map((item, i) => (
              <div key={i} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10 group">
                <item.icon className="h-8 w-8 text-[hsl(var(--gold-soft))] transition-transform group-hover:scale-110" aria-hidden="true" />
                <h4 className="mt-6 font-black text-white uppercase tracking-tighter">{item.title}</h4>
                <p className="mt-2 text-xs text-white/60 font-bold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>

    <SectionBanner image={bannerEquipe} alt="Consultoria especializada Credifácil para empresas" />

    <section className="container-x py-24" aria-labelledby="intel-title">
      <SectionTitle id="intel-title" light eyebrow="Inteligência de Crédito" title="Diferenciais que geram valor" />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {[
          { icon: HandCoins, title: "Capital de Giro Limpo", text: "Não toma limite das suas linhas de crédito bancárias tradicionais, mantendo sua capacidade de alavancagem." },
          { icon: TrendingUp, title: "Poder de Compra", text: "Com dinheiro na mão, você negocia melhores prazos e descontos agressivos com seus fornecedores." },
          { icon: FileText, title: "Análise de Sacado", text: "Nós ajudamos sua empresa a avaliar a saúde financeira e o risco de crédito dos seus clientes pagadores." },
          { icon: BarChart3, title: "Previsibilidade", text: "Dashboard completo para visualizar todas as suas liquidações, taxas e histórico de operações em tempo real." },
          { icon: Wallet, title: "Eficiência Fiscal", text: "Operações estruturadas via Securitizadora possuem vantagens tributárias exclusivas em relação ao IOF." },
          { icon: Headset, title: "Wealth Advisory", text: "Um consultor dedicado para entender as sazonalidades e necessidades específicas do seu setor de atuação." }
        ].map((item, i) => (
          <div key={i} className="card-soft p-10 group transition-all hover:border-[hsl(var(--gold-soft))/0.3]">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-[hsl(var(--gold-soft))] transition-all group-hover:scale-110" aria-hidden="true">
              <item.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-black text-white uppercase tracking-tighter">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/80 font-medium">{item.text}</p>
          </div>
        ))}
      </div>
    </section>

    <CTASection 
      title="Pronto para otimizar seu fluxo de caixa?" 
      subtitle="Inicie sua primeira operação de antecipação hoje mesmo com taxas diferenciadas."
      cta="Falar com um Especialista" 
    />
  </Layout>
);

export default memo(AntecipacaoRecebiveis);
