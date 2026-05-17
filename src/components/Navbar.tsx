import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Menu,
  X,
  ArrowRight,
  Briefcase,
  ShieldCheck,
} from 'lucide-react';

import logo from '@/assets/logo-big-transparent.png';
import ThemeToggle from './ThemeToggle';
import PrivacyModal from './PrivacyModal';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  // Smooth scroll navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // FIX MOBILE FREEZE / STUCK SCROLL
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.touchAction = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.touchAction = 'auto';
    };
  }, [isMobileMenuOpen]);

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
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }

    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className={`
          fixed top-4 left-0 right-0 mx-auto z-[60]
          transition-all duration-300
          flex items-center justify-between
          px-5 py-3
          ${isScrolled
            ? 'w-[95%] md:w-[85%] lg:w-[75%] rounded-full bg-white/95 dark:bg-black/90 border border-slate-200 dark:border-white/10 shadow-xl shadow-slate-100/50 dark:shadow-[0_20px_50px_rgba(6,182,212,0.15)]'
            : 'w-full md:w-[98%] bg-transparent border-transparent'
          }
        `}
      >
        {/* ================= LOGO ================= */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 cursor-pointer group relative"
          onClick={() => handleNavClick('home')}
        >
          <div className="absolute inset-0 bg-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
          <img
            src={logo}
            alt="Logo"
            className="h-11 md:h-14 w-auto relative z-10 logo-glow brightness-110"
          />
        </motion.div>

        {/* ================= DESKTOP MENU ================= */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-1 bg-slate-200/50 dark:bg-white/5 p-1.5 rounded-full backdrop-blur-md border border-slate-200/40 dark:border-white/5">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.id)}
                className="px-4 py-2 text-[11px] font-black uppercase tracking-widest text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-white dark:hover:bg-white/10 rounded-full transition-all"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 ml-2">
            <ThemeToggle />

            <button
              onClick={() => handleNavClick('contact')}
              className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-black text-[11px] font-black uppercase rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-cyan-500/10"
            >
              Let's Innovate
            </button>
          </div>
        </div>

        {/* ================= MOBILE BUTTON ================= */}
        <div className="lg:hidden flex items-center gap-3">
          <ThemeToggle />

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black active:scale-95 transition-transform shadow-md"
            aria-label="Open Menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </motion.nav>

      {/* ================= MOBILE MENU BACKDROP ================= */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 z-[90] lg:hidden bg-black/50 dark:bg-black/80 backdrop-blur-sm transition-opacity duration-300"
        />
      )}

      {/* ================= FLOATING CURVY MOBILE MENU ================= */}
      <div
        className={`
          fixed top-4 right-4 bottom-4 z-[100] lg:hidden
          w-[92%] sm:w-[380px]
          bg-white dark:bg-[#030712]
          backdrop-blur-2xl
          border border-slate-200/50 dark:border-cyan-500/20
          rounded-[3.2rem]
          shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_50px_rgba(6,182,212,0.15)]
          transform transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
          will-change-transform
          ${isMobileMenuOpen
            ? 'translate-x-0 scale-100 opacity-100'
            : 'translate-x-[110%] scale-95 opacity-0'
          }
        `}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6 p-4 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full shadow-lg z-50 active:scale-95 transition-transform"
          aria-label="Close Menu"
        >
          <X size={24} strokeWidth={3} />
        </button>

        {/* CONTENT */}
        <div className="h-full flex flex-col px-6 pt-28 pb-8 overflow-y-auto">
          {/* NAVIGATION */}
          <div className="flex flex-col gap-3">
            {navLinks.map((link, i) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.id)}
                className="group flex items-center justify-between p-4 rounded-3xl w-full text-left transition-all duration-300 hover:bg-slate-100 dark:hover:bg-cyan-500/10 border border-transparent hover:border-slate-200/80 dark:hover:border-cyan-500/20 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs font-mono font-black text-cyan-500 dark:text-cyan-400 uppercase tracking-[0.25em]">
                    0{i + 1}
                  </span>

                  <span className="text-2xl md:text-3xl font-black uppercase tracking-tight text-slate-800 dark:text-slate-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors italic">
                    {link.name}
                  </span>
                </div>

                <ArrowRight
                  className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-cyan-500 dark:text-cyan-400"
                  size={20}
                />
              </button>
            ))}
          </div>

          {/* BOTTOM SECTION */}
          <div className="mt-auto pt-10 border-t border-slate-200 dark:border-white/10">
            <div className="grid grid-cols-2 gap-4">
              {/* CARD 1 */}
              <div className="p-5 rounded-[2.2rem] border border-slate-200 dark:border-cyan-500/20 bg-cyan-500/[0.06] dark:bg-cyan-400/[0.06] hover:scale-[1.02] transition-transform duration-300">
                <Briefcase
                  className="text-cyan-500 dark:text-cyan-400 mb-3"
                  size={20}
                />

                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1">
                  Careers
                </p>

                <p className="text-xs font-bold text-slate-900 dark:text-white">
                  Join the Tribe
                </p>
              </div>

              {/* CARD 2 */}
              <div className="p-5 rounded-[2.2rem] border border-slate-200 dark:border-purple-500/20 bg-purple-500/[0.06] dark:bg-purple-400/[0.06] hover:scale-[1.02] transition-transform duration-300">
                <ShieldCheck
                  className="text-purple-500 dark:text-purple-400 mb-3"
                  size={20}
                />

                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1">
                  Security
                </p>

                <p className="text-xs font-bold text-slate-900 dark:text-white">
                  Privacy Policy
                </p>
              </div>
            </div>

            {/* FOOTER */}
            <div className="mt-8 flex items-center justify-between">
              <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                © 2026 G.R. Minds Technologies.
              </p>

              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= PRIVACY MODAL ================= */}
      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />
    </>
  );
};

export default Navbar;