// components/ui/Toggle.jsx  —  On/off switch used in Router view
import T from "../../tokens";

export default function Toggle({ value, onChange }) {
  return (
    <div
      onClick={() => onChange(!value)}
      style={{
        width: 42,
        height: 22,
        borderRadius: 100,
        cursor: "pointer",
        background: value ? T.green : T.border,
        position: "relative",
        transition: "background 0.2s",
        boxShadow: value ? "0 0 10px rgba(34,197,94,0.3)" : "none",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: 16,
          height: 16,
          borderRadius: "50%",
          background: "#fff",
          position: "absolute",
          top: 3,
          left: value ? 23 : 3,
          transition: "left 0.2s",
          boxShadow: "0 1px 4px rgba(0,0,0,0.3)",
        }}
      />
    </div>
  );
}
