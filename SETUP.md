# Heritage AI — Setup & Run Instructions

## Prerequisites

Node.js is **not installed** on this machine. Install it first:

1. Download Node.js LTS from https://nodejs.org/  
   (Recommended: v20 LTS or v22 LTS)
2. Run the installer — it will add `node` and `npm` to your PATH automatically.
3. Restart your terminal / IDE after installation.

Verify installation:
```
node -v
npm -v
```

---

## Install & Run

From inside the `heritage-ai` folder:

```bash
npm install
npm run dev
```

Then open **http://localhost:5173** in your browser.

---

## Project Structure

```
heritage-ai/
├── src/
│   ├── App.tsx                        # Root router
│   ├── main.tsx                       # React entry point
│   ├── index.css                      # Global styles + Tailwind
│   ├── data/
│   │   └── mock.ts                    # All mock data (replace with API later)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AppShell.tsx           # Main layout wrapper (sidebar + header + outlet)
│   │   │   ├── Sidebar.tsx            # Left navigation sidebar
│   │   │   └── Header.tsx             # Top navigation bar
│   │   └── ui/
│   │       ├── Badge.tsx              # Status/type badges
│   │       ├── Card.tsx               # Glass card container
│   │       ├── ProgressBar.tsx        # Animated progress bars
│   │       ├── StatCard.tsx           # Dashboard stat cards
│   │       └── VerificationBadge.tsx  # Epistemic status indicator
│   └── pages/
│       ├── dashboard/
│       │   ├── Dashboard.tsx          # Main dashboard page
│       │   ├── WelcomeBanner.tsx
│       │   ├── StatsRow.tsx
│       │   ├── RecentProjects.tsx
│       │   ├── AIPipeline.tsx
│       │   ├── RestorationComparison.tsx
│       │   ├── InscriptionOCR.tsx
│       │   ├── HistoricalContext.tsx
│       │   ├── DamagePrediction.tsx
│       │   ├── ConservationRanking.tsx
│       │   ├── KnowledgeGraphPreview.tsx
│       │   └── UploadPanel.tsx
│       └── stubs/
│           ├── StubPage.tsx           # Generic placeholder page
│           └── index.tsx              # All stub pages (Projects, Restoration, etc.)
```

## Routes

| Path               | Component         |
|--------------------|-------------------|
| /                  | Dashboard         |
| /projects          | ProjectsPage      |
| /upload            | UploadPage        |
| /restoration       | RestorationPage   |
| /insights          | InsightsPage      |
| /knowledge-graph   | KnowledgeGraphPage|
| /studio            | StudioPage        |
| /prediction        | PredictionPage    |
| /fragment-matcher  | FragmentMatcherPage|
| /library           | LibraryPage       |
| /reports           | ReportsPage       |
| /settings          | SettingsPage      |

## Design System

- Background: `#0b0d1a` (deep navy)
- Accent: `#8b5cf6` (violet) + `#f59e0b` (gold)
- Glassmorphism cards: `glass-card` / `glass-card-hover` utility classes
- Typography: Inter (sans) + JetBrains Mono (mono)
- All custom colors in `tailwind.config.js`

## Connecting Real APIs

All mock data lives in `src/data/mock.ts`.  
Replace the exported constants with API calls in your page-level hooks.  
UI components are data-agnostic — they only care about TypeScript types.
