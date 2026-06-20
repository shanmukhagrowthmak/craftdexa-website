"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { NAV_LINKS } from "@/lib/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive("#" + e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 border-b transition-all duration-300",
        scrolled || menuOpen
          ? "bg-paper/95 backdrop-blur-sm border-ink/15 py-3"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 flex items-center justify-between gap-6">
        <a href="#top" className="shrink-0" onClick={() => setMenuOpen(false)}>
          <Logo
            className={cn(
              "transition-all duration-300",
              scrolled ? "text-xl" : "text-2xl"
            )}
          />
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-active={active === l.href}
              className="link-underline text-[13px] font-semibold uppercase tracking-[0.14em] text-ink/80 hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="group relative shrink-0 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-orange px-4 py-2 text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.12em] text-paper transition-all duration-200 hover:bg-ink hover:-translate-y-0.5"
          >
            Start a Project
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden grid h-10 w-10 place-items-center rounded-full border-2 border-ink"
          >
            <span className="relative block h-3.5 w-4">
              <span
                className={cn(
                  "absolute left-0 h-0.5 w-full bg-ink transition-all duration-300",
                  menuOpen ? "top-1.5 rotate-45" : "top-0"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-1.5 h-0.5 w-full bg-ink transition-all duration-300",
                  menuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 h-0.5 w-full bg-ink transition-all duration-300",
                  menuOpen ? "top-1.5 -rotate-45" : "top-3"
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-[max-height,opacity] duration-300",
          menuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="mx-auto max-w-[1240px] px-5 pb-5 pt-3 flex flex-col gap-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              data-active={active === l.href}
              className={cn(
                "rounded-xl px-4 py-3 text-sm font-bold uppercase tracking-[0.14em] transition-colors",
                active === l.href
                  ? "bg-paper-deep text-orange"
                  : "text-ink/80 hover:bg-paper-deep"
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
