import { clsx } from 'clsx'
import {
  PanelLeftOpen,
  PanelLeftClose,
  Search,
  Bell,
  HelpCircle,
  ChevronRight,
  Home,
} from 'lucide-react'
import { useLocation, Link } from 'react-router-dom'

interface HeaderProps {
  sidebarCollapsed: boolean
  onToggleSidebar: () => void
}

// Route → breadcrumb label map
const routeLabels: Record<string, string> = {
  '/': 'Dashboard',
  '/projects': 'Projects',
  '/upload': 'Upload Heritage Data',
  '/restoration': 'Restoration',
  '/studio': '3D & AR Studio',
  '/insights': 'Historical Insights',
  '/knowledge-graph': 'Knowledge Graph',
  '/prediction': 'Prediction & Ranking',
  '/fragment-matcher': 'Fragment Matcher',
  '/library': 'Library',
  '/reports': 'Reports',
  '/settings': 'Settings',
}

function useBreadcrumbs() {
  const { pathname } = useLocation()
  if (pathname === '/') return []
  const label = routeLabels[pathname] ?? pathname.replace('/', '').replace(/-/g, ' ')
  return [{ label, to: pathname }]
}

export function Header({ sidebarCollapsed, onToggleSidebar }: HeaderProps) {
  const breadcrumbs = useBreadcrumbs()

  return (
    <header
      className={clsx(
        'header-glass fixed top-0 right-0 z-30 flex items-center gap-4 px-5 transition-all duration-300',
        'h-16',
        sidebarCollapsed ? 'left-[64px]' : 'left-[260px]',
      )}
    >
      {/* Sidebar toggle */}
      <button
        onClick={onToggleSidebar}
        className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-200 hover:bg-violet-500/10 transition-all duration-150"
        aria-label="Toggle sidebar"
      >
        {sidebarCollapsed
          ? <PanelLeftOpen className="w-4 h-4" />
          : <PanelLeftClose className="w-4 h-4" />
        }
      </button>

      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-sm min-w-0 flex-1" aria-label="Breadcrumb">
        <Link to="/" className="text-slate-500 hover:text-slate-300 transition-colors flex-shrink-0">
          <Home className="w-3.5 h-3.5" />
        </Link>
        {breadcrumbs.map((crumb, i) => (
          <span key={crumb.to} className="flex items-center gap-1.5">
            <ChevronRight className="w-3 h-3 text-slate-600 flex-shrink-0" />
            <span
              className={clsx(
                'truncate',
                i === breadcrumbs.length - 1
                  ? 'text-slate-300 font-medium capitalize'
                  : 'text-slate-500 hover:text-slate-300 transition-colors capitalize',
              )}
            >
              {crumb.label}
            </span>
          </span>
        ))}
      </nav>

      {/* Search */}
      <div className="hidden md:flex items-center gap-2 bg-navy-800/60 border border-violet-500/15 rounded-lg px-3 py-1.5 w-64 group focus-within:border-violet-500/40 transition-all duration-150">
        <Search className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
        <input
          type="text"
          placeholder="Search heritage artifacts..."
          className="bg-transparent text-sm text-slate-300 placeholder-slate-600 outline-none w-full"
        />
        <kbd className="hidden lg:flex items-center gap-0.5 text-[10px] text-slate-600 bg-navy-700 px-1.5 py-0.5 rounded border border-slate-700">
          ⌘K
        </kbd>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-1">
        {/* Notifications */}
        <button className="relative w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-200 hover:bg-violet-500/10 transition-all duration-150" aria-label="Notifications">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-rose-500 rounded-full ring-1 ring-navy-900" />
        </button>

        {/* Help */}
        <button className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-200 hover:bg-violet-500/10 transition-all duration-150" aria-label="Help">
          <HelpCircle className="w-4 h-4" />
        </button>

        {/* Divider */}
        <div className="w-px h-5 bg-violet-500/15 mx-1" />

        {/* AI Status indicator */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse-slow" />
          <span className="text-xs font-medium text-emerald-400">AI Pipeline Active</span>
        </div>
      </div>
    </header>
  )
}
