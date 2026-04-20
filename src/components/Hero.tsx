import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useInView,
} from "framer-motion";
import { ArrowRight, Code, Sparkles, Zap, Shield, Rocket, Globe, Smartphone } from "lucide-react";

const Hero = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  // --- MOUSE PARALLAX (Desktop Only) ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX - innerWidth / 2) / 25);
    mouseY.set((clientY - innerHeight / 2) / 25);
  };

  // --- SCROLL ANIMATIONS ---
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "circOut" } },
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full flex flex-col items-center justify-start overflow-hidden 
                 bg-[#fafafa] dark:bg-[#030712] transition-colors duration-700 
                 pt-28 pb-16 md:pt-45 md:pb-32"
    >
      {/* --- BACKGROUND ANIMATIONS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Floating Geometric Shapes (Animated for mobile/desktop) */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[10%] w-32 h-32 md:w-64 md:h-64 bg-cyan-500/10 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] blur-3xl"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            x: [0, 15, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[20%] right-[5%] w-40 h-40 md:w-80 md:h-80 bg-indigo-500/10 rounded-full blur-3xl"
        />

        {/* Tech Mesh Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] md:bg-[size:60px_60px]" />
      </div>

      {/* --- MOUSE FOLLOWER ORB --- */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="hidden md:block absolute top-0 left-0 w-full h-full pointer-events-none z-0"
      >
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[120px]" />
      </motion.div>

      {/* --- MAIN CONTENT --- */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        style={{ y: textY, opacity: opacityFade }}
        className="relative z-10 container mx-auto px-6 text-center"
      >
        {/* Animated Badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-6 md:mb-10">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-xl shadow-cyan-500/5"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-slate-600 dark:text-slate-300">
              Transforming the Digital Landscape
            </span>
          </motion.div>
        </motion.div>

        {/* Responsive Typography */}
        <motion.div variants={itemVariants} className="mb-6 md:mb-10">
          <h1 className="text-5xl sm:text-7xl md:text-[120px] font-black tracking-tighter leading-[0.8] text-slate-900 dark:text-white">
            G.R MINDS <br />
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-blue-500 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-500 animate-gradient-x">
              TECHNOLOGIES
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 md:mb-14 px-4 leading-relaxed"
        >
          Engineering <span className="text-cyan-500 font-semibold italic">scalable</span> solutions for a connected world. We turn bold ideas into high-performance reality.
        </motion.p>

        {/* Action Buttons (Mobile Stackable) */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-16 md:mb-24">
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(6, 182, 212, 0.25)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-black font-extrabold rounded-2xl flex items-center justify-center gap-3 group transition-all"
          >
            Start Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          
          <motion.button 
             whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
             className="w-full sm:w-auto px-10 py-5 text-slate-900 dark:text-white font-bold border-2 border-slate-200 dark:border-slate-800 rounded-2xl transition-all"
          >
            View Work
          </motion.button>
        </motion.div>

        {/* Mobile-Responsive Grid (Becomes 2x2 on Mobile) */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-6xl mx-auto px-2"
        >
          {[
            { icon: <Zap />, title: "Velocity", desc: "Fast Delivery", color: "bg-yellow-500/10 text-yellow-600" },
            { icon: <Smartphone />, title: "Mobile", desc: "Native Feel", color: "bg-cyan-500/10 text-cyan-600" },
            { icon: <Shield />, title: "Trust", desc: "Secure Core", color: "bg-emerald-500/10 text-emerald-600" },
            { icon: <Globe />, title: "Scale", desc: "Global Infra", color: "bg-purple-500/10 text-purple-600" },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-4 md:p-6 rounded-2xl bg-white/40 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 backdrop-blur-md text-left flex flex-col gap-2 md:gap-4 group cursor-default"
            >
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center ${card.color} transition-transform group-hover:rotate-12`}>
                {card.icon}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm md:text-base">{card.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* --- FLOATING SCROLL CUE --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="hidden md:flex absolute bottom-8 flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Explore</span>
        <div className="w-[2px] h-12 bg-gradient-to-b from-cyan-500 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;