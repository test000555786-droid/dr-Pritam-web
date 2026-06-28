'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { useMagnetic } from '@/hooks/useMagnetic';

const testimonials = [
  {
    name: 'Ramesh Kumar Behera',
    treatment: 'Dental Implants',
    location: 'Salipur, Odisha',
    quote: 'I had been avoiding dental implants for years due to fear. Dr. Praharaj explained the entire procedure with such patience and performed the implant surgery so gently that I barely felt any discomfort. Today, I can eat everything I love without worry. Truly life-changing!',
  },
  {
    name: 'Sunita Devi',
    treatment: 'Root Canal Treatment',
    location: 'Cuttack, Odisha',
    quote: 'The root canal treatment I received here was completely painless. Dr. Praharaj used the latest rotary equipment and the entire procedure was done in a single visit. I was back to work the very next day. Cannot recommend him enough.',
  },
  {
    name: 'Amit Ranjan Das',
    treatment: 'Smile Makeover',
    location: 'Bhubaneswar, Odisha',
    quote: 'My smile makeover journey with Dr. Praharaj has been nothing short of extraordinary. From the initial consultation to the final veneers, every step was handled with meticulous care. My confidence has skyrocketed. Thank you, doctor!',
  },
  {
    name: 'Prativa Mishra',
    treatment: 'Crowns & Bridges',
    location: 'Salipur, Odisha',
    quote: 'The ceramic crowns I got here look exactly like my natural teeth. Even my own family cannot tell the difference. The precision and aesthetic attention Dr. Praharaj brings to his work is remarkable. A wonderful clinic with a warm atmosphere.',
  },
  {
    name: 'Gopal Chandra Sahoo',
    treatment: 'Teeth Whitening',
    location: 'Jajpur, Odisha',
    quote: 'I walked in with stained, yellowish teeth and walked out with a dazzling smile in just one hour. The whitening results exceeded my expectations. The clinic is modern, clean, and the staff is incredibly supportive.',
  },
  {
    name: 'Rekha Patnaik',
    treatment: 'Pediatric Dentistry',
    location: 'Salipur, Odisha',
    quote: 'Dr. Praharaj has a magical way with children. My 6-year-old was terrified of dentists, but after the first visit to Choudhury Dental Clinic, she actually looks forward to her check-ups. He made dental care fun and stress-free for our entire family.',
  },
];

function TestimonialCard({ testimonial, isActive }: { testimonial: typeof testimonials[0]; isActive: boolean }) {
  return (
    <div
      className={`bg-white rounded-3xl p-8 shadow-sm transition-all duration-300 h-full flex flex-col ${
        isActive ? 'shadow-xl scale-[1.03] opacity-100' : 'scale-[0.97] opacity-80'
      } hover:shadow-xl hover:-translate-y-1`}
      data-cursor
    >
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[#D4A017] text-[#D4A017]" />
        ))}
      </div>
      <p className="text-base italic text-slate-600 leading-relaxed flex-1 mb-6">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div>
        <div className="font-semibold text-slate-900">{testimonial.name}</div>
        <div className="text-xs text-teal-600 mt-1">
          {testimonial.treatment} — {testimonial.location}
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const prevRef = useMagnetic<HTMLButtonElement>(0.3);
  const nextRef = useMagnetic<HTMLButtonElement>(0.3);

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [paused, next]);

  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(window.innerWidth >= 1024 ? 3 : 1);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getIndices = () => {
    const indices = [];
    for (let i = 0; i < visibleCount; i++) {
      indices.push((index + i) % testimonials.length);
    }
    return indices;
  };

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="text-center mb-10">
          <span className="inline-block uppercase text-teal-600 tracking-widest text-[11px] font-semibold mb-4">
            PATIENT STORIES
          </span>
          <h2 className="text-3xl lg:text-[44px] font-bold text-slate-900 leading-tight">
            What Our Patients Say
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="text-2xl font-extrabold text-teal-600">4.9</span>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#D4A017] text-[#D4A017]" />
              ))}
            </div>
            <span className="text-sm text-slate-500">Based on 200+ Google Reviews</span>
          </div>
        </RevealOnScroll>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                className="flex gap-6"
                initial={prefersReducedMotion ? {} : { x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={prefersReducedMotion ? {} : { x: -100, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              >
                {getIndices().map((idx, i) => (
                  <div key={`${index}-${idx}`} className="w-full lg:w-1/3 shrink-0">
                    <TestimonialCard testimonial={testimonials[idx]} isActive={i === 0} />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              ref={prevRef.ref}
              onMouseMove={prevRef.onMouseMove}
              onMouseLeave={prevRef.onMouseLeave}
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-teal-600 shadow-md hover:shadow-lg transition-shadow"
              data-cursor
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              ref={nextRef.ref}
              onMouseMove={nextRef.onMouseMove}
              onMouseLeave={nextRef.onMouseLeave}
              onClick={next}
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-teal-600 shadow-md hover:shadow-lg transition-shadow"
              data-cursor
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
