import { useEffect, useState, memo } from "react";
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
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-white/5 py-2 shadow-2xl"
          : "bg-transparent py-4"
      )}
    >
      <div className="container-x flex h-[64px] items-center justify-between md:h-[84px]">
        <Link to="/" className="flex items-center gap-2 outline-offset-4" aria-label="Credifácil — Página Inicial">
          <Logo className="h-9 md:h-12" aria-hidden={true} />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Menu Principal">
          {NAV.map((item) => {
            if ("children" in item && item.children) {
              const isOpen = false; // logic would go here if we tracked hover/focus
              return (
                <div key={item.label} className="group relative">
                  <button
                    className={cn(
                      "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition-all outline-none hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-primary",
                      scrolled ? "text-foreground" : "text-white/90 hover:text-white"
                    )}
                    aria-haspopup="menu"
                  >
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" aria-hidden={true} />
                  </button>
                  <div 
                    className="invisible absolute left-1/2 top-full z-50 mt-2 w-72 -translate-x-1/2 translate-y-1 rounded-2xl border border-border bg-white p-2 opacity-0 shadow-[var(--shadow-elev)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"
                    role="menu"
                    aria-label={`Submenu de ${item.label}`}
                  >
                    {item.children.map((c) => (
                      <NavLink
                        key={c.href}
                        to={c.href}
                        end
                        role="menuitem"
                        className={({ isActive }) =>
                          cn(
                             "block rounded-xl px-4 py-3 text-base font-semibold transition-colors outline-none focus-visible:bg-[hsl(var(--royal))/0.06] focus-visible:text-[hsl(var(--royal))]",
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
                    "rounded-full px-4 py-2 text-sm font-semibold transition-all outline-none hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-primary",
                    isActive
                      ? "text-primary bg-primary/10"
                      : scrolled ? "text-foreground" : "text-white/90 hover:text-white"
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
            <Link 
              to="/auth" 
              aria-label="Acessar minha conta" 
              className={cn("flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-sm font-semibold transition outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--royal))]", scrolled ? "border-border text-foreground hover:bg-black/5" : "border-white/30 text-white hover:bg-white/10")}
            >
              <User className="h-4 w-4" aria-hidden="true" /> Entrar
            </Link>
            <Link to="/contato" className="btn-gold !py-3 !px-6 text-xs" aria-label="Solicitar crédito">
              Solicitar crédito <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Link to="/auth" aria-label="Entrar na conta" className="grid h-10 w-10 place-items-center rounded-full border border-border bg-white text-foreground shadow-sm">
            <User className="h-4 w-4" aria-hidden="true" />
          </Link>
          <button
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-white shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--royal))]"
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
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
              role="dialog"
              aria-modal="true"
              aria-label="Navegação móvel"
            >
              <nav className="container-x flex flex-col gap-1 py-4">
                {NAV.map((item) => {
                  if ("children" in item && item.children) {
                    const isOpen = mobileSub === item.label;
                    return (
                      <div key={item.label}>
                        <button
                          onClick={() => setMobileSub(isOpen ? null : item.label)}
                          aria-expanded={isOpen}
                          className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold hover:bg-white/5 outline-none focus-visible:bg-white/5"
                        >
                          {item.label}
                          <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} aria-hidden="true" />
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="ml-3 overflow-hidden border-l border-white/15 pl-3"
                              role="group"
                              aria-label={`Submenu ${item.label}`}
                            >
                              {item.children.map((c) => (
                                <Link
                                  key={c.href}
                                  to={c.href}
                                  className="block rounded-xl px-4 py-2.5 text-sm text-white/90 hover:bg-white/5 hover:text-[hsl(var(--gold-soft))] outline-none focus-visible:bg-white/5"
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
                      className="rounded-xl px-4 py-3 text-sm font-semibold hover:bg-white/5 hover:text-[hsl(var(--gold-soft))] outline-none focus-visible:bg-white/5"
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <Link to="/contato" className="btn-gold mt-3 w-full" aria-label="Solicitar crédito">
                  Solicitar crédito <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default memo(Header);
