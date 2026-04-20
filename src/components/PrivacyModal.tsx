import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, Lock, Eye, RefreshCw, Mail } from 'lucide-react';
import { useEffect } from 'react';

const PrivacyModal = ({ isOpen, onClose }: any) => {

  // Prevent background scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const sections = [
    {
      icon: <Eye className="w-5 h-5 text-cyan-500" />,
      title: "1. Information We Collect",
      content: "We may collect personal information such as your name, email address, phone number, and any details you provide when contacting us or using our services."
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-blue-500" />,
      title: "2. How We Use Your Information",
      content: "We use your data to respond to inquiries, improve website performance, and communicate essential service-related updates."
    },
    {
      icon: <Lock className="w-5 h-5 text-purple-500" />,
      title: "3. Data Security",
      content: "We implement industry-standard technical measures to protect your data from unauthorized access or disclosure."
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop with heavy blur */}
          <motion.div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-xl"
            onClick={onClose}
          />

          <motion.div
            className="relative bg-white/90 dark:bg-[#030712]/90 border border-slate-200 dark:border-white/10 w-full max-w-3xl max-h-[90vh] overflow-hidden rounded-[40px] shadow-2xl flex flex-col"
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Header Sticky */}
            <div className="p-8 md:p-10 border-b border-slate-100 dark:border-white/5 flex items-center justify-between bg-white/50 dark:bg-black/20 backdrop-blur-md">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-500">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-black tracking-tighter text-slate-900 dark:text-white uppercase">
                    Privacy <span className="text-cyan-500">Policy</span>
                  </h2>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    Last updated: {new Date().toLocaleDateString('en-GB')}
                  </p>
                </div>
              </div>
              
              <button
                onClick={onClose}
                className="p-3 rounded-full bg-slate-100 dark:bg-white/5 text-slate-500 hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-8 md:p-12 space-y-10 custom-scrollbar">
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                This Privacy Policy describes how <strong className="text-slate-900 dark:text-white underline decoration-cyan-500/30">G.R Minds Technologies</strong> collects, uses, and protects your information when you engage with our digital platforms.
              </p>

              <div className="grid gap-8">
                {sections.map((section, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 rounded-3xl bg-slate-50 dark:bg-white/[0.03] border border-slate-100 dark:border-white/5 group hover:border-cyan-500/30 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      {section.icon}
                      <h3 className="font-black uppercase tracking-tight text-slate-900 dark:text-white">
                        {section.title}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      {section.content}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Standard Text Blocks */}
              <div className="space-y-6 text-sm text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-white/5 pt-10">
                <div className="flex flex-col gap-2">
                  <h4 className="font-bold text-slate-900 dark:text-white">4. Data Sharing</h4>
                  <p>We do not sell or rent your personal data. Information is shared only with trusted third-party services necessary for operation.</p>
                </div>
                
                <div className="flex flex-col gap-2">
                  <h4 className="font-bold text-slate-900 dark:text-white">5. Your Rights</h4>
                  <p>You have the right to request access, correction, or deletion of your personal data at any time.</p>
                </div>
              </div>

              {/* Contact Footer in Modal */}
              <div className="p-8 rounded-[32px] bg-cyan-500 text-white flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <h4 className="font-black text-xl mb-1">Questions?</h4>
                  <p className="text-white/80 text-sm">Our legal team is here to help you.</p>
                </div>
                <a 
                  href="mailto:info@grminds.tech" 
                  className="px-6 py-3 bg-white text-cyan-600 rounded-2xl font-bold flex items-center gap-2 hover:scale-105 transition-transform"
                >
                  <Mail size={18} /> info@grminds.tech
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PrivacyModal;