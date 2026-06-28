"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, ChevronDown, ChevronUp, BookOpen } from "lucide-react";

const posts = [
  {
    slug: "5-signs-rct",
    tag: "Root Canal",
    tagColor: "bg-orange-100 text-orange-700",
    title: "5 Signs You Might Need a Root Canal Treatment",
    readTime: "4 min read",
    intro:
      "Root canal treatment has an undeserved reputation for being painful. In reality, modern RCT is no more uncomfortable than a filling — and it relieves the severe pain caused by an infected pulp. The real question is: how do you know when you need one?",
    sections: [
      { heading: "1. Persistent, Severe Toothache", body: "Pain that throbs deep inside a tooth — especially pain that worsens when you bite or apply pressure — is one of the clearest signs of pulp infection. Unlike sensitivity to sweets or temperature, this pain tends to be constant and does not disappear when the stimulus is removed." },
      { heading: "2. Prolonged Sensitivity to Hot or Cold", body: "It is normal for teeth to feel briefly sensitive to hot or cold food and drink. However, if the sensitivity lingers for more than 10–15 seconds after the stimulus is gone, the nerve inside the tooth may be inflamed or dying. This is called irreversible pulpitis and typically requires RCT." },
      { heading: "3. Darkening or Discolouration of the Tooth", body: "A tooth that is turning grey, brown, or noticeably darker than its neighbours may have a damaged nerve or dying pulp tissue breaking down inside the root. This discolouration can appear gradually and is often painless in the early stages." },
      { heading: "4. Swelling or a Pimple on the Gum", body: "An abscess — a pocket of pus resulting from a bacterial infection at the root tip — may appear as a swollen, tender lump near the affected tooth, or as a small recurring pimple on the gum (called a sinus tract or parulis). This is a dental emergency and should be treated promptly to prevent the infection spreading." },
      { heading: "5. A Cracked or Severely Decayed Tooth", body: "Deep decay that has reached the pulp chamber, or a crack that extends into the root, creates a direct pathway for bacteria. Even without severe pain, your dentist may recommend RCT to remove the infected tissue before an abscess develops." },
      { heading: "What to Do Next", body: "If you recognise any of these signs, book a consultation at Choudhury Dental & Skin Care Clinic promptly. Early treatment is simpler, faster, and far less costly than allowing the infection to progress. Dr. Pritam performs single-visit RCT using rotary endodontic systems for a precise and comfortable experience." },
    ],
  },
  {
    slug: "implants-vs-dentures",
    tag: "Implants",
    tagColor: "bg-teal-100 text-teal-700",
    title: "Dental Implants vs Dentures: Which Is Right for You?",
    readTime: "5 min read",
    intro:
      "Losing one or more teeth is more common than most people realise — and the choice of how to replace them has lasting consequences for your oral health, comfort, and quality of life. The two most widely discussed options are dental implants and dentures. Here is an honest comparison.",
    sections: [
      { heading: "What Are Dental Implants?", body: "A dental implant is a small titanium screw placed surgically into the jawbone. After a healing period (osseointegration), a realistic-looking crown is attached on top. The result is a permanent tooth replacement that behaves exactly like a natural tooth — you can bite, chew, and clean it just as you would your own teeth." },
      { heading: "What Are Dentures?", body: "Dentures are removable prosthetic teeth. Full dentures replace an entire arch (upper or lower), while partial dentures fill gaps between remaining natural teeth. Modern dentures are far better fitting and more natural-looking than older generations, but they are still removable appliances that rest on the gum ridge." },
      { heading: "Stability and Comfort", body: "Implants win clearly on stability. They are fixed in the bone and do not shift, slip, or click. Dentures, especially full lower dentures, can loosen over time as the jawbone resorbs without tooth roots to stimulate it. Implant-supported dentures (overdentures that snap onto implants) offer a middle-ground solution." },
      { heading: "Bone Health", body: "This is perhaps the most important functional difference. Tooth roots stimulate jawbone through the forces of chewing. Without roots, the bone gradually shrinks — a process called resorption — which changes facial structure over years. Implants replicate root function and prevent bone loss. Conventional dentures do not." },
      { heading: "Cost Considerations", body: "Dentures have a lower upfront cost, which makes them more immediately accessible. Implants cost more initially but, maintained well, last a lifetime — making them more economical over a 15–20 year horizon. Dr. Pritam will always discuss both options transparently, including payment scheduling." },
      { heading: "Who Is a Candidate?", body: "Most adults with adequate bone volume and good general health are candidates for implants. Uncontrolled diabetes, heavy smoking, and certain medications can affect healing. A thorough consultation with Dr. Pritam will determine your suitability and recommend the best path forward." },
    ],
  },
  {
    slug: "10-habits-healthy-teeth",
    tag: "Oral Health",
    tagColor: "bg-green-100 text-green-700",
    title: "10 Daily Habits for a Lifetime of Healthy Teeth",
    readTime: "5 min read",
    intro:
      "Most dental problems — cavities, gum disease, tooth loss — are largely preventable. The habits you maintain every day matter far more than any single dental procedure. Here are ten evidence-based practices that can protect your teeth for decades.",
    sections: [
      { heading: "1. Brush for Two Full Minutes, Twice a Day", body: "Set a timer if you need to. Use a soft-bristled toothbrush at a 45-degree angle to the gumline, using gentle circular strokes. Brushing too hard erodes enamel and recedes gums — pressure is never a substitute for time." },
      { heading: "2. Floss Once Every Day Without Exception", body: "Toothbrush bristles cannot reach the contact points between teeth. Dental floss (or an interdental brush, or a water flosser) is the only way to remove plaque from these surfaces. Skipping floss means leaving roughly 35% of each tooth surface uncleaned." },
      { heading: "3. Use a Fluoride Toothpaste", body: "Fluoride remineralises early-stage enamel damage before it becomes a cavity. It is the single most evidence-backed ingredient in toothpaste. Children under 6 should use a rice-sized smear; adults should use a pea-sized amount." },
      { heading: "4. Limit Sugary and Acidic Foods and Drinks", body: "Bacteria in the mouth feed on sugars and produce acids that attack enamel. Frequent snacking or sipping sugary drinks keeps the mouth in a prolonged acid state. If you do consume these, rinse with water afterwards and wait 30 minutes before brushing." },
      { heading: "5. Stay Well Hydrated", body: "Saliva is your mouth's natural defence — it neutralises acid, washes away food debris, and delivers minerals to enamel. Staying hydrated, particularly with plain water, supports healthy saliva flow. Dry mouth dramatically increases cavity risk." },
      { heading: "6–10. More Essential Habits", body: "Do not use your teeth as tools (opening bottles or tearing packaging can crack enamel). Wear a custom mouthguard during contact sports. Avoid tobacco in all forms. Visit Dr. Pritam every six months for professional cleaning and check-up. Ask about fissure sealants and fluoride treatments for vulnerable surfaces — they prevent decay for years at a fraction of the cost of a filling." },
    ],
  },
];

