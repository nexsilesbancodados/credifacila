import { Award, Heart, Rocket, ShieldCheck, Sparkles, Target, TrendingUp, Users, Building2, Quote, History, Landmark, ShieldAlert, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";

const TIMELINE = [
  { year: "2015", title: "Fundação", text: "A Credifácil nasce com a missão de descomplicar o crédito para milhares de brasileiros." },
  { year: "2017", title: "Expansão Regional", text: "Início das operações de crédito consignado em larga escala e abertura da primeira filial física." },
  { year: "2020", title: "Transformação Digital", text: "Lançamento da plataforma online com contratação via biometria facial em minutos." },
  { year: "2022", title: "Estruturação de Fomento", text: "Criação da divisão Securitizadora para atender o mercado corporativo com antecipação de recebíveis." },
  { year: "2024", title: "Ecossistema Luri", text: "Lançamento da conta digital integrada e verticalização das soluções de pagamento." },
  { year: "2026", title: "Consolidação Corporate", text: "Foco em Asset Management e soluções de crédito estruturado de alta complexidade." },
];

const VALUES = [
  { I: Heart, t: "Atendimento Humanizado", s: "Consultoria real feita por especialistas certificados, não apenas bots." },
  { I: ShieldCheck, t: "Transparência Bancária", s: "Clareza total em taxas e contratos, seguindo rigorosamente as normas do BACEN." },
  { I: Rocket, t: "Agilidade Executiva", s: "Processos otimizados para liberação de capital em tempo recorde no mercado." },
  { I: Target, t: "Compromisso com o Cliente", s: "Soluções personalizadas que respeitam a saúde financeira do tomador." },
];

const CASES = [
  { num: "+R$ 1.2B", l: "Liberados em Crédito", I: TrendingUp },
  { num: "+65 mil", l: "Vidas Impactadas", I: Users },
  { num: "98.5%", l: "Taxa de Aprovação", I: Award },
  { num: "NPS 78", l: "Zona de Excelência", I: Sparkles },
];

const PARTNERS = ["Banco Central", "FEBRABAN", "ABBC", "Reclame Aqui", "Serasa", "SPC Brasil"];

const Sobre = () => (
  <Layout tone="midnight">
    <SEOHead
      title="Sobre a Credifácil | Nossa História e Governança"
      description="Há mais de uma década transformando o mercado de crédito no Brasil. Conheça nossa trajetória, valores e compromisso institucional."
    />
    <PageHeader
      eyebrow="Institucional"
      title={<>Mais de uma década de <span className="text-gold-gradient">solidez e inovação</span></>}
      subtitle="Combinamos a segurança das instituições tradicionais com a agilidade das fintechs para criar o futuro do crédito no Brasil."
      primaryCta={{ label: "Conhecer Governança", href: "/contato" }}
      secondaryCta={{ label: "Nossa História", href: "#historia" }}
      className="-mt-[72px] pt-[72px] md:-mt-[84px] md:pt-[84px]"
    />

    <section className="container-x py-24">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <div>
            <span className="pill-gold"><ShieldAlert className="h-3 w-3" /> Nossa Essência</span>
            <h2 className="mt-6 text-3xl font-extrabold leading-tight text-white md:text-5xl">
              Propósito que gera <span className="text-gold-gradient">valor real</span>
            </h2>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              A Credifácil não nasceu para ser apenas mais uma financeira. Nascemos para ser o porto seguro de quem precisa de capital para crescer, investir ou reorganizar sua vida financeira. 
            </p>
            <p className="mt-4 text-white/80">
              Nossa operação é pautada por três pilares inegociáveis: tecnologia de ponta, taxas competitivas e, acima de tudo, respeito pelo ser humano por trás de cada contrato.
            </p>
            <div className="mt-10 space-y-4">
              {["Regulada pelo Banco Central do Brasil", "Processos auditados trimestralmente", "Time de especialistas com certificação ANBIMA"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white/90">
                  <CheckCircle2 className="h-5 w-5 text-[hsl(var(--gold-soft))]" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid gap-6 sm:grid-cols-2">
            {VALUES.map(({ I, t, s }) => (
              <div key={t} className="card-soft p-8 bg-white/5 border-white/10 hover:bg-white/10 transition-all">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[hsl(var(--royal))] to-[hsl(var(--gold))] text-white shadow-xl">
                  <I className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">{t}</h3>
                <p className="mt-3 text-sm text-white/80 leading-relaxed font-medium">{s}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>

    <section className="bg-white/[0.02] py-24">
      <div className="container-x">
        <Reveal>
          <SectionTitle
            light
            eyebrow="Impacto em Números"
            title={<>Resultados que comprovam <span className="text-royal-gradient">nossa solidez</span></>}
          />
        </Reveal>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {CASES.map(({ num, l, I }, i) => (
            <Reveal key={l} delay={i * 0.1}>
              <div className="card-soft p-8 text-center bg-white/5">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-[hsl(var(--gold-soft))] mb-6">
                  <I className="h-6 w-6" />
                </div>
                <p className="text-4xl font-black text-white tracking-tighter">{num}</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-white/60 font-bold">{l}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section id="historia" className="container-x py-24">
      <Reveal>
        <SectionTitle
          light
          eyebrow="Legacy"
          title={<>Uma década de <span className="text-gold-gradient">evolução institucional</span></>}
          subtitle="Acompanhe os marcos que definiram quem somos hoje."
        />
      </Reveal>
      <div className="relative mt-20">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[hsl(var(--gold))] via-[hsl(var(--royal))] to-transparent md:left-1/2" />
        <div className="space-y-16">
          {TIMELINE.map((t, i) => (
            <Reveal key={t.year} delay={i * 0.1}>
              <div className={`relative flex items-center gap-12 md:justify-between ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="absolute left-4 h-4 w-4 -translate-x-1/2 rounded-full bg-[hsl(var(--gold))] ring-4 ring-navy-deep md:left-1/2" />
                <div className="card-soft ml-12 p-8 md:ml-0 md:w-[45%] bg-white/5">
                  <span className="text-4xl font-black text-[hsl(var(--gold-soft))] opacity-50">{t.year}</span>
                  <h3 className="mt-2 text-xl font-bold text-white">{t.title}</h3>
                  <p className="mt-3 text-sm text-white/80 leading-relaxed font-medium">{t.text}</p>
                </div>
                <div className="hidden md:block md:w-[45%]" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="container-x py-24">
      <Reveal>
        <SectionTitle
          light
          eyebrow="Trust & Compliance"
          title={<>Reconhecimento pelas <span className="text-gold-gradient">maiores instituições</span></>}
        />
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {PARTNERS.map((p) => (
            <div key={p} className="grid h-32 place-items-center rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md transition-all hover:border-[hsl(var(--gold-soft))/0.4] hover:bg-white/10 group">
              <div className="flex flex-col items-center gap-3">
                <Landmark className="h-6 w-6 text-white/20 group-hover:text-[hsl(var(--gold-soft))] transition-colors" />
                <span className="text-xs font-bold text-white/60 group-hover:text-white transition-colors uppercase tracking-widest">{p}</span>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>

    <CTASection
      title="Pronto para crescer com quem entende de mercado?"
      subtitle="Agende uma conversa com nosso time institucional."
      cta="Falar com Especialista"
    />
  </Layout>
);

export default Sobre;
