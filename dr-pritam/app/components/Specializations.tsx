"use client";
import { motion } from "framer-motion";
import { Drill, Zap, CheckCircle2 } from "lucide-react";

const specs = [
  {
    icon: Drill,
    title: "Dental Implant Surgery",
    tag: "Permanent Tooth Replacement",
    color: "from-teal-600 to-teal-800",
    lightBg: "bg-teal-50",
    accent: "text-teal-600",
    badge: "bg-teal-100 text-teal-700",
    what: "A dental implant is a small titanium post surgically placed into the jawbone to act as an artificial tooth root. Once integrated, a crown is fixed on top — giving you a tooth that looks, feels, and functions like a natural one.",
    benefits: [
      "Preserves jawbone and prevents bone loss",
      "Restores full biting and chewing strength",
      "No impact on adjacent healthy teeth",
      "Designed to last a lifetime with proper care",
      "Natural appearance — indistinguishable from real teeth",
    ],
    services: [
      "Single-tooth implants",
      "Multiple-tooth implants",
      "Implant-supported dentures",
      "All-on-4 / All-on-6 concepts",
      "Bone grafting for implant readiness",
      "Post-surgical care & follow-up",
    ],
  },
  {
    icon: Zap,
    title: "Root Canal Treatment",
    tag: "Infection-Free, Pain-Free",
    color: "from-slate-700 to-slate-900",
    lightBg: "bg-slate-50",
    accent: "text-slate-700",
    badge: "bg-slate-100 text-slate-700",
    what: "Root Canal Treatment (RCT) saves a severely infected or damaged tooth by removing the infected pulp, cleaning the root canals, and sealing the tooth. Modern RCT with proper anaesthesia is no more uncomfortable than a routine filling.",
    benefits: [
      "Eliminates severe toothache almost immediately",
      "Saves your natural tooth from extraction",
      "Stops the spread of infection to adjacent teeth",
      "Completed in 1–2 sittings in most cases",
      "Restored tooth can last many years",
    ],
    services: [
      "Single-visit RCT (rotary endodontics)",
      "Multi-visit RCT for complex cases",
      "Re-treatment of failed root canals",
      "Post & core build-up",
      "Crown placement post-RCT",
      "Paediatric pulp therapy",
    ],
  },
];

export default function Specializations() {
  return (
    <section id="specializations" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-semibold tracking-widest uppercase mb-3">
            Core Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Dual Specialisation for <span className="text-teal-600">Complete Dental Health</span>
          </h2>
          <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
            Dr. Pritam&apos;s advanced training covers the two most impactful areas of restorative dentistry —
            giving patients the full spectrum of tooth-saving and tooth-replacing care under one roof.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {specs.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-slate-100 border border-slate-100 flex flex-col"
              >
                {/* Header */}
                <div className={`bg-gradient-to-br ${s.color} p-6 sm:p-8 text-white`}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                      <Icon size={22} className="text-white" />
                    </div>
                    <div>
                      <span className="text-white/60 text-xs font-semibold tracking-widest uppercase">{s.tag}</span>
                      <h3 className="text-2xl font-extrabold mt-0.5 leading-tight">{s.title}</h3>
                    </div>
                  </div>
                  <p className="mt-4 text-white/80 text-sm leading-relaxed">{s.what}</p>
                </div>

                {/* Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col gap-6">
                  {/* Benefits */}
                  <div>
                    <p className={`text-xs font-bold tracking-widest uppercase mb-3 ${s.accent}`}>
                      Why it matters
                    </p>
                    <ul className="space-y-2">
                      {s.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2.5">
                          <CheckCircle2 size={15} className={`${s.accent} flex-shrink-0 mt-0.5`} />
                          <span className="text-slate-600 text-sm">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Services list */}
                  <div className={`${s.lightBg} rounded-xl p-4`}>
                    <p className={`text-xs font-bold tracking-widest uppercase mb-3 ${s.accent}`}>
                      What we offer
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {s.services.map((sv) => (
                        <span key={sv} className={`px-2.5 py-1 rounded-full text-xs font-medium ${s.badge}`}>
                          {sv}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => document.querySelector("#appointment")?.scrollIntoView({ behavior: "smooth" })}
                    className={`mt-auto w-full py-3 rounded-full font-bold text-sm transition-all bg-gradient-to-r ${s.color} text-white hover:opacity-90 shadow-md`}
                  >
                    Book a {s.title} Consultation →
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
