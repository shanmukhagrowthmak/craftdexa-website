"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const proofPoints = [
  { title: "One team, full stack", desc: "Design, engineering, and growth — no handoffs between vendors." },
  { title: "Weekly progress demos", desc: "You see working software every Friday. No surprises at the end." },
  { title: "Fixed-scope pricing", desc: "Scoped, quoted, and delivered. No runaway bills." },
  { title: "Post-launch support", desc: "We stay on for 30 days after go-live, no extra charge." },
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-28 px-6" style={{ background: "#080C18" }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <p className="text-xs tracking-[0.2em] mb-6" style={{ fontFamily: "var(--font-space-mono)", color: "#6C63FF" }}>
            WHY CRAFTDEXA
          </p>
          <h2
            className="text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-6"
            style={{ fontFamily: "var(--font-syne)", color: "#F0EEF8" }}
          >
            They come back because{" "}
            <span style={{ color: "#F5A623" }}>we give a damn.</span>
          </h2>
          <p className="text-lg leading-relaxed" style={{ fontFamily: "var(--font-inter)", color: "#8B90A7" }}>
            Most agencies optimize for their pipeline. We optimize for your outcome.
            Every project gets a dedicated team, direct communication, and obsessive
            attention to craft.
          </p>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
          className="rounded-2xl p-8 lg:p-10"
          style={{ background: "#131929", border: "1px solid #1E2A45" }}
        >
          <div className="flex flex-col gap-6">
            {proofPoints.map((pt, i) => (
              <motion.div
                key={pt.title}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: EASE }}
                className="flex gap-4"
              >
                <div
                  className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                  style={{ background: "rgba(108,99,255,0.15)", border: "1px solid rgba(108,99,255,0.3)" }}
                >
                  <Check size={12} color="#6C63FF" />
                </div>
                <div>
                  <p className="font-semibold mb-1" style={{ fontFamily: "var(--font-syne)", color: "#F0EEF8", fontSize: "0.95rem" }}>
                    {pt.title}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-inter)", color: "#8B90A7" }}>
                    {pt.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
