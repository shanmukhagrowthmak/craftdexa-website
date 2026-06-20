import { MARQUEE_ITEMS } from "@/lib/content";

export function Marquee() {
  return (
    <div className="overflow-hidden border-y-2 border-ink bg-orange py-3 text-paper">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
            {MARQUEE_ITEMS.map((item) => (
              <span key={item} className="flex items-center">
                <span className="px-6 font-display text-sm uppercase tracking-[0.1em]">
                  {item}
                </span>
                <span className="text-paper/70">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
