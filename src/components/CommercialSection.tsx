import React from 'react';
import { ShieldCheck, MessageSquare, Briefcase, HelpCircle, FileText } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface CommercialSectionProps {
  lang: Language;
  onDiscussProject: () => void;
}

export default function CommercialSection({ lang, onDiscussProject }: CommercialSectionProps) {
  const t = translations[lang];

  return (
    <section className="py-24 bg-[#121212] relative border-y border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Main Info Column */}
          <div className="space-y-8 text-center md:text-left ltr:md:text-left rtl:md:text-right">
            <div>
              <span className="text-[10px] tracking-[0.3em] text-white/50 uppercase font-bold">
                B2B & PROCUREMENT
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mt-3 leading-[1.1] tracking-tight">
                {lang === 'en' ? (
                  <>Solutions for Projects Where <span className="italic font-serif font-normal">Performance Matters</span>.</>
                ) : (
                  <>حلول للمشاريع التي تتطلب <span className="italic font-serif font-normal">أداءً فائقاً</span> وجودة معمارية.</>
                )}
              </h2>
              <p className="text-sm sm:text-base text-brand-gray-medium mt-4 leading-relaxed max-w-xl">
                {t.b2bSubtitle}
              </p>
            </div>

            {/* Quote Action button */}
            <div className="pt-4 flex justify-center md:justify-start">
              <button
                onClick={onDiscussProject}
                className="bg-white text-black hover:bg-neutral-200 font-bold px-8 py-4 uppercase text-xs tracking-widest transition-all duration-300 flex items-center space-x-2.5 rtl:space-x-reverse cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>{t.b2bCTA}</span>
              </button>
            </div>
          </div>

          {/* Grid of Targets and Systems */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Targets Sub-grid */}
            <div className="bg-[#0A0A0A] border border-white/10 p-8 space-y-6">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Briefcase className="w-5 h-5 text-white/80" />
                <h3 className="text-sm font-semibold tracking-wider uppercase text-white">
                  {t.b2bTargetTitle}
                </h3>
              </div>
              <ul className="space-y-3 text-xs text-brand-gray-medium">
                {t.b2bTargets.map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-2 rtl:space-x-reverse text-white/80">
                    <span className="w-1.5 h-[1px] bg-white" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Systems Sub-grid */}
            <div className="bg-[#0A0A0A] border border-white/10 p-8 space-y-6">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <ShieldCheck className="w-5 h-5 text-white/80" />
                <h3 className="text-sm font-semibold tracking-wider uppercase text-white">
                  {t.b2bScopeTitle}
                </h3>
              </div>
              <ul className="space-y-3 text-xs text-brand-gray-medium">
                {t.b2bScopes.map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-2 rtl:space-x-reverse text-white/80">
                    <span className="w-1.5 h-[1px] bg-white" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
