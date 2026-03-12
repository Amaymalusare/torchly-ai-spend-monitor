// views/FeaturesView.jsx  —  Feature cost attribution page
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import T from "../tokens";
import { featureData } from "../data/mockData";
import Panel from "../components/ui/Panel";
import SectionHead from "../components/ui/SectionHead";
import ChartTooltip from "../components/ui/ChartTooltip";

export default function FeaturesView() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>

      {/* ── Horizontal bar chart ── */}
      <Panel>
        <SectionHead title="Cost by Feature" sub="Tag API calls to see per-feature attribution" action="Add Tag" />
        <ResponsiveContainer width="100%" height={210}>
          <BarChart data={featureData} layout="vertical" margin={{ left: 0 }}>
            <defs>
              <linearGradient id="barG" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%"   stopColor={T.orange} />
                <stop offset="100%" stopColor={T.amber}  />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={T.border} horizontal={false} />
            <XAxis type="number" tick={{ fill: T.textDim, fontSize: 10, fontFamily: "JetBrains Mono" }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v}`} />
            <YAxis type="category" dataKey="name" tick={{ fill: T.textMid, fontSize: 11, fontFamily: "Outfit" }} axisLine={false} tickLine={false} width={126} />
            <Tooltip content={<ChartTooltip />} />
            <Bar dataKey="cost" fill="url(#barG)" radius={[0, 6, 6, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Panel>

      {/* ── Detail table ── */}
      <Panel style={{ padding: 0, overflow: "hidden" }}>
        <div style={{ padding: "16px 20px 12px", borderBottom: `1px solid ${T.border}` }}>
          <SectionHead title="Feature Breakdown" sub="Cost per 1K calls reveals optimization opportunities" />
        </div>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: `1px solid ${T.border}` }}>
              {["Feature", "Model", "API Calls", "Total Cost", "Cost / 1K", "Share"].map((h) => (
                <th key={h} style={{ padding: "9px 18px", textAlign: "left", fontFamily: T.mono, fontSize: 10, color: T.textDim, letterSpacing: 1.5, fontWeight: 500 }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {featureData.map((f, i) => (
              <tr
                key={i}
                style={{ borderBottom: `1px solid ${T.border}`, transition: "background 0.1s" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = T.elevated)}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                <td style={{ padding: "12px 18px", fontFamily: T.sans, fontSize: 13, fontWeight: 600, color: T.text }}>{f.name}</td>
                <td style={{ padding: "12px 18px" }}>
                  <span style={{ background: T.elevated, border: `1px solid ${T.border}`, color: T.orange, fontFamily: T.mono, fontSize: 10, padding: "2px 8px", borderRadius: 5 }}>
                    {f.model}
                  </span>
                </td>
                <td style={{ padding: "12px 18px", fontFamily: T.mono, fontSize: 12, color: T.textMid }}>{f.calls.toLocaleString()}</td>
                <td style={{ padding: "12px 18px", fontFamily: T.mono, fontSize: 13, color: T.green, fontWeight: 700 }}>${f.cost.toFixed(2)}</td>
                <td style={{ padding: "12px 18px", fontFamily: T.mono, fontSize: 12, color: T.textDim }}>${(f.cost / f.calls * 1000).toFixed(3)}</td>
                <td style={{ padding: "12px 18px", width: 120 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                    <div style={{ flex: 1, height: 4, background: T.elevated, borderRadius: 100, overflow: "hidden" }}>
                      <div style={{ width: `${f.pct}%`, height: "100%", background: `linear-gradient(90deg,${T.orange},${T.amber})`, borderRadius: 100 }} />
                    </div>
                    <span style={{ fontFamily: T.mono, fontSize: 10, color: T.textDim, width: 26 }}>{f.pct}%</span>
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
