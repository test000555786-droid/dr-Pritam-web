"use client";
import { Stethoscope, MapPin, Mail, Clock, Globe, Share2, MessageCircle } from "lucide-react";

const quickLinks = [
  { label: "About Dr. Pritam", href: "#about" },
  { label: "Specialisations", href: "#specializations" },
  { label: "All Services", href: "#services" },
  { label: "Book Appointment", href: "#appointment" },
  { label: "Patient Blog", href: "#blog" },
  { label: "Location & Contact", href: "#contact" },
];

const services = [
  "Dental Implants",
  "Root Canal Treatment",
  "Crowns & Bridges",
  "Teeth Whitening",
  "Scaling & Polishing",
  "Paediatric Dentistry",
];

export default function Footer() {
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-teal-600 flex items-center justify-center">
                <Stethoscope size={18} className="text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-none">Dr. Pritam</p>
                <p className="text-teal-400 text-xs">Choudhury Dental Clinic</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Expert dental care in Salipur, Odisha — delivering implant surgery, root canal treatment,
              and comprehensive oral healthcare with integrity and compassion since 2009.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-teal-600 flex items-center justify-center transition-colors"
              >
                <Globe size={14} className="text-slate-300" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-teal-600 flex items-center justify-center transition-colors"
              >
                <Share2 size={14} className="text-slate-300" />
              </a>
              <a
                href="#"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-teal-600 flex items-center justify-center transition-colors"
              >
                <MessageCircle size={14} className="text-slate-300" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => handleNav(l.href)}
                    className="text-slate-400 hover:text-teal-400 text-sm transition-colors text-left"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => handleNav("#services")}
                    className="text-slate-400 hover:text-teal-400 text-sm transition-colors text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-teal-400 flex-shrink-0 mt-0.5" />
                <p className="text-slate-400 text-sm leading-relaxed">
                  Kendrapada – Cuttack Rd,<br />Salipur, Odisha 754202
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-teal-400 flex-shrink-0" />
                <a href="mailto:info@choudhuryclinic.com" className="text-slate-400 hover:text-teal-400 text-sm transition-colors">
                  info@choudhuryclinic.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={14} className="text-teal-400 flex-shrink-0 mt-0.5" />
                <div className="text-slate-400 text-sm">
                  <p>Mon – Sat: 9 AM – 8 PM</p>
                  <p>Sunday: 10 AM – 2 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Choudhury Dental &amp; Skin Care Clinic. All rights reserved.
            Dr. Ch. Pritam Pratik Praharaj · BDS (Utkal) · Regd. No. 1477(A)
          </p>
          <p className="text-slate-600 text-xs">
            Salipur, Kendrapada District, Odisha 754202
          </p>
        </div>
      </div>
    </footer>
  );
}
