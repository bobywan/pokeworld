// Types Gen 1 uniquement — le type Fée (Fairy) n'existait pas dans Rouge/Bleu
export const TYPE_COLORS: Record<string, string> = {
  normal: '#9FA19F',
  fire: '#E62829',
  water: '#2980EF',
  electric: '#FAC000',
  grass: '#3FA129',
  ice: '#3DCEF3',
  fighting: '#FF8000',
  poison: '#8F41CB',
  ground: '#915121',
  flying: '#81B9EF',
  psychic: '#EF4179',
  bug: '#91A119',
  rock: '#AFA981',
  ghost: '#704170',
  dragon: '#5060E1',
  dark: '#624D4E',
  steel: '#60A1B8',
}

export const TYPE_FR: Record<string, string> = {
  normal: 'Normal',
  fire: 'Feu',
  water: 'Eau',
  electric: 'Électrik',
  grass: 'Plante',
  ice: 'Glace',
  fighting: 'Combat',
  poison: 'Poison',
  ground: 'Sol',
  flying: 'Vol',
  psychic: 'Psy',
  bug: 'Insecte',
  rock: 'Roche',
  ghost: 'Spectre',
  dragon: 'Dragon',
  dark: 'Ténèbres',
  steel: 'Acier',
}

// Liste ordonnée des types Gen 1 pour les filtres (sans Fée)
export const GEN1_TYPES = [
  'normal', 'fire', 'water', 'electric', 'grass', 'ice',
  'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug',
  'rock', 'ghost', 'dragon', 'dark', 'steel',
] as const

export const STAT_FR: Record<string, string> = {
  hp: 'PV',
  attack: 'Atk',
  defense: 'Déf',
  'special-attack': 'Atk Spé',
  'special-defense': 'Déf Spé',
  speed: 'Vitesse',
}

export const STAT_MAX: Record<string, number> = {
  hp: 255,
  attack: 190,
  defense: 230,
  'special-attack': 194,
  'special-defense': 230,
  speed: 200,
}

export const HABITAT_FR: Record<string, string> = {
  cave: 'Grottes',
  forest: 'Forêts',
  grassland: 'Champs',
  mountain: 'Montagnes',
  rare: 'Rares',
  'rough-terrain': 'Milieux hostiles',
  sea: 'Mers',
  urban: 'Urbains',
  'waters-edge': 'Marécages',
}

export const COLOR_FR: Record<string, string> = {
  black: 'Noir',
  blue: 'Bleu',
  brown: 'Marron',
  gray: 'Gris',
  green: 'Vert',
  pink: 'Rose',
  purple: 'Violet',
  red: 'Rouge',
  white: 'Blanc',
  yellow: 'Jaune',
}

export const STAGE_FR: Record<number, string> = {
  1: 'Forme de base',
  2: '1ère évolution',
  3: '2ème évolution',
}

export const KANTO_COUNT = 151

// Types Fée à supprimer des données Gen 1 (introduit en Gen 6)
export const GEN6_TYPES_TO_REMOVE = ['fairy'] as const
