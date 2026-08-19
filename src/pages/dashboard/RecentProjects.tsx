import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Calendar, ChevronRight, FolderOpen } from 'lucide-react'
import { Card, CardHeader, Badge, ProgressBar } from '../../components/ui'
import { mockProjects } from '../../data/mock'
import type { DamageLevel, ConservationPriority, ProjectStatus } from '../../data/mock'
import { clsx } from 'clsx'

function damageVariant(d: DamageLevel): 'critical' | 'high' | 'medium' | 'low' {
  return d === 'critical' ? 'critical' : d === 'severe' ? 'high' : d === 'moderate' ? 'medium' : 'low'
}

function priorityVariant(p: ConservationPriority): 'critical' | 'high' | 'medium' | 'low' {
  return p === 'critical' ? 'critical' : p === 'high' ? 'high' : p === 'medium' ? 'medium' : 'low'
}

function statusVariant(s: ProjectStatus): ProjectStatus {
  return s
}

const typeColors: Record<string, string> = {
  Inscription: 'bg-amber-500/15 text-amber-400',
  Manuscript:  'bg-lime-500/15 text-lime-400',
  Temple:      'bg-orange-500/15 text-orange-400',
  Sculpture:   'bg-purple-500/15 text-purple-400',
  Monument:    'bg-sky-500/15 text-sky-400',
  Document:    'bg-teal-500/15 text-teal-400',
}

export function RecentProjects() {
  const projects = mockProjects.slice(0, 5)

  return (
    <Card padding="none">
      <CardHeader
        title="Recent Heritage Projects"
        subtitle={`${mockProjects.length} total projects`}
        icon={<FolderOpen className="w-4 h-4" />}
        className="px-5 pt-5"
        action={
          <Link to="/projects" className="btn-ghost text-xs">
            View All <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        }
      />

      <div className="divide-y divide-violet-500/8">
        {projects.map((project) => (
          <div key={project.id} className="px-5 py-4 hover:bg-violet-500/5 transition-colors duration-150 group">
            <div className="flex items-start gap-4">
              {/* Thumbnail placeholder */}
              <div className={clsx(
                'w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center bg-gradient-to-br border border-white/5',
                project.thumbnailColor,
              )}>
                <span className="text-white/60 text-xs font-bold">{project.type[0]}</span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-200 truncate group-hover:text-violet-300 transition-colors">
                      {project.name}
                    </p>
                    <div className="flex items-center gap-3 mt-0.5 flex-wrap">
                      <span className="flex items-center gap-1 text-xs text-slate-500">
                        <MapPin className="w-3 h-3" /> {project.location}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-slate-500">
                        <Calendar className="w-3 h-3" /> {project.period}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-600 flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="flex items-center gap-2 flex-wrap mb-2">
                  <Badge variant={statusVariant(project.status)}>{project.status}</Badge>
                  <Badge variant={damageVariant(project.damageLevel)}>
                    {project.damageLevel} damage
                  </Badge>
                  <Badge variant={priorityVariant(project.conservationPriority)}>
                    {project.conservationPriority} priority
                  </Badge>
                  <span className={clsx('badge', typeColors[project.type] ?? 'bg-slate-500/15 text-slate-400')}>
                    {project.type}
                  </span>
                </div>

                {project.restorationConfidence > 0 && (
                  <ProgressBar
                    value={project.restorationConfidence}
                    label="Restoration Confidence"
                    showLabel
                    size="sm"
                    variant={
                      project.restorationConfidence >= 80 ? 'emerald'
                      : project.restorationConfidence >= 60 ? 'violet'
                      : 'gold'
                    }
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
