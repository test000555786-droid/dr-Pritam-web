"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Stethoscope } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Specialisations", href: "#specializations" },
  { label: "Services", href: "#services" },
  { label: "Appointment", href: "#appointment" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md shadow-teal-50/80" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-18">
        {/* Brand */}
        <button
          onClick={() => handleNav("#hero")}
          className="flex items-center gap-2 group"
        >
          <div className="w-9 h-9 rounded-lg bg-teal-600 flex items-center justify-center group-hover:bg-teal-700 transition-colors">
            <Stethoscope size={18} className="text-white" />
          </div>
          <div className="text-left">
            <p className="text-xs font-semibold text-teal-600 leading-none">Dr. Pritam</p>
            <p className="text-[10px] text-slate-500 leading-tight">Implantologist · RCT Specialist</p>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className={`text-sm font-medium transition-colors hover:text-teal-600 ${
                scrolled ? "text-slate-600" : "text-slate-700"
              }`}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("#appointment")}
            className="ml-2 px-4 py-2 rounded-full bg-teal-600 text-white text-sm font-semibold hover:bg-teal-700 transition-colors shadow-lg shadow-teal-200"
          >
            Book Appointment
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-700"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((l) => (
                <button
                  key={l.href}
                  onClick={() => handleNav(l.href)}
                  className="text-left px-3 py-2.5 rounded-lg text-slate-700 font-medium hover:bg-teal-50 hover:text-teal-700 transition-colors"
                >
                  {l.label}
                </button>
              ))}
              <button
                onClick={() => handleNav("#appointment")}
                className="mt-2 px-4 py-2.5 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-colors"
              >
                Book Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
