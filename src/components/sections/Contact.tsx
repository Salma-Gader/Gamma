"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  project: string;
  message: string;
};

const inputClass =
  "w-full px-0 py-3.5 bg-transparent border-b border-white/12 text-white text-sm placeholder:text-white/20 focus:border-white/45 outline-none transition-colors duration-300";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", project: "", message: "" });
  };

  return (
    <section
      id="contact"
      ref={ref}
      aria-label="Contact Gamma Studio"
      className="bg-[#050709] section-pad overflow-hidden"
    >
      <div className="inner">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16 xl:gap-24">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-[11px] uppercase tracking-[0.38em] text-white/35 mb-6">
              Contact
            </p>
            <h2 className="font-heading text-5xl sm:text-6xl text-white leading-[0.88] mb-8">
              Start a
              <br />
              project
            </h2>
            <p className="text-white/50 leading-relaxed mb-14 max-w-sm text-sm">
              We take on a limited number of projects each quarter to ensure
              every client receives our full focus and creative energy.
            </p>

            <address className="not-italic space-y-7">
              <div className="flex gap-5 items-start">
                <span className="text-sm uppercase tracking-[0.2em] text-white/20 font-mono tabular-nums pt-0.5 shrink-0">
                  01
                </span>
                <div>
                  <p className="text-white text-sm font-medium mb-1">Email</p>
                  <a
                    href="mailto:info@gammastudio.co"
                    className="text-white/40 text-sm hover:text-white/70 transition-colors duration-300 hover-line"
                  >
                    info@gammastudio.co
                  </a>
                </div>
              </div>
              <div className="flex gap-5 items-start">
                <span className="text-sm uppercase tracking-[0.2em] text-white/20 font-mono tabular-nums pt-0.5 shrink-0">
                  02
                </span>
                <div>
                  <p className="text-white text-sm font-medium mb-1">Studio</p>
                  <p className="text-white/40 text-sm">
                    Available globally — primary base in London.
                  </p>
                </div>
              </div>
            </address>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {submitted ? (
              <div className="flex flex-col justify-center py-16">
                <p className="font-heading text-5xl text-white mb-4">
                  Thank you.
                </p>
                <p className="text-white/45 text-sm">
                  We&apos;ll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-8"
                noValidate
                aria-label="Project enquiry form"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-[10px] uppercase tracking-[0.3em] text-white/30 mb-3"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={update("name")}
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-[10px] uppercase tracking-[0.3em] text-white/30 mb-3"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={update("email")}
                      required
                      autoComplete="email"
                      placeholder="your@email.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-project"
                    className="block text-[10px] uppercase tracking-[0.3em] text-white/30 mb-3"
                  >
                    Project type
                  </label>
                  <input
                    type="text"
                    id="contact-project"
                    name="project"
                    value={formData.project}
                    onChange={update("project")}
                    placeholder="Brand photography, campaign, film…"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-[10px] uppercase tracking-[0.3em] text-white/30 mb-3"
                  >
                    Brief
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={update("message")}
                    required
                    rows={4}
                    placeholder="Tell us about your project…"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-[11px] font-semibold uppercase tracking-[0.2em] hover:bg-white/90 transition-colors duration-300"
                  >
                    Send enquiry
                    <ArrowRight
                      className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300"
                      strokeWidth={2}
                    />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
