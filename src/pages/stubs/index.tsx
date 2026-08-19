import {
  FolderOpen, Upload, Wand2, BookOpen, Network,
  Box, TrendingUp, Puzzle, Library, FileText, Settings,
} from 'lucide-react'
import { StubPage } from './StubPage'

export function ProjectsPage() {
  return (
    <StubPage
      title="Heritage Projects"
      description="Browse, filter and manage all heritage artifact projects. Each project tracks its full restoration lifecycle, AI analysis status, and historical context."
      icon={<FolderOpen className="w-8 h-8" />}
      badge="28 Active Projects"
      badgeVariant="violet"
      plannedFeatures={[
        'Project grid & list views',
        'Filter by type, period, location',
        'Bulk AI analysis launch',
        'Project comparison',
        'Export project reports',
        'Team collaboration & comments',
      ]}
    />
  )
}

export function UploadPage() {
  return (
    <StubPage
      title="Upload Heritage Data"
      description="Upload images, manuscripts, 3D scan data, and historical documents. Files are processed through the AI restoration and analysis pipeline."
      icon={<Upload className="w-8 h-8" />}
      badge="Accepts TIFF · PDF · OBJ · PLY"
      badgeVariant="gold"
      plannedFeatures={[
        'Drag-and-drop multi-file upload',
        'Batch metadata entry',
        'Pre-upload quality check',
        'GPS / location tagging',
        'Provenance & chain-of-custody',
        'Direct API / scanner integration',
      ]}
    />
  )
}

export function RestorationPage() {
  return (
    <StubPage
      title="Restoration Studio"
      description="Full AI-powered restoration workspace. Detect damage, remove stains and noise, enhance image quality, and reconstruct missing regions."
      icon={<Wand2 className="w-8 h-8" />}
      badge="AI Restoration"
      badgeVariant="violet"
      plannedFeatures={[
        'AI damage detection & heatmap',
        'Stain and noise removal',
        'Resolution enhancement (ESRGAN)',
        'Missing region inpainting',
        'Evidence-guided reconstruction',
        'Side-by-side comparison viewer',
        'Restoration confidence scoring',
        'Export annotated results',
      ]}
    />
  )
}

export function InsightsPage() {
  return (
    <StubPage
      title="Historical Insights"
      description="AI-generated historical context, entity extraction, fact verification, and source linking for analyzed heritage artifacts."
      icon={<BookOpen className="w-8 h-8" />}
      badge="Intelligence"
      badgeVariant="emerald"
      plannedFeatures={[
        'Historical context generation',
        'AI fact verification engine',
        'Source & evidence linking',
        'Verified vs AI-inferred distinction',
        'Timeline visualization',
        'Cross-artifact correlation',
        'Scholar annotation layer',
        'Export to citation formats',
      ]}
    />
  )
}

export function KnowledgeGraphPage() {
  return (
    <StubPage
      title="Historical Knowledge Graph"
      description="Interactive graph of entities, relationships, dynasties, periods, locations, and concepts extracted from the heritage artifact database."
      icon={<Network className="w-8 h-8" />}
      badge="Knowledge Graph"
      badgeVariant="violet"
      plannedFeatures={[
        'Interactive force-directed graph',
        'Entity type filtering',
        'Temporal graph slicing',
        'Cross-artifact relationship paths',
        'Dynasty & period overlays',
        'Export as GraphML / JSON-LD',
      ]}
    />
  )
}

export function StudioPage() {
  return (
    <StubPage
      title="3D & AR Studio"
      description="Multi-image 3D reconstruction, digital twins, and augmented reality visualization of heritage artifacts and monuments."
      icon={<Box className="w-8 h-8" />}
      badge="3D · AR"
      badgeVariant="violet"
      plannedFeatures={[
        'Multi-image photogrammetry',
        '3D digital twin generation',
        'AR monument overlay viewer',
        'Point cloud processing',
        'Texture mapping & UV unwrap',
        'WebGL interactive viewer',
        'Export OBJ / GLTF / STL',
      ]}
    />
  )
}

export function PredictionPage() {
  return (
    <StubPage
      title="Prediction & Conservation Ranking"
      description="AI-modelled future damage predictions and data-driven conservation priority ranking across all registered heritage sites."
      icon={<TrendingUp className="w-8 h-8" />}
      badge="Predictive AI"
      badgeVariant="gold"
      plannedFeatures={[
        'Deterioration forecast models',
        'Environmental factor integration',
        'Conservation priority scoring',
        'Resource allocation optimization',
        'Risk heatmap by geography',
        'Alert threshold configuration',
      ]}
    />
  )
}

export function FragmentMatcherPage() {
  return (
    <StubPage
      title="Artifact Fragment Matcher"
      description="AI-powered matching of broken or separated artifact fragments using visual, textural, and geometric analysis."
      icon={<Puzzle className="w-8 h-8" />}
      badge="Fragment AI"
      badgeVariant="violet"
      plannedFeatures={[
        'Visual similarity matching',
        'Edge geometry alignment',
        'Multi-artifact cross-matching',
        'Confidence-ranked match results',
        'Fragment provenance tracking',
        'Reassembly visualization',
      ]}
    />
  )
}

export function LibraryPage() {
  return (
    <StubPage
      title="Digital Heritage Library"
      description="Searchable archive of all analyzed artifacts, manuscripts, inscriptions, and heritage documents with rich metadata."
      icon={<Library className="w-8 h-8" />}
      badge="Searchable Archive"
      badgeVariant="emerald"
      plannedFeatures={[
        'Full-text and semantic search',
        'Filter by script, period, type',
        'Advanced metadata facets',
        'Bulk download & export',
        'IIIF manifest support',
        'DOI / citation generation',
      ]}
    />
  )
}

export function ReportsPage() {
  return (
    <StubPage
      title="Reports"
      description="Generate, schedule, and export comprehensive conservation and analysis reports for regulatory submissions and research publications."
      icon={<FileText className="w-8 h-8" />}
      badge="Reports & Export"
      badgeVariant="violet"
      plannedFeatures={[
        'Auto-generated conservation reports',
        'Customizable report templates',
        'PDF / DOCX export',
        'ASI submission format',
        'Scheduled email delivery',
        'Audit trail & version history',
      ]}
    />
  )
}

export function SettingsPage() {
  return (
    <StubPage
      title="Settings"
      description="Configure your Heritage AI workspace, user preferences, team access, API keys, and notification settings."
      icon={<Settings className="w-8 h-8" />}
      badge="Configuration"
      badgeVariant="violet"
      plannedFeatures={[
        'User profile & preferences',
        'Team & permissions management',
        'AI model configuration',
        'API keys & integrations',
        'Notification preferences',
        'Data retention & backup policies',
      ]}
    />
  )
}
