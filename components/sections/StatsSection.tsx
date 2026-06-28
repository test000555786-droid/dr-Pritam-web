'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView, useMotionValue, animate } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

function CountUp({ to, duration = 1.4, className }: { to: number; duration?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const val = useMotionValue(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(val, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(v) {
        if (ref.current)
          ref.current.textContent = Math.round(v).toLocaleString();
      },
    });
    return controls.stop;
  }, [inView, to, duration, val]);

  return <span ref={ref} className={className}>0</span>;
}

function CellA() {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 28 },
        show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
      }}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="sm:col-span-2 lg:col-span-1 lg:row-span-2 rounded-[20px] overflow-hidden bg-[#111] p-10 flex flex-col justify-between min-h-[240px] md:min-h-[360px] relative"
    >
      <div>
        <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-white/30 mb-3">
          01 — Experience
        </p>
        <div className="flex items-start leading-none">
          <CountUp to={15} className="text-[72px] md:text-[72px] lg:text-[96px] font-black tracking-[-0.05em] text-white leading-none" />
          <span className="mt-2 text-[40px] md:text-[52px] lg:text-[54px] font-black text-[#0D9488] leading-none tracking-[-0.03em]">
            +
          </span>
        </div>
      </div>

      {/* ANIMATED RING */}
      <svg className="absolute w-48 h-48 -top-10 -right-10 pointer-events-none" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(13,148,136,0.12)" strokeWidth="1" />
        <motion.circle
          cx="100" cy="100" r="90" fill="none" stroke="#0D9488" strokeWidth="2" strokeLinecap="round"
          strokeDasharray="565"
          initial={{ strokeDashoffset: 565 }}
          whileInView={{ strokeDashoffset: 56 }}
          transition={{ duration: 1.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          transform="rotate(-90 100 100)"
        />
      </svg>

      <div className="mt-auto relative z-10">
        <p className="text-[10px] font-bold tracking-[0.16em] uppercase text-white/35 mb-1.5">
          Years of Practice
        </p>
        <p className="text-[12px] text-white/50 leading-[1.55]">
          Serving Salipur and Odisha since 2009 with precision dental care
        </p>
      </div>
    </motion.div>
  );
}

function CellB() {
  const dots = Array.from({ length: 40 }).map((_, i) => i < 38);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 28 },
        show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
      }}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="rounded-[20px] overflow-hidden bg-[#0D9488] p-7 flex flex-col gap-3 relative"
    >
      <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-white/40">
        02 — Patients
      </p>

      <div className="flex items-start leading-none relative z-10">
        <span className="text-[52px] md:text-[64px] font-black tracking-[-0.04em] text-white">5K</span>
        <span className="mt-1.5 text-[28px] md:text-[36px] font-black text-white/50">+</span>
      </div>

      {/* ANIMATED DOTS GRID */}
      <motion.div
        className="grid gap-[5px] absolute top-8 right-8 pointer-events-none"
        style={{ gridTemplateColumns: "repeat(8, 8px)" }}
        variants={{ show: { transition: { staggerChildren: 0.03 } } }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {dots.map((active, i) => (
          <motion.div
            key={i}
            className={`w-2 h-2 rounded-full ${active ? "bg-white/80" : "bg-white/15"}`}
            variants={{
              hidden: { scale: 0, opacity: 0 },
              show: { scale: 1, opacity: 1 }
            }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          />
        ))}
      </motion.div>

      <div className="mt-auto relative z-10">
        <p className="text-[10px] font-bold tracking-[0.16em] uppercase text-white/50 mb-1.5">
          Patients Treated
        </p>
        <p className="text-[12px] text-white/40 leading-[1.55]">
          Smiles restored and lives improved
        </p>
      </div>
    </motion.div>
  );
}

function CellC() {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 28 },
        show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
      }}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="rounded-[20px] overflow-hidden bg-white p-7 flex flex-col justify-between"
    >
      <div>
        <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-neutral-300 mb-3">
          03 — Satisfaction
        </p>
        <div className="flex items-start leading-none mb-1">
          <CountUp to={98} className="text-[52px] md:text-[64px] font-black tracking-[-0.04em] text-neutral-900" />
          <span className="mt-1.5 text-[28px] md:text-[36px] font-black text-[#0D9488]">%</span>
        </div>
        <p className="text-[10px] font-bold tracking-[0.16em] uppercase text-neutral-300">
          Patient Satisfaction
        </p>
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-1.5 mt-3">
          {["🤩", "😄", "😊", "😐", "😕"].map((emoji, i) => (
            <motion.span
              key={i}
              className="text-[18px]"
              animate={{ opacity: i < 3 ? 1 : 0.2, scale: i < 3 ? 1.12 : 1 }}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: i < 3 ? 1 : 0.2, scale: i < 3 ? 1.12 : 1 }}
              transition={{ delay: 0.2 + i * 0.08 }}
              viewport={{ once: true }}
            >
              {emoji}
            </motion.span>
          ))}
          <div className="ml-2 flex-1 h-[3px] rounded-full bg-neutral-100 overflow-hidden">
            <motion.div
              className="h-full bg-[#0D9488] rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "98%" }}
              transition={{ duration: 1.2, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </div>
        </div>
        <p className="text-[11px] text-neutral-300 mt-2">
          Based on post-treatment feedback
        </p>
      </div>
    </motion.div>
  );
}

