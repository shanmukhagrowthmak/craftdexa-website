import { Logo } from "./Logo";
import { FOOTER_SERVICES, FOOTER_ELSEWHERE } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-paper-deep/50 px-5 sm:px-8 pt-16 pb-8">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Logo className="text-2xl" />
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-ink-soft">
              Strategy, design, engineering, and growth under one roof.
            </p>
          </div>

          <div>
            <h4 className="text-[12px] font-bold uppercase tracking-[0.22em] text-ink-soft">
              Services
            </h4>
            <ul className="mt-5 space-y-3">
              {FOOTER_SERVICES.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="link-underline text-[15px] hover:text-teal transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[12px] font-bold uppercase tracking-[0.22em] text-ink-soft">
              Elsewhere
            </h4>
            <ul className="mt-5 space-y-3">
              {FOOTER_ELSEWHERE.map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    className="link-underline text-[15px] hover:text-teal transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t-2 border-ink/15 pt-6 text-[12px] font-semibold uppercase tracking-[0.18em] text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 CraftDexa.</span>
          <span>All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
}
