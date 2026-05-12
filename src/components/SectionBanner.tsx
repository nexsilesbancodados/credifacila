import { cn } from "@/lib/utils";

type Props = {
  image: string;
  alt: string;
  className?: string;
  heightClassName?: string;
};

const SectionBanner = ({ image, alt, className, heightClassName = "h-[240px] md:h-[300px] lg:h-[340px]" }: Props) => (
  <section className={cn("container-x py-6 md:py-8", className)}>
    <div className={cn("relative overflow-hidden rounded-[28px] border border-white/10 shadow-[var(--shadow-elev)]", heightClassName)}>
      <img src={image} alt={alt} loading="lazy" className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,85%,15%)]/30 via-transparent to-[hsl(220,85%,15%)]/20" />
    </div>
  </section>
);

export default SectionBanner;