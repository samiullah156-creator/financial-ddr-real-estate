import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface FAQProps {
  lang: Language;
  onAskProject: () => void;
}

export default function FAQ({ lang, onAskProject }: FAQProps) {
  const t = translations[lang];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-brand-charcoal border-t border-brand-gray-dark">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.3em] text-brand-gray-medium uppercase font-bold flex items-center justify-center space-x-1.5 rtl:space-x-reverse">
            <HelpCircle className="w-3.5 h-3.5 text-brand-bronze" />
            <span>KNOWLEDGE BRIEF</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light font-serif text-brand-gray-light mt-3 leading-[1.1] tracking-tight">
            {t.faqTitle}
          </h2>
          <p className="text-sm text-brand-gray-medium mt-3 max-w-lg mx-auto leading-relaxed">
            {t.faqSubtitle}
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {t.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-brand-stone border border-brand-gray-dark transition-colors duration-300"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-6 text-left ltr:text-left rtl:text-right flex items-center justify-between font-bold text-brand-gray-light focus:outline-none cursor-pointer"
                >
                  <span className="text-sm sm:text-base tracking-wide font-semibold font-serif">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-brand-gray-light shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-brand-gray-medium shrink-0" />
                  )}
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-brand-gray-medium leading-relaxed border-t border-brand-gray-dark pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Ask about your project footer link */}
        <div className="mt-12 text-center">
          <button
            onClick={onAskProject}
            className="inline-flex items-center space-x-2 rtl:space-x-reverse text-xs uppercase font-bold tracking-widest text-brand-gray-light hover:text-brand-bronze transition-colors cursor-pointer"
          >
            <span>{t.faqCTA}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </button>
        </div>

      </div>
    </section>
  );
}
