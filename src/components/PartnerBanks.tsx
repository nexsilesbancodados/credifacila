import { Handshake, Award, ShieldCheck, ChevronRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import atendente from "@/assets/atendente-credifacil.jpg";

type Bank = {
  name: string;
  tagline: string;
  /** logo color (used for the brand name text) */
  color: string;
  /** small mark — tailwind classes for a colored chip */
  markClass: string;
  /** abbreviation shown inside the mark */
  mark: string;
};

const banks: Bank[] = [
  {
    name: "Itaú",
    tagline: "Feito para você",
    color: "#0033A0",
    markClass: "bg-[#0033A0] text-[#FF7A00]",
    mark: "itaú",
  },
  {
    name: "bradesco",
    tagline: "Com você. Sempre.",
    color: "#CC092F",
    markClass: "bg-transparent text-[#CC092F]",
    mark: "◐",
  },
  {
    name: "Santander",
    tagline: "O banco de todas as ideias",
    color: "#EC0000",
    markClass: "bg-transparent text-[#EC0000]",
    mark: "🔥",
  },
  {
    name: "Banco do Brasil",
    tagline: "Do seu lado em todos os momentos",
    color: "#FFEF38",
    markClass: "bg-[#FFEF38] text-[#003DA5]",
    mark: "BB",
  },
  {
    name: "SICOOB",
    tagline: "Cooperar para transformar",
    color: "#7DB72F",
    markClass: "bg-transparent text-[#7DB72F]",
    mark: "▼",
  },
  {
    name: "CAIXA",
    tagline: "O banco de todos os brasileiros",
    color: "#005CA9",
    markClass: "bg-transparent text-[#005CA9]",
    mark: "✦",
  },
  {
    name: "Banrisul",
    tagline: "Nossa conexão transforma",
    color: "#0E5BA8",
    markClass: "bg-transparent text-[#0E5BA8]",
    mark: "B",
  },
];

/** Positions for the 7 floating cards around the central portrait (desktop only). */
const positions = [
  "top-[2%] left-1/2 -translate-x-1/2",                  // Itaú (top center)
  "top-[18%] left-[2%]",                                 // Bradesco (upper-left)
  "top-[18%] right-[2%]",                                // Santander (upper-right)
  "top-[48%] left-0 -translate-y-1/2",                   // BB (mid-left)
  "top-[48%] right-0 -translate-y-1/2",                  // Sicoob (mid-right)
  "bottom-[6%] left-[12%]",                              // Caixa (bottom-left)
  "bottom-[6%] right-[12%]",                             // Banrisul (bottom-right)
];

const features = [
  { icon: Handshake, title: "Parcerias sólidas", desc: "Relacionamento com os principais bancos do país." },
  { icon: Award, title: "Melhores condições", desc: "Negociações exclusivas para você." },
  { icon: ShieldCheck, title: "Mais segurança", desc: "Processos confiáveis com instituições de referência." },
];

const BankCard = ({ bank }: { bank: Bank }) => (
  <div className="group relative w-[170px] rounded-2xl border border-brand-gold/25 bg-[hsl(0_0%_5%/0.85)] p-3 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-gold/60 hover:shadow-[var(--shadow-gold-sm)]">
    <div className="flex items-center gap-2">
      <span
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-[11px] font-black ${bank.markClass}`}
        aria-hidden
      >
        {bank.mark}
      </span>
      <span
        className="font-display text-[15px] font-extrabold leading-none tracking-tight"
        style={{ color: bank.color }}
      >
        {bank.name}
      </span>
    </div>
    <p className="mt-1.5 text-[11px] leading-tight text-muted-foreground">
      {bank.tagline}
    </p>
  </div>
);

const PartnerBanks = () => (
  <section
    id="bancos-parceiros"
    className="relative w-full px-5 py-16 md:px-8 md:py-20 lg:px-10"
    aria-label="Bancos parceiros"
  >
    <div className="mx-auto max-w-7xl">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-10">
        {/* LEFT — copy */}
        <div data-anim="fade-right">
          <span className="pill-eyebrow">
            <Sparkles className="h-3 w-3" />
            Parcerias que geram resultados
          </span>
          <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-foreground md:text-4xl lg:text-[44px]">
            Trabalhamos com{" "}
            <span className="text-gold-gradient">os melhores bancos</span>{" "}
            para você ir mais longe.
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-gold-gradient" aria-hidden />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            Nossa rede de parceiros nos permite oferecer as melhores condições, mais segurança
            e soluções sob medida para o seu momento.
          </p>

          <ul className="mt-8 grid grid-cols-3 gap-4" data-anim-stagger>
            {features.map((f) => (
              <li key={f.title} className="text-left">
                <span
                  className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl border border-brand-gold/30 bg-[hsl(0_0%_8%)] text-brand-gold"
                  aria-hidden
                >
                  <f.icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <div className="text-[13px] font-bold text-foreground">{f.title}</div>
                <p className="mt-1 text-[11px] leading-snug text-muted-foreground">{f.desc}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT — portrait + floating bank cards */}
        <div className="relative mx-auto w-full max-w-[640px]" data-anim="fade-left">
          {/* Decorative concentric rings */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden>
            <div className="absolute aspect-square w-[88%] rounded-full border border-dashed border-brand-gold/25" />
            <div className="absolute aspect-square w-[64%] rounded-full border border-brand-gold/15" />
            <div
              className="absolute aspect-square w-[70%] rounded-full opacity-60 blur-2xl"
              style={{ background: "radial-gradient(circle, hsl(42 78% 40% / 0.35), transparent 70%)" }}
            />
          </div>

          {/* Portrait */}
          <div className="relative mx-auto aspect-square w-[58%] sm:w-[52%] lg:w-[56%]">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: "radial-gradient(circle at 50% 60%, hsl(42 78% 35% / 0.55), transparent 70%)",
                filter: "blur(20px)",
              }}
              aria-hidden
            />
            <img
              src={atendente}
              alt="Atendente Credifácil sorrindo, vestindo polo preta com detalhes dourados"
              loading="lazy"
              decoding="async"
              width={1024}
              height={1024}
              className="relative mx-auto h-full w-full object-cover object-top"
              style={{
                WebkitMaskImage:
                  "radial-gradient(ellipse 70% 90% at 50% 45%, #000 55%, transparent 90%)",
                maskImage:
                  "radial-gradient(ellipse 70% 90% at 50% 45%, #000 55%, transparent 90%)",
              }}
            />
          </div>

          {/* Floating bank cards (desktop) */}
          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            {banks.map((b, i) => (
              <div
                key={b.name}
                className={`pointer-events-auto absolute ${positions[i]}`}
                style={{ animation: `float 6s ease-in-out ${i * 0.4}s infinite` }}
              >
                <BankCard bank={b} />
              </div>
            ))}
          </div>

          {/* Bank cards grid (mobile / tablet) */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:hidden">
            {banks.map((b) => (
              <BankCard key={b.name} bank={b} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA strip */}
      <div
        className="mt-14 grid grid-cols-1 items-center gap-6 rounded-3xl border border-brand-gold/25 bg-[hsl(0_0%_6%/0.85)] p-6 backdrop-blur-md md:grid-cols-[auto_1fr_1fr_auto] md:gap-8 md:p-8"
        data-anim="fade-up"
      >
        <span
          className="flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-gold/40 text-brand-gold"
          aria-hidden
        >
          <ShieldCheck className="h-7 w-7" strokeWidth={2} />
        </span>
        <div>
          <h3 className="font-display text-xl leading-tight text-muted-foreground md:text-2xl">
            Mais opções para você.
            <br />
            <span className="font-bold text-gold-gradient">Mais vantagens para conquistar.</span>
          </h3>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Com as melhores instituições ao nosso lado, encontramos o crédito ideal para o seu perfil
          e para os seus planos.
        </p>
        <Link
          to="/simular"
          className="group inline-flex items-center justify-between gap-4 rounded-2xl border border-brand-gold/40 px-5 py-4 transition-all hover:border-brand-gold hover:bg-brand-gold/5"
        >
          <span className="text-sm">
            <span className="block font-bold text-foreground">Fale com um especialista</span>
            <span className="block text-xs text-muted-foreground">
              e descubra as melhores oportunidades para você.
            </span>
          </span>
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-gold/50 text-brand-gold transition-transform group-hover:translate-x-0.5"
            aria-hidden
          >
            <ChevronRight className="h-5 w-5" />
          </span>
        </Link>
      </div>
    </div>

    <style>{`
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-8px); }
      }
    `}</style>
  </section>
);

export default PartnerBanks;
