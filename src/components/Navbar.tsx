"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Studio", href: "#studio" },
];

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(10,14,26,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(30,42,69,0.8)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2"
            style={{ textDecoration: "none" }}
          >
            <div
              className="w-7 h-7 rounded-md flex items-center justify-center text-xs font-bold"
              style={{
                background: "linear-gradient(135deg, #6C63FF, #8B5CF6)",
                fontFamily: "var(--font-syne)",
                color: "#F0EEF8",
              }}
            >
              CD
            </div>
            <span
              className="text-sm font-bold tracking-[0.12em]"
              style={{ fontFamily: "var(--font-syne)", color: "#F0EEF8" }}
            >
              CRAFTDEXA
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-inter)",
                  color: "#8B90A7",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#F0EEF8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#8B90A7")}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300"
              style={{
                fontFamily: "var(--font-inter)",
                background: "#6C63FF",
                color: "#F0EEF8",
                textDecoration: "none",
                boxShadow: "0 0 24px rgba(108,99,255,0.25)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#7C74FF";
                e.currentTarget.style.boxShadow = "0 0 40px rgba(108,99,255,0.45)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#6C63FF";
                e.currentTarget.style.boxShadow = "0 0 24px rgba(108,99,255,0.25)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Start Project →
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg"
            style={{
              background: "rgba(108,99,255,0.12)",
              border: "1px solid rgba(108,99,255,0.2)",
              cursor: "pointer",
              color: "#F0EEF8",
            }}
            aria-label="Open menu"
          >
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <line x1="0" y1="1" x2="16" y2="1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="0" y1="6" x2="16" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="0" y1="11" x2="16" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60]"
              style={{ background: "rgba(10,14,26,0.7)", backdropFilter: "blur(8px)" }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: EASE }}
              className="fixed top-0 right-0 h-full w-72 z-[70] flex flex-col"
              style={{ background: "#131929", borderLeft: "1px solid #1E2A45" }}
            >
              <div className="flex items-center justify-between px-6 py-5">
                <span
                  style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "0.9rem", color: "#F0EEF8" }}
                >
                  CRAFTDEXA
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  style={{
                    background: "rgba(108,99,255,0.1)",
                    border: "none",
                    borderRadius: "6px",
                    width: "32px",
                    height: "32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    color: "#F0EEF8",
                  }}
                  aria-label="Close menu"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <line x1="1" y1="1" x2="11" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="11" y1="1" x2="1" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col gap-1 px-4 py-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.05 * i + 0.1, ease: EASE }}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.95rem",
                      color: "#8B90A7",
                      textDecoration: "none",
                      padding: "0.75rem 1rem",
                      borderRadius: "8px",
                      fontWeight: 500,
                      transition: "background 0.15s ease, color 0.15s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(108,99,255,0.08)";
                      e.currentTarget.style.color = "#F0EEF8";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "#8B90A7";
                    }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto px-6 pb-8">
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: "block",
                    background: "#6C63FF",
                    color: "#F0EEF8",
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    textAlign: "center",
                    padding: "0.875rem",
                    borderRadius: "12px",
                  }}
                >
                  Start a Project →
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
