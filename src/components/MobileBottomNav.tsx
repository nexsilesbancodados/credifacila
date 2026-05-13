import { memo } from "react";
import { NavLink } from "react-router-dom";
import { Home, Wallet, MessageCircle, BookOpen, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE } from "@/data/site";

const items = [
  { to: "/", I: Home, label: "Início" },
  { to: "/consignado", I: Wallet, label: "Crédito" },
  { to: "/blog", I: BookOpen, label: "Blog" },
  { to: "/duvidas", I: HelpCircle, label: "Dúvidas" },
];

const MobileBottomNav = () => (
  <>
    <nav 
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-white/5 bg-midnight/80 backdrop-blur-xl text-white lg:hidden pb-safe"
      aria-label="Navegação móvel inferior"
    >
      <div className="grid grid-cols-5 h-16">
        {items.map(({ to, I, label }) => (
          <NavLink
            key={to}
            to={to}
            end
            className={({ isActive }) =>
              cn(
                "flex flex-col items-center justify-center gap-1 transition-all active:scale-95 outline-none focus-visible:bg-white/5",
                isActive ? "text-[hsl(var(--gold-soft))]" : "text-white/40"
              )
            }
            aria-label={label}
          >
            <I className="h-5 w-5" aria-hidden="true" />
            <span className="text-[9px] font-black uppercase tracking-widest leading-none">{label}</span>
          </NavLink>
        ))}
        <a
          href={`${SITE.whatsappLink}?text=${encodeURIComponent("Olá! Vim pelo site da Credifácil.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 text-[#25D366] transition-all active:scale-95 outline-none focus-visible:bg-white/5"
          aria-label="Falar no WhatsApp"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          <span className="text-[9px] font-black uppercase tracking-widest leading-none">WhatsApp</span>
        </a>
      </div>
    </nav>
    {/* spacer to prevent content overlap */}
    <div className="h-16 lg:hidden" aria-hidden="true" />
  </>
);

export default memo(MobileBottomNav);
