"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const serviceLinks = [
  "Web Design & Development",
  "Bubble Development",
  "App Development",
  "AI SaaS Development",
  "MVP Development",
  "Digital Marketing",
];

const companyLinks = [
  { label: "About", href: "#studio" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Services", href: "#services" },
];

const socialLinks = [
  { label: "Twitter / X", href: "https://x.com/craftdexa" },
  { label: "LinkedIn", href: "https://linkedin.com/company/craftdexa" },
  { label: "GitHub", href: "https://github.com/craftdexa" },
  { label: "Dribbble", href: "https://dribbble.com/craftdexa" },
];

export default function Footer() {
  return (
    <footer
      className="relative px-6 pt-16 pb-8"
      style={{ background: "#080C18", borderTop: "1px solid #6C63FF" }}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 pb-14"
          style={{ borderBottom: "1px solid #1E2A45" }}
        >
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <div
                className="w-7 h-7 rounded-md flex items-center justify-center text-xs font-bold"
                style={{ background: "linear-gradient(135deg, #6C63FF, #8B5CF6)", fontFamily: "var(--font-syne)", color: "#F0EEF8" }}
              >
                CD
              </div>
              <span className="text-sm font-bold tracking-[0.12em]" style={{ fontFamily: "var(--font-syne)", color: "#F0EEF8" }}>
                CRAFTDEXA
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ fontFamily: "var(--font-inter)", color: "#8B90A7" }}>
              Transform ideas into digital ecosystems. Strategy, design, engineering, and growth under one roof.
            </p>
            <span className="text-xs" style={{ fontFamily: "var(--font-space-mono)", color: "#1E2A45" }}>
              BUILT IN 2026
            </span>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <span className="text-xs tracking-[0.15em]" style={{ fontFamily: "var(--font-space-mono)", color: "#8B90A7" }}>
              SERVICES
            </span>
            <div className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <a
                  key={link}
                  href="#services"
                  className="text-sm transition-colors duration-200"
                  style={{ fontFamily: "var(--font-inter)", color: "#8B90A7", textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#F0EEF8")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#8B90A7")}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4">
            <span className="text-xs tracking-[0.15em]" style={{ fontFamily: "var(--font-space-mono)", color: "#8B90A7" }}>
              COMPANY
            </span>
            <div className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm transition-colors duration-200"
                  style={{ fontFamily: "var(--font-inter)", color: "#8B90A7", textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#F0EEF8")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#8B90A7")}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-4">
            <span className="text-xs tracking-[0.15em]" style={{ fontFamily: "var(--font-space-mono)", color: "#8B90A7" }}>
              CONNECT
            </span>
            <a
              href="mailto:craftdexa@gmail.com"
              className="text-sm transition-colors duration-200"
              style={{ fontFamily: "var(--font-inter)", color: "#6C63FF", fontWeight: 500, textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#9C8DFF")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6C63FF")}
            >
              craftdexa@gmail.com
            </a>
            <div className="flex flex-col gap-3 mt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors duration-200"
                  style={{ fontFamily: "var(--font-inter)", color: "#8B90A7", textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#F0EEF8")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#8B90A7")}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <span className="text-xs" style={{ fontFamily: "var(--font-space-mono)", color: "#8B90A7" }}>
            © 2026 CraftDexa. All rights reserved.
          </span>
          <span className="text-xs tracking-[0.2em]" style={{ fontFamily: "var(--font-space-mono)", color: "#1E2A45" }}>
            CRAFTDEXA.COM
          </span>
        </div>
      </div>
    </footer>
  );
}
