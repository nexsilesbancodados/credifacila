import { Link } from "react-router-dom";
import { useSeo } from "@/hooks/useSeo";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Briefcase,
  ShieldCheck,
  TrendingUp,
  Users,
  Award,
  Globe2,
  Clock,
  CheckCircle2,
  Sparkles,
  Target,
  HeartHandshake,
  LineChart,
  Banknote,
  FileCheck,
  Quote,
  Star,
  MapPin,
  Phone,
  Mail,
  Zap,
  BarChart3,
  Lock,
} from "lucide-react";
import { whatsappLink } from "@/config/site";
import logo from "@/assets/credifacil-logo.webp";
import heroIllo from "@/assets/illustrations/hero-securitizadora.svg";
import bannerImg from "@/assets/securitizadora-banner.webp";
import teamImg from "@/assets/securitizadora-team.webp";
import meetingImg from "@/assets/securitizadora-meeting.webp";

const stats = [
  { icon: Award, value: "+30", label: "Anos de experiência" },
  { icon: Banknote, value: "+R$ 2 Bi", label: "Movimentados por mês" },
  { icon: Building2, value: "+100", label: "Agências no Brasil" },
  { icon: Users, value: "+30 mil", label: "Clientes atendidos" },
];

const solutions = [
  {
    icon: LineChart,
    title: "Antecipação de Recebíveis",
    desc: "Acesso rápido ao capital que você precisa, sem burocracia ou endividamento.",
  },
  {
    icon: FileCheck,
    title: "Boleto Garantido",
    desc: "Mais segurança e controle nos recebimentos, para que você receba no prazo certo.",
  },
  {
    icon: Briefcase,
    title: "Gestão de Contas",
    desc: "Organização e otimização financeira, com cobrança eficiente e sem dor de cabeça.",
  },
  {
    icon: Banknote,
    title: "Conta Digital do Futuro",
    desc: "Gestão simples e sem taxas abusivas, com mais controle para o seu negócio.",
  },
];

const values = [
  {
    icon: Target,
    title: "Propósito",
    desc: "Transformar desafios em oportunidades para empresas e famílias de todos os portes.",
  },
  {
    icon: HeartHandshake,
    title: "Parceria",
    desc: "Mais que crédito: somos parceiros no crescimento do seu negócio a cada passo.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança",
    desc: "Mais de três décadas de tradição, confiança e solidez no mercado financeiro.",
  },
];

const timeline = [
  { year: "1994", title: "Fundação", desc: "Início da operação como agência de fomento comercial." },
  { year: "2005", title: "Expansão regional", desc: "Abertura das primeiras agências fora do estado natal." },
  { year: "2015", title: "100 agências", desc: "Marca histórica de 100 unidades em todo o Brasil." },
  { year: "2020", title: "Transformação digital", desc: "Lançamento da plataforma 100% online." },
  { year: "Hoje", title: "+R$ 2 Bi/mês", desc: "Liderança nacional no setor de fomento comercial." },
];

const differentials = [
  { icon: Zap, title: "Aprovação ágil", desc: "Análise em até 24h para operações empresariais." },
  { icon: Lock, title: "Sigilo absoluto", desc: "Confidencialidade total nas operações." },
  { icon: BarChart3, title: "Análise sob medida", desc: "Estudo personalizado para cada perfil de negócio." },
  { icon: Globe2, title: "Cobertura nacional", desc: "Presença em todas as regiões do país." },
  { icon: HeartHandshake, title: "Atendimento humano", desc: "Gerente dedicado para sua empresa." },
  { icon: FileCheck, title: "Sem burocracia", desc: "Processos simples e contratos transparentes." },
];

const testimonials = [
  {
    name: "Marcelo Antunes",
    role: "CEO — Antunes Logística",
    text: "Em 30 anos de empresa, nunca tive uma parceria tão sólida. A antecipação de recebíveis salvou nosso fluxo de caixa em momentos críticos.",
  },
  {
    name: "Patrícia Mendes",
    role: "Diretora Financeira — Têxtil Brasil",
    text: "Atendimento excepcional, processo rápido e taxas competitivas. Recomendo para qualquer empresa que busca um parceiro de verdade.",
  },
  {
    name: "Roberto Silva",
    role: "Sócio — Construtora RS",
    text: "A Credifácil entendeu nosso negócio desde o primeiro contato. Hoje somos clientes há mais de 8 anos e crescemos juntos.",
  },
];

