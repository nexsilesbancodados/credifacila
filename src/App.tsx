 import { lazy, Suspense, useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import useScrollAnimations from "./hooks/useScrollAnimations";

const Simular = lazy(() => import("./pages/Simular.tsx"));

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
  return null;
};

const AnimationsBoot = () => {
  useScrollAnimations();
  return null;
};

 const LoadingScreen = () => (
   <div className="flex min-h-screen w-full flex-col items-center justify-center bg-[hsl(30_22%_5%)] text-white">
     <div className="relative mb-8 h-12 w-12">
       <div className="absolute inset-0 animate-ping rounded-full bg-brand-gold/20" />
       <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-brand-gold/30">
         <div className="h-6 w-6 animate-spin rounded-full border-2 border-brand-gold border-t-transparent" />
       </div>
     </div>
     <p className="animate-pulse text-sm font-medium tracking-widest text-brand-gold/80 uppercase">
       Carregando Experiência
     </p>
   </div>
 );
 
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <AnimationsBoot />
         <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/simular" element={<Simular />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
