'use client';

import { useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer';
import { SlideButton } from '@/components/ui/SlideButton';
import { useTextScramble } from '@/hooks/useTextScramble';

const hours = [
  { day: 'Monday', time: '9:00 AM — 8:00 PM' },
  { day: 'Tuesday', time: '9:00 AM — 8:00 PM' },
  { day: 'Wednesday', time: '9:00 AM — 8:00 PM' },
  { day: 'Thursday', time: '9:00 AM — 8:00 PM' },
  { day: 'Friday', time: '9:00 AM — 8:00 PM' },
  { day: 'Saturday', time: '9:00 AM — 8:00 PM' },
  { day: 'Sunday', time: '10:00 AM — 2:00 PM' },
];

export function LocationSection() {
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const scramble = useTextScramble(eyebrowRef, 'VISIT US');

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="text-center mb-14">
          <span
            ref={eyebrowRef}
            onMouseEnter={scramble}
            className="inline-block uppercase text-teal-600 tracking-widest text-[11px] font-semibold mb-4 cursor-default"
          >
            VISIT US
          </span>
          <h2 className="text-3xl lg:text-[44px] font-bold text-slate-900 leading-tight">
            Find Our Clinic
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto leading-relaxed">
            Choudhury Dental & Skin Care Clinic is conveniently located in the heart of Salipur, easily accessible from Cuttack, Jajpur, and surrounding areas.
          </p>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-[55%_45%] gap-8 lg:gap-12">
          {/* Map */}
          <RevealOnScroll direction="left">
            <div className="rounded-3xl overflow-hidden shadow-lg h-[400px] lg:h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.0!2d86.35!3d20.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDMzJzAwLjAiTiA4NsKwMjEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Choudhury Dental & Skin Care Clinic Location"
                className="rounded-3xl"
              />
            </div>
          </RevealOnScroll>

          {/* Info */}
          <RevealOnScroll direction="right" delay={0.2}>
            <div className="space-y-6">
              <StaggerContainer className="space-y-6">
                {/* Address card */}
                <StaggerItem>
                  <div className="bg-white border border-slate-200 rounded-2xl p-5">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">Clinic Address</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">
                          Choudhury Dental & Skin Care Clinic<br />
                          Main Road, Salipur, Cuttack District<br />
                          Odisha, India — 754202
                        </p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>

                {/* Hours table */}
                <StaggerItem>
                  <div className="bg-white border border-slate-200 rounded-2xl p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5 text-teal-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">Clinic Hours</h3>
                    </div>
                    <div className="space-y-2">
                      {hours.map((h, idx) => (
                        <div
                          key={idx}
                          className={`flex justify-between text-sm py-2 px-3 rounded-lg ${idx % 2 === 0 ? 'bg-teal-50' : ''}`}
                        >
                          <span className="text-slate-700 font-medium">{h.day}</span>
                          <span className="text-slate-600">{h.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </StaggerItem>

                {/* Quick contact buttons */}
                <StaggerItem>
                  <div className="grid grid-cols-3 gap-3">
                    <SlideButton href="tel:+919999999999" variant="outline" className="w-full justify-center px-4">
                      <Phone className="w-4 h-4" />
                    </SlideButton>
                    <SlideButton href="mailto:contact@drpritampraharaj.com" variant="outline" className="w-full justify-center px-4">
                      <Mail className="w-4 h-4" />
                    </SlideButton>
                    <SlideButton href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" variant="outline" className="w-full justify-center px-4">
                      💬
                    </SlideButton>
                  </div>
                </StaggerItem>

                {/* Directions button */}
                <StaggerItem>
                  <SlideButton
                    href="https://www.google.com/maps/dir//Salipur,+Odisha+754202"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    className="w-full justify-center"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </SlideButton>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
