import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="relative flex min-h-screen flex-col">
    <Header />
    <main className="flex-1 pt-[72px] md:pt-[84px]">{children}</main>
    <Footer />
  </div>
);

export default Layout;