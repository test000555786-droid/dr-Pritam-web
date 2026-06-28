'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useSpring } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { 
  Zap, 
  FlaskConical, 
  Crown, 
  Sparkles, 
  Circle, 
  Layers, 
  Leaf, 
  Wrench, 
  Droplets, 
  Baby,
  ArrowUpRight,
  ArrowRight,
  MoreHorizontal
} from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    id: "01", name: "Dental Implants", category: "Restorative",
    slug: "dental-implants", satisfaction: 95,
    description: "Permanent titanium roots that look, feel, and function like natural teeth. Single to full-arch solutions.",
    icon: Zap, image: "/images/services/dental_implants.png"
  },
  {
    id: "02", name: "Root Canal Treatment", category: "Endodontic",
    slug: "root-canal", satisfaction: 88,
    description: "Pain-free RCT using advanced rotary endodontics and digital apex locators. Save your natural tooth.",
    icon: FlaskConical, image: "/images/services/root_canal.png"
  },
  {
    id: "03", name: "Crowns & Bridges", category: "Restorative",
    slug: "crowns-bridges", satisfaction: 80,
    description: "Custom-crafted ceramic and zirconia crowns that restore strength and beauty to damaged teeth.",
    icon: Crown, image: "/images/services/crowns_bridges.png"
  },
  {
    id: "04", name: "Smile Makeover", category: "Cosmetic",
    slug: "smile-makeover", satisfaction: 75,
    description: "Complete smile transformation combining veneers, whitening, contouring, and alignment corrections.",
    icon: Sparkles, image: "/images/services/smile_makeover.png"
  },
  {
    id: "05", name: "Teeth Whitening", category: "Cosmetic",
    slug: "teeth-whitening", satisfaction: 60,
    description: "Professional in-office whitening that delivers up to 8 shades lighter in a single session.",
    icon: Circle, image: "/images/services/teeth_whitening.png"
  },
  {
    id: "06", name: "Dental Fillings", category: "Restorative",
    slug: "dental-fillings", satisfaction: 70,
    description: "Tooth-coloured composite fillings that blend seamlessly. Mercury-free, durable, aesthetically pleasing.",
    icon: Layers, image: "/images/services/dental_fillings.png"
  },
  {
    id: "07", name: "Gum Treatment", category: "Periodontal",
    slug: "gum-treatment", satisfaction: 65,
    description: "Comprehensive periodontal care including scaling, root planing, and gum surgery for gingivitis.",
    icon: Leaf, image: "/images/services/gum_treatment.png"
  },
  {
    id: "08", name: "Tooth Extraction", category: "Oral Surgery",
    slug: "tooth-extraction", satisfaction: 85,
    description: "Gentle and atraumatic extraction of impacted, damaged, or problematic teeth with rapid healing.",
    icon: Wrench, image: "/images/services/tooth_extraction.png"
  },
  {
    id: "09", name: "Dental Cleaning", category: "Preventive",
    slug: "dental-cleaning", satisfaction: 90,
    description: "Professional ultrasonic scaling and polishing. Essential for preventing gum disease and cavities.",
    icon: Droplets, image: "/images/services/dental_cleaning.png"
  },
  {
    id: "10", name: "Pediatric Dentistry", category: "Preventive",
    slug: "pediatric-dentistry", satisfaction: 78,
    description: "Child-friendly dental care including preventive treatments, fluoride application, and habit counselling.",
    icon: Baby, image: "/images/services/pediatric_dentistry.png"
  },
];

