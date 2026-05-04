import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
 const Index = lazy(() => import("./pages/Index.tsx"));

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
 const Blog = lazy(() => import("./pages/Blog.tsx"));
 const BlogPost = lazy(() => import("./pages/BlogPost.tsx"));
  const Login = lazy(() => import("./pages/Login.tsx"));
  const Dashboard = lazy(() => import("./pages/Dashboard.tsx"));
  const ClientPortal = lazy(() => import("./pages/ClientPortal.tsx"));
 
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

// Pré-busca rotas prováveis quando o navegador estiver ocioso e em conexões boas.
// Em mobile/3G ou Save-Data, evitamos consumir banda do usuário.
const RoutePrefetcher = () => {
  useEffect(() => {
    const conn = (navigator as unknown as { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    if (conn?.saveData) return;
    if (conn?.effectiveType && /(2g|slow-2g|3g)/.test(conn.effectiveType)) return;
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
     <Suspense fallback={<div className="min-h-screen bg-[hsl(0_0%_4%)]" aria-hidden="true" />}>
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
         <Route path="/blog" element={<Blog />} />
         <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/portal" element={<ClientPortal />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
     <Suspense fallback={null}>
       <FloatingChatbot />
     </Suspense>
    <CookieBanner />
  </BrowserRouter>
);

export default App;
