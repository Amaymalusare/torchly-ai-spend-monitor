// components/ui/StatCard.jsx  —  KPI metric card with hover lift effect
import T from "../../tokens";

export default function StatCard({ label, value, sub, change, accent, icon }) {
  const up = change > 0;

  return (
    <div
      style={{
        background: T.card,
        border: `1px solid ${T.border}`,
        borderRadius: 14,
        padding: "18px 20px",
        position: "relative",
        overflow: "hidden",
        cursor: "default",
        transition: "border-color 0.15s, transform 0.15s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = T.borderHi;
        e.currentTarget.style.transform = "translateY(-1px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = T.border;
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* Accent glow corner */}
      <div
        style={{
          position: "absolute",
          top: -24, right: -24,
          width: 70, height: 70,
          borderRadius: "50%",
          background: accent,
          opacity: 0.07,
          pointerEvents: "none",
        }}
      />

      {/* Header row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 10,
        }}
      >
        <span style={{ fontFamily: T.sans, fontSize: 12, color: T.textMid, fontWeight: 500 }}>
          {label}
        </span>
        <span style={{ fontSize: 16 }}>{icon}</span>
      </div>

      {/* Value */}
      <div
        style={{
          fontFamily: T.mono,
          fontSize: 26,
          fontWeight: 700,
          color: T.text,
          letterSpacing: -0.5,
          marginBottom: 8,
        }}
      >
        {value}
      </div>

      {/* Change badge + sub-label */}
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        {change !== null && (
          <span
            style={{
              fontFamily: T.mono,
              fontSize: 10,
              fontWeight: 600,
              color: up ? T.red : T.green,
              background: up ? "rgba(244,63,94,0.1)" : "rgba(34,197,94,0.1)",
              padding: "2px 7px",
              borderRadius: 100,
            }}
          >
            {up ? "▲" : "▼"} {Math.abs(change)}%
          </span>
        )}
        <span style={{ fontFamily: T.sans, fontSize: 11, color: T.textDim }}>{sub}</span>
      </div>
    </div>
  );
}
