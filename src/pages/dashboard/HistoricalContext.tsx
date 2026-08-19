import { BookOpen, ExternalLink } from 'lucide-react'
import { Card, CardHeader, VerificationBadge } from '../../components/ui'
import { mockHistoricalFacts } from '../../data/mock'

export function HistoricalContext() {
  return (
    <Card padding="none">
      <CardHeader
        title="Historical Context"
        subtitle="AI-generated analysis with source attribution"
        icon={<BookOpen className="w-4 h-4" />}
        className="px-5 pt-5"
        action={
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse" />
            <span className="text-xs text-slate-500">AI Generated</span>
          </div>
        }
      />

      {/* Legend */}
      <div className="px-5 mb-4">
        <div className="flex flex-wrap items-center gap-2 p-3 rounded-xl bg-navy-800/50 border border-violet-500/10">
          <span className="text-[10px] text-slate-600 font-medium uppercase tracking-wider mr-1">Key:</span>
          {(['verified', 'ai-inferred', 'ai-reconstructed', 'unverified'] as const).map((s) => (
            <VerificationBadge key={s} status={s} compact />
          ))}
        </div>
      </div>

      <div className="px-5 pb-5 space-y-3">
        {mockHistoricalFacts.map((fact) => (
          <div
            key={fact.id}
            className="p-3.5 rounded-xl border border-violet-500/8 bg-navy-800/30 hover:border-violet-500/18 transition-colors"
          >
            <div className="flex items-start gap-3">
              <div className="flex-1 min-w-0">
                <p className="text-xs text-slate-200 leading-relaxed mb-2">{fact.claim}</p>
                <div className="flex items-center gap-2 flex-wrap">
                  <VerificationBadge status={fact.verificationStatus} confidence={fact.confidence} compact />
                  {fact.source && (
                    <span className="flex items-center gap-1 text-[10px] text-sky-400 hover:text-sky-300 cursor-pointer transition-colors">
                      <ExternalLink className="w-2.5 h-2.5" />
                      {fact.source}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
