import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AppShell } from './components/layout/AppShell'
import Dashboard from './pages/dashboard/Dashboard'
import {
  ProjectsPage,
  UploadPage,
  RestorationPage,
  InsightsPage,
  KnowledgeGraphPage,
  StudioPage,
  PredictionPage,
  FragmentMatcherPage,
  LibraryPage,
  ReportsPage,
  SettingsPage,
} from './pages/stubs'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* All routes wrapped inside the AppShell (sidebar + header) */}
        <Route element={<AppShell />}>
          <Route index path="/" element={<Dashboard />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/restoration" element={<RestorationPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/knowledge-graph" element={<KnowledgeGraphPage />} />
          <Route path="/studio" element={<StudioPage />} />
          <Route path="/prediction" element={<PredictionPage />} />
          <Route path="/fragment-matcher" element={<FragmentMatcherPage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          {/* Fallback — redirect unknown paths to dashboard */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
