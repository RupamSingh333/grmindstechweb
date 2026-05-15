import React, { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface AntigravityWrapperProps {
  children: ReactNode;
  className?: string;
  floatRange?: [number, number];
  floatDuration?: number;
  parallaxStrength?: number;
  rotationRange?: [number, number];
}

const AntigravityWrapper = ({
  children,
  className = "",
  floatRange = [-15, 15],
  floatDuration = 5,
  parallaxStrength = 60,
  rotationRange = [-2, 2],
}: AntigravityWrapperProps) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Check for mobile (simple window check)
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const strength = isMobile ? parallaxStrength * 0.4 : parallaxStrength;
  const range = isMobile ? [floatRange[0] * 0.5, floatRange[1] * 0.5] : floatRange;

  // Parallax effect
  const yOffset = useTransform(scrollYProgress, [0, 1], [strength, -strength]);
  const springY = useSpring(yOffset, { stiffness: 80, damping: 20 });

  return (
    <motion.div
      ref={containerRef}
      style={{ y: springY }}
      animate={{
        y: [range[0], range[1], range[0]],
        rotate: [rotationRange[0], rotationRange[1], rotationRange[0]],
      }}
      transition={{
        y: { duration: floatDuration, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: floatDuration * 1.5, repeat: Infinity, ease: "easeInOut" },
      }}
      className={`relative ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default AntigravityWrapper;
