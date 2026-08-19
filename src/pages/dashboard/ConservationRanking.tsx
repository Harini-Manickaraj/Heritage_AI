import { Shield, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Card, CardHeader, Badge, ProgressBar } from '../../components/ui'
import { mockConservationRanking } from '../../data/mock'
import type { ConservationPriority } from '../../data/mock'
import { clsx } from 'clsx'

function priorityVariant(p: ConservationPriority) {
  return p
}

const rankColors = ['text-rose-400', 'text-orange-400', 'text-amber-400', 'text-sky-400', 'text-teal-400']

export function ConservationRanking() {
  return (
    <Card padding="none">
      <CardHeader
        title="Conservation Priority Ranking"
        subtitle="Top 5 artifacts requiring immediate action"
        icon={<Shield className="w-4 h-4" />}
        className="px-5 pt-5"
        action={
          <Link to="/prediction" className="btn-ghost text-xs">
            Full List <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        }
      />

      <div className="px-5 pb-5 space-y-2.5">
        {mockConservationRanking.map((item, i) => (
          <div key={item.rank} className="flex items-start gap-3 p-3 rounded-xl bg-navy-800/30 border border-violet-500/8 hover:border-violet-500/18 transition-colors">
            {/* Rank number */}
            <span className={clsx('text-lg font-black leading-none mt-0.5 flex-shrink-0 w-6 text-center', rankColors[i])}>
              {item.rank}
            </span>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-1">
                <p className="text-xs font-semibold text-slate-200 truncate">{item.name}</p>
                <Badge variant={priorityVariant(item.priority)}>{item.priority}</Badge>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed mb-2">{item.reason}</p>
              <div className="flex items-center gap-2">
                <div className="flex-1">
                  <ProgressBar
                    value={item.score}
                    size="sm"
                    variant={
                      item.priority === 'critical' ? 'rose'
                      : item.priority === 'high' ? 'gold'
                      : 'violet'
                    }
                  />
                </div>
                <span className="text-[10px] font-mono text-slate-500 flex-shrink-0">{item.score}/100</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
