import { TYPE_COLORS, TYPE_FR } from '../utils/constants'

interface Props {
  type: string
  small?: boolean
}

export function TypeBadge({ type, small }: Props) {
  const color = TYPE_COLORS[type] ?? '#aaa'
  return (
    <span
      className={`inline-block rounded-full font-semibold text-white ${small ? 'px-2 py-0.5 text-[10px]' : 'px-3 py-1 text-xs'}`}
      style={{ backgroundColor: color }}
    >
      {TYPE_FR[type] ?? type}
    </span>
  )
}
