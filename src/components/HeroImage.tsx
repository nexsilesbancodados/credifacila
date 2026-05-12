import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  className?: string;
  withLogo?: boolean;
};

/**
 * Hero image wrapper with premium glow and rounded frame.
 * Use `withLogo` to overlay the official Credifácil logo on the chest area
 * (for team / consultant photos with empty uniform).
 */
const HeroImage = ({ src, alt, className, withLogo }: Props) => (
  <div className={cn("relative mx-auto w-full max-w-xl", className)}>
    <div className="absolute -inset-6 rounded-[2rem] bg-[hsl(var(--royal))/0.35] blur-3xl" />
    <div className="absolute -inset-3 rounded-[2rem] bg-[hsl(var(--gold))/0.18] blur-2xl" />
    <div className="relative overflow-hidden rounded-3xl border border-white/15 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55)]">
      <img src={src} alt={alt} loading="lazy" className="block h-full w-full object-cover" />
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