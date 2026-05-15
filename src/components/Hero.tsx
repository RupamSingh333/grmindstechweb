import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useInView,
} from "framer-motion";
import { ArrowRight, Code, Sparkles, Zap, Shield, Rocket, Globe, Smartphone, Star, Cpu, Brain, Network } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import AntigravityWrapper from "./AntigravityWrapper";
import AIFloatingNodes from "./AIFloatingNodes";

const Hero = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  // --- MOUSE PARALLAX (Desktop Only) ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX - innerWidth / 2) / 35);
    mouseY.set((clientY - innerHeight / 2) / 35);
  };

  // --- SCROLL ANIMATIONS ---
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);
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
      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <AIFloatingNodes />
        
        {/* Animated Background Orbs - Theme Aware */}
        <motion.div
          animate={{
            y: [0, -40, 0],
            rotate: [0, 20, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[5%] left-[-5%] w-72 h-72 md:w-[600px] md:h-[600px] bg-cyan-500/20 dark:bg-cyan-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-normal"
        />
        <motion.div
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
            rotate: [0, -20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-[10%] right-[-5%] w-80 h-80 md:w-[700px] md:h-[700px] bg-indigo-500/20 dark:bg-indigo-500/10 rounded-full blur-[140px] mix-blend-multiply dark:mix-blend-normal"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[800px] md:h-[800px] bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-[160px]"
        />

        {/* Patterns */}
        <div className="absolute inset-0 opacity-[0.08] dark:opacity-[0.05] pointer-events-none 
        [background-image:radial-gradient(#000_1px,transparent_1px)] dark:[background-image:radial-gradient(#fff_1px,transparent_1px)] 
        [background-size:24px_24px] md:[background-size:48px_48px]" />
        
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:80px_80px]" />
      </div>

      {/* --- MOUSE FOLLOWER ORB --- */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="hidden md:block absolute top-0 left-0 w-full h-full pointer-events-none z-0"
      >
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-400/5 rounded-full blur-[150px]" />
      </motion.div>

      {/* --- MAIN CONTENT --- */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        style={{ y: textY, opacity: opacityFade }}
        className="relative z-10 container mx-auto px-6 text-center"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-6 md:mb-10">
          <AntigravityWrapper floatRange={[-5, 5]} floatDuration={3} parallaxStrength={20}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-xl shadow-xl shadow-cyan-500/5"
            >
              <Cpu className="w-3 h-3 text-cyan-500" />
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
                Next-Gen AI Solutions
              </span>
            </motion.div>
          </AntigravityWrapper>
        </motion.div>

        {/* Heading */}
        <motion.div variants={itemVariants} className="mb-6 md:mb-10">
          <h1 className="text-5xl sm:text-7xl md:text-[120px] font-black tracking-tighter leading-[0.8] text-slate-900 dark:text-white">
            GR MINDS <br />
            <span className="mt-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 dark:from-cyan-300 dark:via-blue-400 dark:to-purple-500 animate-gradient-x">
              <Typewriter
                words={["INTELLIGENCE", "AUTOMATION", "INNOVATION", "SOFTWARE"]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={150}
              />
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          variants={itemVariants}
          className="max-w-3xl mx-auto mb-10 md:mb-16"
        >
          <p className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            Empowering businesses with <span className="text-cyan-500 font-bold">Elite AI Engineering</span> and <span className="text-indigo-500 font-bold">Scalable Software</span> architectures.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto px-2"
        >
          {[
            { icon: <Brain />, title: "AI Core", desc: "Smart Systems", color: "text-cyan-500" },
            { icon: <Network />, title: "Neural", desc: "Global Edge", color: "text-indigo-500" },
            { icon: <Zap />, title: "Fast", desc: "Rapid Dev", color: "text-amber-500" },
            { icon: <Shield />, title: "Secure", desc: "Ironclad Code", color: "text-emerald-500" },
          ].map((card, i) => (
            <AntigravityWrapper key={i} floatRange={[-10, 10]} floatDuration={4 + i} parallaxStrength={30 + i * 10}>
              <motion.div
                whileHover={{ y: -5, scale: 1.05 }}
                className="group p-6 md:p-8 h-full rounded-[2rem] bg-white/40 dark:bg-slate-950/40 border border-slate-200 dark:border-white/5 backdrop-blur-xl text-left flex flex-col gap-4 transition-all hover:border-cyan-500/50 shadow-2xl shadow-transparent hover:shadow-cyan-500/10"
              >
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center bg-slate-50 dark:bg-white/5 transition-colors group-hover:bg-cyan-500/10 ${card.color}`}>
                  {React.cloneElement(card.icon as React.ReactElement, { className: "w-6 h-6 md:w-8 md:h-8" })}
                </div>
                <div>
                  <h3 className="font-black text-lg md:text-xl uppercase tracking-tighter">{card.title}</h3>
                  <p className="text-xs md:text-sm opacity-60 font-medium">{card.desc}</p>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                   <ArrowRight className="w-4 h-4 text-cyan-500" />
                </div>
              </motion.div>
            </AntigravityWrapper>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;