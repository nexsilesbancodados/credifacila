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
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[hsl(var(--navy-deep))/0.92] backdrop-blur-xl text-white lg:hidden">
      <div className="grid grid-cols-5">
        {items.map(({ to, I, label }) => (
          <NavLink
            key={to}
            to={to}
            end
            className={({ isActive }) =>
              cn(
                "flex flex-col items-center gap-1 py-2.5 text-[10px] font-bold transition-colors",
                isActive ? "text-[hsl(var(--gold-soft))]" : "text-white/60 hover:text-white"
              )
            }
          >
            <I className="h-5 w-5" />
            <span className="uppercase tracking-wider">{label}</span>
          </NavLink>
        ))}
        <a
          href={`${SITE.whatsappLink}?text=${encodeURIComponent("Olá! Vim pelo site da Credifácil.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-2.5 text-[10px] font-bold text-[#25D366] hover:text-[#3df47e]"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="uppercase tracking-wider">WhatsApp</span>
        </a>
      </div>
    </nav>
    {/* spacer to prevent content overlap */}
    <div className="h-16 lg:hidden" aria-hidden="true" />
  </>
);

export default MobileBottomNav;
