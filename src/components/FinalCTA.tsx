import React from 'react';
import { MessageSquare, FileSpreadsheet, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface FinalCTAProps {
  lang: Language;
  onRequestQuote: () => void;
  currentPage?: string;
  selectedProductId?: string;
}

export default function FinalCTA({
  lang,
  onRequestQuote,
  currentPage = 'home',
  selectedProductId
}: FinalCTAProps) {
  const t = translations[lang];

  return (
    <section className="py-24 bg-brand-stone relative overflow-hidden border-t border-brand-gray-dark">
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-8">
        
        {/* Visual Accent Box */}
        <div className="w-12 h-[1px] bg-brand-bronze mx-auto" />

        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light font-serif text-brand-gray-light tracking-tight leading-[1.1]">
            {lang === 'en' ? (
              <>Let’s Discuss Your <span className="italic font-normal text-brand-bronze">Next Project</span>.</>
            ) : (
              <>دعنا نناقش متطلبات <span className="italic font-normal text-brand-bronze">مشروعك القادم</span>.</>
            )}
          </h2>
          <p className="text-sm sm:text-base text-brand-gray-medium leading-relaxed max-w-xl mx-auto">
            {t.finalCtaSubtitle}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          {/* Main Inquiry Form Link */}
          <button
            onClick={onRequestQuote}
            className="w-full sm:w-auto bg-brand-gray-light text-brand-charcoal hover:bg-brand-bronze hover:text-white font-bold px-8 py-4 uppercase text-xs tracking-widest transition-all duration-300 cursor-pointer shadow-sm"
          >
            {t.finalCtaPrimary}
          </button>

          {/* WhatsApp Direct Action Link */}
          <a
            href={getWhatsAppUrl(lang, currentPage, { productId: selectedProductId })}
            target="_blank"
            referrerPolicy="no-referrer"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-transparent hover:bg-brand-stone/50 text-brand-gray-light border border-brand-gray-dark hover:border-brand-bronze font-bold px-8 py-4 uppercase text-xs tracking-widest transition-all duration-300 flex items-center justify-center space-x-2 rtl:space-x-reverse cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{t.finalCtaWhatsApp}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
