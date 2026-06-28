"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Users, Award, ChevronDown, Shield, Zap } from "lucide-react";

const subtitles = [
  "Certified Implantologist",
  "Root Canal Specialist",
  "Your Smile, Our Mission",
];

const badges = [
  { icon: Shield, label: "IDA Registered", sub: "Regd. No. 1477(A)", color: "bg-white/95" },
  { icon: Zap, label: "Painless Treatment", sub: "Modern anaesthesia", color: "bg-teal-600/90" },
  { icon: Award, label: "15+ Years", sub: "Clinical experience", color: "bg-white/95" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % subtitles.length), 2800);
    return () => clearInterval(t);
  }, []);

  const scrollDown = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Teal glow blobs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-500 rounded-full opacity-10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/6 w-64 h-64 bg-teal-400 rounded-full opacity-10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left — text content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-teal-500/20 border border-teal-500/40 text-teal-300 text-xs font-semibold tracking-widest uppercase mb-6">
              Choudhury Dental &amp; Skin Care Clinic · Salipur, Odisha
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              <span className="text-white">Dr. Ch. Pritam</span>
              <br />
              <span className="text-teal-400">Pratik Praharaj</span>
            </h1>

            {/* Animated subtitle */}
            <div className="h-10 flex items-center justify-center lg:justify-start mb-6">
              <AnimatePresence mode="wait">
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4 }}
                  className="text-xl sm:text-2xl text-slate-300 font-medium"
                >
                  {subtitles[index]}
                </motion.p>
              </AnimatePresence>
            </div>

            <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              BDS (Utkal University) · Regd. No. 1477(A) · IDA Member. Bringing world-class
              dental care to Salipur with gentle, evidence-based treatment for every patient.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
              <button
                onClick={() => document.querySelector("#appointment")?.scrollIntoView({ behavior: "smooth" })}
                className="px-7 py-3.5 rounded-full bg-teal-500 text-white font-bold text-base hover:bg-teal-400 transition-all shadow-xl shadow-teal-900/50 hover:shadow-teal-700/40 hover:-translate-y-0.5"
              >
                Book Free Consultation
              </button>
              <a
                href="https://wa.me/91XXXXXXXXXX?text=Hello%20Dr.%20Pritam%2C%20I%20would%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full border border-white/20 text-white font-semibold text-base hover:bg-white/10 transition-all"
              >
                WhatsApp Us
              </a>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <Star size={16} className="text-amber-400 fill-amber-400" />
                <span className="text-white font-bold text-sm">4.9</span>
                <span className="text-slate-400 text-sm">Rating</span>
              </div>
              <div className="w-px h-4 bg-slate-600 hidden sm:block self-center" />
              <div className="flex items-center gap-2">
                <Users size={16} className="text-teal-400" />
                <span className="text-white font-bold text-sm">5000+</span>
                <span className="text-slate-400 text-sm">Patients</span>
              </div>
              <div className="w-px h-4 bg-slate-600 hidden sm:block self-center" />
              <div className="flex items-center gap-2">
                <Award size={16} className="text-teal-400" />
                <span className="text-white font-bold text-sm">15+</span>
                <span className="text-slate-400 text-sm">Years Experience</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right — floating badges */}
        <div className="flex-shrink-0 relative w-72 sm:w-80 h-80 sm:h-96">
          {/* Centre circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-52 h-52 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center shadow-2xl shadow-teal-900/60">
              <div className="text-center">
                <p className="text-white font-extrabold text-4xl leading-none">15+</p>
                <p className="text-teal-100 text-sm font-medium mt-1">Years of Care</p>
              </div>
            </div>
          </motion.div>

          {/* Orbiting badge cards */}
          {badges.map((b, i) => {
            const angle = (i / badges.length) * 360 - 90;
            const rad = (angle * Math.PI) / 180;
            const r = 148;
            const x = 50 + (r / 160) * 50 * Math.cos(rad);
            const y = 50 + (r / 160) * 50 * Math.sin(rad);
            const Icon = b.icon;
            return (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
                className={`absolute px-3 py-2 rounded-xl shadow-xl backdrop-blur-sm ${b.color} ${
                  b.color.includes("teal-600") ? "text-white" : "text-slate-800"
                }`}
              >
                <div className="flex items-center gap-2 min-w-max">
                  <Icon size={14} className={b.color.includes("teal-600") ? "text-teal-100" : "text-teal-600"} />
                  <div>
                    <p className="text-xs font-bold leading-none">{b.label}</p>
                    <p className={`text-[10px] leading-tight mt-0.5 ${b.color.includes("teal-600") ? "text-teal-200" : "text-slate-500"}`}>
                      {b.sub}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollDown}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-teal-400 hover:text-teal-300 transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  );
}
