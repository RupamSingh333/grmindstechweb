import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const WhatsAppFloat = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const phoneNumber = "917505717444"; 
  const message = "Hello G.R Minds Team, I'm interested in your digital services. Let's discuss!";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Show tooltip after 3 seconds to grab attention
  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4">
      
      {/* --- TOOLTIP / CHAT BUBBLE --- */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 20 }}
            className="relative px-4 py-2 bg-white dark:bg-[#030712] border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl backdrop-blur-xl mb-2 hidden md:block"
          >
            <p className="text-xs font-bold text-slate-600 dark:text-slate-300 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Chat with an Expert
            </p>
            {/* Triangle tail */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-inherit border-r border-b border-inherit rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- FLOATING BUTTON --- */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16"
      >
        {/* Neon Pulse Rings */}
        <div className="absolute inset-0 bg-emerald-500/30 rounded-full blur-xl animate-pulse group-hover:bg-emerald-500/50 transition-all" />
        <div className="absolute inset-0 bg-emerald-500/20 rounded-full animate-ping" />

        {/* Main Button Glass Body */}
        <div className="relative z-10 w-full h-full bg-[#25D366] dark:bg-[#25D366]/90 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.4)] border border-white/20">
          <MessageCircle className="h-7 w-7 md:h-8 md:h-8 text-white group-hover:rotate-12 transition-transform" />
        </div>

        {/* Floating Particle Decor */}
        <motion.div 
           animate={{ y: [0, -10, 0] }} 
           transition={{ repeat: Infinity, duration: 2 }}
           className="absolute -top-1 -left-1 bg-white dark:bg-slate-900 p-1 rounded-full border border-slate-200 dark:border-white/10 shadow-lg"
        >
          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
        </motion.div>
      </motion.a>
    </div>
  );
};

export default WhatsAppFloat;