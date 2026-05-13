import { BarChart3, Building2, FileSearch, Headset, LineChart, ShieldCheck, Sparkles, TrendingUp, Shield, Gem, GanttChart, Users, Scale, History, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import SectionTitle from "@/components/SectionTitle";
import StepTimeline from "@/components/sections/StepTimeline";
import CTASection from "@/components/CTASection";
import imgInvest from "@/assets/img-investimentos.jpg";
import SectionBanner from "@/components/SectionBanner";
import bannerInvestimentos from "@/assets/banner-investimentos.png";

const InvistaConosco = () => (
  <Layout tone="midnight">
    <SEOHead
      title="Invista Conosco | Credifácil Asset & Wealth"
      description="Oportunidades exclusivas em crédito privado e ativos estruturados com governança institucional e rentabilidade superior."
    />
    <PageHeader
      eyebrow="Asset Management & Wealth"
      title={<>Soluções em investimentos com <span className="text-gold-gradient">rigor institucional</span></>}
      subtitle="Acesse oportunidades exclusivas em crédito privado e ativos reais estruturados com a transparência e solidez que o seu patrimônio exige."
      primaryCta={{ label: "Consultar Wealth Manager", href: "/contato" }}
      secondaryCta={{ label: "Ver Portfólio", href: "#produtos" }}
      bgImage={imgInvest}
      className="-mt-[72px] pt-[72px] md:-mt-[84px] md:pt-[84px]"
    />

    <section id="produtos" className="container-x py-24">
      <SectionTitle light eyebrow="Portfólio de Ativos" title="Soluções estruturadas sob medida" />
      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {[
          {
            title: "FIDC Credifácil",
            desc: "Fundo de Investimento em Direitos Creditórios com foco em ativos de alta qualidade e governança institucional.",
            features: ["Baixa volatilidade", "Crédito corporativo", "Risco pulverizado"],
            icon: BarChart3,
            highlight: "Ideal para Investidor Qualificado"
          },
          {
            title: "CRI / CRA",
            desc: "Títulos de crédito privado isentos de IR para pessoa física, com lastro imobiliário ou do agronegócio.",
            features: ["Isenção de IR", "Garantias reais", "Fluxo de caixa fixo"],
            icon: Gem,
            highlight: "Rentabilidade Isenta"
          },
          {
            title: "Debêntures Privadas",
            desc: "Emissão de dívida para expansão de empresas consolidadas, oferecendo prêmios sobre o CDI.",
            features: ["Longo Prazo", "Prêmio sobre CDI", "Garantia de ativos"],
            icon: Building2,
            highlight: "Alocação Estratégica"
          }
        ].map((p, i) => (
          <div key={i} className="group flex flex-col card-modern p-10 bg-white/[0.02]">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-xl">
              <p.icon className="h-7 w-7" />
            </div>
            <span className="mt-8 text-[10px] font-bold uppercase tracking-widest text-primary/60">{p.highlight}</span>
            <h3 className="mt-2 text-2xl font-bold text-white tracking-tight">{p.title}</h3>
            <p className="mt-4 text-[15px] text-white/40 font-medium leading-relaxed">{p.desc}</p>
            <ul className="mt-8 flex flex-col gap-4">
              {p.features.map((f, j) => (
                <li key={j} className="flex items-center gap-3 text-sm text-white/60 font-medium">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> {f}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-10">
              <button className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white transition-all hover:gap-4 hover:text-primary">
                Ficha Técnica <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-white/[0.02] py-24">
      <div className="container-x">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <span className="pill-gold"><Shield className="h-3 w-3" /> Segurança Institucional</span>
            <h2 className="mt-6 text-3xl font-extrabold leading-tight text-white md:text-5xl">Governança inspirada nos maiores bancos</h2>
            <p className="mt-6 text-lg text-white/90">
              Seguimos diretrizes rigorosas de compliance e gestão de risco para garantir que cada centavo investido esteja protegido por processos técnicos e auditorias recorrentes.
            </p>
            
            <div className="mt-12 space-y-8">
              {[
                { icon: Scale, title: "Comitê de Crédito Independente", text: "Decisões colegiadas baseadas em dados e scoring proprietário." },
                { icon: History, title: "Track Record Comprovado", text: "Mais de 12 anos de atuação sem histórico de perdas significativas." },
                { icon: GanttChart, title: "Gestão Ativa de Portfólio", text: "Monitoramento 24/7 de todos os ativos e garantias subjacentes." }
              ].map((item, i) => (
                <div key={i} className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[hsl(var(--gold-soft))]">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{item.title}</h4>
                        <p className="mt-1 text-white/90">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10">
              <img src={imgInvest} alt="Análise de mercado" className="h-full w-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--midnight))] via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-10 -left-10 hidden rounded-3xl bg-gradient-to-br from-[hsl(var(--royal))] to-[hsl(var(--sky))] p-8 shadow-2xl md:block">
              <p className="text-4xl font-black text-white">NPS 78</p>
              <p className="text-sm font-medium text-white/80 uppercase tracking-wider">Satisfação do Investidor</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="container-x py-24">
      <div className="mx-auto max-w-4xl text-center">
        <span className="pill-gold"><Users className="h-3 w-3" /> Suitability</span>
        <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl">Perfil do Investidor Credifácil</h2>
        <p className="mt-6 text-lg text-white/90">
          Nossas soluções são desenhadas para investidores que compreendem o mercado de crédito privado e buscam diversificação inteligente.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left">
            <h4 className="font-bold text-white">Investidor Qualificado</h4>
            <p className="mt-2 text-sm text-white/80 italic">Instrução CVM 554</p>
            <p className="mt-4 text-sm text-white/90">Acesso a FIDCs e emissões exclusivas com rentabilidades diferenciadas.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left">
            <h4 className="font-bold text-white">Wealth & Family Offices</h4>
            <p className="mt-2 text-sm text-white/80 italic">Gestão de Patrimônio</p>
            <p className="mt-4 text-sm text-white/90">Estruturas personalizadas para preservação e sucessão familiar.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="container-x py-24">
      <SectionTitle light eyebrow="Processo de Alocação" title="Como começar a investir" />
      <div className="mt-12">
        <StepTimeline
          steps={[
            { title: "Onboarding Digital", text: "Cadastro simplificado e seguro com validação de documentos via app." },
            { title: "Suitability", text: "Questionário de perfil para alinhar expectativas de risco e retorno." },
            { title: "Wealth Advisory", text: "Reunião com um de nossos consultores para definir a estratégia de alocação." },
            { title: "Acompanhamento", text: "Relatórios mensais de performance e acesso ao dashboard em tempo real." },
          ]}
        />
      </div>
    </section>

    <SectionBanner image={bannerInvestimentos} alt="Executivo observando indicadores financeiros" />

    <section className="container-x py-12">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-[10px] leading-relaxed text-white/60">
        <p className="mb-4"><strong>DISCLAIMER LEGAL:</strong></p>
        <p className="mb-2">A Credifácil não realiza a venda direta de valores mobiliários. Nossos produtos são estruturados e distribuídos por instituições financeiras parceiras devidamente autorizadas pelo Banco Central do Brasil e pela CVM (Comissão de Valores Mobiliários).</p>
        <p className="mb-2">O investimento em fundos de investimento e outros ativos financeiros não conta com garantia do administrador, do gestor, de qualquer mecanismo de seguro ou, ainda, do fundo garantidor de crédito - FGC.</p>
        <p>A rentabilidade passada não representa garantia de rentabilidade futura. É recomendada a leitura cuidadosa do prospecto e do regulamento do fundo de investimento pelo investidor ao aceitar suas decisões.</p>
      </div>
    </section>

    <CTASection title="Pronto para sofisticar seu portfólio?" cta="Falar com um Wealth Manager" />
  </Layout>
);

export default InvistaConosco;
