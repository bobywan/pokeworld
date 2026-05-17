"use client";

import { cn } from "@/lib/cn";
import { GEN1_TYPES, TYPE_COLORS, TYPE_FR } from "@/lib/constants";

type TypeFiltersProps = {
  activeTypes: Set<string>;
  onToggle: (type: string) => void;
  onClear: () => void;
};

export function TypeFilters({ activeTypes, onToggle, onClear }: TypeFiltersProps) {
  const hasActive = activeTypes.size > 0;

  return (
    <div className="mt-2.5">
      {/* Barre scrollable */}
      <div className="relative">
        {/* Dégradé droit pour indiquer le scroll */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l from-surface/80 to-transparent" />

        <div className="flex gap-1.5 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {/* Bouton "Tous" */}
          <button
            type="button"
            onClick={onClear}
            className={cn(
              "flex shrink-0 items-center gap-1.5 rounded-badge px-3 py-1.5 text-[11px] font-semibold transition-all duration-150 active:scale-95",
              !hasActive
                ? "bg-text-primary text-white shadow-sm"
                : "bg-surface-muted text-text-secondary hover:bg-surface-border",
            )}
          >
            Tous
          </button>

          {/* Séparateur vertical */}
          <div className="mx-0.5 my-1 w-px shrink-0 bg-surface-border" />

          {/* Types */}
          {GEN1_TYPES.map((type) => {
            const isActive = activeTypes.has(type);
            const color = TYPE_COLORS[type] ?? "#9FA19F";

            return (
              <button
                key={type}
                type="button"
                onClick={() => onToggle(type)}
                style={isActive ? { backgroundColor: color } : undefined}
                className={cn(
                  "group relative flex shrink-0 items-center gap-1 rounded-badge px-2.5 py-1.5 text-[11px] font-semibold transition-all duration-150 active:scale-95",
                  isActive
                    ? "scale-105 text-white shadow-sm"
                    : "text-white/90 hover:scale-105 hover:opacity-100",
                )}
              >
                {/* Fond coloré atténué quand inactif */}
                {!isActive && (
                  <span
                    className="absolute inset-0 rounded-badge opacity-60"
                    style={{ backgroundColor: color }}
                  />
                )}

                {/* Coche sélectionné */}
                {isActive && (
                  <svg
                    className="relative z-10 h-2.5 w-2.5 shrink-0"
                    viewBox="0 0 10 10"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M1.5 5l2.5 2.5 4.5-4.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}

                <span className="relative z-10">{TYPE_FR[type] ?? type}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Indicateur filtres actifs */}
      {hasActive && (
        <div className="mt-2 flex items-center justify-between">
          <div className="flex flex-wrap items-center gap-1.5">
            {[...activeTypes].map((type) => {
              const color = TYPE_COLORS[type] ?? "#9FA19F";
              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => onToggle(type)}
                  style={{ borderColor: color, color }}
                  className="flex items-center gap-1 rounded-badge border px-2 py-0.5 text-[10px] font-semibold transition hover:opacity-70"
                >
                  {TYPE_FR[type] ?? type}
                  <span className="text-[9px] opacity-70">✕</span>
                </button>
              );
            })}
          </div>
          <button
            type="button"
            onClick={onClear}
            className="ml-2 shrink-0 text-[10px] font-medium text-text-muted underline-offset-2 hover:text-brand hover:underline"
          >
            Tout effacer
          </button>
        </div>
      )}
    </div>
  );
}
