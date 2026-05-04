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
 
   const isHome = pathname === "/";
 
   return (
     <div 
       className={`fixed inset-x-0 top-0 z-[100] w-full transition-all duration-300 ${
         isScrolled 
           ? "bg-[hsl(0_0%_4%/0.96)] py-2 shadow-2xl md:py-3" 
           : "bg-transparent py-4 md:py-6"
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
          className="h-9 w-auto md:h-11"
          width={1795}
          height={605}
        />
      </Link>

      {/* Desktop menu */}
      <ul className="hidden flex-1 items-center justify-center gap-1 lg:flex">
        {navItems.map((item) => (
           <li key={item.label} className={`whitespace-nowrap ${item.submenu ? "group relative" : ""}`} data-anim="fade-down" style={{ "--anim-delay": `${0.05 * navItems.indexOf(item)}s` } as React.CSSProperties}>
            {item.submenu ? (
              <>
                <Link
                  to={item.href}
                  className="relative inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-[13px] font-medium uppercase tracking-[0.08em] text-white/70 transition-colors hover:text-brand-gold xl:text-[13.5px]"
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                </Link>
                <div className="invisible absolute left-1/2 top-full z-50 mt-2 w-72 -translate-x-1/2 translate-y-1 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="rounded-2xl border border-brand-gold/30 bg-[hsl(0_0%_6%/0.98)] p-2 shadow-[0_20px_60px_-15px_hsl(42_78%_50%/0.25)] backdrop-blur-xl">
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
                        className="block rounded-xl px-4 py-2.5 text-[14px] font-medium text-white/80 transition-all hover:bg-brand-gold/5 hover:pl-5 hover:text-brand-gold"
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
                className="relative rounded-full px-3.5 py-2 text-[13px] font-medium uppercase tracking-[0.08em] text-white/70 transition-colors hover:text-brand-gold xl:text-[13.5px]"
              >
                {item.label}
              </Link>
            ) : (
              <a
                href={item.href}
                className={`relative rounded-full px-3.5 py-2 text-[13px] font-medium uppercase tracking-[0.08em] transition-colors hover:text-brand-gold xl:text-[13.5px] ${
                  item.active ? "text-brand-gold" : "text-white/70"
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
       <div className="hidden items-center gap-3 lg:flex">
         <a
           href={whatsappLink("Olá! Quero saber mais sobre os créditos da Credifácil.")}
           target="_blank"
           rel="noopener noreferrer"
           className="group relative flex shrink-0 items-center gap-2.5 overflow-hidden whitespace-nowrap rounded-full px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.1em] text-[hsl(0_0%_6%)] shadow-[0_8px_24px_-8px_hsl(42_78%_55%/0.6)] transition-all hover:scale-[1.02] hover:shadow-[0_12px_32px_-8px_hsl(42_78%_55%/0.8)] active:scale-95"
           style={{
             background: "var(--gradient-gold)",
           }}
         >
           <MessageCircle className="h-4 w-4" strokeWidth={2.4} />
           WhatsApp
         </a>
           <Link
             to="/portal"
             className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.12em] text-white/85 transition-all hover:border-brand-gold/40 hover:bg-white/[0.06] hover:text-brand-gold"
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
