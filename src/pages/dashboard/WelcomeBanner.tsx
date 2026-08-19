import { Landmark, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function WelcomeBanner() {
  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening'

  return (
    <div
      className="rounded-2xl p-6 relative overflow-hidden border border-violet-500/15"
      style={{
        background: 'linear-gradient(135deg, rgba(20,23,46,0.95) 0%, rgba(30,18,60,0.9) 60%, rgba(17,19,38,0.95) 100%)',
      }}
    >
      {/* Decorative glows */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
      <div className="absolute bottom-0 left-1/3 w-48 h-48 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.4) 0%, transparent 70%)', transform: 'translateY(50%)' }} />

      {/* Temple silhouette accent */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
        <Landmark className="w-32 h-32 text-violet-300" />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-violet-500/15 text-violet-400 border border-violet-500/20">
            Heritage AI Platform
          </span>
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            AI Systems Online
          </span>
        </div>

        <h2 className="text-2xl font-bold text-slate-100 mb-1">
          {greeting}, Dr. Arjun Rao
        </h2>
        <p className="text-slate-400 text-sm max-w-xl">
          You have <span className="text-violet-400 font-semibold">5 critical alerts</span> requiring attention and{' '}
          <span className="text-amber-400 font-semibold">12 artifacts</span> awaiting review. The AI restoration pipeline is processing 3 active jobs.
        </p>

        <div className="flex items-center gap-3 mt-5">
          <Link to="/upload" className="btn-primary text-xs">
            Upload Heritage Data
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link to="/projects" className="btn-ghost text-xs">
            View All Projects
          </Link>
        </div>
      </div>
    </div>
  )
}
