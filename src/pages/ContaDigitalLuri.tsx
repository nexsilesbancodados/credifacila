import { useEffect, useState } from "react";
import {
  ArrowRight,
  Smartphone,
  CreditCard,
  Users,
  Wallet,
  CheckCircle2,
  ArrowDownLeft,
  ArrowUpRight,
  Zap,
  ShieldCheck,
  FileSpreadsheet,
  KeyRound,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import heroImg from "@/assets/luri-hero.png";

const features = [
  {
    id: "pagamentos",
    icon: FileSpreadsheet,
    label: "Pagamentos em lote",
    title: "PIX e boletos em massa, direto da planilha",
    desc: "Pague salários, fornecedores e boletos importando uma planilha de Excel. Cobre clientes emitindo BolePix via API.",
    bullets: ["PIX em lote", "Boletos em lote", "Transferências programadas", "BolePix via API"],
  },
  {
    id: "acessos",
    icon: KeyRound,
    label: "Acessos por usuário",
    title: "Cada funcionário com sua alçada",
    desc: "Crie usuários que apenas consultam ou que lançam transações. O empresário só aprova — controle total sem perder agilidade.",
    bullets: ["Perfis personalizados", "Aprovação em dois passos", "Auditoria completa", "Limites por usuário"],
  },
  {
    id: "cartao",
    icon: CreditCard,
    label: "Cartão Luri",
    title: "Cartão empresarial integrado à conta",
    desc: "Cartão físico e virtual para a empresa, com gestão de despesas, limites por colaborador e extrato em tempo real.",
    bullets: ["Físico e virtual", "Limites por colaborador", "Categorização automática", "Bloqueio em um toque"],
  },
  {
    id: "credito",
    icon: Wallet,
    label: "Crédito sob medida",
    title: "Crédito que cresce com sua empresa",
    desc: "Antecipação de recebíveis, crédito com garantia e Conta Escrow — soluções desenhadas para o ritmo do seu negócio.",
    bullets: ["Antecipação de recebíveis", "Crédito com garantia", "Conta Escrow", "Boleto Garantido"],
  },
];

/** Fake live PIX transactions cascading into the phone mockup */
const txns = [
  { type: "in", who: "João S.", amount: "+ R$ 1.240,00", time: "agora" },
  { type: "out", who: "Fornecedor RX", amount: "- R$ 3.890,00", time: "há 2 min" },
  { type: "in", who: "Maria F.", amount: "+ R$ 540,00", time: "há 5 min" },
  { type: "in", who: "Loja XPTO", amount: "+ R$ 12.300,00", time: "há 12 min" },
];

const ContaDigitalLuri = () => {
  const [active, setActive] = useState(features[0].id);
  const current = features.find((f) => f.id === active) ?? features[0];

  // auto-rotate features every 5s
  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((cur) => {
        const idx = features.findIndex((f) => f.id === cur);
        return features[(idx + 1) % features.length].id;
      });
    }, 5000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative w-full">
        <div className="relative aspect-[16/9] sm:aspect-[21/9] lg:aspect-[21/8] w-full">
          <img
            src={heroImg}
            alt="Conta Digital Luri — sua vida financeira mais simples e digital"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 md:h-32 bg-gradient-to-t from-background to-transparent" />
        </div>
      </section>

      {/* INTRO + PHONE MOCKUP */}
      <section className="relative py-24 md:py-32">
        <div className="container-x">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <span className="pill-gold">Conta Digital Luri</span>
              <h2 className="mt-6 font-display text-4xl font-bold leading-[0.95] tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Um banco digital{" "}
                <span className="text-gold-gradient">feito para empresas</span>
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-foreground/70">
                Abra sua conta em minutos, faça PIX, gerencie cartões, pague em
                lote e tenha crédito sob medida — tudo na palma da mão, sem
                fila e sem papelada.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { Icon: Zap, label: "PIX 24h" },
                  { Icon: CreditCard, label: "Cartão grátis" },
                  { Icon: ShieldCheck, label: "Conta segura" },
                  { Icon: Sparkles, label: "100% digital" },
                ].map(({ Icon, label }, i) => (
                  <Reveal key={label} delay={i * 100}>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-center backdrop-blur-md transition hover:border-[hsl(var(--gold))/0.45]">
                      <Icon className="mx-auto h-5 w-5 text-[hsl(var(--gold-soft))]" />
                      <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground/75">
                        {label}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="/contato"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-soft))] px-6 py-3 text-sm font-bold uppercase tracking-[0.15em] text-[#0a1428] shadow-[0_15px_40px_-10px_hsl(var(--gold)/0.6)] transition hover:scale-[1.02]"
                >
                  Abrir minha conta
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="https://luri.com.vc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-foreground/85 backdrop-blur-md transition hover:border-[hsl(var(--gold))/0.45] hover:text-foreground"
                >
                  Conhecer o Luri
                </a>
              </div>
            </Reveal>

            {/* Phone mockup */}
            <div className="relative mx-auto w-full max-w-[360px]">
              <div className="absolute -inset-10 rounded-full bg-[hsl(var(--gold))/0.18] blur-3xl" />
              <PhoneMockup />
            </div>
          </div>
        </div>
      </section>

      {/* TUDO QUE VOCÊ FAZ — interactive feature switcher */}
      <section className="relative border-y border-white/5 bg-[#080f1f] py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <div className="max-w-2xl">
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-[hsl(var(--gold))]" />
                <span className="text-xs font-semibold uppercase tracking-[0.32em] text-[hsl(var(--gold-soft))]">
                  Tudo em um lugar
                </span>
              </div>
              <h2 className="mt-6 font-display text-4xl font-bold leading-[0.95] tracking-tight text-foreground md:text-5xl">
                Mais do que conta —{" "}
                <span className="text-gold-gradient">um sistema financeiro</span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Tabs vertical */}
            <div className="lg:col-span-4">
              <div className="flex flex-col gap-2">
                {features.map((f, i) => {
                  const isActive = f.id === active;
                  const Icon = f.icon;
                  return (
                    <button
                      key={f.id}
                      onClick={() => setActive(f.id)}
                      className={`group relative overflow-hidden rounded-2xl border px-5 py-4 text-left transition-all duration-500 ${
                        isActive
                          ? "border-[hsl(var(--gold))/0.55] bg-gradient-to-br from-[#0d1a36] to-[#0a1428]"
                          : "border-white/10 bg-white/[0.02] hover:border-white/20"
                      }`}
                    >
                      {/* progress bar when active */}
                      {isActive && (
                        <span
                          key={`p-${f.id}`}
                          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-soft))]"
                          style={{ animation: "luriProgress 5s linear forwards" }}
                        />
                      )}
                      <div className="flex items-center gap-4">
                        <span
                          className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition ${
                            isActive
                              ? "border-[hsl(var(--gold))/0.55] bg-gradient-to-br from-[hsl(var(--gold))] to-[hsl(var(--gold-soft))] text-[#0a1428]"
                              : "border-white/15 bg-background/40 text-foreground/70"
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground/55">
                            0{i + 1}
                          </p>
                          <p className="font-display text-base font-bold text-foreground md:text-lg">
                            {f.label}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active panel */}
            <div className="lg:col-span-8">
              <div
                key={current.id}
                className="relative h-full animate-fade-in overflow-hidden rounded-3xl border border-[hsl(var(--gold))/0.35] bg-gradient-to-br from-[#0a1428] via-[#0d1a36] to-[#0a1428] p-8 md:p-12"
              >
                <div className="pointer-events-none absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full bg-[hsl(var(--gold))/0.18] blur-3xl" />
                <div className="relative">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[hsl(var(--gold))] to-[hsl(var(--gold-soft))] text-[#0a1428]">
                    <current.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-bold leading-tight text-foreground md:text-4xl">
                    {current.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground/70 md:text-lg">
                    {current.desc}
                  </p>
                  <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                    {current.bullets.map((b, i) => (
                      <li
                        key={b}
                        style={{ animationDelay: `${i * 80}ms` }}
                        className="flex animate-fade-in items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-md"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-[hsl(var(--gold-soft))]" />
                        <span className="text-sm font-medium text-foreground/85">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CARTÃO LURI — 3D tilt card showcase */}
      <section className="relative py-24 md:py-32">
        <div className="container-x">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
            <Reveal className="order-2 lg:order-1">
              <div className="flex justify-center [perspective:1500px]">
                <LuriCard />
              </div>
            </Reveal>
            <Reveal delay={150} className="order-1 lg:order-2">
              <span className="pill-gold">Cartão Luri</span>
              <h2 className="mt-6 font-display text-4xl font-bold leading-[0.95] tracking-tight text-foreground md:text-5xl">
                Cartão empresarial{" "}
                <span className="text-gold-gradient">sem anuidade</span>
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/70 md:text-lg">
                Físico e virtual, com limites individuais por colaborador,
                categorização automática de despesas e bloqueio em um toque.
                Tudo direto no seu painel da conta Luri.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Sem anuidade ou taxa de manutenção",
                  "Cartões virtuais ilimitados para sua equipe",
                  "Limites e controles por colaborador",
                  "Notificações em tempo real",
                ].map((t, i) => (
                  <Reveal key={t} delay={i * 100}>
                    <li className="flex items-start gap-3 text-foreground/80">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[hsl(var(--gold-soft))]" />
                      <span>{t}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ABERTURA DA CONTA — radial steps */}
      <section className="relative border-y border-white/5 bg-[#080f1f] py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="pill-gold">Abertura de conta</span>
              <h2 className="mt-6 font-display text-4xl font-bold leading-[0.95] tracking-tight text-foreground md:text-5xl">
                Sua conta digital em{" "}
                <span className="text-gold-gradient">minutos</span>
              </h2>
              <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-foreground/70">
                Sem fila de banco, sem ir até a agência, sem papelada. Faça tudo
                pelo celular.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-5 md:grid-cols-4">
            {[
              { n: "01", title: "Baixe o app", desc: "Disponível para Android e iOS." },
              { n: "02", title: "Cadastre-se", desc: "CNPJ, dados do sócio e foto do documento." },
              { n: "03", title: "Análise rápida", desc: "Validação automática em poucos minutos." },
              { n: "04", title: "Conta ativa", desc: "Pronto: PIX, cartão e tudo liberado." },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 120}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-[hsl(var(--gold))/0.45]">
                  <span className="font-display text-5xl font-bold text-gold-gradient md:text-6xl">
                    {s.n}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-foreground md:text-xl">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/65">{s.desc}</p>
                  {/* connector arrow */}
                  {i < 3 && (
                    <span className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 text-[hsl(var(--gold))/0.4] md:inline-flex">
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-[hsl(var(--gold))/0.35] bg-gradient-to-br from-[#0a1428] via-[#0d1a36] to-[#0a1428] p-10 text-center md:p-20">
              <div className="pointer-events-none absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-[hsl(var(--gold))/0.2] blur-3xl" />
              <div className="pointer-events-none absolute -right-32 -bottom-32 h-[500px] w-[500px] rounded-full bg-[hsl(var(--gold))/0.15] blur-3xl" />
              <div className="relative">
                <span className="pill-gold">Comece agora</span>
                <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
                  Sua empresa merece um banco{" "}
                  <span className="text-gold-gradient">de verdade</span>
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-foreground/70 md:text-lg">
                  Abra sua Conta Digital Luri agora e tenha tudo que sua empresa
                  precisa em um único lugar.
                </p>
                <a
                  href="/contato"
                  className="group mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-soft))] px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-[#0a1428] shadow-[0_20px_50px_-10px_hsl(var(--gold)/0.7)] transition hover:scale-[1.03]"
                >
                  <Smartphone className="h-4 w-4" />
                  Abrir conta grátis
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes luriProgress {
          from { width: 0%; }
          to { width: 100%; }
        }
        @keyframes luriSlideUp {
          0% { opacity: 0; transform: translateY(16px) scale(0.96); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes luriFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(0.5deg); }
        }
        @keyframes luriCardFloat {
          0%, 100% { transform: rotateY(-18deg) rotateX(8deg) translateY(0); }
          50% { transform: rotateY(-14deg) rotateX(6deg) translateY(-10px); }
        }
      `}</style>
    </main>
  );
};

/* -------- Phone mockup with cascading transactions -------- */

const PhoneMockup = () => (
  <div
    className="relative mx-auto"
    style={{ animation: "luriFloat 6s ease-in-out infinite" }}
  >
    {/* phone frame */}
    <div className="relative aspect-[9/19] w-full overflow-hidden rounded-[44px] border-[10px] border-[#0a1428] bg-gradient-to-br from-[#0d1a36] to-[#0a1428] shadow-[0_50px_120px_-30px_rgba(0,0,0,0.7)]">
      {/* notch */}
      <div className="absolute left-1/2 top-0 z-20 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-[#0a1428]" />

      {/* screen content */}
      <div className="relative h-full w-full bg-gradient-to-b from-[#10204a] via-[#0d1a36] to-[#0a1428] p-4 pt-10">
        {/* header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/55">
              Saldo disponível
            </p>
            <p className="font-display text-2xl font-bold text-foreground">
              R$ 48.230,<span className="text-foreground/55">90</span>
            </p>
          </div>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[hsl(var(--gold))] to-[hsl(var(--gold-soft))] text-[#0a1428]">
            <Users className="h-4 w-4" />
          </span>
        </div>

        {/* quick actions */}
        <div className="mt-5 grid grid-cols-4 gap-2">
          {[
            { Icon: Zap, l: "PIX" },
            { Icon: ArrowUpRight, l: "Enviar" },
            { Icon: ArrowDownLeft, l: "Receber" },
            { Icon: CreditCard, l: "Cartão" },
          ].map(({ Icon, l }) => (
            <div key={l} className="rounded-xl border border-white/10 bg-white/[0.04] p-2 text-center">
              <Icon className="mx-auto h-4 w-4 text-[hsl(var(--gold-soft))]" />
              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-foreground/70">
                {l}
              </p>
            </div>
          ))}
        </div>

        {/* transactions */}
        <div className="mt-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground/55">
            Movimentação
          </p>
          <ul className="mt-3 space-y-2">
            {txns.map((t, i) => (
              <li
                key={i}
                style={{
                  animation: `luriSlideUp 0.5s ease-out ${i * 200}ms both`,
                }}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-2.5"
              >
                <span
                  className={`inline-flex h-8 w-8 items-center justify-center rounded-full ${
                    t.type === "in"
                      ? "bg-emerald-500/15 text-emerald-400"
                      : "bg-rose-500/15 text-rose-400"
                  }`}
                >
                  {t.type === "in" ? (
                    <ArrowDownLeft className="h-3.5 w-3.5" />
                  ) : (
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  )}
                </span>
                <div className="flex-1 overflow-hidden">
                  <p className="truncate text-xs font-semibold text-foreground/90">{t.who}</p>
                  <p className="text-[10px] text-foreground/55">PIX · {t.time}</p>
                </div>
                <span
                  className={`text-xs font-bold ${
                    t.type === "in" ? "text-emerald-400" : "text-rose-400"
                  }`}
                >
                  {t.amount}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    {/* PIX notification bubble */}
    <div
      className="absolute -right-6 top-24 z-30 hidden items-center gap-2 rounded-2xl border border-[hsl(var(--gold))/0.5] bg-[#0a1428]/90 px-3 py-2 backdrop-blur-md sm:flex"
      style={{ animation: "luriSlideUp 0.6s ease-out 800ms both" }}
    >
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-[hsl(var(--gold))] to-[hsl(var(--gold-soft))] text-[#0a1428]">
        <Zap className="h-4 w-4" />
      </span>
      <div>
        <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-foreground/60">
          PIX recebido
        </p>
        <p className="text-xs font-bold text-emerald-400">+ R$ 540,00</p>
      </div>
    </div>
  </div>
);

/* -------- 3D floating Luri card -------- */

const LuriCard = () => (
  <div
    className="relative w-full max-w-[420px] [transform-style:preserve-3d]"
    style={{ animation: "luriCardFloat 7s ease-in-out infinite" }}
  >
    {/* glow */}
    <div className="absolute -inset-8 rounded-[2.5rem] bg-[hsl(var(--gold))/0.25] blur-3xl" />

    {/* back card (faded) */}
    <div
      className="absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-br from-[#10204a] to-[#0a1428] opacity-50"
      style={{ transform: "translate3d(-32px,32px,-40px)" }}
    />

    {/* main card */}
    <div className="relative aspect-[1.586] w-full overflow-hidden rounded-3xl border border-[hsl(var(--gold))/0.5] bg-gradient-to-br from-[#0d1a36] via-[#10204a] to-[#0a1428] p-6 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.7)]">
      {/* shine */}
      <div className="pointer-events-none absolute -left-1/3 top-0 h-full w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* gold corner */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[hsl(var(--gold))/0.25] blur-2xl" />

      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55">
              Conta digital
            </p>
            <p className="mt-1 font-display text-2xl font-bold text-gold-gradient">
              Luri
            </p>
          </div>
          {/* chip */}
          <div className="h-10 w-12 rounded-md bg-gradient-to-br from-[hsl(var(--gold))] to-[#a07e2c]">
            <div className="m-1 grid h-8 w-10 grid-cols-3 grid-rows-3 gap-px opacity-60">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="bg-[#0a1428]/40" />
              ))}
            </div>
          </div>
        </div>

        <div>
          <p className="font-mono text-base font-bold tracking-[0.2em] text-foreground/85 md:text-lg">
            •••• •••• •••• 8421
          </p>
          <div className="mt-3 flex items-end justify-between">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-foreground/50">
                Titular
              </p>
              <p className="mt-0.5 text-xs font-semibold uppercase tracking-[0.12em] text-foreground/85">
                Sua Empresa LTDA
              </p>
            </div>
            <p className="font-display text-base font-bold uppercase tracking-[0.18em] text-foreground/85">
              VISA
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContaDigitalLuri;