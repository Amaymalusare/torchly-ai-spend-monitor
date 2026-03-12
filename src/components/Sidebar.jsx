// components/Sidebar.jsx  —  Left navigation panel
import T from "../tokens";
import { navItems } from "../data/mockData";
import ProgressBar from "./ui/ProgressBar";

export default function Sidebar({ active, setActive }) {
  return (
    <aside
      style={{
        width: 230,
        minHeight: "100vh",
        background: T.surface,
        borderRight: `1px solid ${T.border}`,
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle grid texture overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.025,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
          backgroundSize: "28px 28px",
          pointerEvents: "none",
        }}
      />

      {/* ── Logo ── */}
      <div style={{ padding: "22px 18px 18px", borderBottom: `1px solid ${T.border}` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 36, height: 36, borderRadius: 10,
              background: "linear-gradient(135deg,#ff6b00,#f59e0b)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 18,
              boxShadow: "0 0 18px rgba(255,107,0,0.28)",
            }}
          >
            🔦
          </div>
          <div>
            <div style={{ fontFamily: T.sans, fontWeight: 800, fontSize: 16, color: T.text }}>
              Torchly
            </div>
            <div style={{ fontFamily: T.mono, fontSize: 9, color: T.orange, letterSpacing: 1.5 }}>
              AI SPEND MONITOR
            </div>
          </div>
        </div>
      </div>

      {/* ── Workspace switcher ── */}
      <div style={{ padding: "10px 12px", borderBottom: `1px solid ${T.border}` }}>
        <div
          style={{
            display: "flex", alignItems: "center", gap: 8,
            padding: "7px 10px",
            background: T.card,
            borderRadius: 8,
            border: `1px solid ${T.border}`,
            cursor: "pointer",
          }}
        >
          <div
            style={{
              width: 20, height: 20, borderRadius: 5,
              background: "linear-gradient(135deg,#6366f1,#a855f7)",
              flexShrink: 0,
            }}
          />
          <span style={{ fontFamily: T.sans, fontSize: 12, fontWeight: 600, color: T.text, flex: 1 }}>
            Acme Corp
          </span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={T.textDim} strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>

      {/* ── Navigation ── */}
      <nav style={{ padding: "8px 10px", flex: 1 }}>
        <div
          style={{
            fontFamily: T.mono, fontSize: 9, color: T.textDim,
            letterSpacing: 2, padding: "6px 8px 4px",
          }}
        >
          MENU
        </div>

        {navItems.map((item) => {
          const on = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: 9,
                padding: "8px 10px",
                marginBottom: 1,
                borderRadius: 8,
                border: "none",
                background: on ? T.orangeDim : "transparent",
                color: on ? T.orange : T.textMid,
                fontFamily: T.sans,
                fontSize: 13,
                fontWeight: on ? 600 : 400,
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.12s",
              }}
            >
              <svg
                width="15" height="15" viewBox="0 0 24 24"
                fill="none"
                stroke={on ? T.orange : T.textDim}
                strokeWidth={on ? "2" : "1.5"}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d={item.d} />
              </svg>
              <span style={{ flex: 1 }}>{item.label}</span>
              {item.badge && (
                <span
                  style={{
                    background: T.red, color: "#fff",
                    fontSize: 9, fontWeight: 700,
                    borderRadius: 100, padding: "1px 6px",
                    fontFamily: T.mono,
                  }}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* ── Monthly budget widget ── */}
      <div style={{ padding: "12px 14px", borderTop: `1px solid ${T.border}` }}>
        <div
          style={{
            background: T.card, borderRadius: 10,
            padding: 13, border: `1px solid ${T.border}`,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
            <span style={{ fontFamily: T.sans, fontSize: 11, color: T.textMid, fontWeight: 500 }}>
              Monthly Budget
            </span>
            <span style={{ fontFamily: T.mono, fontSize: 10, color: T.red }}>72%</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontFamily: T.mono, fontSize: 14, fontWeight: 700, color: T.text }}>$574.5</span>
            <span style={{ fontFamily: T.mono, fontSize: 11, color: T.textDim }}>/ $800</span>
          </div>
          <ProgressBar pct={72} height={3} />
          <div style={{ fontFamily: T.mono, fontSize: 9, color: T.textDim, marginTop: 5, letterSpacing: 0.5 }}>
            23 DAYS REMAINING
          </div>
        </div>
      </div>

      {/* ── User row ── */}
      <div
        style={{
          padding: "10px 14px 14px",
          borderTop: `1px solid ${T.border}`,
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <div
          style={{
            width: 30, height: 30, borderRadius: "50%",
            background: "linear-gradient(135deg,#ff6b00,#f59e0b)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: T.sans, fontSize: 12, fontWeight: 800, color: "#fff",
          }}
        >
          A
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: T.sans, fontSize: 12, fontWeight: 600, color: T.text }}>
            Alex Chen
          </div>
          <div style={{ fontFamily: T.mono, fontSize: 9, color: T.textDim }}>ADMIN</div>
        </div>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={T.textDim} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 16l4-4m0 0l-4-4m4 4H7" />
        </svg>
      </div>
    </aside>
  );
}
