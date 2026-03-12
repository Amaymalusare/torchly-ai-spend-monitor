// views/RouterView.jsx  —  Smart model router configuration page
import { useState } from "react";
import T from "../tokens";
import { defaultRouteRules } from "../data/mockData";
import Panel from "../components/ui/Panel";
import Toggle from "../components/ui/Toggle";

const STATS = [
  { icon: "💰", label: "Saved Today",      value: "$34.20",  color: T.green  },
  { icon: "📊", label: "Saved This Month", value: "$412.80", color: T.orange },
  { icon: "⚙️", label: "Active Rules",     value: "3 / 4",   color: T.blue   },
];

export default function RouterView() {
  const [enabled, setEnabled] = useState(true);
  const [rules, setRules] = useState(defaultRouteRules);

  const toggleRule = (i) =>
    setRules((prev) => prev.map((r, j) => (j === i ? { ...r, on: !r.on } : r)));

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>

      {/* ── Hero banner ── */}
      <div
        style={{
          borderRadius: 14, padding: "20px 24px",
          background: `linear-gradient(135deg,${T.card},${T.elevated})`,
          border: `1px solid ${T.borderHi}`,
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 5 }}>
            <span style={{ fontSize: 20 }}>⚡</span>
            <h3 style={{ fontFamily: T.sans, fontWeight: 800, fontSize: 16, color: T.text, margin: 0 }}>
              Smart Model Router
            </h3>
            <span
              style={{
                background: "rgba(34,197,94,0.12)", color: T.green,
                fontFamily: T.mono, fontSize: 9, padding: "2px 8px",
                borderRadius: 100, border: "1px solid rgba(34,197,94,0.2)",
              }}
            >
              ACTIVE
            </span>
          </div>
          <p style={{ fontFamily: T.sans, fontSize: 13, color: T.textMid, margin: 0 }}>
            Auto-routes simple tasks to cheaper models. Saved{" "}
            <span style={{ color: T.green, fontWeight: 700 }}>$34.20</span> today ·{" "}
            <span style={{ color: T.green, fontWeight: 700 }}>$412.80</span> this month.
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontFamily: T.sans, fontSize: 12, color: T.textMid }}>
            {enabled ? "Enabled" : "Disabled"}
          </span>
          <Toggle value={enabled} onChange={setEnabled} />
        </div>
      </div>

      {/* ── Stats row ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }}>
        {STATS.map(({ icon, label, value, color }) => (
          <Panel key={label}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <span style={{ fontFamily: T.sans, fontSize: 12, color: T.textMid }}>{label}</span>
              <span style={{ fontSize: 16 }}>{icon}</span>
            </div>
            <div style={{ fontFamily: T.mono, fontSize: 22, fontWeight: 700, color }}>{value}</div>
          </Panel>
        ))}
      </div>

      {/* ── Rules table ── */}
      <Panel style={{ padding: 0, overflow: "hidden" }}>
        <div
          style={{
            padding: "16px 20px 12px",
            borderBottom: `1px solid ${T.border}`,
            display: "flex", justifyContent: "space-between", alignItems: "center",
          }}
        >
          <div>
            <h3 style={{ fontFamily: T.sans, fontWeight: 700, fontSize: 14, color: T.text, margin: "0 0 2px" }}>
              Routing Rules
            </h3>
            <p style={{ fontFamily: T.sans, fontSize: 11, color: T.textDim, margin: 0 }}>
              Toggle rules on/off without changing your code
            </p>
          </div>
          <button
            style={{
              padding: "6px 14px", borderRadius: 8,
              border: `1px solid ${T.orangeMid}`, background: T.orangeDim,
              color: T.orange, fontFamily: T.sans, fontSize: 12, fontWeight: 600, cursor: "pointer",
            }}
          >
            + Add Rule
          </button>
        </div>

        {rules.map((r, i) => (
          <div
            key={i}
            style={{
              padding: "14px 20px",
              borderBottom: `1px solid ${T.border}`,
              display: "flex", alignItems: "center", gap: 14,
              opacity: r.on ? 1 : 0.45,
              transition: "opacity 0.2s",
            }}
          >
            <Toggle value={r.on} onChange={() => toggleRule(i)} />

            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: T.sans, fontSize: 13, fontWeight: 600, color: T.text, marginBottom: 4 }}>
                {r.task}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                {/* From model */}
                <span style={{ fontFamily: T.mono, fontSize: 10, color: T.textDim, background: T.elevated, padding: "2px 8px", borderRadius: 5 }}>
                  {r.from}
                </span>
                {/* Arrow */}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={T.textDim} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
                {/* To model */}
                <span style={{ fontFamily: T.mono, fontSize: 10, color: T.orange, background: T.orangeDim, padding: "2px 8px", borderRadius: 5, border: `1px solid ${T.orangeMid}` }}>
                  {r.to}
                </span>
              </div>
            </div>

            <span style={{ fontFamily: T.mono, fontSize: 12, color: T.green, fontWeight: 600 }}>{r.saving}</span>
          </div>
        ))}
      </Panel>
    </div>
  );
}
