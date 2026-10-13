import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useI18n } from "../hooks/useI18n";
import SmartImage from "./SmartImage";
import { restaurantPhotos, stockPhotos } from "../config/photos";

const stockFallbacks = [
  stockPhotos.grilledFish,
  stockPhotos.grilledFish,
  stockPhotos.shrimp,
  stockPhotos.calamari,
  stockPhotos.paella,
  stockPhotos.oysters,
];

export default function Specialties() {
  const { t } = useI18n();

  return (
    <section className="section-px section-py bg-navy/3">
      <div className="mb-12 max-w-xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ocean">
          {t.specialties.kicker}
        </p>
        <h2 className="font-display text-3xl font-semibold text-navy sm:text-4xl">
          {t.specialties.title}
        </h2>
        <p className="mt-4 text-base text-grey/80">{t.specialties.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {t.specialties.items.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="overflow-hidden rounded-lg bg-ivory shadow-sm ring-1 ring-navy/5"
            style={{ borderRadius: "var(--radius-md)" }}
          >
            <SmartImage
              primary={restaurantPhotos.plats[index]}
              fallback={stockFallbacks[index]}
              alt={item.name}
              fallbackAlt={`${item.name} — photo d'illustration`}
              className="h-56 w-full object-cover"
              loading="lazy"
            />
            <div className="p-5">
              <h3 className="mb-1.5 font-display text-lg font-semibold text-navy">
                {item.name}
              </h3>
              <p className="text-sm leading-relaxed text-grey/75">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/carte"
          className="inline-flex rounded-full border border-navy/20 px-7 py-3 text-sm font-semibold text-navy transition-colors hover:border-ocean hover:text-ocean"
        >
          {t.specialties.ctaMenu}
        </Link>
      </div>
    </section>
  );
}
