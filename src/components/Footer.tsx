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
      // { name: 'Careers', id: 'careers' },
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
      
      <footer className="relative bg-transparent pt-20 pb-10 overflow-hidden border-t border-slate-200 dark:border-white/5 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] md:bg-[size:60px_60px]">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic leading-none dark:text-white">
                READY TO <br />
                <span className="text-cyan-500">INNOVATE?</span>
              </h3>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleLinkClick('contact')}
              className="px-10 py-4 bg-slate-900 dark:bg-white text-white dark:text-black font-black uppercase tracking-widest text-xs rounded-full shadow-2xl hover:shadow-cyan-500/20 transition-all"
            >
              Let's Talk
            </motion.button>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* --- BRAND --- */}
            <div className="space-y-6">
              <div className="group cursor-pointer inline-block" onClick={scrollToTop}>
                <img src={logo} alt="G.R. Minds" className="h-16 w-auto logo-glow" />
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-bold">
                Engineering high-performance digital ecosystems for a future-ready world.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, url: 'https://www.linkedin.com/company/g-r-minds-technologies' },
                  { icon: Twitter, url: 'https://twitter.com/g_rminds' },
                  { icon: Github, url: 'https://github.com/g-r-minds' }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-cyan-500 transition-all"
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* --- EXPERTISE --- */}
            <div className="lg:pl-8">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-cyan-500 italic">Expertise</h4>
              <ul className="space-y-4">
                {footerLinks.services.map((link) => (
                  <li key={link}>
                    <button 
                      onClick={() => handleLinkClick('services')}
                      className="text-sm font-black uppercase tracking-tight text-slate-600 dark:text-slate-400 hover:text-cyan-500 transition-all flex items-center gap-3 group text-left italic"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-white/10 group-hover:bg-cyan-500" />
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* --- LINKS --- */}
            <div className="lg:pl-8">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-purple-500 italic">Links</h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <button 
                      onClick={() => handleLinkClick(link.id)}
                      className="text-sm font-black uppercase tracking-tight text-slate-600 dark:text-slate-400 hover:text-purple-500 transition-all flex items-center gap-3 group text-left italic"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-white/10 group-hover:bg-purple-500" />
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* --- REACH US --- */}
            <div className="lg:text-right flex flex-col lg:items-end space-y-6">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 italic">Reach Us</h4>
              <div className="space-y-4 w-full text-sm font-black uppercase tracking-tight text-slate-600 dark:text-slate-300 italic">
                <p className="hover:text-cyan-500 cursor-pointer transition-colors">info@grminds.tech</p>
                <p className="hover:text-cyan-500 cursor-pointer transition-colors">+91 75057 17444</p>
                <p className="hover:text-cyan-500 cursor-pointer transition-colors">+91 85389 45025</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="w-14 h-14 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center shadow-2xl"
              >
                <ArrowUp size={24} strokeWidth={3} />
              </motion.button>
            </div>
          </div>

          {/* --- COPYRIGHT --- */}
          <div className="pt-10 border-t border-slate-100 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              © 2026 G.R. Minds Technologies. Engineered for Excellence.
            </p>
            <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              <button onClick={() => handleLinkClick('privacy')} className="hover:text-cyan-500">Terms</button>
              <button onClick={() => handleLinkClick('privacy')} className="hover:text-cyan-500">Privacy</button>
              <button onClick={() => handleLinkClick('contact')} className="hover:text-cyan-500">Support</button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;