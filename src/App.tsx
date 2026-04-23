import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Lenis from "@studio-freight/lenis"; // ✅ ADD THIS
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";


const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // ✅ PRELOADER TIMER
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);

    // ✅ LENIS SETUP
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smooth: true,
      smoothTouch: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      clearTimeout(timer);
      lenis.destroy(); // cleanup
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>

        {/* PRELOADER */}
        <Preloader />
        <CustomCursor /> {/* 👈 ADD HERE */}

        <Toaster />
        <Sonner />

        {/* MAIN CONTENT */}
        <div className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>

          <HashRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </HashRouter>

          {!isLoading && <WhatsAppFloat />}
        </div>

      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;