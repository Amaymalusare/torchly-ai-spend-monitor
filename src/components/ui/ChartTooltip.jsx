// components/ui/ChartTooltip.jsx  —  Custom Recharts tooltip
import T from "../../tokens";

export default function ChartTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;

  return (
    <div
      style={{
        background: T.elevated,
        border: `1px solid ${T.borderHi}`,
        borderRadius: 10,
        padding: "10px 14px",
        fontFamily: T.mono,
        fontSize: 11,
        boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
      }}
    >
      <div style={{ color: T.textDim, marginBottom: 6 }}>{label}</div>
      {payload.map((p, i) => (
        <div key={i} style={{ color: p.color, marginBottom: 2 }}>
          {p.name?.toUpperCase()}:{" "}
          <span style={{ color: T.text }}>${p.value?.toFixed(2)}</span>
        </div>
      ))}
    </div>
  );
}
