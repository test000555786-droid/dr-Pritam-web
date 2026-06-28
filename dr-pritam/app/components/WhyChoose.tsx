"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, BadgeCheck, Microscope, Heart, IndianRupee } from "lucide-react";

const tiles = [
  {
    icon: ShieldCheck,
    title: "Hospital-Grade Sterilisation",
    desc: "Every instrument is autoclaved and every surface sanitised between patients. We never cut corners on infection control.",
  },
  {
    icon: Zap,
    title: "Virtually Painless Treatment",
    desc: "Modern articaine anaesthesia, precise technique, and a calm chair-side manner make even complex procedures comfortable.",
  },
  {
    icon: BadgeCheck,
    title: "Officially Registered",
    desc: "Dr. Pritam holds Odisha Dental Council Registration No. 1477(A) — your assurance of qualified, accountable care.",
  },
  {
    icon: Microscope,
    title: "Modern Diagnostic Equipment",
    desc: "Digital X-rays, RVG sensors, and rotary endodontic systems ensure accurate diagnosis and efficient treatment.",
  },
  {
    icon: Heart,
    title: "Patient-First Approach",
    desc: "We listen before we treat. Consultations are unhurried, questions are welcomed, and consent is always informed.",
  },
  {
    icon: IndianRupee,
    title: "Transparent Pricing",
    desc: "Treatment costs are communicated upfront with no hidden charges. We also offer flexible payment scheduling.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-semibold tracking-widest uppercase mb-3">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            The Choudhury Clinic <span className="text-teal-600">Difference</span>
          </h2>
          <p className="mt-3 text-slate-500 max-w-xl mx-auto">
            Six commitments we make to every patient who walks through our doors.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiles.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-teal-200 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-50 group-hover:bg-teal-600 flex items-center justify-center mb-4 transition-colors">
                  <Icon size={20} className="text-teal-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-base font-bold text-slate-800 mb-2">{t.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{t.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
