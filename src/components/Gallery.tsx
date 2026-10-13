import { useCallback, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, ImageOff } from "lucide-react";
import { useI18n } from "../hooks/useI18n";
import { authenticGalleryItems, illustrationGalleryItems, type GalleryItem } from "../data/galleryItems";

type GalleryProps = {
  limit?: number;
  showHeading?: boolean;
  showViewAll?: boolean;
};

type TileStatus = "pending" | "ok" | "failed";

/** One tile in the "authentic" grid: only ever shows a REAL photo — never a stock fallback. */
function AuthenticTile({
  item,
  onReady,
  onOpen,
}: {
  item: GalleryItem;
  onReady: (status: TileStatus) => void;
  onOpen: () => void;
}) {
  const [status, setStatus] = useState<TileStatus>("pending");

  if (status === "failed") return null;

  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      className="group overflow-hidden rounded-lg ring-1 ring-navy/5"
      style={{ borderRadius: "var(--radius-md)", aspectRatio: "4 / 3" }}
    >
      <img
        src={item.primary}
        alt={item.alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        onLoad={() => {
          setStatus("ok");
          onReady("ok");
        }}
        onError={() => {
          setStatus("failed");
          onReady("failed");
        }}
      />
    </motion.button>
  );
}

export default function Gallery({ limit, showHeading = true, showViewAll = true }: GalleryProps) {
  const { t } = useI18n();
  const isPreview = Boolean(limit);
  const illustrationItems = limit ? illustrationGalleryItems.slice(0, limit) : illustrationGalleryItems;

  // Tracks how many authentic tiles have resolved (loaded vs. 404'd) so we
  // know when to show the "pas encore de photos officielles" message
  // instead of leaving a half-empty grid.
  const [settled, setSettled] = useState(0);
  const [okCount, setOkCount] = useState(0);
  const handleReady = useCallback((status: TileStatus) => {
    setSettled((n) => n + 1);
    if (status === "ok") setOkCount((n) => n + 1);
  }, []);
  const allSettled = settled >= authenticGalleryItems.length;
  const hasAuthenticPhotos = okCount > 0;

  const lightboxItems = useMemo(
    () => [...(hasAuthenticPhotos ? authenticGalleryItems : []), ...illustrationItems],
    [hasAuthenticPhotos, illustrationItems],
  );
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const prev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + lightboxItems.length) % lightboxItems.length));
  const next = () => setActiveIndex((i) => (i === null ? null : (i + 1) % lightboxItems.length));

  return (
    <section className="section-px section-py">
      {showHeading && (
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ocean">
              {t.gallery.kicker}
            </p>
            <h2 className="font-display text-3xl font-semibold text-navy sm:text-4xl">
              {t.gallery.title}
            </h2>
            <p className="mt-3 max-w-md text-base text-grey/80">{t.gallery.subtitle}</p>
          </div>
          {showViewAll && (
            <Link
              to="/galerie"
              className="shrink-0 rounded-full border border-navy/20 px-6 py-3 text-sm font-semibold text-navy transition-colors hover:border-ocean hover:text-ocean"
            >
              {t.gallery.viewAll}
            </Link>
          )}
        </div>
      )}

      {/* Section 1 — authentic, verified photos of Dar El Hout. Hidden tiles
          for any path that 404s; an honest message once we know none loaded.
          Skipped entirely in compact "preview" mode (Home page teaser). */}
      {!isPreview && (
        <>
          <div className="mb-3 flex items-center gap-2">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-navy/70">
              Photos authentiques de Dar El Hout
            </h3>
          </div>
          {!hasAuthenticPhotos && allSettled ? (
            <div className="mb-10 flex items-center gap-3 rounded-lg border border-dashed border-navy/20 bg-navy/[0.03] px-5 py-6 text-sm text-grey/70">
              <ImageOff size={20} className="shrink-0 text-navy/40" />
              <span>
                Aucune photo officielle n'est disponible pour le moment. Dès que le restaurant nous
                fournit ses propres photos, elles apparaîtront automatiquement ici.
              </span>
            </div>
          ) : (
            <div className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {authenticGalleryItems.map((item, index) => (
                <AuthenticTile
                  key={item.alt}
                  item={item}
                  onReady={handleReady}
                  onOpen={() => setActiveIndex(index)}
                />
              ))}
            </div>
          )}
        </>
      )}

      {/* Section 2 — licensed stock photos of seafood dishes, clearly
          labelled as illustrations, never presented as Dar El Hout itself. */}
      {!isPreview && (
        <div className="mb-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-navy/70">
            Nos plats — photos d'illustration
          </h3>
          <p className="mt-1 text-xs text-grey/60">
            Photographies libres de droits représentant le type de cuisine proposée, en attendant les
            photos réelles des plats de Dar El Hout.
          </p>
        </div>
      )}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {illustrationItems.map((item, index) => (
          <motion.button
            key={item.alt}
            type="button"
            onClick={() => setActiveIndex((hasAuthenticPhotos ? authenticGalleryItems.length : 0) + index)}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: (index % 4) * 0.06 }}
            className="group relative overflow-hidden rounded-lg ring-1 ring-navy/5"
            style={{ borderRadius: "var(--radius-md)", aspectRatio: "4 / 3" }}
          >
            <img
              src={item.primary}
              alt={item.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute bottom-2 end-2 rounded-full bg-navy/60 px-2.5 py-0.5 text-[10px] font-medium text-ivory/80 backdrop-blur-sm">
              Illustration
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && lightboxItems[activeIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-navy/95 p-4"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label={t.gallery.close}
              className="absolute end-4 top-4 text-ivory/80 hover:text-ivory"
            >
              <X size={28} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label={t.gallery.previous}
              className="absolute start-3 text-ivory/70 hover:text-ivory sm:start-6"
            >
              <ChevronLeft size={36} />
            </button>

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-h-[85vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxItems[activeIndex].primary}
                alt={lightboxItems[activeIndex].alt}
                className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
              />
            </motion.div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label={t.gallery.next}
              className="absolute end-3 text-ivory/70 hover:text-ivory sm:end-6"
            >
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
