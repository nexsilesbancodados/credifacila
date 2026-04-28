import { useState } from "react";
import { Link } from "react-router-dom";
import { useSeo } from "@/hooks/useSeo";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  ShieldCheck,
  TrendingUp,
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
  MapPin,
  Phone,
  Mail,
  Zap,
  BarChart3,
  Lock,
  Plus,
  Minus,
} from "lucide-react";
import { whatsappLink } from "@/config/site";
import logo from "@/assets/credifacil-logo.webp";
import heroIllo from "@/assets/hero-securitizadora-photo.jpg";
import bannerImg from "@/assets/securitizadora-banner.webp";
import meetingImg from "@/assets/securitizadora-meeting.webp";

const solutions = [
  {
    icon: LineChart,
    title: "Antecipação de Recebíveis",
    desc: "Acesso rápido ao capital que você precisa, sem burocracia ou novo endividamento.",
    href: "/antecipacao-recebiveis",
  },
  {
    icon: FileCheck,
    title: "Boleto Garantido",
    desc: "Mais segurança e previsibilidade no seu fluxo de caixa, com recebimentos no prazo.",
    href: "/boleto-garantido",
  },
  {
    icon: Briefcase,
    title: "Gestão de Contas",
    desc: "Organização e otimização financeira, com cobrança eficiente e sem dor de cabeça.",
    href: "/",
  },
  {
    icon: Banknote,
    title: "Conta Digital Luri",
    desc: "Gestão simples e sem taxas abusivas, com mais controle para o seu negócio.",
    href: "/conta-digital-luri",
  },
];

const values = [
  {
    icon: Target,
    title: "Propósito",
    desc: "Transformar desafios em oportunidades para empresas e empreendedores de todos os portes.",
  },
  {
    icon: HeartHandshake,
    title: "Parceria",
    desc: "Mais que crédito: somos parceiros estratégicos no crescimento do seu negócio.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança",
    desc: "Tradição, confiança e solidez que sustentam cada operação que realizamos.",
  },
];

const differentials = [
  { icon: Zap, title: "Aprovação ágil", desc: "Análise rápida para operações empresariais." },
  { icon: Lock, title: "Sigilo absoluto", desc: "Confidencialidade total nas operações." },
  { icon: BarChart3, title: "Análise sob medida", desc: "Estudo personalizado para cada negócio." },
  { icon: Globe2, title: "Cobertura nacional", desc: "Atendimento em todo o território brasileiro." },
  { icon: HeartHandshake, title: "Atendimento humano", desc: "Especialista dedicado para sua empresa." },
  { icon: FileCheck, title: "Sem burocracia", desc: "Processos simples e contratos transparentes." },
];

const sectors = [
  "Indústria", "Comércio", "Serviços", "Agronegócio",
  "Construção", "Logística", "Tecnologia", "Saúde",
];

const faqs = [
  {
    q: "O que é uma securitizadora?",
    a: "É uma instituição que adquire direitos creditórios (como duplicatas e recebíveis) de empresas, oferecendo capital imediato em troca de créditos a vencer. É uma alternativa ao crédito bancário tradicional, sem aumentar o endividamento da empresa.",
  },
  {
    q: "Quem pode contratar nossas soluções?",
    a: "Atendemos empresas de todos os portes — do pequeno empreendedor à média empresa — em diversos setores como indústria, comércio, serviços, agronegócio, construção, logística, tecnologia e saúde.",
  },
  {
    q: "Quais documentos são necessários?",
    a: "Documentos básicos da empresa (contrato social, CNPJ, faturamento) e dos sócios. O time consultivo orienta toda a documentação no primeiro contato, de forma simples e sem complicações.",
  },
  {
    q: "Quanto tempo leva a análise?",
    a: "Após o envio da documentação completa, a análise é ágil. O tempo exato depende do produto contratado e do perfil do negócio, mas trabalhamos para dar respostas no menor prazo possível.",
  },
  {
    q: "As operações são seguras?",
    a: "Sim. Operamos com total sigilo, contratos transparentes e em conformidade com a legislação vigente. Sua empresa tem um especialista dedicado em cada etapa.",
  },
];

