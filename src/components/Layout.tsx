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
  // Deep blue immersive tones — each page bathed in its own dark-blue mesh
  default:  "radial-gradient(ellipse at 18% 0%, hsl(252 80% 55% / 0.45) 0%, transparent 55%), radial-gradient(ellipse at 82% 100%, hsl(199 95% 50% / 0.35) 0%, transparent 55%), linear-gradient(180deg, hsl(226 70% 10%) 0%, hsl(224 65% 14%) 55%, hsl(222 70% 18%) 100%)",
  deep:     "radial-gradient(ellipse at 15% 0%, hsl(222 92% 55% / 0.40) 0%, transparent 55%), radial-gradient(ellipse at 85% 100%, hsl(252 80% 50% / 0.40) 0%, transparent 55%), linear-gradient(180deg, hsl(226 75% 8%) 0%, hsl(224 70% 12%) 55%, hsl(222 75% 16%) 100%)",
  royal:    "radial-gradient(ellipse at 10% 0%, hsl(252 80% 60% / 0.45) 0%, transparent 55%), radial-gradient(ellipse at 90% 100%, hsl(218 100% 55% / 0.45) 0%, transparent 55%), linear-gradient(180deg, hsl(224 70% 10%) 0%, hsl(222 80% 16%) 50%, hsl(222 90% 22%) 100%)",
  ocean:    "radial-gradient(ellipse at 20% 0%, hsl(188 90% 50% / 0.40) 0%, transparent 55%), radial-gradient(ellipse at 80% 100%, hsl(202 95% 40% / 0.45) 0%, transparent 55%), linear-gradient(180deg, hsl(210 75% 8%) 0%, hsl(205 80% 13%) 55%, hsl(202 85% 18%) 100%)",
  midnight: "radial-gradient(ellipse at 25% 0%, hsl(252 80% 45% / 0.40) 0%, transparent 55%), radial-gradient(ellipse at 75% 100%, hsl(222 92% 30% / 0.55) 0%, transparent 60%), linear-gradient(180deg, hsl(228 80% 6%) 0%, hsl(226 75% 10%) 50%, hsl(224 70% 14%) 100%)",
  azure:    "radial-gradient(ellipse at 15% 0%, hsl(199 95% 55% / 0.45) 0%, transparent 55%), radial-gradient(ellipse at 90% 100%, hsl(188 90% 45% / 0.40) 0%, transparent 55%), linear-gradient(180deg, hsl(210 70% 9%) 0%, hsl(205 75% 14%) 55%, hsl(199 80% 20%) 100%)",
  steel:    "radial-gradient(ellipse at 20% 0%, hsl(218 70% 50% / 0.35) 0%, transparent 55%), radial-gradient(ellipse at 80% 100%, hsl(222 60% 25% / 0.55) 0%, transparent 60%), linear-gradient(180deg, hsl(220 50% 10%) 0%, hsl(218 55% 15%) 55%, hsl(222 60% 20%) 100%)",
  indigo:   "radial-gradient(ellipse at 15% 0%, hsl(252 80% 55% / 0.45) 0%, transparent 55%), radial-gradient(ellipse at 85% 100%, hsl(232 85% 40% / 0.50) 0%, transparent 55%), linear-gradient(180deg, hsl(234 70% 9%) 0%, hsl(232 75% 14%) 55%, hsl(232 80% 20%) 100%)",
  sky:      "radial-gradient(ellipse at 20% 0%, hsl(199 95% 60% / 0.45) 0%, transparent 55%), radial-gradient(ellipse at 80% 100%, hsl(218 100% 50% / 0.40) 0%, transparent 55%), linear-gradient(180deg, hsl(210 70% 10%) 0%, hsl(205 80% 15%) 55%, hsl(202 85% 22%) 100%)",
  navy:     "radial-gradient(ellipse at 25% 0%, hsl(222 92% 45% / 0.40) 0%, transparent 55%), radial-gradient(ellipse at 75% 100%, hsl(226 70% 14% / 0.65) 0%, transparent 60%), linear-gradient(180deg, hsl(226 80% 7%) 0%, hsl(224 75% 11%) 55%, hsl(222 80% 16%) 100%)",
  twilight: "radial-gradient(ellipse at 15% 0%, hsl(252 80% 55% / 0.45) 0%, transparent 55%), radial-gradient(ellipse at 85% 100%, hsl(222 92% 30% / 0.55) 0%, transparent 60%), linear-gradient(180deg, hsl(238 70% 9%) 0%, hsl(232 75% 14%) 50%, hsl(224 80% 18%) 100%)",
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