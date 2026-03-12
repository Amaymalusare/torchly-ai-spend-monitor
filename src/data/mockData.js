// data/mockData.js  —  All seed data. Replace with API calls in production.
import T from "../tokens";

export const spendData = [
  { day: "Feb 27", openai: 12.4, anthropic: 8.1,  gemini: 3.2  },
  { day: "Feb 28", openai: 15.2, anthropic: 9.4,  gemini: 2.8  },
  { day: "Mar 01", openai: 11.8, anthropic: 11.2, gemini: 4.1  },
  { day: "Mar 02", openai: 18.6, anthropic: 7.9,  gemini: 3.7  },
  { day: "Mar 03", openai: 22.1, anthropic: 14.3, gemini: 5.2  },
  { day: "Mar 04", openai: 19.4, anthropic: 12.8, gemini: 4.9  },
  { day: "Mar 05", openai: 24.7, anthropic: 16.1, gemini: 6.3  },
  { day: "Mar 06", openai: 21.3, anthropic: 13.6, gemini: 5.8  },
  { day: "Mar 07", openai: 27.9, anthropic: 18.2, gemini: 7.1  },
  { day: "Mar 08", openai: 31.4, anthropic: 21.0, gemini: 8.4  },
];

export const featureData = [
  { name: "Chat Assistant",    cost: 142.3, calls: 18420,  model: "GPT-4o",        pct: 37 },
  { name: "Doc Summarizer",    cost: 89.1,  calls: 34200,  model: "Claude Haiku",  pct: 23 },
  { name: "Code Review Bot",   cost: 67.8,  calls: 9800,   model: "GPT-4o mini",   pct: 17 },
  { name: "Email Drafter",     cost: 44.2,  calls: 22100,  model: "Claude Sonnet", pct: 11 },
  { name: "Search Embeddings", cost: 23.6,  calls: 201000, model: "text-embed-3",  pct: 6  },
  { name: "Image Analyzer",    cost: 18.9,  calls: 3200,   model: "GPT-4o",        pct: 5  },
];

export const providers = [
  { name: "OpenAI",    spend: 390.4, budget: 500, color: T.green,  pct: 78 },
  { name: "Anthropic", spend: 132.6, budget: 200, color: T.orange, pct: 66 },
  { name: "Gemini",    spend: 51.5,  budget: 100, color: T.blue,   pct: 52 },
];

export const pieData = [
  { name: "OpenAI",    value: 390.4, color: T.green  },
  { name: "Anthropic", value: 132.6, color: T.orange },
  { name: "Gemini",    value: 51.5,  color: T.blue   },
];

export const teamData = [
  { name: "Product",     used: 187, budget: 200, pct: 93 },
  { name: "Engineering", used: 241, budget: 350, pct: 69 },
  { name: "Marketing",   used: 43,  budget: 100, pct: 43 },
  { name: "Support AI",  used: 103, budget: 150, pct: 69 },
];

export const modelData = [
  { model: "GPT-4o",        tokens: "4.2M",  cost: 210.0, pct: 36 },
  { model: "Claude Sonnet", tokens: "2.1M",  cost: 126.0, pct: 22 },
  { model: "GPT-4o mini",   tokens: "18.4M", cost: 92.0,  pct: 16 },
  { model: "Claude Haiku",  tokens: "9.8M",  cost: 58.8,  pct: 10 },
  { model: "Gemini Flash",  tokens: "12.1M", cost: 48.4,  pct: 8  },
  { model: "Others",        tokens: "—",     cost: 38.8,  pct: 8  },
];

export const alertData = [
  { icon: "🚨", sev: "critical", msg: "OpenAI daily budget 94% used",            time: "3m ago" },
  { icon: "⚠️", sev: "warning",  msg: "GPT-4o calls spiked 4.2x above average", time: "1h ago" },
  { icon: "📈", sev: "info",     msg: "Forecast $892 exceeds $800 budget",       time: "2h ago" },
  { icon: "✅", sev: "success",  msg: "Model router saved $34.20 today",         time: "4h ago" },
];

export const defaultRouteRules = [
  { task: "Simple Q&A",    from: "GPT-4o",        to: "GPT-4o mini",   saving: "$0.018/call", on: true  },
  { task: "Doc Summary",   from: "Claude Sonnet", to: "Claude Haiku",  saving: "$0.012/call", on: true  },
  { task: "Embeddings",    from: "embed-3-large", to: "embed-3-small", saving: "$0.001/call", on: true  },
  { task: "Complex Tasks", from: "GPT-4o mini",   to: "GPT-4o",        saving: "—",           on: false },
];

export const navItems = [
  { id: "overview",  label: "Overview",     d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
  { id: "providers", label: "Providers",    d: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" },
  { id: "features",  label: "Features",     d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
  { id: "teams",     label: "Teams",        d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
  { id: "alerts",    label: "Alerts",       badge: 2, d: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" },
  { id: "router",    label: "Model Router", d: "M8 7h12m0 0l-4-4m4 4l-4 4m0 5H4m0 0l4 4m-4-4l4-4" },
];
