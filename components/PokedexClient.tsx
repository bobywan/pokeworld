"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { PokemonCard } from "@/components/PokemonCard";
import { SearchHelpModal } from "@/components/SearchHelpModal";
import { TypeFilters } from "@/components/TypeFilters";
import { getSearchHint, matchesPokemon } from "@/lib/search";
import type { PokemonData } from "@/types/pokemon";

type Props = {
  pokemon: PokemonData[];
};

export function PokedexClient({ pokemon }: Props) {
  const [search, setSearch] = useState("");
  const [activeTypes, setActiveTypes] = useState<Set<string>>(new Set());
  const [helpOpen, setHelpOpen] = useState(false);

  const toggleType = (type: string) => {
    setActiveTypes((prev) => {
      const next = new Set(prev);
      if (next.has(type)) {
        next.delete(type);
      } else {
        next.add(type);
      }
      return next;
    });
  };

  const clearTypes = () => setActiveTypes(new Set());

  const searchHint = useMemo(() => getSearchHint(search), [search]);

  const filtered = useMemo(() => {
    return pokemon.filter((p) => {
      const matchSearch = matchesPokemon(p, search);
      // Logique ET : le Pokémon doit posséder TOUS les types sélectionnés
      const matchType =
        activeTypes.size === 0 || [...activeTypes].every((t) => p.types.includes(t));
      return matchSearch && matchType;
    });
  }, [pokemon, search, activeTypes]);

  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-surface-subtle">
      {/* Header */}
      <header className="no-print sticky top-0 z-20 border-b border-surface-border bg-surface/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-3">
          {/* Logo + actions */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-2.5">
              <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
                alt="Pokéball"
                width={28}
                height={28}
                className="h-7 w-7 shrink-0"
              />
              <div className="min-w-0">
                <h1 className="truncate text-base font-bold text-text-primary sm:text-lg">
                  Le Pokédex de Boby &amp; Fils
                </h1>
                <p className="text-[10px] text-text-muted">Kanto — Gen 1</p>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <span className="hidden text-xs text-text-muted sm:block">
                {filtered.length}
                {filtered.length !== pokemon.length ? `/${pokemon.length}` : ""} Pokémon
              </span>
              <button type="button" onClick={handlePrint} className="btn-primary">
                <span className="hidden xs:inline">Imprimer</span>
                <span className="xs:hidden">🖨️</span>
              </button>
            </div>
          </div>

          {/* Barre de recherche */}
          <div className="mt-3">
            <div className="flex items-center gap-2">
              <input
                type="search"
                placeholder="Nom, numéro, habitat, poids>50, taille<1…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="input-search"
              />
              <button
                type="button"
                onClick={() => setHelpOpen(true)}
                title="Aide à la recherche"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-input border border-surface-border bg-surface text-sm font-bold text-text-muted transition hover:border-brand hover:text-brand"
              >
                ?
              </button>
            </div>
            {searchHint && (
              <p className="mt-1.5 px-1 text-[10px] text-text-muted">💡 {searchHint}</p>
            )}
          </div>

          <TypeFilters activeTypes={activeTypes} onToggle={toggleType} onClear={clearTypes} />
        </div>
      </header>

      {/* Grille */}
      <main className="mx-auto max-w-7xl px-4 py-5">
        {/* Compteur mobile */}
        <p className="mb-3 text-xs text-text-muted sm:hidden">
          {filtered.length}
          {filtered.length !== pokemon.length ? `/${pokemon.length}` : ""} Pokémon
        </p>

        <div className="print-grid grid grid-cols-2 gap-3 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5">
          {filtered.map((p) => (
            <PokemonCard key={p.id} pokemon={p} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-5xl">😔</p>
            <p className="mt-4 text-base font-semibold text-text-primary">Aucun Pokémon trouvé</p>
            <p className="mt-1 text-sm text-text-muted">Essayez un autre nom ou type</p>
          </div>
        )}
      </main>

      <SearchHelpModal isOpen={helpOpen} onClose={() => setHelpOpen(false)} />

      {/* Footer */}
      <footer className="no-print border-t border-surface-border py-6 text-center text-xs text-text-muted">
        Données :{" "}
        <a
          href="https://pokeapi.co"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-text-secondary"
        >
          PokéAPI
        </a>{" "}
        · Pokémon © Nintendo / Game Freak
      </footer>
    </div>
  );
}
