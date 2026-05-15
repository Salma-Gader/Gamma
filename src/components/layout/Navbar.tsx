"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Work", href: "#photography" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Film", href: "#film" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header role="banner" className="relative z-50">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/88 backdrop-blur-2xl border-b border-white/[0.07]"
            : "bg-transparent"
        }`}
      >
        <div className="inner">
          {/* Main bar */}
          <div className="flex items-center justify-between h-20 md:h-24 lg:h-28">
            {/* Logo */}
            <a
              href="#home"
              aria-label="Gamma Studio — back to top"
              className="font-heading text-3xl md:text-4xl lg:text-[2.6rem] tracking-[0.3em] text-white hover:text-white/70 transition-colors duration-400"
            >
              GAMMA
            </a>

            {/* Desktop nav links */}
            <nav
              aria-label="Site sections"
              className="hidden md:flex items-center gap-10 lg:gap-12"
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 + index * 0.08, duration: 0.6 }}
                  className="text-white/50 hover:text-white text-[13px] uppercase tracking-[0.22em] transition-colors duration-300 hover-line"
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-5">
              <motion.a
                href="#contact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="hidden md:inline-flex items-center px-6 py-3 border border-white/22 text-white text-[13px] uppercase tracking-[0.22em] hover:border-white/55 hover:bg-white/[0.06] transition-all duration-300"
              >
                Book now
              </motion.a>

              <button
                aria-label={
                  isMobileMenuOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
                }
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                className="md:hidden p-2 text-white/60 hover:text-white transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" strokeWidth={1.25} />
                ) : (
                  <Menu className="w-6 h-6" strokeWidth={1.25} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-label="Navigation menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              className="md:hidden bg-black/96 border-t border-white/[0.06] backdrop-blur-2xl overflow-hidden"
            >
              <div className="inner py-8 flex flex-col gap-1">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-4 text-white/55 hover:text-white text-[15px] uppercase tracking-[0.22em] transition-colors duration-300 border-b border-white/[0.05] last:border-0"
                  >
                    {item.name}
                  </motion.a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-5 py-4 text-center border border-white/22 text-white text-[14px] uppercase tracking-[0.22em] hover:bg-white/[0.06] transition-colors duration-300"
                >
                  Book now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
