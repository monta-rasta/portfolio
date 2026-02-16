import React from 'react';
import { Heart, Mail, Linkedin, Github, X } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/montassar-zidi-141270238/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/zidi-montassar', label: 'GitHub' },
    { icon: X, href: 'ttps://x.com/cris_monta', label: 'X' },
    { icon: Mail, href: 'mailto:zidimonta@hotmail.fr', label: 'Email' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 hover:from-blue-300 hover:to-purple-300 transition-all cursor-pointer"
            >
              IT Freelancer
            </button>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional IT solutions and development services. Transforming ideas into powerful digital realities.
            </p>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block">Quick Links</span>
            <div className="space-y-2">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block">Connect With Me</span>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 flex items-center justify-center transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} IT Freelancer. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> by MONTASSAR
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;