'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Shield, Heart, User, Sparkles, Users, Wallet } from 'lucide-react';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer';

const reasons = [
  {
    icon: Shield,
    title: 'Advanced Technology',
    description: 'Equipped with digital RVG, rotary endodontics, ultrasonic scalers, and fully automated sterilization systems for precise, safe care.',
  },
  {
    icon: Heart,
    title: 'Pain-Free Care',
    description: 'Our gentle approach, modern anaesthetic techniques, and sedation options ensure every procedure is as comfortable as possible.',
  },
  {
    icon: User,
    title: 'Personalized Treatment',
    description: 'No two smiles are alike. Every treatment plan is customized to your unique dental needs, lifestyle, and goals.',
  },
  {
    icon: Sparkles,
    title: 'Sterile Environment',
    description: 'Strict adherence to international sterilization protocols. Every instrument is autoclaved and every surface is disinfected.',
  },
  {
    icon: Users,
    title: 'Experienced Team',
    description: 'Led by Dr. Praharaj with 15+ years of expertise, our team combines skill with compassion to deliver outstanding outcomes.',
  },
  {
    icon: Wallet,
    title: 'Affordable Pricing',
    description: 'Quality dental care should not break the bank. Transparent pricing, flexible payment plans, and no hidden charges.',
  },
];

export function WhyChooseSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="why-choose" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="text-center mb-14">
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

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, idx) => (
            <StaggerItem key={idx}>
              <div className="group bg-teal-50 hover:bg-white border border-teal-100 hover:border-teal-300 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                <div className="w-12 h-12 rounded-full bg-teal-600 flex items-center justify-center text-white mb-4 transition-transform duration-300 group-hover:scale-110">
                  <reason.icon className="w-5 h-5" />
                </div>
                <h3 className="text-[17px] font-semibold text-slate-900 mb-2">{reason.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed flex-1">{reason.description}</p>
                <div className="mt-4 h-[2px] w-0 group-hover:w-full bg-teal-500 transition-[width] duration-[400ms] ease-[cubic-bezier(0.76,0,0.24,1)]" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
