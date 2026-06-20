import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { SERVICE_INDEX } from "@/lib/content";

export function WhatWeDo() {
  return (
    <section id="services" className="px-5 sm:px-8 py-20 sm:py-28">
      <div className="mx-auto max-w-[1240px]">
        <Reveal>
          <SectionLabel index="01" label="What We Do" />
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal>
            <h2 className="font-display uppercase leading-[0.95] tracking-[-0.02em] text-[clamp(2rem,5vw,3.75rem)]">
              Three ways we help you grow.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="self-end text-lg leading-relaxed text-ink-soft">
              CraftDexa is a lean studio of senior specialists. Whether you need
              more customers, a website that converts, or a software product
              built from scratch — we handle strategy, design, engineering, and
              growth, with no vendor chains and no handoffs.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SERVICE_INDEX.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <a
                href={s.href}
                className="group flex h-full flex-col rounded-2xl border-2 border-ink bg-paper-deep/60 p-7 transition-all duration-200 hover:-translate-y-1 hover:bg-paper-deep hover:shadow-[6px_6px_0_0_var(--ink)]"
              >
                <span className="font-display text-3xl text-orange">{s.n}</span>
                <h3 className="mt-5 font-display text-xl uppercase leading-tight tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-soft">
                  {s.desc}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.12em] text-teal">
                  Explore
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
