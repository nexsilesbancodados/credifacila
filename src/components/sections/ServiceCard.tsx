import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  text: string;
  href: string;
  accent?: "royal" | "gold";
};

const ServiceCard = ({ icon: Icon, title, text, href, accent = "royal" }: Props) => (
  <Link to={href} className="card-soft group block p-7">
    <div
      className={`grid h-14 w-14 place-items-center rounded-2xl text-white shadow-lg transition-transform group-hover:scale-110 ${
        accent === "gold"
          ? "bg-gradient-to-br from-[hsl(var(--gold-soft))] to-[hsl(var(--gold))]"
          : "bg-gradient-to-br from-[hsl(var(--royal))] to-[hsl(var(--sky))]"
      }`}
    >
      <Icon className="h-7 w-7" />
    </div>
    <h3 className="mt-5 text-xl font-extrabold">{title}</h3>
    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[hsl(var(--royal))] transition-all group-hover:gap-3">
      Saiba mais <ArrowRight className="h-4 w-4" />
    </span>
  </Link>
);

export default ServiceCard;