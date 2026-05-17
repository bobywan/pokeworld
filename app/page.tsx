import { PokedexClient } from "@/components/PokedexClient";
import { fetchAllKantoPokemon } from "@/lib/api";

export default async function Home() {
  const pokemon = await fetchAllKantoPokemon();
  return <PokedexClient pokemon={pokemon} />;
}
