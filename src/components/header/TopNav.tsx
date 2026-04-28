import { Link } from "react-router-dom";
import { ChevronDown, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/config/site";
import MobileNav from "@/components/MobileNav";
import logo from "@/assets/credifacil-logo.webp";

const navItems: {
  label: string;
  href: string;
  active?: boolean;
  submenu?: { label: string; href: string }[];
}[] = [
  { label: "Início", href: "#inicio", active: true },
  { label: "Consignado", href: "/consignado" },
  {
    label: "Securitizadora",
    href: "/securitizadora",
    submenu: [
      { label: "Antecipação de Recebíveis", href: "/securitizadora/antecipacao-de-recebiveis" },
      { label: "Boleto Garantido", href: "/securitizadora/boleto-garantido" },
      { label: "Conta Digital Luri", href: "/securitizadora/conta-digital-luri" },
    ],
  },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Sobre nós", href: "#sobre" },
  { label: "Invista Conosco", href: "/invista-conosco" },
  { label: "Dúvidas", href: "/perguntas-frequentes" },
];

const TopNav = () => (
  <div className="relative z-20 w-full bg-[hsl(215_48%_16%)]">
    {/* Top + bottom gold curves */}
    <svg
      className="pointer-events-none absolute -top-px left-0 h-2 w-full"
      viewBox="0 0 1440 8"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path d="M0,0 L1440,0 L1440,2 Q720,10 0,2 Z" fill="hsl(199 90% 50%)" />
    </svg>
    <svg
      className="pointer-events-none absolute -bottom-px left-0 h-4 w-full"
      viewBox="0 0 1440 16"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path d="M0,16 L1440,16 L1440,8 Q720,-6 0,8 Z" fill="hsl(199 90% 50%)" />
    </svg>

    <nav className="relative flex w-full items-center justify-between px-5 py-3.5 md:px-8 md:py-4 lg:px-12">
      <Link
        to="/"
        className="flex items-center transition-opacity hover:opacity-90"
        aria-label="Credifácil"
      >
        <img
          loading="eager"
          decoding="async"
          src={logo}
          alt="Credifácil"
          className="h-9 w-auto md:h-11"
          width={1795}
          height={605}
        />
      </Link>

      {/* Desktop menu */}
      <ul className="hidden items-center gap-9 lg:flex">
        {navItems.map((item) => (
          <li key={item.label} className={item.submenu ? "group relative" : ""}>
            {item.submenu ? (
              <>
                <Link
                  to={item.href}
                  className="relative inline-flex items-center gap-1 text-[15px] font-medium text-white/85 transition-colors hover:text-brand-gold"
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                </Link>
                <div className="invisible absolute left-1/2 top-full z-50 mt-3 w-72 -translate-x-1/2 translate-y-1 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="rounded-2xl border border-brand-gold/30 bg-[hsl(215_42%_20%)]/95 p-2 shadow-2xl backdrop-blur-xl">
                    <Link
                      to={item.href}
                      className="block rounded-xl px-4 py-2.5 text-[13px] font-semibold uppercase tracking-wider text-brand-gold transition-colors hover:bg-brand-gold/10"
                    >
                      Visão geral
                    </Link>
                    <div className="my-1 h-px bg-white/10" />
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.href}
                        to={sub.href}
                        className="block rounded-xl px-4 py-2.5 text-[14px] font-medium text-white/85 transition-all hover:bg-white/5 hover:pl-5 hover:text-brand-gold"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </>
            ) : item.href.startsWith("/") ? (
              <Link
                to={item.href}
                className="relative text-[15px] font-medium text-white/85 transition-colors hover:text-brand-gold"
              >
                {item.label}
              </Link>
            ) : (
              <a
                href={item.href}
                className={`relative text-[15px] font-medium transition-colors hover:text-brand-gold ${
                  item.active ? "text-brand-gold" : "text-white/85"
                }`}
              >
                {item.label}
                {item.active && (
                  <span className="absolute -bottom-2 left-1/2 h-[2px] w-8 -translate-x-1/2 rounded-full bg-brand-gold" />
                )}
              </a>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <MobileNav />

      {/* Desktop WhatsApp button */}
      <a
        href={whatsappLink("Olá! Quero saber mais sobre os créditos da Credifácil.")}
        target="_blank"
        rel="noopener noreferrer"
        className="group hidden items-center gap-2.5 rounded-full border border-brand-gold/80 py-2 pl-2 pr-5 text-sm font-semibold text-white transition-all hover:border-brand-gold hover:bg-brand-gold/15 hover:text-brand-gold lg:flex"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-brand-gold/80 transition-colors group-hover:bg-brand-gold/20">
          <MessageCircle className="h-4 w-4 text-brand-gold" />
        </span>
        Fale no WhatsApp
      </a>
    </nav>
  </div>
);

export default TopNav;
