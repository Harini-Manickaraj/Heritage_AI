import { Upload, Image, FileText, Box, Info } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Card, CardHeader } from '../../components/ui'

const uploadTypes = [
  { icon: Image, label: 'Heritage Images', sub: 'JPG, PNG, TIFF, RAW', accept: '.jpg,.jpeg,.png,.tiff,.raw' },
  { icon: FileText, label: 'Documents & Manuscripts', sub: 'PDF, DOCX, TXT', accept: '.pdf,.docx,.txt' },
  { icon: Box, label: '3D Scan Data', sub: 'OBJ, STL, PLY, Point Cloud', accept: '.obj,.stl,.ply' },
]

export function UploadPanel() {
  return (
    <Card padding="none">
      <CardHeader
        title="Upload Heritage Data"
        subtitle="Start a new AI analysis job"
        icon={<Upload className="w-4 h-4" />}
        className="px-5 pt-5"
        action={
          <Link to="/upload" className="btn-primary text-xs">
            Full Upload
          </Link>
        }
      />

      <div className="px-5 pb-5 space-y-3">
        {/* Drop zone */}
        <div className="border-2 border-dashed border-violet-500/25 rounded-xl p-6 flex flex-col items-center gap-2 cursor-pointer hover:border-violet-500/50 hover:bg-violet-500/5 transition-all duration-200 group">
          <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 group-hover:bg-violet-500/20 transition-colors">
            <Upload className="w-5 h-5" />
          </div>
          <p className="text-sm font-medium text-slate-300 text-center">Drop heritage files here</p>
          <p className="text-xs text-slate-500 text-center">or click to browse</p>
        </div>

        {/* Upload types */}
        <div className="grid grid-cols-3 gap-2">
          {uploadTypes.map((t) => {
            const Icon = t.icon
            return (
              <button
                key={t.label}
                className="flex flex-col items-center gap-2 p-3 rounded-xl border border-violet-500/10 hover:border-violet-500/25 hover:bg-violet-500/5 transition-all duration-150 text-center group"
              >
                <Icon className="w-5 h-5 text-violet-400 group-hover:text-violet-300 transition-colors" />
                <div>
                  <p className="text-[10px] font-medium text-slate-400 leading-tight">{t.label}</p>
                  <p className="text-[9px] text-slate-600 mt-0.5">{t.sub}</p>
                </div>
              </button>
            )
          })}
        </div>

        <div className="flex items-start gap-2 p-2.5 rounded-lg bg-violet-500/6 border border-violet-500/12">
          <Info className="w-3.5 h-3.5 text-violet-400 mt-0.5 flex-shrink-0" />
          <p className="text-[11px] text-violet-300/70 leading-relaxed">
            Uploaded data will be processed by the AI pipeline. Original files are always preserved unmodified.
          </p>
        </div>
      </div>
    </Card>
  )
}
