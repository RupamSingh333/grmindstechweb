import React, { useMemo } from "react";
import { motion } from "framer-motion";

const AIFloatingNodes = () => {
  const nodes = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 3,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
      color: i % 2 === 0 ? "text-cyan-500" : "text-indigo-500",
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <svg className="w-full h-full opacity-30 dark:opacity-20">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {nodes.map((node, i) => (
          <React.Fragment key={node.id}>
            <motion.circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r={node.size}
              fill="currentColor"
              className={node.color}
              style={{ filter: "url(#glow)" }}
              animate={{
                cx: [`${node.x}%`, `${(node.x + 8) % 100}%`, `${node.x}%`],
                cy: [`${node.y}%`, `${(node.y - 12) % 100}%`, `${node.y}%`],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: node.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: node.delay,
              }}
            />
            {nodes.slice(i + 1, i + 3).map((other, j) => (
              <motion.line
                key={`${node.id}-${other.id}`}
                x1={`${node.x}%`}
                y1={`${node.y}%`}
                x2={`${other.x}%`}
                y2={`${other.y}%`}
                stroke="currentColor"
                strokeWidth="1"
                className={`${node.color} opacity-20`}
                animate={{
                  x1: [`${node.x}%`, `${(node.x + 8) % 100}%`, `${node.x}%`],
                  y1: [`${node.y}%`, `${(node.y - 12) % 100}%`, `${node.y}%`],
                  x2: [`${other.x}%`, `${(other.x + 8) % 100}%`, `${other.x}%`],
                  y2: [`${other.y}%`, `${(other.y - 12) % 100}%`, `${other.y}%`],
                }}
                transition={{
                  duration: node.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: node.delay,
                }}
              />
            ))}
          </React.Fragment>
        ))}
      </svg>
    </div>
  );
};

export default AIFloatingNodes;
