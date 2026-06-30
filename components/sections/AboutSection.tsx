'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { Award } from 'lucide-react';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer';
import { FloatingCard } from '@/components/ui/FloatingCard';
import { useTextScramble } from '@/hooks/useTextScramble';

export function AboutSection() {
  const prefersReducedMotion = useReducedMotion();
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const scramble = useTextScramble(eyebrowRef, 'ABOUT THE DOCTOR');

  useEffect(() => {
    const timer = setTimeout(() => scramble(), 500);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F0FDFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-stretch">
          {/* Left Column — Visual Stack */}
          <RevealOnScroll direction="left" className="relative h-full">
            <div className="relative h-full min-h-[500px] lg:min-h-[600px] w-full">
              {/* Image Card Container */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl group">
                <Image 
                  src="/images/dr-pritam-pratik-1.webp" 
                  alt="Dr. Ch. Pritam Pratik Praharaj" 
                  fill 
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 45vw"
                  priority
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/95 via-teal-900/60 to-transparent"></div>

                {/* Text content pinned to bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-white">
                  <div className="mb-6">
                    <div className="font-bold text-2xl lg:text-3xl tracking-tight mb-1">Dr. Ch. Pritam Pratik Praharaj</div>
                    <div className="font-medium text-teal-200 text-lg">Implantologist & RCT Specialist</div>
                    <div className="text-teal-100 text-sm mt-1 opacity-90">Choudhury Dental & Skin Care Clinic, Salipur</div>
                  </div>
                  
                  <div className="flex flex-col gap-2.5">
                    <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium px-4 py-2.5 rounded-xl w-fit flex items-center gap-2 shadow-sm">
                      <span className="text-base">🎓</span> BDS — Utkal University
                    </span>
                    <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium px-4 py-2.5 rounded-xl w-fit flex items-center gap-2 shadow-sm">
                      <span className="text-base">🪪</span> Regd. No. 1477(A), Odisha State Dental Council
                    </span>
                    <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium px-4 py-2.5 rounded-xl w-fit flex items-center gap-2 shadow-sm">
                      <span className="text-base">🦷</span> Certified Implantologist
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating sub-card — hidden on mobile to avoid covering the doctor's image */}
              <div className="absolute top-6 right-6 lg:-right-6 z-10 hidden lg:block">
                <FloatingCard delay={0.4} className="shadow-2xl border-teal-200 bg-white/95 backdrop-blur-sm min-w-[120px]">
                  <div className="flex flex-col items-center">
                    <Award className="w-6 h-6 text-teal-600 mb-1" />
                    <span className="text-3xl font-extrabold text-teal-600">15+</span>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider text-center mt-1">Years of<br/>Clinical Excellence</span>
                  </div>
                </FloatingCard>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right Column — Bio */}
          <RevealOnScroll direction="right">
            <div>
              <span
                ref={eyebrowRef}
                onMouseEnter={scramble}
                className="inline-block uppercase text-teal-600 tracking-widest text-[11px] font-semibold mb-4 cursor-default"
              >
                ABOUT THE DOCTOR
              </span>

              <h2 className="text-3xl lg:text-[40px] font-bold text-slate-900 leading-tight mb-6">
                Meet{' '}
                <span className="relative inline-block">
                  Dr.
                  <svg className="absolute left-0 -bottom-2 w-full h-3" viewBox="0 0 100 12" preserveAspectRatio="none">
                    <path d="M0 8 Q 25 0, 50 8 T 100 8" stroke="#0D9488" strokeWidth="3" fill="none" />
                  </svg>
                </span>{' '}
                Ch. Pritam Pratik Praharaj
              </h2>

              <div className="space-y-4 text-slate-600 leading-[1.75] mb-6">
                <p>
                  With a Bachelor of Dental Surgery (BDS) degree from Utkal University and over 15 years of hands-on clinical experience, Dr. Ch. Pritam Pratik Praharaj has established himself as one of the most trusted names in dental care across Salipur and the surrounding regions of Odisha. His unwavering commitment to patient comfort and clinical excellence has earned him a loyal patient base of over 5,000 individuals who trust him with their most precious asset — their smile.
                </p>
                <p>
                  Dr. Praharaj&apos;s practice is built on a foundation of empathy, precision, and continuous learning. He has completed advanced certification in dental implantology and stays at the forefront of modern endodontic techniques. His philosophy is simple: every patient deserves treatment that is not only clinically effective but also virtually painless. This patient-first approach has made Choudhury Dental & Skin Care Clinic a preferred destination for families seeking comprehensive dental care.
                </p>
                <p>
                  Beyond the clinic, Dr. Praharaj is deeply rooted in the Salipur community. He regularly participates in oral health awareness camps, school dental check-up programs, and community outreach initiatives. His dedication to making quality dental care accessible and affordable has transformed the oral health landscape of the region, one patient at a time.
                </p>
              </div>

              {/* Philosophy quote block */}
              <div className="border-l-4 border-teal-500 bg-teal-50 rounded-r-xl p-5 mb-8">
                <p className="text-[17px] text-slate-600 italic leading-relaxed">
                  &quot;Every patient who walks through our door is family. I believe in treating not just teeth, but the person behind the smile — with compassion, transparency, and the highest standards of care.&quot;
                </p>
                <p className="text-[13px] text-teal-700 font-semibold mt-3">— Dr. Ch. Pritam Pratik Praharaj</p>
              </div>

              {/* USP tags */}
              <StaggerContainer className="flex flex-wrap gap-3">
                {[
                  'IDA Member',
                  'Certified Implantologist',
                  'Pain-Free Specialist',
                  '15+ Years Experience',
                ].map((tag) => (
                  <StaggerItem key={tag}>
                    <span className="bg-white border border-teal-200 text-teal-700 rounded-full text-xs font-semibold px-4 py-2 flex items-center gap-1">
                      ✅ {tag}
                    </span>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
