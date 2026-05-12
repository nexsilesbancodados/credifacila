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
  default:  "linear-gradient(160deg, hsl(220 60% 96%) 0%, hsl(218 70% 88%) 50%, hsl(218 80% 78%) 100%)",
  deep:     "linear-gradient(160deg, hsl(220 70% 92%) 0%, hsl(218 80% 80%) 50%, hsl(220 85% 65%) 100%)",
  royal:    "linear-gradient(160deg, hsl(218 90% 94%) 0%, hsl(218 95% 78%) 50%, hsl(218 100% 60%) 100%)",
  ocean:    "linear-gradient(160deg, hsl(202 80% 95%) 0%, hsl(202 90% 78%) 50%, hsl(210 90% 55%) 100%)",
  midnight: "linear-gradient(160deg, hsl(220 50% 90%) 0%, hsl(220 70% 70%) 50%, hsl(220 85% 22%) 100%)",
  azure:    "linear-gradient(160deg, hsl(205 95% 95%) 0%, hsl(205 95% 75%) 50%, hsl(205 95% 50%) 100%)",
  steel:    "linear-gradient(160deg, hsl(212 35% 94%) 0%, hsl(212 45% 75%) 50%, hsl(212 55% 45%) 100%)",
  indigo:   "linear-gradient(160deg, hsl(225 70% 94%) 0%, hsl(225 75% 72%) 50%, hsl(230 80% 45%) 100%)",
  sky:      "linear-gradient(160deg, hsl(198 100% 96%) 0%, hsl(198 95% 80%) 50%, hsl(200 95% 60%) 100%)",
  navy:     "linear-gradient(160deg, hsl(218 60% 90%) 0%, hsl(218 70% 60%) 50%, hsl(220 85% 18%) 100%)",
  twilight: "linear-gradient(160deg, hsl(230 60% 92%) 0%, hsl(225 70% 65%) 50%, hsl(218 90% 28%) 100%)",
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