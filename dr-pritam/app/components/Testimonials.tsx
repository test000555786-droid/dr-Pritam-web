"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sunita Mohanty",
    location: "Salipur",
    procedure: "Dental Implant",
    review:
      "I lost a front tooth in an accident and was devastated. Dr. Pritam explained the implant procedure step by step, and the result is absolutely natural-looking. Nobody can tell the difference. I am so grateful for his skill and patience.",
  },
  {
    name: "Rajesh Kumar Panda",
    location: "Kendrapada",
    procedure: "Root Canal Treatment",
    review:
      "I was terrified of root canal treatment after hearing horror stories. Dr. Pritam made the entire procedure completely pain-free. I did not even feel the injection properly. Within two days my toothache was completely gone. Highly recommend.",
  },
  {
    name: "Priya Das",
    location: "Cuttack",
    procedure: "Teeth Whitening",
    review:
      "The in-office whitening gave me results I never expected. My teeth are several shades brighter and the clinic was very professional throughout. The staff is friendly and the clinic is spotlessly clean. Will definitely return.",
  },
  {
    name: "Biswajit Jena",
    location: "Salipur",
    procedure: "Dental Crown",
    review:
      "My cracked molar was causing me pain for months. Dr. Pritam fitted a zirconia crown and the fit is perfect — no sensitivity, no discomfort. The consultation was thorough and he explained every option before proceeding. Excellent doctor.",
  },
  {
    name: "Mamata Sahoo",
    location: "Jagatsinghpur",
    procedure: "Full Check-up & Scaling",
    review:
      "I bring my entire family here for their dental check-ups. The doctor is wonderful with children — my son was nervous but Dr. Pritam made him laugh and completely forgot about his fear. The pricing is fair and transparent.",
  },
  {
    name: "Soumya Ranjan Nayak",
    location: "Bhubaneswar",
    procedure: "Wisdom Tooth Extraction",
    review:
      "I was referred to Dr. Pritam for a complicated wisdom tooth extraction. The procedure was swift, professional, and virtually pain-free. Post-operative care instructions were clear and recovery was smooth. Could not have asked for better.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  const t = testimonials[current];

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-semibold tracking-widest uppercase mb-3">
            Patient Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            What Our Patients <span className="text-teal-600">Say</span>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Main card */}
          <div className="relative h-auto min-h-56 overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction * 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -80 }}
                transition={{ duration: 0.4 }}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-6 sm:p-8 md:p-10"
              >
                <Quote size={36} className="text-teal-200 mb-4" />
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6 italic">
                  &ldquo;{t.review}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-sm">{t.name}</p>
                    <p className="text-slate-400 text-xs">{t.location} · {t.procedure}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? "w-6 bg-teal-600" : "w-2 bg-slate-300"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center hover:bg-teal-50 hover:border-teal-300 transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft size={16} className="text-slate-600" />
              </button>
              <button
                onClick={next}
                className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center hover:bg-teal-50 hover:border-teal-300 transition-colors"
                aria-label="Next"
              >
                <ChevronRight size={16} className="text-slate-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
