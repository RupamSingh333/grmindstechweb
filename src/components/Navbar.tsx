import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Sparkles, Briefcase, ShieldCheck, Cpu } from 'lucide-react';
import logo from '@/assets/logo-big-transparent.png';
import ThemeToggle from './ThemeToggle';
import PrivacyModal from './PrivacyModal';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'home', id: 'home' },
    { name: 'services', id: 'services' },
    { name: 'about', id: 'about' },
    { name: 'teams', id: 'teams' },
    { name: 'contact', id: 'contact' },
  ];

  const handleNavClick = (linkId: string) => {
    if (linkId === 'privacy') {
      setIsPrivacyOpen(true);
    } else {
      const element = document.getElementById(linkId);
      if (element) {
        const offset = 100;
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
      <div className="fixed top-0 left-0 right-0 z-[60] flex justify-center pointer-events-none p-4 md:p-6">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`
            pointer-events-auto transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
            flex items-center justify-between px-8 py-4
            ${isScrolled 
              ? 'w-full md:w-[90%] lg:w-[80%] rounded-[2rem] bg-white/70 dark:bg-black/70 backdrop-blur-3xl border border-white/20 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)]' 
              : 'w-full bg-transparent border-transparent'}
          `}
        >
          {/* LOGO */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => handleNavClick('home')}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500 blur-2xl opacity-20 group-hover:opacity-60 transition-opacity duration-500" />
              <img 
                src={logo} 
                alt="Logo" 
                className="h-10 md:h-14 w-auto relative z-10 brightness-110 group-hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all duration-500" 
              />
            </div>
          </motion.div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.id)}
                  className="px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-cyan-500 transition-all group-hover:w-1/2" />
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <div className="h-6 w-[1px] bg-slate-200 dark:bg-white/10" />
              <ThemeToggle />
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(6,182,212,0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavClick('contact')}
                className="px-8 py-3.5 bg-slate-950 dark:bg-white text-white dark:text-black text-[10px] font-black uppercase tracking-widest rounded-2xl flex items-center gap-2 transition-all"
              >
                <Cpu size={14} className="animate-pulse" />
                Init Sequence
              </motion.button>
            </div>
          </div>

          {/* MOBILE TRIGGER */}
          <div className="lg:hidden flex items-center gap-4">
             <ThemeToggle />
             <motion.button 
               whileTap={{ scale: 0.9 }}
               onClick={() => setIsMobileMenuOpen(true)}
               className="p-4 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-black shadow-xl"
             >
               <Menu size={20} />
             </motion.button>
          </div>
        </motion.nav>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/90 backdrop-blur-2xl z-[70]"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] bg-white dark:bg-[#030712] z-[80] p-10 flex flex-col border-l border-white/10"
            >
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="self-end p-4 bg-slate-100 dark:bg-white/5 rounded-2xl mb-12"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => handleNavClick(link.id)}
                    className="text-4xl font-black uppercase tracking-tighter text-left flex items-center justify-between group"
                  >
                    <span className="group-hover:text-cyan-500 transition-colors italic">{link.name}</span>
                    <ArrowRight className="opacity-0 group-hover:opacity-100 transition-all text-cyan-500" size={32} />
                  </motion.button>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-4">
                <div className="p-6 rounded-[2rem] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                   <p className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-500 mb-2">System Status</p>
                   <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-bold">All Modules Active</span>
                   </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </>
  );
};

export default Navbar;