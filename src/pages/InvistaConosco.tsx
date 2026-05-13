import { useEffect, useRef, useState } from "react";
import {
  TrendingUp,
  Shield,
  Target,
  Sparkles,
  ArrowRight,
  Compass,
  LineChart,
  Coins,
  Building2,
  Leaf,
  ChevronDown,
  Phone,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import heroImg from "@/assets/invista-hero.png";

/* -------------------------------------------------------------------------- */
/*  Animated SVG line chart (drawn on mount)                                  */
/* -------------------------------------------------------------------------- */
const ChartLine = () => {
  const path =
    "M0,160 C40,140 70,150 100,120 C140,80 170,110 210,90 C250,70 280,40 320,55 C360,70 390,30 430,20 C470,12 500,40 540,30";
  return (
    <svg viewBox="0 0 540 200" className="w-full h-full">
      <defs>
        <linearGradient id="chartGold" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#b8893f" />
          <stop offset="50%" stopColor="#f0d78c" />
          <stop offset="100%" stopColor="#b8893f" />
        </linearGradient>
        <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f0d78c" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#f0d78c" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* grid */}
      {[40, 80, 120, 160].map((y) => (
        <line key={y} x1="0" y1={y} x2="540" y2={y} stroke="rgba(240,215,140,0.08)" strokeDasharray="3 5" />
      ))}
      {/* fill */}
      <path d={`${path} L540,200 L0,200 Z`} fill="url(#chartFill)" className="invista-fill" />
      {/* line */}
      <path
        d={path}
        fill="none"
        stroke="url(#chartGold)"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="invista-line"
      />
      {/* dots */}
      {[
        [100, 120],
        [210, 90],
        [320, 55],
        [430, 20],
        [540, 30],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill="#f0d78c" className="invista-dot" style={{ animationDelay: `${1200 + i * 180}ms` }} />
      ))}
    </svg>
  );
};

/* -------------------------------------------------------------------------- */
/*  Investment categories                                                     */
/* -------------------------------------------------------------------------- */
const products = [
  {
    icon: Shield,
    name: "Renda Fixa",
    tagline: "Previsibilidade e segurança",
    desc: "CDBs, LCIs, LCAs e Tesouro Direto selecionados para quem busca tranquilidade com bons rendimentos.",
    perks: ["Garantia FGC", "Liquidez programada", "Rentabilidade indexada"],
  },
  {
    icon: LineChart,
    name: "Renda Variável",
    tagline: "Crescimento de longo prazo",
    desc: "Ações, ETFs e BDRs com curadoria da nossa mesa para diversificar com inteligência.",
    perks: ["Mesa de operações", "Análises semanais", "Carteiras temáticas"],
  },
  {
    icon: Building2,
    name: "Fundos Imobiliários",
    tagline: "Renda mensal isenta",
    desc: "Participe do mercado imobiliário com tickets acessíveis e dividendos recorrentes.",
    perks: ["Renda mensal", "Isenção de IR", "Diversificação setorial"],
  },
  {
    icon: Coins,
    name: "Fundos Multimercado",
    tagline: "Gestão profissional",
    desc: "Estratégias sofisticadas conduzidas por gestores que combinam diferentes classes de ativos.",
    perks: ["Gestão ativa", "Alocação global", "Hedge cambial"],
  },
  {
    icon: Leaf,
    name: "Previdência Privada",
    tagline: "Futuro com benefícios fiscais",
    desc: "PGBL e VGBL com planejamento sucessório e vantagens tributárias para o longo prazo.",
    perks: ["Benefício fiscal", "Sucessão simplificada", "Portabilidade livre"],
  },
  {
    icon: Target,
    name: "Carteiras Sob Medida",
    tagline: "Estratégia personalizada",
    desc: "Para investidores qualificados: alocação desenhada com base em perfil, objetivos e horizonte.",
    perks: ["Assessoria dedicada", "Rebalanceamento ativo", "Relatórios mensais"],
  },
];

/* -------------------------------------------------------------------------- */
/*  Investor profile pillars                                                  */
/* -------------------------------------------------------------------------- */
const pillars = [
  {
    icon: Compass,
    title: "Descobrimos seu perfil",
    desc: "Conversa inicial para entender seus objetivos, prazo e tolerância a risco.",
  },
  {
    icon: Target,
    title: "Desenhamos a estratégia",
    desc: "Carteira diversificada e alinhada à sua vida — não a um modelo padrão.",
  },
  {
    icon: TrendingUp,
    title: "Acompanhamos junto",
    desc: "Revisões periódicas com seu assessor e ajustes conforme o cenário muda.",
  },
  {
    icon: Sparkles,
    title: "Evoluímos com você",
    desc: "Novos produtos, novos objetivos — sua estratégia cresce junto com seu patrimônio.",
  },
];