export function ServicesSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  
  // Framer Motion spring for smooth vertical follow
  const springConfig = { stiffness: 200, damping: 30 };
  const targetY = useSpring(0, springConfig);

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    setHoveredId(id);
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const rowRect = e.currentTarget.getBoundingClientRect();
    
    // Calculate center of row relative to container
    const relativeY = (rowRect.top - containerRect.top) + (rowRect.height / 2);
    // Rough estimate of half card height is 230 to keep it centered (since height is dynamic)
    targetY.set(relativeY - 230);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  const activeService = services.find(s => s.id === hoveredId);
  const ActiveIcon = activeService?.icon;

  return (
    <section id="services" className="py-24 bg-[#EDECEA] text-neutral-900 w-full overflow-x-hidden overflow-y-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-[#0D9488] text-sm font-bold tracking-widest uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Comprehensive Dental Care Under One Roof
          </h2>
          <p className="text-neutral-500 text-lg">
            Experience world-class dentistry with state-of-the-art technology and a patient-first approach.
          </p>
        </div>

        {/* Interactive List Container */}
        <div 
          ref={containerRef}
          className="relative border-t border-neutral-300/60"
          onMouseLeave={handleMouseLeave}
        >
          {services.map((service) => (
            <div key={service.id} className="border-b border-neutral-300/60">
              <motion.a
                href={`#service-${service.id}`}
                onMouseEnter={(e) => handleMouseEnter(e, service.id)}
                className="flex items-center justify-between h-[72px] md:h-[88px] px-5 md:px-12 group relative cursor-pointer rounded-2xl w-full overflow-hidden"
                whileHover={{ backgroundColor: '#0D9488' }}
                transition={{ duration: 0.18 }}
              >
                {/* Left Side */}
                <div className="flex items-center gap-6 md:gap-12 pointer-events-none">
                  <span className="text-[11px] font-semibold text-neutral-400 transition-colors duration-200 group-hover:text-white/50">
                    {service.id}
                  </span>
                  <span className="text-[18px] md:text-[28px] font-extrabold tracking-tight text-neutral-900 transition-colors duration-200 group-hover:text-white">
                    {service.name}
                  </span>
                </div>

                {/* Right Side */}
                <div className="hidden sm:flex flex-col items-end gap-0.5 pointer-events-none">
                  <span className="text-[11px] tracking-widest uppercase text-neutral-400 transition-colors duration-200 group-hover:text-white/70">
                    {service.category}
                  </span>
                  <span className="text-[11px] tracking-widest uppercase font-bold text-neutral-700 transition-colors duration-200 group-hover:text-white">
                    Dr. Praharaj
                  </span>
                </div>
              </motion.a>
            </div>
          ))}

          {/* Floating Preview Card (Desktop Only) */}
          <div className="hidden md:block absolute right-[5%] lg:right-[10%] top-0 pointer-events-none z-10 w-[300px]">
            <AnimatePresence>
              {hoveredId && activeService && ActiveIcon && (
                <motion.div
                  className="absolute w-[300px] rounded-[28px] overflow-hidden bg-[#0D9488] pointer-events-auto"
                  style={{ 
                    y: targetY, 
                    top: 0,
                    boxShadow: "0 24px 64px rgba(13,148,136,0.30), 0 4px 16px rgba(0,0,0,0.14)"
                  }}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Layer 1 — Image Zone */}
                  <div className="relative h-[200px] w-full overflow-hidden">
                    {activeService.image ? (
                      <motion.img
                        key={activeService.name}
                        src={activeService.image}
                        alt={activeService.name}
                        className="w-full h-full object-cover"
                        initial={{ opacity: 0, scale: 1.06 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-[#0a7a70]">
                        <ActiveIcon size={56} strokeWidth={1.2} className="text-white/30" />
                      </div>
                    )}
                    
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0D9488] to-transparent pointer-events-none" />

                    <span className="absolute top-3.5 left-3.5 z-10 px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.14em] uppercase bg-black/28 backdrop-blur-md border border-white/18 text-white/90">
                      {activeService.category}
                    </span>

                    <button 
                      onClick={() => router.push(`/services#${activeService.slug}`)}
                      className="absolute top-3.5 right-3.5 z-10 w-8 h-8 rounded-full flex items-center justify-center bg-white/15 border border-white/25 text-white hover:bg-white/25 transition-colors"
                    >
                      <ArrowUpRight size={14} strokeWidth={2.5} />
                    </button>
                  </div>

                  {/* Layer 2 — Body */}
                  <div className="px-[22px] pb-[22px] pt-[18px]">
                    <h3 className="text-[22px] font-extrabold text-white tracking-[-0.025em] leading-[1.1]">
                      {activeService.name}
                    </h3>
                    <p className="text-[12px] text-white/60 leading-[1.55] mt-1.5 line-clamp-2">
                      {activeService.description}
                    </p>



                    {/* CTA Row */}
                    <div className="mt-4 flex gap-2">
                      <button 
                        onClick={() => router.push('/appointment')}
                        className="flex-1 h-[38px] rounded-full bg-white text-[#0D9488] text-[12px] font-bold tracking-[0.02em] flex items-center justify-center gap-1.5 hover:bg-white/90 transition-colors active:scale-[0.98]"
                      >
                        Book Consultation
                        <ArrowRight size={12} strokeWidth={2.5} />
                      </button>
                      
                      <button 
                        onClick={() => router.push(`/services/${activeService.slug}`)}
                        className="w-[38px] h-[38px] rounded-full flex-none bg-white/12 border border-white/25 flex items-center justify-center text-white/80 hover:bg-white/20 transition-colors"
                      >
                        <MoreHorizontal size={16} strokeWidth={2} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Section Footer */}
        <div className="mt-12 flex items-center justify-between pt-6">
          <span className="text-sm font-medium text-neutral-500">
            {services.length} Specialized Treatments
          </span>
          <Link href="#appointment" className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-[#0D9488] rounded-full hover:bg-teal-700 transition-colors">
            Book a Consultation &rarr;
          </Link>
        </div>

      </div>
    </section>
  );
}
