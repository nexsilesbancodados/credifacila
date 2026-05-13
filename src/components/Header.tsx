import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, ArrowRight, User } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
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
           ? "bg-white text-slate-950 shadow-md py-1"
           : "bg-transparent py-2"
      )}
    >
      <div className="container-x flex h-[64px] items-center justify-between md:h-[84px]">
        <Link to="/" className="flex items-center gap-2" aria-label="Credifácil — Início">
          <Logo className="h-9 md:h-12" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => {
            if ("children" in item && item.children) {
              return (
                <div key={item.label} className="group relative">
                  <button
                    className={cn(
                       "flex items-center gap-1 rounded-full px-4 py-2 text-base font-bold transition-colors",
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
                             "block rounded-xl px-4 py-3 text-base font-semibold transition-colors",
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
                             "rounded-full px-4 py-2 text-base font-bold transition-colors",
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
          <div className="flex items-center gap-2">
            <Link to="/auth" aria-label="Acessar minha conta" className={cn("flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-sm font-semibold transition", scrolled ? "border-border text-foreground hover:bg-black/5" : "border-white/30 text-white hover:bg-white/10")}>
              <User className="h-4 w-4" /> Entrar
            </Link>
            <Link to="/contato" className="btn-primary">
              Solicitar crédito <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Link to="/auth" className="grid h-10 w-10 place-items-center rounded-full border border-border bg-white text-foreground shadow-sm">
            <User className="h-4 w-4" />
          </Link>
          <button
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-white shadow-sm"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 top-[64px] md:top-[84px] z-40 bg-[hsl(var(--navy-deep))/0.6] backdrop-blur-sm lg:hidden"
            />
            <motion.div
              key="drawer"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden absolute top-full left-0 w-full z-50 border-t border-white/10 bg-[hsl(var(--navy-deep))/0.95] backdrop-blur-xl text-white shadow-[var(--shadow-elev)] max-h-[calc(100vh-64px)] overflow-y-auto"
            >
              <nav className="container-x flex flex-col gap-1 py-4">
                {NAV.map((item) => {
                  if ("children" in item && item.children) {
                    const isOpen = mobileSub === item.label;
                    return (
                      <div key={item.label}>
                        <button
                          onClick={() => setMobileSub(isOpen ? null : item.label)}
                          className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold hover:bg-white/5"
                        >
                          {item.label}
                          <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="ml-3 overflow-hidden border-l border-white/15 pl-3"
                            >
                              {item.children.map((c) => (
                                <Link
                                  key={c.href}
                                  to={c.href}
                                  className="block rounded-xl px-4 py-2.5 text-sm text-white/90 hover:bg-white/5 hover:text-[hsl(var(--gold-soft))]"
                                >
                                  {c.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }
                  return (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="rounded-xl px-4 py-3 text-sm font-semibold hover:bg-white/5 hover:text-[hsl(var(--gold-soft))]"
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <Link to="/contato" className="btn-gold mt-3 w-full">
                  Solicitar crédito <ArrowRight className="h-4 w-4" />
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;