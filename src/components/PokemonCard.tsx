import { useState } from 'react'
import type { PokemonData } from '../types/pokemon'
import { TYPE_COLORS, STAGE_FR } from '../utils/constants'
import { TypeBadge } from './TypeBadge'
import { StatBar } from './StatBar'

interface PokemonCardProps {
  pokemon: PokemonData
}

function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r},${g},${b},${alpha})`
}

export function PokemonCard({ pokemon }: PokemonCardProps) {
  const [imgError, setImgError] = useState(false)
  const primaryColor = TYPE_COLORS[pokemon.types[0]] ?? '#9FA19F'

  return (
    <div className="pokemon-card group relative overflow-hidden rounded-card bg-surface shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      {/* En-tête coloré selon le type */}
      <div
        className="relative flex h-40 items-end justify-center pb-2"
        style={{
          background: `linear-gradient(145deg, ${hexToRgba(primaryColor, 0.22)} 0%, ${hexToRgba(primaryColor, 0.08)} 100%)`,
        }}
      >
        {/* Cercles décoratifs */}
        <div
          className="absolute -right-5 -top-5 h-28 w-28 rounded-full opacity-15"
          style={{ backgroundColor: primaryColor }}
        />
        <div
          className="absolute -left-4 bottom-0 h-20 w-20 rounded-full opacity-10"
          style={{ backgroundColor: primaryColor }}
        />

        {/* Numéro */}
        <span className="absolute left-3 top-3 font-mono text-[10px] font-bold text-text-muted">
          #{String(pokemon.id).padStart(3, '0')}
        </span>

        {/* Image officielle */}
        <img
          src={
            imgError
              ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
              : pokemon.sprite
          }
          alt={pokemon.name}
          onError={() => setImgError(true)}
          className="relative z-10 h-32 w-32 object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Corps de la carte */}
      <div className="p-3">
        <h2 className="mb-2 text-sm font-bold text-text-primary leading-tight">{pokemon.name}</h2>

        <div className="mb-3 flex flex-wrap gap-1">
          {pokemon.types.map((t) => (
            <TypeBadge key={t} type={t} small />
          ))}
        </div>

        <div className="mb-3 grid grid-cols-2 gap-x-2 gap-y-1 rounded-lg bg-surface-subtle p-2 text-[10px]">
          <InfoRow label="Habitat" value={pokemon.habitat ?? 'Inconnu'} />
          <InfoRow label="Couleur" value={pokemon.color} />
          <InfoRow label="Taille" value={`${(pokemon.height / 10).toFixed(1)} m`} />
          <InfoRow label="Poids" value={`${(pokemon.weight / 10).toFixed(1)} kg`} />
          <div className="col-span-2">
            <InfoRow label="Stade" value={STAGE_FR[pokemon.stage]} />
          </div>
        </div>

        <div className="space-y-1">
          {pokemon.stats.map((s) => (
            <StatBar key={s.rawName} name={s.name} rawName={s.rawName} value={s.value} />
          ))}
        </div>
      </div>
    </div>
  )
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline gap-1 min-w-0">
      <span className="shrink-0 font-medium text-text-muted">{label} :</span>
      <span className="font-semibold text-text-secondary truncate">{value}</span>
    </div>
  )
}