const Securitizadora = () => {
  useSeo({
    title: "Securitizadora | Credifácil — Soluções financeiras para empresas",
    description:
      "Securitizadora Credifácil: antecipação de recebíveis, boleto garantido, gestão de contas e conta digital. Soluções sob medida para empresas brasileiras.",
  });

  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Sou ${form.name} (${form.company}). Email: ${form.email}. Telefone: ${form.phone}. ${form.message}`;
    window.open(whatsappLink(text), "_blank");
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-[hsl(220_16%_98%)]">
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
      <section className="relative overflow-hidden bg-[hsl(220_16%_6%)] pb-32 pt-32 text-white md:pt-40">
        <div
          className="pointer-events-none absolute -right-32 top-10 h-[600px] w-[600px] opacity-50"
          style={{
            background:
              "radial-gradient(ellipse at center, hsl(35 85% 58% / 0.4), transparent 65%)",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at center, hsl(35 85% 58% / 0.35), transparent 70%)",
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
              style={{ textShadow: "0 2px 24px hsl(220 16% 4% / 0.45)" }}
            >
              Soluções financeiras{" "}
              <span className="text-gold-gradient">
                feitas para o Brasil que produz.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-[17px]">
              Somos uma securitizadora completa, com soluções personalizadas para empresas
              de todos os portes —{" "}
              <span className="font-semibold text-white">
                tradição, propósito e atendimento consultivo do início ao fim.
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

            {/* Trust strip */}
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-white/75">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-brand-gold" /> Operações seguras
              </span>
              <span className="inline-flex items-center gap-1.5">
                <HeartHandshake className="h-4 w-4 text-brand-gold" /> Atendimento consultivo
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Award className="h-4 w-4 text-brand-gold" /> Tradição no mercado
              </span>
            </div>
          </div>
          <div className="relative hidden lg:block" data-anim="fade-left">
            <img
              src={heroIllo}
              alt="Skyline corporativo dourado representando a securitizadora"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="mx-auto h-auto w-full max-w-lg drop-shadow-[0_10px_40px_rgba(218,165,32,0.25)]"
            />
          </div>
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
                impulsionar histórias de sucesso e apoiar empreendedores e empresas a
                alcançarem seus objetivos.
              </p>
              <p>
                Atuamos com{" "}
                <span className="font-semibold text-foreground">tradição, confiança e inovação</span>,
                sempre atentos às novas tendências do fomento comercial, com o objetivo de
                transformar dificuldades financeiras em novas oportunidades.
              </p>
              <p>
                Cada operação é desenhada sob medida, com análise consultiva e contratos
                transparentes. O que importa é o crescimento sustentável do seu negócio.
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
                <p className="mt-2 text-sm leading-relaxed text-foreground/75">{v.desc}</p>
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
                    "linear-gradient(90deg, hsl(220 16% 5% / 0.85) 0%, hsl(220 16% 5% / 0.3) 60%, transparent 100%)",
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

      {/* Solutions */}
      <section id="solucoes" className="bg-[hsl(220_16%_6%)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
              Gama de produtos
            </span>
            <h2 className="mt-3 text-4xl font-bold leading-tight text-white md:text-5xl">
              Soluções para <span className="text-brand-gold">o seu negócio</span>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/80">
              Oferecemos uma gama completa de produtos para fortalecer a saúde financeira da sua
              empresa, com atendimento personalizado e tecnologia de ponta.
            </p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {solutions.map((s) => (
              <Link
                key={s.title}
                to={s.href}
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
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/82">{s.desc}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold">
                      Saber mais
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
            Diferenciais
          </span>
          <h2 className="mt-3 text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Por que <span className="text-brand-gold">escolher a Credifácil?</span>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-foreground/75">
            Mais que um fornecedor de crédito, somos um parceiro estratégico para o
            crescimento do seu negócio.
          </p>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((d) => (
            <div
              key={d.title}
              className="flex items-start gap-4 rounded-2xl border border-brand-gold/15 bg-white p-5 transition-all hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-[0_20px_40px_-15px_hsl(30_30%_4%/0.2)]"
            >
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white"
                style={{ background: "var(--gradient-gold)" }}
              >
                <d.icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground">{d.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-foreground/72">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Banner quote */}
      <section className="relative h-[320px] w-full overflow-hidden md:h-[400px]">
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
              "linear-gradient(180deg, hsl(220 16% 5% / 0.6) 0%, hsl(220 16% 5% / 0.9) 100%)",
          }}
        />
        <div className="relative z-10 mx-auto flex h-full max-w-5xl items-center justify-center px-5 text-center">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand-gold">
              Nossa missão
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white md:text-5xl">
              "Tradição, propósito e atendimento
              <br />
              que transformam negócios."
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm text-white/75 md:text-base">
              Transformamos dificuldades financeiras em novas oportunidades para empresas
              brasileiras de todos os portes.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
            Perguntas frequentes
          </span>
          <h2 className="mt-3 text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Tire suas <span className="text-brand-gold">dúvidas</span>
          </h2>
        </div>
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                key={f.q}
                className="overflow-hidden rounded-2xl border border-brand-gold/15 bg-white shadow-[0_6px_20px_-12px_hsl(30_30%_4%/0.18)]"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-brand-gold/5"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-bold text-foreground md:text-base">{f.q}</span>
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white"
                    style={{ background: "var(--gradient-gold)" }}
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm leading-relaxed text-foreground/75">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact form + info */}
      <section id="contato" className="bg-[hsl(220_16%_6%)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            {/* Info */}
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
                Fale com a gente
              </span>
              <h2 className="mt-3 text-4xl font-bold leading-tight text-white md:text-5xl">
                Pronto para impulsionar <span className="text-brand-gold">seu negócio?</span>
              </h2>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/80">
                Conte com um especialista para desenhar a solução ideal para a sua empresa.
                Atendimento consultivo, sem compromisso.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  { icon: MapPin, title: "Atendimento nacional", desc: "Em todo o território brasileiro" },
                  { icon: Phone, title: "WhatsApp comercial", desc: "Resposta rápida em horário comercial" },
                  { icon: Mail, title: "E-mail comercial", desc: "empresas@credifacil.com.br" },
                ].map((c) => (
                  <div key={c.title} className="flex items-start gap-4">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-white"
                      style={{ background: "var(--gradient-gold)" }}
                    >
                      <c.icon className="h-5 w-5" strokeWidth={2} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">{c.title}</div>
                      <div className="text-sm text-white/75">{c.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={whatsappLink("Olá! Quero falar com a Credifácil Securitizadora.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/20"
              >
                <TrendingUp className="h-4 w-4" />
                Falar direto no WhatsApp
              </a>
            </div>

            {/* Form */}
            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm md:p-9">
              {sent ? (
                <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center">
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-full text-white"
                    style={{ background: "var(--gradient-gold)" }}
                  >
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="mt-5 text-2xl font-bold text-white">Pedido enviado!</h3>
                  <p className="mt-2 max-w-sm text-sm text-white/75">
                    Abrimos o WhatsApp para você concluir o contato. Em breve um especialista
                    retornará.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-white">Solicitar contato</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="form-label text-white/80">Nome*</label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="form-input bg-white/5 text-white placeholder:text-white/40"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label className="form-label text-white/80">Empresa*</label>
                      <input
                        required
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="form-input bg-white/5 text-white placeholder:text-white/40"
                        placeholder="Razão social"
                      />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="form-label text-white/80">E-mail*</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="form-input bg-white/5 text-white placeholder:text-white/40"
                        placeholder="email@empresa.com"
                      />
                    </div>
                    <div>
                      <label className="form-label text-white/80">Telefone*</label>
                      <input
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="form-input bg-white/5 text-white placeholder:text-white/40"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="form-label text-white/80">Como podemos ajudar?</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="form-input bg-white/5 text-white placeholder:text-white/40"
                      placeholder="Conte um pouco sobre sua necessidade..."
                    />
                  </div>
                  <button type="submit" className="btn-gold w-full justify-center">
                    Enviar pedido
                    <ArrowRight className="h-5 w-5" />
                  </button>
                  <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 pt-2 text-[11px] font-medium text-white/65">
                    <span className="inline-flex items-center gap-1.5">
                      <ShieldCheck className="h-3.5 w-3.5 text-brand-gold" /> Dados seguros
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-brand-gold" /> Resposta rápida
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-foreground/10 bg-white/40 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 md:flex-row md:px-8">
          <p className="text-xs text-foreground/70">
            © {new Date().getFullYear()} Credifácil — Securitizadora. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-5 text-xs font-medium text-foreground/75">
            <Link to="/" className="hover:text-brand-gold">Início</Link>
            <Link to="/consignado" className="hover:text-brand-gold">Consignado</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Securitizadora;
