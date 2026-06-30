'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Shield, Heart, User, Sparkles, Users, Wallet } from 'lucide-react';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer';
import Image from 'next/image';

const reasons = [
  {
    icon: Shield,
    image: '/images/why-choose/advanced_tech.webp',
    title: 'Advanced Technology',
    description: 'Equipped with digital RVG, rotary endodontics, ultrasonic scalers, and fully automated sterilization systems for precise, safe care.',
  },
  {
    icon: Heart,
    image: '/images/why-choose/pain_free.webp',
    title: 'Pain-Free Care',
    description: 'Our gentle approach, modern anaesthetic techniques, and sedation options ensure every procedure is as comfortable as possible.',
  },
  {
    icon: User,
    image: '/images/why-choose/personalized_care.webp',
    title: 'Personalized Treatment',
    description: 'No two smiles are alike. Every treatment plan is customized to your unique dental needs, lifestyle, and goals.',
  },
  {
    icon: Sparkles,
    image: '/images/why-choose/sterile_env.webp',
    title: 'Sterile Environment',
    description: 'Strict adherence to international sterilization protocols. Every instrument is autoclaved and every surface is disinfected.',
  },
  {
    icon: Users,
    image: '/images/why-choose/team.webp',
    title: 'Experienced Team',
    description: 'Led by Dr. Praharaj with 15+ years of expertise, our team combines skill with compassion to deliver outstanding outcomes.',
  },
  {
    icon: Wallet,
    image: '/images/why-choose/affordable.webp',
    title: 'Affordable Pricing',
    description: 'Quality dental care should not break the bank. Transparent pricing, flexible payment plans, and no hidden charges.',
  },
];

export function WhyChooseSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="why-choose" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="text-center mb-16">
          <span className="inline-block uppercase text-teal-600 tracking-widest text-[11px] font-semibold mb-4">
            WHY CHOOSE US
          </span>
          <h2 className="text-3xl lg:text-[44px] font-bold text-slate-900 leading-tight">
            The Salipur Dental Care Difference
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto leading-relaxed">
            We do not just treat teeth — we build lasting relationships based on trust, transparency, and exceptional clinical outcomes.
          </p>
        </RevealOnScroll>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, idx) => (
            <StaggerItem key={idx}>
              <div className="group relative rounded-2xl overflow-hidden bg-white border border-slate-100 hover:border-teal-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(13,148,136,0.12)] transition-all duration-500 h-full flex flex-col cursor-default">
                
                {/* Image Section */}
                <div className="relative w-full aspect-[4/3] overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-teal-900/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                  <Image 
                    src={reason.image} 
                    alt={reason.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
                  />
                  {/* Icon Badge Overlay */}
                  <div className="absolute top-4 left-4 z-20 w-10 h-10 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center text-teal-600 shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-transform duration-500 group-hover:scale-110">
                    <reason.icon className="w-4 h-4" strokeWidth={2.5} />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 flex flex-col flex-1 relative bg-white">
                  <h3 className="text-[18px] font-bold text-slate-900 mb-3 transition-colors duration-300 group-hover:text-teal-700">
                    {reason.title}
                  </h3>
                  <p className="text-[13.5px] text-slate-500 leading-relaxed flex-1">
                    {reason.description}
                  </p>
                  
                  {/* Bottom animated border */}
                  <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full bg-gradient-to-r from-teal-400 to-teal-600 transition-[width] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
