// components/ui/Panel.jsx  —  Base card wrapper used across all views
import T from "../../tokens";

export default function Panel({ children, style = {} }) {
  return (
    <div
      style={{
        background: T.card,
        border: `1px solid ${T.border}`,
        borderRadius: 14,
        padding: 22,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
