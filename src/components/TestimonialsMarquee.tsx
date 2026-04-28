import { Quote, Star } from "lucide-react";

export interface MarqueeTestimonial {
  initials: string;
  name: string;
  meta: string;
  text: string;
  rating?: number;
  /** Optional avatar image URL. If omitted, a deterministic photo is generated from the name. */
  avatar?: string;
}

interface Props {
  eyebrow?: string;
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
  testimonials: MarqueeTestimonial[];
  /** Variant changes background tone */
  variant?: "light" | "dark";
}

const Card = ({ t }: { t: MarqueeTestimonial }) => {
  const rating = t.rating ?? 5;
  // Deterministic avatar from name when none provided (real-looking photos)
  const seed = encodeURIComponent(t.name.trim().toLowerCase());
  const avatarUrl = t.avatar ?? `https://i.pravatar.cc/120?u=${seed}`;
  return (
    <article className="group relative w-full shrink-0 rounded-2xl border border-foreground/8 bg-white p-5 shadow-[0_10px_30px_-15px_hsl(30_30%_4%/0.18)] transition-all hover:-translate-y-0.5 hover:border-brand-gold/40 hover:shadow-[0_18px_40px_-15px_hsl(30_30%_4%/0.28)]">
      <div className="flex items-start justify-between gap-3">
        <Quote className="h-5 w-5 shrink-0 text-brand-gold" />
        <div className="flex">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-3 w-3 fill-brand-gold text-brand-gold" />
          ))}
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-foreground/82">
        "{t.text}"
      </p>
      <div className="mt-4 flex items-center gap-3 border-t border-foreground/10 pt-3">
        <span
          className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full text-[11px] font-bold text-white ring-2 ring-brand-gold/30"
          style={{ background: "var(--gradient-gold)" }}
          aria-hidden
        >
          {/* Initials sit underneath as fallback if image fails to load */}
          <span className="absolute inset-0 flex items-center justify-center">
            {t.initials}
          </span>
          <img
            src={avatarUrl}
            alt=""
            loading="lazy"
            className="relative h-full w-full object-cover"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
        </span>
        <div className="leading-tight">
          <div className="text-xs font-bold text-foreground">{t.name}</div>
          <div className="text-[10px] text-foreground/65">{t.meta}</div>
        </div>
      </div>
    </article>
  );
};

const Column = ({
  items,
  direction,
  duration,
}: {
  items: MarqueeTestimonial[];
  direction: "up" | "down";
  duration: number;
}) => {
  // duplicate items for seamless loop
  const loop = [...items, ...items];
  const animClass = direction === "up" ? "animate-marquee-up" : "animate-marquee-down";
  return (
    <div className="relative h-[520px] overflow-hidden">
      <div
        className={`flex flex-col gap-4 ${animClass}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {loop.map((t, i) => (
          <Card key={`${t.name}-${i}`} t={t} />
        ))}
      </div>
      {/* top + bottom fades */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-20"
        style={{
          background:
            "linear-gradient(180deg, hsl(220 16% 98%) 0%, hsl(220 16% 98% / 0) 100%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-20"
        style={{
          background:
            "linear-gradient(0deg, hsl(220 16% 98%) 0%, hsl(220 16% 98% / 0) 100%)",
        }}
        aria-hidden
      />
    </div>
  );
};

const TestimonialsMarquee = ({
  eyebrow = "Quem confia",
  title = "Histórias reais",
  titleHighlight = "de quem escolheu a Credifácil",
  subtitle,
  testimonials,
  variant = "light",
}: Props) => {
  // split into two columns
  const mid = Math.ceil(testimonials.length / 2);
  const colA = testimonials.slice(0, mid);
  const colB = testimonials.slice(mid).concat(testimonials.slice(0, Math.max(0, mid - (testimonials.length - mid))));
  // ensure both columns have at least 3 items
  const ensure = (arr: MarqueeTestimonial[]) =>
    arr.length >= 3 ? arr : [...arr, ...testimonials].slice(0, Math.max(3, arr.length));
  const left = ensure(colA);
  const right = ensure(colB);

  const isDark = variant === "dark";

  return (
    <section
      className={`relative w-full px-5 py-20 md:px-8 md:py-24 lg:px-10 ${
        isDark ? "bg-[hsl(220_16%_6%)] text-white" : ""
      }`}
      aria-label="Depoimentos de clientes"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        {/* Left: heading */}
        <div data-anim="fade-right">
          <span className={isDark ? "pill-eyebrow-dark" : "pill-eyebrow"}>
            <Star className="h-3 w-3 fill-current" />
            {eyebrow}
          </span>
          <h2
            className={`font-display text-3xl font-bold leading-[1.1] tracking-tight md:text-4xl lg:text-[44px] ${
              isDark ? "text-white" : "text-[hsl(220_16%_15%)]"
            }`}
          >
            {title}{" "}
            <span className="text-gold-gradient">{titleHighlight}</span>
          </h2>
          {subtitle && (
            <p
              className={`mt-4 max-w-md text-sm leading-relaxed md:text-base ${
                isDark ? "text-white/75" : "text-[hsl(220_15%_30%)]"
              }`}
            >
              {subtitle}
            </p>
          )}
          <div className="mt-6 flex items-center gap-3">
            <div className="flex">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-5 w-5 fill-brand-gold text-brand-gold" />
              ))}
            </div>
            <div
              className={`text-sm font-bold ${
                isDark ? "text-white" : "text-foreground"
              }`}
            >
              4,9 / 5,0
            </div>
            <div
              className={`text-xs ${
                isDark ? "text-white/65" : "text-foreground/65"
              }`}
            >
              · Avaliação média de clientes
            </div>
          </div>
        </div>

        {/* Right: marquee columns */}
        <div className="grid grid-cols-2 gap-4">
          <Column items={left} direction="up" duration={28} />
          <Column items={right} direction="down" duration={32} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsMarquee;
