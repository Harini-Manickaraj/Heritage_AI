import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { clsx } from 'clsx'
import { Sidebar } from './Sidebar'
import { Header } from './Header'

export function AppShell() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="min-h-screen bg-navy-900">
      {/* Subtle background texture */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 20% 0%, rgba(139, 92, 246, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 100%, rgba(91, 33, 182, 0.04) 0%, transparent 50%)
          `,
        }}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <Sidebar collapsed={sidebarCollapsed} />

      {/* Header */}
      <Header
        sidebarCollapsed={sidebarCollapsed}
        onToggleSidebar={() => setSidebarCollapsed((v) => !v)}
      />

      {/* Main content */}
      <main
        className={clsx(
          'min-h-screen transition-all duration-300 pt-16',
          sidebarCollapsed ? 'pl-[64px]' : 'pl-[260px]',
        )}
      >
        <div className="p-6 animate-fade-in">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
