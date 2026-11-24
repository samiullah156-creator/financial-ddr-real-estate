import React from 'react';
import { Quote, Sparkles, MessageSquare, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface TestimonialsProps {
  lang: Language;
}

export default function Testimonials({ lang }: TestimonialsProps) {
  const t = translations[lang];

  return (
    <section className="py-24 bg-brand-stone relative overflow-hidden border-t border-brand-gray-dark">
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        {/* Title */}
        <span className="text-[10px] tracking-[0.3em] text-brand-gray-medium uppercase font-bold flex items-center space-x-2 rtl:space-x-reverse">
          <Quote className="w-3.5 h-3.5 text-brand-bronze" />
          <span>CREDIBILITY REVIEW</span>
        </span>
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light font-serif text-brand-gray-light mt-3 leading-[1.1] tracking-tight">
          {lang === 'en' ? (
            <>Guaranteed by <span className="italic font-normal text-brand-bronze">Actual Delivery</span>.</>
          ) : (
            <>مصداقية مبنية على <span className="italic font-normal text-brand-bronze">التسليم الفعلي</span> للمشاريع.</>
          )}
        </h2>
        
        <p className="text-sm text-brand-gray-medium mt-3 max-w-lg leading-relaxed">
          {t.testimonialsSubtitle}
        </p>

        {/* Elegant Placeholder Box */}
        <div className="mt-12 max-w-3xl w-full bg-brand-charcoal border border-brand-gray-dark p-8 md:p-12 relative">
          {/* Top bracket mark */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-brand-stone border border-brand-gray-dark flex items-center justify-center text-brand-bronze">
            <Quote className="w-4 h-4" />
          </div>

          <div className="space-y-6">
            <p className="text-sm md:text-base text-brand-gray-medium leading-relaxed italic font-serif">
              "{t.testimonialPlaceholder}"
            </p>

            <div className="pt-6 border-t border-brand-gray-dark inline-flex flex-col items-center">
              <span className="text-[10px] uppercase tracking-widest text-brand-gray-medium font-bold font-mono flex items-center space-x-1.5 rtl:space-x-reverse">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-bronze" />
                <span>{t.testimonialStatus}</span>
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
