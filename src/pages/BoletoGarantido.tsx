import { Check, BarChart3, Building2, ShieldCheck, TrendingUp, Wallet, Zap, Headset, X, BellRing, Scale } from "lucide-react";
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

const BoletoGarantido = () => (
  <Layout tone="azure">
    <SEOHead
      title="Boleto Garantido | Credifácil Securitizadora"
      description="Venda com mais segurança: previsibilidade de recebimento e proteção contra inadimplência com o Boleto Garantido Credifácil."
    />
    <PageHeader
      eyebrow="Boleto Garantido"
      title={<>Boleto Garantido para sua empresa <span className="text-gold-gradient">vender com mais segurança</span></>}
      subtitle="Tenha mais previsibilidade, reduza riscos e receba com tranquilidade."
      primaryCta={{ label: "Conhecer Boleto Garantido", href: "/contato" }}
      secondaryCta={{ label: "Falar com especialista", href: "/contato" }}
      bgImage={imgBoleto}
      className="-mt-[72px] pt-[72px] md:-mt-[84px] md:pt-[84px]"
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
      <SectionTitle light eyebrow="Segurança Total" title="Fim do risco de inadimplência" />
      <div className="mt-12">
        <FeatureGrid
          cols={3}
          items={[
            { icon: Scale, title: "Régua de Cobrança", text: "Nós cuidamos de todo o processo de cobrança amigável para você focar nas vendas." },
            { icon: ShieldCheck, title: "Garantia de Recebimento", text: "Caso o seu cliente não pague, a Credifácil honra o compromisso no prazo acordado." },
            { icon: BellRing, title: "Alertas Automáticos", text: "Notificações via WhatsApp e E-mail para seus clientes evitarem esquecimentos." },
            { icon: TrendingUp, title: "Poder de Negociação", text: "Venda a prazo com a segurança de uma venda à vista, aumentando seu market share." },
            { icon: Wallet, title: "Custo-Benefício", text: "Taxas menores que a antecipação comum, com a proteção adicional contra calotes." },
            { icon: Building2, title: "Blindagem de Caixa", text: "Seu fluxo de caixa nunca para, independente do comportamento de pagamento do sacado." },
          ]}
        />
      </div>
    </section>

    <section className="container-x py-20">
      <SectionTitle light eyebrow="O Ciclo" title="Como a garantia protege você" />
      <div className="mt-12">
        <StepTimeline
          steps={[
            { title: "Emissão Inteligente", text: "Você gera o boleto através da nossa API ou painel administrativo para seu cliente." },
            { title: "Validação do Risco", text: "Nossos algoritmos analisam o histórico do pagador e aprovam a garantia do título." },
            { title: "Monitoramento Ativo", text: "Acompanhamos o vencimento e enviamos lembretes proativos de pagamento." },
            { title: "Liquidez Certa", text: "Na data do vencimento + D, o crédito cai na sua conta mesmo que o boleto não seja pago." },
          ]}
        />
      </div>
    </section>

    <SectionBanner image={bannerSeguranca} alt="Atendente Credifácil com elementos visuais de segurança" />

    <section className="container-x py-20">
      <SectionTitle light eyebrow="Comparativo" title="Veja a diferença" />
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