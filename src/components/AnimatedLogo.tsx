import { motion, useMotionValue, useSpring } from "framer-motion";
import logo from "@/assets/logo-big-transparent.png";

const AnimatedLogo = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 80, damping: 15 });
  const smoothY = useSpring(y, { stiffness: 80, damping: 15 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const offsetX = (e.clientX - rect.left - centerX) / 20;
    const offsetY = (e.clientY - rect.top - centerY) / 20;

    x.set(offsetX);
    y.set(offsetY);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      className="flex justify-center items-center"
    >
      <motion.div
        style={{ x: smoothX, y: smoothY }}
        className="relative"
      >
        {/* Glow layer */}
        <div className="absolute inset-0 blur-2xl bg-cyan-400/20 rounded-full" />

        {/* Logo */}
        <motion.img
          src={logo}
          alt="G.R Minds Technologies"
          className="w-44 md:w-64 relative z-10"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 1.5, -1.5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
};

export default AnimatedLogo;