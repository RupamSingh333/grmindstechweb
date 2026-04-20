import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Preloader from "./components/Preloader";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // We set a slightly longer timeout than the Preloader's exit 
    // to ensure the scroll-to-top works perfectly after the curtain lifts
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* --- 1. PRELOADER (Always outside the Router to avoid route changes) --- */}
        <Preloader />

        <Toaster />
        <Sonner />

        {/* --- 2. MAIN CONTENT --- */}
        <div className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
          <HashRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </HashRouter>

          {/* WhatsApp Float usually looks better when shown after preloader */}
          {!isLoading && <WhatsAppFloat />}
        </div>

      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;