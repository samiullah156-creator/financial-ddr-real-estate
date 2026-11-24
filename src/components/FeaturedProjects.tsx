import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Filter, MapPin, Tag, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';
import { projectsData } from '../data';

interface FeaturedProjectsProps {
  lang: Language;
  onViewProjectsPage: () => void;
}

export default function FeaturedProjects({ lang, onViewProjectsPage }: FeaturedProjectsProps) {
  const t = translations[lang];
  const [filter, setFilter] = useState<'all' | 'residential' | 'commercial' | 'industrial'>('all');

  const filteredProjects = projectsData.filter(p => filter === 'all' || p.category === filter);

  return (
    <section id="featured-projects-section" className="py-24 bg-brand-charcoal border-t border-brand-gray-dark">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading & Filter actions */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-center md:text-left ltr:md:text-left rtl:md:text-right">
            <span className="text-[10px] tracking-[0.3em] text-brand-gray-medium uppercase font-bold">
              VERIFIED PORTFOLIO
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light font-serif text-brand-gray-light mt-3 max-w-xl leading-[1.1] tracking-tight">
              {t.projectsHeadline}
            </h2>
            <p className="text-sm text-brand-gray-medium mt-4 max-w-lg leading-relaxed">
              {t.projectsSubtitle}
            </p>
          </div>

          {/* Inline Filter Controls */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-end">
            {(['all', 'residential', 'commercial', 'industrial'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  filter === cat
                    ? 'bg-brand-gray-light text-brand-charcoal'
                    : 'bg-brand-stone text-brand-gray-medium border border-brand-gray-dark hover:border-brand-bronze'
                }`}
              >
                {cat === 'all' ? t.filterAll : cat === 'residential' ? t.filterResidential : cat === 'commercial' ? t.filterCommercial : t.filterIndustrial}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid - High End Editorial Style with scale and shadow hover animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.slice(0, 4).map((project) => (
            <motion.div
              key={project.id}
              className="group bg-brand-stone border border-brand-gray-dark overflow-hidden flex flex-col justify-between relative cursor-pointer transition-all duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.025] hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-12px_rgba(110,104,94,0.18)] hover:border-brand-gray-medium/60"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.45, 
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              {/* Card Image Block */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-[2000ms] ease-out filter brightness-[0.98]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Verified Metadata Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-stone via-transparent to-black/10" />
                
                {/* Premium Location Pin */}
                <div className="absolute bottom-4 ltr:left-4 rtl:right-4 bg-brand-stone/90 border border-brand-gray-dark backdrop-blur px-3 py-1.5 flex items-center space-x-1.5 rtl:space-x-reverse text-xs text-brand-gray-light">
                  <MapPin className="w-3.5 h-3.5 text-brand-bronze" />
                  <span className="font-semibold">{project.city}, KSA</span>
                </div>

                {/* Verified verification ribbon */}
                <div className="absolute top-4 ltr:right-4 rtl:left-4 bg-brand-bronze text-brand-charcoal px-3 py-1 text-[10px] font-bold uppercase tracking-wider flex items-center space-x-1 rtl:space-x-reverse">
                  <ShieldCheck className="w-3 h-3" />
                  <span>{t.verifiedProjectBadge}</span>
                </div>
              </div>

              {/* Card Content block */}
              <div className="p-8 space-y-6 flex-grow flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-widest text-brand-bronze font-bold">
                    <span>{project.category} solutions</span>
                    <span>{t.projectRealTitle}</span>
                  </div>

                  <h3 className="text-xl font-light font-serif text-brand-gray-light leading-tight">
                    {project.name}
                  </h3>

                  <p className="text-xs text-brand-gray-medium leading-relaxed italic">
                    {project.description}
                  </p>

                  <div className="pt-4 border-t border-brand-gray-dark space-y-2">
                    <span className="text-[10px] uppercase tracking-widest text-brand-gray-medium/60 block">
                      {t.projectScopeLabel}
                    </span>
                    <p className="text-xs text-brand-gray-medium leading-relaxed font-semibold">
                      {project.scope}
                    </p>
                  </div>
                </div>

                {/* Technical specs bullet preview */}
                {project.technicalDetails && (
                  <div className="mt-4 pt-4 border-t border-brand-gray-dark">
                    <ul className="space-y-1">
                      {project.technicalDetails.slice(0, 2).map((det, index) => (
                        <li key={index} className="text-[10px] font-mono text-brand-gray-medium flex items-center space-x-1.5 rtl:space-x-reverse">
                          <span className="w-1.5 h-[1.5px] bg-brand-bronze shrink-0" />
                          <span>{det}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Secondary CTA */}
                <div className="pt-6">
                  <button
                    onClick={onViewProjectsPage}
                    className="inline-flex items-center space-x-1.5 rtl:space-x-reverse text-xs tracking-wider uppercase font-bold text-brand-gray-light hover:text-brand-bronze transition-colors cursor-pointer"
                  >
                    <span>{t.viewProject}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Big CTA for Portfolio section */}
        <div className="mt-16 text-center">
          <button
            onClick={onViewProjectsPage}
            className="inline-flex items-center space-x-2 bg-transparent hover:bg-brand-gray-light/5 border border-brand-gray-dark hover:border-brand-gray-light text-brand-gray-light px-8 py-4 uppercase text-xs tracking-widest font-bold transition-all duration-300 cursor-pointer"
          >
            <span>{t.heroCTASecondary}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </button>
        </div>

      </div>
    </section>
  );
}