const sectors = [
  "Indústria", "Comércio", "Serviços", "Agronegócio",
  "Construção", "Logística", "Tecnologia", "Saúde",
];

const Securitizadora = () => {
  useSeo({
    title: "Securitizadora | Credifácil — Soluções para empresas",
    description:
      "Conheça nossa securitizadora: 30 anos de experiência, +100 agências e R$ 2 bilhões movimentados por mês em soluções financeiras para empresas brasileiras.",
  });

  return (
    <div className="min-h-screen bg-[hsl(40_30%_98%)]">
      {/* Top bar */}
      <header className="absolute top-0 z-50 w-full bg-transparent">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 md:px-8">
          <Link to="/" className="flex items-center gap-3" aria-label="Credifácil">
            <img
              src={logo}
              alt="Credifácil"
              className="h-9 w-auto brightness-0 invert md:h-10"
              width={1795}
              height={605}
            />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 hover:text-brand-gold"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Voltar ao início
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[hsl(30_18%_6%)] pb-24 pt-32 text-white md:pt-40">
        <div
          className="pointer-events-none absolute -right-32 top-10 h-[600px] w-[600px] opacity-50"
          style={{
            background:
              "radial-gradient(ellipse at center, hsl(35 85% 58% / 0.4), transparent 65%)",
          }}
          aria-hidden
        />
        <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden />
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div data-anim="fade-right">
            <div className="pill-eyebrow-dark">
              <Sparkles className="h-3.5 w-3.5" />
              Securitizadora Credifácil
            </div>
            <h1
              className="mt-6 font-display text-[42px] font-extrabold leading-[1.02] tracking-tight text-white md:text-[58px] lg:text-[64px]"
              style={{ textShadow: "0 2px 24px hsl(30 30% 4% / 0.45)" }}
            >
              Mais de 30 anos{" "}
              <span className="text-gold-gradient">
                impulsionando o Brasil que produz.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-[17px]">
              Somos uma agência de fomento completa, com soluções personalizadas para empresas
              de todos os portes e setores —{" "}
              <span className="font-semibold text-white">
                tradição, propósito e liderança no mercado de fomento comercial.
              </span>
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contato" className="btn-gold group">
                <Briefcase className="h-5 w-5" strokeWidth={2.4} />
                Falar com especialista
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#solucoes" className="btn-ghost-light">
                Conhecer soluções
              </a>
            </div>
          </div>
          {/* Right: hero illustration */}
          <div className="relative hidden lg:block" data-anim="fade-left">
            <img
              src={heroIllo}
              alt="Skyline corporativo dourado representando 30 anos da securitizadora"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="mx-auto h-auto w-full max-w-lg drop-shadow-[0_10px_40px_rgba(218,165,32,0.25)]"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-20 z-20 mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-4 rounded-3xl border border-brand-gold/15 bg-white p-6 shadow-[0_30px_80px_-20px_hsl(30_30%_4%/0.2)] md:grid-cols-4 md:p-8">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-4 md:flex-col md:items-start md:text-left">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl text-white"
                style={{ background: "var(--gradient-gold)" }}
              >
                <s.icon className="h-6 w-6" strokeWidth={2} />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground md:text-3xl">{s.value}</div>
                <div className="text-xs font-medium text-foreground/60">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
              Sobre nós
            </span>
            <h2 className="mt-3 text-4xl font-bold leading-tight text-foreground md:text-5xl">
              O que <span className="text-brand-gold">fazemos?</span>
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-foreground/75">
              <p>
                Nosso compromisso vai além das transações financeiras — estamos aqui para
                impulsionar histórias de sucesso, apoiar empreendedores, famílias e empresas a
                alcançarem seus objetivos.
              </p>
              <p>
                Anualmente movimentamos mais de{" "}
                <span className="font-semibold text-foreground">R$ 2 bilhões em negócios</span>,
                atendemos mais de 30 mil empresas e reafirmamos nosso compromisso em transformar
                dificuldades financeiras em novas oportunidades.
              </p>
              <p>
                Com uma combinação única de <span className="font-semibold text-foreground">tradição, confiança e inovação</span>,
                mantemos a liderança no mercado, sempre atentos às novas tendências do fomento
                comercial.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {sectors.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-brand-gold/25 bg-brand-gold/5 px-3.5 py-1.5 text-xs font-semibold text-foreground/75"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-3xl border border-brand-gold/15 bg-white p-6 shadow-[0_10px_30px_-15px_hsl(30_30%_4%/0.15)] transition-all hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-[0_20px_40px_-15px_hsl(30_30%_4%/0.25)]"
              >
                <div
                  className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl text-white"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  <v.icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/65">{v.desc}</p>
              </div>
            ))}
            <div className="relative col-span-full overflow-hidden rounded-3xl">
              <img
                src={meetingImg}
                alt="Equipe Credifácil em reunião analisando relatórios financeiros"
                className="h-56 w-full object-cover"
                width={1024}
                height={1024}
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, hsl(30 22% 5% / 0.85) 0%, hsl(30 22% 5% / 0.3) 60%, transparent 100%)",
                }}
              />
              <div className="absolute inset-0 flex items-center p-6">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold">
                    Atendimento consultivo
                  </div>
                  <p className="mt-2 max-w-xs text-sm font-semibold leading-snug text-white">
                    Especialistas dedicados ao seu negócio, do diagnóstico à solução.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner full-width */}
      <section className="relative h-[360px] w-full overflow-hidden md:h-[460px]">
        <img
          src={bannerImg}
          alt="Skyline do distrito financeiro brasileiro ao pôr do sol"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1024}
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(30 22% 5% / 0.55) 0%, hsl(30 22% 5% / 0.85) 100%)",
          }}
        />
        <div className="relative z-10 mx-auto flex h-full max-w-5xl items-center justify-center px-5 text-center">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand-gold">
              Liderança no fomento comercial
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white md:text-5xl">
              "Tradição, propósito e liderança
              <br />
              no mercado de fomento comercial."
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm text-white/75 md:text-base">
              Há mais de três décadas transformando dificuldades financeiras em novas
              oportunidades para empresas e famílias brasileiras.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solucoes" className="bg-[hsl(30_18%_6%)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
              Gama de produtos
            </span>
            <h2 className="mt-3 text-4xl font-bold leading-tight text-white md:text-5xl">
              Soluções para <span className="text-brand-gold">o seu negócio</span>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/65">
              Oferecemos uma gama completa de produtos para fortalecer a saúde financeira da sua
              empresa, com atendimento personalizado e tecnologia de ponta.
            </p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {solutions.map((s) => (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-brand-gold/40 hover:bg-white/[0.06]"
              >
                <div
                  className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 transition-opacity group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle, hsl(38 90% 55% / 0.25), transparent 70%)",
                  }}
                />
                <div className="relative flex items-start gap-5">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white"
                    style={{ background: "var(--gradient-gold)" }}
                  >
                    <s.icon className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[32px] shadow-[var(--shadow-card)]">
            <img
              src={teamImg}
              alt="Especialista da Credifácil em escritório moderno"
              className="h-[520px] w-full object-cover"
              width={1024}
              height={1024}
              loading="lazy"
            />
            <div
              className="absolute inset-x-0 bottom-0 p-6"
              style={{
                background:
                  "linear-gradient(180deg, transparent, hsl(30 22% 5% / 0.95))",
              }}
            >
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="flex">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-brand-gold text-brand-gold" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-white">4,9 / 5,0</span>
                </div>
                <p className="mt-2 text-xs text-white/85">
                  Avaliação média de empresas atendidas em todo o Brasil.
                </p>
              </div>
            </div>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
              Diferenciais
            </span>
            <h2 className="mt-3 text-4xl font-bold leading-tight text-foreground md:text-5xl">
              Por que <span className="text-brand-gold">escolher a Credifácil?</span>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-foreground/65">
              Mais que um fornecedor de crédito, somos um parceiro estratégico para o
              crescimento do seu negócio.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {differentials.map((d) => (
                <div
                  key={d.title}
                  className="flex items-start gap-3 rounded-2xl border border-brand-gold/15 bg-white p-4 transition-all hover:border-brand-gold/40"
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white"
                    style={{ background: "var(--gradient-gold)" }}
                  >
                    <d.icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">{d.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-foreground/60">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gradient-to-b from-transparent to-[hsl(40_50%_94%)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
              Nossa trajetória
            </span>
            <h2 className="mt-3 text-4xl font-bold leading-tight text-foreground md:text-5xl">
              Mais de <span className="text-brand-gold">três décadas</span> de história
            </h2>
          </div>
          <div className="relative mt-16">
            {/* horizontal line */}
            <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent md:block" />
            <div className="grid gap-8 md:grid-cols-5">
              {timeline.map((t, i) => (
                <div key={t.year} className="relative">
                  <div className="flex justify-center">
                    <div
                      className="relative flex h-16 w-16 items-center justify-center rounded-full text-sm font-bold text-white shadow-[var(--shadow-gold)]"
                      style={{ background: "var(--gradient-gold)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <div className="mt-5 rounded-2xl border border-brand-gold/15 bg-white p-5 text-center shadow-[0_10px_30px_-15px_hsl(30_30%_4%/0.15)]">
                    <div className="text-xs font-bold uppercase tracking-wider text-brand-gold">
                      {t.year}
                    </div>
                    <h3 className="mt-2 text-base font-bold text-foreground">{t.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-foreground/60">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
            Quem confia
          </span>
          <h2 className="mt-3 text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Empresas que <span className="text-brand-gold">cresceram conosco</span>
          </h2>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group relative rounded-3xl border border-brand-gold/15 bg-white p-7 shadow-[0_10px_30px_-15px_hsl(30_30%_4%/0.15)] transition-all hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-[0_20px_40px_-15px_hsl(30_30%_4%/0.25)]"
            >
              <Quote className="h-8 w-8 text-brand-gold/40" strokeWidth={2} />
              <p className="mt-4 text-sm leading-relaxed text-foreground/80">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3 border-t border-foreground/10 pt-5">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  {t.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">{t.name}</div>
                  <div className="text-xs text-foreground/55">{t.role}</div>
                </div>
              </div>
              <div className="mt-3 flex">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-brand-gold text-brand-gold" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact info */}
      <section className="bg-[hsl(30_18%_6%)] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: MapPin, title: "Atendimento nacional", desc: "+100 agências em todo o Brasil" },
              { icon: Phone, title: "Central exclusiva", desc: "0800 000 0000 — seg a sex 8h às 20h" },
              { icon: Mail, title: "E-mail comercial", desc: "empresas@credifacil.com.br" },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm"
              >
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl text-white"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  <c.icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <h3 className="text-base font-bold text-white">{c.title}</h3>
                <p className="mt-2 text-sm text-white/65">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="mx-auto max-w-5xl px-5 py-20 md:px-8 md:py-28">
        <div
          className="relative overflow-hidden rounded-[32px] p-10 text-center md:p-16"
          style={{ background: "var(--gradient-gold)" }}
        >
          <div className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay">
            <Globe2 className="absolute -right-10 -top-10 h-72 w-72 text-white" strokeWidth={0.5} />
          </div>
          <div className="relative">
            <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
              Pronto para impulsionar
              <br />o seu negócio com quem entende?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] text-white/90">
              Mais de 30 anos transformando desafios em oportunidades. Fale com um especialista
              e descubra a melhor solução para a sua empresa.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/simular"
                className="inline-flex items-center gap-2 rounded-2xl bg-[hsl(30_22%_5%)] px-7 py-4 text-base font-bold text-white transition-all hover:scale-[1.03]"
              >
                <TrendingUp className="h-5 w-5" />
                Simular agora
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href={whatsappLink("Olá! Quero falar com a Credifácil Securitizadora.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur-md transition-all hover:bg-white/20"
              >
                Falar no WhatsApp
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-white/85">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4" /> Atendimento humanizado
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" /> Resposta em minutos
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4" /> 100% seguro
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-foreground/10 bg-white/40 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 md:flex-row md:px-8">
          <p className="text-xs text-foreground/55">
            © {new Date().getFullYear()} Credifácil — Securitizadora. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-5 text-xs font-medium text-foreground/65">
            <Link to="/" className="hover:text-brand-gold">Início</Link>
            <Link to="/consignado" className="hover:text-brand-gold">Consignado</Link>
            <Link to="/simular" className="hover:text-brand-gold">Simular</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Securitizadora;