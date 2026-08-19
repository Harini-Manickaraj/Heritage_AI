import { clsx } from 'clsx'
import type { ReactNode } from 'react'

type BadgeVariant =
  | 'verified'
  | 'ai-inferred'
  | 'ai-reconstructed'
  | 'unverified'
  | 'original'
  | 'critical'
  | 'high'
  | 'medium'
  | 'low'
  | 'active'
  | 'completed'
  | 'pending'
  | 'archived'
  | 'default'
  | 'violet'
  | 'gold'

interface BadgeProps {
  variant?: BadgeVariant
  children: ReactNode
  className?: string
  dot?: boolean
}

const variantStyles: Record<BadgeVariant, string> = {
  verified:          'bg-emerald-500/15 text-emerald-400 border border-emerald-500/25',
  'ai-inferred':     'bg-violet-500/15 text-violet-400 border border-violet-500/25',
  'ai-reconstructed':'bg-sky-500/15 text-sky-400 border border-sky-500/25',
  unverified:        'bg-stone-500/15 text-stone-400 border border-stone-500/25',
  original:          'bg-amber-500/15 text-amber-400 border border-amber-500/25',
  critical:          'bg-rose-500/15 text-rose-400 border border-rose-500/25',
  high:              'bg-orange-500/15 text-orange-400 border border-orange-500/25',
  medium:            'bg-amber-500/15 text-amber-400 border border-amber-500/25',
  low:               'bg-teal-500/15 text-teal-400 border border-teal-500/25',
  active:            'bg-emerald-500/15 text-emerald-400 border border-emerald-500/25',
  completed:         'bg-sky-500/15 text-sky-400 border border-sky-500/25',
  pending:           'bg-amber-500/15 text-amber-400 border border-amber-500/25',
  archived:          'bg-stone-500/15 text-stone-400 border border-stone-500/25',
  default:           'bg-slate-500/15 text-slate-400 border border-slate-500/25',
  violet:            'bg-violet-500/15 text-violet-400 border border-violet-500/25',
  gold:              'bg-amber-500/15 text-amber-400 border border-amber-500/25',
}

const dotColors: Record<BadgeVariant, string> = {
  verified:          'bg-emerald-400',
  'ai-inferred':     'bg-violet-400',
  'ai-reconstructed':'bg-sky-400',
  unverified:        'bg-stone-400',
  original:          'bg-amber-400',
  critical:          'bg-rose-400',
  high:              'bg-orange-400',
  medium:            'bg-amber-400',
  low:               'bg-teal-400',
  active:            'bg-emerald-400',
  completed:         'bg-sky-400',
  pending:           'bg-amber-400',
  archived:          'bg-stone-400',
  default:           'bg-slate-400',
  violet:            'bg-violet-400',
  gold:              'bg-amber-400',
}

export function Badge({ variant = 'default', children, className, dot }: BadgeProps) {
  return (
    <span
      className={clsx(
        'badge',
        variantStyles[variant],
        className,
      )}
    >
      {dot && (
        <span className={clsx('w-1.5 h-1.5 rounded-full flex-shrink-0', dotColors[variant])} />
      )}
      {children}
    </span>
  )
}
