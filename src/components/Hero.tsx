import { Reveal } from "./Reveal";
import { HERO_STATS } from "@/lib/content";

function Starburst({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      {Array.from({ length: 16 }).map((_, i) => (
        <line
          key={i}
          x1="50"
          y1="50"
          x2="50"
          y2="4"
          stroke="currentColor"
          strokeWidth="2"
          transform={`rotate(${i * 22.5} 50 50)`}
        />
      ))}
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 sm:px-8 pt-36 pb-20 sm:pt-44 sm:pb-28"
    >
      {/* mid-century geometric motifs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 right-[-60px] h-72 w-72 rounded-full border-2 border-ink/15"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 right-24 h-40 w-40 rounded-full bg-teal/10"
      />
      <Starburst className="pointer-events-none absolute top-28 left-[42%] hidden h-20 w-20 text-orange/70 lg:block" />

      <div className="mx-auto max-w-[1240px]">
        <Reveal>
          <span className="inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.32em] text-orange">
            <span className="h-2 w-2 rounded-full bg-orange" />
            Digital Product Studio
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-7 max-w-5xl font-display uppercase leading-[0.92] tracking-[-0.02em] text-[clamp(2.6rem,8vw,6.5rem)]">
            We build what founders and businesses{" "}
            <span className="text-orange">actually</span> need.
          </h1>
        </Reveal>

        <Reveal delay={150}>
          <p className="mt-8 max-w-2xl text-lg sm:text-xl leading-relaxed text-ink-soft">
            From getting you customers to building your product — lead
            generation, websites, and AI-powered software, delivered fast under
            one roof.
          </p>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-ink bg-orange px-7 py-3.5 text-sm font-bold uppercase tracking-[0.1em] text-paper transition-all duration-200 hover:bg-ink hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_var(--orange)]"
            >
              Start a Project
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-transparent px-7 py-3.5 text-sm font-bold uppercase tracking-[0.1em] text-ink transition-all duration-200 hover:bg-ink hover:text-paper hover:-translate-y-0.5"
            >
              See What We Do
            </a>
          </div>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border-2 border-ink bg-ink sm:grid-cols-3">
          {HERO_STATS.map((s, i) => (
            <Reveal
              key={s.n}
              delay={i * 100}
              className="bg-paper px-7 py-8"
            >
              <div className="font-display text-3xl text-orange">{s.n}</div>
              <div className="mt-3 font-display text-xl uppercase tracking-tight">
                {s.title}
              </div>
              <div className="mt-1 text-sm text-ink-soft">{s.sub}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
