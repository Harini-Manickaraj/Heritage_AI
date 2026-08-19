import { TrendingUp, AlertTriangle } from 'lucide-react'
import { Card, CardHeader } from '../../components/ui'
import { mockDamagePredictions } from '../../data/mock'
import { clsx } from 'clsx'

const riskConfig = {
  high:   { bar: 'bg-rose-500', text: 'text-rose-400', bg: 'bg-rose-500/10 border-rose-500/20', label: 'High Risk' },
  medium: { bar: 'bg-amber-500', text: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20', label: 'Medium Risk' },
  low:    { bar: 'bg-emerald-500', text: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20', label: 'Low Risk' },
}

const urgencyWidth = (years: number) => {
  // Sites that will deteriorate in fewer years get wider bars
  if (years <= 5) return 95
  if (years <= 10) return 80
  if (years <= 15) return 60
  if (years <= 20) return 45
  return 30
}

export function DamagePrediction() {
  return (
    <Card padding="none">
      <CardHeader
        title="Future Damage Prediction"
        subtitle="AI-modeled deterioration risk forecast"
        icon={<TrendingUp className="w-4 h-4" />}
        className="px-5 pt-5"
        action={
          <span className="badge bg-rose-500/12 text-rose-400 border border-rose-500/20">
            <AlertTriangle className="w-3 h-3" />
            {mockDamagePredictions.filter(p => p.risk === 'high').length} High Risk
          </span>
        }
      />

      <div className="px-5 pb-5 space-y-3">
        {mockDamagePredictions.map((pred, i) => {
          const cfg = riskConfig[pred.risk]
          return (
            <div key={i} className={clsx('p-3.5 rounded-xl border', cfg.bg)}>
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-slate-200 truncate">{pred.location}</p>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">{pred.factor}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className={clsx('text-sm font-bold', cfg.text)}>{pred.estimatedYears}y</p>
                  <p className="text-[10px] text-slate-600">est. onset</p>
                </div>
              </div>
              {/* Urgency bar */}
              <div className="h-1 rounded-full bg-navy-950/60 overflow-hidden">
                <div
                  className={clsx('h-full rounded-full transition-all duration-700', cfg.bar)}
                  style={{ width: `${urgencyWidth(pred.estimatedYears)}%` }}
                />
              </div>
            </div>
          )
        })}

        <p className="text-[11px] text-slate-600 text-center mt-1">
          Predictions are AI-modelled estimates. Not verified conservation assessments.
        </p>
      </div>
    </Card>
  )
}
