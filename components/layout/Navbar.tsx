"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { SlideButton } from '@/components/ui/SlideButton'
import { ScrollProgress } from '@/components/ui/ScrollProgress'

const desktopNavLinks = [
  { label: 'About', href: '#about' },
  { label: 'Specializations', href: '#specializations' },
  { label: 'Services', href: '#services' },
  { label: 'Appointment', href: '#appointment' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

const mobileNavLinks = [
  { href: "#home",              label: "Home",            icon: "🏠" },
  { href: "#about",         label: "About",           icon: "👨⚕️" },
  { href: "#specializations",label: "Specializations", icon: "⭐" },
  { href: "#services",      label: "Services",        icon: "🦷" },
  { href: "#appointment",   label: "Appointment",     icon: "📅" },
  { href: "#blog",          label: "Blog",            icon: "📝" },
  { href: "#contact",       label: "Contact",         icon: "📞" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <>
      {/* DESKTOP (≥ md): keep existing navbar unchanged */}
      <motion.header
        animate={{
          backgroundColor: scrolled ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0)',
          backdropFilter: scrolled ? 'blur(20px)' : 'blur(0px)',
        }}
        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
        className={`hidden md:flex fixed top-0 left-0 right-0 z-50 h-[72px] border-b ${scrolled ? 'border-slate-100/80' : 'border-transparent'}`}
      >
        <ScrollProgress />
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <a href="#hero" className="flex flex-col">
            <span className="text-teal-600 font-bold text-lg leading-tight">Dr. Pritam Pratik</span>
            <span className="text-slate-400 text-[10px] leading-tight tracking-wide">Implantologist · RCT Specialist</span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {desktopNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link text-sm font-medium transition-colors ${scrolled ? 'text-slate-700' : 'text-slate-800'}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <SlideButton href="#appointment" variant="primary">
              Book Appointment
            </SlideButton>
          </div>
        </div>
      </motion.header>

      {/* MOBILE (< md) — fixed top bar */}
      <header className="md:hidden fixed top-0 inset-x-0 z-50 h-16
        bg-white/92 backdrop-blur-md
        border-b border-black/[0.06]
        flex items-center justify-between
        px-5 md:px-10">

        {/* Logo */}
        <div className="flex flex-col gap-px">
          <span className="text-[15px] font-extrabold text-[#0D9488]
            tracking-[-0.02em] leading-none">
            Dr. Pritam
          </span>
          <span className="text-[10px] font-medium text-neutral-400
            tracking-[0.02em]">
            Implantologist · RCT Specialist
          </span>
        </div>

        {/* Hamburger — asymmetric lines, premium feel */}
        <button
          onClick={() => setOpen(true)}
          className="flex h-10 w-10 flex-col items-center justify-center
            gap-[5px] rounded-xl bg-[#f5f3ef]
            border border-black/[0.06]"
          aria-label="Open menu"
        >
          <span className="h-[1.5px] w-[18px] rounded-full bg-neutral-800
            transition-all duration-300" />
          <span className="h-[1.5px] w-[14px] rounded-full bg-neutral-800
            transition-all duration-300" />   {/* shorter = asymmetric */}
          <span className="h-[1.5px] w-[18px] rounded-full bg-neutral-800
            transition-all duration-300" />
        </button>

      </header>
      
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[60] bg-black/45 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
            />

            {/* Panel — slides in from right */}
            <motion.div
              className="fixed right-0 top-0 z-[70] flex h-full w-[88%]
                max-w-[340px] flex-col overflow-hidden
                rounded-bl-[28px] bg-white"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 32 }}
            >

              {/* ── DRAWER HEADER ── */}
              <div className="flex items-start justify-between
                border-b border-neutral-100 px-5 py-5">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[16px] font-extrabold text-[#0D9488]
                    tracking-[-0.02em]">
                    Dr. Pritam
                  </span>
                  <span className="text-[10px] font-medium text-neutral-400">
                    Implantologist · RCT Specialist
                  </span>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="flex h-[34px] w-[34px] items-center justify-center
                    rounded-[10px] bg-[#f5f3ef] border border-black/[0.06]
                    text-[14px] text-neutral-500 font-medium"
                >
                  ✕
                </button>
              </div>

              {/* ── DOCTOR IDENTITY CARD ── */}
              <div className="mx-4 mt-4 flex items-center gap-3
                rounded-2xl bg-gradient-to-br from-[#0D9488] to-[#0a7a70]
                p-4">
                {/* Avatar */}
                <div className="flex h-11 w-11 flex-shrink-0 items-center
                  justify-center rounded-full
                  border-[1.5px] border-white/30
                  bg-white/20 text-[14px] font-extrabold text-white">
                  PP
                </div>
                {/* Info */}
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[13px] font-extrabold text-white
                    tracking-[-0.01em]">
                    Dr. Ch. Pritam Pratik Praharaj
                  </p>
                  <p className="mt-0.5 text-[10px] text-white/65">
                    Implantologist · RCT Specialist · Salipur
                  </p>
                </div>
                {/* Badge */}
                <span className="flex-shrink-0 rounded-[6px]
                  border border-white/25 bg-white/15
                  px-2 py-1 text-[9px] font-bold
                  uppercase tracking-[0.08em] text-white/85">
                  Verified
                </span>
              </div>

              {/* ── NAV LINKS ── */}
              <nav className="flex-1 overflow-y-auto px-4 py-2">
                <p className="px-2 pb-1.5 pt-4 text-[9px] font-bold
                  uppercase tracking-[0.14em] text-neutral-300">
                  Navigation
                </p>

                {mobileNavLinks.map(({ href, label, icon }, i) => (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04,
                      duration: 0.3, ease: [0.22,1,0.36,1] }}
                  >
                    <Link
                      href={href}
                      className={`flex items-center justify-between
                        rounded-xl px-3 py-3.5 text-[15px] font-semibold
                        tracking-[-0.01em] transition-colors
                        ${pathname === href
                          ? "bg-[rgba(13,148,136,0.07)] text-[#0D9488]"
                          : "text-neutral-800 hover:bg-neutral-50"
                        }`}
                    >
                      <span>{icon}&nbsp;&nbsp;{label}</span>
                      <ChevronRight size={14} strokeWidth={2}
                        className={pathname === href
                          ? "text-[#0D9488]" : "text-neutral-300"} />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* ── DRAWER FOOTER ── */}
              <div className="border-t border-neutral-100 p-4">
                <Link href="#appointment"
                  className="flex w-full items-center justify-center gap-2
                    rounded-full bg-[#0D9488] py-3 text-[13px] font-bold
                    tracking-[0.02em] text-white
                    active:scale-[0.98] transition-transform">
                  <span>📅</span>
                  Book Appointment
                </Link>
                <p className="mt-2.5 text-center text-[10px] font-medium
                  text-neutral-400">
                  <span className="mr-1.5 inline-block h-1.5 w-1.5
                    rounded-full bg-green-500 align-middle" />
                  Open today · Mon–Sat, 10am – 7pm
                </p>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
