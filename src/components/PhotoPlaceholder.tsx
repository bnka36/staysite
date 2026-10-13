import { ImageOff } from "lucide-react";

type PhotoPlaceholderProps = {
  label: string;
  className?: string;
};

/**
 * Used ONLY for slots that must show a specific real place (the facade,
 * the dining room) when no authorized photo of it exists yet. Never
 * substitutes a generic/stock photo here — a stock photo of *a* restaurant
 * or *a* bay would misrepresent Dar El Hout as a real place. This card is
 * honest about what's missing instead.
 */
export default function PhotoPlaceholder({ label, className = "" }: PhotoPlaceholderProps) {
  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-navy via-navy/95 to-ocean/40 px-6 text-center ${className}`}
    >
      <ImageOff size={28} className="text-gold/70" strokeWidth={1.5} />
      <p className="max-w-[16rem] text-sm font-medium leading-snug text-ivory/80">{label}</p>
    </div>
  );
}
