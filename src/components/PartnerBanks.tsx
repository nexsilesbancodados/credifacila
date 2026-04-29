import { Sparkles, ShieldCheck, Handshake, Star } from "lucide-react";
import bancos from "@/assets/bancos-parceiros.webp";
import bancosMd from "@/assets/bancos-parceiros-md.webp";
import bancosSm from "@/assets/bancos-parceiros-sm.webp";

const trust = [
  { icon: ShieldCheck, title: "Segurança e confiança", desc: "Operações com instituições autorizadas pelo Banco Central." },
  { icon: Handshake, title: "Parcerias sólidas", desc: "Convênios diretos com os maiores bancos do país." },
  { icon: Star, title: "Melhores condições", desc: "Comparamos taxas e prazos para entregar o que cabe em você." },
];

const PartnerBanks = () => (
  <section
    id="bancos-parceiros"
    className="relative w-full px-5 py-16 md:px-8 md:py-20 lg:px-10"
    aria-label="Bancos parceiros"
  >
    <div className="mx-auto max-w-7xl">
      <div className="mb-10 text-center" data-anim="fade-up">
        <span className="pill-eyebrow">
          <Sparkles className="h-3 w-3" />
          Nossos parceiros
        </span>
        <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-foreground md:text-4xl lg:text-[46px]">
          A <span className="text-gold-gradient">Credifácil</span> trabalha com
          os melhores bancos do Brasil
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
          A Credifácil mantém convênios diretos com as maiores instituições financeiras do país para
          entregar as melhores taxas, mais segurança e aprovação ágil para você.
        </p>
      </div>

      <div
        className="relative overflow-hidden rounded-[28px] border border-brand-gold/20 bg-card/85 shadow-[var(--shadow-card)] backdrop-blur-sm"
        data-anim="fade-up"
      >
        {/* Decorative gold glow */}
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(circle, hsl(42 78% 60% / 0.45, transparent 70%)",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, hsl(42 78% 60% / 0.35, transparent 70%)",
          }}
          aria-hidden
        />

        <img
          src={bancos}
          srcSet={`${bancosSm} 720w, ${bancosMd} 1100w, ${bancos} 1600w`}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1280px"
          alt="Credifácil trabalha com os principais bancos do Brasil: Itaú, Banco do Brasil, Bradesco, Caixa, Santander, Nubank, Inter, C6 Bank, PagBank, Neon, BTG Pactual, Safra, Sicoob, Sicredi e Banco BMG"
          className="relative w-full h-auto block"
          loading="lazy"
          decoding="async"
          width={1600}
          height={1067}
        />
      </div>

      {/* Trust strip */}
      <ul
        className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3"
        data-anim-stagger
      >
        {trust.map((t) => (
          <li
            key={t.title}
            className="group relative flex items-start gap-4 rounded-2xl border border-brand-gold/20 bg-card/80 p-4 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-brand-gold/50 hover:bg-card hover:shadow-[var(--shadow-card)]"
          >
            <span
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-brand-gold-foreground shadow-[var(--shadow-gold-sm)] transition-transform duration-300 group-hover:scale-105 group-hover:rotate-[-3deg]"
              style={{ background: "var(--gradient-gold)" }}
            >
              <t.icon className="h-5 w-5" strokeWidth={2.2} />
            </span>
            <div className="leading-snug">
              <div className="text-[14px] font-bold text-foreground transition-colors group-hover:text-brand-gold">
                {t.title}
              </div>
              <div className="mt-1 text-[12px] leading-relaxed text-muted-foreground">
                {t.desc}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default PartnerBanks;