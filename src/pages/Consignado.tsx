import { Link } from "react-router-dom";
import { useSeo } from "@/hooks/useSeo";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Sparkles,
  Heart,
  Wallet,
  Percent,
  Calendar,
  UserCheck,
  FileSignature,
  Banknote,
  Users,
  Building2,
  GraduationCap,
  Quote,
  Star,
  HelpCircle,
  TrendingDown,
  Zap,
  Smartphone,
  Lock,
  Phone,
} from "lucide-react";
import { whatsappLink } from "@/config/site";
import logo from "@/assets/credifacil-logo.webp";
import heroIllo from "@/assets/illustrations/hero-consignado.svg";
import seniorImg from "@/assets/consignado-senior.webp";
import servidorImg from "@/assets/consignado-servidor.webp";
import bannerImg from "@/assets/consignado-banner.webp";

const benefits = [
  {
    icon: Percent,
    title: "Menores taxas do mercado",
    desc: "A partir de 1,49% a.m. — uma das taxas mais baixas do crédito no Brasil.",
  },
  {
    icon: Calendar,
    title: "Até 96 meses para pagar",
    desc: "Parcelas que cabem no seu bolso, com prazos longos e sem surpresas.",
  },
  {
    icon: Wallet,
    title: "Desconto em folha",
    desc: "Parcela debitada direto do seu benefício ou salário, sem boleto e sem atraso.",
  },
  {
    icon: ShieldCheck,
    title: "100% seguro",
    desc: "Operação regulamentada e contrato eletrônico com validade jurídica.",
  },
];

const audiences = [
  {
    icon: Heart,
    title: "Aposentados e pensionistas do INSS",
    desc: "Crédito com as melhores taxas para quem recebe pelo INSS, com aprovação rápida.",
    badge: "Mais procurado",
  },
  {
    icon: Building2,
    title: "Servidores públicos",
    desc: "Federal, estadual e municipal — convênio com mais de 500 órgãos do país.",
  },
  {
    icon: GraduationCap,
    title: "Militares (Forças Armadas)",
    desc: "Condições exclusivas para Exército, Marinha, Aeronáutica e Polícia Militar.",
  },
  {
    icon: Users,
    title: "Trabalhadores CLT",
    desc: "Empresas conveniadas oferecem consignado privado com taxas reduzidas.",
  },
];

const steps = [
  {
    icon: FileSignature,
    title: "Faça sua simulação",
    desc: "Em 30 segundos você descobre o valor liberado e a parcela que cabe no seu bolso.",
  },
  {
    icon: UserCheck,
    title: "Envie seus documentos",
    desc: "RG, CPF e comprovante de benefício — tudo digital, sem sair de casa.",
  },
  {
    icon: ShieldCheck,
    title: "Aprovação em minutos",
    desc: "Análise automática com resposta rápida e total transparência.",
  },
  {
    icon: Banknote,
    title: "Dinheiro na conta",
    desc: "Receba o valor diretamente na sua conta no mesmo dia da assinatura.",
  },
];

const stats = [
  { value: "1,49%", label: "Taxa a partir de a.m." },
  { value: "96x", label: "Prazo máximo em meses" },
  { value: "R$ 200 mil", label: "Valor liberado em até" },
  { value: "+50 mil", label: "Brasileiros atendidos" },
];

const modalities = [
  {
    icon: Heart,
    title: "Consignado INSS",
    rate: "1,49% a.m.",
    term: "Até 96x",
    value: "Até R$ 50 mil",
    desc: "Para aposentados e pensionistas do INSS, com as menores taxas do mercado.",
    badge: "Mais procurado",
  },
  {
    icon: Building2,
    title: "Servidor Público",
    rate: "1,55% a.m.",
    term: "Até 96x",
    value: "Até R$ 200 mil",
    desc: "Federal, estadual e municipal — com convênio em mais de 500 órgãos.",
    badge: null,
  },
  {
    icon: GraduationCap,
    title: "Forças Armadas",
    rate: "1,52% a.m.",
    term: "Até 96x",
    value: "Até R$ 150 mil",
    desc: "Exército, Marinha, Aeronáutica e Polícia Militar com condições exclusivas.",
    badge: "Exclusivo",
  },
  {
    icon: Users,
    title: "Consignado Privado",
    rate: "1,89% a.m.",
    term: "Até 60x",
    value: "Até R$ 80 mil",
    desc: "Empresas conveniadas oferecem consignado CLT com taxas reduzidas.",
    badge: null,
  },
];

