import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import Logo from "./Logo";
import { NAV } from "@/data/site";
import { cn } from "@/lib/utils";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState<string | null>(null);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); setMobileSub(null); }, [loc.pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/85 backdrop-blur-xl shadow-[0_4px_20px_-8px_hsl(220_70%_13%/0.15)]"
          : "bg-transparent"
      )}
    >
      <div className="container-x flex h-[72px] items-center justify-between md:h-[84px]">
        <Link to="/" className="flex items-center gap-2" aria-label="Credifácil — Início">
          <Logo className="h-11 md:h-12" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => {
            if ("children" in item && item.children) {
              return (
                <div key={item.label} className="group relative">
                  <button
                    className={cn(
                      "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                      scrolled
                        ? "text-foreground hover:text-[hsl(var(--royal))]"
                        : "text-white/90 hover:text-white"
                    )}
                    aria-haspopup="menu"
                  >
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="invisible absolute left-1/2 top-full z-50 mt-2 w-72 -translate-x-1/2 translate-y-1 rounded-2xl border border-border bg-white p-2 opacity-0 shadow-[var(--shadow-elev)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((c) => (
                      <NavLink
                        key={c.href}
                        to={c.href}
                        end
                        className={({ isActive }) =>
                          cn(
                            "block rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                            isActive
                              ? "bg-[hsl(var(--royal))/0.08] text-[hsl(var(--royal))]"
                              : "text-foreground hover:bg-[hsl(var(--royal))/0.06] hover:text-[hsl(var(--royal))]"
                          )
                        }
                      >
                        {c.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <NavLink
                key={item.href}
                to={item.href}
                end
                        className={({ isActive }) =>
                          cn(
                            "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                            isActive
                              ? scrolled ? "text-[hsl(var(--royal))]" : "text-[hsl(var(--gold-soft))]"
                              : scrolled
                                ? "text-foreground hover:text-[hsl(var(--royal))]"
                                : "text-white/90 hover:text-white"
                          )
                        }
              >
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link to="/contato" className="btn-primary">
            Solicitar crédito <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-full border border-border bg-white shadow-sm lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "lg:hidden overflow-hidden bg-white transition-[max-height,opacity] duration-300",
          open ? "max-h-[80vh] opacity-100 border-t border-border" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container-x flex flex-col gap-1 py-4">
          {NAV.map((item) => {
            if ("children" in item && item.children) {
              const isOpen = mobileSub === item.label;
              return (
                <div key={item.label}>
                  <button
                    onClick={() => setMobileSub(isOpen ? null : item.label)}
                    className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold"
                  >
                    {item.label}
                    <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
                  </button>
                  {isOpen && (
                    <div className="ml-3 border-l border-border pl-3">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          to={c.href}
                          className="block rounded-xl px-4 py-2.5 text-sm text-muted-foreground hover:text-[hsl(var(--royal))]"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={item.href}
                to={item.href}
                className="rounded-xl px-4 py-3 text-sm font-semibold hover:bg-[hsl(var(--royal))/0.06] hover:text-[hsl(var(--royal))]"
              >
                {item.label}
              </Link>
            );
          })}
          <Link to="/contato" className="btn-primary mt-3 w-full">Solicitar crédito</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;