import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  text: string;
  href: string;
  accent?: "royal" | "gold";
  image?: string;
};

const ServiceCard = ({ icon: Icon, title, text, href, accent = "royal", image }: Props) => (
  <Link to={href} className="card-soft group block overflow-hidden">
    {image && (
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,85%,15%)]/60 via-transparent to-transparent" />
        <div
          className={`absolute bottom-3 left-3 grid h-12 w-12 place-items-center rounded-2xl text-white shadow-lg ${
            accent === "gold"
              ? "bg-gradient-to-br from-[hsl(var(--gold-soft))] to-[hsl(var(--gold))]"
              : "bg-gradient-to-br from-[hsl(var(--royal))] to-[hsl(var(--sky))]"
          }`}
        >
          <Icon className="h-6 w-6" />
        </div>
      </div>
    )}
    <div className="p-7">
      {!image && (
        <div
          className={`grid h-14 w-14 place-items-center rounded-2xl text-white shadow-lg transition-transform group-hover:scale-110 ${
            accent === "gold"
              ? "bg-gradient-to-br from-[hsl(var(--gold-soft))] to-[hsl(var(--gold))]"
              : "bg-gradient-to-br from-[hsl(var(--royal))] to-[hsl(var(--sky))]"
          }`}
        >
          <Icon className="h-7 w-7" />
        </div>
      )}
      <h3 className={`${image ? "" : "mt-5"} text-xl font-extrabold`}>{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[hsl(var(--royal))] transition-all group-hover:gap-3">
        Saiba mais <ArrowRight className="h-4 w-4" />
      </span>
    </div>
  </Link>
);

export default ServiceCard;