const documents = [
  "RG e CPF (ou CNH)",
  "Comprovante de residência atualizado",
  "Último contracheque ou extrato de benefício",
  "Cartão do benefício (para aposentados/pensionistas)",
];

const testimonials = [
  {
    name: "Dona Maria Helena",
    role: "Aposentada do INSS",
    text: "Consegui realizar o sonho de reformar minha casa com uma parcela que cabe perfeitamente no meu bolso. Atendimento maravilhoso!",
  },
  {
    name: "Carlos Eduardo",
    role: "Servidor Federal",
    text: "Quitei outras dívidas com taxas altíssimas e ainda economizei. Em menos de 3 horas o dinheiro estava na minha conta.",
  },
  {
    name: "Sgt. Roberto Lima",
    role: "Polícia Militar",
    text: "Processo 100% digital, sem sair de casa. A diferença na taxa em relação ao banco onde recebo foi enorme.",
  },
];

const faqs = [
  {
    q: "O que é empréstimo consignado?",
    a: "É uma modalidade de crédito onde a parcela é descontada diretamente do seu benefício do INSS, salário ou contracheque, garantindo as menores taxas do mercado.",
  },
  {
    q: "Quem pode contratar?",
    a: "Aposentados e pensionistas do INSS, servidores públicos (federais, estaduais e municipais), militares e trabalhadores CLT de empresas conveniadas.",
  },
  {
    q: "Posso contratar mesmo com nome sujo?",
    a: "Sim! Como o pagamento é descontado em folha, não consultamos SPC/Serasa para liberar o consignado.",
  },
  {
    q: "Em quanto tempo recebo o dinheiro?",
    a: "Após a aprovação e assinatura digital do contrato, o valor é depositado em sua conta no mesmo dia útil.",
  },
  {
    q: "Posso quitar antes do prazo?",
    a: "Sim. A quitação antecipada é permitida com desconto proporcional dos juros, sem multas.",
  },
];

const benefitsExtra = [
  { icon: TrendingDown, title: "Refinanciamento", desc: "Pegue um valor adicional renegociando o que já tem." },
  { icon: Zap, title: "Portabilidade", desc: "Traga seu consignado de outro banco e pague menos." },
  { icon: Smartphone, title: "100% digital", desc: "Contrate pelo app sem sair de casa." },
  { icon: Lock, title: "Sem entrada", desc: "Sem necessidade de garantia ou avalista." },
];

