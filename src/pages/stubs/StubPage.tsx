/**
 * StubPage — Placeholder for pages not yet implemented.
 * Each major section will replace this with real implementation.
 */

import type { ReactNode } from 'react'
import { Construction } from 'lucide-react'
import { clsx } from 'clsx'

interface StubPageProps {
  title: string
  description: string
  icon?: ReactNode
  badge?: string
  badgeVariant?: 'violet' | 'gold' | 'emerald'
  plannedFeatures?: string[]
}

const badgeStyles = {
  violet:  'bg-violet-500/15 text-violet-400 border-violet-500/20',
  gold:    'bg-amber-500/15 text-amber-400 border-amber-500/20',
  emerald: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/20',
}

export function StubPage({
  title,
  description,
  icon,
  badge,
  badgeVariant = 'violet',
  plannedFeatures = [],
}: StubPageProps) {
  return (
    <div className="max-w-2xl mx-auto py-16 flex flex-col items-center text-center animate-fade-in">
      {/* Icon */}
      <div className="w-16 h-16 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-6">
        {icon ?? <Construction className="w-8 h-8" />}
      </div>

      {badge && (
        <span className={clsx('badge border mb-4 text-xs', badgeStyles[badgeVariant])}>
          {badge}
        </span>
      )}

      <h1 className="text-2xl font-bold text-slate-100 mb-3">{title}</h1>
      <p className="text-slate-400 text-sm leading-relaxed max-w-md">{description}</p>

      {plannedFeatures.length > 0 && (
        <div className="mt-8 w-full glass-card p-6">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">Planned Features</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left">
            {plannedFeatures.map((feature, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-500/60 mt-1.5 flex-shrink-0" />
                <span className="text-sm text-slate-400">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
