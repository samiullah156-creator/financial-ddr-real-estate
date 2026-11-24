import React from 'react';
import { HelpCircle, Award, FileText, Image, Users, MessageCircle } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface WhyAnaqcoProps {
  lang: Language;
}

export default function WhyAnaqco({ lang }: WhyAnaqcoProps) {
  const t = translations[lang];

  return (
    <section className="py-24 bg-brand-charcoal border-t border-brand-gray-dark">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="mb-16 text-center md:text-left ltr:md:text-left rtl:md:text-right">
          <span className="text-[10px] tracking-[0.3em] text-brand-gray-medium uppercase font-bold">
            OUR STRATEGY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light font-serif text-brand-gray-light mt-3 leading-[1.1] tracking-tight">
            {lang === 'en' ? (
              <>Constructed with Real <span className="italic font-normal text-brand-bronze">Evidence First</span>.</>
            ) : (
              <>مبني على أسس قوية من <span className="italic font-normal text-brand-bronze">الأدلة الملموسة</span>.</>
            )}
          </h2>
          <p className="text-sm text-brand-gray-medium mt-4 leading-relaxed max-w-xl">
            {t.whySubtitle}
          </p>
        </div>

        {/* Evidence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {t.whyPoints.map((point, index) => {
            // Pick appropriate icon based on index
            const icons = [FileText, Award, FileText, Image, Users];
            const IconComponent = icons[index] || HelpCircle;

            return (
              <div
                key={index}
                className="bg-brand-stone border border-brand-gray-dark p-6 flex flex-col justify-between transition-all duration-300 hover:border-brand-bronze/45 hover:scale-[1.02] hover:shadow-[0_20px_40px_-15px_rgba(110,104,94,0.12)] group"
              >
                <div className="space-y-4">
                  <div className="w-8 h-8 bg-brand-charcoal border border-brand-gray-dark text-brand-bronze flex items-center justify-center">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-semibold font-serif text-brand-gray-light tracking-wide">
                    {point.title}
                  </h3>
                  <p className="text-xs text-brand-gray-medium leading-relaxed font-sans">
                    {point.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Credentials Request Footnote */}
        <div className="mt-10 text-center md:text-left ltr:md:text-left rtl:md:text-right">
          <span className="text-xs font-bold text-brand-gray-light uppercase tracking-widest font-mono">
            {t.whySubtext}
          </span>
        </div>

      </div>
    </section>
  );
}
