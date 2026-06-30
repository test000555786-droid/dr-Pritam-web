'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer';
import { SlideButton } from '@/components/ui/SlideButton';
import { useTextScramble } from '@/hooks/useTextScramble';
import { ServiceCard } from '@/components/ui/ServiceCard';
import Image from 'next/image';

const specializations = [
  {
    title: 'Dental Implantology',
    icon: '🦷',
    gradient: 'from-teal-500 to-teal-700',
    image: '/images/specializations/dental_implant.webp',
    badge: 'PRIMARY SPECIALIZATION',
    description:
      'Dental implants are the gold standard for replacing missing teeth. Dr. Praharaj specializes in single-tooth implants, multiple implants, and full-mouth rehabilitation using internationally approved implant systems.',
    bullets: [
      'Single & Multiple Tooth Implants',
      'Full-Arch Implant Rehabilitation',
      'Bone Grafting & Sinus Lifts',
      'Immediate Load / Same-Day Implants',
      'Implant-Supported Crowns & Bridges',
    ],
    services: [
      'Straumann & Osstem Implant Systems',
      'Digital Implant Planning with CBCT',
      'Surgical Guide-Based Placement',
      'All-on-4 & All-on-6 Solutions',
    ],
  },
  {
    title: 'Endodontics & Root Canal Therapy',
    icon: '🔬',
    gradient: 'from-teal-700 to-teal-900',
    image: '/images/specializations/root_canal.webp',
    badge: 'PRIMARY SPECIALIZATION',
    description:
      'Root canal therapy is often the last resort to save a severely damaged or infected tooth. Dr. Praharaj uses advanced rotary endodontics and digital apex locators to ensure pain-free, precise treatment with exceptional success rates.',
    bullets: [
      'Single Visit Root Canal Treatment',
      'Re-Root Canal Therapy (Re-RCT)',
      'Apicoectomy & Surgical Endodontics',
      'Management of Dental Abscesses',
      'Post & Core Build-Up Procedures',
    ],
    services: [
      'Rotary Endodontics (ProTaper, WaveOne)',
      'Digital Apex Locators & RVG',
      'Laser-Assisted Root Canal Disinfection',
      'Microscopic Endodontics',
    ],
  },
];

function TiltCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) return;
    e.currentTarget.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`tilt-card h-full ${className}`}
      data-cursor
    >
      {children}
    </div>
  );
}

export function SpecializationsSection() {
  const prefersReducedMotion = useReducedMotion();
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(eyebrowRef, { once: true });
  const scramble = useTextScramble(eyebrowRef, 'CORE EXPERTISE');

  useEffect(() => {
    if (isInView) scramble();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <section id="specializations" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="text-center mb-14">
          <span
            ref={eyebrowRef}
            className="inline-block uppercase text-teal-600 tracking-widest text-[11px] font-semibold mb-4 cursor-default"
          >
            CORE EXPERTISE
          </span>
          <h2 className="text-3xl lg:text-[44px] font-bold text-slate-900 leading-tight">
            Advanced Specializations in Modern Dentistry
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto leading-relaxed">
            Combining surgical precision with advanced diagnostics, Dr. Praharaj delivers world-class outcomes in implantology and endodontics — right here in Salipur, Odisha.
          </p>
        </RevealOnScroll>

        <StaggerContainer className="grid md:grid-cols-2 gap-8">
          {specializations.map((spec, idx) => (
            <StaggerItem key={idx}>
              <TiltCard>
                <ServiceCard 
                  title={spec.title}
                  description={spec.description}
                  badge={spec.badge}
                  image={spec.image}
                  items={spec.bullets}
                  services={spec.services}
                  ctaHref="#appointment"
                />
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
