import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/logo-big-transparent.png";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{
            clipPath: "ellipse(180% 120% at 50% 100%)", // big curve at bottom
          }}
          animate={{
            clipPath: "ellipse(180% 120% at 50% 100%)", // stays same while visible
          }}
          exit={{
            clipPath: [
              "ellipse(180% 120% at 50% 100%)", // start (bottom curve visible)
              "ellipse(120% 90% at 50% 0%)",   // moving upward
              "ellipse(100% 0% at 50% 0%)"      // disappears at top
            ],
            transition: {
              duration: 2,
              ease: [0.76, 0, 0.24, 1],
            }
          }}
          className="fixed inset-0 z-[9999] bg-[#F5F5F5] dark:bg-[#030712] flex items-center justify-center"
        >
          {/* CENTER */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">

            {/* LOGO */}
            <div className="relative flex flex-col items-center">

              {/* Glow */}
              <motion.div
                animate={{
                  scale: [0.9, 1.15, 1],
                  opacity: [0.1, 0.25, 0.1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute w-24 h-24 sm:w-36 sm:h-36 bg-cyan-500 blur-[40px] rounded-full"
              />

              {/* Logo */}
              <motion.img
                src={logo}
                alt="GR Minds"
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 h-12 sm:h-16 md:h-20 w-auto brightness-110"
              />
            </div>

            {/* CONTENT */}
            <div className="mt-6 sm:mt-8 flex flex-col items-center">

              {/* Progress Bar */}
              <div className="w-36 sm:w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="h-full w-1/2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                />
              </div>

              {/* Text */}
              <motion.p
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="mt-3 sm:mt-4 text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.35em] sm:tracking-[0.5em] text-cyan-400 text-center"
              >
                Initialising Systems
              </motion.p>
            </div>
          </div>

          {/* GRID */}
          <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:35px_35px]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;