"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function ImmersiveBreak() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      aria-hidden="true"
      className="relative h-[70vh] md:h-screen overflow-hidden bg-black"
    >
      {/* Static background image */}
      <Image
        src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1800&q=85"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
        priority={false}
      />

      {/* Cinematic veil */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

      {/* Centred editorial text — fades in on scroll */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
      >
        <p className="text-[11px] uppercase tracking-[0.45em] text-white/35 mb-6">
          Gamma Studio
        </p>
        <h2 className="font-heading text-5xl sm:text-6xl md:text-8xl xl:text-9xl text-white leading-[0.87] text-balance">
          Light. Lens.
          <br />
          <em className="not-italic text-white/40">Legacy.</em>
        </h2>
      </motion.div>
    </section>
  );
}
