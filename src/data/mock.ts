// ─────────────────────────────────────────────────────────────────────────────
//  Heritage AI — Mock Data Layer
//  All data is static mock data. Replace with real API calls when backend ready.
// ─────────────────────────────────────────────────────────────────────────────

export type HeritageType =
  | 'Temple'
  | 'Manuscript'
  | 'Inscription'
  | 'Monument'
  | 'Sculpture'
  | 'Document';

export type VerificationStatus =
  | 'verified'           // Confirmed by authoritative historical source
  | 'ai-inferred'        // AI deduced from patterns / context, not directly evidenced
  | 'ai-reconstructed'   // AI filled in missing region, no original evidence
  | 'ai-enhanced'        // AI improved quality / clarity, content unchanged
  | 'unverified'         // No source linked yet
  | 'original';          // Original, unmodified artefact data

export type ProjectStatus = 'active' | 'completed' | 'pending' | 'archived';
export type DamageLevel = 'critical' | 'severe' | 'moderate' | 'minor';
export type ConservationPriority = 'critical' | 'high' | 'medium' | 'low';

// ── Types ─────────────────────────────────────────────────────────────────────

export interface HeritageProject {
  id: string;
  name: string;
  type: HeritageType;
  location: string;
  period: string;
  status: ProjectStatus;
  damageLevel: DamageLevel;
  conservationPriority: ConservationPriority;
  restorationConfidence: number; // 0–100
  lastUpdated: string;
  createdAt: string;
  thumbnailColor: string; // placeholder gradient for image
  scriptsDetected?: string[];
  languagesDetected?: string[];
  tags: string[];
  aiAnalysisComplete: boolean;
}

export interface DashboardStats {
  totalProjects: number;
  activeRestorations: number;
  artifactsAnalyzed: number;
  inscriptionsDecoded: number;
  pendingReview: number;
  criticalAlerts: number;
}

export interface AIAnalysisStep {
  id: string;
  label: string;
  status: 'complete' | 'running' | 'pending' | 'error';
  progress?: number; // 0–100, only for running
  duration?: string;
}

export interface HistoricalFact {
  id: string;
  claim: string;
  verificationStatus: VerificationStatus;
  source?: string;
  confidence?: number;
}

export interface DamagePrediction {
  location: string;
  risk: 'high' | 'medium' | 'low';
  estimatedYears: number;
  factor: string;
}

export interface ConservationRank {
  rank: number;
  name: string;
  type: HeritageType;
  priority: ConservationPriority;
  score: number;
  reason: string;
}

// ── Mock Projects ──────────────────────────────────────────────────────────────

