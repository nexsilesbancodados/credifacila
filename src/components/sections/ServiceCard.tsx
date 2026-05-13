import { memo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";
import OptimizedImage from "../OptimizedImage";

type Props = {
  icon: LucideIcon;
  title: string;
  text: string;
  href: string;
  accent?: "royal" | "gold";
  image?: string;
};

const ServiceCard = ({ icon: Icon, title, text, href, accent = "royal", image }: Props) => (
  <Link 
    to={href} 
    className="card-soft group flex flex-col h-full overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--gold-soft))]"
    aria-label={`Conhecer serviço: ${title}`}
  >
    {image && (
      <div className="relative h-48 w-full overflow-hidden">
        <OptimizedImage src={image} alt="" aria-hidden={true} className="h-full w-full transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent" />
        <div
          className={`absolute bottom-3 left-3 grid h-12 w-12 place-items-center rounded-2xl text-white shadow-lg ${
            accent === "gold"
              ? "bg-gradient-to-br from-[hsl(var(--gold-soft))] to-[hsl(var(--gold))]"
              : "bg-gradient-to-br from-[hsl(var(--royal))] to-[hsl(var(--sky))]"
          }`}
          aria-hidden="true"
        >
          <Icon className="h-6 w-6" />
        </div>
      </div>
    )}
    <div className="p-8 flex flex-col flex-1">
      {!image && (
        <div
          className={`mb-6 grid h-14 w-14 place-items-center rounded-2xl text-white shadow-lg transition-transform group-hover:scale-110 ${
            accent === "gold"
              ? "bg-gradient-to-br from-[hsl(var(--gold-soft))] to-[hsl(var(--gold))]"
              : "bg-gradient-to-br from-[hsl(var(--royal))] to-[hsl(var(--sky))]"
          }`}
          aria-hidden="true"
        >
          <Icon className="h-7 w-7" />
        </div>
      )}
       <h3 className="text-xl font-black text-white leading-tight">{title}</h3>
       <p className="mt-4 text-[15px] leading-relaxed text-white/60 font-medium">{text}</p>
      <div className="mt-auto pt-8">
        <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.15em] text-[hsl(var(--gold-soft))] transition-all group-hover:gap-4">
          Detalhes <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>
    </div>
  </Link>
);

export default memo(ServiceCard);
