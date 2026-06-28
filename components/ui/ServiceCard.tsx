'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldPlus } from 'lucide-react';

export interface ServiceCardProps {
  title: string;
  description: string;
  badge: string;
  image: string;
  items: string[];
  services: string[];
  ctaHref: string;
}

export function ServiceCard({
  title,
  description,
  badge,
  image,
  items,
  services,
  ctaHref
}: ServiceCardProps) {
  // Determine relevant icon based on title
  const Icon = title.toLowerCase().includes('endodontic') || title.toLowerCase().includes('root canal') 
    ? ShieldPlus 
    : CheckCircle2;

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.04),_0_12px_40px_rgba(0,0,0,0.07)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06),_0_20px_60px_rgba(13,148,136,0.10)] transition-shadow duration-500 ease-out overflow-hidden flex flex-col h-full">
      
      {/* ZONE 1 — HERO IMAGE */}
      <div className="relative w-full aspect-video overflow-hidden after:absolute after:inset-0 after:bg-gradient-to-t after:from-black/55 after:to-transparent shrink-0">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover" 
        />
        <span className="absolute bottom-3 left-3 z-10 backdrop-blur-sm bg-white/20 border border-white/30 text-white text-[10px] font-semibold tracking-[0.15em] uppercase rounded-full px-3 py-1">
          {badge}
        </span>
      </div>

      <div className="p-6 flex flex-col gap-4 flex-1">
        {/* ZONE 2 — TITLE ROW */}
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
            <Icon size={20} strokeWidth={2.5} />
          </div>
          <div className="flex flex-col gap-0.5">
            <h3 className="text-[21px] font-semibold text-slate-900 leading-snug">{title}</h3>
            <p className="text-[12.5px] text-teal-600 font-medium">Advanced Dental Care</p>
          </div>
        </div>

        {/* ZONE 3 — DESCRIPTION */}
        <p className="text-[13.5px] text-slate-500 leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* ZONE 4 — WHAT WE TREAT */}
        <div>
          <h4 className="text-[10px] font-semibold tracking-[0.12em] text-slate-400 uppercase mb-2">What We Treat</h4>
          <div className="grid grid-cols-2 gap-2">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-teal-500 shrink-0" />
                <span className="text-[12px] text-slate-600 leading-tight">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ZONE 5 — SERVICES OFFERED */}
        <div>
          <h4 className="text-[10px] font-semibold tracking-[0.12em] text-slate-400 uppercase mb-2">Services Offered</h4>
          <div className="flex flex-wrap gap-1.5">
            {services.map((service, idx) => (
              <span key={idx} className="bg-teal-50 text-teal-700 border border-teal-100 rounded-full text-[11.5px] font-medium px-3 py-[4px]">
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* ZONE 6 — CTA BUTTON */}
        <motion.div initial="rest" whileHover="hover" className="w-full mt-auto">
          <Link 
            href={ctaHref}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white rounded-xl py-3 font-semibold text-[14px] tracking-wide flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-teal-200/60 transition-all duration-300"
          >
            Book a Consultation
            <motion.span
              variants={{
                rest: { x: 0 },
                hover: { x: 5 }
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <ArrowRight size={18} strokeWidth={2.5} />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
