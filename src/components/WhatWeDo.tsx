import React from 'react';
import { ArrowRight, Layout, Sparkles, Sliders } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface WhatWeDoProps {
  lang: Language;
  onExploreSolutions: (category?: string) => void;
}

export default function WhatWeDo({ lang, onExploreSolutions }: WhatWeDoProps) {
  const t = translations[lang];

  const divisions = [
    {
      id: 'aluminum',
      title: t.categoryAluminum,
      description: t.categoryAluminumDesc,
      items: t.aluminumItems,
      imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'glass',
      title: t.categoryGlass,
      description: t.categoryGlassDesc,
      items: t.glassItems,
      imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'steel',
      title: t.categorySteel,
      description: t.categorySteelDesc,
      items: t.steelItems,
      imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <section id="what-we-do-section" className="py-24 bg-brand-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="mb-16 text-center md:text-left ltr:md:text-left rtl:md:text-right">
          <span className="text-[10px] tracking-[0.3em] text-brand-gray-medium uppercase font-bold">
            DIVISION ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light font-serif text-brand-gray-light mt-3 max-w-2xl leading-[1.1] tracking-tight">
            {lang === 'en' ? (
              <>Built Around the Way Your <span className="italic font-normal text-brand-bronze">Project Works</span>.</>
            ) : (
              <>مصممة لتناسب طريقة <span className="italic font-normal text-brand-bronze">عمل مشروعك</span> الإنشائي.</>
            )}
          </h2>
          <p className="text-sm sm:text-base text-brand-gray-medium mt-4 max-w-xl leading-relaxed">
            {t.solutionsSubtitle}
          </p>
        </div>

        {/* Division Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {divisions.map((div) => (
            <div
              key={div.id}
              className="group bg-brand-stone border border-brand-gray-dark hover:border-brand-bronze/45 flex flex-col justify-between overflow-hidden relative transition-all duration-300"
            >
              {/* Image Banner */}
              <div className="h-64 overflow-hidden relative">
                <img
                  src={div.imageUrl}
                  alt={div.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out select-none filter brightness-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-stone via-transparent to-black/30" />
                
                {/* Visual Accent */}
                <div className="absolute top-4 ltr:left-4 rtl:right-4 bg-brand-stone border border-brand-gray-dark text-brand-gray-light text-[10px] font-mono tracking-widest uppercase px-3 py-1 font-semibold">
                  {div.title}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-normal font-serif text-brand-gray-light tracking-wide">
                      {div.title}
                    </h3>
                    <p className="text-xs text-brand-gray-medium mt-2 leading-relaxed">
                      {div.description}
                    </p>
                  </div>

                  {/* Bullet Sub-items */}
                  <div className="pt-4 border-t border-brand-gray-dark">
                    <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-medium text-brand-gray-medium">
                      {div.items.slice(0, 6).map((item, index) => (
                        <li key={index} className="flex items-center space-x-1.5 rtl:space-x-reverse text-brand-gray-medium">
                          <span className="w-1.5 h-[1.5px] bg-brand-bronze shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="pt-8">
                  <button
                    onClick={() => onExploreSolutions(div.id)}
                    className="inline-flex items-center space-x-2 rtl:space-x-reverse text-xs tracking-wider uppercase font-bold text-brand-gray-light hover:text-brand-bronze transition-colors cursor-pointer"
                  >
                    <span>{t.exploreSolutions}</span>
                    <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