export default function Blog() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="blog" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-semibold tracking-widest uppercase mb-3">
            Patient Education
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Dental Health <span className="text-teal-600">Guides &amp; Articles</span>
          </h2>
          <p className="mt-3 text-slate-500 max-w-xl mx-auto">
            Evidence-based information from Dr. Pritam to help you make informed decisions about your oral health.
          </p>
        </motion.div>

        <div className="space-y-5">
          {posts.map((post, i) => {
            const isOpen = expanded === post.slug;
            return (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setExpanded(isOpen ? null : post.slug)}
                  className="w-full text-left p-6 sm:p-8 flex items-start justify-between gap-4 group"
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${post.tagColor}`}>{post.tag}</span>
                      <span className="flex items-center gap-1 text-slate-400 text-xs"><Clock size={12} /> {post.readTime}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-800 group-hover:text-teal-700 transition-colors leading-snug mb-2">{post.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">{post.intro}</p>
                  </div>
                  <div className="flex-shrink-0 w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-teal-50 group-hover:border-teal-300 transition-colors mt-1">
                    {isOpen ? <ChevronUp size={16} className="text-teal-600" /> : <ChevronDown size={16} className="text-slate-500" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-8 pt-0 border-t border-slate-100">
                        <div className="flex items-center gap-2 py-4 mb-2">
                          <BookOpen size={14} className="text-teal-600" />
                          <span className="text-xs font-semibold text-teal-600 uppercase tracking-wide">Full Article</span>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed mb-6 italic border-l-4 border-teal-200 pl-4">{post.intro}</p>
                        <div className="space-y-4">
                          {post.sections.map((s) => (
                            <div key={s.heading}>
                              <p className="font-bold text-slate-800 mb-1 text-sm">{s.heading}</p>
                              <p className="text-slate-600 text-sm leading-relaxed">{s.body}</p>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-3">
                          <p className="text-xs text-slate-400">By Dr. Ch. Pritam Pratik Praharaj, BDS (Utkal)</p>
                          <button
                            onClick={() => document.querySelector("#appointment")?.scrollIntoView({ behavior: "smooth" })}
                            className="px-4 py-2 rounded-full bg-teal-600 text-white text-xs font-bold hover:bg-teal-700 transition-colors"
                          >
                            Book Consultation →
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
