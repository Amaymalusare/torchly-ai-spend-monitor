// views/AlertsView.jsx  —  Alert summary + full event feed
import T from "../tokens";
import { alertData } from "../data/mockData";
import Panel from "../components/ui/Panel";
import SectionHead from "../components/ui/SectionHead";

const SEV_COLOR = { critical: T.red, warning: T.amber, info: T.blue, success: T.green };

const SUMMARY_CARDS = [
  { icon: "🚨", label: "Critical", count: 1, color: T.red   },
  { icon: "⚠️", label: "Warnings", count: 1, color: T.amber },
  { icon: "ℹ️", label: "Info",     count: 1, color: T.blue  },
  { icon: "✅", label: "Resolved", count: 4, color: T.green },
];

export default function AlertsView() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>

      {/* ── Summary cards ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 }}>
        {SUMMARY_CARDS.map(({ icon, label, count, color }) => (
          <Panel key={label} style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span style={{ fontSize: 22 }}>{icon}</span>
            <div>
              <div style={{ fontFamily: T.mono, fontSize: 22, fontWeight: 700, color }}>{count}</div>
              <div style={{ fontFamily: T.sans, fontSize: 11, color: T.textDim }}>{label}</div>
            </div>
          </Panel>
        ))}
      </div>

      {/* ── Full feed ── */}
      <Panel style={{ padding: 0, overflow: "hidden" }}>
        <div style={{ padding: "16px 20px 12px", borderBottom: `1px solid ${T.border}` }}>
          <SectionHead title="Alert Feed" sub="All events from last 24 hours" action="Configure Rules" />
        </div>

        {alertData.map((a, i) => {
          const c = SEV_COLOR[a.sev];
          return (
            <div
              key={i}
              style={{
                padding: "13px 20px",
                borderBottom: `1px solid ${T.border}`,
                display: "flex", alignItems: "center", gap: 12,
              }}
            >
              <span style={{ fontSize: 16, flexShrink: 0 }}>{a.icon}</span>

              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: T.sans, fontSize: 13, fontWeight: 500, color: T.text }}>{a.msg}</div>
                <div style={{ fontFamily: T.mono, fontSize: 10, color: T.textDim, marginTop: 2 }}>{a.time}</div>
              </div>

              <span
                style={{
                  fontFamily: T.mono, fontSize: 9, fontWeight: 700, letterSpacing: 1.5,
                  color: c, background: `${c}18`, border: `1px solid ${c}30`,
                  padding: "3px 10px", borderRadius: 100, textTransform: "uppercase",
                }}
              >
                {a.sev}
              </span>
            </div>
          );
        })}
      </Panel>
    </div>
  );
}
