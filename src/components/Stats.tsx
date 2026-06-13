"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const stats = [
  { value: 200, suffix: "+", label: "Projects Delivered", sub: "Across 12+ industries" },
  { value: 98, suffix: "%", label: "Client Satisfaction", sub: "Based on post-project surveys" },
  { value: 4, suffix: "wk", label: "Avg MVP Delivery", sub: "From kickoff to live product" },
  { value: 6, suffix: "+", label: "Years in Product", sub: "Building since 2018" },
];

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [active, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 px-6" style={{ background: "#131929", borderTop: "1px solid #1E2A45", borderBottom: "1px solid #1E2A45" }}>
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="flex flex-col items-center text-center"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div
              className="text-5xl lg:text-6xl font-bold mb-2 tabular-nums"
              style={{ fontFamily: "var(--font-syne)", color: i % 2 === 0 ? "#6C63FF" : "#F5A623" }}
            >
              <CountUp target={stat.value} suffix={stat.suffix} active={inView} />
            </div>
            <p className="text-sm font-semibold mb-1" style={{ fontFamily: "var(--font-inter)", color: "#F0EEF8" }}>
              {stat.label}
            </p>
            <p className="text-xs" style={{ fontFamily: "var(--font-inter)", color: "#8B90A7" }}>
              {stat.sub}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
