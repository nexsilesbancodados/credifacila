import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Index from "./pages/Index.tsx";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import CookieBanner from "./components/CookieBanner";
import useScrollAnimations from "./hooks/useScrollAnimations";
import { initAnalytics, trackEvent } from "./lib/analytics";

const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const Simular = lazy(() => import("./pages/Simular.tsx"));
const Securitizadora = lazy(() => import("./pages/Securitizadora.tsx"));
const Consignado = lazy(() => import("./pages/Consignado.tsx"));
const AntecipacaoRecebiveis = lazy(() => import("./pages/AntecipacaoRecebiveis.tsx"));
const BoletoGarantido = lazy(() => import("./pages/BoletoGarantido.tsx"));
const ContaDigitalLuri = lazy(() => import("./pages/ContaDigitalLuri.tsx"));
const PerguntasFrequentes = lazy(() => import("./pages/PerguntasFrequentes.tsx"));
const Privacidade = lazy(() => import("./pages/Privacidade.tsx"));
const Termos = lazy(() => import("./pages/Termos.tsx"));
const Lgpd = lazy(() => import("./pages/Lgpd.tsx"));
const Ouvidoria = lazy(() => import("./pages/Ouvidoria.tsx"));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    trackEvent("page_view", { path: pathname });
  }, [pathname]);
  return null;
};

const AnalyticsBoot = () => {
  useEffect(() => {
    initAnalytics().catch(() => undefined);
  }, []);
  return null;
};

const AnimationsBoot = () => {
  useScrollAnimations();
  return null;
};

const RouteFallback = () => (
  <div className="flex min-h-[60vh] w-full items-center justify-center">
    <div className="h-10 w-10 animate-spin rounded-full border-2 border-brand-gold/20 border-t-brand-gold" />
  </div>
);

const App = () => (
  <BrowserRouter>
    <a href="#main" className="skip-link">
      Pular para o conteúdo
    </a>
    <ScrollToTop />
    <AnimationsBoot />
    <AnalyticsBoot />
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/simular" element={<Simular />} />
        <Route path="/securitizadora" element={<Securitizadora />} />
        <Route path="/consignado" element={<Consignado />} />
        <Route path="/securitizadora/antecipacao-de-recebiveis" element={<AntecipacaoRecebiveis />} />
        <Route path="/securitizadora/boleto-garantido" element={<BoletoGarantido />} />
        <Route path="/securitizadora/conta-digital-luri" element={<ContaDigitalLuri />} />
        <Route path="/perguntas-frequentes" element={<PerguntasFrequentes />} />
        <Route path="/faq" element={<PerguntasFrequentes />} />
        <Route path="/privacidade" element={<Privacidade />} />
        <Route path="/termos" element={<Termos />} />
        <Route path="/lgpd" element={<Lgpd />} />
        <Route path="/ouvidoria" element={<Ouvidoria />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
    <FloatingWhatsApp />
    <CookieBanner />
  </BrowserRouter>
);

export default App;
