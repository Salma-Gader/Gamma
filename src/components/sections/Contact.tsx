"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Stub for handling form submission.
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "info@agency.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "123 Marketing St, City, State 12345",
    },
  ];

  return (
    <section id="contact" ref={ref} className="section-padding bg-gradient-to-b from-[#0b0f18] to-[#05070c]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-gray-100 mb-3">Contact us</p>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-4">Send a quote request</h2>
          <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Tell us about your goals—traffic, revenue, or retention. We’ll scope the funnel, channels, and creative to get you there.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-white/15 bg-white/5 text-white rounded-lg focus:ring-2 focus:ring-white focus:border-transparent outline-none transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-white/15 bg-white/5 text-white rounded-lg focus:ring-2 focus:ring-white focus:border-transparent outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-white/15 bg-white/5 text-white rounded-lg focus:ring-2 focus:ring-white focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Your message"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-white to-gray-300 text-black font-semibold rounded-lg shadow-[0_12px_35px_rgba(255,255,255,0.18)] transition-shadow flex items-center justify-center"
              >
                Send message
                <Send className="ml-2 w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                <div className="w-12 h-12 bg-gradient-to-r from-white to-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-black" />
                </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {info.label}
                    </h3>
                    <p className="text-gray-300">{info.value}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

