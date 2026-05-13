import { Award, Heart, Rocket, ShieldCheck, Sparkles, Target, TrendingUp, Users, Building2, Quote } from "lucide-react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";

const TIMELINE = [
  { year: "2015", title: "Fundação", text: "A Credifácil nasce com a missão de descomplicar o crédito para milhares de brasileiros." },
  { year: "2017", title: "Primeira filial", text: "Expansão regional e início das operações de crédito consignado em larga escala." },
  { year: "2020", title: "100% digital", text: "Lançamento da plataforma online — contratação completa em minutos, sem papel." },
  { year: "2022", title: "Securitizadora", text: "Criação da divisão de antecipação de recebíveis e boleto garantido para empresas." },
  { year: "2024", title: "Conta Digital Luri", text: "Lançamento da conta digital completa para pessoas e empresas." },
  { year: "2026", title: "+50 mil clientes", text: "Marca histórica de clientes atendidos com excelência e atendimento humano." },
];

const VALUES = [
  { I: Heart, t: "Atendimento humano", s: "Especialistas reais que escutam e orientam." },
  { I: ShieldCheck, t: "Transparência", s: "Sem letras miúdas, sem surpresas." },
  { I: Rocket, t: "Agilidade", s: "Resposta em minutos, liberação em até 24h." },
  { I: Target, t: "Compromisso", s: "Soluções sob medida para cada cliente." },
];

const CASES = [
  { num: "+R$ 800M", l: "em crédito liberado", I: TrendingUp },
  { num: "+50 mil", l: "clientes atendidos", I: Users },
  { num: "98%", l: "índice de aprovação", I: Award },
  { num: "4.9/5", l: "avaliação dos clientes", I: Sparkles },
];

const TESTIMONIALS = [
  { name: "Marina S.", role: "Empresária — Comércio", text: "Antecipei recebíveis e em 24h tinha capital para abrir minha segunda loja. Mudou meu negócio." },
  { name: "Carlos R.", role: "Servidor público", text: "Quitei dívidas caras com um consignado de taxa muito menor. Atendimento impecável do início ao fim." },
  { name: "Felipe A.", role: "Lojista", text: "Boleto Garantido reduziu minha inadimplência em 40% no primeiro semestre." },
];

const PARTNERS = ["Banco Central", "FEBRABAN", "ABBC", "Reclame Aqui", "Serasa", "SPC Brasil"];

