"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const locations = [
  {
    title: "Stuart Miller Solicitors",
    tag: "Website creation",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
    blurb: "Rebuilt the site with a faster UX, SEO foundations, and clear conversion paths.",
  },
  {
    title: "Sofas & Beds",
    tag: "PPC / Google Ads",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80",
    blurb: "Scaled Google Ads with structured feeds, remarketing, and CRO-driven landing pages.",
  },
  {
    title: "The Sofa Shop",
    tag: "SEO",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80",
    blurb: "Content sprints and technical SEO lifted organic revenue toward 7 figures annually.",
  },
  {
    title: "Moon Star Furniture",
    tag: "Ecommerce growth",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    blurb: "Full-funnel support across email, paid social, and onsite experience to lift AOV.",
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" ref={ref} className="section-padding bg-gradient-to-b from-[#05070c] to-[#0b0f18]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8"
        >
          <div>
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-gray-100 mb-3">Case studies</p>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl">Recent results</h2>
            <p className="text-gray-300 mt-3 max-w-2xl text-base sm:text-lg">
              A mix of web builds, paid media, SEO, and ecommerce growth programs—shipped with measurable impact.
            </p>
          </div>
          <div className="hidden md:flex gap-3 text-xs uppercase tracking-[0.2em] text-gray-400">
            <span className="px-3 py-1 border border-white/10 rounded-full">HDR</span>
            <span className="px-3 py-1 border border-white/10 rounded-full">Ray tracing</span>
          </div>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#05070c] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0b0f18] to-transparent pointer-events-none" />
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4">
            {locations.map((loc, index) => (
              <motion.div
                key={loc.title}
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="min-w-[260px] md:min-w-[320px] snap-start relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
              >
                <div className="relative h-56">
                  <Image src={loc.image} alt={loc.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/70" />
                  <div className="absolute top-3 left-3 px-3 py-1 text-xs uppercase tracking-[0.2em] bg-black/60 border border-white/15 rounded-full text-white">
                    {loc.tag}
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="text-xl font-semibold text-white">{loc.title}</h3>
                  <p className="text-sm text-gray-300">{loc.blurb}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

