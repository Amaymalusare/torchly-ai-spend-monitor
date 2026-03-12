# 🔦 Torchly — AI Spend Monitor

> Light Up Your AI Spend

A professional React dashboard for monitoring AI API costs across OpenAI, Anthropic, and Google Gemini.

---

## Project Structure

```
torchly/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx              # React entry point
    ├── App.jsx               # Root layout + routing
    ├── tokens.js             # Design tokens (colors, fonts)
    │
    ├── data/
    │   └── mockData.js       # Seed data — replace with API calls
    │
    ├── hooks/
    │   └── useClock.js       # Live clock hook
    │
    ├── components/
    │   ├── Sidebar.jsx       # Left navigation panel
    │   ├── Topbar.jsx        # Top bar with range picker + clock
    │   └── ui/
    │       ├── Panel.jsx         # Base card wrapper
    │       ├── SectionHead.jsx   # Section title + optional button
    │       ├── StatCard.jsx      # KPI metric card
    │       ├── ChartTooltip.jsx  # Custom Recharts tooltip
    │       ├── ProgressBar.jsx   # Budget progress bar
    │       └── Toggle.jsx        # On/off switch
    │
    └── views/
        ├── OverviewView.jsx   # Main dashboard page
        ├── ProvidersView.jsx  # Provider connections
        ├── FeaturesView.jsx   # Feature cost attribution
        ├── TeamsView.jsx      # Team budget tracking
        ├── AlertsView.jsx     # Alert feed
        └── RouterView.jsx     # Smart model router
```

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## Design System

All colors and typography live in `src/tokens.js`. Import `T` from there anywhere you need a design value — never hardcode hex strings elsewhere.

---

## Replacing Mock Data

`src/data/mockData.js` contains seed arrays. In production, replace each export with a React Query or SWR hook that fetches from `api.torchly.io/v1/`.

Example:
```js
// Before (mock)
export const spendData = [ ... ];

// After (real API)
export function useSpendData(range) {
  return useQuery(["spend", range], () =>
    fetch(`/v1/usage/daily?range=${range}`).then(r => r.json())
  );
}
```

---

## Tech Stack

| Layer       | Tech                          |
|-------------|-------------------------------|
| Framework   | React 18 + Vite               |
| Charts      | Recharts                      |
| Styling     | Inline styles + CSS variables |
| Fonts       | Outfit + JetBrains Mono       |
| Auth (prod) | Clerk                         |
| DB (prod)   | PostgreSQL on Supabase        |
| API (prod)  | Next.js 15 + Fastify          |
