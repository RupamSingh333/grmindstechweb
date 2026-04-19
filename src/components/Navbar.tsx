import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = ['home', 'services', 'teams', 'about','careers', 'contact'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-background/70 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <img
            src={logo}
            alt="G.R Minds Technologies"
            className="h-12 sm:h-14 md:h-18 lg:h-20 w-auto mt-1 cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => scrollToSection('home')}
          />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 font-medium text-sm">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className="relative hover:text-primary transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </button>
            ))}
            {/* <Button
              size="sm"
              className="ml-4 bg-primary text-background hover:bg-primary/80 transition-colors"
              onClick={() => scrollToSection('contact')}
            >
              Get Started
            </Button> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-7 w-7 text-primary" />
            ) : (
              <Menu className="h-7 w-7 text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed inset-0 bg-background/90 backdrop-blur-md z-40 flex flex-col items-center justify-center gap-8 text-lg font-semibold"
          >
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className="hover:text-primary transition-colors"
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </button>
            ))}
            {/* <Button
              size="md"
              className="bg-primary text-background hover:bg-primary/80 transition-colors mt-4"
              onClick={() => scrollToSection('contact')}
            >
              Get Started
            </Button> */}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;