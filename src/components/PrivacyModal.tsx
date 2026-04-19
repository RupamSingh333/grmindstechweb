import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';

const PrivacyModal = ({ isOpen, onClose }: any) => {

  // 🔥 Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose} // click outside close
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="bg-background text-foreground max-w-3xl w-full max-h-[85vh] overflow-y-auto rounded-xl p-6 md:p-8 relative shadow-2xl border border-border"
            initial={{ scale: 0.9, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 40 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-md hover:bg-muted transition"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header */}
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Privacy Policy
            </h2>

            <p className="text-sm text-muted-foreground mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            {/* Content */}
            <div className="space-y-5 text-sm leading-relaxed text-muted-foreground">

              <p>
                This Privacy Policy describes how <strong className="text-foreground">G.R Minds Technologies</strong> ("we", "our", "us")
                collects, uses, and protects your information when you use our website.
              </p>

              <div>
                <h3 className="font-semibold text-foreground mb-1">1. Information We Collect</h3>
                <p>
                  We may collect personal information such as your name, email address, phone number,
                  and any details you provide when contacting us or using our services.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-1">2. How We Use Your Information</h3>
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Respond to inquiries and provide services</li>
                  <li>Improve website performance and user experience</li>
                  <li>Communicate updates or service-related information</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-1">3. Cookies & Tracking</h3>
                <p>
                  We may use cookies and similar technologies to enhance user experience and analyze traffic.
                  You can control cookie usage through your browser settings.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-1">4. Data Sharing</h3>
                <p>
                  We do not sell or rent your personal data. Information may be shared only with trusted third-party
                  services necessary to operate our business.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-1">5. Data Security</h3>
                <p>
                  We implement appropriate technical and organizational measures to protect your data from unauthorized access.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-1">6. Third-Party Links</h3>
                <p>
                  Our website may contain links to third-party websites. We are not responsible for their privacy practices.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-1">7. Your Rights</h3>
                <p>
                  You have the right to request access, correction, or deletion of your personal data by contacting us.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-1">8. Policy Updates</h3>
                <p>
                  We may update this Privacy Policy from time to time. Changes will be posted on this page.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-1">9. Contact Us</h3>
                <p>
                  If you have any questions, contact us at:
                  <br />
                  <span className="text-primary font-medium">
                    info@grmindstech.com
                  </span>
                </p>
              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PrivacyModal;