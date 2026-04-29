export interface PokemonData {
  id: number
  name: string
  frName: string
  height: number
  weight: number
  types: string[]
  stats: { name: string; rawName: string; value: number }[]
  sprite: string
  habitat: string | null
  color: string
  stage: 1 | 2 | 3
}

export interface RawPokemon {
  id: number
  name: string
  height: number
  weight: number
  types: { slot: number; type: { name: string; url: string } }[]
  stats: { base_stat: number; stat: { name: string } }[]
  sprites: {
    other: {
      'official-artwork': { front_default: string }
    }
  }
}

export interface RawSpecies {
  id: number
  names: { name: string; language: { name: string } }[]
  habitat: { name: string } | null
  color: { name: string }
  evolves_from_species: { name: string; url: string } | null
}

export type FilterType = string | 'all'
