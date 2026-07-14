import { useState } from "react";
import { ChevronDown } from "lucide-react";

const servicos = [
  { label: "Consignado", href: "/consignado" },
  { label: "Antecipação de Recebíveis", href: "/antecipacao-de-recebiveis" },
  { label: "Boleto Garantido", href: "/boleto-garantido" },
  { label: "Conta Digital Luri", href: "/conta-digital-luri" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="/" className="text-2xl font-serif font-bold tracking-tight text-white drop-shadow-lg">
          CredMais
        </a>

        <ul className="flex items-center gap-8 text-sm font-medium text-white">
          <li>
            <a href="/" className="hover:text-amber-400 transition-colors drop-shadow">
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
              className="flex items-center gap-1 hover:text-amber-400 transition-colors drop-shadow"
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
            <a href="/blog" className="hover:text-amber-400 transition-colors drop-shadow">
              Blog
            </a>
          </li>
          <li>
            <a href="/duvidas" className="hover:text-amber-400 transition-colors drop-shadow">
              Dúvidas
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;