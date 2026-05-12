import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

const Index = lazy(() => import("./pages/Index"));
const Consignado = lazy(() => import("./pages/Consignado"));
const Securitizadora = lazy(() => import("./pages/Securitizadora"));
const AntecipacaoRecebiveis = lazy(() => import("./pages/AntecipacaoRecebiveis"));
const BoletoGarantido = lazy(() => import("./pages/BoletoGarantido"));
const ContaDigitalLuri = lazy(() => import("./pages/ContaDigitalLuri"));
const InvistaConosco = lazy(() => import("./pages/InvistaConosco"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Duvidas = lazy(() => import("./pages/Duvidas"));
const Contato = lazy(() => import("./pages/Contato"));
const Sobre = lazy(() => import("./pages/Sobre"));
const NotFound = lazy(() => import("./pages/NotFound"));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "auto" }); }, [pathname]);
  return null;
};

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Suspense fallback={<div className="min-h-screen" />}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/consignado" element={<Consignado />} />
        <Route path="/securitizadora" element={<Securitizadora />} />
        <Route path="/securitizadora/antecipacao-de-recebiveis" element={<AntecipacaoRecebiveis />} />
        <Route path="/securitizadora/boleto-garantido" element={<BoletoGarantido />} />
        <Route path="/securitizadora/conta-digital-luri" element={<ContaDigitalLuri />} />
        <Route path="/invista-conosco" element={<InvistaConosco />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/duvidas" element={<Duvidas />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
