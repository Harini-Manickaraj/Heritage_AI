import { Network, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Card, CardHeader } from '../../components/ui'

interface GraphNode {
  id: string
  label: string
  type: 'artifact' | 'person' | 'place' | 'dynasty' | 'period' | 'concept'
  x: number
  y: number
}

interface GraphEdge {
  from: string
  to: string
  label: string
}

const nodes: GraphNode[] = [
  { id: 'n1', label: 'Brihadeeswara\nTemple', type: 'artifact', x: 50, y: 50 },
  { id: 'n2', label: 'Raja Raja\nChola I', type: 'person', x: 20, y: 25 },
  { id: 'n3', label: 'Chola\nDynasty', type: 'dynasty', x: 10, y: 55 },
  { id: 'n4', label: 'Thanjavur', type: 'place', x: 75, y: 30 },
  { id: 'n5', label: '10th–11th\nCentury CE', type: 'period', x: 80, y: 68 },
  { id: 'n6', label: 'Devadana\nSystem', type: 'concept', x: 38, y: 78 },
  { id: 'n7', label: 'Tamil-Brahmi\nScript', type: 'concept', x: 65, y: 82 },
]

const typeColors: Record<GraphNode['type'], string> = {
  artifact: '#8b5cf6',
  person:   '#f59e0b',
  place:    '#10b981',
  dynasty:  '#ef4444',
  period:   '#38bdf8',
  concept:  '#a78bfa',
}

const typeRadius: Record<GraphNode['type'], number> = {
  artifact: 8,
  person:   6,
  place:    5,
  dynasty:  6,
  period:   5,
  concept:  5,
}

const edges: GraphEdge[] = [
  { from: 'n2', to: 'n1', label: 'commissioned' },
  { from: 'n3', to: 'n2', label: 'ruled by' },
  { from: 'n1', to: 'n4', label: 'located in' },
  { from: 'n1', to: 'n5', label: 'dated to' },
  { from: 'n1', to: 'n6', label: 'mentions' },
  { from: 'n1', to: 'n7', label: 'uses script' },
]

function getNode(id: string) {
  return nodes.find((n) => n.id === id)!
}

export function KnowledgeGraphPreview() {
  return (
    <Card padding="none">
      <CardHeader
        title="Historical Knowledge Graph"
        subtitle="Entity relationships extracted from this artifact"
        icon={<Network className="w-4 h-4" />}
        className="px-5 pt-5"
        action={
          <Link to="/knowledge-graph" className="btn-ghost text-xs">
            Full Graph <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        }
      />

      <div className="px-5 pb-5">
        {/* SVG graph */}
        <div className="rounded-xl overflow-hidden border border-violet-500/10 bg-navy-950/60 relative">
          <svg
            viewBox="0 0 100 100"
            className="w-full"
            style={{ height: 220 }}
            aria-label="Knowledge graph visualization"
          >
            {/* Background grid */}
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(139,92,246,0.06)" strokeWidth="0.3" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />

            {/* Edges */}
            {edges.map((edge, i) => {
              const from = getNode(edge.from)
              const to = getNode(edge.to)
              const mx = (from.x + to.x) / 2
              const my = (from.y + to.y) / 2
              return (
                <g key={i}>
                  <line
                    x1={from.x} y1={from.y}
                    x2={to.x} y2={to.y}
                    stroke="rgba(139,92,246,0.25)"
                    strokeWidth="0.4"
                    strokeDasharray="2,1.5"
                  />
                  <text x={mx} y={my - 1} textAnchor="middle" fontSize="2.2" fill="rgba(148,163,184,0.5)" fontFamily="monospace">
                    {edge.label}
                  </text>
                </g>
              )
            })}

            {/* Nodes */}
            {nodes.map((node) => (
              <g key={node.id} style={{ cursor: 'pointer' }}>
                {/* Outer glow ring */}
                <circle
                  cx={node.x} cy={node.y}
                  r={typeRadius[node.type] + 2}
                  fill="none"
                  stroke={typeColors[node.type]}
                  strokeWidth="0.3"
                  opacity="0.3"
                />
                {/* Node circle */}
                <circle
                  cx={node.x} cy={node.y}
                  r={typeRadius[node.type]}
                  fill={typeColors[node.type]}
                  fillOpacity="0.2"
                  stroke={typeColors[node.type]}
                  strokeWidth="0.6"
                />
                {/* Node label */}
                {node.label.split('\n').map((line, li) => (
                  <text
                    key={li}
                    x={node.x}
                    y={node.y + typeRadius[node.type] + 3 + li * 3.2}
                    textAnchor="middle"
                    fontSize="2.5"
                    fill={typeColors[node.type]}
                    fontFamily="Inter, sans-serif"
                    fontWeight="500"
                  >
                    {line}
                  </text>
                ))}
              </g>
            ))}
          </svg>

          {/* Legend */}
          <div className="absolute bottom-2 right-2 flex flex-col gap-1">
            {Object.entries(typeColors).map(([type, color]) => (
              <div key={type} className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: color, opacity: 0.8 }} />
                <span className="text-[9px] text-slate-500 capitalize">{type}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-[11px] text-slate-600 mt-2 text-center">
          {nodes.length} entities · {edges.length} relationships · AI-extracted
        </p>
      </div>
    </Card>
  )
}
