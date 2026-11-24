import React from 'react';
import { Shield, BookOpen, Layers, Users, BadgeCheck, FileText } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface AboutPageProps {
  lang: Language;
}

export default function AboutPage({ lang }: AboutPageProps) {
  const t = translations[lang];

  return (
    <div className="pt-24 min-h-screen bg-brand-stone">
      
      {/* Editorial Title Block */}
      <section className="py-20 bg-brand-charcoal border-b border-brand-gray-dark">
        <div className="max-w-4xl mx-auto px-6 text-center md:text-left ltr:md:text-left rtl:md:text-right">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-bronze font-bold">
            ABOUT THE CORPORATION
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light font-serif text-brand-gray-light mt-4 tracking-tight leading-[1.1] text-shadow-subtle">
            {t.aboutHeaderTitle}
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-brand-gray-medium mt-6 leading-relaxed max-w-2xl text-shadow-subtle">
            {t.aboutHeaderSubtitle}
          </p>
        </div>
      </section>

      {/* Main Intro Body */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Editorial Text Column */}
        <div className="lg:col-span-7 space-y-6 text-brand-gray-medium leading-relaxed text-sm sm:text-base text-justify backdrop-dim-light p-6 sm:p-8 border border-brand-gray-dark/40 shadow-sm">
          <h2 className="text-2xl font-normal font-serif text-brand-gray-light mb-6 tracking-wide text-left ltr:text-left rtl:text-right leading-snug text-shadow-subtle">
            {t.aboutIntroTitle}
          </h2>
          <p className="text-shadow-subtle">{t.aboutIntroDesc1}</p>
          <p className="text-shadow-subtle">{t.aboutIntroDesc2}</p>
        </div>

        {/* Fact Block Column */}
        <div className="lg:col-span-5 bg-brand-charcoal border border-brand-gray-dark p-8 space-y-6 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-32 h-32 bg-brand-bronze/5 rounded-full blur-[40px] pointer-events-none" />
          <h3 className="text-brand-gray-light text-sm font-bold tracking-wider uppercase font-serif pb-3 border-b border-brand-gray-dark flex items-center space-x-2.5 rtl:space-x-reverse">
            <BookOpen className="w-4.5 h-4.5 text-brand-bronze" />
            <span>OPERATING PROFILE</span>
          </h3>
          <ul className="space-y-4 text-xs font-mono text-brand-gray-medium">
            <li>
              <span className="text-brand-bronze block font-bold">HEADQUARTERS</span>
              <span className="text-brand-gray-light">Jeddah, Saudi Arabia (Serving all KSA regions)</span>
            </li>
            <li>
              <span className="text-brand-bronze block font-bold">PRIMARY DIVISIONS</span>
              <span className="text-brand-gray-light">Architectural Aluminum • Structural Glass • Fire-Rated Steel</span>
            </li>
            <li>
              <span className="text-brand-bronze block font-bold">COMPLIANCE CODE</span>
              <span className="text-brand-gray-light">Sourced materials conform to SASO standards and civil defense codes.</span>
            </li>
            <li>
              <span className="text-brand-bronze block font-bold">BUSINESS FOCUS</span>
              <span className="text-brand-gray-light">Architectural specifications, B2B procurement, submittals, and professional on-site installation.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-brand-charcoal border-y border-brand-gray-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center md:text-left ltr:md:text-left rtl:md:text-right">
            <span className="text-xs uppercase tracking-[0.25em] text-brand-bronze font-bold">
              OPERATIONAL HORIZONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-light font-serif text-brand-gray-light mt-3 leading-[1.1] tracking-tight">
              {t.aboutCapTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.aboutCapItems.map((cap, idx) => (
              <div key={idx} className="bg-brand-stone border border-brand-gray-dark p-8 space-y-4 group transition-colors duration-300 hover:border-brand-bronze/45">
                <div className="text-brand-bronze text-sm font-mono font-bold">
                  {`SPEC - 0${idx + 1}`}
                </div>
                <h3 className="text-lg font-normal font-serif text-brand-gray-light tracking-wide">{cap.title}</h3>
                <p className="text-xs sm:text-sm text-brand-gray-medium leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Certifications Placeholders */}
      <section className="py-24 max-w-4xl mx-auto px-6 space-y-8 text-center md:text-left ltr:md:text-left rtl:md:text-right">
        <div className="space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-bronze font-bold flex items-center justify-center md:justify-start space-x-2 rtl:space-x-reverse">
            <BadgeCheck className="w-5 h-5 text-brand-bronze" />
            <span>CERTIFICATION METADATA</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-light font-serif text-brand-gray-light leading-[1.1] tracking-tight">
            {t.aboutCertTitle}
          </h2>
          <p className="text-sm text-brand-gray-medium leading-relaxed">
            {t.aboutCertDesc}
          </p>
        </div>

        <div className="bg-brand-charcoal border border-brand-gray-dark p-8 text-center flex flex-col items-center justify-center space-y-3 relative overflow-hidden">
          <FileText className="w-8 h-8 text-brand-bronze" />
          <span className="text-xs font-mono font-bold tracking-widest text-brand-gray-light uppercase block">
            {t.aboutCertPlaceholder}
          </span>
        </div>
      </section>

      {/* Team Structure Placeholder */}
      <section className="py-24 bg-brand-charcoal border-t border-brand-gray-dark">
        <div className="max-w-4xl mx-auto px-6 space-y-8 text-center md:text-left ltr:md:text-left rtl:md:text-right">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-brand-bronze font-bold flex items-center justify-center md:justify-start space-x-2 rtl:space-x-reverse">
              <Users className="w-5 h-5 text-brand-bronze" />
              <span>ORGANIZATIONAL BLUEPRINT</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-light font-serif text-brand-gray-light leading-[1.1] tracking-tight">
              {t.aboutTeamPlaceholderTitle}
            </h2>
            <p className="text-sm text-brand-gray-medium leading-relaxed font-semibold">
              {t.aboutTeamPlaceholderDesc}
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
