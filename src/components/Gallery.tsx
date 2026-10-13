import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useI18n } from "../hooks/useI18n";
import SmartImage from "./SmartImage";
import { galleryItems } from "../data/galleryItems";

type GalleryProps = {
  limit?: number;
  showHeading?: boolean;
  showViewAll?: boolean;
};

export default function Gallery({ limit, showHeading = true, showViewAll = true }: GalleryProps) {
  const { t } = useI18n();
  const items = limit ? galleryItems.slice(0, limit) : galleryItems;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const prev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + items.length) % items.length));
  const next = () => setActiveIndex((i) => (i === null ? null : (i + 1) % items.length));

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

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item, index) => (
          <motion.button
            key={item.alt + index}
            type="button"
            onClick={() => setActiveIndex(index)}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: (index % 4) * 0.06 }}
            className="group overflow-hidden rounded-lg ring-1 ring-navy/5"
            style={{ borderRadius: "var(--radius-md)", aspectRatio: "4 / 3" }}
          >
            <SmartImage
              primary={item.primary}
              fallback={item.fallback}
              alt={item.alt}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
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
              <SmartImage
                primary={items[activeIndex].primary}
                fallback={items[activeIndex].fallback}
                alt={items[activeIndex].alt}
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
