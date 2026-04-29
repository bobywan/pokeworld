import { useMemo, useState } from 'react'
import { usePokedex } from './hooks/usePokedex'
import { PokemonCard } from './components/PokemonCard'
import { LoadingSkeleton } from './components/LoadingSkeleton'
import { TypeBadge } from './components/TypeBadge'
import { KANTO_COUNT, TYPE_FR } from './utils/constants'

const ALL_TYPES = Object.keys(TYPE_FR)

export default function App() {
  const { pokemon, loading, loaded, error } = usePokedex()
  const [search, setSearch] = useState('')
  const [activeType, setActiveType] = useState<string | null>(null)

  const filtered = useMemo(() => {
    return pokemon.filter((p) => {
      const matchSearch =
        search === '' ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        String(p.id).padStart(3, '0').includes(search)
      const matchType = activeType === null || p.types.includes(activeType)
      return matchSearch && matchType
    })
  }, [pokemon, search, activeType])

  const handlePrint = () => window.print()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="no-print sticky top-0 z-20 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
                alt="Pokéball"
                className="h-8 w-8"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">
                  Le Pokédex de Boby &amp; Fils
                </h1>
                <p className="text-xs text-gray-500">Région de Kanto — {KANTO_COUNT} Pokémon</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {!loading && (
                <span className="text-sm text-gray-500">
                  {filtered.length}{filtered.length !== pokemon.length ? `/${pokemon.length}` : ''} Pokémon
                </span>
              )}
              <button
                onClick={handlePrint}
                disabled={loading}
                className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-red-600 disabled:opacity-50"
              >
                🖨️ Imprimer
              </button>
            </div>
          </div>

          {/* Search */}
          <div className="mt-3">
            <input
              type="text"
              placeholder="Rechercher par nom ou numéro…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-700 outline-none ring-red-400 transition focus:ring-2"
            />
          </div>

          {/* Type filter */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            <button
              onClick={() => setActiveType(null)}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                activeType === null
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Tous
            </button>
            {ALL_TYPES.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(activeType === type ? null : type)}
                className={`transition ${activeType === type ? 'ring-2 ring-offset-1 ring-gray-400' : 'opacity-80 hover:opacity-100'}`}
              >
                <TypeBadge type={type} small />
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Loading progress */}
      {loading && (
        <div className="no-print mx-auto max-w-7xl px-4 pt-4">
          <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 text-sm text-blue-700">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-blue-400 border-t-transparent" />
            <span>Chargement… {loaded}/{KANTO_COUNT} Pokémon</span>
            <div className="flex-1">
              <div className="h-1.5 overflow-hidden rounded-full bg-blue-200">
                <div
                  className="h-full rounded-full bg-blue-500 transition-all duration-300"
                  style={{ width: `${(loaded / KANTO_COUNT) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="mx-auto max-w-7xl px-4 pt-4">
          <div className="rounded-xl bg-red-50 p-4 text-sm text-red-700">
            Erreur lors du chargement : {error}
          </div>
        </div>
      )}

      {/* Grid */}
      <main className="mx-auto max-w-7xl px-4 py-6">
        <div className="print-grid grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {loading
            ? [...Array(KANTO_COUNT)].map((_, i) => <LoadingSkeleton key={i} />)
            : filtered.map((p) => <PokemonCard key={p.id} pokemon={p} />)}
        </div>

        {!loading && filtered.length === 0 && (
          <div className="py-24 text-center text-gray-400">
            <p className="text-4xl">😔</p>
            <p className="mt-3 text-lg font-medium">Aucun Pokémon trouvé</p>
            <p className="text-sm">Essayez un autre nom ou type</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="no-print border-t border-gray-200 py-6 text-center text-xs text-gray-400">
        Données fournies par{' '}
        <a href="https://pokeapi.co" target="_blank" rel="noopener noreferrer" className="underline">
          PokéAPI
        </a>{' '}
        · Pokémon © Nintendo / Game Freak
      </footer>
    </div>
  )
}
