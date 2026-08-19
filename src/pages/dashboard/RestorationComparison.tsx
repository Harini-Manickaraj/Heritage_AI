import { useState } from 'react'
import { Wand2, Info } from 'lucide-react'
import { Card, CardHeader, ProgressBar } from '../../components/ui'
import { clsx } from 'clsx'

type ViewMode = 'split' | 'original' | 'restored'

// Stable damage spots — fixed positions to avoid re-render flicker
const damageSpots = [
  { w: '18%', h: '8%',  l: '12%', t: '15%' },
  { w: '28%', h: '12%', l: '55%', t: '8%'  },
  { w: '12%', h: '6%',  l: '30%', t: '55%' },
  { w: '22%', h: '10%', l: '68%', t: '50%' },
  { w: '15%', h: '7%',  l: '5%',  t: '72%' },
  { w: '10%', h: '8%',  l: '42%', t: '30%' },
  { w: '20%', h: '9%',  l: '20%', t: '40%' },
  { w: '14%', h: '6%',  l: '75%', t: '72%' },
]

export function RestorationComparison() {
  const [mode, setMode] = useState<ViewMode>('split')

  const tabs: { id: ViewMode; label: string }[] = [
    { id: 'split', label: 'Split View' },
    { id: 'original', label: 'Original' },
    { id: 'restored', label: 'Restored' },
  ]

  return (
    <Card padding="none">
      <CardHeader
        title="Restoration Comparison"
        subtitle="Brihadeeswara Inscription Panel — Section 3"
        icon={<Wand2 className="w-4 h-4" />}
        className="px-5 pt-5"
      />

      {/* Tabs */}
      <div className="px-5 mb-4">
        <div className="flex gap-1 p-1 bg-navy-800/60 rounded-lg border border-violet-500/10 w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setMode(tab.id)}
              className={clsx(
                'px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-150',
                mode === tab.id
                  ? 'bg-violet-600/30 text-violet-300 border border-violet-500/30'
                  : 'text-slate-500 hover:text-slate-300',
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Image comparison area */}
      <div className="px-5 pb-4">
        <div className="rounded-xl overflow-hidden border border-violet-500/10 bg-navy-950/80">
          {mode === 'split' ? (
            <div className="flex h-44 relative">
              {/* Original side */}
              <div className="flex-1 relative overflow-hidden border-r border-violet-500/20">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-amber-950/80 to-stone-900/90 flex items-center justify-center"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, rgba(251,191,36,0.03) 0px, rgba(251,191,36,0.03) 1px, transparent 1px, transparent 8px)',
                  }}
                >
                  {/* Damage simulation — stable positions */}
                  <div className="absolute inset-0">
                    {damageSpots.map((spot, i) => (
                      <div
                        key={i}
                        className="absolute bg-stone-800/60 rounded-sm"
                        style={{ width: spot.w, height: spot.h, left: spot.l, top: spot.t }}
                      />
                    ))}
                  </div>
                  <span className="relative z-10 text-amber-400/50 text-xs font-mono">ORIGINAL · DAMAGED</span>
                </div>
                <div className="absolute bottom-2 left-2 text-[10px] px-1.5 py-0.5 rounded bg-black/60 text-amber-400 font-medium">
                  Original
                </div>
              </div>
              {/* Restored side */}
              <div className="flex-1 relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-violet-950/70 to-indigo-900/80 flex items-center justify-center"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, rgba(139,92,246,0.04) 0px, rgba(139,92,246,0.04) 1px, transparent 1px, transparent 8px)',
                  }}
                >
                  <span className="text-violet-400/50 text-xs font-mono">AI RESTORED · 82% CONFIDENCE</span>
                </div>
                <div className="absolute bottom-2 right-2 text-[10px] px-1.5 py-0.5 rounded bg-black/60 text-violet-400 font-medium">
                  AI Restored
                </div>
              </div>
              {/* Divider handle */}
              <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-white/20 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-white/15 border border-white/25 flex items-center justify-center cursor-ew-resize">
                  <span className="text-[8px] text-white/60">◁▷</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-44 relative overflow-hidden flex items-center justify-center"
              style={{
                background: mode === 'original'
                  ? 'linear-gradient(135deg, rgba(120,60,10,0.5), rgba(80,60,40,0.7))'
                  : 'linear-gradient(135deg, rgba(60,20,120,0.5), rgba(40,30,90,0.7))',
                backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 8px)',
              }}
            >
              <span className={clsx(
                'text-xs font-mono',
                mode === 'original' ? 'text-amber-400/50' : 'text-violet-400/50',
              )}>
                {mode === 'original' ? 'ORIGINAL · DAMAGED' : 'AI RESTORED · 82% CONFIDENCE'}
              </span>
            </div>
          )}
        </div>

        {/* Confidence scores */}
        <div className="mt-4 space-y-2">
          <ProgressBar value={82} label="Overall Restoration Confidence" showLabel variant="violet" />
          <ProgressBar value={94} label="Structural Fidelity" showLabel variant="emerald" size="sm" />
          <ProgressBar value={71} label="Missing Region Reconstruction" showLabel variant="gold" size="sm" />
        </div>

        {/* Disclaimer */}
        <div className="mt-3 flex items-start gap-2 p-2.5 rounded-lg bg-sky-500/8 border border-sky-500/15">
          <Info className="w-3.5 h-3.5 text-sky-400 mt-0.5 flex-shrink-0" />
          <p className="text-[11px] text-sky-300/80 leading-relaxed">
            Reconstructed regions are clearly marked. AI-restored content does not represent verified historical fact.
            Confidence scores reflect model certainty, not historical accuracy.
          </p>
        </div>
      </div>
    </Card>
  )
}
