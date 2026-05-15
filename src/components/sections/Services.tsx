"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Camera, Film, Palette, LayoutTemplate, Globe, Star } from "lucide-react";

const services = [
  {
    icon: Camera,
    number: "01",
    title: "Brand Photography",
    description:
      "Cinematic portraits, product photography, and editorial campaigns that position your brand as a category leader.",
  },
  {
    icon: Film,
    number: "02",
    title: "Video Production",
    description:
      "From brand films to social reels — scripted, shot, and edited to stop the scroll and drive action.",
  },
  {
    icon: Palette,
    number: "03",
    title: "Creative Direction",
    description:
      "Visual identity, mood boards, and art direction that unify every touchpoint into one cohesive aesthetic.",
  },
  {
    icon: LayoutTemplate,
    number: "04",
    title: "Campaign Design",
    description:
      "Full-scale marketing campaigns with cohesive visuals, copy, and strategy built to captivate and convert.",
  },
  {
    icon: Globe,
    number: "05",
    title: "Web & Digital",
    description:
      "High-performance websites and landing pages designed with the same premium aesthetic as your brand.",
  },
  {
    icon: Star,
    number: "06",
    title: "Luxury Retainer",
    description:
      "An embedded creative partner — monthly shoots, content libraries, and on-call production for elite brands.",
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      ref={ref}
      aria-label="Creative services"
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
            Services
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl text-white leading-[0.88] max-w-xl">
              What we
              <br />
              create
            </h2>
            <p className="text-white/45 max-w-sm text-base leading-relaxed">
              A full suite of premium creative services — designed to elevate
              brands that don&apos;t settle for ordinary.
            </p>
          </div>
        </motion.div>

        {/* Service grid — borderless panel layout */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/[0.06]"
          role="list"
          aria-label="Services list"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.number}
                role="listitem"
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.07,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="group relative bg-[#0a0c12] p-8 md:p-10 border-b border-r border-white/[0.06] hover:bg-white/[0.025] transition-colors duration-400 cursor-default"
              >
                {/* Number + icon row */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-sm uppercase tracking-[0.25em] text-white/20 font-mono tabular-nums">
                    {service.number}
                  </span>
                  <Icon
                    className="w-[18px] h-[18px] text-white/18 group-hover:text-white/45 transition-colors duration-400"
                    strokeWidth={1.25}
                    aria-hidden="true"
                  />
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl text-white mb-4 leading-tight">
                  {service.title}
                </h3>
                <p className="text-white/42 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Animated bottom line on hover */}
                <div
                  className="mt-8 h-px w-0 bg-white/20 group-hover:w-full transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                  aria-hidden="true"
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
