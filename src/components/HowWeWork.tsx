import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { WORK_VALUES } from "@/lib/content";

export function HowWeWork() {
  return (
    <section
      id="how-we-work"
      className="border-t-2 border-ink/15 bg-paper-deep/40 px-5 sm:px-8 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1240px]">
        <Reveal>
          <SectionLabel index="05" label="How We Work" />
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-8 max-w-3xl font-display uppercase leading-[0.95] tracking-[-0.02em] text-[clamp(2rem,5vw,4rem)]">
            One team. Full stack. Real speed.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {WORK_VALUES.map((v, i) => (
            <Reveal key={v.n} delay={(i % 2) * 90}>
              <div className="group flex h-full items-start gap-6 rounded-2xl border-2 border-ink bg-paper p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-[6px_6px_0_0_var(--orange)]">
                <span className="font-display text-4xl text-orange transition-colors duration-200 group-hover:text-teal">
                  {v.n}
                </span>
                <div>
                  <h3 className="font-display text-xl uppercase leading-tight tracking-tight">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                    {v.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
