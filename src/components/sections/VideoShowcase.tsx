"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, Smartphone, Film } from "lucide-react";

type VideoTab = "Social Media" | "Cinematic";
const tabs: VideoTab[] = ["Social Media", "Cinematic"];

/* ─── Social Media Panel ─── */
function SocialMediaPanel({ isInView }: { isInView: boolean }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Single featured vertical video */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="flex justify-center lg:justify-center"
      >
        <div className="relative group max-w-[300px] w-full">
          {/* Phone shell */}
          <div className="relative rounded-[2.5rem] border-2 border-white/12 overflow-hidden bg-black shadow-[0_32px_80px_rgba(0,0,0,0.65)]">
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: "9/19.5" }}>
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                poster="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=600&q=80"
                aria-label="Social media reel — vertical format"
              >
                <source
                  src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="absolute inset-0 bg-black/15" />
              {/* Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-14 h-1.5 bg-black/50 rounded-full" />
              {/* Play hint on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full bg-white/15 border border-white/30 flex items-center justify-center backdrop-blur-sm">
                  <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                </div>
              </div>
            </div>
          </div>
          <p className="mt-4 text-center text-[11px] uppercase tracking-[0.28em] text-white/30">
            Social Reel
          </p>
        </div>
      </motion.div>

      {/* Copy */}
      <motion.div
        initial={{ opacity: 0, x: 28 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col justify-center"
      >
        <div className="flex items-center gap-3 mb-8">
          <Smartphone className="w-5 h-5 text-white/35" strokeWidth={1.25} />
          <span className="text-[11px] uppercase tracking-[0.3em] text-white/35">
            9:16 / 1:1 / 4:5
          </span>
        </div>
        <h3 className="font-heading text-4xl sm:text-5xl text-white leading-[0.9] mb-6">
          Scroll-stopping
          <br />
          content
        </h3>
        <p className="text-white/50 leading-relaxed mb-10 max-w-md">
          Short-form reels, stories, and TikTok-native edits engineered for
          maximum watch time and conversion — crafted for Restaurants, Hotels,
          and Product brands.
        </p>
        <ul className="space-y-4 mb-10" aria-label="Social video features">
          {[
            "Multi-format: 9:16, 1:1, 4:5, 16:9",
            "On-brand captions and motion graphics",
            "Hook-first scriptwriting & storyboarding",
            "Ready-to-post asset packs per platform",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-4 text-sm text-white/40">
              <span className="h-px w-6 bg-white/20 flex-shrink-0 mt-[0.65em]" />
              {item}
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="inline-flex items-center justify-center self-start px-8 py-4 bg-white text-black text-[12px] font-semibold uppercase tracking-[0.2em] hover:bg-white/90 transition-colors duration-300"
        >
          Start a social project
        </a>
      </motion.div>
    </div>
  );
}

/* ─── Cinematic Panel ─── */
function CinematicPanel({ isInView }: { isInView: boolean }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Single featured widescreen video */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative overflow-hidden aspect-video group shadow-[0_32px_80px_rgba(0,0,0,0.65)]">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80"
            aria-label="Cinematic brand film — widescreen format"
          >
            <source
              src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/65 border border-white/22 px-3 py-1.5 backdrop-blur-sm">
              Brand Film
            </span>
          </div>
          <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-xs text-white/65 uppercase tracking-[0.18em]">
              Play reel
            </span>
            <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center">
              <Play className="w-3.5 h-3.5 text-white fill-white ml-0.5" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Copy */}
      <motion.div
        initial={{ opacity: 0, x: 28 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col justify-center"
      >
        <div className="flex items-center gap-3 mb-8">
          <Film className="w-5 h-5 text-white/35" strokeWidth={1.25} />
          <span className="text-[11px] uppercase tracking-[0.3em] text-white/35">
            4K / Cinema Grade / Dolby
          </span>
        </div>
        <h3 className="font-heading text-4xl sm:text-5xl text-white leading-[0.9] mb-6">
          Films that
          <br />
          move people
        </h3>
        <p className="text-white/50 leading-relaxed mb-10 max-w-md">
          Full-production cinematic brand films for Restaurants, Hotels, and
          luxury Product brands — scripted, directed, and colour-graded to
          world-class standards.
        </p>
        <ul className="space-y-4 mb-10" aria-label="Cinematic features">
          {[
            "Full pre-production: concept, script, storyboard",
            "4K RED Cinema or ARRI capture",
            "Professional colour grade and sound mix",
            "Theatrical & digital delivery formats",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-4 text-sm text-white/40">
              <span className="h-px w-6 bg-white/20 flex-shrink-0 mt-[0.65em]" />
              {item}
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="inline-flex items-center justify-center self-start px-8 py-4 bg-white text-black text-[12px] font-semibold uppercase tracking-[0.2em] hover:bg-white/90 transition-colors duration-300"
        >
          Book a production
        </a>
      </motion.div>
    </div>
  );
}

/* ─── Main export ─── */
export default function VideoShowcase() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [activeTab, setActiveTab] = useState<VideoTab>("Social Media");

  return (
    <section
      id="film"
      ref={ref}
      aria-label="Film and video production"
      className="bg-black section-pad overflow-hidden"
    >
      {/* Header */}
      <div className="inner mb-16 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-10"
        >
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-white/30 mb-5">
              Film &amp; Motion
            </p>
            <h2 className="font-heading text-6xl sm:text-7xl md:text-8xl text-white leading-[0.87]">
              Cinematic
              <br />
              <em className="not-italic text-white/30">production</em>
            </h2>
          </div>

          {/* Tab switcher */}
          <div className="flex gap-3 flex-wrap" role="tablist" aria-label="Video type">
            {tabs.map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                onClick={() => setActiveTab(tab)}
                className={`tab-pill${activeTab === tab ? " active" : ""}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Panel */}
      <div className="inner">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {activeTab === "Social Media" ? (
              <SocialMediaPanel isInView={isInView} />
            ) : (
              <CinematicPanel isInView={isInView} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
