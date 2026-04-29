import { STAT_MAX } from '../utils/constants'

interface Props {
  name: string
  rawName: string
  value: number
}

function getBarColor(pct: number): string {
  if (pct < 0.33) return '#ef4444'
  if (pct < 0.66) return '#f59e0b'
  return '#22c55e'
}

export function StatBar({ name, rawName, value }: Props) {
  const max = STAT_MAX[rawName] ?? 255
  const pct = Math.min(value / max, 1)
  const color = getBarColor(pct)

  return (
    <div className="flex items-center gap-2">
      <span className="w-14 shrink-0 text-right text-[10px] font-medium text-gray-500">
        {name}
      </span>
      <span className="w-6 shrink-0 text-[10px] font-bold text-gray-700">{value}</span>
      <div className="h-1.5 flex-1 rounded-full bg-gray-200">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${pct * 100}%`, backgroundColor: color }}
        />
      </div>
    </div>
  )
}
