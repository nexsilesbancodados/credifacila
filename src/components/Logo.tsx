import logo from "@/assets/credifacil-logo.png";
import { cn } from "@/lib/utils";

type Props = { className?: string; alt?: string };

const Logo = ({ className, alt = "Credifácil" }: Props) => (
  <img src={logo} alt={alt} className={cn("h-10 w-auto select-none", className)} draggable={false} />
);

export default Logo;