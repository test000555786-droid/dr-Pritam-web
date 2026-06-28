'use client';

import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { useMagnetic } from '@/hooks/useMagnetic';

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Specializations', href: '#specializations' },
  { label: 'Services', href: '#services' },
  { label: 'Book Appointment', href: '#appointment' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
];

function SocialIcon({ icon: Icon, href, label }: { icon: typeof Facebook; href: string; label: string }) {
  const { ref, onMouseMove, onMouseLeave } = useMagnetic<HTMLAnchorElement>(0.3);

  return (
    <a
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-full bg-slate-800 hover:bg-teal-600 flex items-center justify-center text-white transition-colors duration-300"
      data-cursor
    >
      <Icon className="w-4 h-4" />
    </a>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {/* Column 1: Brand */}
            <div>
              <div className="mb-4">
                <span className="text-teal-400 font-bold text-xl">Dr. Pritam</span>
                <p className="text-slate-400 text-sm mt-1">Implantologist & RCT Specialist</p>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Choudhury Dental & Skin Care Clinic, Salipur, Odisha. Providing advanced, pain-free dental care with 15+ years of clinical excellence. Your smile is our mission.
              </p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <SocialIcon key={s.label} icon={s.icon} href={s.href} label={s.label} />
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-slate-400 text-sm hover:text-white transition-colors"
                      style={{
                        backgroundImage: 'linear-gradient(white, white)',
                        backgroundSize: '0% 1px',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'left bottom',
                        paddingBottom: '2px',
                        transition: 'background-size 0.4s cubic-bezier(0.76, 0, 0.24, 1), color 0.3s',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundSize = '100% 1px';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundSize = '0% 1px';
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h3 className="font-semibold text-white mb-4">Contact</h3>
              <div className="space-y-3 text-sm text-slate-400">
                <p>Choudhury Dental & Skin Care Clinic</p>
                <p>Main Road, Salipur, Cuttack, Odisha — 754202</p>
                <p>Phone: +91 XXXXX XXXXX</p>
                <p>Email: contact@drpritampraharaj.com</p>
                <p className="pt-2">
                  <span className="text-teal-400">Mon — Sat:</span> 9:00 AM — 8:00 PM<br />
                  <span className="text-teal-400">Sunday:</span> 10:00 AM — 2:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>

      {/* Bottom bar */}
      <div className="border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Dr. Ch. Pritam Pratik Praharaj. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs">
            BDS (Utkal) · Regd. No. 1477(A) · IDA Member
          </p>
        </div>
      </div>
    </footer>
  );
}
