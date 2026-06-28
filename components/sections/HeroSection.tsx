'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { SlideButton } from '@/components/ui/SlideButton';
import { FloatingCard } from '@/components/ui/FloatingCard';
import { useTextScramble } from '@/hooks/useTextScramble';

const phrases = ['Certified Implantologist', 'Root Canal Specialist', 'Your Smile, Our Mission'];

const heroWords = [
  { text: 'Dr. Ch. Pritam', color: 'text-teal-600' },
  { text: 'Pratik Praharaj', color: 'text-slate-900' },
];

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const badgeRef = useRef<HTMLDivElement>(null);
  const scramble = useTextScramble(badgeRef, '🏅 BDS (Utkal) · Regd No. 1477(A) · IDA Member');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [phraseVisible, setPhraseVisible] = useState(true);

  useEffect(() => {
    scramble();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseVisible(false);
      setTimeout(() => {
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setPhraseVisible(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = prefersReducedMotion
    ? { hidden: {}, visible: {} }
    : { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

  const itemVariants = prefersReducedMotion
    ? { hidden: {}, visible: {} }
    : { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { ease: [0.76, 0, 0.24, 1], duration: 0.8 } } };

  return (
    <section id="hero" className="relative min-h-[100svh] flex items-start md:items-center bg-white pt-[24px] md:pt-[72px] w-full overflow-x-hidden overflow-y-hidden">
      <div className="grain-overlay" />

      {/* Dot-grid pattern */}
      <div
        className="absolute top-0 right-0 w-1/2 h-1/2 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #0d9488 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          opacity: 0.06,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-0 pb-28 lg:pb-24">
        <div className="grid lg:grid-cols-[55%_45%] gap-12 items-center">
          {/* Left Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10"
          >
            {/* Eyebrow badge */}
            <motion.div variants={itemVariants} className="mb-6 max-w-full">
              <div className="inline-flex flex-wrap max-w-full items-center gap-1.5 bg-teal-100 text-teal-800 tracking-widest text-[11px] uppercase font-semibold px-4 py-2 rounded-full" ref={badgeRef}>
                <span>🏅 BDS (Utkal)</span>
                <span className="opacity-40">·</span>
                <span>Regd. No. 1477(A)</span>
                <span className="opacity-40">·</span>
                <span>IDA Member</span>
              </div>
            </motion.div>

            {/* H1 Word mask reveal */}
            <motion.div variants={itemVariants} className="mb-6">
              <h1 className="text-[32px] sm:text-[40px] md:text-[52px] lg:text-[64px] font-black tracking-[-0.03em] leading-[1.05]">
                {heroWords.map((line, lineIdx) => (
                  <div key={lineIdx} className={line.color}>
                    {line.text.split(' ').map((word, wordIdx) => {
                      const totalPrevWords = heroWords
                        .slice(0, lineIdx)
                        .reduce((acc, w) => acc + w.text.split(' ').length, 0);
                      const delay = (totalPrevWords + wordIdx) * 0.07;
                      return (
                        <span key={wordIdx} style={{ display: 'inline-block', overflow: 'hidden', marginRight: '0.3em' }}>
                          <motion.span
                            className="inline-block"
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            transition={
                              prefersReducedMotion
                                ? { duration: 0 }
                                : { duration: 0.8, delay: 0.3 + delay, ease: [0.76, 0, 0.24, 1] }
                            }
                          >
                            {word}
                          </motion.span>
                        </span>
                      );
                    })}
                  </div>
                ))}
              </h1>
            </motion.div>

            {/* Animated Subtitle */}
            <motion.div variants={itemVariants} className="mb-4 h-8">
              <motion.span
                className="text-xl font-medium text-slate-600"
                animate={{ opacity: phraseVisible ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {phrases[phraseIndex]}
              </motion.span>
            </motion.div>

            {/* Expanding rule line */}
            <motion.div
              variants={itemVariants}
              className="mb-6"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : { duration: 0.6, delay: 1.2, ease: [0.76, 0, 0.24, 1] }
                }
                className="h-[2px] bg-teal-500 rounded-full"
              />
            </motion.div>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-lg text-slate-500 max-w-md leading-relaxed mb-8">
              Providing advanced, pain-free dental care at Choudhury Dental & Skin Care Clinic, Salipur — with 15+ years of expertise in dental implants, root canal therapy, and comprehensive oral care.
            </motion.p>

            {/* CTA Row */}
            <motion.div variants={itemVariants} className="flex flex-col gap-2.5 sm:flex-row mb-10">
              <SlideButton href="#appointment" variant="primary" className="w-full sm:w-auto flex justify-center">
                📅 Book Appointment
              </SlideButton>
              <SlideButton href="#services" variant="outline" className="w-full sm:w-auto flex justify-center">
                View Services ↓
              </SlideButton>
            </motion.div>

            {/* Trust Strip */}
            <motion.div variants={itemVariants} className="flex items-center gap-0 border-t border-neutral-100 pt-6 mt-6 overflow-x-auto">
              {[
                { value: '4.9', label: 'Google Rating', suffix: '★' },
                { value: '200+', label: 'Happy Patients', suffix: '' },
                { value: '15+', label: 'Years Experience', suffix: '' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 min-w-0 flex-1">
                  {idx > 0 && <span className="w-px h-8 bg-slate-200" />}
                  <div>
                    <div className="text-[28px] font-extrabold text-teal-600 leading-none">
                      {item.value}{item.suffix}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">{item.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <div className="relative hidden lg:flex items-center justify-center h-[500px]">
            {/* Morphing blob */}
            <div
              className="absolute w-[380px] h-[380px] bg-gradient-to-br from-teal-400 to-teal-600 morph-blob"
            />

            {/* Center tooth */}
            <div className="relative z-10 w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center">
              <span className="text-[120px] leading-none">🦷</span>
            </div>

            {/* Floating badge cards */}
            <FloatingCard delay={0} className="absolute top-8 left-0">
              ✅ Pain-Free Treatment
            </FloatingCard>
            <FloatingCard delay={0.8} className="absolute top-24 right-0">
              ⭐ 4.9 Rated Clinic
            </FloatingCard>
            <FloatingCard delay={1.5} className="absolute bottom-16 left-0">
              🔬 Modern Equipment
            </FloatingCard>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-16 left-1/2 -translate-x-1/2 scroll-indicator z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <ChevronDown className="text-teal-400 w-6 h-6" />
      </motion.div>

      {/* Marquee strip */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-teal-50 flex items-center w-full overflow-hidden z-20">
        <div className="marquee-track whitespace-nowrap flex items-center gap-8 text-[12px] uppercase tracking-widest text-teal-600 font-semibold will-change-transform">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="flex items-center gap-8">
              <span>Dental Implants</span>
              <span>·</span>
              <span>Root Canal Treatment</span>
              <span>·</span>
              <span>Crowns & Bridges</span>
              <span>·</span>
              <span>Teeth Whitening</span>
              <span>·</span>
              <span>Pain-Free Dentistry</span>
              <span>·</span>
              <span>Salipur</span>
              <span>·</span>
              <span>Odisha</span>
              <span>·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
