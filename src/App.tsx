import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import WhatWeDo from './components/WhatWeDo';
import FeaturedProjects from './components/FeaturedProjects';
import EngineeringApproach from './components/EngineeringApproach';
import CommercialSection from './components/CommercialSection';
import ComplianceFeature from './components/ComplianceFeature';
import WhyAnaqco from './components/WhyAnaqco';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';

// Page Views
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import SolutionsPage from './components/SolutionsPage';
import ProductTemplatePage from './components/ProductTemplatePage';
import ContactPage from './components/ContactPage';
import ScrollReveal from './components/ScrollReveal';

import { Language } from './types';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedProductId, setSelectedProductId] = useState<string>('prod-slim-sliding');

  // Sync HTML dir attribute on language shift
  useEffect(() => {
    const rootHtml = document.documentElement;
    rootHtml.setAttribute('lang', lang);
    if (lang === 'ar') {
      rootHtml.setAttribute('dir', 'rtl');
    } else {
      rootHtml.setAttribute('dir', 'ltr');
    }
  }, [lang]);

  // Handle direct product specs explore from Solutions page
  const handleExploreProduct = (prodId: string) => {
    setSelectedProductId(prodId);
    setCurrentPage('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-brand-charcoal text-brand-gray-light flex flex-col justify-between selection:bg-brand-bronze selection:text-brand-charcoal">
      
      {/* 1. Sticky Navigation Header */}
      <Header
        lang={lang}
        setLang={setLang}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onRequestQuote={() => {
          setCurrentPage('contact');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        selectedProductId={selectedProductId}
      />

      {/* Main Content Layout Block */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <div className="space-y-0">
            {/* S2. Hero Banner */}
            <Hero
              lang={lang}
              onRequestQuote={() => {
                setCurrentPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onExploreProjects={() => {
                setCurrentPage('projects');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* S3. Trust strip */}
            <ScrollReveal>
              <TrustStrip lang={lang} />
            </ScrollReveal>

            {/* S4. What We Do Division cards */}
            <ScrollReveal delay={0}>
              <WhatWeDo
                lang={lang}
                onExploreSolutions={(category) => {
                  setCurrentPage('solutions');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </ScrollReveal>

            {/* S5. Premium Project Portfolio */}
            <ScrollReveal delay={150}>
              <FeaturedProjects
                lang={lang}
                onViewProjectsPage={() => {
                  setCurrentPage('projects');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </ScrollReveal>

            {/* S6. Engineering Procedural Approach */}
            <ScrollReveal delay={300}>
              <EngineeringApproach lang={lang} />
            </ScrollReveal>

            {/* S7. Commercial / B2B targets bento block */}
            <ScrollReveal>
              <CommercialSection
                lang={lang}
                onDiscussProject={() => {
                  setCurrentPage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </ScrollReveal>

            {/* S8. Compliance and Fire-Rating Spec sheet */}
            <ScrollReveal>
              <ComplianceFeature
                lang={lang}
                onRequestTechInfo={() => {
                  setCurrentPage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </ScrollReveal>

            {/* S9. "Evidence Before Adjectives" Credentials block */}
            <ScrollReveal>
              <WhyAnaqco lang={lang} />
            </ScrollReveal>

            {/* S10. Transparent Testimonials Placeholder */}
            <ScrollReveal>
              <Testimonials lang={lang} />
            </ScrollReveal>

            {/* S11. Interactive Procurement FAQs */}
            <ScrollReveal>
              <FAQ
                lang={lang}
                onAskProject={() => {
                  setCurrentPage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </ScrollReveal>

            {/* S12. Final CTA closing banner */}
            <ScrollReveal>
              <FinalCTA
                lang={lang}
                currentPage={currentPage}
                selectedProductId={selectedProductId}
                onRequestQuote={() => {
                  setCurrentPage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </ScrollReveal>
          </div>
        )}

        {/* Modular View Routing */}
        {currentPage === 'about' && (
          <AboutPage lang={lang} />
        )}

        {currentPage === 'projects' && (
          <ProjectsPage lang={lang} />
        )}

        {currentPage === 'solutions' && (
          <SolutionsPage
            lang={lang}
            onExploreProduct={handleExploreProduct}
          />
        )}

        {currentPage === 'products' && (
          <ProductTemplatePage
            lang={lang}
            selectedProductId={selectedProductId}
            onRequestQuote={() => {
              setCurrentPage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage lang={lang} />
        )}
      </main>

      {/* Primary Footer and Social indexes */}
      <Footer
        lang={lang}
        setLang={setLang}
        setCurrentPage={setCurrentPage}
      />

    </div>
  );
}
