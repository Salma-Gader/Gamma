"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const team = [
  { name: "Maya Collins", role: "Growth Strategist", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80" },
  { name: "Alina Duarte", role: "Executive Producer", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80" },
  { name: "Chris Redfield", role: "Performance Lead", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80" },
  { name: "Mia Winters", role: "Content Director", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80" },
  { name: "Karl Heisenberg", role: "Technical Producer", img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80" },
  { name: "Donna Beneviento", role: "Design Lead", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80" },
];

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" ref={ref} className="section-padding bg-gradient-to-b from-[#05070c] to-[#0b0f18]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-amber-300 mb-3">Team</p>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-4">Meet the crew</h2>
          <p className="text-base sm:text-lg text-gray-300">
            A multidisciplinary team crafting campaigns from strategy through production. We blend creative, technical, and operational rigor to ship work that performs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_16px_40px_rgba(0,0,0,0.4)]"
            >
              <div className="relative h-60">
                <Image src={member.img} alt={member.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/70" />
              </div>
              <div className="p-5 space-y-1">
                <p className="text-lg font-semibold text-white">{member.name}</p>
                <p className="text-sm text-amber-200 uppercase tracking-[0.12em]">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

