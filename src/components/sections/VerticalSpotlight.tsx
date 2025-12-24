"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function VerticalSpotlight() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="spotlight" ref={ref} className="section-padding bg-[#05070c]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[10/16] sm:aspect-[9/16] overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_20px_60px_rgba(0,0,0,0.55)]"
        >
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80"
          >
            <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/70" />
          <div className="absolute top-4 left-4 px-3 py-1 text-xs uppercase tracking-[0.2em] bg-white/10 border border-white/20 rounded-full text-white">
            Vertical reel
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="space-y-6"
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-gray-100">Ads & video spotlight</p>
          <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl">Performance creative</h3>
          <p className="text-base sm:text-lg text-gray-200 max-w-2xl">
            Vertical cutdowns, YouTube pre-roll, and social-first edits designed to keep attention and convert. From scripting to export packs, we deliver ready-to-run assets.
          </p>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              Scripts, storyboards, and shot lists tailored to your offer.
            </li>
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              9:16, 1:1, and 16:9 exports with on-brand overlays.
            </li>
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              Color, sound, and motion tuned for ads, social, and web.
            </li>
          </ul>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-white text-black font-semibold uppercase tracking-[0.12em] rounded-md shadow-[0_10px_30px_rgba(255,255,255,0.2)] w-full sm:w-auto text-center"
            >
              Book a shoot
            </a>
            <a
              href="#portfolio"
              className="px-6 py-3 border border-white/20 text-white font-semibold uppercase tracking-[0.12em] rounded-md w-full sm:w-auto text-center"
            >
              See gallery
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

