import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/logo-credifacil.png";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const navItems: NavItem[] = [
  { label: "Início", href: "/" },
  { label: "Consignado", href: "/consignado" },
  {
    label: "Securitizadora",
    href: "/securitizadora",
    children: [
      { label: "Antecipação de Recebíveis", href: "/securitizadora/antecipacao-de-recebiveis" },
      { label: "Boleto Garantido", href: "/securitizadora/boleto-garantido" },
      { label: "Conta Digital Luri", href: "/securitizadora/conta-digital-luri" },
    ],
  },
  { label: "Invista Conosco", href: "/invista-conosco" },
  { label: "Blog", href: "/blog" },
  { label: "Dúvidas", href: "/duvidas" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-background/85 backdrop-blur-xl"
          : "bg-gradient-to-b from-black/40 to-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <a href="/" className="flex items-center" aria-label="Credifácil">
          <img src={logo} alt="Credifácil" className="h-10 md:h-12 w-auto object-contain" />
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.label} className="group relative">
              <a
                href={item.href}
                className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition hover:bg-white/5 hover:text-foreground"
              >
                {item.label}
                {item.children && <ChevronDown className="h-3.5 w-3.5 opacity-70" />}
              </a>

              {item.children && (
                <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-background/95 p-2 shadow-2xl backdrop-blur-xl">
                    {item.children.map((c) => (
                      <a
                        key={c.href}
                        href={c.href}
                        className="block rounded-xl px-4 py-3 text-sm text-foreground/80 transition hover:bg-[hsl(var(--gold))/0.08] hover:text-[hsl(var(--gold-soft))]"
                      >
                        {c.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="/contato"
          className="hidden rounded-full bg-gradient-to-br from-[hsl(var(--gold-soft))] to-[hsl(var(--gold))] px-5 py-2.5 text-sm font-bold text-background shadow-lg transition hover:scale-[1.03] lg:inline-flex"
        >
          Simular Crédito
        </a>

        {/* Mobile toggle */}
        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden border-t border-white/10 bg-background/95 backdrop-blur-xl transition-[max-height] duration-300 ${
          open ? "max-h-[80vh]" : "max-h-0"
        }`}
      >
        <ul className="container-x flex flex-col py-4">
          {navItems.map((item) => (
            <li key={item.label} className="border-b border-white/5 last:border-0">
              {item.children ? (
                <>
                  <button
                    onClick={() => setMobileSub((s) => (s === item.label ? null : item.label))}
                    className="flex w-full items-center justify-between py-4 text-left text-base font-medium text-foreground"
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${mobileSub === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-[max-height] duration-300 ${
                      mobileSub === item.label ? "max-h-96 pb-3" : "max-h-0"
                    }`}
                  >
                    {item.children.map((c) => (
                      <a
                        key={c.href}
                        href={c.href}
                        className="block rounded-lg px-4 py-3 text-sm text-foreground/75 hover:bg-white/5"
                      >
                        {c.label}
                      </a>
                    ))}
                  </div>
                </>
              ) : (
                <a
                  href={item.href}
                  className="block py-4 text-base font-medium text-foreground"
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
          <li className="pt-4">
            <a
              href="/contato"
              className="flex w-full items-center justify-center rounded-full bg-gradient-to-br from-[hsl(var(--gold-soft))] to-[hsl(var(--gold))] px-5 py-3 text-sm font-bold text-background"
            >
              Simular Crédito
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;