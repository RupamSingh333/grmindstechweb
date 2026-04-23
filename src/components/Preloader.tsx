import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/logo-big-transparent.png";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.08, // Expands gently as it vanishes
            filter: "blur(30px)", // Silk-smooth blur dissolve
            transition: { 
              duration: 1.8, // Elongated exit for high-end feel
              ease: [0.76, 0, 0.24, 1] 
            } 
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#ffffff] dark:bg-[#020202] overflow-hidden"
        >
          {/* AMBIENT GLOW - Focused on the single ring */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div 
              animate={{ 
                opacity: [0.04, 0.08, 0.04],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-cyan-500/10 rounded-full blur-[100px]"
            />
          </div>

          {/* MAIN COMPONENT */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="relative flex items-center justify-center">
              
              {/* THE ONLY PROGRESS CIRCLE */}
              <svg className="w-48 h-48 sm:w-56 sm:h-56 -rotate-90">
                <defs>
                  <filter id="premium-glow">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>
                
                {/* Background Shadow Track */}
                <circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="transparent"
                  className="text-neutral-100 dark:text-white/[0.03]"
                />

                {/* Animated Filling Line */}
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="transparent"
                  strokeLinecap="round"
                  className="text-cyan-500/90 dark:text-cyan-400"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ 
                    duration: 3.2, 
                    ease: [0.65, 0, 0.35, 1], // The smoothest S-curve
                    delay: 0.2
                  }}
                  style={{ filter: "url(#premium-glow)" }}
                />
              </svg>

              {/* LOGO - Perfectly Centered */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ 
                  opacity: 1, 
                  y: [0, -5, 0] // Gentle floating motion
                }}
                transition={{ 
                  opacity: { duration: 1.2 },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute flex items-center justify-center"
              >
                <img 
                  src={logo} 
                  alt="Logo" 
                  className="h-12 sm:h-16 w-auto dark:brightness-110 select-none opacity-95" 
                />
              </motion.div>
            </div>
          </div>

          {/* GRAIN TEXTURE - For that cinematic look */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05] bg-[url('/noise.svg')]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;