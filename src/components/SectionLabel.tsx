export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-display text-2xl text-orange">{index}</span>
      <span className="h-px flex-1 max-w-16 bg-ink/40" />
      <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-ink-soft">
        {label}
      </span>
    </div>
  );
}
