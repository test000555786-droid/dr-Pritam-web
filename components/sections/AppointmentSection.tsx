'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Check } from 'lucide-react';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { SlideButton } from '@/components/ui/SlideButton';
import { useTextScramble } from '@/hooks/useTextScramble';

const services = [
  'Dental Implants',
  'Root Canal Treatment',
  'Crowns & Bridges',
  'Teeth Whitening',
  'Smile Makeover',
  'Dental Fillings',
  'Gum Treatment',
  'Tooth Extraction',
  'Dental Cleaning',
  'Pediatric Dentistry',
  'General Checkup',
];

export function AppointmentSection() {
  const prefersReducedMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const scramble = useTextScramble(eyebrowRef, 'BOOK YOUR VISIT');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.date) newErrors.date = 'Please select a preferred date';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="appointment" className="py-20 lg:py-0 bg-white">
      <div className="max-w-7xl mx-auto lg:flex">
        {/* Left Panel */}
        <RevealOnScroll direction="left" className="lg:w-[40%] bg-gradient-to-br from-teal-600 to-teal-700 text-white p-8 lg:p-12 flex flex-col justify-center">
          <span
            ref={eyebrowRef}
            onMouseEnter={scramble}
            className="inline-block uppercase text-teal-200 tracking-widest text-[11px] font-semibold mb-4 cursor-default"
          >
            BOOK YOUR VISIT
          </span>
          <h2 className="text-3xl lg:text-[32px] font-bold mb-6">Book Your Appointment</h2>
          <p className="text-teal-100 mb-8 leading-relaxed">
            Schedule your consultation today and take the first step towards a healthier, more confident smile. Same-day appointments available for emergencies.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-teal-200 mt-0.5 shrink-0" />
              <span className="text-white/90 text-sm">Choudhury Dental & Skin Care Clinic, Salipur, Cuttack, Odisha — 754202</span>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-teal-200 mt-0.5 shrink-0" />
              <span className="text-white/90 text-sm">+91 XXXXX XXXXX</span>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-teal-200 mt-0.5 shrink-0" />
              <span className="text-white/90 text-sm">contact@drpritampraharaj.com</span>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-teal-200 mt-0.5 shrink-0" />
              <div className="text-white/90 text-sm">
                <div>Mon — Sat: 9:00 AM — 8:00 PM</div>
                <div>Sunday: 10:00 AM — 2:00 PM</div>
              </div>
            </div>
          </div>

          <SlideButton
            href="https://wa.me/919999999999?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20with%20Dr.%20Praharaj."
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="bg-green-500 border-green-500 hover:bg-green-600 mb-4"
          >
            💬 Chat on WhatsApp
          </SlideButton>

          <motion.div
            animate={prefersReducedMotion ? {} : { opacity: [1, 0.5, 1] }}
            transition={prefersReducedMotion ? {} : { repeat: Infinity, duration: 2 }}
            className="flex items-center gap-2 text-sm"
          >
            <span className="w-2 h-2 rounded-full bg-green-400" />
            <span className="text-teal-100">Available Now</span>
          </motion.div>
        </RevealOnScroll>

        {/* Right Panel */}
        <RevealOnScroll direction="right" delay={0.2} className="lg:w-[60%] p-8 lg:p-12">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-5"
              >
                <div>
                  <label className="block text-[13px] font-medium text-slate-700 mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none transition-all"
                    placeholder="Enter your full name"
                  />
                  <AnimatePresence>
                    {errors.name && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="text-red-500 text-xs mt-1 overflow-hidden"
                      >
                        {errors.name}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[13px] font-medium text-slate-700 mb-1.5">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none transition-all"
                      placeholder="+91 XXXXX XXXXX"
                    />
                    <AnimatePresence>
                      {errors.phone && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="text-red-500 text-xs mt-1 overflow-hidden"
                        >
                          {errors.phone}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-slate-700 mb-1.5">Email (Optional)</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none transition-all"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[13px] font-medium text-slate-700 mb-1.5">Select Service *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none transition-all appearance-none"
                    >
                      <option value="">Choose a service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    <AnimatePresence>
                      {errors.service && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="text-red-500 text-xs mt-1 overflow-hidden"
                        >
                          {errors.service}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-slate-700 mb-1.5">Preferred Date *</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none transition-all"
                    />
                    <AnimatePresence>
                      {errors.date && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="text-red-500 text-xs mt-1 overflow-hidden"
                        >
                          {errors.date}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-medium text-slate-700 mb-1.5">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none transition-all resize-none"
                    placeholder="Any specific concerns or questions..."
                  />
                </div>

                <SlideButton type="submit" variant="primary" className="w-full justify-center">
                  📅 Request Appointment
                </SlideButton>

                <p className="text-xs text-slate-400 text-center">
                  By submitting this form, you agree to our privacy policy. We will never share your information with third parties.
                </p>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                className="text-center py-12"
              >
                <motion.div
                  animate={prefersReducedMotion ? {} : { scale: [0, 1.3, 1] }}
                  transition={prefersReducedMotion ? {} : { duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                  className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6"
                >
                  <Check className="w-8 h-8 text-green-600" />
                </motion.div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Appointment Requested!</h3>
                <p className="text-slate-500">
                  Thank you, {formData.name}. Our team will contact you shortly at {formData.phone} to confirm your appointment.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </RevealOnScroll>
      </div>
    </section>
  );
}
