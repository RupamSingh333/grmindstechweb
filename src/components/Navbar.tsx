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
      <div className="fixed top-0 left-0 right-0 z-[60] flex justify-center pointer-events-none">
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className={`
            mt-4 pointer-events-auto transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
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
             <motion.button 
               whileTap={{ scale: 0.9 }}
               onClick={() => setIsMobileMenuOpen(true)}
               className="p-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black"
             >
               <Menu size={22} />
             </motion.button>
          </div>
        </motion.nav>
      </div>

      {/* --- MOBILE TRAY MENU (ALL LINKS RESTORED) --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[70]"
            />

            <motion.div
              initial={{ y: "-100%", borderRadius: "0 0 100px 100px" }}
              animate={{ y: 0, borderRadius: "0 0 0 0" }}
              exit={{ y: "-100%", borderRadius: "0 0 100px 100px" }}
              transition={{ type: "spring", damping: 35, stiffness: 300 }}
              className="fixed top-0 left-0 right-0 bg-white dark:bg-[#030712] z-[80] p-8 pt-24 shadow-2xl flex flex-col min-h-[85vh]"
            >
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-6 right-8 p-4 bg-slate-100 dark:bg-white/5 rounded-full"
              >
                <X size={28} />
              </button>

              <div className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    onClick={() => handleNavClick(link.id)}
                    className="text-5xl font-black uppercase tracking-tighter text-left text-slate-900 dark:text-white flex items-center justify-between group py-2"
                  >
                    <span className="group-hover:text-cyan-500 transition-colors">{link.name}</span>
                    <ArrowRight className="opacity-0 group-hover:opacity-100 transition-all text-cyan-500" size={40} />
                  </motion.button>
                ))}
              </div>

              {/* Bottom Tray Extra Info */}
              <div className="mt-auto grid grid-cols-2 gap-4 pt-10 border-t border-slate-100 dark:border-white/5">
                <div className="p-4 rounded-3xl bg-slate-50 dark:bg-white/5 flex flex-col gap-2">
                  <Briefcase className="text-cyan-500" size={20} />
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Careers</p>
                  <p className="text-xs font-bold dark:text-white">Join the Tribe</p>
                </div>
                <div className="p-4 rounded-3xl bg-slate-50 dark:bg-white/5 flex flex-col gap-2">
                  <ShieldCheck className="text-cyan-500" size={20} />
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Security</p>
                  <p className="text-xs font-bold dark:text-white">Privacy Policy</p>
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