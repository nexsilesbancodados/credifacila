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
  Quote,
  Phone,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import womanCoffee from "@/assets/woman-coffee.jpg";
import juliana from "@/assets/testimonial-juliana.jpg";
import carlos from "@/assets/testimonial-carlos.jpg";
import advantagesBg from "@/assets/card-advantages.jpg";
import storiesBg from "@/assets/card-stories.jpg";

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

const testimonials = [
  {
    text: "Consegui o crédito que precisava e fui muito bem atendida do início ao fim. Em menos de 24h o dinheiro estava na conta!",
    name: "Juliana S.",
    role: "São Paulo, SP",
    avatar: juliana,
    rating: 5,
  },
  {
    text: "Processo rápido, seguro e sem letras miúdas. As parcelas couberam direitinho no orçamento da família.",
    name: "Carlos M.",
    role: "Belo Horizonte, MG",
    avatar: carlos,
    rating: 5,
  },
];

const AdvantagesSection = () => {
  return (
    <section
      id="vantagens"
      className="relative w-full px-5 py-16 md:px-8 md:py-20 lg:px-10"
      aria-label="Vantagens, propósito e depoimentos"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center" data-anim="fade-up">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-gold/50 bg-white/80 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-gold shadow-sm backdrop-blur-sm">
            <Sparkles className="h-3 w-3" />
            Por que a Credifácil
          </span>
          <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-[hsl(30_20%_15%)] md:text-4xl lg:text-[46px]">
            Tudo que você precisa,{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-gold)" }}
            >
              em um só lugar
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[hsl(30_15%_30%)] md:text-base">
            Mais de <span className="font-bold text-[hsl(30_20%_15%)]">50 mil pessoas</span> já realizaram seus planos com a confiança e a agilidade da Credifácil.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3" data-anim-stagger>
          {/* CARD 1 — Vantagens */}
          <article className="group relative overflow-hidden rounded-3xl border border-white/8 text-white shadow-[var(--shadow-card)] transition-all hover:border-brand-gold/30">
            <img
              src={advantagesBg}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover object-center"
              loading="lazy"
              width={1024}
              height={1280}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, hsl(30 18% 7% / 0.92) 0%, hsl(30 18% 7% / 0.88) 60%, hsl(30 18% 7% / 0.96) 100%)",
              }}
              aria-hidden="true"
            />
            <div className="relative p-7">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-gold/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-gold">
              <ShieldCheck className="h-3 w-3" /> Diferenciais
            </span>
            <h3 className="mt-3 text-2xl font-bold leading-[1.15]">
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
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-brand-gold-foreground shadow-[0_4px_12px_-4px_hsl(var(--brand-gold)/0.5)] transition-transform group-hover/item:scale-110"
                    style={{ background: "var(--gradient-gold)" }}
                  >
                    <a.icon className="h-[18px] w-[18px]" strokeWidth={2.2} />
                  </div>
                  <div className="flex-1 leading-snug">
                    <div className="flex items-center gap-2">
                      <div className="text-sm font-bold">{a.title}</div>
                    </div>
                    <div className="mt-1 text-xs leading-relaxed text-white/60">{a.desc}</div>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href="#vantagens"
              className="group/cta mt-6 inline-flex items-center gap-1.5 border-b border-brand-gold/30 pb-1 text-sm font-semibold text-brand-gold transition-all hover:gap-2.5 hover:border-brand-gold"
            >
              Conhecer todas as vantagens
              <ChevronRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-1" />
            </a>
            </div>
          </article>

          {/* CARD 2 — Crédito para cada momento */}
          <article className="relative overflow-hidden rounded-3xl border border-white/8 bg-[hsl(var(--surface-elevated))] text-white shadow-[var(--shadow-card)] transition-all hover:border-brand-gold/30">
            <img
              src={womanCoffee}
              alt="Mulher sorrindo segurando uma xícara, cliente Credifácil"
              className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
              loading="lazy"
              width={1024}
              height={1280}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, hsl(30 18% 7% / 0.96) 0%, hsl(30 18% 7% / 0.85) 38%, hsl(30 18% 7% / 0.3) 70%, transparent 100%)",
              }}
              aria-hidden="true"
            />

            <div className="relative flex h-full flex-col justify-between p-7">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-gold/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-gold">
                  <Heart className="h-3 w-3 fill-brand-gold" /> Para sua vida
                </span>
                <h3 className="mt-3 text-2xl font-bold leading-[1.15]">
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
                  href="#emprestimos"
                  className="group/btn relative mt-6 inline-flex items-center gap-2 overflow-hidden rounded-xl bg-brand-gold px-5 py-3 text-sm font-semibold text-brand-gold-foreground shadow-[var(--shadow-gold)] transition-all hover:scale-[1.03] hover:brightness-110"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
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

          {/* CARD 3 — Histórias reais */}
          <article className="group relative overflow-hidden rounded-3xl border border-white/8 text-white shadow-[var(--shadow-card)] transition-all hover:border-brand-gold/30">
            <img
              src={storiesBg}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover object-center"
              loading="lazy"
              width={1024}
              height={1280}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, hsl(30 18% 7% / 0.93) 0%, hsl(30 18% 7% / 0.9) 60%, hsl(30 18% 7% / 0.96) 100%)",
              }}
              aria-hidden="true"
            />
            <div className="relative p-7">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-gold/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-gold">
              <Star className="h-3 w-3 fill-brand-gold" /> 4.9 / 5 — +12 mil avaliações
            </span>
            <h3 className="mt-3 text-2xl font-bold leading-[1.15]">
              Histórias reais,
              <br />
              <span className="text-brand-gold">resultados reais</span>
            </h3>

            <div className="mt-6 flex flex-col gap-4">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm transition-all hover:border-brand-gold/30 hover:bg-white/[0.05]"
                >
                  <div className="flex items-start gap-3">
                    <Quote className="h-4 w-4 shrink-0 text-brand-gold" />
                    <div className="flex-1">
                      <div className="mb-1.5 flex gap-0.5">
                        {Array.from({ length: t.rating }).map((_, idx) => (
                          <Star key={idx} className="h-3 w-3 fill-brand-gold text-brand-gold" />
                        ))}
                      </div>
                      <p className="text-xs leading-relaxed text-white/85">"{t.text}"</p>
                      <div className="mt-3 flex items-center justify-between gap-3">
                        <div className="leading-tight">
                          <div className="text-xs font-bold">{t.name}</div>
                          <div className="mt-0.5 text-[10px] text-white/50">{t.role}</div>
                        </div>
                        <img
                          src={t.avatar}
                          alt={`Foto de ${t.name}`}
                          className="h-12 w-12 rounded-full object-cover ring-1 ring-brand-gold/30"
                          loading="lazy"
                          width={512}
                          height={512}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#depoimentos"
              className="group/cta mt-5 inline-flex items-center gap-1.5 border-b border-brand-gold/30 pb-1 text-sm font-semibold text-brand-gold transition-all hover:gap-2.5 hover:border-brand-gold"
            >
              Veja mais histórias de clientes
              <ChevronRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-1" />
            </a>
            </div>
          </article>
        </div>

        {/* Bottom golden CTA bar */}
        <div
          className="relative mt-6 flex flex-col items-stretch gap-5 overflow-hidden rounded-3xl px-6 py-5 shadow-[var(--shadow-gold)] md:flex-row md:items-center md:justify-between md:px-8"
          style={{
            background:
              "linear-gradient(100deg, hsl(40 85% 88%) 0%, hsl(38 80% 78%) 50%, hsl(35 75% 70%) 100%)",
          }}
        >
          {/* Decorative blob */}
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full opacity-40"
            style={{
              background:
                "radial-gradient(circle, hsl(35 90% 60% / 0.6), transparent 70%)",
            }}
            aria-hidden="true"
          />
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[hsl(30_15%_15%)] shadow-md">
              <MessageCircle className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <div className="text-base font-bold text-[hsl(30_15%_15%)] md:text-lg">
                Ficou com alguma dúvida?
              </div>
              <div className="text-xs text-[hsl(30_15%_15%)]/75 md:text-sm">
                Nossa equipe está pronta para te ajudar!
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/70 text-[hsl(30_15%_15%)]">
              <Phone className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <div className="text-[11px] font-medium text-[hsl(30_15%_15%)]/70">Ligue para nós</div>
              <div className="text-sm font-bold text-[hsl(30_15%_15%)]">(11) 4000-1234</div>
            </div>
          </div>

          <a
            href="#whatsapp"
            className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold text-brand-gold-foreground shadow-[var(--shadow-gold)] transition-all hover:scale-[1.02] hover:brightness-110"
            style={{ background: "var(--gradient-gold)" }}
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