const Consignado = () => {
  useSeo({
    title: "Empréstimo Consignado | Credifácil — Menores taxas",
    description:
      "Empréstimo consignado para aposentados, pensionistas, servidores públicos e CLT. Taxas a partir de 1,49% a.m., até 96x e dinheiro na conta no mesmo dia.",
  });

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
      <section className="relative overflow-hidden bg-[hsl(220_16%_6%)] pb-16 pt-32 text-white md:pt-40">
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
              Empréstimo Consignado
            </div>
            <h1
              className="mt-6 font-display text-[42px] font-extrabold leading-[1.02] tracking-tight text-white md:text-[58px] lg:text-[64px]"
              style={{ textShadow: "0 2px 24px hsl(220 16% 4% / 0.45)" }}
            >
              Crédito consignado
              <br />
              <span className="text-gold-gradient">
                com as menores taxas do Brasil.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-[17px]">
              Para aposentados, pensionistas do INSS, servidores públicos e militares —
              parcelas a partir de{" "}
              <span className="font-semibold text-white">1,49% a.m.</span> em até{" "}
              <span className="font-semibold text-white">96 meses</span>.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={whatsappLink("Olá! Quero contratar o crédito consignado.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold group"
              >
                <Wallet className="h-5 w-5" strokeWidth={2.4} />
                Quero meu consignado
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#beneficios" className="btn-ghost-light">
                Ver vantagens
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-5">
              <div className="flex items-center gap-2 text-xs font-medium text-white/75">
                <CheckCircle2 className="h-4 w-4 text-brand-gold" />
                Sem consulta ao SPC/Serasa
              </div>
              <div className="hidden h-3 w-px bg-white/15 sm:block" />
              <div className="flex items-center gap-2 text-xs font-medium text-white/75">
                <Clock className="h-4 w-4 text-brand-gold" />
                Dinheiro <span className="font-bold text-white">no mesmo dia</span>
              </div>
              <div className="hidden h-3 w-px bg-white/15 sm:block" />
              <div className="flex items-center gap-2 text-xs font-medium text-white/75">
                <ShieldCheck className="h-4 w-4 text-brand-gold" />
                Contrato 100% digital
              </div>
            </div>
          </div>

          {/* Right: hero illustration */}
          <div className="relative hidden lg:block" data-anim="fade-left">
            <img
              src={heroIllo}
              alt="Documento de consignado aprovado, moedas e carteira douradas"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="mx-auto h-auto w-full max-w-lg drop-shadow-[0_10px_40px_rgba(218,165,32,0.25)]"
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="beneficios" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
            Por que escolher
          </span>
          <h2 className="mt-3 text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Vantagens do <span className="text-brand-gold">consignado Credifácil</span>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-foreground/75">
            A modalidade de crédito mais segura e barata do mercado, agora 100% digital e
            descomplicada.
          </p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group rounded-3xl border border-brand-gold/15 bg-white p-6 shadow-[0_10px_30px_-15px_hsl(30_30%_4%/0.15)] transition-all hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-[0_20px_40px_-15px_hsl(30_30%_4%/0.25)]"
            >
              <div
                className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-white"
                style={{ background: "var(--gradient-gold)" }}
              >
                <b.icon className="h-6 w-6" strokeWidth={2} />
              </div>
              <h3 className="text-base font-bold text-foreground">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/75">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-12 grid gap-4 rounded-3xl border border-brand-gold/15 bg-white p-6 shadow-[var(--shadow-card)] md:grid-cols-4 md:p-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="bg-clip-text text-3xl font-bold text-transparent md:text-4xl"
                style={{ backgroundImage: "var(--gradient-gold)" }}
              >
                {s.value}
              </div>
              <div className="mt-2 text-xs font-medium text-foreground/72">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Image + Modalities split */}
      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8 md:pb-28">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[32px] shadow-[var(--shadow-card)]">
            <img
              src={seniorImg}
              alt="Aposentada brasileira sorridente usando o app Credifácil"
              className="h-[520px] w-full object-cover"
              width={1024}
              height={1024}
              loading="lazy"
            />
            <div
              className="absolute inset-x-0 bottom-0 p-6"
              style={{
                background: "linear-gradient(180deg, transparent, hsl(220 16% 5% / 0.95))",
              }}
            >
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                <Quote className="h-5 w-5 text-brand-gold" />
                <p className="mt-2 text-sm leading-relaxed text-white">
                  "Em 3 horas o dinheiro estava na minha conta. Mudou minha vida!"
                </p>
                <div className="mt-3 text-xs font-semibold text-white/85">
                  — Maria Helena, 67 anos
                </div>
              </div>
            </div>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
              Mais possibilidades
            </span>
            <h2 className="mt-3 text-4xl font-bold leading-tight text-foreground md:text-5xl">
              Soluções <span className="text-brand-gold">extras para você</span>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-foreground/75">
              Além do consignado tradicional, oferecemos opções para quem quer renegociar,
              portar ou contratar mais.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {benefitsExtra.map((b) => (
                <div
                  key={b.title}
                  className="flex items-start gap-3 rounded-2xl border border-brand-gold/15 bg-white p-4 transition-all hover:border-brand-gold/40"
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white"
                    style={{ background: "var(--gradient-gold)" }}
                  >
                    <b.icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">{b.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-foreground/72">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Audiences */}
      <section className="bg-[hsl(220_16%_6%)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
              Para quem é
            </span>
            <h2 className="mt-3 text-4xl font-bold leading-tight text-white md:text-5xl">
              O consignado é <span className="text-brand-gold">para você?</span>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/80">
              Atendemos as principais categorias com convênios em todo o Brasil.
            </p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {audiences.map((a) => (
              <div
                key={a.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-brand-gold/40 hover:bg-white/[0.06]"
              >
                {a.badge && (
                  <span className="absolute right-5 top-5 rounded-full bg-brand-gold/20 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-brand-gold">
                    {a.badge}
                  </span>
                )}
                <div className="flex items-start gap-5">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white"
                    style={{ background: "var(--gradient-gold)" }}
                  >
                    <a.icon className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{a.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/82">{a.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modalities table */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
            Modalidades e taxas
          </span>
          <h2 className="mt-3 text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Confira <span className="text-brand-gold">condições por categoria</span>
          </h2>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {modalities.map((m) => (
            <div
              key={m.title}
              className="group relative overflow-hidden rounded-3xl border border-brand-gold/15 bg-white p-7 shadow-[0_10px_30px_-15px_hsl(30_30%_4%/0.15)] transition-all hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-[0_20px_40px_-15px_hsl(30_30%_4%/0.25)]"
            >
              {m.badge && (
                <span
                  className="absolute right-5 top-5 rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  {m.badge}
                </span>
              )}
              <div className="flex items-start gap-4">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  <m.icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground">{m.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-foreground/75">{m.desc}</p>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3 border-t border-foreground/10 pt-5">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-foreground/50">
                    Taxa
                  </div>
                  <div className="mt-1 text-sm font-bold text-brand-gold">{m.rate}</div>
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-foreground/50">
                    Prazo
                  </div>
                  <div className="mt-1 text-sm font-bold text-foreground">{m.term}</div>
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-foreground/50">
                    Valor
                  </div>
                  <div className="mt-1 text-sm font-bold text-foreground">{m.value}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Banner */}
      <section className="relative h-[400px] w-full overflow-hidden md:h-[500px]">
        <img
          src={bannerImg}
          alt="Casal de aposentados aproveitando viagem após contratar consignado"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "center 30%" }}
          width={1920}
          height={1024}
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(95deg, hsl(220 16% 5% / 0.92) 0%, hsl(220 16% 5% / 0.6) 50%, transparent 100%)",
          }}
        />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-5 md:px-8">
          <div className="max-w-xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand-gold">
              Realize seus sonhos
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white md:text-5xl">
              O dinheiro que você precisa
              <br />
              para o que <span className="text-brand-gold">sempre quis fazer.</span>
            </h2>
            <p className="mt-5 max-w-md text-sm text-white/80 md:text-base">
              Viaje, reforme, quite dívidas ou ajude a família. Use seu consignado da forma que
              fizer mais sentido para você.
            </p>
            <a
              href={whatsappLink("Olá! Quero contratar o crédito consignado.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-3 rounded-2xl px-7 py-4 text-base font-bold text-brand-gold-foreground shadow-[var(--shadow-gold)] transition-all hover:scale-[1.03]"
              style={{ background: "var(--gradient-gold)" }}
            >
              Quero contratar agora
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
            Passo a passo
          </span>
          <h2 className="mt-3 text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Como contratar em <span className="text-brand-gold">4 passos</span>
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="relative">
              <div className="rounded-3xl border border-brand-gold/15 bg-white p-6 shadow-[0_10px_30px_-15px_hsl(30_30%_4%/0.15)]">
                <div className="flex items-center justify-between">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl text-white"
                    style={{ background: "var(--gradient-gold)" }}
                  >
                    <s.icon className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <span className="text-4xl font-bold text-brand-gold/20">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/75">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Documents needed */}
        <div className="mt-12 grid gap-8 rounded-3xl border border-brand-gold/15 bg-white p-8 shadow-[var(--shadow-card)] lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={servidorImg}
              alt="Militar brasileiro sorrindo após contratar consignado"
              className="h-[320px] w-full object-cover"
              width={1024}
              height={1024}
              loading="lazy"
              style={{ objectPosition: "center 25%" }}
            />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
              Documentos necessários
            </span>
            <h3 className="mt-3 text-2xl font-bold leading-tight text-foreground md:text-3xl">
              O que você precisa para contratar?
            </h3>
            <p className="mt-3 text-sm text-foreground/75">
              Tenha em mãos para acelerar sua aprovação. Tudo é enviado digitalmente, com
              segurança e sigilo.
            </p>
            <ul className="mt-6 space-y-3">
              {documents.map((d) => (
                <li key={d} className="flex items-center gap-3 text-sm text-foreground/80">
                  <span
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white"
                    style={{ background: "var(--gradient-gold)" }}
                  >
                    <CheckCircle2 className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-b from-transparent to-[hsl(220_14%_94%)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
              Quem já contratou
            </span>
            <h2 className="mt-3 text-4xl font-bold leading-tight text-foreground md:text-5xl">
              Histórias <span className="text-brand-gold">reais de quem confia</span>
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
                    <div className="text-xs text-foreground/70">{t.role}</div>
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
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 py-20 md:px-8 md:py-28">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
            Perguntas frequentes
          </span>
          <h2 className="mt-3 text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Tire suas <span className="text-brand-gold">dúvidas</span>
          </h2>
        </div>
        <div className="mt-12 space-y-4">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-brand-gold/15 bg-white p-5 shadow-[0_10px_30px_-15px_hsl(30_30%_4%/0.1)] transition-all open:border-brand-gold/40"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                    style={{ background: "var(--gradient-gold)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base font-bold text-foreground">{f.q}</h3>
                </div>
                <HelpCircle className="h-5 w-5 shrink-0 text-brand-gold transition-transform group-open:rotate-45" />
              </summary>
              <p className="mt-4 pl-11 text-sm leading-relaxed text-foreground/70">{f.a}</p>
            </details>
          ))}
        </div>

        {/* Need help */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-brand-gold/15 bg-white/60 p-5 backdrop-blur">
          <div className="flex items-center gap-3">
            <div
              className="flex h-11 w-11 items-center justify-center rounded-xl text-white"
              style={{ background: "var(--gradient-gold)" }}
            >
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-foreground">
                Ainda tem dúvidas?
              </div>
              <div className="text-xs text-foreground/72">
                Nossos especialistas estão prontos para te atender.
              </div>
            </div>
          </div>
          <a
            href={whatsappLink("Olá! Quero saber mais sobre o crédito consignado.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-brand-gold/40 bg-brand-gold/5 px-4 py-2.5 text-xs font-bold text-brand-gold transition-all hover:bg-brand-gold/10"
          >
            Falar no WhatsApp
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-5 pb-20 md:px-8 md:pb-28">
        <div
          className="relative overflow-hidden rounded-[32px] p-10 text-center md:p-16"
          style={{ background: "var(--gradient-gold)" }}
        >
          <div className="relative">
            <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
              Fale com a gente e descubra
              <br />o quanto você pode receber.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] text-white/90">
              Sem compromisso, sem burocracia e sem afetar o seu score.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={whatsappLink("Olá! Quero contratar o crédito consignado.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-[hsl(220_16%_5%)] px-7 py-4 text-base font-bold text-white transition-all hover:scale-[1.03]"
              >
                <Wallet className="h-5 w-5" />
                Quero meu consignado
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href={whatsappLink("Olá! Quero falar com um especialista em consignado.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur-md transition-all hover:bg-white/20"
              >
                Falar com especialista
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-foreground/10 bg-white/40 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 md:flex-row md:px-8">
          <p className="text-xs text-foreground/70">
            © {new Date().getFullYear()} Credifácil — Empréstimo Consignado. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-5 text-xs font-medium text-foreground/75">
            <Link to="/" className="hover:text-brand-gold">Início</Link>
            <Link to="/securitizadora" className="hover:text-brand-gold">Securitizadora</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Consignado;