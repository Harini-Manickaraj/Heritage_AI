import { clsx } from 'clsx'
import type { ReactNode } from 'react'

interface StatCardProps {
  label: string
  value: string | number
  subtext?: string
  icon: ReactNode
  iconVariant?: 'violet' | 'gold' | 'emerald' | 'rose' | 'sky' | 'amber'
  trend?: { value: number; label: string }
  className?: string
}

const iconVariantStyles = {
  violet:  'bg-violet-500/15 border-violet-500/20 text-violet-400',
  gold:    'bg-amber-500/15 border-amber-500/20 text-amber-400',
  emerald: 'bg-emerald-500/15 border-emerald-500/20 text-emerald-400',
  rose:    'bg-rose-500/15 border-rose-500/20 text-rose-400',
  sky:     'bg-sky-500/15 border-sky-500/20 text-sky-400',
  amber:   'bg-amber-500/15 border-amber-500/20 text-amber-400',
}

export function StatCard({ label, value, subtext, icon, iconVariant = 'violet', trend, className }: StatCardProps) {
  return (
    <div className={clsx('glass-card-hover p-5 animate-slide-in-up', className)}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">{label}</p>
          <p className="text-2xl font-bold text-slate-100 leading-none">
            {typeof value === 'number' ? value.toLocaleString() : value}
          </p>
          {subtext && <p className="text-xs text-slate-500 mt-1">{subtext}</p>}
          {trend && (
            <div className={clsx(
              'flex items-center gap-1 mt-2 text-xs font-medium',
              trend.value >= 0 ? 'text-emerald-400' : 'text-rose-400',
            )}>
              <span>{trend.value >= 0 ? '↑' : '↓'} {Math.abs(trend.value)}%</span>
              <span className="text-slate-500 font-normal">{trend.label}</span>
            </div>
          )}
        </div>
        <div className={clsx(
          'w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0',
          iconVariantStyles[iconVariant],
        )}>
          {icon}
        </div>
      </div>
    </div>
  )
}
