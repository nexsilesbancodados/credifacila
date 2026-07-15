import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import logo from "@/assets/credmais-logo.png.asset.json";

const servicos = [
  { label: "Boleto Antecipado", href: "/boleto-antecipado" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[#f6ecd6]/85 backdrop-blur-md border-b border-amber-900/10 shadow-sm"
          : "bg-gradient-to-b from-black/35 to-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a
          href="/"
          className="group relative flex items-center transition-transform hover:scale-[1.02]"
          aria-label="CredMais Securitizadora"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-amber-400/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"
          />
          <img
            src={logo.url}
            alt="CredMais Securitizadora"
            className="h-12 w-auto object-contain drop-shadow-[0_4px_18px_rgba(0,0,0,0.55)]"
          />
        </a>

        <ul
          className={`flex items-center gap-8 text-sm font-semibold transition-colors ${
            scrolled ? "text-[#2b1d0a]" : "text-white drop-shadow"
          }`}
        >
          <li>
            <a href="/" className="hover:text-amber-400 transition-colors">
              Início
            </a>
          </li>
          <li
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 hover:text-amber-400 transition-colors"
            >
              Serviços
              <ChevronDown
                className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
              />
            </button>
            {open && (
              <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
                <ul className="min-w-[240px] rounded-xl border border-white/10 bg-neutral-950/95 p-2 shadow-2xl backdrop-blur-md">
                  {servicos.map((s) => (
                    <li key={s.href}>
                      <a
                        href={s.href}
                        className="block rounded-lg px-4 py-2.5 text-sm text-white/90 hover:bg-white/10 hover:text-amber-400 transition-colors"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
          <li>
            <a href="/blog" className="hover:text-amber-400 transition-colors">
              Blog
            </a>
          </li>
          <li>
            <a href="/duvidas" className="hover:text-amber-400 transition-colors">
              Dúvidas
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;