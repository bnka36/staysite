import { useState } from "react";
import PhotoPlaceholder from "./PhotoPlaceholder";

type RealPlacePhotoProps = {
  /** public/images/restaurant/... path — not shipped until the owner provides it (see PHOTOS.md). */
  src: string;
  alt: string;
  /** Shown in the placeholder while no real photo exists at `src`. */
  placeholderLabel: string;
  className?: string;
};

/**
 * For slots that must depict a SPECIFIC real place — the facade, the
 * dining room, the hero. Tries the real photo; if it's missing, shows an
 * honest "photo coming soon" placeholder instead of a stock photo, since
 * a stock photo here would misrepresent a generic place as Dar El Hout.
 * (Food/dish illustration photos are a different case — see SmartImage.)
 */
export default function RealPlacePhoto({
  src,
  alt,
  placeholderLabel,
  className = "",
}: RealPlacePhotoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <PhotoPlaceholder label={placeholderLabel} className={className} />;
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className={className}
      loading="lazy"
    />
  );
}
