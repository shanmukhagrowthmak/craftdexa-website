import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { CONTACT } from "@/lib/content";

export function GetStarted() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t-2 border-ink/15 px-5 sm:px-8 py-20 sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full border-2 border-ink/15"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-10 right-40 h-40 w-40 rounded-t-full bg-orange/15"
      />

      <div className="mx-auto max-w-[1240px]">
        <Reveal>
          <SectionLabel index="06" label="Get Started" />
        </Reveal>

        <div className="mt-10 grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <h2 className="font-display uppercase leading-[0.92] tracking-[-0.02em] text-[clamp(2.4rem,6vw,5rem)]">
                Tell us what you&apos;re building.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
                Whether you need customers, a website, or a product — we&apos;ll
                tell you how fast we can ship it.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <a
                href="mailto:craftdexa@gmail.com"
                className="group mt-9 inline-flex items-center gap-3 rounded-full border-2 border-ink bg-orange px-8 py-4 text-sm font-bold uppercase tracking-[0.1em] text-paper transition-all duration-200 hover:bg-ink hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_var(--orange)]"
              >
                Start a Conversation
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <dl className="rounded-2xl border-2 border-ink bg-paper-deep/50 divide-y-2 divide-ink/15">
              {CONTACT.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between gap-4 px-6 py-5"
                >
                  <dt className="text-[12px] font-bold uppercase tracking-[0.2em] text-ink-soft">
                    {row.label}
                  </dt>
                  <dd className="text-right font-semibold">
                    {row.href ? (
                      <a
                        href={row.href}
                        className="link-underline hover:text-teal transition-colors"
                      >
                        {row.value}
                      </a>
                    ) : (
                      row.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
