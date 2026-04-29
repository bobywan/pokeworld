import { useState, useEffect } from 'react'
import type { PokemonData } from '../types/pokemon'
import { fetchAllKantoPokemon } from '../utils/api'

export function usePokedex() {
  const [pokemon, setPokemon] = useState<PokemonData[]>([])
  const [loading, setLoading] = useState(true)
  const [loaded, setLoaded] = useState(0)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchAllKantoPokemon((n) => setLoaded(n))
      .then(setPokemon)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  return { pokemon, loading, loaded, error }
}
