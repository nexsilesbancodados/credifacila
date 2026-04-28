import { useEffect } from "react";
import { Link } from "react-router-dom";
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
} from "lucide-react";
import logo from "@/assets/credifacil-logo.png";
import heroImg from "@/assets/hero-securitizadora.jpg";

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

const Securitizadora = () => {
  useEffect(() => {
    document.title = "Securitizadora | Credifácil — Soluções para empresas";
    const meta = document.querySelector('meta[name="description"]');
    const desc =
      "Conheça nossa securitizadora: 30 anos de experiência, +100 agências e R$ 2 bilhões movimentados por mês em soluções financeiras para empresas brasileiras.";
    if (meta) meta.setAttribute("content", desc);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = desc;
      document.head.appendChild(m);
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

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
      <section className="relative h-[680px] w-full overflow-hidden md:h-[760px]">
        <img
          src={heroImg}
          alt="Edifício corporativo moderno representando solidez da securitizadora"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
          fetchPriority="high"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(95deg, hsl(30 22% 5% / 0.95) 0%, hsl(30 22% 5% / 0.78) 35%, hsl(30 22% 5% / 0.45) 65%, transparent 100%)",
          }}
        />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-5 md:px-8">
          <div className="max-w-2xl pt-20">
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-brand-gold/40 bg-brand-gold/[0.08] px-3.5 py-1.5 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-brand-gold" strokeWidth={2.4} />
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-brand-gold">
                Securitizadora Credifácil
              </span>
            </div>
            <h1
              className="text-[42px] font-bold leading-[1.02] tracking-tight text-white md:text-[64px] lg:text-[72px]"
              style={{ textShadow: "0 2px 24px hsl(30 30% 4% / 0.45)" }}
            >
              Mais de 30 anos
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-gold)" }}
              >
                impulsionando o
                <br />
                Brasil que produz.
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
              <a
                href="#contato"
                className="group inline-flex items-center gap-3 rounded-2xl px-7 py-4 text-base font-bold text-brand-gold-foreground shadow-[var(--shadow-gold)] transition-all hover:scale-[1.03] hover:brightness-110"
                style={{ background: "var(--gradient-gold)" }}
              >
                <Briefcase className="h-5 w-5" strokeWidth={2.4} />
                Falar com especialista
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#solucoes"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/[0.06] px-5 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-brand-gold/60 hover:bg-white/10 hover:text-brand-gold"
              >
                Conhecer soluções
              </a>
            </div>
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
                href="#whatsapp"
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