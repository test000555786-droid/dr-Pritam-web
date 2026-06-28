"use client";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail, MessageCircle, ExternalLink } from "lucide-react";

const hours = [
  { day: "Monday", time: "9:00 AM – 8:00 PM", open: true },
  { day: "Tuesday", time: "9:00 AM – 8:00 PM", open: true },
  { day: "Wednesday", time: "9:00 AM – 8:00 PM", open: true },
  { day: "Thursday", time: "9:00 AM – 8:00 PM", open: true },
  { day: "Friday", time: "9:00 AM – 8:00 PM", open: true },
  { day: "Saturday", time: "9:00 AM – 8:00 PM", open: true },
  { day: "Sunday", time: "10:00 AM – 2:00 PM", open: true },
];

function isOpen(): boolean {
  const now = new Date();
  const day = now.getDay();
  const hours = now.getHours();
  const mins = now.getMinutes();
  const time = hours * 60 + mins;
  if (day === 0) return time >= 600 && time < 840;
  return time >= 540 && time < 1200;
}

export default function Location() {
  const open = isOpen();

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-semibold tracking-widest uppercase mb-3">
            Find Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Visit the <span className="text-teal-600">Clinic</span>
          </h2>
          <p className="mt-3 text-slate-500 max-w-xl mx-auto">
            Conveniently located on Kendrapada–Cuttack Road in Salipur — easily accessible from both towns.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 rounded-2xl overflow-hidden border border-slate-100 shadow-md h-80 lg:h-96"
          >
            <iframe
              title="Choudhury Dental & Skin Care Clinic location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14945.96!2d85.9279!3d20.4118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1902f3d59cb0e3%3A0x7e8c8b4b4c4c4c4c!2sSalipur%2C%20Odisha%20754202!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Address */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-teal-600" />
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-sm">Choudhury Dental &amp; Skin Care Clinic</p>
                  <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">
                    Kendrapada – Cuttack Rd, Salipur, Odisha 754202
                  </p>
                </div>
              </div>

              {/* Status badge */}
              <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                open ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"
              }`}>
                <span className={`w-1.5 h-1.5 rounded-full ${open ? "bg-green-500" : "bg-red-500"}`} />
                {open ? "Open Now" : "Currently Closed"}
              </div>
            </div>

            {/* Hours table */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
              <div className="flex items-center gap-2 mb-3">
                <Clock size={14} className="text-teal-600" />
                <p className="font-bold text-slate-800 text-sm">Clinic Hours</p>
              </div>
              <div className="space-y-2">
                {hours.map((h) => (
                  <div key={h.day} className="flex items-center justify-between">
                    <span className="text-slate-600 text-xs font-medium">{h.day}</span>
                    <span className={`text-xs font-semibold ${h.open ? "text-teal-700" : "text-red-500"}`}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="grid grid-cols-3 gap-2">
              <a
                href="tel:+91XXXXXXXXXX"
                className="flex flex-col items-center gap-1.5 py-3 px-2 rounded-xl bg-teal-600 text-white hover:bg-teal-700 transition-colors text-center"
              >
                <Phone size={16} />
                <span className="text-[11px] font-semibold">Call</span>
              </a>
              <a
                href="https://wa.me/91XXXXXXXXXX?text=Hello%20Dr.%20Pritam%2C%20I%20would%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1.5 py-3 px-2 rounded-xl bg-green-500 text-white hover:bg-green-600 transition-colors text-center"
              >
                <MessageCircle size={16} />
                <span className="text-[11px] font-semibold">WhatsApp</span>
              </a>
              <a
                href="mailto:info@choudhuryclinic.com"
                className="flex flex-col items-center gap-1.5 py-3 px-2 rounded-xl bg-slate-700 text-white hover:bg-slate-800 transition-colors text-center"
              >
                <Mail size={16} />
                <span className="text-[11px] font-semibold">Email</span>
              </a>
            </div>

            <a
              href="https://maps.google.com/?q=Salipur+Odisha+754202"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border-2 border-teal-600 text-teal-600 font-semibold text-sm hover:bg-teal-50 transition-colors"
            >
              <ExternalLink size={15} />
              Open in Google Maps
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
