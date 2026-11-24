import React from 'react';
import { Home, Building2, Factory, Layers, Flame, ShieldAlert } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface TrustStripProps {
  lang: Language;
}

export default function TrustStrip({ lang }: TrustStripProps) {
  const t = translations[lang];

  return (
    <section className="bg-brand-stone py-12 border-y border-brand-gray-dark relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Section Indicator */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left ltr:lg:text-left rtl:lg:text-right space-y-4">
            <div>
              <span className="text-[10px] tracking-[0.3em] text-brand-gray-medium uppercase font-bold block">
                {t.engineeredFor}
              </span>
              <div className="flex flex-wrap gap-x-2.5 gap-y-1 items-center justify-center lg:justify-start mt-2 text-sm text-brand-gray-light font-bold">
                <span className="flex items-center space-x-1 rtl:space-x-reverse">
                  <Home className="w-4 h-4 text-brand-gray-medium" />
                  <span>{t.residential}</span>
                </span>
                <span className="text-brand-gray-dark">•</span>
                <span className="flex items-center space-x-1 rtl:space-x-reverse">
                  <Building2 className="w-4 h-4 text-brand-gray-medium" />
                  <span>{t.commercial}</span>
                </span>
                <span className="text-brand-gray-dark">•</span>
                <span className="flex items-center space-x-1 rtl:space-x-reverse">
                  <Factory className="w-4 h-4 text-brand-gray-medium" />
                  <span>{t.industrial}</span>
                </span>
              </div>
            </div>

            {/* Discreet Completed Projects badge */}
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-brand-charcoal border border-brand-gray-dark px-3 py-1.5 rounded-sm shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-bronze animate-pulse shrink-0" />
              <span className="text-[11px] font-mono font-bold uppercase text-brand-gray-light tracking-wider">
                {t.completedProjectsText}
              </span>
            </div>
          </div>

          {/* Solution pillars */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Pillar 1: Aluminum */}
            <div className="flex items-start space-x-4 rtl:space-x-reverse p-4 border border-brand-gray-dark bg-brand-charcoal">
              <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-brand-stone border border-brand-gray-dark text-brand-bronze">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-brand-gray-light text-sm font-bold tracking-wider uppercase">{t.aluminumSystems}</h4>
                <p className="text-xs text-brand-gray-medium mt-1 leading-relaxed">
                  Precision extrusion alloys, heavy profiles & thermal-break designs.
                </p>
              </div>
            </div>

            {/* Pillar 2: Glass */}
            <div className="flex items-start space-x-4 rtl:space-x-reverse p-4 border border-brand-gray-dark bg-brand-charcoal">
              <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-brand-stone border border-brand-gray-dark text-brand-bronze">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-brand-gray-light text-sm font-bold tracking-wider uppercase">{t.glassSolutions}</h4>
                <p className="text-xs text-brand-gray-medium mt-1 leading-relaxed">
                  Double/triple-glazing, acoustic performance & structural silicone.
                </p>
              </div>
            </div>

            {/* Pillar 3: Steel & Fire-Rated */}
            <div className="flex items-start space-x-4 rtl:space-x-reverse p-4 border border-brand-gray-dark bg-brand-charcoal">
              <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-brand-stone border border-brand-gray-dark text-brand-bronze">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-brand-gray-light text-sm font-bold tracking-wider uppercase">{t.steelFireSystems}</h4>
                <p className="text-xs text-brand-gray-medium mt-1 leading-relaxed">
                  Certified Civil Defense compliant assemblies, louvers & structural steel.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
