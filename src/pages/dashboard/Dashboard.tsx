import { WelcomeBanner } from './WelcomeBanner'
import { StatsRow } from './StatsRow'
import { RecentProjects } from './RecentProjects'
import { AIPipeline } from './AIPipeline'
import { RestorationComparison } from './RestorationComparison'
import { InscriptionOCR } from './InscriptionOCR'
import { HistoricalContext } from './HistoricalContext'
import { DamagePrediction } from './DamagePrediction'
import { ConservationRanking } from './ConservationRanking'
import { KnowledgeGraphPreview } from './KnowledgeGraphPreview'
import { UploadPanel } from './UploadPanel'

export default function Dashboard() {
  return (
    <div className="space-y-6 max-w-[1600px] mx-auto">
      {/* Welcome */}
      <WelcomeBanner />

      {/* Stats */}
      <StatsRow />

      {/* Row 1: Recent Projects + Upload Panel */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <RecentProjects />
        </div>
        <div>
          <UploadPanel />
        </div>
      </div>

      {/* Row 2: AI Pipeline + Restoration Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AIPipeline />
        <RestorationComparison />
      </div>

      {/* Row 3: Inscription OCR + Historical Context */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <InscriptionOCR />
        <HistoricalContext />
      </div>

      {/* Row 4: Knowledge Graph + Damage Prediction + Conservation Ranking */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <KnowledgeGraphPreview />
        </div>
        <div className="lg:col-span-1">
          <DamagePrediction />
        </div>
        <div className="lg:col-span-1">
          <ConservationRanking />
        </div>
      </div>
    </div>
  )
}
