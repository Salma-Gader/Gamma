"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ShoppingBag,
  Palette,
  Search,
  Video,
  Share2,
  Laptop,
  Workflow,
  PlayCircle,
  Headphones,
  Radar,
} from "lucide-react";

const services = [
  {
    icon: ShoppingBag,
    title: "Ecommerce Marketing",
    bullets: ["Acquisition funnels", "Email & retention", "Conversion CRO"],
    action: "Grow revenue",
  },
  {
    icon: Palette,
    title: "Branding & Web",
    bullets: ["Identity systems", "Photography & content", "Landing pages"],
    action: "Get branded",
  },
  {
    icon: Search,
    title: "SEO Marketing",
    bullets: ["White-hat SEO", "Content sprints", "Backlink outreach"],
    action: "Rank higher",
  },
  {
    icon: Video,
    title: "Video Editing & Production",
    bullets: ["Promos & explainers", "YouTube ads", "Animation & motion"],
    action: "Ship video",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    bullets: ["Content calendars", "Growth & analytics", "Paid social ads"],
    action: "Build audience",
  },
  {
    icon: Laptop,
    title: "Website Management",
    bullets: ["WordPress & Next.js", "Performance & uptime", "Continuous UX"],
    action: "Keep it fresh",
  },
  {
    icon: Workflow,
    title: "Funnel Building",
    bullets: ["High-converting flows", "Lead magnets", "Marketing automation"],
    action: "Scale pipelines",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="section-padding bg-[#05070c]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-gray-100 mb-3">Services</p>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl">Full-funnel marketing partners</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-black/60 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
              >
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.14),transparent_35%)]" />
                <div className="relative space-y-5">
                  <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{service.title}</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      {service.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-white" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-4">
                    <span className="text-sm uppercase tracking-[0.14em] text-gray-100">{service.action}</span>
                    <button className="px-4 py-2 uppercase tracking-[0.1em] text-sm border border-white/20 text-white rounded-md hover:border-white hover:text-white transition-colors w-full sm:w-auto">
                      Details
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-gray-400">
          <span className="px-3 py-1 border border-white/10 rounded-full flex items-center gap-2">
            <PlayCircle className="w-4 h-4 text-white" /> Cinematics
          </span>
          <span className="px-3 py-1 border border-white/10 rounded-full flex items-center gap-2">
            <Headphones className="w-4 h-4 text-white" /> 3D Audio
          </span>
          <span className="px-3 py-1 border border-white/10 rounded-full flex items-center gap-2">
            <Radar className="w-4 h-4 text-white" /> Live events
          </span>
        </div>
      </div>
    </section>
  );
}

