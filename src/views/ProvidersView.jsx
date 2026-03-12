// views/ProvidersView.jsx  —  Provider management (stub for full build)
import T from "../tokens";
import Panel from "../components/ui/Panel";

export default function ProvidersView() {
  return (
    <Panel
      style={{
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        minHeight: 320, gap: 14, textAlign: "center",
      }}
    >
      <div style={{ fontSize: 40 }}>🔌</div>
      <div style={{ fontFamily: T.sans, fontSize: 16, fontWeight: 700, color: T.text }}>
        Providers
      </div>
      <div style={{ fontFamily: T.sans, fontSize: 13, color: T.textDim, maxWidth: 280 }}>
        Connect your OpenAI, Anthropic, and Gemini API keys to start tracking spend automatically.
      </div>
      <button
        style={{
          marginTop: 8, padding: "9px 20px",
          background: T.orangeDim, border: `1px solid ${T.orangeMid}`,
          color: T.orange, fontFamily: T.sans, fontSize: 13, fontWeight: 600,
          borderRadius: 8, cursor: "pointer",
        }}
      >
        + Connect Provider
      </button>
    </Panel>
  );
}
