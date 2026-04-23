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

      {/* 🔵 OUTER RING */}
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
            width: isHover ? 48 : 24,
            height: isHover ? 48 : 24,
            borderWidth: isHover ? "1px" : "1.5px",
            borderColor: isHover ? "#22d3ee" : "#06b6d4",
            opacity: isHover ? 1 : 0.4,
            scale: isHover ? 1.2 : 1,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="rounded-full border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
        />
      </motion.div>

      {/* 🔵 INNER DOT */}
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
            scale: isHover ? 0 : 1,
            opacity: isHover ? 0 : 1,
          }}
          transition={{ duration: 0.2 }}
          className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_10px_#06b6d4]"
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;