import { motion } from "motion/react";
import { useI18n } from "../hooks/useI18n";
import { business } from "../config/business";
import RealPlacePhoto from "./RealPlacePhoto";
import { restaurantPhotos } from "../config/photos";

export default function Presentation() {
  const { t } = useI18n();

  return (
    <section className="section-px section-py grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ocean">
          {t.presentation.kicker}
        </p>
        <h2 className="mb-6 font-display text-3xl font-semibold text-navy sm:text-4xl">
          {t.presentation.title}
        </h2>
        <p className="mb-8 max-w-xl text-base leading-relaxed text-grey/90">
          {t.presentation.body}
        </p>
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-grey/60">
            {t.presentation.cuisineTagsLabel}
          </p>
          <div className="flex flex-wrap gap-2">
            {business.cuisineTypes.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-ocean/30 bg-ocean/5 px-4 py-1.5 text-sm font-medium text-ocean"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="overflow-hidden rounded-lg"
        style={{ borderRadius: "var(--radius-lg)" }}
      >
        <RealPlacePhoto
          src={restaurantPhotos.salle1}
          alt="Salle du restaurant Dar El Hout"
          placeholderLabel="Photo de la salle à venir"
          className="h-[340px] w-full object-cover sm:h-[420px]"
        />
      </motion.div>
    </section>
  );
}
