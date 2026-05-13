import logo from "@/assets/credifacil-logo.png";
import { cn } from "@/lib/utils";

type Props = { className?: string; alt?: string; "aria-hidden"?: boolean };

const Logo = ({ className, alt = "Logo Credifácil", "aria-hidden": ariaHidden }: Props) => (
  <img 
    src={logo} 
    alt={ariaHidden ? "" : alt} 
    aria-hidden={ariaHidden}
    className={cn("h-10 w-auto select-none", className)} 
    draggable={false} 
  />
);

export default Logo;
