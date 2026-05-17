export function LoadingSkeleton() {
  return (
    <div className="pokemon-card animate-pulse overflow-hidden rounded-card bg-surface shadow-card">
      <div className="h-40 bg-surface-muted" />
      <div className="space-y-3 p-4">
        <div className="h-2.5 w-8 rounded bg-surface-muted" />
        <div className="h-4 w-28 rounded bg-surface-muted" />
        <div className="flex gap-2 pt-1">
          <div className="h-5 w-14 rounded-badge bg-surface-muted" />
          <div className="h-5 w-14 rounded-badge bg-surface-muted" />
        </div>
        <div className="space-y-2 pt-2">
          {[...Array(6)].map((_, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: static skeleton rows, never reordered
            <div key={i} className="flex items-center gap-2">
              <div className="h-2 w-14 rounded bg-surface-muted" />
              <div className="h-1.5 flex-1 rounded-full bg-surface-muted" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
