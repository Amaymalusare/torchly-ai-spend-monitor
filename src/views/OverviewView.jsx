// views/OverviewView.jsx  —  Main dashboard overview page
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import T from "../tokens";
import { spendData, providers, pieData, alertData } from "../data/mockData";
import Panel from "../components/ui/Panel";
import SectionHead from "../components/ui/SectionHead";
import StatCard from "../components/ui/StatCard";
import ChartTooltip from "../components/ui/ChartTooltip";
import ProgressBar from "../components/ui/ProgressBar";

const SEV_COLOR = { critical: T.red, warning: T.amber, info: T.blue, success: T.green };

export default function OverviewView() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>

      {/* ── KPI row ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 }}>
        <StatCard label="Today's Spend"   value="$60.8"  sub="vs $53.2 yesterday" change={14.2}  accent={T.orange} icon="⚡" />
        <StatCard label="Month to Date"   value="$574.5" sub="of $800 budget"     change={null}  accent={T.blue}   icon="📅" />
        <StatCard label="Total API Calls" value="289K"   sub="last 30 days"       change={-8.1}  accent={T.green}  icon="🔁" />
        <StatCard label="Cost Forecast"   value="$892"   sub="end of month est."  change={11.5}  accent={T.red}    icon="📈" />
      </div>

      {/* ── Area chart ── */}
      <Panel>
        <SectionHead title="Daily Spend by Provider" sub="Last 10 days · hover for details" action="Export CSV" />

        {/* Legend */}
        <div style={{ display: "flex", gap: 18, marginBottom: 14 }}>
          {[["OpenAI", T.green], ["Anthropic", T.orange], ["Gemini", T.blue]].map(([name, color]) => (
            <div key={name} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 8, height: 8, borderRadius: 2, background: color }} />
              <span style={{ fontFamily: T.sans, fontSize: 12, color: T.textMid }}>{name}</span>
            </div>
          ))}
        </div>

        <ResponsiveContainer width="100%" height={210}>
          <AreaChart data={spendData} margin={{ left: -10 }}>
            <defs>
              {[["openai", T.green], ["anthropic", T.orange], ["gemini", T.blue]].map(([key, color]) => (
                <linearGradient key={key} id={`g_${key}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%"   stopColor={color} stopOpacity={0.2} />
                  <stop offset="100%" stopColor={color} stopOpacity={0}   />
                </linearGradient>
              ))}
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={T.border} vertical={false} />
            <XAxis dataKey="day" tick={{ fill: T.textDim, fontSize: 10, fontFamily: "JetBrains Mono" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: T.textDim, fontSize: 10, fontFamily: "JetBrains Mono" }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v}`} />
            <Tooltip content={<ChartTooltip />} />
            <Area type="monotone" dataKey="openai"    name="openai"    stroke={T.green}  fill="url(#g_openai)"    strokeWidth={2} />
            <Area type="monotone" dataKey="anthropic" name="anthropic" stroke={T.orange} fill="url(#g_anthropic)" strokeWidth={2} />
            <Area type="monotone" dataKey="gemini"    name="gemini"    stroke={T.blue}   fill="url(#g_gemini)"    strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </Panel>

      {/* ── Bottom row ── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 18 }}>

        {/* Provider health */}
        <Panel>
          <SectionHead title="Provider Health" sub="Budget utilization" />
          {providers.map((p) => (
            <div key={p.name} style={{ padding: "11px 13px", background: T.elevated, borderRadius: 10, border: `1px solid ${T.border}`, marginBottom: 10 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 7 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  <div style={{ width: 7, height: 7, borderRadius: "50%", background: p.color, boxShadow: `0 0 5px ${p.color}` }} />
                  <span style={{ fontFamily: T.sans, fontSize: 13, fontWeight: 600, color: T.text }}>{p.name}</span>
                </div>
                <span style={{ fontFamily: T.mono, fontSize: 10, color: p.pct > 80 ? T.red : T.textMid }}>{p.pct}%</span>
              </div>
              <ProgressBar pct={p.pct} height={3} />
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
                <span style={{ fontFamily: T.mono, fontSize: 10, color: T.textMid }}>${p.spend}</span>
                <span style={{ fontFamily: T.mono, fontSize: 10, color: T.textDim }}>/ ${p.budget}</span>
              </div>
            </div>
          ))}
        </Panel>

        {/* Pie chart */}
        <Panel>
          <SectionHead title="Spend Split" sub="By provider this month" />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <PieChart width={150} height={150}>
              <Pie data={pieData} cx={70} cy={70} innerRadius={44} outerRadius={68} dataKey="value" strokeWidth={0} paddingAngle={3}>
                {pieData.map((e, i) => <Cell key={i} fill={e.color} />)}
              </Pie>
            </PieChart>
          </div>
          {pieData.map((p) => (
            <div key={p.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "7px 0", borderBottom: `1px solid ${T.border}` }}>
              <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                <div style={{ width: 8, height: 8, borderRadius: 2, background: p.color }} />
                <span style={{ fontFamily: T.sans, fontSize: 12, color: T.textMid }}>{p.name}</span>
              </div>
              <span style={{ fontFamily: T.mono, fontSize: 12, color: T.text, fontWeight: 600 }}>${p.value}</span>
            </div>
          ))}
        </Panel>

        {/* Alert feed */}
        <Panel>
          <SectionHead title="Recent Alerts" sub="Last 24 hours" action="View all" />
          {alertData.map((a, i) => {
            const c = SEV_COLOR[a.sev];
            return (
              <div key={i} style={{ display: "flex", gap: 9, padding: "9px 11px", background: T.elevated, borderRadius: 9, border: `1px solid ${T.border}`, borderLeft: `2px solid ${c}`, marginBottom: 8 }}>
                <span style={{ fontSize: 13, flexShrink: 0 }}>{a.icon}</span>
                <div>
                  <div style={{ fontFamily: T.sans, fontSize: 11, color: T.text, lineHeight: 1.4 }}>{a.msg}</div>
                  <div style={{ fontFamily: T.mono, fontSize: 9, color: T.textDim, marginTop: 2 }}>{a.time}</div>
                </div>
              </div>
            );
          })}
        </Panel>
      </div>
    </div>
  );
}
