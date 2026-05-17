import { LoadingSkeleton } from "@/components/LoadingSkeleton";
import { KANTO_COUNT } from "@/lib/constants";

export default function Loading() {
  return (
    <div className="min-h-screen bg-surface-subtle">
      <div className="mx-auto max-w-7xl px-4 py-5">
        <div className="grid grid-cols-2 gap-3 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5">
          {Array.from({ length: KANTO_COUNT }).map((_, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: static skeleton grid, never reordered
            <LoadingSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
