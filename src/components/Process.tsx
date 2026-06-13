"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "Deep-dive into your goals, users, and market. We define scope, set success metrics, and map out the exact roadmap.",
    detail: "2–3 days",
  },
  {
    num: "02",
    title: "Design",
    desc: "High-fidelity UI/UX that converts. Every screen is reviewed with you before a single line of code is written.",
    detail: "1–2 weeks",
  },
  {
    num: "03",
    title: "Build",
    desc: "Full-stack engineering with weekly demos. You see real progress every Friday — no black-box development.",
    detail: "2–4 weeks",
  },
  {
    num: "04",
    title: "Launch",
    desc: "Deployment, QA, analytics setup, and a growth plan. We don't disappear after go-live.",
    detail: "Ongoing",
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="process" ref={ref} className="py-28 px-6" style={{ background: "#0A0E1A" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.2em] mb-4" style={{ fontFamily: "var(--font-space-mono)", color: "#6C63FF" }}>
            HOW WE WORK
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight" style={{ fontFamily: "var(--font-syne)", color: "#F0EEF8" }}>
            Four steps to shipped.
          </h2>
        </motion.div>

        {/* Desktop: horizontal */}
        <div className="hidden lg:grid grid-cols-4 gap-0 relative">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
            className="absolute top-8 left-[12.5%] right-[12.5%] h-px"
            style={{ background: "linear-gradient(90deg, #6C63FF, #F5A623)", transformOrigin: "left" }}
          />
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: EASE }}
              className="flex flex-col items-center text-center px-6"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-sm font-bold mb-6 transition-all duration-300 z-10"
                style={{
                  fontFamily: "var(--font-space-mono)",
                  background: hovered === i ? "#F5A623" : "#131929",
                  border: `2px solid ${hovered === i ? "#F5A623" : "#6C63FF"}`,
                  color: hovered === i ? "#0A0E1A" : "#6C63FF",
                  boxShadow: hovered === i ? "0 0 30px rgba(245,166,35,0.4)" : "none",
                }}
              >
                {step.num}
              </div>
              <h3 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-syne)", color: "#F0EEF8" }}>
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed mb-3" style={{ fontFamily: "var(--font-inter)", color: "#8B90A7" }}>
                {step.desc}
              </p>
              <span className="text-xs" style={{ fontFamily: "var(--font-space-mono)", color: "#6C63FF" }}>
                {step.detail}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Mobile: vertical */}
        <div className="lg:hidden flex flex-col gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: EASE }}
              className="flex gap-6 pb-10 relative"
            >
              {i < steps.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-px" style={{ background: "#1E2A45" }} />
              )}
              <div
                className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold z-10"
                style={{
                  fontFamily: "var(--font-space-mono)",
                  background: "#131929",
                  border: "2px solid #6C63FF",
                  color: "#6C63FF",
                }}
              >
                {step.num}
              </div>
              <div className="pt-2">
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "var(--font-syne)", color: "#F0EEF8" }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed mb-2" style={{ fontFamily: "var(--font-inter)", color: "#8B90A7" }}>
                  {step.desc}
                </p>
                <span className="text-xs" style={{ fontFamily: "var(--font-space-mono)", color: "#6C63FF" }}>
                  {step.detail}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
