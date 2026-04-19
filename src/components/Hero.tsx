import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { AnimatedSphere, FloatingCubes } from './Scene3D';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import { useRef, useEffect, useState } from 'react';

const Hero = () => {
  const sectionRef = useRef(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24"
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          scale,
        }}
      >
        {/* 🔥 Fixed overlay */}
        <div className="absolute inset-0 
          bg-white/40 dark:bg-background/70 
          backdrop-blur-[2px] md:backdrop-blur-sm
          transition-all duration-500" /> 
      </motion.div>

      {/* 3D Scene */}
      <div className="absolute inset-0 z-10">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 7]} />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />

          <ambientLight intensity={isDark ? 0.5 : 1.2} />
          <pointLight position={[10, 10, 10]} intensity={isDark ? 1 : 2} />
          <pointLight position={[-10, -10, -10]} color="#06b6d4" intensity={isDark ? 0.5 : 1} />

          <AnimatedSphere isDark={isDark} />
          <FloatingCubes isDark={isDark} />
        </Canvas>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-20 container mx-auto px-4"
        style={{ y, opacity }}
      >
        <div className="max-w-4xl mx-auto text-center">

          <h1 className="
            text-5xl md:text-7xl font-bold mb-6
            text-gray-900 dark:text-foreground
            bg-gradient-to-r from-blue-600 to-cyan-500
            dark:bg-none
            bg-clip-text text-transparent
            dark:text-foreground
          ">
            G.R Minds Technologies
          </h1>

          <p className="text-lg md:text-2xl text-gray-700 dark:text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transforming Ideas Into Digital Reality Through Innovation & Excellence
          </p>

          <div className="mt-16">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="inline-flex flex-col items-center gap-2   text-gray-600 dark:text-muted-foreground cursor-pointer"
              onClick={() => {
                const section = document.getElementById('services');
                section?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="text-sm">Scroll to explore</span>
              <ChevronDown className="h-6 w-6" />
            </motion.div>
          </div>

        </div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;