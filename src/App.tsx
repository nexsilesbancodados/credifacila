import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Simular from "./pages/Simular.tsx";
import Securitizadora from "./pages/Securitizadora.tsx";
import Consignado from "./pages/Consignado.tsx";
import AntecipacaoRecebiveis from "./pages/AntecipacaoRecebiveis.tsx";
import BoletoGarantido from "./pages/BoletoGarantido.tsx";
import ContaDigitalLuri from "./pages/ContaDigitalLuri.tsx";
import PerguntasFrequentes from "./pages/PerguntasFrequentes.tsx";
import Privacidade from "./pages/Privacidade.tsx";
import Termos from "./pages/Termos.tsx";
import Lgpd from "./pages/Lgpd.tsx";
import Ouvidoria from "./pages/Ouvidoria.tsx";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
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

const App = () => (
  <BrowserRouter>
    <a href="#main" className="skip-link">
      Pular para o conteúdo
    </a>
    <ScrollToTop />
    <AnimationsBoot />
    <AnalyticsBoot />
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
    <FloatingWhatsApp />
    <CookieBanner />
  </BrowserRouter>
);

export default App;
