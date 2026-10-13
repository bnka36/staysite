type WordmarkProps = {
  size?: "sm" | "md" | "lg";
  theme?: "dark" | "light";
  className?: string;
};

const sizes: Record<NonNullable<WordmarkProps["size"]>, string> = {
  sm: "text-lg gap-1.5",
  md: "text-2xl gap-2",
  lg: "text-4xl sm:text-5xl gap-3",
};

/** Small inline fish glyph used next to the wordmark. */
function FishGlyph({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 48 24" width="1.1em" height="0.55em" fill="none" aria-hidden="true">
      <path
        d="M4 12c6-8 16-10 24-6-1.5 2-1.5 10 0 12-8 4-18 2-24-6z"
        fill={color}
      />
      <path d="M28 8c3 2 4 6 0 8 4 0 9-2 11-4-2-2-7-4-11-4z" fill={color} />
      <circle cx="11" cy="10.5" r="1.3" fill="currentColor" className="opacity-40" />
    </svg>
  );
}

export default function Wordmark({ size = "md", theme = "dark", className = "" }: WordmarkProps) {
  const textColor = theme === "dark" ? "text-ivory" : "text-navy";
  const accentColor = theme === "dark" ? "text-gold" : "text-ocean";
  const glyphColor = theme === "dark" ? "#C9A66B" : "#126C80";

  return (
    <span
      className={`inline-flex items-baseline font-display font-semibold tracking-wide ${sizes[size]} ${textColor} ${className}`}
    >
      <FishGlyph color={glyphColor} />
      <span>
        DAR EL <span className={accentColor}>HOUT</span>
      </span>
    </span>
  );
}