const Sobre = () => (
  <Layout tone="midnight">
    <SEOHead
      title="Sobre a Credifácil | Quem somos"
      description="Há mais de uma década descomplicando o crédito no Brasil. Conheça a história, valores e equipe da Credifácil."
    />
    <PageHeader
      eyebrow="Quem somos"
      title={<>Há mais de uma década <span className="text-gold-gradient">descomplicando o crédito</span></>}
      subtitle="Combinamos tecnologia, experiência financeira e atendimento humano para transformar a relação das pessoas e empresas com dinheiro."
      primaryCta={{ label: "Fale conosco", href: "/contato" }}
      secondaryCta={{ label: "Ver soluções", href: "/" }}
      className="-mt-[72px] pt-[72px] md:-mt-[84px] md:pt-[84px]"
    />

    {/* MISSÃO + VALORES */}
    <section className="container-x py-20">
      <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <span className="pill"><Sparkles className="h-3 w-3" /> Nossa essência</span>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl">
            Crédito que <span className="text-gold-gradient">faz sentido</span> para quem realmente importa
          </h2>
          <p className="mt-5 text-base text-white/95 md:text-lg">
            Acreditamos que crédito bem oferecido é ferramenta de realização — não armadilha. Por isso colocamos clareza, taxa justa e atendimento humano no centro de tudo o que fazemos.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid gap-4 sm:grid-cols-2">
            {VALUES.map(({ I, t, s }) => (
              <div key={t} className="card-soft p-6">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[hsl(var(--royal))/0.3] to-[hsl(var(--gold))/0.25] text-[hsl(var(--gold-soft))]">
                  <I className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-extrabold">{t}</h3>
                <p className="mt-1.5 text-sm">{s}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>

    {/* NÚMEROS / CASES */}
    <section className="container-x py-12">
      <Reveal>
        <SectionTitle
          light
          eyebrow="Resultados"
          title={<>Números que traduzem <span className="text-royal-gradient">nossa trajetória</span></>}
        />
      </Reveal>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {CASES.map(({ num, l, I }, i) => (
          <Reveal key={l} delay={i * 0.06}>
            <div className="card-soft p-6 text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[hsl(var(--royal))/0.3] to-[hsl(var(--gold))/0.25] text-[hsl(var(--gold-soft))]">
                <I className="h-6 w-6" />
              </div>
              <p className="mt-4 text-3xl font-extrabold text-gold-gradient">{num}</p>
              <p className="mt-1 text-xs uppercase tracking-wider">{l}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* TIMELINE */}
    <section className="container-x py-20">
      <Reveal>
        <SectionTitle
          light
          eyebrow="Nossa história"
          title={<>Uma década de <span className="text-gold-gradient">evolução constante</span></>}
          subtitle="Cada marco representa um compromisso renovado com nossos clientes."
        />
      </Reveal>
      <div className="relative mt-12">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[hsl(var(--gold))] via-[hsl(var(--royal))] to-transparent md:left-1/2" />
        <ol className="space-y-8">
          {TIMELINE.map((t, i) => (
            <Reveal key={t.year} delay={i * 0.05}>
              <li className={`relative grid gap-4 md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? "" : "md:[&>div:first-child]:order-2"}`}>
                <div className="absolute left-4 top-2 grid h-3 w-3 -translate-x-1/2 place-items-center rounded-full bg-[hsl(var(--gold))] ring-4 ring-[hsl(var(--navy-deep))] md:left-1/2" />
                <div className="card-soft ml-10 p-6 md:ml-0">
                  <span className="text-gold-gradient text-3xl font-extrabold">{t.year}</span>
                  <h3 className="mt-2 text-lg font-extrabold">{t.title}</h3>
                  <p className="mt-2 text-sm">{t.text}</p>
                </div>
                <div className="hidden md:block" />
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>

    {/* DEPOIMENTOS / CASES NARRATIVOS */}
    <section className="container-x py-20">
      <Reveal>
        <SectionTitle
          light
          eyebrow="Cases reais"
          title={<>Histórias de quem <span className="text-royal-gradient">cresceu com a gente</span></>}
        />
      </Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {TESTIMONIALS.map((c, i) => (
          <Reveal key={c.name} delay={i * 0.08}>
            <article className="card-soft p-6">
              <Quote className="h-8 w-8 rounded-xl bg-[hsl(var(--gold))] p-1.5 text-[hsl(var(--navy-deep))]" />
              <p className="mt-4 text-sm leading-relaxed">"{c.text}"</p>
              <div className="mt-5 border-t border-white/10 pt-4">
                <p className="text-sm font-extrabold">{c.name}</p>
                <p className="text-xs uppercase tracking-wider opacity-90">{c.role}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>

    {/* PARCEIROS / CERTIFICAÇÕES */}
    <section className="container-x py-20">
      <Reveal>
        <SectionTitle
          light
          eyebrow="Parceiros & certificações"
          title={<>Confiança construída com <span className="text-gold-gradient">grandes instituições</span></>}
        />
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {PARTNERS.map((p) => (
            <div key={p} className="grid h-24 place-items-center rounded-2xl border border-white/15 bg-white/5 p-4 text-center backdrop-blur-md transition-all hover:border-[hsl(var(--gold))/0.4] hover:bg-white/10">
              <div className="flex flex-col items-center gap-2">
                <Building2 className="h-5 w-5 text-[hsl(var(--gold-soft))]" />
                <span className="text-xs font-bold text-white">{p}</span>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>

    <CTASection
      title="Quer fazer parte da nossa história?"
      subtitle="Fale com nossos especialistas e descubra a melhor solução para você ou sua empresa."
      cta="Falar com especialista"
    />
  </Layout>
);

export default Sobre;
