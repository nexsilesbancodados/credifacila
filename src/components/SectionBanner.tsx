import { cn } from "@/lib/utils";
import OptimizedImage from "./OptimizedImage";

type Props = {
  image: string;
  alt: string;
  className?: string;
  heightClassName?: string;
};

const SectionBanner = ({ image, alt, className, heightClassName = "h-[240px] md:h-[300px] lg:h-[340px]" }: Props) => (
  <section className={cn("container-x py-10 md:py-16", className)}>
    <div className={cn("relative overflow-hidden rounded-[3rem] border border-white/10 shadow-2xl", heightClassName)}>
      <OptimizedImage 
        src={image} 
        alt={alt} 
        className="h-full w-full object-cover" 
      />
      <div className="absolute inset-0 bg-gradient-to-r from-midnight/40 via-transparent to-midnight/20" />
    </div>
  </section>
);

export default SectionBanner;
