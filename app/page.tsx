'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { SpecializationsSection } from '@/components/sections/SpecializationsSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { WhyChooseSection } from '@/components/sections/WhyChooseSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { AppointmentSection } from '@/components/sections/AppointmentSection';
import { BlogSection } from '@/components/sections/BlogSection';
import { LocationSection } from '@/components/sections/LocationSection';
import { useMagnetic } from '@/hooks/useMagnetic';

function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const { ref, onMouseMove, onMouseLeave } = useMagnetic<HTMLAnchorElement>(0.4);

  return (
    <div className="fixed bottom-6 right-6 z-50 hidden sm:block">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 bg-slate-800 text-white text-xs font-medium px-3 py-2 rounded-lg whitespace-nowrap shadow-lg"
          >
            Chat with Dr. Praharaj
            <div className="absolute -bottom-1 right-4 w-2 h-2 bg-slate-800 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
      <a
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseOut={() => setShowTooltip(false)}
        href="https://wa.me/919337512311?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20with%20Dr.%20Praharaj."
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-[60px] h-[60px] rounded-full bg-green-500 flex items-center justify-center text-white shadow-xl hover:shadow-2xl transition-shadow wa-pulse"
        data-cursor
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 relative z-10" />
      </a>
    </div>
  );
}

function MobileBottomBar() {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-100 flex h-[52px]">
      <a
        href="tel:+919337512311"
        className="flex-1 flex items-center justify-center gap-2 bg-teal-600 text-white font-semibold text-sm"
      >
        <Phone className="w-4 h-4" />
        Call Now
      </a>
      <a
        href="https://wa.me/919337512311?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20with%20Dr.%20Praharaj."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white font-semibold text-sm"
      >
        <MessageCircle className="w-4 h-4" />
        WhatsApp
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-0 w-full overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <SpecializationsSection />
        <ServicesSection />
        <StatsSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <AppointmentSection />
        <BlogSection />
        <LocationSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileBottomBar />
    </>
  );
}
