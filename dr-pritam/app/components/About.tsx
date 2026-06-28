"use client";
import { motion } from "framer-motion";
import { GraduationCap, BadgeCheck, Heart, Microscope, Award, Users } from "lucide-react";

const credentials = [
  { icon: GraduationCap, label: "BDS – Utkal University", sub: "Bachelor of Dental Surgery" },
  { icon: BadgeCheck, label: "Regd. No. 1477(A)", sub: "Odisha Dental Council" },
  { icon: Award, label: "IDA Member", sub: "Indian Dental Association" },
  { icon: Microscope, label: "Certified Implantologist", sub: "Advanced Implant Training" },
];

const usps = [
  { icon: Heart, text: "Patient-first philosophy in every consultation" },
  { icon: Users, text: "5000+ successfully treated patients" },
  { icon: BadgeCheck, text: "Registered with Odisha Dental Council" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.55 } }),
};

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start"
        >
          {/* Left – Credentials card + USP badges */}
          <motion.div custom={0} variants={fadeUp}>
            {/* Credentials card */}
            <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-2xl p-6 sm:p-8 text-white mb-6 shadow-xl shadow-teal-200">
              <p className="text-teal-200 text-xs font-semibold tracking-widest uppercase mb-4">Qualifications &amp; Registrations</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {credentials.map((c) => {
                  const Icon = c.icon;
                  return (
                    <div key={c.label} className="flex items-start gap-3 bg-white/10 rounded-xl p-3">
                      <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                        <Icon size={15} className="text-teal-100" />
                      </div>
                      <div>
                        <p className="text-sm font-bold leading-tight">{c.label}</p>
                        <p className="text-teal-200 text-xs mt-0.5">{c.sub}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* USP badges */}
            <div className="space-y-3">
              {usps.map((u) => {
                const Icon = u.icon;
                return (
                  <div key={u.text} className="flex items-center gap-3 bg-teal-50 rounded-xl px-4 py-3">
                    <Icon size={16} className="text-teal-600 flex-shrink-0" />
                    <p className="text-slate-700 text-sm font-medium">{u.text}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right – Bio */}
          <motion.div custom={1} variants={fadeUp}>
            <span className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold tracking-widest uppercase mb-4">
              About the Doctor
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
              Dedicated to Giving You a <span className="text-teal-600">Healthier Smile</span>
            </h2>

            <p className="text-slate-600 leading-relaxed mb-4">
              Dr. Ch. Pritam Pratik Praharaj is a highly accomplished dental surgeon with over 15 years
              of clinical practice rooted in Salipur, Odisha. After earning his BDS from Utkal University —
              one of the most respected dental institutions in eastern India — he went on to pursue advanced
              training in implantology and endodontics, developing expertise that now benefits thousands
              of patients across Kendrapada and Cuttack districts.
            </p>

            <p className="text-slate-600 leading-relaxed mb-4">
              Registered with the Odisha Dental Council (Regd. No. 1477A) and a proud member of the
              Indian Dental Association, Dr. Pritam brings academic rigour and genuine compassion to every
              chair-side interaction. His dual specialisation in dental implant surgery and root canal
              treatment reflects a commitment to restoring not just function, but confidence — helping
              patients speak, eat, and smile without hesitation.
            </p>

            <p className="text-slate-600 leading-relaxed mb-8">
              At Choudhury Dental &amp; Skin Care Clinic on the Kendrapada–Cuttack Road, he has built a
              practice known for its scrupulous sterilisation protocols, transparent fee structure, and
              the kind of unhurried consultations that put even anxious patients at ease. He believes that
              preventive guidance today is far kinder to a patient than complex intervention tomorrow.
            </p>

            {/* Philosophy quote */}
            <blockquote className="border-l-4 border-teal-500 pl-5 bg-teal-50 rounded-r-xl py-4 pr-4">
              <p className="text-slate-700 font-semibold italic text-base leading-relaxed">
                &ldquo;Every patient deserves dignity, clear information, and pain-free treatment.
                That is not a luxury — it is the standard of care I hold myself to every single day.&rdquo;
              </p>
              <footer className="mt-2 text-teal-700 text-sm font-bold">— Dr. Pritam Praharaj</footer>
            </blockquote>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
