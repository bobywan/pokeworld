import { useQuery } from '@tanstack/react-query'
import type { PokemonData } from '../types/pokemon'
import { fetchAllKantoPokemon } from '../utils/api'
import { useState } from 'react'
import { KANTO_COUNT } from '../utils/constants'

export function usePokedex() {
  const [loaded, setLoaded] = useState(0)

  const query = useQuery<PokemonData[]>({
    queryKey: ['pokedex', 'kanto'],
    queryFn: () => fetchAllKantoPokemon((n) => setLoaded(n)),
    staleTime: Infinity,
    gcTime: Infinity,
  })

  return {
    pokemon: query.data ?? [],
    isLoading: query.isLoading,
    loaded: query.isLoading ? loaded : KANTO_COUNT,
    error: query.error ? (query.error as Error).message : null,
  }
}
