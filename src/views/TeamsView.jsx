// views/TeamsView.jsx  —  Team budget tracking + model usage breakdown
import T from "../tokens";
import { teamData, modelData } from "../data/mockData";
import Panel from "../components/ui/Panel";
import SectionHead from "../components/ui/SectionHead";
import ProgressBar from "../components/ui/ProgressBar";

export default function TeamsView() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>

      {/* ── Team budget cards ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 14 }}>
        {teamData.map((t) => (
          <Panel key={t.name}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
              <div>
                <div style={{ fontFamily: T.sans, fontSize: 15, fontWeight: 700, color: T.text }}>{t.name}</div>
                <div style={{ fontFamily: T.mono, fontSize: 10, color: T.textDim, marginTop: 2 }}>TEAM BUDGET · MARCH 2026</div>
              </div>
              <span
                style={{
                  fontFamily: T.mono, fontSize: 13, fontWeight: 700,
                  color:      t.pct > 85 ? T.red  : t.pct > 65 ? T.amber  : T.green,
                  background: t.pct > 85 ? "rgba(244,63,94,0.1)" : t.pct > 65 ? "rgba(245,158,11,0.1)" : "rgba(34,197,94,0.1)",
                  padding: "4px 10px", borderRadius: 8,
                }}
              >
                {t.pct}%
              </span>
            </div>

            <ProgressBar pct={t.pct} height={5} />

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 9 }}>
              <span style={{ fontFamily: T.mono, fontSize: 12, color: T.text, fontWeight: 600 }}>
                ${t.used}{" "}
                <span style={{ color: T.textDim, fontWeight: 400, fontSize: 11 }}>used</span>
              </span>
              <span style={{ fontFamily: T.mono, fontSize: 11, color: T.textDim }}>
                ${t.budget - t.used} left of ${t.budget}
              </span>
            </div>
          </Panel>
        ))}
      </div>

      {/* ── Model usage table ── */}
      <Panel style={{ padding: 0, overflow: "hidden" }}>
        <div style={{ padding: "16px 20px 12px", borderBottom: `1px solid ${T.border}` }}>
          <SectionHead title="Model Usage Breakdown" sub="Token consumption and cost per model" />
        </div>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: `1px solid ${T.border}` }}>
              {["Model", "Tokens Used", "Cost", "% of Total", "Usage Bar"].map((h) => (
                <th key={h} style={{ padding: "9px 18px", textAlign: "left", fontFamily: T.mono, fontSize: 10, color: T.textDim, letterSpacing: 1.5, fontWeight: 500 }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {modelData.map((m, i) => (
              <tr
                key={i}
                style={{ borderBottom: `1px solid ${T.border}`, transition: "background 0.1s" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = T.elevated)}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                <td style={{ padding: "12px 18px", fontFamily: T.sans, fontSize: 13, fontWeight: 600, color: T.text }}>{m.model}</td>
                <td style={{ padding: "12px 18px", fontFamily: T.mono, fontSize: 12, color: T.textMid }}>{m.tokens}</td>
                <td style={{ padding: "12px 18px", fontFamily: T.mono, fontSize: 13, color: T.green, fontWeight: 700 }}>${m.cost.toFixed(2)}</td>
                <td style={{ padding: "12px 18px", fontFamily: T.mono, fontSize: 12, color: T.orange }}>{m.pct}%</td>
                <td style={{ padding: "12px 18px", width: 150 }}>
                  <div style={{ height: 4, background: T.elevated, borderRadius: 100, overflow: "hidden" }}>
                    <div style={{ width: `${m.pct}%`, height: "100%", background: `linear-gradient(90deg,${T.orange},${T.amber})`, borderRadius: 100 }} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Panel>
    </div>
  );
}
