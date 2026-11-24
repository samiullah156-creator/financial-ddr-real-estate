import React, { useState } from 'react';
import { Layers, Settings, FileText, ChevronDown, CheckCircle2, ShieldCheck, HelpCircle, Phone, MessageSquare } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';
import { productsData } from '../data';

interface ProductTemplatePageProps {
  lang: Language;
  selectedProductId?: string;
  onRequestQuote: () => void;
}

export default function ProductTemplatePage({
  lang,
  selectedProductId = 'prod-slim-sliding',
  onRequestQuote
}: ProductTemplatePageProps) {
  const t = translations[lang];
  const [activeProductId, setActiveProductId] = useState(selectedProductId);

  // Sync state if prop changes
  React.useEffect(() => {
    setActiveProductId(selectedProductId);
  }, [selectedProductId]);

  const activeProduct = productsData.find((p) => p.id === activeProductId) || productsData[0];

  return (
    <div className="pt-24 min-h-screen bg-brand-stone">
      
      {/* Scalable Template Selector Bar */}
      <section className="bg-brand-charcoal border-b border-brand-gray-dark py-4 px-6 sticky top-[64px] z-30 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[10px] font-mono font-bold tracking-widest text-brand-bronze uppercase flex items-center space-x-2 rtl:space-x-reverse">
            <Settings className="w-4 h-4 animate-spin-slow" />
            <span>Interactive Product Template Engine</span>
          </span>
          
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="text-xs text-brand-gray-medium uppercase">Switch Specifications:</span>
            <select
              value={activeProductId}
              onChange={(e) => setActiveProductId(e.target.value)}
              className="bg-brand-stone border border-brand-gray-dark text-brand-gray-light text-xs px-4 py-2 font-bold focus:outline-none focus:border-brand-bronze cursor-pointer"
            >
              {productsData.map((prod) => (
                <option key={prod.id} value={prod.id}>
                  {prod.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* 1. Hero */}
      <section className="relative py-24 bg-brand-stone overflow-hidden border-b border-brand-gray-dark">
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-brand-bronze/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center md:text-left ltr:md:text-left rtl:md:text-right">
            <span className="text-xs uppercase tracking-[0.25em] text-brand-bronze font-bold">
              {activeProduct.category} product profiles
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light font-serif text-brand-gray-light tracking-tight leading-[1.1]">
              {activeProduct.name}
            </h1>
            <p className="text-sm sm:text-base text-brand-gray-medium leading-relaxed max-w-xl">
              {activeProduct.tagline}
            </p>
          </div>

          <div className="lg:col-span-5 h-80 overflow-hidden border border-brand-gray-dark relative">
            <img
              src={activeProduct.imageUrl}
              alt={activeProduct.name}
              className="w-full h-full object-cover select-none"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-stone via-transparent to-black/20" />
          </div>
        </div>
      </section>

      {/* 2. Product Overview & 3. Applications */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Column: Overview & Applications */}
        <div className="lg:col-span-7 space-y-12 text-center md:text-left ltr:md:text-left rtl:md:text-right">
          
          {/* Overview */}
          <div className="space-y-4">
            <h2 className="text-2xl font-light font-serif text-brand-gray-light tracking-wide border-b border-brand-gray-dark pb-3">
              {t.prodOverview}
            </h2>
            <p className="text-sm sm:text-base text-brand-gray-medium leading-relaxed">
              {activeProduct.overview}
            </p>
          </div>

          {/* Applications */}
          <div className="space-y-4">
            <h2 className="text-2xl font-light font-serif text-brand-gray-light tracking-wide border-b border-brand-gray-dark pb-3">
              {t.prodApplications}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeProduct.applications.map((app, idx) => (
                <div key={idx} className="flex items-start space-x-2.5 rtl:space-x-reverse text-xs sm:text-sm text-brand-gray-medium">
                  <CheckCircle2 className="w-5 h-5 text-brand-bronze shrink-0 mt-0.5" />
                  <span>{app}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: 4. Key Considerations */}
        <div className="lg:col-span-5 bg-brand-charcoal border border-brand-gray-dark p-8 space-y-6 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-32 h-32 bg-brand-bronze/5 rounded-full blur-[40px] pointer-events-none" />
          
          <h3 className="text-brand-gray-light text-sm font-light tracking-wider uppercase font-serif pb-3 border-b border-brand-gray-dark">
            {t.prodKeyConsiderations}
          </h3>

          <div className="space-y-5 text-xs sm:text-sm text-brand-gray-medium leading-relaxed">
            {activeProduct.considerations.map((con, idx) => {
              const [label, body] = con.split(': ');
              return (
                <div key={idx} className="p-4 bg-brand-stone border border-brand-gray-dark space-y-1">
                  <span className="text-brand-bronze font-bold block uppercase tracking-wide">
                    {label}
                  </span>
                  {body && <p className="text-xs text-brand-gray-medium">{body}</p>}
                </div>
              );
            })}
          </div>
        </div>

      </section>

      {/* 5. Technical Information Placeholder */}
      <section className="py-24 bg-brand-charcoal border-y border-brand-gray-dark">
        <div className="max-w-4xl mx-auto px-6 space-y-8 text-center md:text-left ltr:md:text-left rtl:md:text-right">
          
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-brand-bronze font-bold flex items-center justify-center md:justify-start space-x-2 rtl:space-x-reverse">
              <FileText className="w-5 h-5" />
              <span>DATASHEET PROTOCOLS</span>
            </span>
            <h2 className="text-3xl font-light font-serif text-brand-gray-light leading-[1.1] tracking-tight">
              {t.prodTechnicalInfo}
            </h2>
            <p className="text-sm text-brand-gray-medium leading-relaxed">
              Standard technical values for this system layout. Sourced from standard manufacturer reference calculations.
            </p>
          </div>

          {/* Table representing mechanical specs */}
          <div className="border border-brand-gray-dark bg-brand-stone overflow-hidden">
            <table className="w-full text-left ltr:text-left rtl:text-right text-xs sm:text-sm font-mono text-brand-gray-medium">
              <thead>
                <tr className="bg-brand-charcoal text-brand-bronze font-bold border-b border-brand-gray-dark">
                  <th className="p-4 uppercase tracking-wider">Engineering Parameter</th>
                  <th className="p-4 uppercase tracking-wider">Performance Data</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-gray-dark/40">
                {activeProduct.technicalSpecs.map((spec, idx) => (
                  <tr key={idx} className="hover:bg-brand-stone/30">
                    <td className="p-4 font-bold text-brand-gray-light">{spec.label}</td>
                    <td className="p-4 text-brand-bronze">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Explicit client provided technical data block */}
          <div className="bg-brand-stone border border-brand-gray-dark p-6 text-center text-xs font-mono text-brand-bronze uppercase">
            {t.prodTechnicalPlaceholder}
          </div>

        </div>
      </section>

      {/* 6. Project Examples */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center md:text-left ltr:md:text-left rtl:md:text-right">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-bronze font-bold">
            CASE HISTORIES
          </span>
          <h2 className="text-3xl font-light font-serif text-brand-gray-light mt-3 leading-[1.1] tracking-tight">
            {t.prodExamples}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activeProduct.projectExamples.map((ex, idx) => (
            <div
              key={idx}
              className="bg-brand-stone border border-brand-gray-dark hover:border-brand-bronze hover:scale-[1.02] hover:shadow-[0_20px_40px_-15px_rgba(110,104,94,0.15)] transition-all duration-300 p-8 space-y-4"
            >
              <div className="flex items-center justify-between text-xs font-mono text-brand-bronze">
                <span>[Verified project log]</span>
                <span>{ex.location}, KSA</span>
              </div>
              <h3 className="text-lg font-normal font-serif text-brand-gray-light tracking-wide">{ex.title}</h3>
              <p className="text-xs sm:text-sm text-brand-gray-medium leading-relaxed">
                Scope: {ex.scope}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Product FAQ */}
      <section className="py-24 bg-brand-charcoal border-t border-brand-gray-dark">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-brand-bronze font-bold flex items-center justify-center space-x-1.5">
              <HelpCircle className="w-4 h-4 text-brand-bronze" />
              <span>TECHNICAL DEBRIEF</span>
            </span>
            <h2 className="text-3xl font-light font-serif text-brand-gray-light mt-3 leading-[1.1] tracking-tight">
              {t.prodFAQ}
            </h2>
          </div>

          <div className="space-y-6">
            {activeProduct.faq.map((fq, idx) => (
              <div key={idx} className="p-6 bg-brand-stone border border-brand-gray-dark/50 space-y-3">
                <h3 className="text-sm sm:text-base font-semibold text-brand-gray-light font-serif">{fq.question}</h3>
                <p className="text-xs sm:text-sm text-brand-gray-medium leading-relaxed">{fq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA */}
      <section className="py-24 max-w-4xl mx-auto px-6 text-center space-y-8">
        <h2 className="text-3xl font-light font-serif text-brand-gray-light leading-[1.1] tracking-tight">
          {t.prodCTA}
        </h2>
        <p className="text-sm text-brand-gray-medium max-w-lg mx-auto leading-relaxed">
          Need full DWG files, localized Civil Defense certification submittals, or custom profile quotes for this system? Let us talk.
        </p>
        <div className="flex items-center justify-center">
          <button
            onClick={onRequestQuote}
            className="bg-brand-gray-light hover:bg-brand-bronze text-brand-charcoal hover:text-white font-bold px-8 py-4 uppercase text-xs tracking-widest transition-all duration-300 cursor-pointer"
          >
            {t.ctaRequestQuote}
          </button>
        </div>
      </section>

    </div>
  );
}
