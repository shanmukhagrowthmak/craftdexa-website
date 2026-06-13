"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Monitor, Layers, Smartphone, Bot, Rocket, TrendingUp } from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const services = [
  {
    num: "01",
    icon: Monitor,
    title: "Web Design & Dev",
    desc: "Pixel-perfect, conversion-optimised sites built with Next.js and modern CSS. Fast, accessible, and beautiful.",
    tags: ["Next.js", "Tailwind", "Framer"],
  },
  {
    num: "02",
    icon: Layers,
    title: "Bubble Development",
    desc: "Full-featured no-code apps with complex workflows, user auth, payments, and real-time data — shipped fast.",
    tags: ["Bubble", "No-Code", "Zapier"],
  },
  {
    num: "03",
    icon: Smartphone,
    title: "App Development",
    desc: "Cross-platform mobile apps for iOS and Android with native performance and polished UX.",
    tags: ["React Native", "Expo", "Swift"],
  },
  {
    num: "04",
    icon: Bot,
    title: "AI SaaS Development",
    desc: "GPT-powered products, RAG pipelines, embedding search, and custom AI agents built for real business outcomes.",
    tags: ["OpenAI", "LangChain", "Pinecone"],
  },
  {
    num: "05",
    icon: Rocket,
    title: "MVP Development",
    desc: "From concept to live product in 4 weeks. We ruthlessly scope, design, and ship what matters most.",
    tags: ["Sprint", "Lean", "Ship Fast"],
  },
  {
    num: "06",
    icon: TrendingUp,
    title: "Digital Marketing",
    desc: "SEO, paid ads, content strategy, and funnel optimisation — growth built directly into the product.",
    tags: ["SEO", "Paid Ads", "Analytics"],
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="services" ref={ref} className="py-28 px-6" style={{ background: "#080C18" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.2em] mb-4" style={{ fontFamily: "var(--font-space-mono)", color: "#6C63FF" }}>
            WHAT WE BUILD
          </p>
          <h2
            className="text-4xl lg:text-5xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-syne)", color: "#F0EEF8" }}
          >
            Services that ship.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.num}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                className="group relative p-8 rounded-2xl transition-all duration-300"
                style={{ background: "#131929", border: "1px solid #1E2A45" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(108,99,255,0.5)";
                  e.currentTarget.style.boxShadow = "0 0 40px rgba(108,99,255,0.08)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#1E2A45";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <span
                  className="absolute top-6 right-6 text-4xl font-bold"
                  style={{ fontFamily: "var(--font-syne)", color: "rgba(240,238,248,0.06)" }}
                >
                  {svc.num}
                </span>
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(108,99,255,0.12)", border: "1px solid rgba(108,99,255,0.2)" }}
                >
                  <Icon size={20} color="#6C63FF" />
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-syne)", color: "#F0EEF8" }}
                >
                  {svc.title}
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ fontFamily: "var(--font-inter)", color: "#8B90A7" }}>
                  {svc.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs"
                      style={{
                        fontFamily: "var(--font-space-mono)",
                        background: "rgba(30,42,69,0.8)",
                        color: "#8B90A7",
                        border: "1px solid #1E2A45",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
