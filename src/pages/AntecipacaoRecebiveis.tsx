import { BarChart3, Boxes, Building2, FileText, HandCoins, Headset, Receipt, ShieldCheck, Sparkles, Store, TrendingUp, Wallet, Zap, FileCheck2, Calculator, ArrowRight, CheckCircle2 } from "lucide-react";
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
      description="Transforme suas vendas a prazo em liquidez imediata. Taxas competitivas, processo 100% digital e liberação no mesmo dia."
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

    <section id="diferenciais" className="container-x py-24">
      <div className="grid gap-16 lg:grid-cols-2">
        <Reveal>
          <div>
            <span className="pill-gold"><Zap className="h-3 w-3" /> Eficiência Operacional</span>
            <h2 className="mt-6 text-3xl font-extrabold leading-tight text-white md:text-5xl">Liquidez no tempo do seu negócio</h2>
            <p className="mt-6 text-lg text-white/80">
              Diferente dos bancos tradicionais, nossa análise foca na qualidade do seu recebível e na saúde da operação, garantindo agilidade e taxas justas.
            </p>
            
            <div className="mt-10 space-y-4">
              {[
                "Liberação de recursos em até 4 horas",
                "Sem cobrança de TAC ou tarifas ocultas",
                "Operação 100% digital via XML da NF-e",
                "Melhoria imediata nos índices de liquidez"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white/90">
                  <CheckCircle2 className="h-5 w-5 text-[hsl(var(--gold-soft))]" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        
        <Reveal delay={0.1}>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: FileCheck2, title: "Faturas e NF-e", desc: "Antecipação de vendas de produtos com entrega comprovada." },
              { icon: Calculator, title: "Contratos de Serviço", desc: "Fluxo de caixa para empresas de serviços com contratos recorrentes." },
              { icon: ShieldCheck, title: "Cartão de Crédito", desc: "Antecipe o fluxo das suas maquininhas com taxas de securitizadora." },
              { icon: Building2, title: "Governança", desc: "Relatórios detalhados para sua gestão contábil e financeira." }
            ].map((item, i) => (
              <div key={i} className="rounded-3xl border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10">
                <item.icon className="h-8 w-8 text-[hsl(var(--gold-soft))]" />
                <h4 className="mt-4 font-bold text-white">{item.title}</h4>
                <p className="mt-2 text-sm text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>

    <SectionBanner image={bannerEquipe} alt="Consultoria especializada" />

    <section className="container-x py-24">
      <SectionTitle light eyebrow="Inteligência de Crédito" title="Diferenciais que geram valor" />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {[
          { icon: HandCoins, title: "Capital de Giro Limpo", text: "Não toma limite das suas linhas de crédito bancárias tradicionais." },
          { icon: TrendingUp, title: "Poder de Compra", text: "Com dinheiro na mão, você negocia melhores prazos e descontos com fornecedores." },
          { icon: FileText, title: "Análise de Sacado", text: "Nós ajudamos você a avaliar a saúde financeira dos seus clientes (pagadores)." },
          { icon: BarChart3, title: "Previsibilidade", text: "Dashboard completo para visualizar todas as suas liquidações e taxas." },
          { icon: Wallet, title: "Eficiência Fiscal", text: "Operações via Securitizadora possuem vantagens tributárias em relação ao IOF." },
          { icon: Headset, title: "Relacionamento", text: "Um consultor dedicado para entender as sazonalidades do seu setor." }
        ].map((item, i) => (
          <div key={i} className="card-soft p-8 group transition-all hover:border-[hsl(var(--gold-soft))/0.3]">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-[hsl(var(--gold-soft))] transition-all group-hover:scale-110">
              <item.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">{item.text}</p>
          </div>
        ))}
      </div>
    </section>

    <CTASection 
      title="Pronto para otimizar seu fluxo de caixa?" 
      subtitle="Inicie sua primeira operação hoje mesmo com taxas diferenciadas."
      cta="Falar com um Especialista" 
    />
  </Layout>
);

export default AntecipacaoRecebiveis;
