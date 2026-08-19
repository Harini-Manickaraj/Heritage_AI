/**
 * VerificationBadge — Core epistemic indicator for Heritage AI.
 *
 * This component clearly distinguishes between:
 *   - Original evidence
 *   - AI-enhanced content  (quality improved, content unchanged)
 *   - AI-reconstructed content  (missing region filled by AI)
 *   - Verified historical facts
 *   - AI-inferred information
 *   - Unverified information
 *
 * IMPORTANT: The system must never present an unsupported claim as a verified fact.
 */

import { clsx } from 'clsx'
import { CheckCircle2, Sparkles, Wand2, AlertCircle, Star, Zap } from 'lucide-react'
import type { VerificationStatus } from '../../data/mock'

interface VerificationBadgeProps {
  status: VerificationStatus
  confidence?: number
  compact?: boolean
  className?: string
}

const statusConfig: Record<VerificationStatus, {
  label: string
  description: string
  icon: typeof CheckCircle2
  classes: string
}> = {
  verified: {
    label: 'Verified',
    description: 'Confirmed by authoritative historical source',
    icon: CheckCircle2,
    classes: 'bg-emerald-500/12 text-emerald-400 border-emerald-500/25',
  },
  'ai-inferred': {
    label: 'AI-Inferred',
    description: 'AI deduced from patterns/context — not directly evidenced',
    icon: Sparkles,
    classes: 'bg-violet-500/12 text-violet-400 border-violet-500/25',
  },
  'ai-reconstructed': {
    label: 'AI Reconstructed',
    description: 'AI filled in missing region — no original evidence remains',
    icon: Wand2,
    classes: 'bg-sky-500/12 text-sky-400 border-sky-500/25',
  },
  'ai-enhanced': {
    label: 'AI-Enhanced',
    description: 'AI improved image quality — content is unchanged',
    icon: Zap,
    classes: 'bg-purple-500/12 text-purple-400 border-purple-500/25',
  },
  unverified: {
    label: 'Unverified',
    description: 'No authoritative source linked yet',
    icon: AlertCircle,
    classes: 'bg-stone-500/12 text-stone-400 border-stone-500/25',
  },
  original: {
    label: 'Original',
    description: 'Original, unmodified artefact data',
    icon: Star,
    classes: 'bg-amber-500/12 text-amber-400 border-amber-500/25',
  },
}

export function VerificationBadge({ status, confidence, compact = false, className }: VerificationBadgeProps) {
  const config = statusConfig[status] ?? statusConfig['unverified']
  const Icon = config.icon

  if (compact) {
    return (
      <span
        className={clsx('badge border', config.classes, className)}
        title={config.description}
      >
        <Icon className="w-3 h-3" />
        {config.label}
        {confidence !== undefined && (
          <span className="opacity-60 text-[10px]">{confidence}%</span>
        )}
      </span>
    )
  }

  return (
    <div className={clsx('flex items-center gap-2 p-2.5 rounded-lg border', config.classes, className)}>
      <Icon className="w-4 h-4 flex-shrink-0" />
      <div className="min-w-0">
        <p className="text-xs font-semibold leading-tight">{config.label}</p>
        <p className="text-[11px] opacity-70 leading-tight mt-0.5 truncate">{config.description}</p>
      </div>
      {confidence !== undefined && (
        <span className="ml-auto text-xs font-medium flex-shrink-0 opacity-80">{confidence}%</span>
      )}
    </div>
  )
}
