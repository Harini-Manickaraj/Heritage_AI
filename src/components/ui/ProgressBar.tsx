import { clsx } from 'clsx'

interface ProgressBarProps {
  value: number      // 0–100
  variant?: 'violet' | 'gold' | 'emerald' | 'rose' | 'sky'
  size?: 'sm' | 'md'
  showLabel?: boolean
  label?: string
  className?: string
  animated?: boolean
}

const fillStyles = {
  violet:  'bg-gradient-to-r from-violet-600 to-violet-400',
  gold:    'bg-gradient-to-r from-amber-600 to-amber-400',
  emerald: 'bg-gradient-to-r from-emerald-600 to-emerald-400',
  rose:    'bg-gradient-to-r from-rose-600 to-rose-400',
  sky:     'bg-gradient-to-r from-sky-600 to-sky-400',
}

export function ProgressBar({
  value,
  variant = 'violet',
  size = 'md',
  showLabel = false,
  label,
  className,
  animated = false,
}: ProgressBarProps) {
  const clampedValue = Math.min(100, Math.max(0, value))

  return (
    <div className={clsx('w-full', className)}>
      {(showLabel || label) && (
        <div className="flex justify-between items-center mb-1.5">
          {label && <span className="text-xs text-slate-400">{label}</span>}
          {showLabel && <span className="text-xs font-medium text-slate-300">{clampedValue}%</span>}
        </div>
      )}
      <div
        className={clsx(
          'w-full rounded-full overflow-hidden bg-slate-700/40',
          size === 'sm' ? 'h-1' : 'h-1.5',
        )}
      >
        <div
          className={clsx(
            'h-full rounded-full transition-all duration-700',
            fillStyles[variant],
            animated && 'animate-pulse-slow',
          )}
          style={{ width: `${clampedValue}%` }}
        />
      </div>
    </div>
  )
}
