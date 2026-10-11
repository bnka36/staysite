import { marqueeItems } from "../data";

export default function TrustMarquee() {
  return (
    <div
      style={{
        backgroundColor: "var(--color-surface)",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
        padding: "20px 0",
        overflow: "hidden",
      }}
    >
      <div className="marquee-track items-center">
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <span key={i} className="flex items-center" style={{ flexShrink: 0 }}>
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(14px, 1.4vw, 17px)",
                color: "var(--color-grey-light)",
                letterSpacing: "0.02em",
                whiteSpace: "nowrap",
                padding: "0 40px",
              }}
            >
              {item}
            </span>
            <span style={{ color: "var(--color-orange)", fontSize: 22, lineHeight: 1 }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
