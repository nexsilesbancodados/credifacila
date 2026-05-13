import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

// Preload critical assets
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
const Auth = lazy(() => import("./pages/Auth"));
const AreaCliente = lazy(() => import("./pages/AreaCliente"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AdminLayout = lazy(() => import("./pages/admin/AdminLayout"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const AdminBlog = lazy(() => import("./pages/admin/AdminBlog"));
const AdminBlogEditor = lazy(() => import("./pages/admin/AdminBlogEditor"));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "auto" }); }, [pathname]);
  return null;
};

const LoadingFallback = () => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-midnight text-white">
    <div className="flex flex-col items-center gap-4">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/10 border-t-[hsl(var(--gold-soft))]" />
      <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Credifácil Network</p>
    </div>
  </div>
);

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Suspense fallback={<LoadingFallback />}>
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
        <Route path="/auth" element={<Auth />} />
        <Route path="/area-cliente" element={<AreaCliente />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="blog" element={<AdminBlog />} />
          <Route path="blog/new" element={<AdminBlogEditor />} />
          <Route path="blog/:id" element={<AdminBlogEditor />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
