import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Logo from "./Logo";

type Props = { title: string; subtitle?: string; cta: string; href?: string };

const CTASection = ({ title, subtitle, cta, href = "/contato" }: Props) => (
  <section className="container-x my-24">
    <div className="relative overflow-hidden rounded-3xl bg-mesh-blue p-10 md:p-16">
      <div className="blob -right-10 -top-10 h-72 w-72" style={{ background: "hsl(40 78% 48% / 0.5)" }} />
      <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
        <div>
           <h3 className="text-3xl font-black leading-tight text-white md:text-5xl tracking-tighter">{title}</h3>
           {subtitle && <p className="mt-6 max-w-xl text-lg text-white/70 leading-relaxed">{subtitle}</p>}
        </div>
        <div className="flex flex-col items-stretch gap-6 sm:flex-row lg:flex-col lg:items-end">
          <div className="rounded-2xl bg-white/95 px-4 py-2.5">
            <Logo className="h-8" />
          </div>
           <Link to={href} className="btn-gold py-4 px-8 text-lg">
            {cta} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;