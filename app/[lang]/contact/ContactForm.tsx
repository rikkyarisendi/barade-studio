// app/[lang]/contact/ContactForm.tsx
'use client';

import { submitContactForm, ContactFormResponse } from '@/app/actions';
import { useFormState, useFormStatus } from 'react-dom';
import { useState, useEffect, useRef } from 'react';
import { COUNTRIES, DEFAULT_COUNTRY, validatePhoneByCountry, type Country } from '@/lib/countries';

// ✅ Regex patterns untuk validasi
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PHONE_REGEX = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.\/0-9]*$/;

// ============================================================================
// ✅ PhoneInput Component
// ============================================================================

function PhoneInput({
  value,
  onChange,
  error,
  t,
}: {
  value: string;
  onChange: (countryCode: string, phoneNumber: string) => void;
  error?: string;
  t?: any;
}) {
  const [selectedCountry, setSelectedCountry] = useState<Country>(DEFAULT_COUNTRY);
  const [phoneNumber, setPhoneNumber] = useState(value.replace(DEFAULT_COUNTRY.dialCode, ''));
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const found = COUNTRIES.find(c => value.startsWith(c.dialCode));
    if (found) {
      setSelectedCountry(found);
      setPhoneNumber(value.replace(found.dialCode, '').trim());
    }
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchQuery('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleCountryChange = (country: Country) => {
    setSelectedCountry(country);
    setIsOpen(false);
    setSearchQuery('');
    onChange(country.dialCode, phoneNumber);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/[^\d]/g, '');
    setPhoneNumber(val);
    onChange(selectedCountry.dialCode, val);
  };

  const filteredCountries = COUNTRIES.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.dialCode.includes(searchQuery) ||
    c.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative" ref={dropdownRef}>
      <label className="block font-bold mb-2 text-[var(--text-primary)]">
        {t?.phone_label || 'Phone'}
      </label>
      <div className={`flex rounded-lg border-2 transition-colors ${error ? 'border-red-500' : 'border-[var(--border-color)] focus-within:border-brand-lime'}`}>
        <button type="button" onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2 px-3 py-3 bg-[var(--bg-primary)] dark:bg-[#1a1a1a] border-r-2 border-[var(--border-color)] hover:bg-[var(--border-color)]/10 transition-colors rounded-l-lg" aria-label="Select country" aria-expanded={isOpen}>
          <span className="text-lg">{selectedCountry.flag}</span>
          <span className="text-sm font-medium text-[var(--text-primary)] hidden sm:inline">{selectedCountry.dialCode}</span>
          <svg className={`w-4 h-4 text-[var(--text-muted)] transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </button>
        <input type="tel" value={phoneNumber} onChange={handlePhoneChange} placeholder={selectedCountry.format} inputMode="numeric" className={`flex-1 px-4 py-3 bg-[var(--bg-primary)] dark:bg-[#1a1a1a] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none rounded-r-lg ${error ? 'placeholder-red-400' : ''}`} aria-label="Phone number" />
      </div>
      {isOpen && (
        <div className="absolute z-20 mt-1 w-full max-h-72 overflow-hidden bg-[var(--bg-primary)] dark:bg-[#1a1a1a] border-2 border-[var(--border-color)] rounded-lg shadow-lg flex flex-col">
          <div className="sticky top-0 z-10 p-2 border-b border-[var(--border-color)] bg-[var(--bg-primary)] dark:bg-[#1a1a1a]">
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <input ref={searchInputRef} type="text" placeholder="Search country..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-9 pr-3 py-2 bg-[var(--bg-secondary)] dark:bg-[#2a2a2a] text-[var(--text-primary)] placeholder-[var(--text-muted)] rounded-md focus:outline-none focus:ring-2 focus:ring-brand-lime/50 text-sm" onClick={(e) => e.stopPropagation()} onKeyDown={(e) => { if (e.key === 'Escape') { setIsOpen(false); setSearchQuery(''); } }} />
              {searchQuery && (<button type="button" onClick={() => { setSearchQuery(''); searchInputRef.current?.focus(); }} className="absolute right-2 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors" aria-label="Clear search"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>)}
            </div>
          </div>
          <div className="flex-1 overflow-y-auto max-h-56">
            {filteredCountries.length > 0 ? (filteredCountries.map((country) => (<button key={country.code} type="button" onClick={() => handleCountryChange(country)} className={`w-full flex items-center gap-3 px-4 py-2.5 hover:bg-[var(--border-color)]/10 transition-colors text-left ${selectedCountry.code === country.code ? 'bg-brand-lime/10 text-brand-dark dark:text-brand-lime font-medium' : 'text-[var(--text-primary)]'}`}><span className="text-lg flex-shrink-0">{country.flag}</span><span className="flex-1 truncate">{country.name}</span><span className="text-sm text-[var(--text-muted)] flex-shrink-0">{country.dialCode}</span></button>))) : (<div className="px-4 py-6 text-center text-[var(--text-muted)]"><svg className="w-8 h-8 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><p className="text-sm">No countries found</p><button type="button" onClick={() => setSearchQuery('')} className="mt-2 text-brand-dark dark:text-brand-lime text-sm hover:underline">Clear search</button></div>)}
          </div>
          <div className="sticky bottom-0 px-4 py-2 border-t border-[var(--border-color)] bg-[var(--bg-primary)] dark:bg-[#1a1a1a] text-xs text-[var(--text-muted)] text-center">{filteredCountries.length} of {COUNTRIES.length} countries</div>
        </div>
      )}
      {error && (<p className="mt-1 text-sm text-red-500 flex items-center gap-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>{error}</p>)}
      <p className="mt-1 text-xs text-[var(--text-muted)]">Format: {selectedCountry.format}</p>
    </div>
  );
}

// ============================================================================
// ✅ ServiceSelect Component (NEW - Custom Dropdown)
// ============================================================================

function ServiceSelect({
  value,
  onChange,
  t,
}: {
  value: string;
  onChange: (value: string) => void;
  t: any;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const services = [
    { value: 'graphic-design', label: t?.services?.graphic_design || 'Visual Identity', icon: '🎨' },
    { value: 'web-development', label: t?.services?.web_development || 'Web Development', icon: '💻' },
    { value: 'branding', label: t?.services?.branding || 'UI/UX Design', icon: '✨' },
    { value: 'other', label: t?.services?.other || 'Other', icon: '📦' },
  ];

  const selectedService = services.find(s => s.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <label className="block font-bold mb-2 text-[var(--text-primary)]">
        {t?.service_label || 'Service Required'} *
      </label>
      
      {/* Dropdown Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 bg-[var(--bg-primary)] dark:bg-[#1a1a1a] border-2 border-[var(--border-color)] rounded-lg hover:border-brand-lime transition-colors text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <span className="text-xl">{selectedService?.icon || '📋'}</span>
          <span className={`text-[var(--text-primary)] ${!selectedService ? 'text-[var(--text-muted)]' : ''}`}>
            {selectedService?.label || (t?.service_placeholder || 'Select a category')}
          </span>
        </div>
        <svg
          className={`w-5 h-5 text-[var(--text-muted)] transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-20 mt-1 w-full bg-[var(--bg-primary)] dark:bg-[#1a1a1a] border-2 border-[var(--border-color)] rounded-lg shadow-lg overflow-hidden">
          {services.map((service) => (
            <button
              key={service.value}
              type="button"
              onClick={() => {
                onChange(service.value);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-[var(--border-color)]/10 transition-colors text-left ${
                value === service.value
                  ? 'bg-brand-lime/10 text-brand-dark dark:text-brand-lime font-medium'
                  : 'text-[var(--text-primary)]'
              }`}
            >
              <span className="text-xl">{service.icon}</span>
              <span>{service.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ============================================================================
// ✅ SubmitButton Component
// ============================================================================

function SubmitButton({ t }: { t: any }) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="w-full bg-brand-lime text-brand-dark px-8 py-4 font-bold text-md hover:bg-[var(--border-color)] hover:text-brand-lime transition-all duration-300 border-2 border-[var(--border-color)] rounded-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
      {pending ? (
        <>
          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
          {t?.sending || 'Sending...'}
        </>
      ) : (
        t?.send_message || 'SEND MESSAGE'
      )}
    </button>
  );
}

// ============================================================================
// ✅ Main ContactForm Component
// ============================================================================

export default function ContactForm({ 
  lang, 
  t 
}: { 
  lang: string; 
  t: {
    contact?: {
      hero?: any;
      form?: any;
      info?: any;
    };
  } 
}) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [errors, setErrors] = useState<{ email?: string; phone?: string }>({});
  const [state, formAction] = useFormState<ContactFormResponse, FormData>(submitContactForm, { success: false });
  const [isSuccess, setIsSuccess] = useState(false);
  const [formKey, setFormKey] = useState(0);

  useEffect(() => {
    if (state?.success && !isSuccess) {
      setIsSuccess(true);
      setFormKey(prev => prev + 1);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setErrors({});
      const timer = setTimeout(() => setIsSuccess(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [state, isSuccess]);

  // ✅ Validation functions
  const validateEmail = (email: string): string | undefined => {
    if (!email) return undefined;
    if (!EMAIL_REGEX.test(email)) return 'Please enter a valid email address';
    return undefined;
  };

  const validatePhone = (phone: string): string | undefined => {
    if (!phone) return undefined;
    if (!PHONE_REGEX.test(phone)) return 'Please enter a valid phone number';
    return undefined;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'email' || name === 'phone') setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handlePhoneChange = (dialCode: string, number: string) => {
    const fullPhone = number ? `${dialCode}${number}` : '';
    setFormData(prev => ({ ...prev, phone: fullPhone }));
    if (fullPhone) setErrors(prev => ({ ...prev, phone: undefined }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'email') setErrors(prev => ({ ...prev, email: validateEmail(value) }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailError = validateEmail(formData.email);
    const phoneError = formData.phone ? validatePhone(formData.phone) : undefined;
    if (emailError || phoneError) {
      setErrors({ email: emailError, phone: phoneError });
      return;
    }
    const formDataObj = new FormData();
    Object.entries(formData).forEach(([key, value]) => formDataObj.append(key, value));
    formAction(formDataObj);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 bg-brand-lime -mt-20">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-brand-dark">
            {t?.contact?.hero?.title || 'LET\'S TALK'}
          </h1>
          <p className="text-xl md:text-2xl text-brand-dark/80 max-w-3xl mx-auto animate-slide-in">
            {t?.contact?.hero?.subtitle || 'Have a project idea or a technical challenge? Get in touch to start a discussion about your needs.'}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 space-y-6 md:space-y-18 lg:space-y-20 grid md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div>
            <h2 className="font-display text-3xl font-bold mb-8 text-[var(--text-primary)]">
              {t?.contact?.info?.title_part1 || 'GET IN'} <span className="text-brand-dark dark:text-brand-lime">{t?.contact?.info?.title_part2 || 'TOUCH'}</span>
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="text-3xl mr-4">📧</div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-2 text-[var(--text-primary)]">{t?.contact?.info?.email_label || 'Email'}</h3>
                  <a href="mailto:baradedesign@gmail.com" className="text-[var(--text-muted)] hover:text-brand-lime transition-colors">
                    baradedesign@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-3xl mr-4">📱</div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-2 text-[var(--text-primary)]">{t?.contact?.info?.phone_label || 'Phone'}</h3>
                  <a href="tel:+6288970909446" className="text-[var(--text-muted)] hover:text-brand-lime transition-colors">
                    +62 889 7090 9446
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-3xl mr-4">📍</div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-2 text-[var(--text-primary)]">{t?.contact?.info?.location_label || 'Location'}</h3>
                  <p className="text-[var(--text-muted)]">
                    {t?.contact?.info?.location_value || 'Bandung, West Java, Indonesia'}
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-[var(--bg-secondary)] dark:bg-[#2a2a2a] p-8 rounded-lg border-2 border-[var(--border-color)]">
              <h3 className="font-display text-2xl font-bold mb-4 text-brand-dark dark:text-brand-lime">
                {t?.contact?.info?.hours_title || 'BUSINESS HOURS'}
              </h3>
              <div className="space-y-2 text-[var(--text-primary)]">
                <p className="flex justify-between"><span>{t?.contact?.info?.hours_weekday_label || 'Monday - Friday:'}</span><span className="font-bold">9:00 AM - 6:00 PM</span></p>
                <p className="flex justify-between"><span>{t?.contact?.info?.hours_saturday_label || 'Saturday:'}</span><span className="font-bold">10:00 AM - 4:00 PM</span></p>
                <p className="flex justify-between"><span>{t?.contact?.info?.hours_sunday_label || 'Sunday:'}</span><span className="font-bold">{t?.contact?.info?.hours_closed || 'Closed'}</span></p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[var(--bg-secondary)] dark:bg-[#2a2a2a] p-8 rounded-lg border-2 border-[var(--border-color)]">
            <h3 className="font-display text-2xl font-bold mb-6 text-[var(--text-primary)]">
              {t?.contact?.form?.title || 'SEND MESSAGE'}
            </h3>
            
            <form onSubmit={handleSubmit} key={formKey} className="space-y-6" noValidate>
              {/* Name */}
              <div>
                <label htmlFor="name" className="block font-bold mb-2 text-[var(--text-primary)]">
                  {t?.contact?.form?.name_label || 'Name'} *
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required minLength={2} maxLength={100} className="w-full px-4 py-3 border-2 border-[var(--border-color)] focus:border-brand-lime focus:outline-none bg-[var(--bg-primary)] dark:bg-[#1a1a1a] text-[var(--text-primary)] rounded-lg placeholder-[var(--text-muted)]" placeholder={t?.contact?.form?.name_placeholder || 'Your full name'} />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block font-bold mb-2 text-[var(--text-primary)]">
                  {t?.contact?.form?.email_label || 'Email'} *
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} required pattern={EMAIL_REGEX.source} className={`w-full px-4 py-3 border-2 focus:outline-none bg-[var(--bg-primary)] dark:bg-[#1a1a1a] text-[var(--text-primary)] rounded-lg placeholder-[var(--text-muted)] transition-colors ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-[var(--border-color)] focus:border-brand-lime'}`} placeholder={t?.contact?.form?.email_placeholder || 'name@example.com'} />
                {errors.email && (<p className="mt-1 text-sm text-red-500 flex items-center gap-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>{errors.email}</p>)}
              </div>

              {/* Phone with Country Selector */}
              <PhoneInput value={formData.phone} onChange={handlePhoneChange} error={errors.phone} t={t?.contact?.form} />

              {/* Service - Custom Dropdown (NEW) */}
              <ServiceSelect value={formData.service} onChange={(value) => setFormData(prev => ({ ...prev, service: value }))} t={t?.contact?.form} />

              {/* Message */}
              <div>
                <label htmlFor="message" className="block font-bold mb-2 text-[var(--text-primary)]">
                  {t?.contact?.form?.message_label || 'Message'} *
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required minLength={10} maxLength={2000} rows={5} className="w-full px-4 py-3 border-2 border-[var(--border-color)] focus:border-brand-lime focus:outline-none bg-[var(--bg-primary)] dark:bg-[#1a1a1a] text-[var(--text-primary)] resize-none placeholder-[var(--text-muted)]" placeholder={t?.contact?.form?.message_placeholder || 'Briefly describe your project goals...'}></textarea>
              </div>

              {/* Status Messages */}
              {state?.error && (<p className="text-red-500 font-medium text-center bg-red-500/10 px-4 py-2 rounded-lg border border-red-500/30">❌ {state.error}</p>)}
              {isSuccess && (<p className="text-brand-dark dark:text-brand-lime font-medium text-center bg-brand-lime/10 px-4 py-2 rounded-lg border border-brand-lime/30">✅ {t?.contact?.form?.success_message || 'Thank you. I have received your message and will get back to you shortly.'}</p>)}

              {/* Submit Button */}
              <SubmitButton t={t?.contact?.form} />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}