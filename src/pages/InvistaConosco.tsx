import { BarChart3, Building2, FileSearch, Headset, LineChart, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import FeatureGrid from "@/components/sections/FeatureGrid";
import StepTimeline from "@/components/sections/StepTimeline";
import CTASection from "@/components/CTASection";
import InvestMockup from "@/components/mockups/InvestMockup";
import imgInvest from "@/assets/img-investimentos.jpg";

const InvistaConosco = () => (
  <Layout>
    <PageHeader
      eyebrow="Invista Conosco"
      title={<>Invista com segurança em <span className="text-gold-gradient">soluções financeiras inteligentes</span></>}
      subtitle="Conheça oportunidades estruturadas para quem busca rentabilidade, transparência e solidez."
      primaryCta={{ label: "Quero falar com um consultor", href: "/contato" }}
      secondaryCta={{ label: "Por que investir", href: "#porque" }}
      bgImage={imgInvest}
      className="-mt-[72px] pt-[72px] md:-mt-[84px] md:pt-[84px]"
    />

    <section id="porque" className="container-x py-20">
      <SectionTitle eyebrow="Por que investir" title="Vantagens de investir com a Credifácil" />
      <div className="mt-12">
        <FeatureGrid
          cols={3}
          items={[
            { icon: ShieldCheck, title: "Segurança", text: "Operações estruturadas com critérios técnicos." },
            { icon: FileSearch, title: "Transparência", text: "Informações claras em cada etapa." },
            { icon: TrendingUp, title: "Rentabilidade", text: "Oportunidades alinhadas ao seu perfil." },
            { icon: Building2, title: "Gestão especializada", text: "Time experiente em finanças e crédito." },
            { icon: LineChart, title: "Acompanhamento", text: "Relatórios e indicadores claros." },
            { icon: Headset, title: "Relacionamento consultivo", text: "Atendimento próximo e dedicado." },
          ]}
        />
      </div>
    </section>

    <section className="container-x py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <span className="pill-gold"><Sparkles className="h-3 w-3" /> Perfil do investidor</span>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">Para quem busca oportunidades estruturadas</h2>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            Soluções voltadas a investidores que buscam alternativas com análise técnica, transparência e suporte profissional, com foco em equilíbrio entre risco e retorno.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><BarChart3 className="h-4 w-4 text-[hsl(var(--royal))]" /> Análise estruturada das operações</li>
            <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[hsl(var(--royal))]" /> Governança e controles internos</li>
            <li className="flex items-center gap-2"><Headset className="h-4 w-4 text-[hsl(var(--royal))]" /> Acompanhamento dedicado</li>
          </ul>
        </div>
        <InvestMockup />
      </div>
    </section>

    <section className="container-x py-20">
      <SectionTitle eyebrow="Como funciona" title="Quatro passos para investir" />
      <div className="mt-12">
        <StepTimeline
          steps={[
            { title: "Cadastro", text: "Inicie seu cadastro online com poucos dados." },
            { title: "Análise de perfil", text: "Identificamos seu perfil e objetivos." },
            { title: "Escolha da oportunidade", text: "Apresentamos opções compatíveis." },
            { title: "Acompanhamento", text: "Você acompanha tudo de perto." },
          ]}
        />
      </div>
    </section>

    <section className="container-x">
      <div className="rounded-2xl border border-[hsl(var(--gold))/0.3] bg-[hsl(var(--gold))/0.06] p-5 text-sm text-foreground">
        <strong>Aviso:</strong> Todo investimento envolve riscos. Consulte nossos especialistas antes de investir.
      </div>
    </section>

    <CTASection title="Converse com um consultor de investimentos" cta="Quero falar com um consultor" />
  </Layout>
);

export default InvistaConosco;