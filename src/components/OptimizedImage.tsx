import { useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  aspectRatio?: string;
  "aria-hidden"?: boolean;
};

const OptimizedImage = ({ src, alt, className, priority = false, aspectRatio, "aria-hidden": ariaHidden }: Props) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div 
      className={cn(
        "relative overflow-hidden bg-white/5", 
        aspectRatio, 
        className
      )}
      aria-hidden={ariaHidden}
    >
      <img
        src={src}
        alt={ariaHidden ? "" : alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        onLoad={() => setLoaded(true)}
        className={cn(
          "h-full w-full object-cover transition-opacity duration-500",
          loaded ? "opacity-100" : "opacity-0"
        )}
      />
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-white/5" aria-hidden="true" />
      )}
    </div>
  );
};

export default OptimizedImage;
