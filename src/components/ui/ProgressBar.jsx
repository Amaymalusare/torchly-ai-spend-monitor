// components/ui/ProgressBar.jsx  —  Budget progress bar with color thresholds
import T from "../../tokens";

export default function ProgressBar({ pct, height = 4 }) {
  const color =
    pct > 85
      ? "linear-gradient(90deg,#f43f5e,#ff6b00)"
      : pct > 65
      ? "linear-gradient(90deg,#f59e0b,#ff6b00)"
      : "linear-gradient(90deg,#22c55e,#16a34a)";

  return (
    <div
      style={{
        height,
        background: T.elevated,
        borderRadius: 100,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${pct}%`,
          height: "100%",
          background: color,
          borderRadius: 100,
          transition: "width 0.8s cubic-bezier(0.4,0,0.2,1)",
        }}
      />
    </div>
  );
}
