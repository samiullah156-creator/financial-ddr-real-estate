import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
  onRequestQuote: () => void;
  selectedProductId?: string;
}

export default function Header({
  lang,
  setLang,
  currentPage,
  setCurrentPage,
  onRequestQuote,
  selectedProductId
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: t.navHome },
    { id: 'about', label: t.navAbout },
    { id: 'solutions', label: t.navSolutions },
    { id: 'products', label: t.navProducts },
    { id: 'projects', label: t.navProjects },
    { id: 'contact', label: t.navContact }
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-charcoal/80 backdrop-blur-xl py-2.5 border-b border-brand-gray-dark/40 shadow-[0_8px_32px_rgba(0,0,0,0.04)]'
          : 'bg-brand-charcoal/40 backdrop-blur-xl py-4 border-b border-brand-gray-dark/15'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo & Subtitle */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center focus:outline-none group text-left ltr:text-left ltr:flex-row rtl:flex-row-reverse min-h-[48px]"
        >
          <span className="text-2xl font-bold tracking-tighter text-brand-gray-light transition-colors group-hover:text-brand-bronze">
            {t.brandName}
          </span>
          <span className="h-6 w-[1px] bg-brand-gray-dark mx-3" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gray-medium leading-tight font-semibold text-left ltr:text-left rtl:text-right max-w-[120px]">
            Aluminum<br />Glass & Steel
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-2 rtl:space-x-reverse">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 relative ${
                  isActive
                    ? 'text-brand-gray-light font-bold'
                    : 'text-brand-gray-medium hover:text-brand-gray-light'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-brand-bronze animate-fade-in" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Actions (Lang, CTAs) */}
        <div className="hidden lg:flex items-center space-x-6 rtl:space-x-reverse">
          {/* Language Toggle */}
          <div className="flex gap-2 text-xs opacity-80 border-x border-brand-gray-dark px-4">
            <button
              onClick={() => setLang('en')}
              className={`font-semibold transition-colors hover:text-brand-gray-light cursor-pointer ${lang === 'en' ? 'text-brand-gray-light font-bold' : 'text-brand-gray-medium'}`}
            >
              EN
            </button>
            <span className="text-brand-gray-dark">|</span>
            <button
              onClick={() => setLang('ar')}
              className={`font-semibold transition-colors hover:text-brand-gray-light cursor-pointer ${lang === 'ar' ? 'text-brand-gray-light font-bold' : 'text-brand-gray-medium'}`}
            >
              العربية
            </button>
          </div>

          {/* WhatsApp Secondary CTA */}
          <a
            href={getWhatsAppUrl(lang, currentPage, { productId: selectedProductId })}
            target="_blank"
            referrerPolicy="no-referrer"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 rtl:space-x-reverse text-xs font-semibold tracking-wider text-brand-gray-medium hover:text-brand-gray-light transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            <span>WA</span>
          </a>

          {/* Primary Call to Action */}
          <button
            onClick={onRequestQuote}
            className="bg-brand-gray-light hover:bg-brand-bronze text-brand-charcoal hover:text-white text-xs font-bold tracking-widest uppercase px-6 py-2.5 transition-all duration-300 cursor-pointer"
          >
            {t.ctaRequestQuote}
          </button>
        </div>

        {/* Mobile Menu Action Triggers */}
        <div className="flex items-center space-x-2 rtl:space-x-reverse lg:hidden">
          {/* Language Toggle Mobile - optimized touch target to 48px min-height/min-width */}
          <button
            onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
            className="text-xs font-semibold text-brand-gray-light hover:text-brand-bronze min-w-[48px] min-h-[48px] px-3 flex items-center justify-center border border-brand-gray-dark transition-all bg-brand-stone/90"
          >
            {lang === 'en' ? 'العربية' : 'EN'}
          </button>

          {/* Mobile Menu Toggle button - optimized touch target to 48px min-height/min-width */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-brand-gray-light hover:text-brand-bronze focus:outline-none min-w-[48px] min-h-[48px] flex items-center justify-center"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay with backdrop blur & luxury high-contrast feel */}
      {isMobileMenuOpen && (
        <div className="fixed inset-x-0 bottom-0 top-[65px] bg-brand-charcoal/90 backdrop-blur-lg z-40 lg:hidden animate-fade-in border-t border-brand-gray-dark overflow-y-auto">
          <div className="flex flex-col p-6 space-y-6">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-base font-medium text-left rtl:text-right min-h-[48px] py-3 px-4 w-full border-b border-brand-gray-dark/40 flex items-center justify-between transition-colors hover:bg-brand-gray-dark/10 ${
                      isActive ? 'text-brand-gray-light font-bold bg-brand-gray-dark/5' : 'text-brand-gray-medium'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 bg-brand-bronze rounded-full" />}
                  </button>
                );
              })}
            </nav>

            <div className="pt-4 flex flex-col space-y-3">
              {/* WhatsApp mobile button - 48px touch target */}
              <a
                href={getWhatsAppUrl(lang, currentPage, { productId: selectedProductId })}
                target="_blank"
                referrerPolicy="no-referrer"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 bg-brand-stone border border-brand-gray-dark text-brand-gray-light min-h-[48px] py-3.5 font-semibold text-sm transition-all hover:bg-brand-gray-dark/10"
              >
                <MessageSquare className="w-5 h-5 text-emerald-600" />
                <span>{t.ctaWhatsApp}</span>
              </a>

              {/* Request a Quote mobile button - 48px touch target */}
              <button
                onClick={() => {
                  onRequestQuote();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-brand-gray-light text-brand-charcoal min-h-[48px] py-3.5 font-bold text-sm uppercase tracking-wider text-center hover:bg-brand-bronze hover:text-white transition-all duration-300"
              >
                {t.ctaRequestQuote}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
