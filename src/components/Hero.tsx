import React from 'react';
import { ArrowRight, MessageSquare, MapPin } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface HeroProps {
  lang: Language;
  onRequestQuote: () => void;
  onExploreProjects: () => void;
}

export default function Hero({ lang, onRequestQuote, onExploreProjects }: HeroProps) {
  const t = translations[lang];

  return (
    <section className="relative min-h-[92vh] flex items-center bg-brand-charcoal border-b border-brand-gray-dark/50 px-6 sm:px-10 pt-24 overflow-hidden">
      {/* Decorative Warm Blur Accent */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-bronze/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Split Grid */}
      <div className="relative z-20 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12">
        
        {/* Left Column: Typographic Details */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-8 text-left ltr:text-left rtl:text-right">
          {/* Geographic Trust Indicator */}
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-brand-gray-medium">
            <span className="w-8 h-[1px] bg-brand-gray-dark/40 hidden sm:inline-block" />
            <span className="font-semibold">{t.locationIndicator}</span>
          </div>

          {/* Hero Headline */}
          {lang === 'en' ? (
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light font-serif leading-[1.1] text-brand-gray-light tracking-tight max-w-2xl text-shadow-subtle">
              Engineered Solutions for <span className="italic font-normal text-brand-bronze text-shadow-subtle">Saudi Architectural</span> Projects.
            </h1>
          ) : (
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-light font-serif leading-[1.1] text-brand-gray-light tracking-tight max-w-2xl text-shadow-subtle">
              أنظمة وحلول هندسية <span className="italic font-normal text-brand-bronze text-shadow-subtle">للمشاريع المعمارية</span> في المملكة.
            </h1>
          )}

          {/* Supporting message */}
          <p className="text-base sm:text-lg text-brand-gray-medium leading-relaxed max-w-xl font-sans text-shadow-subtle">
            {t.heroSupporting}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
            <button
              onClick={onRequestQuote}
              className="w-full sm:w-auto bg-brand-gray-light text-brand-charcoal px-10 py-4 font-bold uppercase text-xs tracking-widest hover:bg-brand-bronze hover:text-white transition-all duration-300 text-center cursor-pointer shadow-sm"
            >
              {t.heroCTAPrimary}
            </button>
            
            <button
              onClick={onExploreProjects}
              className="w-full sm:w-auto bg-transparent border border-brand-gray-dark hover:border-brand-gray-light text-brand-gray-light px-10 py-4 font-bold uppercase text-xs tracking-widest transition-all flex items-center justify-center space-x-2 rtl:space-x-reverse cursor-pointer"
            >
              <span>{t.heroCTASecondary}</span>
              <ArrowRight className="w-4 h-4 ltr:rotate-0 rtl:rotate-180" />
            </button>
          </div>
        </div>

        {/* Right Column: Architectural Framed Photograph */}
        <div className="lg:col-span-5 h-[350px] sm:h-[450px] w-full rounded-sm overflow-hidden border border-brand-gray-dark shadow-sm relative">
          <img
            src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80&w=1024"
            alt="Sleek Architectural Facade"
            className="w-full h-full object-cover object-center filter brightness-[0.98] hover:scale-103 transition-transform duration-1000 ease-out select-none"
            referrerPolicy="no-referrer"
          />
          {/* Subtle Light Overlay gradient to unify with off-white background */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/10 to-transparent pointer-events-none" />
        </div>

      </div>

      {/* Aesthetic bottom scroll indicator line */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center space-y-1.5 opacity-60">
        <span className="text-[9px] uppercase tracking-[0.3em] text-brand-gray-medium font-bold font-mono">Scroll</span>
        <div className="w-0.5 h-10 bg-brand-gray-dark/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-brand-bronze" />
        </div>
      </div>
    </section>
  );
}
