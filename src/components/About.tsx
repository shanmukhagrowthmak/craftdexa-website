"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="studio" ref={ref} className="py-28 px-6" style={{ background: "#0A0E1A" }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <p className="text-xs tracking-[0.2em] mb-6" style={{ fontFamily: "var(--font-space-mono)", color: "#6C63FF" }}>
            WHO WE ARE
          </p>
          <h2
            className="text-4xl lg:text-5xl xl:text-6xl leading-[1.1] tracking-tight mb-8"
            style={{ fontFamily: "var(--font-syne)", fontWeight: 800, color: "#F0EEF8" }}
          >
            Not an agency.{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              A Craft Engine.
              <motion.span
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
                style={{
                  position: "absolute",
                  bottom: "-4px",
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: "#F5A623",
                  transformOrigin: "left",
                  borderRadius: "2px",
                }}
              />
            </span>
          </h2>
          <p className="text-lg leading-relaxed mb-6" style={{ fontFamily: "var(--font-inter)", color: "#8B90A7" }}>
            CraftDexa is a full-service digital product studio built for founders
            who ship fast and think big. We combine design, engineering, and
            growth strategy into one tight-knit team — no vendor chains, no
            communication gaps.
          </p>
          <p className="text-lg leading-relaxed" style={{ fontFamily: "var(--font-inter)", color: "#8B90A7" }}>
            From a napkin sketch to a live product in weeks. That&apos;s the CraftDexa standard.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
          className="grid grid-cols-2 gap-4"
        >
          {[
            { label: "Founded", value: "2026", sub: "Built from day one to scale" },
            { label: "Team", value: "Lean", sub: "Senior specialists only" },
            { label: "Focus", value: "Product", sub: "Strategy → Design → Code" },
            { label: "Promise", value: "Ship", sub: "Real deadlines, real delivery" },
          ].map((card) => (
            <div key={card.label} className="p-6 rounded-2xl" style={{ background: "#131929", border: "1px solid #1E2A45" }}>
              <p className="text-xs tracking-[0.15em] mb-2" style={{ fontFamily: "var(--font-space-mono)", color: "#8B90A7" }}>
                {card.label}
              </p>
              <p className="text-2xl font-bold mb-1" style={{ fontFamily: "var(--font-syne)", color: "#F0EEF8" }}>
                {card.value}
              </p>
              <p className="text-sm" style={{ fontFamily: "var(--font-inter)", color: "#8B90A7" }}>
                {card.sub}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
