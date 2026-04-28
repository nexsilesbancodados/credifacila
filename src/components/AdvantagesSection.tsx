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
} from "lucide-react";
import womanCoffee from "@/assets/woman-coffee.jpg";
import juliana from "@/assets/testimonial-juliana.jpg";
import carlos from "@/assets/testimonial-carlos.jpg";

const advantages = [
  { icon: Clock, title: "Liberação rápida", desc: "Dinheiro na sua conta em pouco tempo." },
  { icon: Lock, title: "Segurança total", desc: "Seus dados protegidos com tecnologia avançada." },
  { icon: Percent, title: "Taxas justas", desc: "Condições competitivas que cabem no seu bolso." },
  { icon: UserRound, title: "Atendimento humanizado", desc: "Fale com pessoas reais, que entendem você." },
];

const purposes = [
  { icon: Star, label: "Realize\nsonhos" },
  { icon: Coins, label: "Quite\ndívidas" },
  { icon: TrendingUp, label: "Invista no\nseu futuro" },
  { icon: Heart, label: "Tenha mais\ntranquilidade" },
];

const testimonials = [
  {
    text: "Consegui o crédito que precisava e fui muito bem atendida do início ao fim. Super recomendo!",
    name: "Juliana S.",
    role: "Cliente Credifácil",
    avatar: juliana,
  },
  {
    text: "Processo rápido, seguro e com condições que cabem no bolso. Me ajudou muito!",
    name: "Carlos M.",
    role: "Cliente Credifácil",
    avatar: carlos,
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
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* CARD 1 — Vantagens */}
          <article className="rounded-3xl border border-white/5 bg-[hsl(30_12%_12%)] p-7 text-[hsl(40_30%_97%)] shadow-[var(--shadow-card)]">
            <h3 className="text-2xl font-bold leading-tight">
              Vantagens que
              <br />
              fazem <span className="text-brand-gold">a diferença</span>
            </h3>

            <ul className="mt-6 flex flex-col">
              {advantages.map((a, i) => (
                <li
                  key={a.title}
                  className={`flex items-start gap-4 py-4 ${
                    i < advantages.length - 1 ? "border-b border-white/8" : ""
                  }`}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-gold/40 text-brand-gold">
                    <a.icon className="h-4 w-4" strokeWidth={2} />
                  </div>
                  <div className="leading-snug">
                    <div className="text-sm font-bold">{a.title}</div>
                    <div className="mt-1 text-xs text-white/60">{a.desc}</div>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href="#vantagens"
              className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-gold transition-all hover:gap-2.5"
            >
              Quero conhecer todas as vantagens
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </article>

          {/* CARD 2 — Crédito para cada momento */}
          <article className="relative overflow-hidden rounded-3xl border border-white/5 bg-[hsl(30_12%_12%)] text-[hsl(40_30%_97%)] shadow-[var(--shadow-card)]">
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
                  "linear-gradient(90deg, hsl(30 15% 8% / 0.95) 0%, hsl(30 15% 8% / 0.82) 35%, hsl(30 15% 8% / 0.25) 65%, transparent 100%)",
              }}
              aria-hidden="true"
            />

            <div className="relative flex h-full flex-col justify-between p-7">
              <div>
                <h3 className="text-2xl font-bold leading-tight">
                  Crédito para
                  <br />
                  <span className="text-brand-gold">cada momento</span>
                  <br />
                  <span className="text-brand-gold">da sua vida</span>
                </h3>
                <p className="mt-5 max-w-[260px] text-sm leading-relaxed text-white/75">
                  Seja para realizar um sonho, organizar as finanças ou investir no que realmente importa, a Credifácil está com você.
                </p>

                <a
                  href="#emprestimos"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand-gold px-5 py-3 text-sm font-semibold text-brand-gold-foreground shadow-[var(--shadow-gold)] transition-all hover:scale-[1.03] hover:brightness-110"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  Ver opções de empréstimo
                  <ChevronRight className="h-4 w-4" />
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
          <article className="rounded-3xl border border-white/5 bg-[hsl(30_12%_12%)] p-7 text-[hsl(40_30%_97%)] shadow-[var(--shadow-card)]">
            <h3 className="text-2xl font-bold leading-tight">
              Histórias reais,
              <br />
              <span className="text-brand-gold">resultados reais</span>
            </h3>

            <div className="mt-6 flex flex-col gap-4">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="rounded-2xl border border-white/8 bg-white/[0.02] p-4"
                >
                  <div className="flex items-start gap-3">
                    <Quote className="h-4 w-4 shrink-0 text-brand-gold" />
                    <div className="flex-1">
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
              className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-gold transition-all hover:gap-2.5"
            >
              Veja mais histórias de clientes
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </article>
        </div>

        {/* Bottom golden CTA bar */}
        <div
          className="mt-6 flex flex-col items-stretch gap-5 rounded-3xl px-6 py-5 md:flex-row md:items-center md:justify-between md:px-8"
          style={{
            background:
              "linear-gradient(90deg, hsl(40 80% 88%) 0%, hsl(40 75% 80%) 100%)",
          }}
        >
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