import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  ChevronRight,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";
import { site, whatsappLink, telLink } from "@/config/site";
import logo from "@/assets/credifacil-logo.webp";

type Item = {
  label: string;
  href: string;
  submenu?: { label: string; href: string }[];
};

const items: Item[] = [
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
  { label: "Perguntas frequentes", href: "/perguntas-frequentes" },
  { label: "Invista Conosco", href: "/invista-conosco" },
];

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Abrir menu"
        aria-expanded={open}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-gold/40 text-white transition-colors hover:bg-brand-gold/15 hover:text-brand-gold lg:hidden"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Menu principal"
        className={`fixed right-0 top-0 z-[81] flex h-[100dvh] w-[88%] max-w-sm flex-col overflow-hidden bg-[hsl(215_42%_20%)] text-white shadow-[0_0_60px_-10px_rgba(0,0,0,0.6)] transition-transform duration-300 ease-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Decorative gold glow */}
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-[400px] w-[400px] opacity-40"
          style={{
            background:
              "radial-gradient(circle, hsl(35 85% 58% / 0.5), transparent 70%)",
          }}
          aria-hidden
        />
        <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden />

        <div className="relative flex items-center justify-between border-b border-white/10 px-5 py-5">
          <Link to="/" onClick={() => setOpen(false)} aria-label="Credifácil">
            <img src={logo} alt="Credifácil" className="h-8 w-auto" width={1795} height={605} />
          </Link>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fechar menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/82 transition-colors hover:border-brand-gold hover:text-brand-gold"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="relative flex-1 overflow-y-auto px-3 py-4">
          <ul className="flex flex-col">
            {items.map((item) => {
              const isExpanded = expanded === item.label;
              const hasSubmenu = !!item.submenu;
              return (
                <li key={item.label} className="border-b border-white/5">
                  <div className="flex items-center">
                    <Link
                      to={item.href}
                      onClick={() => setOpen(false)}
                      className="flex flex-1 items-center justify-between gap-3 rounded-xl px-3 py-4 text-[15px] font-semibold text-white/85 transition-colors hover:bg-white/5 hover:text-brand-gold"
                    >
                      {item.label}
                    </Link>
                    {hasSubmenu && (
                      <button
                        type="button"
                        onClick={() => setExpanded(isExpanded ? null : item.label)}
                        aria-expanded={isExpanded}
                        aria-label={`Expandir ${item.label}`}
                        className="ml-1 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/82 transition-all hover:border-brand-gold hover:text-brand-gold"
                      >
                        <ChevronRight
                          className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-90" : ""}`}
                        />
                      </button>
                    )}
                  </div>
                  {hasSubmenu && (
                    <div
                      className={`grid transition-all duration-300 ${
                        isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <ul className="overflow-hidden">
                        {item.submenu!.map((s) => (
                          <li key={s.href}>
                            <Link
                              to={s.href}
                              onClick={() => setOpen(false)}
                              className="block rounded-xl px-7 py-3 text-[13px] font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-brand-gold"
                            >
                              {s.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mt-6 px-3">
            <a
              href={whatsappLink("Olá! Quero contratar um crédito Credifácil.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn-gold w-full !py-3.5"
            >
              <Sparkles className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2 px-3">
            <a
              href={whatsappLink("Olá, vim pelo site!")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex flex-col items-center gap-1 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-3 text-emerald-200 transition-colors hover:bg-emerald-500/20"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="text-[11px] font-bold uppercase tracking-wider">WhatsApp</span>
            </a>
            <a
              href={telLink(site.contact.phone)}
              onClick={() => setOpen(false)}
              className="flex flex-col items-center gap-1 rounded-2xl border border-brand-gold/40 bg-brand-gold/10 p-3 text-brand-gold transition-colors hover:bg-brand-gold/15"
            >
              <Phone className="h-4 w-4" />
              <span className="text-[11px] font-bold uppercase tracking-wider">Ligar</span>
            </a>
          </div>
        </nav>

        <div className="relative border-t border-white/10 px-5 py-4 text-[10px] text-white/45">
          {site.contact.hours} · {site.contact.phoneDisplay}
        </div>
      </aside>
    </>
  );
};

export default MobileNav;
