import { useState, useEffect } from "react";
 import { Link, useLocation } from "react-router-dom";
 import { ChevronDown, MessageCircle, ArrowRight } from "lucide-react";
import { whatsappLink } from "@/config/site";
import MobileNav from "@/components/MobileNav";
import logo from "@/assets/credifacil-logo.webp";

const navItems: {
  label: string;
  href: string;
  active?: boolean;
  submenu?: { label: string; href: string }[];
}[] = [
  { label: "Início", href: "/" },
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
   { label: "Invista Conosco", href: "/invista-conosco" },
   { label: "Blog", href: "/blog" },
  { label: "Dúvidas", href: "/perguntas-frequentes" },
];

 const TopNav = () => {
   const [isScrolled, setIsScrolled] = useState(false);
   const { pathname } = useLocation();
 
   useEffect(() => {
     const handleScroll = () => {
       setIsScrolled(window.scrollY > 40);
     };
     window.addEventListener("scroll", handleScroll, { passive: true });
     return () => window.removeEventListener("scroll", handleScroll);
   }, []);
 
   return (
     <div 
       className={`fixed inset-x-0 top-0 z-[100] w-full transition-all duration-300 ${
         isScrolled 
          ? "bg-white/95 py-2 shadow-lg backdrop-blur-md md:py-2.5"
          : "bg-white/80 py-3 backdrop-blur-sm md:py-3.5"
       }`}
     >
       {/* Top and Bottom lines with gold accent */}
       <div
         className={`pointer-events-none absolute inset-x-0 top-0 h-px transition-opacity duration-500 ${isScrolled ? "opacity-100" : "opacity-0"}`}
         style={{
           background: "linear-gradient(90deg, transparent 0%, hsl(42 78% 55% / 0.4) 50%, transparent 100%)",
         }}
         aria-hidden
       />
       <div
         className={`pointer-events-none absolute inset-x-0 bottom-0 h-px bg-brand-gold/10 transition-opacity duration-500 ${isScrolled ? "opacity-100" : "opacity-0"}`}
         aria-hidden
       />
 
       <nav className="relative mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-5 md:px-8 lg:gap-10 lg:px-10">
      <Link
        to="/"
        className="flex shrink-0 items-center transition-opacity hover:opacity-90"
        aria-label="Credifácil"
      >
        <img
          loading="eager"
          decoding="async"
          src={logo}
          alt="Credifácil"
          className="h-7 w-auto md:h-8"
          width={1795}
          height={605}
        />
      </Link>

      {/* Desktop menu */}
      <ul className="hidden flex-1 items-center justify-center gap-0.5 lg:flex">
        {navItems.map((item) => (
           <li key={item.label} className={`whitespace-nowrap ${item.submenu ? "group relative" : ""}`} data-anim="fade-down" style={{ "--anim-delay": `${0.05 * navItems.indexOf(item)}s` } as React.CSSProperties}>
            {item.submenu ? (
              <>
                <Link
                  to={item.href}
                  className={`relative inline-flex items-center gap-1 rounded-full px-3 py-2 text-[14px] font-medium tracking-normal transition-colors hover:text-brand-gold ${
                    pathname.startsWith(item.href) ? "text-brand-gold" : "text-foreground/85"
                  }`}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                  {pathname.startsWith(item.href) && (
                    <span className="absolute -bottom-1 left-1/2 h-[2px] w-6 -translate-x-1/2 rounded-full bg-brand-gold" />
                  )}
                </Link>
                <div className="invisible absolute left-1/2 top-full z-50 mt-2 w-72 -translate-x-1/2 translate-y-1 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="rounded-2xl border border-brand-gold/30 bg-white p-2 shadow-[0_20px_60px_-15px_hsl(218_90%_48%/0.25)] backdrop-blur-xl">
                    <Link
                      to={item.href}
                      className="block rounded-xl px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-gold transition-colors hover:bg-brand-gold/10"
                    >
                      Visão geral
                    </Link>
                    <div className="my-1 h-px bg-brand-gold/15" />
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.href}
                        to={sub.href}
                        className="block rounded-xl px-4 py-2.5 text-[14px] font-medium text-foreground/80 transition-all hover:bg-brand-gold/5 hover:pl-5 hover:text-brand-gold"
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
                className={`relative inline-flex items-center rounded-full px-3 py-2 text-[14px] font-medium tracking-normal transition-colors hover:text-brand-gold ${
                  pathname === item.href ? "text-brand-gold" : "text-foreground/85"
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <span className="absolute -bottom-1 left-1/2 h-[2px] w-6 -translate-x-1/2 rounded-full bg-brand-gold" />
                )}
              </Link>
            ) : (
              <a
                href={item.href}
                className={`relative rounded-full px-3 py-2 text-[14px] font-medium tracking-normal transition-colors hover:text-brand-gold ${
                  item.active ? "text-brand-gold" : "text-foreground/85"
                }`}
              >
                {item.label}
                {item.active && (
                  <span
                    className="absolute -bottom-1 left-1/2 h-[2px] w-6 -translate-x-1/2 rounded-full"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, hsl(42 78% 55%), transparent)",
                      boxShadow: "0 0 8px hsl(42 78% 55% / 0.6)",
                    }}
                  />
                )}
              </a>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <MobileNav />

       {/* Desktop CTA */}
       <div className="hidden items-center gap-2.5 lg:flex">
         <a
           href={whatsappLink("Olá! Quero saber mais sobre os créditos da Credifácil.")}
           target="_blank"
           rel="noopener noreferrer"
           className="group inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-brand-gold/50 bg-transparent px-4 py-2 text-[13px] font-medium text-foreground transition-all hover:border-brand-gold hover:bg-brand-gold/10 hover:text-brand-gold"
         >
           <MessageCircle className="h-4 w-4 text-brand-gold" strokeWidth={2.2} />
           Fale no WhatsApp
         </a>
            <Link
              to="/portal-cliente"
              className="group inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-semibold text-[hsl(0_0%_6%)] shadow-[0_8px_20px_-8px_hsl(42_78%_55%/0.55)] transition-all hover:scale-[1.02] active:scale-95"
              style={{ background: "var(--gradient-gold)" }}
            >
              Área do Cliente
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
       </div>
     </nav>
   </div>
   );
 };

export default TopNav;
