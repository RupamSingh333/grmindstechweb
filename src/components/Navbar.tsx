import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';
import ThemeToggle from './ThemeToggle';
import PrivacyModal from './PrivacyModal';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  // 1. Scroll Effect for Navbar Background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Prevent Body Scroll when Mobile Menu is Open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    'home',
    'services',
    'teams',
    'about',
    'careers',
    'contact',
    'privacy'
  ];

  const handleNavClick = (link: string) => {
    if (link === 'privacy') {
      setIsPrivacyOpen(true);
    } else {
      const element = document.getElementById(link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false); // Mobile menu band karne ke liye
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-background/80 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
          }`}
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              className="cursor-pointer flex items-center"
              onClick={() => handleNavClick('home')}
            >
              <img
                src={logo}
                alt="G.R Minds Technologies"
                className="h-10 md:h-14 w-auto hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <ul className="flex items-center gap-6 lg:gap-8 text-sm font-medium">
                {navLinks.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => handleNavClick(link)}
                      className="hover:text-primary transition-colors capitalize"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="border-l pl-6 border-border">
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="md:hidden flex items-center gap-4">
              <ThemeToggle />
              <button
                className="relative z-[60] p-2 text-primary"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            // pt-24 se top space fix ho jayegi
            className="fixed inset-0 bg-background z-[60] flex flex-col items-center pt-24 gap-8 text-2xl font-semibold"
          >
            {/* --- YEH HAI CLOSE BUTTON JO OVERLAY KE ANDAR HOGA --- */}
            <button
              className="absolute top-6 right-6 p-2 text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>

            {/* Nav Links */}
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => handleNavClick(link)}
                className="hover:text-primary transition-colors capitalize tracking-wide"
              >
                {link}
              </button>
            ))}

            {/* Optional: Mobile menu mein niche theme toggle */}
            <div className="mt-4 scale-125">
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Privacy Modal */}
      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />
    </>
  );
};

export default Navbar;