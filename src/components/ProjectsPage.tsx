import React, { useState } from 'react';
import { Filter, MapPin, ShieldCheck, ClipboardCheck, ArrowRight, BookOpen, X, ZoomIn } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { Language, Project } from '../types';
import { translations } from '../translations';
import { projectsData } from '../data';

interface ProjectsPageProps {
  lang: Language;
}

export default function ProjectsPage({ lang }: ProjectsPageProps) {
  const t = translations[lang];
  const [filter, setFilter] = useState<'all' | 'residential' | 'commercial' | 'industrial'>('all');
  const [lightboxProject, setLightboxProject] = useState<Project | null>(null);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxProject(null);
      }
    };
    if (lightboxProject) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxProject]);

  const filteredProjects = projectsData.filter((p) => filter === 'all' || p.category === filter);

  return (
    <div className="pt-24 min-h-screen bg-brand-stone">
      
      {/* Page Header */}
      <section className="py-20 bg-brand-stone border-b border-brand-gray-dark">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-end justify-between gap-8">
          
          {/* Titles */}
          <div className="max-w-xl text-center md:text-left ltr:md:text-left rtl:md:text-right">
            <span className="text-xs uppercase tracking-[0.25em] text-brand-bronze font-bold">
              PORTFOLIO INDEX
            </span>
            <h1 className="text-4xl sm:text-5xl font-light font-serif text-brand-gray-light mt-4 tracking-tight leading-[1.1]">
              {t.projectsPageTitle}
            </h1>
            <p className="text-sm text-brand-gray-medium mt-4 leading-relaxed">
              {t.projectsPageSubtitle}
            </p>
          </div>

          {/* Filters Align Bottom Right */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-end">
            {(['all', 'residential', 'commercial', 'industrial'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  filter === cat
                    ? 'bg-brand-bronze text-brand-charcoal font-bold'
                    : 'bg-brand-stone text-brand-gray-medium border border-brand-gray-dark hover:border-brand-bronze'
                }`}
              >
                {cat === 'all' ? t.filterAll : cat === 'residential' ? t.filterResidential : cat === 'commercial' ? t.filterCommercial : t.filterIndustrial}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Grid List of Projects */}
      <section className="py-24 bg-brand-charcoal border-t border-brand-gray-dark">
        <div className="max-w-7xl mx-auto px-6">
          
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20 text-brand-gray-medium border border-brand-gray-dark bg-brand-stone">
              No projects found in this specific category.
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-brand-stone border border-brand-gray-dark overflow-hidden flex flex-col justify-between transition-all duration-500 ease-out hover:border-brand-bronze hover:scale-[1.02] hover:shadow-[0_20px_40px_-15px_rgba(110,104,94,0.15)] hover:z-10 relative"
                >
                  {/* Image Section */}
                  <div 
                    className="relative h-96 overflow-hidden cursor-zoom-in group/img"
                    onClick={() => setLightboxProject(project as Project)}
                  >
                    <img
                      src={project.imageUrl}
                      alt={project.name}
                      className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-[4000ms] ease-out filter brightness-95"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-stone via-transparent to-black/20" />
                    
                    {/* Hover Zoom Overlay */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-brand-stone/90 border border-brand-gray-dark text-brand-gray-light px-4 py-2 rounded-sm shadow-lg flex items-center space-x-1.5 backdrop-blur-sm">
                        <ZoomIn className="w-4 h-4 text-brand-bronze" />
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider">Inspect Details</span>
                      </div>
                    </div>

                    {/* Verified Ribbon */}
                    <div className="absolute top-4 ltr:right-4 rtl:left-4 bg-brand-bronze text-brand-charcoal px-3 py-1 text-[10px] font-bold uppercase tracking-wider flex items-center space-x-1.5 rtl:space-x-reverse z-10">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{t.verifiedProjectBadge}</span>
                    </div>

                    {/* Location Pin */}
                    <div className="absolute bottom-4 ltr:left-4 rtl:right-4 bg-brand-stone/90 border border-brand-gray-dark backdrop-blur px-3 py-1.5 flex items-center space-x-1.5 rtl:space-x-reverse text-xs text-brand-gray-light z-10">
                      <MapPin className="w-3.5 h-3.5 text-brand-bronze" />
                      <span className="font-semibold">{project.city}, KSA</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-8 space-y-6 flex-grow flex flex-col justify-between">
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-[11px] uppercase tracking-widest text-brand-bronze font-bold">
                        <span>{project.category} SECTOR</span>
                        <span>{t.projectRealTitle}</span>
                      </div>

                      <h2 className="text-2xl font-light font-serif text-brand-gray-light tracking-wide leading-tight">
                        {project.name}
                      </h2>

                      <p className="text-xs text-brand-gray-medium leading-relaxed italic">
                        {project.description}
                      </p>

                      {/* Scope block */}
                      <div className="pt-4 border-t border-brand-gray-dark space-y-2">
                        <span className="text-[10px] uppercase tracking-widest text-brand-gray-medium/60 block">
                          {t.projectScopeLabel}
                        </span>
                        <p className="text-xs sm:text-sm text-brand-gray-medium leading-relaxed font-semibold">
                          {project.scope}
                        </p>
                      </div>
                    </div>

                    {/* Expanded Technical Specs Bullet for Full Portfolio Page */}
                    {project.technicalDetails && (
                      <div className="pt-6 border-t border-brand-gray-dark space-y-3">
                        <span className="text-[10px] uppercase tracking-widest text-brand-bronze font-bold flex items-center space-x-1.5 rtl:space-x-reverse">
                          <ClipboardCheck className="w-4 h-4 text-brand-bronze" />
                          <span>Technical Performance Parameters</span>
                        </span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-brand-gray-medium">
                          {project.technicalDetails.map((det, index) => (
                            <li key={index} className="flex items-center space-x-1.5 rtl:space-x-reverse bg-brand-charcoal border border-brand-gray-dark/50 p-2">
                              <span className="w-1.5 h-1.5 bg-brand-bronze shrink-0" />
                              <span className="text-brand-gray-light">{det}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Full-Screen Image Lightbox */}
      <AnimatePresence>
        {lightboxProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-brand-charcoal/95 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-6"
            onClick={() => setLightboxProject(null)}
          >
            {/* Close Button (Standard touch targets: 48px) */}
            <button
              onClick={() => setLightboxProject(null)}
              className="absolute top-6 right-6 text-brand-gray-medium hover:text-brand-bronze p-3 border border-brand-gray-dark bg-brand-stone/80 backdrop-blur rounded-full shadow-lg transition-all duration-300 cursor-pointer min-h-[48px] min-w-[48px] flex items-center justify-center hover:scale-105"
              aria-label="Close lightbox"
              id="lightbox-close-btn"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Lightbox content container */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="relative max-w-5xl w-full bg-brand-stone border border-brand-gray-dark shadow-2xl p-3 sm:p-4 flex flex-col space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Frame */}
              <div className="relative overflow-hidden border border-brand-gray-dark/50 bg-black/5 flex items-center justify-center max-h-[70vh]">
                <img
                  src={lightboxProject.imageUrl}
                  alt={lightboxProject.name}
                  className="max-h-[70vh] w-auto max-w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Info Bar at bottom of lightbox */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-t border-brand-gray-dark pt-3 text-left ltr:text-left rtl:text-right gap-3">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-brand-bronze font-bold">
                    {lightboxProject.category} Sector
                  </span>
                  <h3 className="text-lg font-light font-serif text-brand-gray-light leading-tight">
                    {lightboxProject.name}
                  </h3>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse bg-brand-charcoal px-3 py-1.5 border border-brand-gray-dark/60 text-xs text-brand-gray-light">
                  <MapPin className="w-3.5 h-3.5 text-brand-bronze" />
                  <span className="font-semibold">{lightboxProject.city}, KSA</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
