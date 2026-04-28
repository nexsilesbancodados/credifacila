import { useEffect, Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  Headphones,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import logo from "@/assets/credifacil-logo.png";
import SimulatorCard from "@/components/SimulatorCard";
import heroImg from "@/assets/simulator-hero.jpg";

const trust = [
  {
    icon: ShieldCheck,
    title: "100% seguro",
    desc: "Criptografia bancária e dados protegidos.",
  },
  {
    icon: Clock,
    title: "Aprovação em minutos",
    desc: "Resposta rápida e dinheiro no mesmo dia.",
  },
  {
    icon: Headphones,
    title: "Atendimento humano",
    desc: "Especialistas reais te acompanham do início ao fim.",
  },
];

const steps = [
  "Escolha o valor que você precisa",
  "Defina em quantas parcelas pagar",
  "Veja sua parcela estimada na hora",
  "Solicite e receba o dinheiro hoje",
];

const Simular = () => {
  useEffect(() => {
    document.title = "Simulador de Empréstimo | Credifácil";
    const meta = document.querySelector('meta[name="description"]');
    const desc =
      "Simule seu empréstimo na Credifácil em 30 segundos. Até R$ 50.000 em até 60x, com taxas a partir de 1,49% a.m. e aprovação em minutos.";
    if (meta) meta.setAttribute("content", desc);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = desc;
      document.head.appendChild(m);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[hsl(40_30%_98%)]">
      {/* Top bar */}
      <header className="absolute top-0 z-50 w-full bg-transparent">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 md:px-8">
          <Link to="/" className="flex items-center gap-3" aria-label="Voltar para a página inicial">
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

      {/* Hero Section */}
      <section className="relative h-[480px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Escritório moderno"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(30_18%_6%/0.95)] via-[hsl(30_18%_6%/0.8)] to-transparent" />
        <div className="relative mx-auto flex h-full max-w-7xl items-center px-5 md:px-8">
          <div className="max-w-2xl pt-16" data-anim="fade-right">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-gold/20 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-brand-gold backdrop-blur-md">
              <Sparkles className="h-4 w-4" />
              Simulador de Crédito
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-[58px]">
              O crédito que você precisa,
              <br />
              <span className="text-brand-gold">com a agilidade que você merece.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-white/80">
              Descubra em segundos as melhores condições para o seu empréstimo pessoal, sem compromisso e sem burocracia.
            </p>
          </div>
        </div>
      </section>

      <main className="mx-auto -mt-20 max-w-6xl px-5 pb-16 md:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.1fr_1fr]">
          {/* Left: copy + steps */}
          <div className="flex flex-col">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-brand-gold">
              <Sparkles className="h-3.5 w-3.5" />
              Simulador oficial Credifácil
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-[52px]">
              Simule seu empréstimo
              <br />
              em <span className="text-brand-gold">30 segundos</span>.
            </h1>

            <p className="mt-5 max-w-md text-base leading-relaxed text-foreground/70 md:text-lg">
              Sem fila, sem papelada e sem surpresas. Descubra agora a parcela que cabe no seu bolso.
            </p>

            <ol className="mt-8 space-y-3">
              {steps.map((s, i) => (
                <li key={s} className="flex items-start gap-3">
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[12px] font-bold text-brand-gold-foreground shadow-[var(--shadow-gold)]"
                    style={{ background: "var(--gradient-gold)" }}
                  >
                    {i + 1}
                  </span>
                  <span className="pt-0.5 text-sm font-medium text-foreground/85">{s}</span>
                </li>
              ))}
            </ol>

            <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {trust.map((t) => (
                <li
                  key={t.title}
                  className="rounded-2xl border border-foreground/8 bg-white/70 p-4 backdrop-blur-sm"
                >
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-xl text-brand-gold-foreground shadow-[var(--shadow-gold)]"
                    style={{ background: "var(--gradient-gold)" }}
                  >
                    <t.icon className="h-[16px] w-[16px]" strokeWidth={2.2} />
                  </span>
                  <div className="mt-3 text-[13px] font-bold text-foreground">{t.title}</div>
                  <div className="mt-1 text-[11px] leading-relaxed text-foreground/60">
                    {t.desc}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3 rounded-2xl border border-brand-gold/20 bg-white/70 px-5 py-4 backdrop-blur-sm">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-700">
                <MessageCircle className="h-4 w-4" />
              </span>
              <div className="text-sm">
                <div className="font-semibold text-foreground">Prefere falar com alguém?</div>
                <div className="text-foreground/60">Nossa equipe responde em poucos minutos.</div>
              </div>
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noreferrer noopener"
                className="ml-auto inline-flex items-center gap-2 rounded-full border border-brand-gold/40 px-4 py-2 text-xs font-semibold text-brand-gold transition-colors hover:bg-brand-gold/10"
              >
                Falar no WhatsApp
              </a>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 text-[12px] font-medium text-foreground/60">
              <CheckCircle2 className="h-4 w-4 text-brand-gold" />
              Mais de 50 mil clientes já realizaram seus sonhos com a Credifácil.
            </div>
          </div>

          {/* Right: simulator */}
          <div className="lg:sticky lg:top-8">
            <SimulatorCard variant="page" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Simular;