/* -------------------------------------------------------------------------- */
/*  FAQ                                                                       */
/* -------------------------------------------------------------------------- */
const faqs = [
  {
    q: "Preciso ter muito dinheiro para começar a investir?",
    a: "Não. Trabalhamos com produtos de diferentes tickets — o mais importante é começar com consistência e estratégia adequadas ao seu perfil.",
  },
  {
    q: "Como vocês escolhem os produtos?",
    a: "Nossa mesa analisa cenários macro, fundamentos e classifica produtos por risco e objetivo. Você recebe recomendações alinhadas ao seu perfil — nunca um catálogo genérico.",
  },
  {
    q: "Eu tenho um assessor dedicado?",
    a: "Sim. Cada cliente conta com um assessor de confiança, acessível por WhatsApp, telefone e reuniões periódicas presenciais ou online.",
  },
  {
    q: "Posso resgatar quando quiser?",
    a: "Depende do produto. Renda fixa e fundos têm prazos próprios; ações e ETFs têm liquidez diária. Tudo é explicado antes de qualquer aplicação.",
  },
  {
    q: "Vocês cobram taxa de assessoria?",
    a: "Nosso modelo é transparente. As condições são apresentadas antes da contratação, sem surpresas, com foco em alinhamento de longo prazo.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Main page                                                                 */
/* -------------------------------------------------------------------------- */
const InvistaConosco = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Parallax for hero image
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050a18] text-white overflow-x-hidden">
      <style>{`
        @keyframes invistaDraw { from { stroke-dashoffset: 1200; } to { stroke-dashoffset: 0; } }
        @keyframes invistaFillIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes invistaPop { 0% { transform: scale(0); opacity: 0; } 70% { transform: scale(1.4); opacity: 1; } 100% { transform: scale(1); opacity: 1; } }
        @keyframes invistaGoldRing { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes invistaPulse { 0%, 100% { opacity: 0.4; transform: scale(1); } 50% { opacity: 0.8; transform: scale(1.05); } }
        @keyframes invistaArc { from { stroke-dashoffset: 800; } to { stroke-dashoffset: 0; } }
        @keyframes invistaTickerScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }

        .invista-line { stroke-dasharray: 1200; stroke-dashoffset: 1200; animation: invistaDraw 2.4s ease-out 0.4s forwards; }
        .invista-fill { opacity: 0; animation: invistaFillIn 1.2s ease-out 1.6s forwards; }
        .invista-dot { transform-origin: center; transform-box: fill-box; opacity: 0; animation: invistaPop 0.6s cubic-bezier(.34,1.56,.64,1) forwards; }
        .invista-ring { animation: invistaGoldRing 24s linear infinite; transform-origin: center; transform-box: fill-box; }
        .invista-pulse { animation: invistaPulse 4s ease-in-out infinite; }
        .invista-arc { stroke-dasharray: 800; stroke-dashoffset: 800; animation: invistaArc 3s ease-out 0.6s forwards; }
        .invista-ticker { animation: invistaTickerScroll 40s linear infinite; }

        .invista-grain { background-image: radial-gradient(rgba(240,215,140,0.06) 1px, transparent 1px); background-size: 28px 28px; }
      `}</style>

      <Navbar />

      {/* ---------------------------------------------------------------- */}
      {/*  HERO — split with hero image + animated gold arcs                */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* background atmosphere */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#050a18] via-[#081229] to-[#050a18]" />
          <div className="absolute inset-0 invista-grain opacity-60" />
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#b8893f]/10 blur-3xl invista-pulse" />
          <div className="absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full bg-[#f0d78c]/10 blur-3xl invista-pulse" style={{ animationDelay: "2s" }} />
        </div>

        <div className="container mx-auto px-6 relative">
          <div ref={heroRef} className="relative rounded-[2rem] overflow-hidden border border-[#b8893f]/30 shadow-[0_40px_120px_-30px_rgba(184,137,63,0.4)]">
            {/* hero image as background */}
            <div
              className="relative aspect-[16/9] w-full"
              style={{
                backgroundImage: `url(${heroImg})`,
                backgroundSize: "cover",
                backgroundPosition: `center ${50 + scrollY * 0.04}%`,
              }}
            >
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  ANIMATED CHART NARRATIVE                                         */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <span className="text-[11px] uppercase tracking-[0.3em] text-[#f0d78c]/70">Filosofia</span>
                <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
                  Estratégia desenhada para o <span className="italic text-[#f0d78c]">longo prazo</span>.
                </h2>
                <p className="mt-6 text-white/70 leading-relaxed">
                  Acreditamos que investir bem não é correr atrás da moda — é construir, com paciência e
                  consistência, uma trajetória sólida. Cada decisão é fruto de análise técnica, conhecimento
                  profundo do seu perfil e visão clara dos seus objetivos.
                </p>
                <p className="mt-4 text-white/60 leading-relaxed">
                  Nossa mesa une experiência de mercado e curadoria criteriosa para selecionar oportunidades
                  que façam sentido para você — não para todos.
                </p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="relative rounded-2xl border border-[#b8893f]/20 bg-gradient-to-br from-[#0a1428] to-[#050a18] p-8 shadow-[0_30px_80px_-20px_rgba(184,137,63,0.3)]">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.25em] text-white/40">Trajetória</p>
                    <p className="font-serif text-2xl text-white mt-1">Crescimento consistente</p>
                  </div>
                  <span className="px-2 py-1 rounded-md bg-[#f0d78c]/10 text-[#f0d78c] text-xs font-mono">↗ longo prazo</span>
                </div>
                <div className="aspect-[16/7]">
                  <ChartLine />
                </div>
                <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/5">
                  {[
                    { label: "Diversificação", value: "Multiclasse" },
                    { label: "Horizonte", value: "Longo prazo" },
                    { label: "Acompanhamento", value: "Contínuo" },
                  ].map((s) => (
                    <div key={s.label}>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">{s.label}</p>
                      <p className="text-sm text-white/90 mt-1 font-medium">{s.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  ASSET TICKER (marquee, decorative)                               */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative py-10 border-y border-[#b8893f]/10 bg-[#070e20] overflow-hidden">
        <div className="flex invista-ticker whitespace-nowrap">
          {[...Array(2)].map((_, dup) => (
            <div key={dup} className="flex shrink-0">
              {[
                "Renda Fixa",
                "Tesouro Direto",
                "CDB",
                "LCI / LCA",
                "Ações",
                "ETFs",
                "BDRs",
                "Fundos Imobiliários",
                "Previdência",
                "Multimercado",
                "Carteiras Sob Medida",
                "Internacional",
              ].map((label, i) => (
                <span key={`${dup}-${i}`} className="flex items-center gap-3 px-8 text-white/30 font-serif text-2xl">
                  {label}
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f0d78c]/50" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  PRODUCTS — interactive grid + detail panel                       */}
      {/* ---------------------------------------------------------------- */}
      <section id="produtos" className="relative py-28">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#f0d78c]/70">Produtos</span>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">
                Um portfólio para <span className="italic text-[#f0d78c]">cada objetivo</span>.
              </h2>
              <p className="mt-5 text-white/60">
                Toque em qualquer categoria para conhecer suas características.
              </p>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-12 gap-6">
            {/* category list */}
            <div className="lg:col-span-5 space-y-3">
              {products.map((p, i) => {
                const Icon = p.icon;
                const active = activeProduct === i;
                return (
                  <button
                    key={p.name}
                    onClick={() => setActiveProduct(i)}
                    className={`w-full text-left rounded-2xl border transition-all duration-500 group ${
                      active
                        ? "border-[#f0d78c]/60 bg-gradient-to-r from-[#f0d78c]/10 to-transparent shadow-[0_10px_40px_-15px_rgba(240,215,140,0.4)]"
                        : "border-white/5 bg-white/[0.02] hover:border-[#b8893f]/30"
                    }`}
                  >
                    <div className="flex items-center gap-4 p-5">
                      <div
                        className={`relative w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                          active ? "bg-gradient-to-br from-[#b8893f] to-[#f0d78c]" : "bg-white/5"
                        }`}
                      >
                        <Icon className={`w-5 h-5 ${active ? "text-[#050a18]" : "text-[#f0d78c]"}`} />
                      </div>
                      <div className="flex-1">
                        <p className="font-serif text-xl text-white">{p.name}</p>
                        <p className="text-xs text-white/50 mt-0.5">{p.tagline}</p>
                      </div>
                      <ArrowRight
                        className={`w-4 h-4 transition-all ${
                          active ? "text-[#f0d78c] translate-x-1" : "text-white/30"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* detail panel */}
            <div className="lg:col-span-7">
              <div className="sticky top-24 relative rounded-3xl border border-[#b8893f]/30 bg-gradient-to-br from-[#0a1428] via-[#0a1428] to-[#050a18] p-10 overflow-hidden min-h-[420px]">
                {/* decorative ring */}
                <svg className="absolute -top-32 -right-32 w-[400px] h-[400px] invista-ring opacity-30" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#f0d78c" strokeWidth="0.5" strokeDasharray="2 8" />
                  <circle cx="100" cy="100" r="60" fill="none" stroke="#b8893f" strokeWidth="0.5" strokeDasharray="4 4" />
                </svg>

                {products.map((p, i) => {
                  if (i !== activeProduct) return null;
                  const Icon = p.icon;
                  return (
                    <div key={p.name} className="relative animate-fade-in">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#b8893f] to-[#f0d78c] flex items-center justify-center shadow-[0_10px_30px_-10px_rgba(240,215,140,0.6)]">
                          <Icon className="w-6 h-6 text-[#050a18]" />
                        </div>
                        <span className="text-[11px] uppercase tracking-[0.3em] text-[#f0d78c]/70">{p.tagline}</span>
                      </div>
                      <h3 className="font-serif text-4xl md:text-5xl text-white leading-tight">{p.name}</h3>
                      <p className="mt-5 text-white/70 leading-relaxed text-lg">{p.desc}</p>

                      <div className="mt-8 grid sm:grid-cols-3 gap-4">
                        {p.perks.map((perk) => (
                          <div
                            key={perk}
                            className="px-4 py-3 rounded-xl border border-[#b8893f]/20 bg-white/[0.03] text-sm text-white/80"
                          >
                            {perk}
                          </div>
                        ))}
                      </div>

                      <a
                        href="#contato"
                        className="mt-8 inline-flex items-center gap-2 text-[#f0d78c] hover:text-white transition-colors group"
                      >
                        Conversar sobre {p.name}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  PILLARS — process row                                           */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative py-28 bg-gradient-to-b from-transparent via-[#070e20] to-transparent">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#f0d78c]/70">Como trabalhamos</span>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">
                Quatro passos, uma <span className="italic text-[#f0d78c]">jornada</span>.
              </h2>
            </div>
          </Reveal>

          <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* connecting line */}
            <div className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-[#b8893f]/40 to-transparent" />
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={i * 120}>
                  <div className="relative text-center group">
                    <div className="relative mx-auto w-16 h-16 mb-5">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#b8893f] to-[#f0d78c] opacity-20 blur-xl group-hover:opacity-50 transition-opacity" />
                      <div className="relative w-16 h-16 rounded-full bg-[#050a18] border-2 border-[#b8893f]/40 flex items-center justify-center group-hover:border-[#f0d78c] transition-colors">
                        <Icon className="w-6 h-6 text-[#f0d78c]" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-br from-[#b8893f] to-[#f0d78c] text-[#050a18] text-xs font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl text-white">{p.title}</h3>
                    <p className="mt-2 text-sm text-white/60 leading-relaxed">{p.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  FAQ — accordion                                                  */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative py-28">
        <div className="container mx-auto px-6 max-w-3xl">
          <Reveal>
            <div className="text-center mb-12">
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#f0d78c]/70">Dúvidas frequentes</span>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">
                Respostas <span className="italic text-[#f0d78c]">claras</span>.
              </h2>
            </div>
          </Reveal>

          <div className="space-y-3">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <Reveal key={f.q} delay={i * 80}>
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    className={`w-full text-left rounded-2xl border transition-all duration-300 overflow-hidden ${
                      open ? "border-[#f0d78c]/40 bg-[#f0d78c]/[0.04]" : "border-white/5 bg-white/[0.02] hover:border-[#b8893f]/30"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4 p-6">
                      <span className="font-serif text-lg text-white">{f.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#f0d78c] shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
                      />
                    </div>
                    <div
                      className="px-6 grid transition-all duration-500"
                      style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-6 text-white/70 leading-relaxed">{f.a}</p>
                      </div>
                    </div>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  CTA                                                              */}
      {/* ---------------------------------------------------------------- */}
      <section id="contato" className="relative py-28">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="relative rounded-[2rem] overflow-hidden border border-[#b8893f]/30 bg-gradient-to-br from-[#0a1428] via-[#081229] to-[#050a18] p-12 md:p-20 text-center">
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#f0d78c]/10 blur-3xl invista-pulse" />
              <div className="relative">
                <Sparkles className="w-8 h-8 text-[#f0d78c] mx-auto mb-4" />
                <h2 className="font-serif text-4xl md:text-6xl leading-tight">
                  Vamos construir <span className="italic text-[#f0d78c]">juntos</span>.
                </h2>
                <p className="mt-6 text-white/70 max-w-xl mx-auto">
                  Fale com um assessor especializado e descubra a estratégia certa para o seu próximo capítulo.
                </p>
                <div className="mt-10 flex flex-wrap justify-center gap-3">
                  <a
                    href="#"
                    className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#b8893f] to-[#f0d78c] text-[#050a18] font-medium hover:shadow-[0_10px_40px_-10px_rgba(240,215,140,0.6)] transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    Falar com assessor
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="#produtos"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[#f0d78c]/30 text-[#f0d78c] hover:bg-[#f0d78c]/10 transition-all"
                  >
                    Ver produtos novamente
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InvistaConosco;