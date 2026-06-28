"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle2, Send } from "lucide-react";

const services = [
  "Dental Implant Consultation",
  "Root Canal Treatment",
  "Crown & Bridge",
  "Teeth Whitening",
  "Tooth Extraction",
  "Scaling & Polishing",
  "Dentures",
  "Orthodontic Consultation",
  "Paediatric Dentistry",
  "General Check-up",
];

const hours = [
  { days: "Monday – Saturday", time: "9:00 AM – 8:00 PM" },
  { days: "Sunday", time: "10:00 AM – 2:00 PM" },
];

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  message: string;
};

export default function Appointment() {
  const [form, setForm] = useState<FormState>({
    name: "", phone: "", email: "", service: "", date: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.service) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all";

  return (
    <section id="appointment" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-semibold tracking-widest uppercase mb-3">
            Book Appointment
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Ready to Reclaim <span className="text-teal-600">Your Smile?</span>
          </h2>
          <p className="mt-3 text-slate-500 max-w-xl mx-auto">
            Fill in the form and we will confirm your slot within a few hours. Walk-ins are also welcome during clinic hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-gradient-to-br from-teal-600 to-teal-800 rounded-2xl p-6 sm:p-8 text-white"
          >
            <h3 className="text-xl font-bold mb-2">Choudhury Dental &amp; Skin Care Clinic</h3>
            <p className="text-teal-200 text-sm mb-6">Dr. Ch. Pritam Pratik Praharaj, BDS (Utkal)</p>
            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-teal-300 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-teal-100 leading-relaxed">Kendrapada – Cuttack Rd, Salipur,<br />Odisha 754202</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-teal-300 flex-shrink-0" />
                <a href="mailto:info@choudhuryclinic.com" className="text-sm text-teal-100 hover:text-white transition-colors">info@choudhuryclinic.com</a>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={16} className="text-teal-300 mt-0.5 flex-shrink-0" />
                <div>
                  {hours.map((h) => (
                    <p key={h.days} className="text-sm text-teal-100 leading-relaxed">
                      <span className="font-semibold text-white">{h.days}:</span> {h.time}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <a
              href="https://wa.me/91XXXXXXXXXX?text=Hello%20Dr.%20Pritam%2C%20I%20would%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-green-500 hover:bg-green-400 text-white font-bold text-sm transition-colors shadow-lg shadow-green-900/30"
            >
              <MessageCircle size={16} />
              Book via WhatsApp
            </a>
            <div className="mt-4">
              <a
                href="tel:+91XXXXXXXXXX"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-sm transition-colors"
              >
                <Phone size={16} />
                Call the Clinic
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center">
                    <CheckCircle2 size={32} className="text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Appointment Request Sent!</h3>
                  <p className="text-slate-500 max-w-sm text-sm leading-relaxed">
                    Thank you, <strong>{form.name}</strong>. We have received your request for{" "}
                    <strong>{form.service}</strong> and will confirm your appointment on{" "}
                    <strong>{form.phone}</strong> shortly.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", service: "", date: "", message: "" }); }}
                    className="mt-2 px-6 py-2.5 rounded-full bg-teal-600 text-white text-sm font-semibold hover:bg-teal-700 transition-colors"
                  >
                    Book Another Appointment
                  </button>
                </motion.div>
              ) : (
                <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <h3 className="text-lg font-bold text-slate-800 mb-6">Your Details</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} placeholder="e.g. Sunita Mohanty" className={inputClass} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Phone Number *</label>
                      <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" className={inputClass} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Email Address</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className={inputClass} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Service Needed *</label>
                      <select name="service" value={form.service} onChange={handleChange} className={inputClass}>
                        <option value="">Select a service…</option>
                        {services.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Preferred Date</label>
                      <input name="date" type="date" value={form.date} onChange={handleChange} className={inputClass} />
                    </div>
                    <div className="flex flex-col gap-1 sm:col-span-2">
                      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Message / Additional Notes</label>
                      <textarea name="message" value={form.message} onChange={handleChange} rows={3} placeholder="Describe your symptoms or any special requirements…" className={`${inputClass} resize-none`} />
                    </div>
                  </div>
                  <button
                    onClick={handleSubmit}
                    disabled={loading || !form.name || !form.phone || !form.service}
                    className="mt-6 w-full py-3.5 rounded-xl bg-teal-600 text-white font-bold text-sm hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 shadow-lg shadow-teal-200"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending…
                      </span>
                    ) : (
                      <span className="flex items-center gap-2"><Send size={15} /> Request Appointment</span>
                    )}
                  </button>
                  <p className="text-center text-slate-400 text-xs mt-3">
                    We will confirm via phone call within a few hours during clinic hours.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