function CellD() {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 28 },
        show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
      }}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="col-span-1 md:col-span-2 rounded-[20px] overflow-hidden bg-[#f0ede8] p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
        <motion.div
          className="w-9 h-9 rounded-full bg-[#0D9488] flex items-center justify-center flex-shrink-0"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]">
            <motion.polyline
              points="4,12 9,17 20,6"
              fill="none" stroke="white" strokeWidth={2.5}
              strokeLinecap="round" strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </svg>
        </motion.div>

        <div>
          <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-neutral-400 mb-1">
            04 — Credentials
          </p>
          <div className="flex items-baseline gap-3">
            <CountUp to={1477} className="text-[40px] md:text-[52px] font-black tracking-[-0.04em] text-neutral-900 leading-none" />
            <span className="bg-[#0D9488] text-white text-[11px] font-bold tracking-[0.10em] uppercase px-3 py-1 rounded-full">
              A Grade
            </span>
          </div>
        </div>
      </div>

      <div className="text-left md:text-right">
        <p className="text-[10px] font-bold tracking-[0.16em] uppercase text-neutral-400 mb-1">
          Council Registration
        </p>
        <p className="text-[12px] text-neutral-400 leading-[1.55]">
          Odisha State Dental Council<br />
          Verified & Licensed Practitioner
        </p>
      </div>
    </motion.div>
  );
}

export function StatsSection() {
  const items = [
    "15+ Years of Excellence",
    "5000+ Smiles Restored",
    "98% Patient Satisfaction",
    "Reg. No. 1477",
    "A Grade",
    "Choudhury Dental & Skin Care",
    "Salipur, Odisha",
    "Implantologist",
    "RCT Specialist",
  ];

  const marqueeItems = [...items, ...items];

  return (
    <>
      {/* PART 1 — MARQUEE TICKER */}
      <div className="w-full bg-[#0D9488] py-2.5 overflow-hidden flex items-center">
        <motion.div
          className="flex items-center whitespace-nowrap"
          animate={{ x: [0, "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          style={{ width: "max-content" }}
        >
          {marqueeItems.map((item, idx) => (
            <div key={idx} className="flex items-center">
              <span className="text-[11px] sm:text-[11px] text-[10px] font-bold tracking-[0.18em] uppercase text-white/90 whitespace-nowrap">
                {item}
              </span>
              <div className="w-1 h-1 rounded-full bg-white/40 mx-4 sm:mx-6 flex-shrink-0 hidden sm:block" />
              <div className="w-1 h-1 rounded-full bg-white/40 mx-3 flex-shrink-0 sm:hidden block" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* PART 2 & 3 — SECTION WRAPPER & BENTO GRID */}
      <section className="bg-[#f5f3ef] px-5 md:px-14 pb-16 pt-12 md:pt-18 w-full overflow-x-hidden">
        
        {/* Eyebrow row */}
        <div className="mb-8 md:mb-14 flex items-center justify-between">
          <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#0D9488]">
            Trusted by thousands · Dr. Pritam Praharaj
          </span>
          <Link href="#testimonials" className="text-[11px] font-semibold tracking-[0.06em] text-neutral-400 transition-colors hover:text-[#0D9488]">
            Read reviews &rarr;
          </Link>
        </div>

        <motion.div
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] grid-rows-auto gap-3"
        >
          <CellA />
          <CellB />
          <CellC />
          <CellD />
        </motion.div>

        {/* PART 4 — QUOTE ROW */}
        <motion.div
          className="mt-3 flex flex-col sm:flex-row items-center gap-4 rounded-2xl bg-white px-7 py-5"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="hidden sm:block text-[32px] text-[#0D9488]/50 leading-none font-serif flex-shrink-0 -mt-2">
            "
          </span>
          <p className="flex-1 text-center sm:text-left text-[13px] italic leading-[1.6] text-neutral-400">
            Numbers tell a story, but it is the{" "}
            <strong className="not-italic font-semibold text-neutral-700">
              trust of our patients
            </strong>
            {" "}that speaks the loudest.
          </p>
          <Link href="#appointment" className="w-full sm:w-auto flex-shrink-0 flex items-center justify-center gap-2 bg-[#0D9488] text-white text-[11px] font-bold tracking-[0.06em] px-5 py-2.5 rounded-full hover:bg-[#0a7a70] transition-colors whitespace-nowrap">
            Book Consultation
            <ArrowRight size={13} strokeWidth={2.5} />
          </Link>
        </motion.div>
      </section>
    </>
  );
}
