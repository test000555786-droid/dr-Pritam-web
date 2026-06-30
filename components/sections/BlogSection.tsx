'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowDown, Clock } from 'lucide-react';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer';
import { useTextScramble } from '@/hooks/useTextScramble';

const posts = [
  {
    tag: 'Root Canal',
    readTime: '5 min read',
    title: '5 Signs You Might Need a Root Canal',
    image: '/images/blog/root-canal.webp',
    excerpt: 'Tooth pain can be deceptive. Learn the early warning signs that indicate your tooth pulp may be infected and why timely intervention matters.',
    content: `
      <p class="mb-4"><strong>1. Persistent Tooth Pain</strong> — Pain that lingers long after eating or drinking hot or cold foods is a classic sign of pulp inflammation. The pain may be dull, throbbing, or sharp, and it often worsens when you lie down.</p>
      <p class="mb-4"><strong>2. Sensitivity to Temperature</strong> — If your tooth reacts strongly to hot coffee or ice cream, and the sensitivity lasts for minutes rather than seconds, the nerve inside your tooth may be compromised.</p>
      <p class="mb-4"><strong>3. Swollen or Tender Gums</strong> — Inflammation near the affected tooth can cause the surrounding gum tissue to swell, turn red, or feel tender to touch. You may also notice a small pimple-like bump on the gum.</p>
      <p class="mb-4"><strong>4. Darkening of the Tooth</strong> — A tooth that has turned grey or dark yellow may indicate internal tissue damage. This discoloration happens when the blood vessels inside the pulp break down.</p>
      <p class="mb-4"><strong>5. Prolonged Pain After Dental Procedures</strong> — If you had a deep filling or crown placed recently and the pain persists beyond a few days, the underlying pulp may have been affected.</p>
      <p>Root canal therapy is not the painful procedure it is often made out to be. With modern rotary endodontics and effective anaesthesia, it is as comfortable as getting a filling. At Choudhury Dental & Skin Care Clinic, we use digital apex locators and biocompatible sealers to ensure a single-visit, pain-free experience.</p>
    `,
  },
  {
    tag: 'Implants',
    readTime: '7 min read',
    title: 'Everything You Need to Know About Dental Implants',
    image: '/images/blog/dental-implants.webp',
    excerpt: 'Dental implants are the closest thing to natural teeth. Discover how they work, who is a candidate, and what to expect during the procedure.',
    content: `
      <p class="mb-4"><strong>What Are Dental Implants?</strong> — A dental implant is a small titanium screw that acts as an artificial tooth root. It is surgically placed into the jawbone, where it fuses with the bone over 3–6 months in a process called osseointegration.</p>
      <p class="mb-4"><strong>Who Is a Candidate?</strong> — Most adults with good general health and adequate jawbone are candidates. Even if you have bone loss, procedures like bone grafting and sinus lifts can prepare the site for implant placement.</p>
      <p class="mb-4"><strong>The Procedure</strong> — Dr. Praharaj uses a digitally guided surgical protocol. First, a 3D CBCT scan is taken to plan the exact implant position. The implant is placed under local anaesthesia, and a temporary crown may be attached the same day. After healing, the permanent crown is fitted.</p>
      <p class="mb-4"><strong>Benefits Over Bridges & Dentures</strong> — Implants do not require grinding down adjacent teeth. They prevent bone loss, look completely natural, and can last a lifetime with proper care.</p>
      <p class="mb-4"><strong>Aftercare</strong> — Maintain regular brushing, flossing, and professional cleanings. Avoid smoking, as it significantly impairs healing and long-term implant success.</p>
      <p>At our clinic, we use internationally approved implant systems such as Straumann and Osstem, backed by a comprehensive warranty. Book a consultation to find out if implants are right for you.</p>
    `,
  },
  {
    tag: 'Oral Health',
    readTime: '6 min read',
    title: 'How to Maintain Oral Health After 40',
    image: '/images/blog/oral-health-after-40.webp',
    excerpt: 'As we age, our dental needs change. Here is a comprehensive guide to keeping your teeth strong, gums healthy, and smile bright well into your golden years.',
    content: `
      <p class="mb-4"><strong>1. Increase Gum Care</strong> — Gum disease is the leading cause of tooth loss in adults over 40. Use a soft-bristled electric toothbrush, floss daily, and consider an antimicrobial mouthwash. Watch for bleeding gums, receding gum lines, or persistent bad breath.</p>
      <p class="mb-4"><strong>2. Combat Dry Mouth</strong> — Many medications for blood pressure, cholesterol, and diabetes reduce saliva production. Saliva is your natural defence against cavities. Stay hydrated, chew sugar-free gum, and ask your dentist about saliva substitutes.</p>
      <p class="mb-4"><strong>3. Protect Against Wear</strong> — Years of chewing and possible grinding (bruxism) wear down enamel. If you grind your teeth, a custom night guard is essential. Avoid very hard foods and acidic drinks that accelerate erosion.</p>
      <p class="mb-4"><strong>4. Regular Oral Cancer Screening</strong> — The risk of oral cancer increases with age. At every check-up, Dr. Praharaj performs a thorough soft-tissue examination to detect any suspicious lesions early.</p>
      <p class="mb-4"><strong>5. Do Not Skip Dental Visits</strong> — Biannual cleanings and check-ups are non-negotiable. Professional scaling removes calculus that brushing cannot, and early detection of cavities or gum disease saves both money and teeth.</p>
      <p>Remember, it is never too late to improve your oral health. Whether you need restorative work, gum therapy, or simply a better home-care routine, our team is here to guide you every step of the way.</p>
    `,
  },
];

function BlogCard({ post, isOpen, onToggle }: { post: typeof posts[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group">
      {/* Top band */}
      <div className="h-[200px] bg-gradient-to-br from-teal-500 to-teal-700 relative flex items-center justify-center overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover mix-blend-overlay opacity-60 group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-teal-950/30" />
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="w-32 h-32 rounded-full border border-white/40 absolute top-4 left-4" />
          <div className="w-20 h-20 rounded-full border border-white/40 absolute bottom-4 right-8" />
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
            {post.tag}
          </span>
          <span className="flex items-center gap-1 text-white/80 text-xs">
            <Clock className="w-3 h-3" />
            {post.readTime}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-slate-900 mb-2">{post.title}</h3>
        <p className="text-sm text-slate-500 leading-relaxed mb-4">{post.excerpt}</p>

        <button
          onClick={onToggle}
          className="inline-flex items-center gap-2 text-teal-600 text-sm font-semibold group"
        >
          Read Full Article
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="inline-block"
          >
            <ArrowDown className="w-4 h-4" />
          </motion.span>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              style={{ overflow: 'hidden' }}
            >
              <div
                className="pt-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-4"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export function BlogSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const scramble = useTextScramble(eyebrowRef, 'DENTAL INSIGHTS');

  return (
    <section id="blog" className="py-20 lg:py-28 bg-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="text-center mb-14">
          <span
            ref={eyebrowRef}
            onMouseEnter={scramble}
            className="inline-block uppercase text-teal-600 tracking-widest text-[11px] font-semibold mb-4 cursor-default"
          >
            DENTAL INSIGHTS
          </span>
          <h2 className="text-3xl lg:text-[44px] font-bold text-slate-900 leading-tight">
            Latest from Our Blog
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto leading-relaxed">
            Stay informed with expert dental advice, treatment guides, and oral health tips from Dr. Praharaj and the team at Choudhury Dental & Skin Care Clinic.
          </p>
        </RevealOnScroll>

        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <StaggerItem key={idx}>
              <BlogCard
                post={post}
                isOpen={openIndex === idx}
                onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
