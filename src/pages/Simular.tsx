import { useEffect } from "react";
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
    <div className="min-h-screen bg-[hsl(40_30%_97%)]">
      {/* Top bar */}
      <header className="w-full bg-[hsl(30_18%_6%)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <Link to="/" className="flex items-center gap-3 text-white" aria-label="Voltar para a página inicial">
            <img
              src={logo}
              alt="Credifácil"
              className="h-9 w-auto md:h-10"
              width={1795}
              height={605}
            />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white/85 transition-colors hover:border-brand-gold/60 hover:text-brand-gold"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Voltar ao início
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-16">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.05fr_1fr]">
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