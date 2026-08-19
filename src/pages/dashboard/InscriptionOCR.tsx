import { ScrollText, Info } from 'lucide-react'
import { Card, CardHeader, ProgressBar } from '../../components/ui'
import { mockOcrResult } from '../../data/mock'

export function InscriptionOCR() {
  return (
    <Card padding="none">
      <CardHeader
        title="Inscription OCR & Script Analysis"
        subtitle="Brihadeeswara Temple Inscription Panel"
        icon={<ScrollText className="w-4 h-4" />}
        className="px-5 pt-5"
        action={
          <span className="badge bg-amber-500/15 text-amber-400 border border-amber-500/25">
            {mockOcrResult.scriptIdentified}
          </span>
        }
      />

      <div className="px-5 pb-5 space-y-4">
        {/* Script info */}
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-lg bg-navy-800/60 border border-violet-500/10">
            <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Script Identified</p>
            <p className="text-xs font-semibold text-amber-400">{mockOcrResult.scriptIdentified}</p>
          </div>
          <div className="p-3 rounded-lg bg-navy-800/60 border border-violet-500/10">
            <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Language</p>
            <p className="text-xs font-semibold text-violet-400 leading-tight">{mockOcrResult.languageIdentified}</p>
          </div>
        </div>

        {/* OCR Output */}
        <div>
          <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-2">Raw Transcription</p>
          <div className="p-3 rounded-lg bg-navy-950/60 border border-amber-500/10 font-mono text-xs text-amber-300/80 leading-relaxed">
            {mockOcrResult.rawTranscription}
          </div>
        </div>

        <div>
          <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-2">Transliteration</p>
          <div className="p-3 rounded-lg bg-navy-950/60 border border-violet-500/10 font-mono text-xs text-violet-300/80 italic leading-relaxed">
            {mockOcrResult.transliteration}
          </div>
        </div>

        <div>
          <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-2">English Translation</p>
          <div className="p-3 rounded-lg bg-navy-950/60 border border-slate-500/10 text-xs text-slate-300 leading-relaxed">
            {mockOcrResult.translation}
          </div>
        </div>

        {/* Confidence */}
        <ProgressBar
          value={mockOcrResult.confidence}
          label="OCR Confidence"
          showLabel
          variant={mockOcrResult.confidence >= 80 ? 'emerald' : mockOcrResult.confidence >= 60 ? 'violet' : 'gold'}
        />

        {/* Stats row */}
        <div className="flex items-center gap-4 text-xs text-slate-500">
          <span><span className="text-rose-400 font-semibold">{mockOcrResult.damagedRegions}</span> damaged regions</span>
          <span>•</span>
          <span><span className="text-sky-400 font-semibold">{mockOcrResult.reconstructedChars}</span> chars reconstructed</span>
        </div>

        {/* Disclaimer */}
        <div className="flex items-start gap-2 p-2.5 rounded-lg bg-amber-500/6 border border-amber-500/12">
          <Info className="w-3.5 h-3.5 text-amber-400 mt-0.5 flex-shrink-0" />
          <p className="text-[11px] text-amber-300/70 leading-relaxed">
            Text marked <span className="font-mono">[damaged]</span> or <span className="font-mono">[reconstructed section]</span> indicates AI-inferred content.
            These are not verified historical transcriptions.
          </p>
        </div>
      </div>
    </Card>
  )
}
