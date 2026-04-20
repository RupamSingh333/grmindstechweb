import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeToggle = () => {
  // Initialize state directly from localStorage or default to 'dark'
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      return (saved as 'light' | 'dark') || 'dark';
    }
    return 'dark';
  });

  // Apply theme class on mount and whenever theme changes
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center h-10 w-10 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-md overflow-hidden group"
      aria-label="Toggle Theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'dark' ? (
          <motion.div
            key="moon"
            initial={{ y: 30, opacity: 0, rotate: 45 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -30, opacity: 0, rotate: -45 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <Moon className="h-5 w-5 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ y: 30, opacity: 0, rotate: -45 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -30, opacity: 0, rotate: 45 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <Sun className="h-5 w-5 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]" />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
    </button>
  );
};

export default ThemeToggle;