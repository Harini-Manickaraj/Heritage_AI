import { FolderOpen, Wand2, ScanLine, ScrollText, Clock, AlertTriangle } from 'lucide-react'
import { StatCard } from '../../components/ui'
import { mockStats } from '../../data/mock'

export function StatsRow() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      <StatCard
        label="Total Projects"
        value={mockStats.totalProjects}
        icon={<FolderOpen className="w-5 h-5" />}
        iconVariant="violet"
        trend={{ value: 12, label: 'this month' }}
      />
      <StatCard
        label="Active Restorations"
        value={mockStats.activeRestorations}
        icon={<Wand2 className="w-5 h-5" />}
        iconVariant="sky"
        subtext="AI pipeline running"
      />
      <StatCard
        label="Artifacts Analyzed"
        value={mockStats.artifactsAnalyzed}
        icon={<ScanLine className="w-5 h-5" />}
        iconVariant="emerald"
        trend={{ value: 8, label: 'this week' }}
      />
      <StatCard
        label="Inscriptions Decoded"
        value={mockStats.inscriptionsDecoded}
        icon={<ScrollText className="w-5 h-5" />}
        iconVariant="gold"
        trend={{ value: 5, label: 'vs last month' }}
      />
      <StatCard
        label="Pending Review"
        value={mockStats.pendingReview}
        icon={<Clock className="w-5 h-5" />}
        iconVariant="amber"
        subtext="Awaiting researcher"
      />
      <StatCard
        label="Critical Alerts"
        value={mockStats.criticalAlerts}
        icon={<AlertTriangle className="w-5 h-5" />}
        iconVariant="rose"
        subtext="Immediate attention"
      />
    </div>
  )
}
