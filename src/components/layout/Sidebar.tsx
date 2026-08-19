import { NavLink, useLocation } from 'react-router-dom'
import { clsx } from 'clsx'
import {
  LayoutDashboard,
  FolderOpen,
  Upload,
  Wand2,
  BookOpen,
  Network,
  Box,
  TrendingUp,
  Puzzle,
  Library,
  FileText,
  Settings,
  ChevronRight,
  Landmark,
} from 'lucide-react'

interface NavItem {
  label: string
  to: string
  icon: typeof LayoutDashboard
  badge?: string
}

interface NavSection {
  section?: string
  items: NavItem[]
}

const navStructure: NavSection[] = [
  {
    items: [
      { label: 'Dashboard', to: '/', icon: LayoutDashboard },
    ],
  },
  {
    section: 'Projects',
    items: [
      { label: 'Projects', to: '/projects', icon: FolderOpen, badge: '28' },
      { label: 'Upload Heritage Data', to: '/upload', icon: Upload },
    ],
  },
  {
    section: 'Preservation',
    items: [
      { label: 'Restoration', to: '/restoration', icon: Wand2 },
      { label: '3D & AR Studio', to: '/studio', icon: Box },
    ],
  },
  {
    section: 'Intelligence',
    items: [
      { label: 'Historical Insights', to: '/insights', icon: BookOpen },
      { label: 'Knowledge Graph', to: '/knowledge-graph', icon: Network },
      { label: 'Prediction & Ranking', to: '/prediction', icon: TrendingUp },
      { label: 'Fragment Matcher', to: '/fragment-matcher', icon: Puzzle },
    ],
  },
  {
    section: 'Management',
    items: [
      { label: 'Library', to: '/library', icon: Library },
      { label: 'Reports', to: '/reports', icon: FileText },
      { label: 'Settings', to: '/settings', icon: Settings },
    ],
  },
]

interface SidebarProps {
  collapsed: boolean
}

export function Sidebar({ collapsed }: SidebarProps) {
  const location = useLocation()

  return (
    <aside
      className={clsx(
        'sidebar-glass fixed left-0 top-0 h-screen z-40 flex flex-col transition-all duration-300',
        collapsed ? 'w-[64px]' : 'w-[260px]',
      )}
    >
      {/* Logo */}
      <div className={clsx(
        'flex items-center gap-3 px-4 border-b border-violet-500/10',
        'h-16 flex-shrink-0',
      )}>
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-purple-700 flex items-center justify-center flex-shrink-0 shadow-glow-violet">
          <Landmark className="w-4 h-4 text-white" />
        </div>
        {!collapsed && (
          <div className="min-w-0 animate-fade-in">
            <h1 className="text-sm font-bold text-gradient-violet leading-tight">Heritage AI</h1>
            <p className="text-[10px] text-slate-500 leading-tight truncate">Preserve. Restore. Understand.</p>
          </div>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto no-scrollbar py-3 px-2">
        {navStructure.map((section, si) => (
          <div key={si} className="mb-1">
            {section.section && !collapsed && (
              <p className="nav-section-label mt-3 mb-1">{section.section}</p>
            )}
            {section.section && !collapsed && (
              <div className="divider mb-1" />
            )}
            {section.items.map((item) => {
              const Icon = item.icon
              const isActive = item.to === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(item.to)

              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  title={collapsed ? item.label : undefined}
                  className={clsx(
                    'nav-item mb-0.5 relative group',
                    isActive && 'active',
                    collapsed && 'justify-center px-0 w-full',
                  )}
                >
                  <Icon className={clsx('flex-shrink-0', collapsed ? 'w-5 h-5' : 'w-4 h-4')} />
                  {!collapsed && (
                    <span className="flex-1 truncate">{item.label}</span>
                  )}
                  {!collapsed && item.badge && (
                    <span className="ml-auto text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-violet-500/20 text-violet-400 border border-violet-500/20">
                      {item.badge}
                    </span>
                  )}
                  {/* Tooltip for collapsed */}
                  {collapsed && (
                    <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 z-50 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                      <div className="bg-navy-700 border border-violet-500/20 text-slate-200 text-xs px-2.5 py-1.5 rounded-lg whitespace-nowrap shadow-card">
                        {item.label}
                        <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-navy-700" />
                      </div>
                    </div>
                  )}
                </NavLink>
              )
            })}
          </div>
        ))}
      </nav>

      {/* User profile */}
      <div className={clsx(
        'border-t border-violet-500/10 p-3 flex-shrink-0',
        collapsed ? 'flex justify-center' : '',
      )}>
        {collapsed ? (
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-600 to-purple-700 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
            AR
          </div>
        ) : (
          <div className="glass-card-hover rounded-xl p-3 flex items-center gap-3 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-600 to-purple-700 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
              AR
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold text-slate-200 truncate">Dr. Arjun Rao</p>
              <p className="text-[10px] text-slate-500 truncate">Archaeologist · Researcher</p>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
          </div>
        )}
      </div>
    </aside>
  )
}