export const mockProjects: HeritageProject[] = [
  {
    id: 'proj-001',
    name: 'Brihadeeswara Temple Inscription Panel',
    type: 'Inscription',
    location: 'Thanjavur, Tamil Nadu',
    period: '10th–11th Century CE',
    status: 'active',
    damageLevel: 'severe',
    conservationPriority: 'critical',
    restorationConfidence: 82,
    lastUpdated: '2 hours ago',
    createdAt: '2026-08-10',
    thumbnailColor: 'from-amber-900/60 to-stone-800/60',
    scriptsDetected: ['Tamil-Brahmi', 'Grantha'],
    languagesDetected: ['Tamil', 'Sanskrit'],
    tags: ['Chola', 'Temple', 'Tamil Nadu ASI'],
    aiAnalysisComplete: true,
  },
  {
    id: 'proj-002',
    name: 'Ajanta Cave 26 Mural Fragment',
    type: 'Manuscript',
    location: 'Aurangabad, Maharashtra',
    period: '5th–6th Century CE',
    status: 'active',
    damageLevel: 'critical',
    conservationPriority: 'critical',
    restorationConfidence: 67,
    lastUpdated: '5 hours ago',
    createdAt: '2026-08-08',
    thumbnailColor: 'from-orange-900/60 to-red-900/60',
    scriptsDetected: ['Brahmi'],
    languagesDetected: ['Pali', 'Sanskrit'],
    tags: ['Buddhist', 'UNESCO', 'Maharashtra'],
    aiAnalysisComplete: false,
  },
  {
    id: 'proj-003',
    name: 'Hampi Vittala Temple Sculpture',
    type: 'Sculpture',
    location: 'Hampi, Karnataka',
    period: '15th Century CE',
    status: 'completed',
    damageLevel: 'moderate',
    conservationPriority: 'high',
    restorationConfidence: 91,
    lastUpdated: '1 day ago',
    createdAt: '2026-07-25',
    thumbnailColor: 'from-violet-900/60 to-purple-900/60',
    scriptsDetected: ['Kannada'],
    languagesDetected: ['Kannada', 'Telugu'],
    tags: ['Vijayanagara', 'UNESCO', 'Karnataka'],
    aiAnalysisComplete: true,
  },
  {
    id: 'proj-004',
    name: 'Indus Valley Seal — Mohenjo-daro',
    type: 'Inscription',
    location: 'Mohenjo-daro, Sindh',
    period: 'c. 2600–1900 BCE',
    status: 'active',
    damageLevel: 'moderate',
    conservationPriority: 'high',
    restorationConfidence: 44,
    lastUpdated: '3 days ago',
    createdAt: '2026-07-30',
    thumbnailColor: 'from-teal-900/60 to-cyan-900/60',
    scriptsDetected: ['Indus Script'],
    languagesDetected: ['Unknown (Proto-Dravidian hypothesis)'],
    tags: ['IVC', 'Undeciphered', 'UNESCO'],
    aiAnalysisComplete: true,
  },
  {
    id: 'proj-005',
    name: 'Konark Sun Temple Relief Panel',
    type: 'Temple',
    location: 'Konark, Odisha',
    period: '13th Century CE',
    status: 'pending',
    damageLevel: 'minor',
    conservationPriority: 'medium',
    restorationConfidence: 0,
    lastUpdated: '1 week ago',
    createdAt: '2026-08-12',
    thumbnailColor: 'from-yellow-900/60 to-amber-800/60',
    scriptsDetected: [],
    languagesDetected: [],
    tags: ['Ganga Dynasty', 'UNESCO', 'Odisha ASI'],
    aiAnalysisComplete: false,
  },
  {
    id: 'proj-006',
    name: 'Nalanda University Palm Leaf Manuscript',
    type: 'Manuscript',
    location: 'Nalanda, Bihar',
    period: '8th–12th Century CE',
    status: 'active',
    damageLevel: 'severe',
    conservationPriority: 'critical',
    restorationConfidence: 73,
    lastUpdated: '6 hours ago',
    createdAt: '2026-08-05',
    thumbnailColor: 'from-lime-900/60 to-green-900/60',
    scriptsDetected: ['Siddham', 'Proto-Bengali'],
    languagesDetected: ['Sanskrit', 'Pali'],
    tags: ['Buddhist', 'Manuscript', 'Bihar'],
    aiAnalysisComplete: true,
  },
];

// ── Dashboard Stats ────────────────────────────────────────────────────────────

export const mockStats: DashboardStats = {
  totalProjects: 347,
  activeRestorations: 28,
  artifactsAnalyzed: 1842,
  inscriptionsDecoded: 634,
  pendingReview: 12,
  criticalAlerts: 5,
};

// ── AI Analysis Pipeline Steps ─────────────────────────────────────────────────

export const mockAnalysisPipeline: AIAnalysisStep[] = [
  { id: 'step-1', label: 'Image Ingestion & Preprocessing', status: 'complete', duration: '2.1s' },
  { id: 'step-2', label: 'Damage Detection & Mapping', status: 'complete', duration: '4.3s' },
  { id: 'step-3', label: 'Stain & Noise Removal', status: 'complete', duration: '6.8s' },
  { id: 'step-4', label: 'AI Image Enhancement', status: 'running', progress: 63 },
  { id: 'step-5', label: 'Missing Region Reconstruction', status: 'pending' },
  { id: 'step-6', label: 'Script & Language Identification', status: 'pending' },
  { id: 'step-7', label: 'OCR & Inscription Analysis', status: 'pending' },
  { id: 'step-8', label: 'Historical Context Generation', status: 'pending' },
  { id: 'step-9', label: 'Metadata Generation & Indexing', status: 'pending' },
];

// ── Historical Facts (with verification status) ────────────────────────────────

