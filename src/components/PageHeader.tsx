import { ReactNode } from "react";
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
      <>
        <img
          src={bgImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[hsl(220,85%,15%)]/80" />
        <div className="bg-grid-blue absolute inset-0 opacity-30" />
      </>
    ) : (
      <>
        <div className="absolute inset-0 bg-mesh-blue" />
        <div className="bg-grid-blue absolute inset-0 opacity-40" />
      </>
    )}
    <div className="blob -left-16 top-20 h-80 w-80 anim-floaty" style={{ background: "hsl(202 100% 56% / 0.55)" }} />
    <div className="blob right-0 bottom-0 h-96 w-96 anim-floaty" style={{ background: "hsl(40 78% 48% / 0.35)", animationDelay: "2s" }} />
    <div className="container-x relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2">
      <div className="text-white">
        {eyebrow && <span className="pill-light">{eyebrow}</span>}
        <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] md:text-5xl lg:text-6xl">{title}</h1>
        {subtitle && <p className="mt-5 max-w-xl text-base text-white/80 md:text-lg">{subtitle}</p>}
        {(primaryCta || secondaryCta) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {primaryCta && (
              <Link to={primaryCta.href} className="btn-gold">
                {primaryCta.label} <ArrowRight className="h-4 w-4" />
              </Link>
            )}
            {secondaryCta && (
              <Link to={secondaryCta.href} className="btn-ghost">{secondaryCta.label}</Link>
            )}
          </div>
        )}
      </div>
      {right && <div className="relative">{right}</div>}
    </div>
  </section>
);

export default PageHeader;