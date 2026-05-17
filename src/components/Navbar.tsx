import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Sparkles, Briefcase, ShieldCheck } from 'lucide-react';
import logo from '@/assets/logo-big-transparent.png';
import ThemeToggle from './ThemeToggle';
import PrivacyModal from './PrivacyModal';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'home', id: 'home' },
    { name: 'services', id: 'services' },
    { name: 'about', id: 'about' },
    { name: 'teams', id: 'teams' },
    { name: 'contact', id: 'contact' },
    // { name: 'careers', id: 'careers' },
    // { name: 'privacy', id: 'privacy' },
  ];

  const handleNavClick = (linkId: string) => {
    if (linkId === 'privacy') {
      setIsPrivacyOpen(true);
    } else {
      const element = document.getElementById(linkId);
      if (element) {
        // Offset for the sticky header height
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`
          fixed top-4 left-0 right-0 mx-auto z-[60] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
          flex items-center justify-between px-6 py-3
          ${isScrolled 
            ? 'w-[95%] md:w-[85%] lg:w-[75%] rounded-full bg-white/60 dark:bg-black/60 backdrop-blur-2xl border border-white/20 dark:border-white/10 shadow-2xl saturate-150' 
            : 'w-full md:w-[98%] rounded-none bg-transparent border-transparent'}
        `}
      >
          {/* --- LOGO: INCREASED SIZE & GLOW --- */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => handleNavClick('home')}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400 blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              <img 
                src={logo} 
                alt="Logo" 
                className="h-12 md:h-16 w-auto relative z-10 logo-glow brightness-110" 
              />
            </div>
          </motion.div>

          {/* --- DESKTOP MENU --- */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-1 bg-slate-500/10 dark:bg-white/5 p-1.5 rounded-full backdrop-blur-md">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.id)}
                  className="px-4 py-2 text-[11px] font-black uppercase tracking-widest text-slate-700 dark:text-slate-200 hover:text-cyan-500 dark:hover:text-cyan-400 rounded-full transition-all hover:bg-white/80 dark:hover:bg-white/10"
                >
                  {link.name}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-3 ml-2">
              <ThemeToggle />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavClick('contact')}
                className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-black text-[11px] font-black uppercase tracking-tighter rounded-full shadow-xl shadow-cyan-500/10"
              >
                Let's Innovate
              </motion.button>
            </div>
          </div>

          {/* --- MOBILE TRIGGER --- */}
          <div className="lg:hidden flex items-center gap-3">
             <ThemeToggle />
             <button 
               onClick={() => setIsMobileMenuOpen(true)}
               className="p-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black active:scale-95 transition-transform cursor-pointer"
               aria-label="Open Menu"
             >
               <Menu size={22} />
             </button>
          </div>
        </motion.nav>

      {/* --- MODERN MOBILE MENU OVERHAUL --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] lg:hidden overflow-hidden"
          >
            {/* Lightweight High-Performance Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-white dark:bg-[#030712] shadow-2xl"
            />


            {/* Content Container (Layered above the backdrop) */}
            <div className="relative z-10 h-full flex flex-col p-8 pt-24">
              {/* Close Button */}
              <motion.button 
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 90 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-6 right-6 md:right-8 p-4 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full shadow-2xl z-50 cursor-pointer active:scale-95 transition-transform"
                aria-label="Close Menu"
              >
                <X size={24} strokeWidth={3} />
              </motion.button>

              {/* Navigation Links */}
              <div className="flex flex-col gap-4 mt-8">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, x: -50, rotateX: -45 }}
                    animate={{ opacity: 1, x: 0, rotateX: 0 }}
                    exit={{ opacity: 0, x: -20, transition: { delay: i * 0.03 } }}
                    transition={{ 
                      type: "spring", 
                      damping: 20, 
                      stiffness: 100, 
                      delay: 0.1 + (i * 0.1) 
                    }}
                    onClick={() => handleNavClick(link.id)}
                    className="group flex items-center gap-6 py-2 text-left w-full cursor-pointer"
                  >
                    <span className="text-xs font-black text-cyan-500/70 dark:text-cyan-400/80 uppercase tracking-[0.3em] font-mono">
                      0{i + 1}
                    </span>
                    <div className="relative overflow-hidden">
                      <span className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-slate-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors duration-300 italic block">
                        {link.name}
                      </span>
                      <motion.div 
                        className="absolute bottom-0 left-0 h-1 bg-cyan-500 dark:bg-cyan-400"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <ArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-cyan-500 dark:text-cyan-400" size={32} />
                  </motion.button>
                ))}
              </div>

              {/* Secondary Actions / Info */}
              <div className="mt-auto pt-10 border-t border-slate-200 dark:border-white/10">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { 
                      icon: Briefcase, 
                      label: "Careers", 
                      value: "Join the Tribe", 
                      bg: "bg-cyan-500/[0.08] dark:bg-cyan-400/[0.08]", 
                      border: "border-slate-200 dark:border-cyan-500/20 hover:border-cyan-500 dark:hover:border-cyan-400",
                      iconColor: "text-cyan-600 dark:text-cyan-400"
                    },
                    { 
                      icon: ShieldCheck, 
                      label: "Security", 
                      value: "Privacy Policy", 
                      bg: "bg-purple-500/[0.08] dark:bg-purple-400/[0.08]", 
                      border: "border-slate-200 dark:border-purple-500/20 hover:border-purple-500 dark:hover:border-purple-400",
                      iconColor: "text-purple-600 dark:text-purple-400"
                    }
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ delay: 0.5 + (i * 0.1) }}
                      className={`${item.bg} ${item.border} p-5 rounded-[2rem] border backdrop-blur-md group cursor-pointer transition-all duration-300`}
                    >
                      <item.icon className={`${item.iconColor} mb-3 group-hover:scale-110 transition-transform`} size={20} />
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1">
                        {item.label}
                      </p>
                      <p className="text-xs font-bold text-slate-900 dark:text-white">
                        {item.value}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="mt-8 flex items-center justify-between"
                >
                  <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                    © 2024 GRMinds Tech
                  </p>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </>
  );
};

export default Navbar;