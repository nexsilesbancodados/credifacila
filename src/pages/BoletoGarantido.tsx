import { Check, BarChart3, Building2, ShieldCheck, TrendingUp, Wallet, Zap, Headset, X } from "lucide-react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import FeatureGrid from "@/components/sections/FeatureGrid";
import StepTimeline from "@/components/sections/StepTimeline";
import CTASection from "@/components/CTASection";
import BoletoMockup from "@/components/mockups/BoletoMockup";

const BoletoGarantido = () => (
  <Layout>
    <PageHeader
      eyebrow="Boleto Garantido"
      title={<>Boleto Garantido para sua empresa <span className="text-gold-gradient">vender com mais segurança</span></>}
      subtitle="Tenha mais previsibilidade, reduza riscos e receba com tranquilidade."
      primaryCta={{ label: "Conhecer Boleto Garantido", href: "/contato" }}
      secondaryCta={{ label: "Falar com especialista", href: "/contato" }}
      className="-mt-[72px] pt-[72px] md:-mt-[84px] md:pt-[84px]"
      right={<BoletoMockup />}
    />

    <section className="container-x py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <span className="pill"><ShieldCheck className="h-3 w-3" /> O que é</span>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">O que é Boleto Garantido?</h2>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            É a solução que aumenta a segurança das vendas com boleto e traz mais previsibilidade ao recebimento, protegendo sua empresa contra inadimplência.
          </p>
          <p className="mt-3 text-base text-muted-foreground">
            Você vende com tranquilidade e nós cuidamos da garantia do recebimento.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { v: "-72%", l: "Inadimplência" },
            { v: "+98%", l: "Previsibilidade" },
            { v: "24h", l: "Recebimento" },
            { v: "100%", l: "Seguro" },
          ].map((s) => (
            <div key={s.l} className="card-soft p-5 text-center">
              <p className="text-3xl font-extrabold text-royal-gradient">{s.v}</p>
              <p className="text-sm text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="container-x py-20">
      <SectionTitle eyebrow="Benefícios" title="Por que usar Boleto Garantido" />
      <div className="mt-12">
        <FeatureGrid
          cols={3}
          items={[
            { icon: TrendingUp, title: "Menos inadimplência", text: "Receba mesmo se o cliente atrasar." },
            { icon: BarChart3, title: "Fluxo de caixa previsível", text: "Planeje com segurança." },
            { icon: ShieldCheck, title: "Mais segurança nas vendas", text: "Reduza riscos comerciais." },
            { icon: Building2, title: "Proteção para sua empresa", text: "Cobertura completa nas operações." },
            { icon: Wallet, title: "Mais confiança nas negociações", text: "Venda com tranquilidade." },
            { icon: Zap, title: "Processo simples", text: "Integração rápida e fácil." },
          ]}
        />
      </div>
    </section>

    <section className="container-x py-20">
      <SectionTitle eyebrow="Como funciona" title="Quatro passos simples" />
      <div className="mt-12">
        <StepTimeline
          steps={[
            { title: "Emissão", text: "Emita o boleto pela plataforma." },
            { title: "Análise", text: "Avaliamos e validamos a operação." },
            { title: "Garantia", text: "Recebimento garantido pela Credifácil." },
            { title: "Recebimento", text: "Você recebe nos prazos previstos." },
          ]}
        />
      </div>
    </section>

    <section className="container-x py-20">
      <SectionTitle eyebrow="Comparativo" title="Veja a diferença" />
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        <div className="card-soft p-7">
          <div className="flex items-center gap-2"><X className="h-5 w-5 text-rose-500" /><h3 className="text-lg font-extrabold">Venda comum</h3></div>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><X className="mt-0.5 h-4 w-4 shrink-0 text-rose-500" /> Maior risco de inadimplência</li>
            <li className="flex items-start gap-2"><X className="mt-0.5 h-4 w-4 shrink-0 text-rose-500" /> Possível atraso ou perda</li>
            <li className="flex items-start gap-2"><X className="mt-0.5 h-4 w-4 shrink-0 text-rose-500" /> Menos previsibilidade no caixa</li>
          </ul>
        </div>
        <div className="card-soft border-2 border-[hsl(var(--royal))/0.4] p-7">
          <div className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-[hsl(var(--royal))]" /><h3 className="text-lg font-extrabold">Venda com Boleto Garantido</h3></div>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" /> Mais segurança nas vendas</li>
            <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" /> Recebimento previsível</li>
            <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" /> Mais tranquilidade para crescer</li>
            <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" /> Atendimento <Headset className="inline h-3.5 w-3.5" /> consultivo</li>
          </ul>
        </div>
      </div>
    </section>

    <CTASection title="Proteja suas vendas com a Credifácil" cta="Conhecer Boleto Garantido" />
  </Layout>
);

export default BoletoGarantido;