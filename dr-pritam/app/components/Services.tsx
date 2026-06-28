"use client";
import { motion } from "framer-motion";
import {
  Drill, Zap, Crown, Sparkles, Scissors, Wind,
  Smile, AlignCenter, Baby, Stethoscope,
} from "lucide-react";

const services = [
  {
    icon: Drill,
    title: "Dental Implants",
    desc: "Permanent, titanium-rooted replacements that look and function exactly like natural teeth.",
    tag: "Speciality",
  },
  {
    icon: Zap,
    title: "Root Canal Treatment",
    desc: "Single or multi-visit RCT using rotary endodontics — comfortable, efficient, and infection-free.",
    tag: "Speciality",
  },
  {
    icon: Crown,
    title: "Crowns & Bridges",
    desc: "Durable ceramic and zirconia crowns to restore damaged teeth or bridge gaps after extraction.",
    tag: "Restorative",
  },
  {
    icon: Sparkles,
    title: "Teeth Whitening",
    desc: "In-office professional whitening that safely lifts stains for a noticeably brighter smile.",
    tag: "Cosmetic",
  },
  {
    icon: Scissors,
    title: "Tooth Extraction",
    desc: "Painless simple and surgical extractions, including impacted wisdom teeth, under local anaesthesia.",
    tag: "Surgical",
  },
  {
    icon: Wind,
    title: "Scaling & Polishing",
    desc: "Professional plaque and tartar removal to prevent gum disease and maintain oral hygiene.",
    tag: "Preventive",
  },
  {
    icon: Smile,
    title: "Dentures",
    desc: "Full and partial removable dentures custom-fabricated for comfort, fit, and natural appearance.",
    tag: "Prosthetic",
  },
  {
    icon: AlignCenter,
    title: "Orthodontic Consult",
    desc: "Assessment and consultation for braces and clear aligners to correct misalignment and bite issues.",
    tag: "Orthodontic",
  },
  {
    icon: Baby,
    title: "Paediatric Dentistry",
    desc: "Child-friendly dental check-ups, fluoride treatments, and milk-tooth care in a relaxed setting.",
    tag: "Paediatric",
  },
  {
    icon: Stethoscope,
    title: "Comprehensive Check-up",
    desc: "Full oral health examination with digital X-rays, gum assessment, and personalised care plan.",
    tag: "Preventive",
  },
];

const tagColors: Record<string, string> = {
  Speciality: "bg-teal-100 text-teal-700",
  Restorative: "bg-blue-100 text-blue-700",
  Cosmetic: "bg-purple-100 text-purple-700",
  Surgical: "bg-orange-100 text-orange-700",
  Preventive: "bg-green-100 text-green-700",
  Prosthetic: "bg-amber-100 text-amber-700",
  Orthodontic: "bg-pink-100 text-pink-700",
  Paediatric: "bg-sky-100 text-sky-700",
};

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-semibold tracking-widest uppercase mb-3">
            All Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Everything Your Smile <span className="text-teal-600">Needs, Under One Roof</span>
          </h2>
          <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
            From routine check-ups to complex implant surgery, Choudhury Dental &amp; Skin Care Clinic
            is equipped to provide complete dental care for the whole family.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 5) * 0.08 }}
                className="group bg-slate-50 hover:bg-teal-600 border border-slate-100 rounded-2xl p-5 flex flex-col gap-3 transition-all duration-300 hover:shadow-xl hover:shadow-teal-200 hover:-translate-y-1 cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-white group-hover:bg-teal-500 flex items-center justify-center shadow-sm transition-colors">
                  <Icon size={18} className="text-teal-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold mb-1.5 ${tagColors[s.tag]} group-hover:bg-white/20 group-hover:text-white transition-colors`}>
                    {s.tag}
                  </span>
                  <h3 className="text-sm font-bold text-slate-800 group-hover:text-white transition-colors leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-500 group-hover:text-teal-100 transition-colors mt-1 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <button
            onClick={() => document.querySelector("#appointment")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 rounded-full bg-teal-600 text-white font-bold hover:bg-teal-700 transition-colors shadow-lg shadow-teal-200"
          >
            Book Any Service →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
