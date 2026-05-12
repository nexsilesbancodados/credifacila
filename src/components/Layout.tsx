import { ReactNode, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

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
  // Each tone: subtle wash on top, deeper jewel-tone at bottom — immersive parallax feel
  default:  "radial-gradient(ellipse at 20% 0%, hsl(252 80% 80% / 0.35) 0%, transparent 55%), radial-gradient(ellipse at 80% 100%, hsl(199 95% 70% / 0.30) 0%, transparent 55%), linear-gradient(180deg, hsl(220 40% 99%) 0%, hsl(220 50% 92%) 60%, hsl(222 70% 78%) 100%)",
  deep:     "radial-gradient(ellipse at 15% 0%, hsl(222 92% 70% / 0.30) 0%, transparent 55%), radial-gradient(ellipse at 85% 100%, hsl(252 80% 62% / 0.30) 0%, transparent 55%), linear-gradient(180deg, hsl(220 40% 98%) 0%, hsl(222 70% 86%) 55%, hsl(224 80% 58%) 100%)",
  royal:    "radial-gradient(ellipse at 10% 0%, hsl(252 80% 62% / 0.35) 0%, transparent 55%), radial-gradient(ellipse at 90% 100%, hsl(218 100% 64% / 0.35) 0%, transparent 55%), linear-gradient(180deg, hsl(220 60% 98%) 0%, hsl(222 85% 84%) 55%, hsl(222 92% 52%) 100%)",
  ocean:    "radial-gradient(ellipse at 20% 0%, hsl(188 90% 70% / 0.35) 0%, transparent 55%), radial-gradient(ellipse at 80% 100%, hsl(199 95% 50% / 0.35) 0%, transparent 55%), linear-gradient(180deg, hsl(199 60% 98%) 0%, hsl(199 80% 82%) 55%, hsl(202 95% 42%) 100%)",
  midnight: "radial-gradient(ellipse at 25% 0%, hsl(252 80% 50% / 0.35) 0%, transparent 55%), radial-gradient(ellipse at 75% 100%, hsl(222 92% 30% / 0.50) 0%, transparent 60%), linear-gradient(180deg, hsl(220 40% 95%) 0%, hsl(224 60% 60%) 50%, hsl(226 70% 14%) 100%)",
  azure:    "radial-gradient(ellipse at 15% 0%, hsl(199 95% 75% / 0.35) 0%, transparent 55%), radial-gradient(ellipse at 90% 100%, hsl(188 90% 55% / 0.35) 0%, transparent 55%), linear-gradient(180deg, hsl(199 60% 99%) 0%, hsl(199 90% 80%) 55%, hsl(199 95% 48%) 100%)",
  steel:    "radial-gradient(ellipse at 20% 0%, hsl(218 60% 80% / 0.30) 0%, transparent 55%), radial-gradient(ellipse at 80% 100%, hsl(222 50% 30% / 0.40) 0%, transparent 60%), linear-gradient(180deg, hsl(220 30% 98%) 0%, hsl(218 35% 80%) 55%, hsl(222 50% 36%) 100%)",
  indigo:   "radial-gradient(ellipse at 15% 0%, hsl(252 80% 70% / 0.40) 0%, transparent 55%), radial-gradient(ellipse at 85% 100%, hsl(232 85% 50% / 0.40) 0%, transparent 55%), linear-gradient(180deg, hsl(232 50% 98%) 0%, hsl(232 75% 80%) 55%, hsl(232 80% 40%) 100%)",
  sky:      "radial-gradient(ellipse at 20% 0%, hsl(199 95% 80% / 0.40) 0%, transparent 55%), radial-gradient(ellipse at 80% 100%, hsl(218 100% 64% / 0.30) 0%, transparent 55%), linear-gradient(180deg, hsl(199 80% 99%) 0%, hsl(199 95% 84%) 55%, hsl(202 95% 55%) 100%)",
  navy:     "radial-gradient(ellipse at 25% 0%, hsl(222 92% 50% / 0.30) 0%, transparent 55%), radial-gradient(ellipse at 75% 100%, hsl(226 70% 14% / 0.55) 0%, transparent 60%), linear-gradient(180deg, hsl(220 40% 96%) 0%, hsl(222 60% 50%) 55%, hsl(226 70% 12%) 100%)",
  twilight: "radial-gradient(ellipse at 15% 0%, hsl(252 80% 62% / 0.40) 0%, transparent 55%), radial-gradient(ellipse at 85% 100%, hsl(222 92% 30% / 0.45) 0%, transparent 60%), linear-gradient(180deg, hsl(232 50% 98%) 0%, hsl(240 60% 60%) 50%, hsl(224 75% 22%) 100%)",
};

const Layout = ({ children, tone = "default" }: { children: ReactNode; tone?: BgTone }) => {
  useEffect(() => {
    const prev = document.body.style.background;
    document.body.style.background = "transparent";
    return () => { document.body.style.background = prev; };
  }, []);

  return (
    <div
      className="relative flex min-h-screen flex-col"
      style={{ background: TONES[tone], backgroundAttachment: "fixed" }}
    >
      <Header />
      <main className="flex-1 pt-[72px] md:pt-[84px]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;