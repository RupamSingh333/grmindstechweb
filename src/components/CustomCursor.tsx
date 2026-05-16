import { motion, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [isHover, setIsHover] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // 🎯 Motion tracking
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // ⚡ Smooth spring
  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // ✅ Best device detection (mobile/tablet/touch)
    const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches;

    if (isTouchDevice) {
      setIsVisible(false);
      return;
    }

    setIsVisible(true);

    // 🖱️ Mouse move
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    // 🎯 Dynamic hover detection (works for all future elements too)
    const handleMouseOver = (e: any) => {
      const target = e.target as HTMLElement;

      if (
        target.closest("a, button, [role='button'], [data-cursor], .group")
      ) {
        setIsHover(true);
      } else {
        setIsHover(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // ❌ Don't render on mobile
  if (!isVisible) return null;

  return (
    <>

      {/* 🔵 OUTER RING (PORTAL) */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none flex items-center justify-center"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            width: isHover ? 80 : 32,
            height: isHover ? 80 : 32,
            borderWidth: isHover ? "1px" : "1.5px",
            borderColor: isHover ? "rgba(34, 211, 238, 0.8)" : "rgba(6, 182, 212, 0.4)",
            backgroundColor: isHover ? "rgba(34, 211, 238, 0.05)" : "transparent",
            scale: isHover ? 1.1 : 1,
          }}
          transition={{ type: "spring", stiffness: 250, damping: 25 }}
          className="rounded-full flex items-center justify-center backdrop-blur-[2px]"
        >
          {/* Subtle Inner Pulse during Hover */}
          {isHover && (
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [1, 1.5], opacity: [0.3, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="absolute inset-0 rounded-full border border-cyan-400"
            />
          )}
        </motion.div>
      </motion.div>

      {/* 🔵 INNER CORE */}
      <motion.div
        className="fixed top-0 left-0 z-[10000] pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            scale: isHover ? 0.5 : 1,
            backgroundColor: isHover ? "#fff" : "#06b6d4",
            boxShadow: isHover 
              ? "0 0 20px #fff" 
              : "0 0 10px #06b6d4",
          }}
          transition={{ duration: 0.3 }}
          className="w-2 h-2 rounded-full"
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;