"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

type CategoryData = {
  name: string;
  description: string;
  videoPoster: string;
  images: { src: string; alt: string; tag: string }[];
};

const categories: CategoryData[] = [
  {
    name: "Restaurants",
    description:
      "Atmospheric dining spaces, hero dishes, and behind-the-pass moments that make guests hungry before they arrive.",
    videoPoster:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=85",
    images: [
      {
        src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85",
        alt: "Restaurant interior — warm ambient lighting and premium seating",
        tag: "Interior",
      },
      {
        src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=85",
        alt: "Gourmet food photography — hero dish styling",
        tag: "Food",
      },
      {
        src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1200&q=85",
        alt: "Bar and cocktail photography — atmospheric evening scene",
        tag: "Atmosphere",
      },
    ],
  },
  {
    name: "Hotels",
    description:
      "Sweeping architecture, refined interiors, and golden-hour amenities — imagery that fills rooms before guests check in.",
    videoPoster:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=85",
    images: [
      {
        src: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=85",
        alt: "Hotel lobby — grand architecture and luxury finishes",
        tag: "Lobby",
      },
      {
        src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=900&q=85",
        alt: "Infinity pool — resort view at golden hour",
        tag: "Amenities",
      },
      {
        src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85",
        alt: "Hotel exterior — architectural photography at dusk",
        tag: "Exterior",
      },
    ],
  },
  {
    name: "Portrait",
    description:
      "Natural light and studied composition that reveal character — for brands, executives, creatives, and talent.",
    videoPoster:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=85",
    images: [
      {
        src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85",
        alt: "Executive portrait — confident natural light",
        tag: "Executive",
      },
      {
        src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=85",
        alt: "Editorial portrait — fashion and lifestyle",
        tag: "Editorial",
      },
      {
        src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1200&q=85",
        alt: "Creative portrait — artistic studio lighting",
        tag: "Creative",
      },
    ],
  },
  {
    name: "Product",
    description:
      "Precision still life and lifestyle imagery that makes products impossible to scroll past — from watches to cosmetics.",
    videoPoster:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",
    images: [
      {
        src: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=900&q=85",
        alt: "Luxury cosmetics — beauty product still life",
        tag: "Beauty",
      },
      {
        src: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=900&q=85",
        alt: "Premium sneaker — lifestyle product photography",
        tag: "Fashion",
      },
      {
        src: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1200&q=85",
        alt: "Commercial product photography — minimalist composition",
        tag: "Still Life",
      },
    ],
  },
  {
    name: "Architecture",
    description:
      "Bold structures, spatial geometry, and light-filled interiors — photography that reveals the soul of built space.",
    videoPoster:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=900&q=85",
    images: [
      {
        src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=900&q=85",
        alt: "Modern architectural exterior — geometric facade",
        tag: "Exterior",
      },
      {
        src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=85",
        alt: "Interior architecture — open plan space with natural light",
        tag: "Interior",
      },
      {
        src: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1200&q=85",
        alt: "Architectural detail — structural beauty and material texture",
        tag: "Detail",
      },
    ],
  },
];

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "12+", label: "Years of Excellence" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "40+", label: "Awards Won" },
];

function CategoryBlock({
  category,
  index,
}: {
  category: CategoryData;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref}>
      {/* Category header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-5 pt-14 border-t border-white/[0.06]"
      >
        <div>
          <h3 className="font-heading text-3xl sm:text-4xl text-white tracking-wide mb-2">
            {category.name}
          </h3>
          <p className="text-white/40 text-sm leading-relaxed max-w-md">
            {category.description}
          </p>
        </div>
      </motion.div>

      {/* Grid: tall video left + images right */}
      <div
        className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3"
        style={{ gridAutoRows: "clamp(190px, 22vw, 330px)" }}
      >
        {/* Featured vertical video — spans 2 rows */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{
            duration: 0.75,
            delay: index * 0.04,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="relative overflow-hidden group col-span-1 row-span-2"
        >
          <video
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            autoPlay
            loop
            muted
            playsInline
            poster={category.videoPoster}
            aria-label={`${category.name} featured video`}
          >
            <source
              src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black/15 group-hover:bg-black/35 transition-colors duration-500" />
          <div className="absolute bottom-4 left-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/85 px-3 py-1.5 border border-white/28 backdrop-blur-sm">
              {category.name}
            </span>
          </div>
        </motion.div>

        {/* Supporting images */}
        {category.images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 0.7,
              delay: index * 0.04 + (i + 1) * 0.08,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className={`relative overflow-hidden group cursor-pointer ${
              i === 2 ? "col-span-2 row-span-1" : "col-span-1 row-span-1"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/38 transition-colors duration-500" />
            <div className="absolute bottom-4 left-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/85 px-3 py-1.5 border border-white/28 backdrop-blur-sm">
                {img.tag}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function PhotographyShowcase() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="photography"
      ref={ref}
      aria-label="Our Work — photography and video showcase"
      className="bg-[#050709] section-pad overflow-hidden"
    >
      {/* Section header */}
      <div className="inner mb-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-10"
        >
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-white/30 mb-5">
              Our Work
            </p>
            <h2 className="font-heading text-6xl sm:text-7xl md:text-8xl text-white leading-[0.87]">
              Visual
              <br />
              <em className="not-italic text-white/35">storytelling</em>
            </h2>
          </div>

          <div className="max-w-sm">
            <p className="text-white/45 text-base leading-relaxed mb-7">
              From intimate restaurant portraits to sweeping hotel campaigns —
              every frame crafted with intention and artistic precision.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 text-[12px] text-white uppercase tracking-[0.24em] hover-line group"
              aria-label="Commission a shoot"
            >
              Commission a shoot
              <ArrowRight
                className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300"
                strokeWidth={1.5}
              />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Stacked category blocks */}
      <div className="inner">
        {categories.map((cat, i) => (
          <CategoryBlock key={cat.name} category={cat} index={i} />
        ))}
      </div>

      {/* Stats row */}
      <div className="inner mt-20 md:mt-24">
        <div
          className="grid grid-cols-2 md:grid-cols-4 border border-white/[0.06]"
          role="list"
          aria-label="Agency statistics"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              role="listitem"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.65,
                delay: 0.4 + i * 0.09,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="px-8 py-12 text-center border-r border-b border-white/[0.06] last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r md:[&:nth-child(4)]:border-r-0 [&:nth-child(3)]:border-b-0 [&:nth-child(4)]:border-b-0"
            >
              <p className="font-heading text-5xl md:text-6xl text-white mb-2">
                {stat.value}
              </p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
