// components/ui/SectionHead.jsx  —  Section title + optional action button
import T from "../../tokens";

export default function SectionHead({ title, sub, action }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 18,
      }}
    >
      <div>
        <h3
          style={{
            fontFamily: T.sans,
            fontWeight: 700,
            fontSize: 14,
            color: T.text,
            margin: "0 0 2px",
          }}
        >
          {title}
        </h3>
        {sub && (
          <p style={{ fontFamily: T.sans, fontSize: 11, color: T.textDim, margin: 0 }}>
            {sub}
          </p>
        )}
      </div>

      {action && (
        <button
          style={{
            fontFamily: T.sans,
            fontSize: 11,
            color: T.orange,
            background: T.orangeDim,
            border: `1px solid ${T.orangeMid}`,
            padding: "4px 12px",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          {action}
        </button>
      )}
    </div>
  );
}
