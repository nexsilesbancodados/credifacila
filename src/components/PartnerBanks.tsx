import { Handshake, Award, ShieldCheck, ChevronRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import atendente from "@/assets/atendente-credifacil.jpg";

type Bank = {
  name: string;
  tagline: string;
  color: string;
  markClass: string;
  mark: string;
  isDark?: boolean;
};

const banks: Bank[] = [
  {
    name: "Itaú",
    tagline: "Feito para você",
    color: "#ffffff",
    markClass: "bg-[#0033A0]",
    mark: "itau",
    isDark: false,
  },
  {
    name: "bradesco",
    tagline: "Com você. Sempre.",
    color: "#ff3e41",
    markClass: "bg-transparent",
    mark: "◑",
  },
  {
    name: "Santander",
    tagline: "O banco de todas as ideias",
    color: "#ec0000",
    markClass: "bg-transparent",
    mark: "S",
  },
  {
    name: "Banco do Brasil",
    tagline: "Do seu lado em todos os momentos",
    color: "#fcf830",
    markClass: "bg-[#003DA5]",
    mark: "BB",
  },
  {
    name: "SICOOB",
    tagline: "Cooperar para transformar",
    color: "#7db72f",
    markClass: "bg-transparent",
    mark: "V",
  },
  {
    name: "CAIXA",
    tagline: "O banco de todos os brasileiros",
    color: "#00a1e4",
    markClass: "bg-transparent",
    mark: "X",
  },
  {
    name: "Banrisul",
    tagline: "Nossa conexão transforma",
    color: "#00a3e0",
    markClass: "bg-transparent",
    mark: "B",
  },
];

/** Enhanced positions - wider spread to avoid covering the attendant */
const positions = [
  "top-[2%] left-1/2 -translate-x-1/2",                  // Itaú
  "top-[20%] left-[-8%]",                                // Bradesco
  "top-[20%] right-[-8%]",                               // Santander
  "top-[52%] left-[-12%]",                               // BB
  "top-[52%] right-[-12%]",                              // Sicoob
  "bottom-[5%] left-[5%]",                               // Caixa
  "bottom-[5%] right-[5%]",                              // Banrisul
];

const features = [
  { icon: Handshake, title: "Parcerias sólidas", desc: "Relacionamento com os principais bancos do país." },
  { icon: Award, title: "Melhores condições", desc: "Negociações exclusivas para você." },
  { icon: ShieldCheck, title: "Mais segurança", desc: "Processos confiáveis com instituições de referência." },
];

const BankCard = ({ bank }: { bank: Bank }) => (
  <div className="group relative w-[185px] overflow-hidden rounded-2xl border border-brand-gold/20 bg-[hsl(0_0%_4%/0.7)] p-3.5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-brand-gold/60 hover:shadow-[0_0_20px_rgba(212,164,52,0.15)]">
    {/* Subtle inner glow */}
    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      style={{ background: `radial-gradient(circle at center, ${bank.color}15 0%, transparent 70%)` }}
    />
    
    <div className="flex items-center gap-3">
      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg shadow-sm transition-transform duration-500 group-hover:scale-110 ${bank.markClass}`}
        style={!bank.markClass.includes('bg-') ? { color: bank.color } : {}}
      >
        <span className="text-[12px] font-black uppercase tracking-tighter">{bank.mark}</span>
      </div>
      <div>
        <div
          className="font-display text-[16px] font-extrabold uppercase leading-none tracking-tight transition-colors"
          style={{ color: bank.color }}
        >
          {bank.name}
        </div>
        <div className="mt-1 text-[10px] leading-tight text-muted-foreground/80 opacity-0 transition-all duration-500 group-hover:opacity-100">
          {bank.tagline}
        </div>
      </div>
    </div>
  </div>
);

const PartnerBanks = () => (
  <section
    id="bancos-parceiros"
    className="relative w-full overflow-hidden px-5 py-16 md:px-8 md:py-24 lg:px-10"
    aria-label="Bancos parceiros"
  >
    <div className="mx-auto max-w-7xl">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-center lg:gap-16">
        {/* LEFT — Typography & Features */}
        <div data-anim="fade-right">
          <span className="pill-eyebrow mb-6">
            <Sparkles className="h-3 w-3" />
            Parcerias que geram resultados
          </span>
          <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-[52px]">
            Trabalhamos com{" "}
            <span className="text-gold-gradient">os melhores bancos</span>{" "}
            para você ir mais longe.
          </h2>
          <div className="mt-6 h-1 w-20 rounded-full bg-gold-gradient" aria-hidden />
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground/90 md:text-lg">
            Nossa rede de parceiros nos permite oferecer as melhores condições, mais segurança
            e soluções sob medida para o seu momento financeiro.
          </p>

          <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3" data-anim-stagger>
            {features.map((f) => (
              <li key={f.title} className="group">
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-gold/20 bg-surface-dark text-brand-gold transition-all duration-300 group-hover:border-brand-gold/50 group-hover:shadow-[0_0_15px_rgba(212,164,52,0.1)]"
                  aria-hidden
                >
                  <f.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <div className="text-[14px] font-bold text-foreground">{f.title}</div>
                <p className="mt-1.5 text-[12px] leading-relaxed text-muted-foreground/80">{f.desc}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT — Attendant + Circular Layout */}
        <div className="relative mx-auto w-full max-w-[680px]" data-anim="fade-left">
          {/* Animated SVG Path for connections */}
          <svg className="absolute inset-0 h-full w-full opacity-20" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="300" cy="300" r="240" stroke="url(#gold-grad)" strokeWidth="1" strokeDasharray="5 5" />
            <defs>
              <linearGradient id="gold-grad" x1="0" y1="0" x2="600" y2="600" gradientUnits="userSpaceOnUse">
                <stop stopColor="#D4A434" />
                <stop offset="1" stopColor="#D4A434" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* Central Portrait with better masking */}
          <div className="relative mx-auto aspect-square w-[60%] sm:w-[55%]">
            {/* Ambient gold glow behind portrait */}
            <div
              className="absolute inset-0 rounded-full opacity-40 blur-3xl"
              style={{
                background: "radial-gradient(circle at 50% 50%, hsl(42 78% 45%) 0%, transparent 75%)",
              }}
              aria-hidden
            />
            
            <div className="relative h-full w-full overflow-hidden rounded-full border border-brand-gold/10">
              <img
                src={atendente}
                alt="Atendente Credifácil"
                loading="lazy"
                decoding="async"
                width={1024}
                height={1024}
                className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
                style={{
                  maskImage: "radial-gradient(circle at 50% 45%, black 40%, transparent 85%)",
                  WebkitMaskImage: "radial-gradient(circle at 50% 45%, black 40%, transparent 85%)",
                }}
              />
            </div>
          </div>

          {/* Floating bank cards (Desktop) */}
          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            {banks.map((b, i) => (
              <div
                key={b.name}
                className={`pointer-events-auto absolute ${positions[i]}`}
                style={{ animation: `float ${5 + i}s ease-in-out infinite alternate` }}
              >
                <BankCard bank={b} />
              </div>
            ))}
          </div>

          {/* Grid Layout (Mobile) */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:hidden">
            {banks.map((b) => (
              <BankCard key={b.name} bank={b} />
            ))}
          </div>
        </div>
      </div>

      {/* Improved CTA Bar */}
      <div
        className="mt-20 overflow-hidden rounded-[32px] border border-brand-gold/30 bg-surface-deep-2/60 p-1 backdrop-blur-md"
        data-anim="fade-up"
      >
        <div className="flex flex-col items-center gap-6 rounded-[30px] bg-gradient-to-r from-brand-ink to-surface-deep-2 p-8 md:flex-row md:justify-between md:p-10">
          <div className="flex items-center gap-6">
            <div className="hidden h-14 w-14 items-center justify-center rounded-2xl border border-brand-gold/30 bg-brand-gold/5 text-brand-gold sm:flex">
              <ShieldCheck className="h-8 w-8" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold leading-tight text-foreground md:text-3xl">
                Mais opções para <span className="text-gold-gradient">você.</span>
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground/80 md:text-base">
                Com as melhores instituições ao nosso lado, encontramos o crédito ideal para o seu perfil e planos.
              </p>
            </div>
          </div>
          
          <Link
            to="/simular"
            className="group flex w-full items-center justify-between gap-6 rounded-2xl border border-brand-gold/40 bg-brand-gold/5 px-6 py-5 transition-all duration-300 hover:border-brand-gold hover:bg-brand-gold/10 md:w-auto"
          >
            <div>
              <span className="block font-display text-lg font-bold text-foreground">Fale com um especialista</span>
              <span className="block text-xs text-muted-foreground transition-colors group-hover:text-brand-gold/80">
                Descubra as melhores oportunidades para você agora.
              </span>
            </div>
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-gradient text-brand-ink transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110">
              <ChevronRight className="h-6 w-6" strokeWidth={3} />
            </div>
          </Link>
        </div>
      </div>
    </div>

    <style>{`
      @keyframes float {
        0% { transform: translateY(0px) rotate(0deg); }
        100% { transform: translateY(-12px) rotate(1deg); }
      }
    `}</style>
  </section>
);

export default PartnerBanks;
