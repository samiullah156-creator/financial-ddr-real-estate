import React from 'react';
import { Phone, Mail, MapPin, ExternalLink, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface FooterProps {
  lang: Language;
  setLang: (lang: Language) => void;
  setCurrentPage: (page: string) => void;
}

export default function Footer({ lang, setLang, setCurrentPage }: FooterProps) {
  const t = translations[lang];

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-charcoal text-brand-gray-medium pt-20 pb-10 border-t border-brand-gray-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div className="space-y-6">
          <div className="flex flex-col items-start">
            <span className="text-3xl font-light tracking-widest text-brand-gray-light">
              ANAQCO
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-gray-medium mt-1 font-bold">
              {t.brandSubtitle}
            </span>
          </div>
          <p className="text-sm leading-relaxed text-brand-gray-medium/80">
            {t.footerDesc}
          </p>
          <div className="text-xs text-brand-gray-medium/60 font-mono">
            {t.footerCertDisclaimer}
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="space-y-6">
          <h4 className="text-brand-gray-light text-sm font-bold tracking-wider uppercase">
            {t.footerNavTitle}
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <button
                onClick={() => handleNavClick('home')}
                className="hover:text-brand-bronze transition-colors focus:outline-none cursor-pointer"
              >
                {t.navHome}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('about')}
                className="hover:text-brand-bronze transition-colors focus:outline-none cursor-pointer"
              >
                {t.navAbout}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('solutions')}
                className="hover:text-brand-bronze transition-colors focus:outline-none cursor-pointer"
              >
                {t.navSolutions}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('products')}
                className="hover:text-brand-bronze transition-colors focus:outline-none cursor-pointer"
              >
                {t.navProducts}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('projects')}
                className="hover:text-brand-bronze transition-colors focus:outline-none cursor-pointer"
              >
                {t.navProjects}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('contact')}
                className="hover:text-brand-bronze transition-colors focus:outline-none cursor-pointer"
              >
                {t.navContact}
              </button>
            </li>
          </ul>
        </div>

        {/* Technical Channels / Contact */}
        <div className="space-y-6">
          <h4 className="text-brand-gray-light text-sm font-bold tracking-wider uppercase">
            {t.contactDirectTitle}
          </h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-3 rtl:space-x-reverse">
              <MapPin className="w-5 h-5 text-brand-bronze shrink-0 mt-0.5" />
              <span>{t.footerAddress}</span>
            </li>
            <li className="flex items-start space-x-3 rtl:space-x-reverse">
              <Phone className="w-5 h-5 text-brand-bronze shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="text-[10px] text-brand-gray-medium/50 uppercase">{t.footerPhone}</span>
                <a href="tel:+966599606818" className="text-brand-gray-light hover:text-brand-bronze transition-colors font-mono font-bold">
                  +966 59 960 6818
                </a>
              </div>
            </li>
            <li className="flex items-start space-x-3 rtl:space-x-reverse">
              <Mail className="w-5 h-5 text-brand-bronze shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="text-[10px] text-brand-gray-medium/50 uppercase">{t.footerEmail}</span>
                <a href="mailto:info@anaqco.com" className="text-brand-gray-light hover:text-brand-bronze transition-colors font-mono font-bold">
                  info@anaqco.com
                </a>
              </div>
            </li>
          </ul>
        </div>

        {/* Social Connections & Lang */}
        <div className="space-y-6">
          <h4 className="text-brand-gray-light text-sm font-bold tracking-wider uppercase">
            {t.footerSocialTitle}
          </h4>
          <div className="flex space-x-4 rtl:space-x-reverse">
            {/* Real social placeholders */}
            <a
              href="#"
              className="w-10 h-10 border border-brand-gray-dark hover:border-brand-bronze/45 flex items-center justify-center text-brand-gray-light hover:text-brand-bronze transition-all bg-brand-stone cursor-pointer"
              aria-label="Instagram placeholder"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-10 h-10 border border-brand-gray-dark hover:border-brand-bronze/45 flex items-center justify-center text-brand-gray-light hover:text-brand-bronze transition-all bg-brand-stone cursor-pointer"
              aria-label="Facebook placeholder"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-10 h-10 border border-brand-gray-dark hover:border-brand-bronze/45 flex items-center justify-center text-brand-gray-light hover:text-brand-bronze transition-all bg-brand-stone cursor-pointer"
              aria-label="YouTube placeholder"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-10 h-10 border border-brand-gray-dark hover:border-brand-bronze/45 flex items-center justify-center text-brand-gray-light hover:text-brand-bronze transition-all bg-brand-stone cursor-pointer"
              aria-label="LinkedIn placeholder"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          <div className="pt-4 border-t border-brand-gray-dark">
            <div className="flex items-center space-x-3 rtl:space-x-reverse text-xs">
              <button
                onClick={() => setLang('en')}
                className={`transition-colors cursor-pointer ${lang === 'en' ? 'text-brand-gray-light font-bold' : 'text-brand-gray-medium/55 hover:text-brand-bronze'}`}
              >
                English
              </button>
              <span className="text-brand-gray-dark">|</span>
              <button
                onClick={() => setLang('ar')}
                className={`transition-colors font-ar cursor-pointer ${lang === 'ar' ? 'text-brand-gray-light font-bold' : 'text-brand-gray-medium/55 hover:text-brand-bronze'}`}
              >
                العربية
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-brand-gray-dark flex flex-col md:flex-row items-center justify-between text-xs text-brand-gray-medium/50">
        <div>
          &copy; {new Date().getFullYear()} ANAQCO. All rights reserved. Redesign concept crafted for Saudi Arabian architectural and structural markets.
        </div>
        <div className="mt-4 md:mt-0 flex space-x-6 rtl:space-x-reverse">
          <span>[Jeddah, KSA]</span>
          <span>[Verified Architectural Redesign Demo]</span>
        </div>
      </div>
    </footer>
  );
}
