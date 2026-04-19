import { Github, Linkedin, Twitter, Mail, Phone } from 'lucide-react';
import PrivacyModal from './PrivacyModal';
import logo from '@/assets/logo-big-transparent.png';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <>
      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />
      <footer className="bg-background/90 backdrop-blur-sm border-t border-border/20 py-16 px-4">
        {/* Privacy Modal */}
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">

            {/* Logo & Description */}
            <div className="flex flex-col items-start">
              <img
                src={logo}
                alt="G.R. Minds Technologies"
                className="h-20 w-auto mb-4 hover:scale-105 transition-transform duration-300"
              />
              <p className="text-sm text-muted-foreground max-w-xs">
                Transforming ideas into digital reality through innovation, excellence,
                and scalable technology solutions.
              </p>
              <div className="flex flex-col mt-4 gap-2 text-muted-foreground text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" /> info@grminds.tech
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" /> +91 75057 17444
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-primary">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary transition-colors cursor-pointer">Software Development</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Cloud Solutions</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Mobile Apps</li>
                <li className="hover:text-primary transition-colors cursor-pointer">IT Consulting</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Bulk Messaging & Automation</li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-primary">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary transition-colors cursor-pointer">About Us</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Careers</li>
                {/* <li className="hover:text-primary transition-colors cursor-pointer">Blog</li> */}
                <li className="hover:text-primary transition-colors cursor-pointer">Contact</li>
                <li className="hover:text-primary transition-colors cursor-pointer" onClick={() => setIsPrivacyOpen(true)}>Privacy Policy</li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-primary">Follow Us</h4>
              <div className="flex gap-5 mb-6">
                <a href="https://www.linkedin.com/company/g-r-minds-technologies" className="text-muted-foreground hover:text-primary transition-transform transform hover:scale-125">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://twitter.com/g_rminds" className="text-muted-foreground hover:text-primary transition-transform transform hover:scale-125">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="https://github.com/g-r-minds" className="text-muted-foreground hover:text-primary transition-transform transform hover:scale-125">
                  <Github className="h-6 w-6" />
                </a>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs">
                Stay connected with us for the latest updates, tech insights, and new solutions.
              </p>
            </div>
          </div>
          {/* Bottom Footer */}
          <div className="border-t border-border/20 pt-8 text-center text-sm text-muted-foreground">
            <p>
              &copy; 2026 <span className="text-primary font-semibold">G.R. Minds Technologies</span>. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

    </>
  );
};

export default Footer;