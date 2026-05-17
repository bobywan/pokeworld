import { COLOR_FR, GEN6_TYPES_TO_REMOVE, HABITAT_FR, KANTO_COUNT, STAT_FR } from "@/lib/constants";
import type { PokemonData, RawPokemon, RawSpecies } from "@/types/pokemon";

const BASE = "https://pokeapi.co/api/v2";

async function fetchPokemon(id: number): Promise<RawPokemon> {
  const res = await fetch(`${BASE}/pokemon/${id}`, { next: { revalidate: 86400 } });
  if (!res.ok) throw new Error(`Erreur HTTP ${res.status} pour le Pokémon #${id}`);
  return res.json();
}

async function fetchSpecies(id: number): Promise<RawSpecies> {
  const res = await fetch(`${BASE}/pokemon-species/${id}`, { next: { revalidate: 86400 } });
  if (!res.ok) throw new Error(`Erreur HTTP ${res.status} pour l'espèce #${id}`);
  return res.json();
}

function getIdFromUrl(url: string): number {
  const parts = url.split("/");
  return parseInt(parts[parts.length - 2] ?? "0", 10);
}

function getFrName(species: RawSpecies): string {
  const fr = species.names.find((n) => n.language.name === "fr");
  return fr?.name ?? species.names[0]?.name ?? "";
}

function getEvolutionStage(speciesId: number, speciesMap: Map<number, RawSpecies>): 1 | 2 | 3 {
  const species = speciesMap.get(speciesId);
  if (!species?.evolves_from_species) return 1;
  const parentId = getIdFromUrl(species.evolves_from_species.url);
  const parent = speciesMap.get(parentId);
  if (!parent?.evolves_from_species) return 2;
  return 3;
}

function filterGen1Types(types: string[]): string[] {
  return types.filter(
    (t) => !GEN6_TYPES_TO_REMOVE.includes(t as (typeof GEN6_TYPES_TO_REMOVE)[number]),
  );
}

export async function fetchAllKantoPokemon(): Promise<PokemonData[]> {
  const ids = Array.from({ length: KANTO_COUNT }, (_, i) => i + 1);

  const BATCH = 20;
  const pokemonResults: RawPokemon[] = [];
  const speciesResults: RawSpecies[] = [];

  for (let i = 0; i < ids.length; i += BATCH) {
    const batch = ids.slice(i, i + BATCH);
    const [pBatch, sBatch] = await Promise.all([
      Promise.all(batch.map(fetchPokemon)),
      Promise.all(batch.map(fetchSpecies)),
    ]);
    pokemonResults.push(...pBatch);
    speciesResults.push(...sBatch);
  }

  const speciesMap = new Map<number, RawSpecies>();
  for (const s of speciesResults) {
    speciesMap.set(s.id, s);
  }

  return pokemonResults.map((p, i) => {
    const species = speciesResults[i];
    if (!species) throw new Error(`Espèce manquante pour le Pokémon #${p.id}`);

    const rawTypes = p.types.sort((a, b) => a.slot - b.slot).map((t) => t.type.name);
    const gen1Types = filterGen1Types(rawTypes);

    return {
      id: p.id,
      name: getFrName(species),
      frName: getFrName(species),
      height: p.height,
      weight: p.weight,
      types: gen1Types.length > 0 ? gen1Types : rawTypes,
      stats: p.stats.map((s) => ({
        name: STAT_FR[s.stat.name] ?? s.stat.name,
        rawName: s.stat.name,
        value: s.base_stat,
      })),
      sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.id}.png`,
      habitat: species.habitat ? (HABITAT_FR[species.habitat.name] ?? species.habitat.name) : null,
      color: COLOR_FR[species.color.name] ?? species.color.name,
      stage: getEvolutionStage(species.id, speciesMap),
    };
  });
}
