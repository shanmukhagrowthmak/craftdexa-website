import { cn } from "@/lib/utils";

/**
 * CRAFTDEXA wordmark. The "DEXA" half nods to a fish mark — the "X" reads as the
 * tail — with a single burnt-orange dot as the eye. Recreated as styled text.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-display text-ink leading-none tracking-[-0.03em] select-none",
        className
      )}
      aria-label="CraftDexa"
    >
      CRAFT
      <span className="relative">
        D
        {/* fish eye */}
        <span
          aria-hidden
          className="absolute right-[-0.08em] top-[0.12em] h-[0.16em] w-[0.16em] rounded-full bg-orange"
        />
        EXA
      </span>
    </span>
  );
}
