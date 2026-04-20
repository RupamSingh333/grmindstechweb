import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const addHover = () => setIsHover(true);
    const removeHover = () => setIsHover(false);

    window.addEventListener("mousemove", moveCursor);

    const elements = document.querySelectorAll(
      "a, button, [data-cursor]"
    );

    elements.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <>
      {/* 🔵 OUTER RING */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          width: isHover ? 60 : 40,
          height: isHover ? 60 : 40,
          opacity: isHover ? 0.6 : 0.3,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <div className="w-full h-full rounded-full border border-cyan-400 backdrop-blur-sm" />
      </motion.div>

      {/* 🔵 INNER DOT */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        animate={{
          x: position.x - 5,
          y: position.y - 5,
          scale: isHover ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="w-2 h-2 rounded-full bg-cyan-500" />
      </motion.div>
    </>
  );
};

export default CustomCursor;