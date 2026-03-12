// components/Topbar.jsx  —  Top navigation bar with clock, range picker, actions
import T from "../tokens";
import { useClock } from "../hooks/useClock";

const PAGE_TITLES = {
  overview:  "Overview",
  providers: "Providers",
  features:  "Features",
  teams:     "Teams",
  alerts:    "Alerts",
  router:    "Model Router",
};

const RANGES = ["1D", "7D", "30D", "MTD"];

export default function Topbar({ active }) {
  const time = useClock();

  return (
    <div
      style={{
        height: 54,
        borderBottom: `1px solid ${T.border}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 26px",
        background: T.surface,
        flexShrink: 0,
      }}
    >
      {/* Left — page title + range picker */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <h2
          style={{
            fontFamily: T.sans, fontWeight: 700, fontSize: 15,
            color: T.text, margin: 0,
          }}
        >
          {PAGE_TITLES[active]}
        </h2>

        <div style={{ display: "flex", gap: 3 }}>
          {RANGES.map((r) => (
            <button
              key={r}
              style={{
                padding: "3px 10px",
                borderRadius: 6,
                border: `1px solid ${T.border}`,
                background: r === "30D" ? T.orangeDim : "transparent",
                color: r === "30D" ? T.orange : T.textDim,
                fontFamily: T.mono,
                fontSize: 10,
                cursor: "pointer",
              }}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* Right — live indicator, clock, actions */}
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        {/* Live dot */}
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <div
            style={{
              width: 6, height: 6, borderRadius: "50%",
              background: T.green,
              boxShadow: `0 0 6px ${T.green}`,
              animation: "pulse 2s infinite",
            }}
          />
          <span style={{ fontFamily: T.mono, fontSize: 10, color: T.textDim }}>LIVE</span>
        </div>

        {/* Clock */}
        <span style={{ fontFamily: T.mono, fontSize: 11, color: T.textDim }}>
          {time.toLocaleTimeString()}
        </span>

        {/* Actions button */}
        <button
          style={{
            display: "flex", alignItems: "center", gap: 6,
            padding: "5px 12px",
            background: T.card,
            border: `1px solid ${T.border}`,
            borderRadius: 7,
            cursor: "pointer",
            color: T.textMid,
            fontFamily: T.sans,
            fontSize: 12,
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="4" y1="6"  x2="20" y2="6"  />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
          Actions
        </button>
      </div>
    </div>
  );
}
