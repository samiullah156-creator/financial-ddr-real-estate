import React from 'react';
import { Eye, Shield, Cpu, PenTool } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface EngineeringApproachProps {
  lang: Language;
}

export default function EngineeringApproach({ lang }: EngineeringApproachProps) {
  const t = translations[lang];

  const steps = [
    {
      num: '01',
      title: t.step1Title,
      desc: t.step1Desc,
      icon: Eye
    },
    {
      num: '02',
      title: t.step2Title,
      desc: t.step2Desc,
      icon: PenTool
    },
    {
      num: '03',
      title: t.step3Title,
      desc: t.step3Desc,
      icon: Cpu
    },
    {
      num: '04',
      title: t.step4Title,
      desc: t.step4Desc,
      icon: Shield
    }
  ];

  return (
    <section className="py-24 bg-brand-stone border-t border-brand-gray-dark">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="mb-20 text-center md:text-left ltr:md:text-left rtl:md:text-right">
          <span className="text-[10px] tracking-[0.3em] text-brand-gray-medium uppercase font-bold">
            TECHNICAL PROCESS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light font-serif text-brand-gray-light mt-3 max-w-2xl leading-[1.1] tracking-tight">
            {lang === 'en' ? (
              <>From Specification to <span className="italic font-normal text-brand-bronze">Installation</span>.</>
            ) : (
              <>من المواصفات الفنية إلى <span className="italic font-normal text-brand-bronze">التركيب النهائي</span>.</>
            )}
          </h2>
          <p className="text-sm text-brand-gray-medium mt-4 max-w-lg leading-relaxed">
            {t.processSubtitle}
          </p>
        </div>

        {/* Stepper Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Timeline Connector Line for Large Screens */}
          <div className="hidden lg:block absolute top-1/2 left-[12%] right-[12%] h-[1px] bg-brand-gray-dark -translate-y-16 z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="group relative bg-brand-charcoal border border-brand-gray-dark p-8 z-10 transition-all duration-300 hover:border-brand-bronze/45"
              >
                {/* Accent Top Line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-transparent group-hover:bg-brand-bronze transition-colors duration-300" />
                
                {/* Circle & Icon & Num */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 bg-brand-stone border border-brand-gray-dark flex items-center justify-center text-brand-bronze group-hover:border-brand-bronze transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-4xl font-bold text-brand-gray-dark/20 group-hover:text-brand-bronze/20 transition-colors select-none">
                    {step.num}
                  </span>
                </div>

                {/* Info */}
                <h3 className="text-lg font-normal font-serif text-brand-gray-light tracking-wide mb-3">
                  {step.title}
                </h3>
                
                <p className="text-xs text-brand-gray-medium leading-relaxed font-sans">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
