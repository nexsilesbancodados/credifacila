import {
  Clock,
  Lock,
  Percent,
  UserRound,
  ChevronRight,
  Star,
  Coins,
  TrendingUp,
  Heart,
  Phone,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { site, whatsappLink, telLink } from "@/config/site";
import womanCoffee from "@/assets/woman-coffee.webp";
import cardAdvantages from "@/assets/advantages-humanizada.webp";

const advantages = [
  { icon: Clock, title: "Liberação no mesmo dia", desc: "Dinheiro na conta em poucas horas após aprovação.", tag: "Rápido" },
  { icon: Lock, title: "100% seguro e criptografado", desc: "Seus dados protegidos com padrão bancário SSL 256-bit.", tag: "SSL 256" },
  { icon: Percent, title: "Taxas a partir de 1,19% a.m.", desc: "Condições competitivas que realmente cabem no seu bolso.", tag: "Sem surpresas" },
  { icon: UserRound, title: "Atendimento humano de verdade", desc: "Fale com pessoas reais, que escutam e resolvem.", tag: "7 dias/sem" },
];

const purposes = [
  { icon: Star, label: "Realize\nsonhos" },
  { icon: Coins, label: "Quite\ndívidas" },
  { icon: TrendingUp, label: "Invista no\nseu futuro" },
  { icon: Heart, label: "Tenha mais\ntranquilidade" },
];

const AdvantagesSection = () => {
  return (
    <section
      id="vantagens"
      className="relative w-full px-5 py-16 md:px-8 md:py-20 lg:px-10"
      aria-label="Vantagens, propósito e depoimentos"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center" data-anim="fade-up">
          <span className="pill-eyebrow">
            <Sparkles className="h-3 w-3" />
            Por que a Credifácil
          </span>
          <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-foreground md:text-4xl lg:text-[46px]">
            Na <span className="text-gold-gradient">Credifácil</span>, tudo
            que você precisa em um só lugar
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Mais de <span className="font-bold text-foreground">50 mil pessoas</span> já realizaram seus planos com a confiança e a agilidade da Credifácil.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2" data-anim-stagger>
          {/* CARD 1 — Vantagens */}
          <article className="group relative overflow-hidden rounded-3xl border border-white/8 bg-[hsl(215_42%_20%)] p-7 text-white shadow-[var(--shadow-card)] transition-all hover:border-brand-gold/40">
            <img
              src={cardAdvantages}
              alt=""
              aria-hidden
              className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-50 transition-opacity duration-500 group-hover:opacity-65"
              loading="lazy"
              decoding="async"
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, hsl(0 0% 8% / 0.40 0%, hsl(0 0% 8% / 0.65 60%, hsl(0 0% 8% / 0.85 100%)",
              }}
              aria-hidden
            />
            {/* Decorative gold mesh */}
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full opacity-30"
              style={{
                background:
                  "radial-gradient(circle, hsl(42 78% 55% / 0.6, transparent 70%)",
              }}
              aria-hidden
            />
            <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden />
            <div className="relative">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-gold/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-gold">
                <ShieldCheck className="h-3 w-3" /> Diferenciais
              </span>
              <h3 className="mt-3 font-display text-2xl font-bold leading-[1.15]">
                Vantagens que
                <br />
                fazem <span className="text-brand-gold">a diferença</span>
              </h3>

              <ul className="mt-6 flex flex-col">
                {advantages.map((a, i) => (
                  <li
                    key={a.title}
                    className={`group/item flex items-start gap-4 py-4 transition-colors ${
                      i < advantages.length - 1 ? "border-b border-white/8" : ""
                    }`}
                  >
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-brand-gold-foreground shadow-[var(--shadow-gold-sm)] transition-transform group-hover/item:scale-110"
                      style={{ background: "var(--gradient-gold)" }}
                    >
                      <a.icon className="h-[18px] w-[18px]" strokeWidth={2.2} />
                    </div>
                    <div className="flex-1 leading-snug">
                      <div className="flex items-center gap-2">
                        <div className="text-sm font-bold">{a.title}</div>
                      </div>
                      <div className="mt-1 text-xs leading-relaxed text-white/78">{a.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* CARD 2 — Para sua vida (com foto) */}
          <article className="relative overflow-hidden rounded-3xl border border-white/8 bg-[hsl(var(--surface-elevated))] text-white shadow-[var(--shadow-card)] transition-all hover:border-brand-gold/40">
            <img
              src={womanCoffee}
              alt="Mulher sorrindo segurando uma xícara, cliente Credifácil"
              className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
              loading="lazy"
              decoding="async"
              width={1024}
              height={1280}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, hsl(0 0% 8% / 0.96 0%, hsl(0 0% 8% / 0.85 38%, hsl(0 0% 8% / 0.3 70%, transparent 100%)",
              }}
              aria-hidden
            />

            <div className="relative flex h-full flex-col justify-between p-7">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-gold/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-gold">
                  <Heart className="h-3 w-3 fill-brand-gold" /> Para sua vida
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold leading-[1.15]">
                  Crédito para
                  <br />
                  <span className="text-brand-gold">cada momento</span>
                  <br />
                  <span className="text-brand-gold">da sua vida</span>
                </h3>
                <p className="mt-5 max-w-[280px] text-sm leading-relaxed text-white/80">
                  Para realizar um sonho, organizar as finanças ou investir no que importa de verdade — a Credifácil caminha com você.
                </p>

                <a
                  href="#solucoes"
                  className="btn-gold group/btn mt-6"
                >
                  Ver opções de empréstimo
                  <ChevronRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                </a>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-x-3 gap-y-3 border-t border-white/10 pt-5 text-[11px] sm:grid-cols-4">
                {purposes.map((p) => (
                  <div key={p.label} className="flex items-center gap-2">
                    <p.icon className="h-4 w-4 shrink-0 text-brand-gold" strokeWidth={2} />
                    <span className="whitespace-pre-line leading-tight text-white/85">
                      {p.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </article>

        </div>

        {/* Bottom golden CTA bar */}
        <div
          className="relative mt-8 flex flex-col items-stretch gap-5 overflow-hidden rounded-3xl px-6 py-5 shadow-[var(--shadow-gold)] md:flex-row md:items-center md:justify-between md:px-8"
          style={{
            background:
              "linear-gradient(100deg, hsl(42 78% 60% 0%, hsl(42 78% 60% 50%, hsl(42 78% 60% 100%)",
          }}
        >
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full opacity-40"
            style={{
              background:
                "radial-gradient(circle, hsl(42 78% 60% / 0.6, transparent 70%)",
            }}
            aria-hidden
          />
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-card text-foreground shadow-md">
              <MessageCircle className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <div className="font-display text-base font-bold text-foreground md:text-lg">
                Ficou com alguma dúvida?
              </div>
              <div className="text-xs text-foreground/75 md:text-sm">
                Nossa equipe está pronta para te ajudar!
              </div>
            </div>
          </div>

          <a
            href={telLink(site.contact.phone)}
            className="flex items-center gap-3 transition-opacity hover:opacity-80"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-card/70 text-foreground">
              <Phone className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <div className="text-[11px] font-medium text-foreground/70">Ligue para nós</div>
              <div className="text-sm font-bold text-foreground">{site.contact.phoneDisplay}</div>
            </div>
          </a>

          <a
            href={whatsappLink("Olá! Tenho dúvidas sobre os créditos.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            <MessageCircle className="h-4 w-4" />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
