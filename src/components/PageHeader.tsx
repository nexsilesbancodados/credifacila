import { ReactNode, memo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  right?: ReactNode;
  bgImage?: string;
  className?: string;
};

const PageHeader = ({ eyebrow, title, subtitle, primaryCta, secondaryCta, right, bgImage, className }: Props) => (
  <section className={cn("relative overflow-hidden", className)}>
    {bgImage ? (
      <img
        src={bgImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover brightness-[0.25]"
      />
    ) : (
      <div className="absolute inset-0 bg-mesh-blue" aria-hidden="true" />
    )}
    <div className="blob -left-16 top-20 h-80 w-80 anim-floaty" style={{ background: "hsl(202 100% 56% / 0.55)" }} aria-hidden="true" />
    <div className="blob right-0 bottom-0 h-96 w-96 anim-floaty" style={{ background: "hsl(40 78% 48% / 0.35)", animationDelay: "2s" }} aria-hidden="true" />
    
    <div className="container-x relative grid items-center gap-12 py-12 md:py-24 lg:grid-cols-2">
      <div className="text-white">
        {eyebrow && (
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/60 mb-6">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 text-3xl font-black leading-[1.1] sm:text-4xl md:text-5xl lg:text-7xl tracking-tighter">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-xl text-lg text-white/60 md:text-xl leading-relaxed">
            {subtitle}
          </p>
        )}
        {(primaryCta || secondaryCta) && (
          <div className="mt-10 flex flex-wrap gap-4">
            {primaryCta && (
              <Link to={primaryCta.href} className="btn-gold w-full sm:w-auto">
                {primaryCta.label} <ArrowRight className="h-4 w-4 ml-2" aria-hidden="true" />
              </Link>
            )}
            {secondaryCta && (
              <Link to={secondaryCta.href} className="btn-outline-white w-full sm:w-auto">
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
      {right && <div className="relative">{right}</div>}
    </div>
  </section>
);

export default memo(PageHeader);
