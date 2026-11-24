import React from 'react';
import { Layers, Building2, Flame, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';
import { solutionsData } from '../data';

interface SolutionsPageProps {
  lang: Language;
  onExploreProduct: (prodId: string) => void;
}

export default function SolutionsPage({ lang, onExploreProduct }: SolutionsPageProps) {
  const t = translations[lang];

  // Map divisions to custom sample products inside our spec templates
  const categoryProducts: Record<string, { id: string; name: string }[]> = {
    aluminum: [
      { id: 'prod-slim-sliding', name: 'Slimline Thermal Sliding Door System' }
    ],
    glass: [
      { id: 'prod-double-curtain', name: 'Double-Glazed Structural Curtain Wall' }
    ],
    steel: [
      { id: 'prod-fire-doors', name: 'Certified Fire-Rated Steel Door Assemblies' }
    ]
  };

  return (
    <div className="pt-24 min-h-screen bg-brand-stone">
      
      {/* Page Header */}
      <section className="py-20 bg-brand-charcoal border-b border-brand-gray-dark">
        <div className="max-w-4xl mx-auto px-6 text-center md:text-left ltr:md:text-left rtl:md:text-right">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-bronze font-bold">
            DIVISION SPECS & CAPABILITIES
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light font-serif text-brand-gray-light mt-4 tracking-tight leading-[1.1] text-shadow-subtle">
            {t.solutionsPageTitle}
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-brand-gray-medium mt-6 leading-relaxed max-w-2xl text-shadow-subtle">
            {t.solutionsPageSubtitle}
          </p>
        </div>
      </section>

      {/* Main Divisions Detail Overview */}
      <section className="py-24 max-w-7xl mx-auto px-6 space-y-24">
        {solutionsData.map((sol, index) => {
          const isEven = index % 2 === 0;
          const Icon = sol.id === 'aluminum' ? Layers : sol.id === 'glass' ? Building2 : Flame;
          const items = sol.id === 'aluminum' ? t.aluminumItems : sol.id === 'glass' ? t.glassItems : t.steelItems;
          const desc = sol.id === 'aluminum' ? t.categoryAluminumDesc : sol.id === 'glass' ? t.categoryGlassDesc : t.categorySteelDesc;
          const currentProds = categoryProducts[sol.id] || [];

          return (
            <div
              key={sol.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                isEven ? '' : 'lg:flex-row-reverse'
              }`}
            >
              
              {/* Image Block */}
              <div className={`lg:col-span-6 relative h-[450px] overflow-hidden ${
                isEven ? 'lg:order-1' : 'lg:order-2'
              }`}>
                <img
                  src={sol.imageUrl}
                  alt={sol.title}
                  className="w-full h-full object-cover object-center filter brightness-95 select-none"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-stone via-transparent to-black/20" />
                
                {/* Tech Badge */}
                <div className="absolute top-4 ltr:left-4 rtl:right-4 bg-brand-charcoal/90 border border-brand-gray-dark/50 text-brand-bronze text-xs font-mono px-3 py-1.5 flex items-center space-x-1.5 rtl:space-x-reverse">
                  <Icon className="w-4 h-4" />
                  <span className="font-bold tracking-wider uppercase">{sol.title}</span>
                </div>
              </div>

              {/* Specs & Capabilities details */}
              <div className={`lg:col-span-6 space-y-8 ${
                isEven ? 'lg:order-2' : 'lg:order-1'
              } text-center md:text-left ltr:md:text-left rtl:md:text-right`}>
                
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-light font-serif text-brand-gray-light tracking-wide leading-[1.1] tracking-tight">
                    {sol.id === 'aluminum' ? t.aluminumSystems : sol.id === 'glass' ? t.glassSolutions : t.steelFireSystems}
                  </h2>
                  <p className="text-sm text-brand-gray-medium leading-relaxed">
                    {desc}
                  </p>
                </div>

                {/* Sub-systems bullet list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-brand-gray-dark/40">
                  {items.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2.5 rtl:space-x-reverse text-xs sm:text-sm text-brand-gray-medium">
                      <CheckCircle2 className="w-5 h-5 text-brand-bronze shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Technical specifications redirect to template page! */}
                {currentProds.length > 0 && (
                  <div className="pt-6 border-t border-brand-gray-dark/30 space-y-4">
                    <span className="text-[10px] uppercase tracking-widest text-brand-bronze font-bold block">
                      SELECTABLE TECHNICAL PROFILES & TEMPLATES
                    </span>
                    <div className="space-y-2">
                      {currentProds.map((prod) => (
                        <button
                          key={prod.id}
                          onClick={() => onExploreProduct(prod.id)}
                          className="w-full text-left ltr:text-left rtl:text-right p-4 bg-brand-charcoal hover:bg-brand-charcoal/90 border border-brand-gray-dark hover:border-brand-bronze text-xs sm:text-sm text-brand-gray-light font-bold tracking-wide transition-all duration-300 flex items-center justify-between group cursor-pointer"
                        >
                          <span>{prod.name}</span>
                          <span className="text-brand-bronze group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-300">
                            →
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

              </div>

            </div>
          );
        })}
      </section>

    </div>
  );
}
