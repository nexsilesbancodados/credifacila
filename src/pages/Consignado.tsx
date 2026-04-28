import { useEffect } from "react";
import { Link } from "react-router-dom";
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
} from "lucide-react";
import logo from "@/assets/credifacil-logo.png";
import heroImg from "@/assets/hero-consignado.jpg";

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

const Consignado = () => {
  useEffect(() => {
    document.title = "Empréstimo Consignado | Credifácil — Menores taxas";
    const meta = document.querySelector('meta[name="description"]');
    const desc =
      "Empréstimo consignado para aposentados, pensionistas, servidores públicos e CLT. Taxas a partir de 1,49% a.m., até 96x e dinheiro na conta no mesmo dia.";
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
          alt="Casal de aposentados sorrindo após contratar empréstimo consignado"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "60% center" }}
          width={1920}
          height={1080}
          fetchPriority="high"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(95deg, hsl(30 22% 5% / 0.95) 0%, hsl(30 22% 5% / 0.78) 35%, hsl(30 22% 5% / 0.4) 65%, transparent 100%)",
          }}
        />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-5 md:px-8">
          <div className="max-w-2xl pt-20">
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-brand-gold/40 bg-brand-gold/[0.08] px-3.5 py-1.5 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-brand-gold" strokeWidth={2.4} />
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-brand-gold">
                Empréstimo Consignado
              </span>
            </div>
            <h1
              className="text-[42px] font-bold leading-[1.02] tracking-tight text-white md:text-[64px] lg:text-[72px]"
              style={{ textShadow: "0 2px 24px hsl(30 30% 4% / 0.45)" }}
            >
              Crédito consignado
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-gold)" }}
              >
                com as menores
                <br />
                taxas do Brasil.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-[17px]">
              Para aposentados, pensionistas do INSS, servidores públicos e militares —
              parcelas a partir de{" "}
              <span className="font-semibold text-white">1,49% a.m.</span> em até{" "}
              <span className="font-semibold text-white">96 meses</span>.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/simular"
                className="group inline-flex items-center gap-3 rounded-2xl px-7 py-4 text-base font-bold text-brand-gold-foreground shadow-[var(--shadow-gold)] transition-all hover:scale-[1.03] hover:brightness-110"
                style={{ background: "var(--gradient-gold)" }}
              >
                <Wallet className="h-5 w-5" strokeWidth={2.4} />
                Simular meu consignado
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="#beneficios"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/[0.06] px-5 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-brand-gold/60 hover:bg-white/10 hover:text-brand-gold"
              >
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
          <p className="mt-4 text-[15px] leading-relaxed text-foreground/65">
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
              <p className="mt-2 text-sm leading-relaxed text-foreground/65">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Audiences */}
      <section className="bg-[hsl(30_18%_6%)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
              Para quem é
            </span>
            <h2 className="mt-3 text-4xl font-bold leading-tight text-white md:text-5xl">
              O consignado é <span className="text-brand-gold">para você?</span>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/65">
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
                    <p className="mt-2 text-sm leading-relaxed text-white/70">{a.desc}</p>
                  </div>
                </div>
              </div>
            ))}
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
                <p className="mt-2 text-sm leading-relaxed text-foreground/65">{s.desc}</p>
              </div>
            </div>
          ))}
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
              Simule agora e descubra
              <br />o quanto você pode receber.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] text-white/90">
              Sem compromisso, sem burocracia e sem afetar o seu score.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/simular"
                className="inline-flex items-center gap-2 rounded-2xl bg-[hsl(30_22%_5%)] px-7 py-4 text-base font-bold text-white transition-all hover:scale-[1.03]"
              >
                <Wallet className="h-5 w-5" />
                Simular meu consignado
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="#whatsapp"
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
          <p className="text-xs text-foreground/55">
            © {new Date().getFullYear()} Credifácil — Empréstimo Consignado. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-5 text-xs font-medium text-foreground/65">
            <Link to="/" className="hover:text-brand-gold">Início</Link>
            <Link to="/securitizadora" className="hover:text-brand-gold">Securitizadora</Link>
            <Link to="/simular" className="hover:text-brand-gold">Simular</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Consignado;