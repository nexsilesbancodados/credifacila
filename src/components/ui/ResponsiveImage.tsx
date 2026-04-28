import { forwardRef, type ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  /** URL da variante full (default). Importe com `import x from "@/assets/foo.webp"`. */
  src: string;
  /** URL da variante média (1200px). Importe com `import x from "@/assets/foo-md.webp"`. */
  srcMd?: string;
  /** URL da variante pequena (640px). Importe com `import x from "@/assets/foo-sm.webp"`. */
  srcSm?: string;
  /** Atributo sizes — default cobre layout responsivo padrão. */
  sizes?: string;
};

/**
 * Componente <img> com srcset construído a partir de variantes WebP.
 * Use junto do script scripts/convert-images.mjs para gerar -sm e -md.
 *
 *  <ResponsiveImage
 *    src={hero}
 *    srcMd={heroMd}
 *    srcSm={heroSm}
 *    alt="..."
 *    sizes="(max-width: 768px) 100vw, 50vw"
 *  />
 */
export const ResponsiveImage = forwardRef<HTMLImageElement, Props>(
  ({ src, srcMd, srcSm, sizes, className, alt, ...rest }, ref) => {
    const srcSet = [
      srcSm && `${srcSm} 640w`,
      srcMd && `${srcMd} 1200w`,
      `${src} 1920w`,
    ]
      .filter(Boolean)
      .join(", ");

    return (
      <img
        ref={ref}
        src={src}
        srcSet={srcSet}
        sizes={sizes ?? "(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1280px"}
        alt={alt ?? ""}
        decoding="async"
        loading={rest.loading ?? "lazy"}
        className={cn(className)}
        {...rest}
      />
    );
  }
);
ResponsiveImage.displayName = "ResponsiveImage";
