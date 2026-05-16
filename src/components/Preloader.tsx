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
            y: "-100%",
            transition: {
              duration: 1.2,
              ease: [0.85, 0, 0.15, 1],
              delay: 0.5
            }
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-[#030712] overflow-hidden"
        >
          {/* Advanced Background: Grid + Moving Glows */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-cyan-500/10 rounded-full blur-[150px]"
          />

          <div className="relative flex flex-col items-center">
            {/* Concentric Rotating Rings */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">

              {/* Outer Ring: Slow Dash Offset */}
              <svg className="absolute inset-0 w-full h-full -rotate-90">
                <circle
                  cx="50%" cy="50%" r="48%"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeDasharray="10 20"
                  className="text-slate-200 dark:text-white/5"
                />
                <motion.circle
                  cx="50%" cy="50%" r="48%"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-cyan-500/40"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                />
              </svg>

              {/* Middle Ring: Fast Counter-Rotation */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute w-[85%] h-[85%] border border-dashed border-cyan-500/20 rounded-full"
              />

              {/* Inner Progress Ring: Primary Filler */}
              <svg className="absolute w-[75%] h-[75%] -rotate-90">
                <circle
                  cx="50%" cy="50%" r="45%"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  className="text-slate-100 dark:text-white/5"
                />
                <motion.circle
                  cx="50%" cy="50%" r="45%"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  className="text-cyan-500 dark:text-cyan-400"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2.8, ease: [0.65, 0, 0.35, 1] }}
                />
              </svg>

              {/* Centered Logo with Scanner Effect */}
              <div className="relative flex items-center justify-center overflow-hidden rounded-full p-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  className="relative z-10"
                >
                  <img src={logo} alt="Logo" className="h-16 sm:h-20 w-auto logo-glow" />

                  {/* Scanner Beam */}
                  <motion.div
                    animate={{ top: ["-10%", "110%", "-10%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-1 bg-cyan-500/50 blur-sm shadow-[0_0_15px_rgba(6,182,212,0.5)] z-20"
                  />
                </motion.div>
              </div>
            </div>

            {/* Status Information */}
            <div className="mt-12 flex flex-col items-center gap-4">
              {/* Percentage Counter */}
              <div className="flex items-baseline gap-1 font-mono text-4xl font-black text-slate-900 dark:text-white italic">
                <Counter target={100} duration={2.5} />
                <span className="text-sm text-cyan-500">%</span>
              </div>

              {/* System Messages */}
              <div className="h-4 overflow-hidden text-center">
                <motion.p
                  animate={{
                    y: [20, 0, 0, -20],
                    opacity: [0, 1, 1, 0]
                  }}
                  transition={{
                    duration: 2.8,
                    times: [0, 0.1, 0.9, 1],
                    repeat: 0
                  }}
                  className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500"
                >
                  Initializing Digital Ecosystems...
                </motion.p>
              </div>
            </div>
          </div>

          {/* Decorative Corner Brackets */}
          {[
            "top-10 left-10 border-t-2 border-l-2",
            "top-10 right-10 border-t-2 border-r-2",
            "bottom-10 left-10 border-b-2 border-l-2",
            "bottom-10 right-10 border-b-2 border-r-2"
          ].map((pos, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.2 }}
              className={`absolute w-8 h-8 border-cyan-500/30 ${pos}`}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- SUB-COMPONENTS ---

const Counter = ({ target, duration }: { target: number, duration: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [target, duration]);

  return <span>{count}</span>;
};


export default Preloader;