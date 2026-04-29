import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Index from "./pages/Index.tsx";

// Code-splitting: rotas secundárias carregam sob demanda para acelerar o LCP da home.
const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const Securitizadora = lazy(() => import("./pages/Securitizadora.tsx"));
const Consignado = lazy(() => import("./pages/Consignado.tsx"));
const AntecipacaoRecebiveis = lazy(() => import("./pages/AntecipacaoRecebiveis.tsx"));
const BoletoGarantido = lazy(() => import("./pages/BoletoGarantido.tsx"));
const ContaDigitalLuri = lazy(() => import("./pages/ContaDigitalLuri.tsx"));
const PerguntasFrequentes = lazy(() => import("./pages/PerguntasFrequentes.tsx"));
const InvistaConosco = lazy(() => import("./pages/InvistaConosco.tsx"));
const Privacidade = lazy(() => import("./pages/Privacidade.tsx"));
const Termos = lazy(() => import("./pages/Termos.tsx"));
const Lgpd = lazy(() => import("./pages/Lgpd.tsx"));
const Ouvidoria = lazy(() => import("./pages/Ouvidoria.tsx"));

import FloatingChatbot from "./components/FloatingChatbot";
import CookieBanner from "./components/CookieBanner";
import useScrollAnimations from "./hooks/useScrollAnimations";
import { initAnalytics, trackEvent } from "./lib/analytics";

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

// Pré-busca rotas prováveis quando o navegador estiver ocioso (não bloqueia o LCP).
const RoutePrefetcher = () => {
  useEffect(() => {
    const idle =
      (window as unknown as { requestIdleCallback?: (cb: () => void) => number })
        .requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1500));
    idle(() => {
      void import("./pages/Consignado.tsx");
      void import("./pages/Securitizadora.tsx");
    });
  }, []);
  return null;
};

const App = () => (
  <BrowserRouter>
    <a href="#main" className="skip-link">
      Pular para o conteúdo
    </a>
    <ScrollToTop />
    <AnimationsBoot />
    <AnalyticsBoot />
    <RoutePrefetcher />
    <Suspense fallback={<div className="min-h-screen" aria-hidden="true" />}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/securitizadora" element={<Securitizadora />} />
        <Route path="/consignado" element={<Consignado />} />
        <Route path="/securitizadora/antecipacao-de-recebiveis" element={<AntecipacaoRecebiveis />} />
        <Route path="/securitizadora/boleto-garantido" element={<BoletoGarantido />} />
        <Route path="/securitizadora/conta-digital-luri" element={<ContaDigitalLuri />} />
        <Route path="/perguntas-frequentes" element={<PerguntasFrequentes />} />
        <Route path="/faq" element={<PerguntasFrequentes />} />
        <Route path="/invista-conosco" element={<InvistaConosco />} />
        <Route path="/privacidade" element={<Privacidade />} />
        <Route path="/termos" element={<Termos />} />
        <Route path="/lgpd" element={<Lgpd />} />
        <Route path="/ouvidoria" element={<Ouvidoria />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
    <FloatingChatbot />
    <CookieBanner />
  </BrowserRouter>
);

export default App;
