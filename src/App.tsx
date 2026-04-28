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
const Securitizadora = lazy(() => import("./pages/Securitizadora.tsx"));
const Consignado = lazy(() => import("./pages/Consignado.tsx"));

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
     <div className="relative flex flex-col items-center">
       {/* Outer glow */}
       <div className="absolute h-32 w-32 rounded-full bg-brand-gold/10 blur-2xl" />
       
       {/* Animated ring */}
       <div className="relative h-16 w-16">
         <div className="absolute inset-0 animate-[spin_1.5s_linear_infinite] rounded-full border-2 border-brand-gold/20 border-t-brand-gold" />
         <div className="absolute inset-2 animate-[spin_2s_linear_infinite_reverse] rounded-full border border-brand-gold/10 border-b-brand-gold/40" />
         
         {/* Central dot */}
         <div className="absolute inset-[45%] rounded-full bg-brand-gold shadow-[0_0_12px_rgba(184,134,11,0.6)]" />
       </div>
       
       <div className="mt-8 flex flex-col items-center gap-2">
         <p className="text-[10px] font-bold tracking-[0.3em] text-brand-gold/90 uppercase">
           Credifácil
         </p>
         <div className="h-px w-12 bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
         <p className="animate-pulse text-[9px] font-medium tracking-[0.2em] text-white/40 uppercase">
           Preparando simulador...
         </p>
       </div>
     </div>
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
            <Route path="/securitizadora" element={<Securitizadora />} />
            <Route path="/consignado" element={<Consignado />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
