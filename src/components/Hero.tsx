"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

function NodeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame: number;
    let w = 0, h = 0;
    const nodes: { x: number; y: number; vx: number; vy: number; r: number; opacity: number }[] = [];
    const COUNT = 55;

    const resize = () => {
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w;
      canvas.height = h;
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    for (let i = 0; i < COUNT; i++) {
      nodes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > w) node.vx *= -1;
        if (node.y < 0 || node.y > h) node.vy *= -1;
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(108,99,255,${(1 - dist / 140) * 0.18})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
      for (const node of nodes) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(108,99,255,${node.opacity})`;
        ctx.fill();
        if (node.r > 2.5) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.r * 0.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(245,166,35,${node.opacity * 0.7})`;
          ctx.fill();
        }
      }
      animFrame = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
}

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  show: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.12, duration: 0.7, ease: EASE },
  }),
};

const badges = [
  { label: "200+ Projects", color: "#6C63FF" },
  { label: "4-Week MVPs", color: "#F5A623" },
  { label: "AI-Native", color: "#6C63FF" },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16 overflow-hidden"
      style={{ background: "#0A0E1A" }}
    >
      <NodeCanvas />

      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(108,99,255,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full pointer-events-none animate-pulse-glow"
        style={{
          background: "radial-gradient(ellipse at center, rgba(245,166,35,0.08) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center gap-8">
        <motion.h1
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.12] tracking-tight"
          style={{ fontFamily: "var(--font-syne)", fontWeight: 800, color: "#F0EEF8" }}
        >
          We Build What
          <br />
          <span
            className="text-gradient"
            style={{ display: "inline-block", backgroundImage: "linear-gradient(90deg, #6C63FF 0%, #9C8DFF 100%)" }}
          >
            Founders
          </span>
          <br />
          <span
            className="text-gradient"
            style={{ display: "inline-block", backgroundImage: "linear-gradient(90deg, #8B5CF6 0%, #F5A623 100%)" }}
          >
            Actually
          </span>
          <br />
          Need.
        </motion.h1>

        <motion.p
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="max-w-2xl text-lg lg:text-xl leading-relaxed"
          style={{ fontFamily: "var(--font-inter)", color: "#8B90A7", fontWeight: 400 }}
        >
          From raw idea to live product — design, engineering, and growth under one roof.{" "}
          <span style={{ color: "#F0EEF8", fontWeight: 500 }}>No handoffs. No excuses.</span>
        </motion.p>

        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex flex-col sm:flex-row items-center gap-4 mt-2"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold transition-all duration-300"
            style={{
              background: "#6C63FF",
              color: "#F0EEF8",
              fontFamily: "var(--font-inter)",
              textDecoration: "none",
              boxShadow: "0 0 40px rgba(108,99,255,0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#7C74FF";
              e.currentTarget.style.boxShadow = "0 0 60px rgba(108,99,255,0.5)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#6C63FF";
              e.currentTarget.style.boxShadow = "0 0 40px rgba(108,99,255,0.3)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Start a Project
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#work"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold transition-all duration-300"
            style={{
              background: "transparent",
              color: "#F0EEF8",
              fontFamily: "var(--font-inter)",
              textDecoration: "none",
              border: "1px solid rgba(30,42,69,0.8)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#6C63FF";
              e.currentTarget.style.background = "rgba(108,99,255,0.08)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(30,42,69,0.8)";
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            See Our Work
          </a>
        </motion.div>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex flex-wrap items-center justify-center gap-3 mt-4"
        >
          {badges.map((badge, i) => (
            <motion.div
              key={badge.label}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold"
              style={{
                fontFamily: "var(--font-space-mono)",
                background: "rgba(19,25,41,0.8)",
                border: `1px solid ${badge.color}40`,
                color: "#F0EEF8",
                backdropFilter: "blur(10px)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: badge.color }} />
              {badge.label}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
