import React from 'react';
import { ShieldCheck, FileCheck, CheckCircle2, Award } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface ComplianceFeatureProps {
  lang: Language;
  onRequestTechInfo: () => void;
}

export default function ComplianceFeature({ lang, onRequestTechInfo }: ComplianceFeatureProps) {
  const t = translations[lang];

  return (
    <section className="py-24 bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Technical Specs & Points */}
          <div className="lg:col-span-7 space-y-8 text-center md:text-left ltr:md:text-left rtl:md:text-right">
            <div>
              <span className="text-[10px] tracking-[0.3em] text-white/50 uppercase font-bold flex items-center justify-center md:justify-start space-x-2 rtl:space-x-reverse">
                <ShieldCheck className="w-4 h-4 text-white/70" />
                <span>SAFETY & REGULATORY COMPLIANCE</span>
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light font-serif text-white mt-3 leading-[1.1] tracking-tight">
                {lang === 'en' ? (
                  <>Engineered for Strict <span className="italic font-normal">KSA Regulations</span>.</>
                ) : (
                  <>مصممة لتتوافق مع معايير <span className="italic font-normal">الدفاع المدني السعودي</span>.</>
                )}
              </h2>
              <p className="text-sm text-brand-gray-medium mt-4 leading-relaxed max-w-xl">
                {t.fireSubtitle}
              </p>
            </div>

            {/* List of points */}
            <div className="space-y-4 pt-4">
              {t.firePoints.map((point, idx) => (
                <div key={idx} className="flex items-start space-x-3 rtl:space-x-reverse text-xs sm:text-sm text-brand-gray-medium">
                  <CheckCircle2 className="w-5 h-5 text-white/80 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{point}</span>
                </div>
              ))}
            </div>

            {/* Tech CTA */}
            <div className="pt-6">
              <button
                onClick={onRequestTechInfo}
                className="inline-flex items-center space-x-2 rtl:space-x-reverse text-xs font-bold uppercase tracking-wider text-white hover:text-white/80 transition-colors cursor-pointer"
              >
                <span>{t.fireCTA}</span>
              </button>
            </div>
          </div>

          {/* Right Side: Visual Specs Blueprint Card (Clean, editorial, no stock faces) */}
          <div className="lg:col-span-5 bg-[#121212] border border-white/10 p-8 space-y-6 relative overflow-hidden">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center space-x-2.5 rtl:space-x-reverse">
                <FileCheck className="w-5 h-5 text-white/80" />
                <span className="text-xs font-mono text-white/60 uppercase">
                  Technical Spec Submittal
                </span>
              </div>
              <span className="text-[10px] bg-black border border-white/10 text-white font-mono px-2 py-0.5">
                KSA STANDARD
              </span>
            </div>

            <div className="space-y-4 text-xs font-mono text-brand-gray-medium leading-relaxed">
              <div className="p-3 bg-black/40 border border-white/10">
                <p className="text-white font-semibold mb-1 uppercase tracking-wider">SYSTEM INTEGRITY</p>
                <p className="text-white/70">Doors, windows, and framing comply with specified fire resistance durations (e.g. up to 120 minutes continuous testing profiles).</p>
              </div>

              <div className="p-3 bg-black/40 border border-white/10">
                <p className="text-white font-semibold mb-1 uppercase tracking-wider">SUBMITTAL REVIEWS</p>
                <p className="text-white/70">Complete assembly drawings, certified hardware data schedules, and physical test records are packaged for official consultant approval.</p>
              </div>

              <p className="text-[10px] text-white/40 leading-normal italic">
                *Specific certifications and Civil Defense compliance reports are provided directly to structural consultants during the project bidding phase.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
