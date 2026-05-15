"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const values = [
  {
    number: "01",
    title: "Intentional",
    desc: "Every visual decision is deliberate — no filler, no compromise, no shortcuts.",
  },
  {
    number: "02",
    title: "Elevated",
    desc: "We work at the intersection of art and commerce to craft images that move people.",
  },
  {
    number: "03",
    title: "Precise",
    desc: "Technical mastery meets creative vision in every project we produce together.",
  },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      aria-label="About Gamma Studio"
      className="bg-[#050709] section-pad overflow-hidden"
    >
      <div className="inner">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1554080353-a576cf803bda?auto=format&fit=crop&w=800&q=85"
                alt="Gamma Studio photographer — behind the lens on location"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.4,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="absolute -bottom-6 right-0 lg:-right-8 bg-[#0a0c12] border border-white/[0.07] p-6 min-w-[160px]"
              aria-label="12 years of creative excellence"
            >
              <p className="font-heading text-4xl text-white leading-none">
                12+
              </p>
              <p className="text-[10px] uppercase tracking-[0.28em] text-white/35 mt-2">
                Years creating
              </p>
            </motion.div>
          </motion.div>

          {/* Content column */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="pt-8 lg:pt-0"
          >
            <p className="text-[11px] uppercase tracking-[0.38em] text-white/35 mb-6">
              About
            </p>
            <h2 className="font-heading text-5xl sm:text-6xl text-white leading-[0.88] mb-8">
              Where vision
              <br />
              meets craft
            </h2>
            <p className="text-white/55 leading-relaxed mb-5">
              Gamma Studio is a premium creative agency founded on a singular
              belief: exceptional photography and film have the power to
              transform brands into cultural icons.
            </p>
            <p className="text-white/40 leading-relaxed mb-14 text-sm">
              We work with a curated roster of luxury brands, fashion houses,
              and visionary entrepreneurs who understand that visual excellence
              isn&apos;t optional — it&apos;s the foundation of lasting impact.
            </p>

            {/* Values list */}
            <div className="space-y-7" role="list" aria-label="Studio values">
              {values.map((v, i) => (
                <motion.div
                  key={v.number}
                  role="listitem"
                  initial={{ opacity: 0, x: 18 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + i * 0.1,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="flex gap-6 border-t border-white/[0.06] pt-6"
                >
                  <span className="text-sm uppercase tracking-[0.2em] text-white/20 font-mono tabular-nums pt-0.5 shrink-0">
                    {v.number}
                  </span>
                  <div>
                    <p className="text-white font-medium mb-1.5">{v.title}</p>
                    <p className="text-white/40 text-sm leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
