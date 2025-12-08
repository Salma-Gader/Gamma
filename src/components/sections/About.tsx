"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="section-padding bg-gradient-to-b from-[#0b0f18] to-[#05070c] text-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl text-center lg:text-left"
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-amber-300 mb-3">About us</p>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6">Gamma Studio</h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto lg:mx-0">
            Full-service marketing and production. From auditing your funnel to filming your promo to iterating landing pages, we align strategy, creative, and media buying so every touchpoint converts.
          </p>
          <div className="mt-6 flex items-center gap-3 text-sm text-gray-400">
            <span className="h-px w-10 bg-amber-300" />
            <span>Learn more</span>
          </div>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-b from-black/60 to-black/90 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
          >
            <Image
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80"
              alt="Ethan Winters"
              fill
              className="object-cover opacity-90"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gray-300">Delivery</p>
                <p className="text-xl font-semibold">Strategy + Production</p>
              </div>
              <span className="text-amber-300 text-sm">End-to-end</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="glass-panel rounded-2xl p-8 space-y-6"
          >
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-gray-300">What we handle</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Funnel audits & analytics",
                "Paid media & search",
                "Content & photo/video",
                "Design & landing pages",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-amber-300" />
                  <p className="text-sm text-white">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-300">
              We work as your embedded team—shipping fast, measuring results, and refining weekly so growth compounds.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