export const mockHistoricalFacts: HistoricalFact[] = [
  {
    id: 'fact-1',
    claim: 'The inscription belongs to the reign of Raja Raja Chola I (985–1014 CE)',
    verificationStatus: 'verified',
    source: 'Archaeological Survey of India, 1954 Survey Report',
    confidence: 97,
  },
  {
    id: 'fact-2',
    claim: 'The script is a transitional form between Tamil-Brahmi and medieval Tamil',
    verificationStatus: 'ai-inferred',
    source: 'AI Comparative Script Analysis v2.1',
    confidence: 78,
  },
  {
    id: 'fact-3',
    claim: 'Third column of text references a land grant of 60 veli to the temple',
    verificationStatus: 'ai-reconstructed',
    confidence: 61,
  },
  {
    id: 'fact-4',
    claim: 'Stone quarried from Udayagiri hills, approximately 40 km from site',
    verificationStatus: 'ai-inferred',
    confidence: 55,
  },
  {
    id: 'fact-5',
    claim: 'Inscription mentions a Devadana system of temple land administration',
    verificationStatus: 'verified',
    source: 'Epigraphia Indica, Vol. XXII, p. 214',
    confidence: 94,
  },
  {
    id: 'fact-6',
    claim: 'Damaged section may contain list of artisans (shilpis)',
    verificationStatus: 'unverified',
    confidence: 32,
  },
];

// ── Damage Predictions ─────────────────────────────────────────────────────────

export const mockDamagePredictions: DamagePrediction[] = [
  {
    location: 'Brihadeeswara Temple — East Gopura',
    risk: 'high',
    estimatedYears: 8,
    factor: 'Salt crystallisation + monsoon water infiltration',
  },
  {
    location: 'Ajanta Cave 1 — North wall',
    risk: 'high',
    estimatedYears: 5,
    factor: 'Visitor CO₂ levels + humidity fluctuation',
  },
  {
    location: 'Hampi — Hazara Rama Temple',
    risk: 'medium',
    estimatedYears: 22,
    factor: 'Lichen growth on stone surface',
  },
  {
    location: 'Ellora Cave 16 — Kailasa Temple',
    risk: 'medium',
    estimatedYears: 18,
    factor: 'Thermal expansion stress cycles',
  },
];

// ── Conservation Priority Rankings ────────────────────────────────────────────

export const mockConservationRanking: ConservationRank[] = [
  { rank: 1, name: 'Ajanta Cave 26 Mural', type: 'Manuscript', priority: 'critical', score: 98, reason: 'Active pigment delamination, irreversible loss imminent' },
  { rank: 2, name: 'Brihadeeswara Inscription', type: 'Inscription', priority: 'critical', score: 94, reason: 'Salt weathering accelerating, inscribed text fading' },
  { rank: 3, name: 'Nalanda Palm Leaf Set B', type: 'Manuscript', priority: 'critical', score: 91, reason: 'Biological pest damage, storage conditions inadequate' },
  { rank: 4, name: 'Sanchi Stupa East Gate', type: 'Monument', priority: 'high', score: 84, reason: 'Structural micro-fractures detected in toranas' },
  { rank: 5, name: 'Konark Relief Panel R-17', type: 'Temple', priority: 'high', score: 79, reason: 'Erosion from wind-driven sand exposure' },
];

// ── OCR Sample Output ──────────────────────────────────────────────────────────

export const mockOcrResult = {
  rawTranscription: 'க்ஷேத்ரம் ஸ்ரீ ப்ருஹதீஸ்வர... [damaged]... ராஜராஜ... வேளாண்மை நிலம் அறுபது வேலி...',
  transliteration: 'kṣetram śrī bṛhadīśvara... [damaged]... rājarāja... veḷāṇmai nilam aṟupatu vēli...',
  translation: 'The sacred precinct of Shri Brihadeeswara... [reconstructed section]... Rajaraja... agricultural land of sixty veli...',
  confidence: 76,
  scriptIdentified: 'Tamil-Brahmi (transitional)',
  languageIdentified: 'Medieval Tamil with Sanskrit loanwords',
  damagedRegions: 3,
  reconstructedChars: 47,
};
