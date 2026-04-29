import type { RawPokemon, RawSpecies, PokemonData } from '../types/pokemon'
import { STAT_FR, HABITAT_FR, COLOR_FR, KANTO_COUNT } from './constants'

const BASE = 'https://pokeapi.co/api/v2'

async function fetchPokemon(id: number): Promise<RawPokemon> {
  const res = await fetch(`${BASE}/pokemon/${id}`)
  return res.json()
}

async function fetchSpecies(id: number): Promise<RawSpecies> {
  const res = await fetch(`${BASE}/pokemon-species/${id}`)
  return res.json()
}

function getIdFromUrl(url: string): number {
  const parts = url.split('/')
  return parseInt(parts[parts.length - 2])
}

function getFrName(species: RawSpecies): string {
  const fr = species.names.find((n) => n.language.name === 'fr')
  return fr?.name ?? species.names[0]?.name ?? ''
}

function getEvolutionStage(
  speciesId: number,
  speciesMap: Map<number, RawSpecies>,
): 1 | 2 | 3 {
  const species = speciesMap.get(speciesId)
  if (!species?.evolves_from_species) return 1
  const parentId = getIdFromUrl(species.evolves_from_species.url)
  const parent = speciesMap.get(parentId)
  if (!parent?.evolves_from_species) return 2
  return 3
}

export async function fetchAllKantoPokemon(
  onProgress: (loaded: number) => void,
): Promise<PokemonData[]> {
  const ids = Array.from({ length: KANTO_COUNT }, (_, i) => i + 1)

  const BATCH = 20
  const pokemonResults: RawPokemon[] = []
  const speciesResults: RawSpecies[] = []

  for (let i = 0; i < ids.length; i += BATCH) {
    const batch = ids.slice(i, i + BATCH)
    const [pBatch, sBatch] = await Promise.all([
      Promise.all(batch.map(fetchPokemon)),
      Promise.all(batch.map(fetchSpecies)),
    ])
    pokemonResults.push(...pBatch)
    speciesResults.push(...sBatch)
    onProgress(Math.min(i + BATCH, KANTO_COUNT))
  }

  const speciesMap = new Map<number, RawSpecies>()
  speciesResults.forEach((s) => speciesMap.set(s.id, s))

  return pokemonResults.map((p, i) => {
    const species = speciesResults[i]
    return {
      id: p.id,
      name: getFrName(species),
      frName: getFrName(species),
      height: p.height,
      weight: p.weight,
      types: p.types.sort((a, b) => a.slot - b.slot).map((t) => t.type.name),
      stats: p.stats.map((s) => ({
        name: STAT_FR[s.stat.name] ?? s.stat.name,
        rawName: s.stat.name,
        value: s.base_stat,
      })),
      sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.id}.png`,
      habitat: species.habitat ? HABITAT_FR[species.habitat.name] ?? species.habitat.name : null,
      color: COLOR_FR[species.color.name] ?? species.color.name,
      stage: getEvolutionStage(species.id, speciesMap),
    }
  })
}
