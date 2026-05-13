import { ReactNode, useEffect, Suspense, lazy } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MobileBottomNav from "./MobileBottomNav";

// Lazy load non-critical overlay components
const FloatingWhatsApp = lazy(() => import("./FloatingWhatsApp"));
const ExitIntentPopup = lazy(() => import("./ExitIntentPopup"));
const LuriChat = lazy(() => import("./LuriChat"));

export type BgTone =
  | "default"
  | "deep"
  | "royal"
  | "ocean"
  | "midnight"
  | "azure"
  | "steel"
  | "indigo"
  | "sky"
  | "navy"
  | "twilight";

const TONES: Record<BgTone, string> = {
  default:  "radial-gradient(circle at 0% 0%, hsl(var(--primary) / 0.05) 0%, transparent 50%), radial-gradient(circle at 100% 100%, hsl(var(--accent) / 0.05) 0%, transparent 50%), hsl(var(--background))",
  deep:     "linear-gradient(180deg, hsl(var(--navy-deep)) 0%, hsl(var(--background)) 100%)",
  royal:    "radial-gradient(circle at 50% 0%, hsl(var(--accent) / 0.1) 0%, transparent 70%), hsl(var(--background))",
  ocean:    "radial-gradient(circle at 100% 0%, hsl(var(--royal) / 0.1) 0%, transparent 50%), hsl(var(--background))",
  midnight: "linear-gradient(180deg, hsl(var(--midnight)) 0%, hsl(var(--background)) 100%)",
  azure:    "radial-gradient(circle at 0% 100%, hsl(var(--royal) / 0.1) 0%, transparent 50%), hsl(var(--background))",
  steel:    "linear-gradient(135deg, hsl(var(--navy-deep)) 0%, hsl(var(--background)) 100%)",
  indigo:   "radial-gradient(circle at 100% 0%, hsl(var(--accent) / 0.05) 0%, transparent 50%), hsl(var(--background))",
  sky:      "radial-gradient(circle at 0% 0%, hsl(var(--royal) / 0.05) 0%, transparent 50%), hsl(var(--background))",
  navy:     "linear-gradient(180deg, hsl(var(--navy-deep)) 0%, hsl(var(--background)) 100%)",
  twilight: "radial-gradient(circle at 50% 100%, hsl(var(--accent) / 0.1) 0%, transparent 70%), hsl(var(--background))",
};

const Layout = ({ children, tone = "default" }: { children: ReactNode; tone?: BgTone }) => {
  useEffect(() => {
    const prev = document.body.style.background;
    document.body.style.background = "transparent";
    return () => { document.body.style.background = prev; };
  }, []);

  return (
    <div
      className="relative flex min-h-screen flex-col text-white"
      style={{ background: TONES[tone], backgroundAttachment: "fixed" }}
    >
      <Header />
      <main className="flex-1 pt-[72px] md:pt-[84px]">{children}</main>
      <Footer />
      <MobileBottomNav />
      
      <Suspense fallback={null}>
        <FloatingWhatsApp />
        <ExitIntentPopup />
        <LuriChat />
      </Suspense>
    </div>
  );
};

export default Layout;
