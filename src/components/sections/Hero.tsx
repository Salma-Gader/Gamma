"use client";

import { useCallback, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const heroVideo = "/videos/heroVideo.mp4";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const ensurePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    const p = video.play();
    if (p?.catch) p.catch(() => {});
  }, []);

  useEffect(() => {
    ensurePlay();
    window.addEventListener("click", ensurePlay, { once: true });
    return () => window.removeEventListener("click", ensurePlay);
  }, [ensurePlay]);

  return (
    <section
      id="home"
      aria-label="Hero — Gamma Studio premium photography and creative agency"
      className="relative h-screen min-h-[640px] w-full flex items-end overflow-hidden bg-black grain"
    >
      {/* Background video — fixed in place, no parallax */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          onCanPlay={ensurePlay}
          onLoadedData={ensurePlay}
          preload="auto"
          aria-hidden="true"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-transparent to-transparent" />
      </div>

      {/* Content — bottom-left cinematic */}
      <div className="relative z-10 w-full inner pb-20 md:pb-28 lg:pb-32">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-[11px] uppercase tracking-[0.45em] text-white/40 mb-6"
          >
            Gamma Studio — Visual Storytelling
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 42 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-6xl sm:text-7xl md:text-[5.5rem] xl:text-[clamp(5rem,10vw,9rem)] leading-[0.87] text-white mb-8"
          >
            We craft
            <br />
            <em className="not-italic text-white/45">cinematic</em>
            <br />
            narratives
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-white/55 max-w-lg mb-12 leading-relaxed"
          >
            Premium photography, cinematic video, and visual campaigns for
            brands that demand excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#photography"
              className="inline-flex items-center justify-center px-9 py-4 bg-white text-black text-[12px] font-semibold uppercase tracking-[0.22em] hover:bg-white/88 transition-colors duration-350 w-full sm:w-auto"
            >
              View our work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-9 py-4 border border-white/22 text-white text-[12px] font-semibold uppercase tracking-[0.22em] hover:border-white/55 hover:bg-white/[0.05] transition-all duration-350 w-full sm:w-auto"
            >
              Book a session
            </a>
          </motion.div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.8 }}
        className="absolute bottom-8 right-8 md:right-14 flex flex-col items-center gap-3 text-white/25"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" strokeWidth={1} />
        </motion.div>
        <span className="text-xs uppercase tracking-[0.35em] [writing-mode:vertical-lr]">
          Scroll
        </span>
      </motion.div>

      {/* Vertical side label — desktop only */}
      <div
        className="absolute right-8 md:right-14 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-5"
        aria-hidden="true"
      >
        <div className="h-14 w-px bg-gradient-to-b from-transparent via-white/18 to-transparent" />
        <span className="text-xs uppercase tracking-[0.35em] text-white/25 [writing-mode:vertical-lr]">
          Photography &amp; Film
        </span>
        <div className="h-14 w-px bg-gradient-to-b from-transparent via-white/18 to-transparent" />
      </div>
    </section>
  );
}
