import { CheckCircle2, Circle, Loader2, AlertCircle, Cpu } from 'lucide-react'
import { Card, CardHeader, ProgressBar } from '../../components/ui'
import { mockAnalysisPipeline } from '../../data/mock'
import { clsx } from 'clsx'

const stepIcons = {
  complete: CheckCircle2,
  running: Loader2,
  pending: Circle,
  error: AlertCircle,
}

const stepColors = {
  complete: 'text-emerald-400',
  running: 'text-violet-400 animate-spin',
  pending: 'text-slate-600',
  error: 'text-rose-400',
}

const stepLabelColors = {
  complete: 'text-slate-300',
  running: 'text-violet-300 font-medium',
  pending: 'text-slate-500',
  error: 'text-rose-300',
}

export function AIPipeline() {
  const running = mockAnalysisPipeline.find((s) => s.status === 'running')
  const completedCount = mockAnalysisPipeline.filter((s) => s.status === 'complete').length
  const totalSteps = mockAnalysisPipeline.length
  const overallProgress = Math.round((completedCount / totalSteps) * 100)

  return (
    <Card padding="none">
      <CardHeader
        title="AI Analysis Pipeline"
        subtitle="Brihadeeswara Temple Inscription Panel"
        icon={<Cpu className="w-4 h-4" />}
        className="px-5 pt-5"
        action={
          <span className="badge bg-violet-500/15 text-violet-400 border border-violet-500/25">
            <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse" />
            Processing
          </span>
        }
      />

      <div className="px-5 pb-3">
        <ProgressBar
          value={overallProgress}
          label={`Overall Progress`}
          showLabel
          variant="violet"
        />
      </div>

      <div className="px-5 pb-5 space-y-1">
        {mockAnalysisPipeline.map((step, i) => {
          const Icon = stepIcons[step.status]
          return (
            <div
              key={step.id}
              className={clsx(
                'flex items-center gap-3 py-2 px-3 rounded-lg transition-colors duration-150',
                step.status === 'running' && 'bg-violet-500/8 border border-violet-500/15',
              )}
            >
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="text-[10px] font-mono text-slate-600 w-4 text-center">{i + 1}</span>
                <Icon className={clsx('w-4 h-4 flex-shrink-0', stepColors[step.status])} />
              </div>
              <span className={clsx('text-xs flex-1 truncate', stepLabelColors[step.status])}>
                {step.label}
              </span>
              {step.status === 'running' && step.progress !== undefined && (
                <div className="flex items-center gap-2 flex-shrink-0">
                  <div className="w-16 hidden sm:block">
                    <ProgressBar value={step.progress} size="sm" variant="violet" animated />
                  </div>
                  <span className="text-[10px] font-mono text-violet-400">{step.progress}%</span>
                </div>
              )}
              {step.status === 'complete' && step.duration && (
                <span className="text-[10px] font-mono text-slate-600 flex-shrink-0">{step.duration}</span>
              )}
            </div>
          )
        })}
      </div>

      {running && (
        <div className="px-5 pb-4">
          <p className="text-[11px] text-slate-600">
            Current step: <span className="text-violet-400">{running.label}</span>
            {' — '}
            <span className="text-slate-500">estimated 12s remaining</span>
          </p>
        </div>
      )}
    </Card>
  )
}
