import React, { useState, useRef } from 'react';
import { Phone, Mail, MapPin, Upload, FileText, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface ContactPageProps {
  lang: Language;
}

export default function ContactPage({ lang }: ContactPageProps) {
  const t = translations[lang];
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form Fields State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    projectType: 'commercial',
    serviceRequired: 'all',
    details: ''
  });

  // Files State
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  
  // Submission Status State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  // Handle Text inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle Drag & Drop events
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const filesArray = Array.from(e.dataTransfer.files);
      setSelectedFiles(prev => [...prev, ...filesArray]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const filesArray = Array.from(e.target.files);
      setSelectedFiles(prev => [...prev, ...filesArray]);
    }
  };

  const removeFile = (idx: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== idx));
  };

  // Submit Handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Quick validation
    if (!formData.name || !formData.phone || !formData.email || !formData.city) {
      alert(lang === 'en' ? 'Please fill out all required fields.' : 'يرجى ملء جميع الحقول المطلوبة.');
      return;
    }

    setIsSubmitting(true);

    // Simulate technical submission delay
    setTimeout(() => {
      const mockRefId = 'ANQ-' + Math.floor(100000 + Math.random() * 900000);
      setReferenceId(mockRefId);
      setIsSubmitting(false);
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  return (
    <div className="pt-24 min-h-screen bg-brand-stone">
      
      {/* Page Header */}
      <section className="py-20 bg-brand-charcoal border-b border-brand-gray-dark">
        <div className="max-w-4xl mx-auto px-6 text-center md:text-left ltr:md:text-left rtl:md:text-right">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-bronze font-bold">
            PROJECT OFFICE
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light font-serif text-brand-gray-light mt-4 tracking-tight leading-[1.1]">
            {t.contactHeaderTitle}
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-brand-gray-medium mt-6 leading-relaxed max-w-2xl">
            {t.contactHeaderSubtitle}
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Contacts */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Column: Interactive Form Panel */}
        <div className="lg:col-span-7">
          
          {isSuccess ? (
            /* Success State Render */
            <div className="bg-brand-charcoal border border-brand-bronze p-8 md:p-12 space-y-6 text-center ltr:text-left rtl:text-right shadow-md">
              <div className="w-12 h-12 bg-brand-bronze/10 border border-brand-bronze text-brand-bronze flex items-center justify-center mx-auto md:mx-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              
              <div className="space-y-3">
                <h2 className="text-2xl font-light font-serif text-brand-gray-light tracking-wide leading-[1.1]">
                  {t.formSuccessTitle}
                </h2>
                <p className="text-xs sm:text-sm text-brand-gray-medium leading-relaxed">
                  {t.formSuccessDesc}
                </p>
              </div>

              <div className="p-4 bg-brand-stone border border-brand-gray-dark font-mono text-xs text-brand-gray-light flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <span>{t.formSuccessRef}:</span>
                <span className="text-brand-bronze font-bold text-sm">{referenceId}</span>
              </div>

              <div className="pt-4 border-t border-brand-gray-dark/50 flex flex-col sm:flex-row items-center gap-4">
                {/* Secondary WhatsApp follow-up link */}
                <a
                  href={getWhatsAppUrl(lang, 'contact', { referenceId })}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-brand-bronze hover:bg-brand-bronze/90 text-brand-charcoal font-bold px-6 py-3.5 text-xs tracking-wider uppercase text-center transition-transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4 text-brand-charcoal" />
                  <span>{t.ctaWhatsApp}</span>
                </a>
                
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({
                      name: '',
                      phone: '',
                      email: '',
                      city: '',
                      projectType: 'commercial',
                      serviceRequired: 'all',
                      details: ''
                    });
                    setSelectedFiles([]);
                  }}
                  className="text-xs text-brand-gray-medium hover:text-brand-bronze underline"
                >
                  Submit another inquiry
                </button>
              </div>
            </div>
          ) : (
            /* Inquiry Form Panel */
            <form onSubmit={handleSubmit} className="bg-brand-charcoal border border-brand-gray-dark p-8 md:p-12 space-y-6 shadow-sm">
              
              <div className="border-b border-brand-gray-dark pb-4">
                <h2 className="text-xl font-bold font-serif text-brand-gray-light tracking-wide">
                  {t.contactFormTitle}
                </h2>
                <p className="text-xs text-brand-gray-medium mt-1 uppercase font-bold tracking-wider">
                  {t.contactFormSubtitle}
                </p>
              </div>

              {/* Form Input fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Name */}
                <div className="space-y-2 text-left ltr:text-left rtl:text-right">
                  <label className="text-xs font-bold text-brand-gray-medium uppercase tracking-wider block">
                    {t.formFieldName} <span className="text-brand-bronze">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g., Al-Farabi Commercial Corp"
                    className="w-full bg-brand-stone border border-brand-gray-dark text-brand-gray-light px-4 py-3 text-sm focus:outline-none focus:border-brand-bronze"
                  />
                </div>

                {/* Mobile / WhatsApp */}
                <div className="space-y-2 text-left ltr:text-left rtl:text-right">
                  <label className="text-xs font-bold text-brand-gray-medium uppercase tracking-wider block">
                    {t.formFieldPhone} <span className="text-brand-bronze">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g., +966 50 123 4567"
                    className="w-full bg-brand-stone border border-brand-gray-dark text-brand-gray-light px-4 py-3 text-sm font-mono focus:outline-none focus:border-brand-bronze"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2 text-left ltr:text-left rtl:text-right">
                  <label className="text-xs font-bold text-brand-gray-medium uppercase tracking-wider block">
                    {t.formFieldEmail} <span className="text-brand-bronze">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g., procurement@corp.com"
                    className="w-full bg-brand-stone border border-brand-gray-dark text-brand-gray-light px-4 py-3 text-sm font-mono focus:outline-none focus:border-brand-bronze"
                  />
                </div>

                {/* City */}
                <div className="space-y-2 text-left ltr:text-left rtl:text-right">
                  <label className="text-xs font-bold text-brand-gray-medium uppercase tracking-wider block">
                    {t.formFieldCity} <span className="text-brand-bronze">*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder={t.formFieldCityPlaceholder}
                    className="w-full bg-brand-stone border border-brand-gray-dark text-brand-gray-light px-4 py-3 text-sm focus:outline-none focus:border-brand-bronze"
                  />
                </div>

                {/* Project Type */}
                <div className="space-y-2 text-left ltr:text-left rtl:text-right">
                  <label className="text-xs font-bold text-brand-gray-medium uppercase tracking-wider block">
                    {t.formFieldType}
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full bg-brand-stone border border-brand-gray-dark text-brand-gray-light px-4 py-3 text-sm focus:outline-none focus:border-brand-bronze"
                  >
                    <option value="residential">{t.formFieldTypeOptionRes}</option>
                    <option value="commercial">{t.formFieldTypeOptionCom}</option>
                    <option value="industrial">{t.formFieldTypeOptionInd}</option>
                  </select>
                </div>

                {/* Service Required */}
                <div className="space-y-2 text-left ltr:text-left rtl:text-right">
                  <label className="text-xs font-bold text-brand-gray-medium uppercase tracking-wider block">
                    {t.formFieldService}
                  </label>
                  <select
                    name="serviceRequired"
                    value={formData.serviceRequired}
                    onChange={handleInputChange}
                    className="w-full bg-brand-stone border border-brand-gray-dark text-brand-gray-light px-4 py-3 text-sm focus:outline-none focus:border-brand-bronze"
                  >
                    <option value="aluminum">{t.formFieldServiceOptionAlu}</option>
                    <option value="glass">{t.formFieldServiceOptionGla}</option>
                    <option value="steel">{t.formFieldServiceOptionSte}</option>
                    <option value="all">{t.formFieldServiceOptionAll}</option>
                  </select>
                </div>

              </div>

              {/* Project Details */}
              <div className="space-y-2 text-left ltr:text-left rtl:text-right">
                <label className="text-xs font-bold text-brand-gray-medium uppercase tracking-wider block">
                  {t.formFieldDetails}
                </label>
                <textarea
                  name="details"
                  rows={4}
                  value={formData.details}
                  onChange={handleInputChange}
                  placeholder={t.formFieldDetailsPlaceholder}
                  className="w-full bg-brand-stone border border-brand-gray-dark text-brand-gray-light p-4 text-sm focus:outline-none focus:border-brand-bronze resize-none"
                />
              </div>

              {/* Upload Blueprint File Drag and Drop */}
              <div className="space-y-2 text-left ltr:text-left rtl:text-right">
                <label className="text-xs font-bold text-brand-gray-medium uppercase tracking-wider block">
                  {t.formFieldFiles}
                </label>
                
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded p-8 text-center cursor-pointer transition-all ${
                    isDragging
                      ? 'border-brand-bronze bg-brand-bronze/5'
                      : 'border-brand-gray-dark hover:border-brand-bronze/40 bg-brand-stone/10'
                  }`}
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    multiple
                    onChange={handleFileSelect}
                    className="hidden"
                    accept=".pdf,.dwg,.png,.jpg,.jpeg"
                  />
                  <div className="flex flex-col items-center justify-center space-y-2 text-brand-gray-medium text-xs sm:text-sm">
                    <Upload className="w-8 h-8 text-brand-bronze" />
                    <p>{t.formFieldFilesDrag}</p>
                    <p className="text-[10px] text-brand-gray-medium/55 uppercase font-bold tracking-wide">
                      {t.formFieldFilesMax}
                    </p>
                  </div>
                </div>

                {/* Selected Files preview */}
                {selectedFiles.length > 0 && (
                  <div className="pt-3 space-y-2">
                    <span className="text-[10px] uppercase text-brand-gray-medium/60 tracking-wider font-mono font-bold">
                      {selectedFiles.length} {t.formFieldFilesCount}
                    </span>
                    <div className="space-y-1.5">
                      {selectedFiles.map((file, idx) => (
                        <div key={idx} className="flex items-center justify-between text-xs font-mono p-2 border border-brand-gray-dark bg-brand-stone text-brand-gray-light">
                          <span className="truncate max-w-[80%]">{file.name}</span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              removeFile(idx);
                            }}
                            className="text-red-600 hover:text-red-700 font-bold underline cursor-pointer"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-bronze hover:bg-brand-bronze/90 text-brand-charcoal font-bold py-4 text-xs tracking-widest uppercase text-center transition-all duration-300 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? t.formSubmitting : t.formSubmit}
                </button>
              </div>

            </form>
          )}

        </div>

        {/* Right Column: Direct Channels & Map */}
        <div className="lg:col-span-5 space-y-12">
          
          {/* Channel Info Cards */}
          <div className="bg-brand-charcoal border border-brand-gray-dark p-8 space-y-8 text-center md:text-left ltr:md:text-left rtl:md:text-right shadow-sm">
            <div>
              <h3 className="text-brand-gray-light text-base font-normal font-serif tracking-wide uppercase">
                {t.contactDirectTitle}
              </h3>
              <p className="text-xs text-brand-gray-medium mt-2 leading-relaxed">
                {t.contactDirectDesc}
              </p>
            </div>

            <div className="space-y-6">
              
              {/* Location Card */}
              <div className="flex items-start space-x-4 rtl:space-x-reverse text-xs sm:text-sm text-brand-gray-medium">
                <div className="w-10 h-10 shrink-0 bg-brand-stone border border-brand-gray-dark text-brand-bronze flex items-center justify-center">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="text-[10px] text-brand-gray-medium uppercase block font-mono font-bold tracking-wider">
                    {t.contactAddressLabel}
                  </span>
                  <span className="text-brand-gray-light font-bold leading-normal block mt-0.5">
                    {t.footerAddress}
                  </span>
                </div>
              </div>

              {/* Call/WhatsApp Card */}
              <div className="flex items-start space-x-4 rtl:space-x-reverse text-xs sm:text-sm text-brand-gray-medium">
                <div className="w-10 h-10 shrink-0 bg-brand-stone border border-brand-gray-dark text-brand-bronze flex items-center justify-center">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="text-[10px] text-brand-gray-medium uppercase block font-mono font-bold tracking-wider">
                    {t.contactPhoneLabel}
                  </span>
                  <a href="tel:+966599606818" className="text-brand-gray-light hover:text-brand-bronze transition-colors font-mono font-bold text-sm block mt-0.5">
                    +966 59 960 6818
                  </a>
                  <a href={getWhatsAppUrl(lang, 'contact')} target="_blank" referrerPolicy="no-referrer" rel="noopener noreferrer" className="text-brand-bronze hover:underline text-xs block mt-1 font-bold">
                    Send WhatsApp message
                  </a>
                </div>
              </div>

              {/* Official RFP Mail Card */}
              <div className="flex items-start space-x-4 rtl:space-x-reverse text-xs sm:text-sm text-brand-gray-medium">
                <div className="w-10 h-10 shrink-0 bg-brand-stone border border-brand-gray-dark text-brand-bronze flex items-center justify-center">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="text-[10px] text-brand-gray-medium uppercase block font-mono font-bold tracking-wider">
                    {t.contactEmailLabel}
                  </span>
                  <a href="mailto:info@anaqco.com" className="text-brand-gray-light hover:text-brand-bronze transition-colors font-mono font-bold text-sm block mt-0.5">
                    info@anaqco.com
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Aesthetic Compliance Guard block */}
          <div className="bg-brand-stone border border-brand-gray-dark p-6 flex items-start space-x-3.5 rtl:space-x-reverse text-xs text-brand-gray-medium leading-relaxed font-sans shadow-sm">
            <AlertCircle className="w-5 h-5 text-brand-bronze shrink-0" />
            <p>
              Your contact details are used strictly to coordinate project bids, estimations, and specification compliance. Sourced documentation files are processed in a highly secure environment.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}
