export function LoadingSkeleton() {
  return (
    <div className="pokemon-card animate-pulse overflow-hidden rounded-2xl bg-white shadow-md">
      <div className="h-40 bg-gray-200" />
      <div className="space-y-3 p-4">
        <div className="h-3 w-8 rounded bg-gray-200" />
        <div className="h-4 w-24 rounded bg-gray-200" />
        <div className="flex gap-2">
          <div className="h-5 w-14 rounded-full bg-gray-200" />
          <div className="h-5 w-14 rounded-full bg-gray-200" />
        </div>
        <div className="space-y-1.5 pt-2">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="h-2 w-14 rounded bg-gray-200" />
              <div className="h-1.5 flex-1 rounded-full bg-gray-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
