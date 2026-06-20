import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import type { Service } from "@/lib/content";

export function ServiceSection({ service }: { service: Service }) {
  return (
    <section
      id={service.id}
      className="border-t-2 border-ink/15 px-5 sm:px-8 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1240px]">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <SectionLabel index={service.index} label={service.kicker} />
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-teal px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.12em] text-teal">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              How fast · {service.howFast}
            </span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mt-8 max-w-4xl font-display uppercase leading-[0.95] tracking-[-0.02em] text-[clamp(2rem,5vw,4rem)]">
            {service.title}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* A + B */}
          <div className="space-y-10">
            <Reveal>
              <h3 className="text-[12px] font-bold uppercase tracking-[0.24em] text-orange">
                What we do
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-ink">
                {service.whatWeDo}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h3 className="text-[12px] font-bold uppercase tracking-[0.24em] text-orange">
                Who it&apos;s for
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-ink-soft">
                {service.whoFor}
              </p>
            </Reveal>
          </div>

          {/* C — how we deliver */}
          <Reveal delay={120}>
            <h3 className="text-[12px] font-bold uppercase tracking-[0.24em] text-orange">
              How we deliver
            </h3>
            <ol className="mt-5 divide-y divide-ink/15 border-y-2 border-ink/15">
              {service.deliver.map((item, i) => (
                <li
                  key={item}
                  className="group flex items-center gap-5 py-4 transition-colors hover:text-teal"
                >
                  <span className="font-display text-lg text-orange w-8 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] leading-snug">{item}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        {/* D — methodology */}
        <Reveal delay={80}>
          <div className="mt-14 rounded-2xl border-2 border-ink bg-paper-deep/50 p-7 sm:p-9">
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <span className="text-[12px] font-bold uppercase tracking-[0.24em] text-ink-soft">
                Our methodology
              </span>
              <span className="font-display text-2xl uppercase tracking-tight">
                {service.methodology.name}
              </span>
              <span className="text-sm text-ink-soft">
                · {service.methodology.note}
              </span>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {service.methodology.stages.map((stage, i) => (
                <span key={stage} className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-paper px-4 py-2 text-sm font-semibold">
                    <span className="font-display text-orange">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {stage}
                  </span>
                  {i < service.methodology.stages.length - 1 && (
                    <span className="text-ink/40">→</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
