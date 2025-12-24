"use client";

import { useCallback, useEffect, useRef } from "react";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const heroVideo = "/videos/heroVideo.mp4";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const ensurePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    // Some browsers require explicitly setting muted property before play
    video.muted = true;

    const playPromise = video.play();
    if (playPromise && typeof playPromise.then === "function") {
      playPromise.catch(() => {
        /* ignore autoplay block; user interaction will start it */
      });
    }
  }, []);

  useEffect(() => {
    ensurePlay();
    const handleClick = () => ensurePlay();
    window.addEventListener("click", handleClick, { once: true });
    return () => window.removeEventListener("click", handleClick);
  }, [ensurePlay]);

  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center justify-center lg:justify-end overflow-hidden text-gray-100 bg-black"
    >
      <div className="absolute inset-0 overflow-hidden" id="home-video">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          onCanPlay={ensurePlay}
          onLoadedData={ensurePlay}
          crossOrigin="anonymous"
          preload="auto"
          aria-hidden="true"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/65 to-black" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_30%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.12),transparent_25%)]" />
      <div className="absolute inset-0 grain pointer-events-none" />

      <div className="w-full max-w-5xl ml-0 lg:ml-auto px-4 sm:px-6 lg:px-12 pt-24 pb-14 md:pt-28 relative z-10">
        <div className="max-w-5xl space-y-8 text-center lg:text-left">
          <div className="space-y-3">
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-gray-300">Gamma marketing collective</p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-heading text-4xl sm:text-6xl md:text-7xl xl:text-8xl leading-[0.95]"
            >
              Grow online sales
              <br />
              <span className="text-white drop-shadow-[0_8px_30px_rgba(255,255,255,0.28)]">
                Scale your business by 500%+
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto lg:mx-0"
            >
              Let us design the funnel, ads, content, and onsite experience that turn browsers into buyers. Ecommerce, SEO, paid social, video, and web — all under one roof.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-white via-gray-100 to-gray-300 text-black font-semibold uppercase tracking-[0.12em] rounded-md shadow-[0_15px_45px_rgba(255,255,255,0.18)] w-full sm:w-auto"
            >
              Our services
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-semibold uppercase tracking-[0.12em] rounded-md backdrop-blur w-full sm:w-auto"
            >
              Send a quote
            </motion.a>
          </motion.div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pt-6">
            <div className="h-px w-20 sm:w-16 bg-gradient-to-r from-white to-transparent" />
            <div className="flex flex-wrap justify-center sm:justify-start gap-3 text-[11px] sm:text-xs uppercase tracking-[0.2em] text-gray-300">
              <span>Google Ads</span>
              <span>SEO</span>
              <span>Social Media</span>
              <span>Video</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

