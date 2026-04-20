import { Github, Linkedin, Twitter, Mail, Phone, ArrowUp } from 'lucide-react';
import PrivacyModal from './PrivacyModal';
import logo from '@/assets/logo-big-transparent.png';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      'Software Development',
      'Cloud Solutions',
      'Mobile Apps',
      'IT Consulting',
      'Bulk Messaging'
    ],
    company: [
      { name: 'About Us', id: 'about' },
      { name: 'Careers', id: 'careers' },
      { name: 'Contact', id: 'contact' },
      { name: 'Services', id: 'services' },
      { name: 'Privacy Policy', id: 'privacy' }
    ]
  };

  const handleLinkClick = (id) => {
    if (id === 'privacy') {
      setIsPrivacyOpen(true);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      
      <footer className="relative bg-white dark:bg-[#030712] pt-20 pb-12 overflow-hidden border-t border-slate-200 dark:border-white/5  inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] md:bg-[size:60px_60px] ">
        
        {/* Background Accent */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-t from-cyan-500/5 to-transparent pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-20">

            {/* --- BRAND COLUMN --- */}
            <div className="space-y-6">
              <div className="relative inline-block group cursor-pointer" onClick={scrollToTop}>
                <div className="absolute inset-0 bg-cyan-500/20 blur-2xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
                <img
                  src={logo}
                  alt="G.R. Minds"
                  className="h-16 md:h-20 w-auto relative z-10 logo-glow transition-transform group-hover:scale-105"
                />
              </div>

              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium max-w-full sm:max-w-xs">
                Engineering high-performance digital ecosystems. We transform bold concepts into scalable, future-ready realities.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-cyan-500 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/5 flex items-center justify-center">
                    <Mail size={14} />
                  </div>
                  <span className="text-sm font-bold tracking-tight">info@grminds.tech</span>
                </div>

                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-cyan-500 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/5 flex items-center justify-center">
                    <Phone size={14} />
                  </div>
                  <span className="text-sm font-bold tracking-tight">+91 75057 17444</span>
                </div>

                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-cyan-500 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/5 flex items-center justify-center">
                    <Phone size={14} />
                  </div>
                  <span className="text-sm font-bold tracking-tight">+91 85389 45025</span>
                </div>
              </div>
            </div>

            {/* --- SERVICES COLUMN --- */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-slate-900 dark:text-white">Our Expertise</h4>
              <ul className="space-y-4">
                {footerLinks.services.map((link) => (
                  <li key={link}>
                    <button 
                      onClick={() => handleLinkClick('services')}
                      className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-cyan-500 transition-all flex items-center gap-2 group"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/30 group-hover:bg-cyan-500 transition-colors" />
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* --- COMPANY COLUMN --- */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-slate-900 dark:text-white">Quick Access</h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <button 
                      onClick={() => handleLinkClick(link.id)}
                      className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-cyan-500 transition-all flex items-center gap-2 group"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-white/10 group-hover:bg-cyan-500 transition-colors" />
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* --- SOCIAL COLUMN --- */}
            <div className="flex flex-col items-start sm:items-start lg:items-end lg:text-right">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-slate-900 dark:text-white">Network</h4>

              <div className="flex gap-4 mb-8 justify-start sm:justify-start lg:justify-end w-full">
                {[{
                  icon: <Linkedin size={20} />,
                  url: 'https://www.linkedin.com/company/g-r-minds-technologies'
                },{
                  icon: <Twitter size={20} />,
                  url: 'https://twitter.com/g_rminds'
                },{
                  icon: <Github size={20} />,
                  url: 'https://github.com/g-r-minds'
                }].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.url}
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-cyan-500 hover:text-white transition-all"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>

              <p className="text-sm text-slate-500 dark:text-slate-500 font-medium mb-10 max-w-full sm:max-w-[200px]">
                Subscribe to our digital evolution. Stay ahead.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="p-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900"
              >
                <ArrowUp />
              </motion.button>
            </div>

          </div>

          {/* --- BOTTOM BAR --- */}
          <div className="pt-10 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 md:gap-6 text-center md:text-left">
            
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-600">
              © 2026 <span className="text-slate-900 dark:text-white">G.R. Minds Technologies</span>. Engineered for Excellence.
            </p>

            <div className="flex items-center gap-6 sm:gap-8 justify-center md:justify-end flex-wrap text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
              <span onClick={() => handleLinkClick('privacy')} className="hover:text-cyan-500 cursor-pointer">Terms</span>
              <span onClick={() => handleLinkClick('privacy')} className="hover:text-cyan-500 cursor-pointer">Privacy</span>
              <span onClick={() => handleLinkClick('contact')} className="hover:text-cyan-500 cursor-pointer">Support</span>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;