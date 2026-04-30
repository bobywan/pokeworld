import type { PokemonData } from '../types/pokemon'
import { TYPE_FR, STAGE_FR } from './constants'

type Operator = '>' | '<' | '>=' | '<=' | '='

function applyOperator(actual: number, op: Operator, value: number): boolean {
  switch (op) {
    case '>':  return actual > value
    case '<':  return actual < value
    case '>=': return actual >= value
    case '<=': return actual <= value
    case '=':  return Math.abs(actual - value) < 0.01
  }
}

// Regex pour capturer un opérateur numérique : ex. "poids>50", "taille<=1.5"
const NUMERIC_RE = /^(poids|taille|hp|atk|def|vit)(>=|<=|>|<|=)(\d+(?:\.\d+)?)$/i

function matchesNumericToken(p: PokemonData, token: string): boolean | null {
  const m = token.match(NUMERIC_RE)
  if (!m) return null

  const [, field, rawOp, rawVal] = m
  const op = rawOp as Operator
  const val = parseFloat(rawVal)

  switch (field.toLowerCase()) {
    case 'poids': return applyOperator(p.weight / 10, op, val)
    case 'taille': return applyOperator(p.height / 10, op, val)
    case 'hp': {
      const stat = p.stats.find((s) => s.rawName === 'hp')
      return stat ? applyOperator(stat.value, op, val) : false
    }
    case 'atk': {
      const stat = p.stats.find((s) => s.rawName === 'attack')
      return stat ? applyOperator(stat.value, op, val) : false
    }
    case 'def': {
      const stat = p.stats.find((s) => s.rawName === 'defense')
      return stat ? applyOperator(stat.value, op, val) : false
    }
    case 'vit': {
      const stat = p.stats.find((s) => s.rawName === 'speed')
      return stat ? applyOperator(stat.value, op, val) : false
    }
    default: return null
  }
}

function textFields(p: PokemonData): string[] {
  return [
    p.name,
    String(p.id).padStart(3, '0'),
    p.habitat ?? '',
    p.color,
    STAGE_FR[p.stage] ?? '',
    ...p.types.map((t) => TYPE_FR[t] ?? t),
    // valeurs numériques lisibles (recherche "50 kg" → "50.0")
    `${(p.weight / 10).toFixed(1)}`,
    `${(p.height / 10).toFixed(1)}`,
  ].map((s) => s.toLowerCase())
}

function matchesToken(p: PokemonData, token: string): boolean {
  // Essai opérateur numérique
  const numResult = matchesNumericToken(p, token)
  if (numResult !== null) return numResult

  // Recherche textuelle sur tous les champs
  return textFields(p).some((field) => field.includes(token))
}

/**
 * Filtre un Pokémon selon une requête libre.
 * Chaque mot de la requête est un filtre indépendant (logique ET).
 *
 * Exemples :
 *   "forêt"          → Pokémon vivant en forêt
 *   "poison"         → Pokémon de type Poison
 *   "poids>50"       → Pokémon pesant plus de 50 kg
 *   "taille<=1"      → Pokémon mesurant 1 m ou moins
 *   "hp>80"          → Pokémon avec plus de 80 PV
 *   "forêt poids>30" → Pokémon de forêt pesant plus de 30 kg
 */
export function matchesPokemon(p: PokemonData, query: string): boolean {
  const tokens = query.trim().toLowerCase().split(/\s+/).filter(Boolean)
  if (tokens.length === 0) return true
  return tokens.every((token) => matchesToken(p, token))
}

/** Retourne un texte d'aide contextuel selon ce que l'utilisateur tape */
export function getSearchHint(query: string): string | null {
  const q = query.trim().toLowerCase()
  if (!q) return null
  if (/^poids/.test(q)) return 'Ex : poids>50  poids<=10  poids=6.9'
  if (/^taille/.test(q)) return 'Ex : taille>1.5  taille<0.5  taille=1'
  if (/^hp/.test(q)) return 'Ex : hp>100  hp<=45'
  if (/^atk/.test(q)) return 'Ex : atk>100  atk<=55'
  if (/^def/.test(q)) return 'Ex : def>=100'
  if (/^vit/.test(q)) return 'Ex : vit>100  vit<50'
  return null
}
