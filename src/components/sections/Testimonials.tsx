"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote:
      "Gamma Studio transformed our brand identity. The photography went so far beyond what we imagined — every image tells a complete story.",
    name: "Sarah Lennon",
    role: "Creative Director, Maison Aurel",
    initial: "S",
  },
  {
    quote:
      "Working with Gamma is unlike any other creative studio. The attention to detail and cinematic quality is genuinely unmatched.",
    name: "Marcus Reid",
    role: "Founder, Volt Automotive",
    initial: "M",
  },
  {
    quote:
      "Our campaign performance doubled after the Gamma visual overhaul. The ROI on premium photography is very real.",
    name: "Elena Vasquez",
    role: "CMO, Lumière Cosmetics",
    initial: "E",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="testimonials"
      ref={ref}
      aria-label="Client testimonials"
      className="bg-[#0a0c12] section-pad"
    >
      <div className="inner">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16 md:mb-20"
        >
          <p className="text-[11px] uppercase tracking-[0.38em] text-white/35 mb-5">
            Testimonials
          </p>
          <h2 className="font-heading text-5xl sm:text-6xl text-white leading-[0.88]">
            Client
            <br />
            voices
          </h2>
        </motion.div>

        {/* Testimonials grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-white/[0.06]"
          role="list"
          aria-label="Client testimonials"
        >
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              role="listitem"
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.65,
                delay: i * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="bg-[#0a0c12] p-8 md:p-10 border-b border-r border-white/[0.06] flex flex-col justify-between min-h-[260px]"
            >
              {/* Opening mark */}
              <div>
                <span
                  className="block font-heading text-4xl text-white/12 mb-5 leading-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <p className="text-white/62 text-base leading-relaxed">
                  {t.quote}
                </p>
              </div>

              {/* Attribution */}
              <footer className="flex items-center gap-4 mt-10">
                <div
                  className="w-9 h-9 rounded-full bg-white/8 border border-white/[0.09] flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                >
                  <span className="text-white/60 text-xs font-medium">
                    {t.initial}
                  </span>
                </div>
                <div>
                  <cite className="not-italic text-white text-sm font-medium block">
                    {t.name}
                  </cite>
                  <span className="text-white/30 text-[10px] uppercase tracking-[0.22em]">
                    {t.role}
                  </span>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
