import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-credifacil.png";

const navItems = [
  { label: "Início", href: "#inicio", active: true },
  { label: "Empréstimos", href: "#emprestimos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Sobre nós", href: "#sobre" },
  { label: "Dúvidas", href: "#duvidas" },
  { label: "Fale conosco", href: "#contato" },
];

const Header = () => {
  return (
    <header
      className="relative w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
      aria-label="Cabeçalho Credifácil"
    >
      {/* Top navigation */}
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight text-foreground">
            <span className="text-brand-gold">C</span>redifácil
          </span>
        </div>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`relative text-sm font-medium transition-colors hover:text-brand-gold ${
                  item.active ? "text-brand-gold" : "text-foreground/90"
                }`}
              >
                {item.label}
                {item.active && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-brand-gold" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#whatsapp"
          className="flex items-center gap-2 rounded-full border border-foreground/30 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-brand-gold hover:text-brand-gold"
        >
          <MessageCircle className="h-4 w-4" />
          Fale no WhatsApp
        </a>
      </nav>

      {/* Spacer to preserve the image's hero area height */}
      <div className="h-[480px] md:h-[560px]" aria-hidden="true" />
    </header>
  );
};

export default Header;