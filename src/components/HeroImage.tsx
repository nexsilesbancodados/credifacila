import { cn } from "@/lib/utils";
import OptimizedImage from "./OptimizedImage";

type Props = {
  src: string;
  alt: string;
  className?: string;
  withLogo?: boolean;
  priority?: boolean;
};

const HeroImage = ({ src, alt, className, withLogo, priority = false }: Props) => (
  <div className={cn("relative mx-auto w-full max-w-xl", className)}>
    <div className="absolute -inset-6 rounded-[2rem] bg-[hsl(var(--royal))/0.35] blur-3xl" />
    <div className="absolute -inset-3 rounded-[2rem] bg-[hsl(var(--gold))/0.18] blur-2xl" />
    <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
      <OptimizedImage 
        src={src} 
        alt={alt} 
        priority={priority}
        className="block h-full w-full object-cover" 
      />
      {withLogo && (
        <img
          src={new URL("../assets/credifacil-logo.png", import.meta.url).href}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-[18%] top-[58%] w-12 -translate-x-1/2 opacity-95 drop-shadow-md md:w-14"
        />
      )}
    </div>
  </div>
);

export default HeroImage;
