import { useRef, useState, type ImgHTMLAttributes } from "react";

type SmartImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt" | "onError"> & {
  /** Preferred source — e.g. a real restaurant photo that may not exist yet. */
  primary: string;
  /** Licensed stock photo shown if `primary` fails to load (404, etc.). */
  fallback: string;
  /** Alt text used when the primary (real) photo is showing. */
  alt: string;
  /** Alt text used when the stock fallback is showing. Defaults to `${alt} — photo d'illustration`. */
  fallbackAlt?: string;
};

/**
 * Renders `primary` and transparently swaps to `fallback` on error, so a
 * missing real-photo file (the normal state until the owner adds one —
 * see PHOTOS.md) never breaks the layout or shows a broken image icon.
 */
export default function SmartImage({
  primary,
  fallback,
  alt,
  fallbackAlt,
  ...rest
}: SmartImageProps) {
  const [src, setSrc] = useState(primary);
  const [usingFallback, setUsingFallback] = useState(false);
  const triedFallback = useRef(false);

  return (
    <img
      {...rest}
      src={src}
      alt={usingFallback ? fallbackAlt ?? `${alt} — photo d'illustration` : alt}
      onError={() => {
        if (!triedFallback.current) {
          triedFallback.current = true;
          setSrc(fallback);
          setUsingFallback(true);
        }
      }}
    />
  );
}
