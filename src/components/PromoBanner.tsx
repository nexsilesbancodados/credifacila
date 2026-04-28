import { ArrowRight, Sparkles } from "lucide-react";
import bannerImg from "@/assets/banner-promo.webp";

export interface PromoBannerProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  ctaLabel: string;
  ctaHref: string;
  ctaTarget?: "_blank" | "_self";
}

const PromoBanner = ({
  eyebrow = "Oferta exclusiva",
  title,
  highlight,
  description,
  ctaLabel,
  ctaHref,
  ctaTarget = "_blank",
}: PromoBannerProps) => {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div
          data-anim="fade-up"
          className="glow-gold-hover relative overflow-hidden rounded-[28px] ring-1 ring-brand-gold/20 shadow-[var(--shadow-card)]"
        >
          {/* Background image with parallax */}
          <div data-parallax="0.1" className="absolute inset-0 -top-10 -bottom-10">
            <img
              src={bannerImg}
              alt=""
              loading="lazy"
              decoding="async"
              width={1920}
              height={640}
              className="h-full w-full scale-110 object-cover"
              aria-hidden
            />
          </div>
          {/* Dark gradient overlay */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, hsl(215 48% 16% / 0.94) 0%, hsl(215 48% 16% / 0.82) 45%, hsl(215 48% 16% / 0.55) 100%)",
            }}
            aria-hidden
          />
          {/* Gold glow accent */}
          <div
            className="pointer-events-none absolute -right-32 -top-20 h-[420px] w-[420px] opacity-50"
            style={{
              background:
                "radial-gradient(ellipse at center, hsl(199 85% 58% / 0.45), transparent 65%)",
            }}
            aria-hidden
          />
          {/* Top gold line */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-gold to-transparent"
            aria-hidden
          />

          <div className="relative grid grid-cols-1 items-center gap-8 px-7 py-10 md:grid-cols-[1.4fr_auto] md:gap-10 md:px-12 md:py-14">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-brand-gold/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-gold backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5" />
                {eyebrow}
              </span>
              <h3 className="mt-5 font-display text-[28px] font-extrabold leading-[1.1] tracking-tight text-white md:text-[40px]">
                {title}
                {highlight && (
                  <>
                    {" "}
                    <span className="text-gold-gradient">{highlight}</span>
                  </>
                )}
              </h3>
              {description && (
                <p className="mt-4 max-w-xl text-[14px] leading-relaxed text-white/80 md:text-[16px]">
                  {description}
                </p>
              )}
            </div>
            <a
              href={ctaHref}
              target={ctaTarget}
              rel={ctaTarget === "_blank" ? "noopener noreferrer" : undefined}
              className="btn-gold group inline-flex w-full justify-center md:w-auto"
            >
              {ctaLabel}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;