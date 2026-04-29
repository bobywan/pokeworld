import { useState } from 'react'
import type { PokemonData } from '../types/pokemon'
import { TYPE_COLORS, STAGE_FR } from '../utils/constants'
import { TypeBadge } from './TypeBadge'
import { StatBar } from './StatBar'

interface Props {
  pokemon: PokemonData
}

function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r},${g},${b},${alpha})`
}

export function PokemonCard({ pokemon }: Props) {
  const [imgError, setImgError] = useState(false)
  const primaryColor = TYPE_COLORS[pokemon.types[0]] ?? '#A8A878'

  return (
    <div
      className="pokemon-card group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Card header with type gradient */}
      <div
        className="relative flex h-44 items-end justify-center pb-2"
        style={{
          background: `linear-gradient(135deg, ${hexToRgba(primaryColor, 0.25)} 0%, ${hexToRgba(primaryColor, 0.12)} 100%)`,
        }}
      >
        {/* Decorative circles */}
        <div
          className="absolute -right-6 -top-6 h-32 w-32 rounded-full opacity-20"
          style={{ backgroundColor: primaryColor }}
        />
        <div
          className="absolute -left-4 -bottom-4 h-24 w-24 rounded-full opacity-10"
          style={{ backgroundColor: primaryColor }}
        />

        {/* Pokémon number */}
        <span className="absolute left-3 top-3 font-mono text-xs font-bold text-gray-400">
          #{String(pokemon.id).padStart(3, '0')}
        </span>

        {/* Pokémon image */}
        <img
          src={imgError ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png` : pokemon.sprite}
          alt={pokemon.name}
          onError={() => setImgError(true)}
          className="relative z-10 h-36 w-36 object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
      </div>

      {/* Card body */}
      <div className="p-4">
        {/* Name */}
        <h2 className="mb-2 text-lg font-bold text-gray-800">{pokemon.name}</h2>

        {/* Types */}
        <div className="mb-3 flex flex-wrap gap-1.5">
          {pokemon.types.map((t) => (
            <TypeBadge key={t} type={t} small />
          ))}
        </div>

        {/* Info grid */}
        <div className="mb-3 grid grid-cols-2 gap-x-2 gap-y-1 rounded-xl bg-gray-50 p-2.5 text-[11px]">
          <InfoRow label="Habitat" value={pokemon.habitat ?? 'Inconnu'} />
          <InfoRow label="Couleur" value={pokemon.color} />
          <InfoRow label="Hauteur" value={`${(pokemon.height / 10).toFixed(1)} m`} />
          <InfoRow label="Poids" value={`${(pokemon.weight / 10).toFixed(1)} kg`} />
          <div className="col-span-2">
            <InfoRow label="Stade" value={STAGE_FR[pokemon.stage]} />
          </div>
        </div>

        {/* Stats */}
        <div className="space-y-1">
          {pokemon.stats.map((s) => (
            <StatBar
              key={s.rawName}
              name={s.name}
              rawName={s.rawName}
              value={s.value}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline gap-1">
      <span className="shrink-0 font-medium text-gray-400">{label} :</span>
      <span className="font-semibold text-gray-700">{value}</span>
    </div>
  )
}
