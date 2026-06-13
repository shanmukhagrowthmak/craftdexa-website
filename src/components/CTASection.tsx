"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Lock, Globe } from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const trust = [
  { icon: Zap, label: "Fast delivery, zero compromise" },
  { icon: Lock, label: "NDAs & IP protection standard" },
  { icon: Globe, label: "Remote-first, globally trusted" },
];

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="contact" ref={ref} className="py-28 px-6" style={{ background: "#0A0E1A" }}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative rounded-3xl overflow-hidden p-12 lg:p-20"
        >
          {/* Gradient background */}
          <div className="gradient-cta absolute inset-0" />

          {/* Content */}
          <div className="relative z-10">
            <p className="text-xs tracking-[0.2em] mb-6" style={{ fontFamily: "var(--font-space-mono)", color: "rgba(240,238,248,0.7)" }}>
              READY TO BUILD?
            </p>
            <h2
              className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
              style={{ fontFamily: "var(--font-syne)", color: "#F0EEF8" }}
            >
              Let&apos;s build your next product.
            </h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-inter)", color: "rgba(240,238,248,0.75)" }}>
              Tell us what you&apos;re building. We&apos;ll tell you how fast we can ship it.
            </p>

            <a
              href="mailto:craftdexa@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300"
              style={{
                background: "#F0EEF8",
                color: "#0A0E1A",
                fontFamily: "var(--font-inter)",
                textDecoration: "none",
                boxShadow: "0 0 60px rgba(0,0,0,0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 0 80px rgba(0,0,0,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 0 60px rgba(0,0,0,0.3)";
              }}
            >
              Start a Conversation →
            </a>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
              {trust.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon size={14} color="rgba(240,238,248,0.6)" />
                  <span style={{ fontFamily: "var(--font-space-mono)", fontSize: "0.7rem", letterSpacing: "0.1em", color: "rgba(240,238,248,0.6)" }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
