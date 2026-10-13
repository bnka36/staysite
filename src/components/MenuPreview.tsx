import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useI18n } from "../hooks/useI18n";
import { menu } from "../data/menu";
import { stockPhotos } from "../config/photos";

const featured = menu.filter((item) => item.photoKey).slice(0, 4);

export default function MenuPreview() {
  const { t } = useI18n();

  return (
    <section className="section-px section-py">
      <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ocean">
            {t.menuPreview.kicker}
          </p>
          <h2 className="font-display text-3xl font-semibold text-navy sm:text-4xl">
            {t.menuPreview.title}
          </h2>
          <p className="mt-3 max-w-md text-base text-grey/80">{t.menuPreview.subtitle}</p>
        </div>
        <Link
          to="/carte"
          className="shrink-0 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-ivory transition-colors hover:bg-ocean"
        >
          {t.menuPreview.viewFullMenu}
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
            className="overflow-hidden rounded-lg ring-1 ring-navy/5"
            style={{ borderRadius: "var(--radius-md)" }}
          >
            <img
              src={item.photoKey ? stockPhotos[item.photoKey] : stockPhotos.grilledFish}
              alt={`${item.name} — photo d'illustration`}
              className="h-40 w-full object-cover"
              loading="lazy"
            />
            <div className="flex items-center justify-between p-4">
              <span className="text-sm font-semibold text-navy">{item.name}</span>
              <span className="text-sm font-semibold text-gold">
                {item.priceMad} {t.common.currency}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="mt-6 max-w-2xl text-xs text-grey/55">{t.menuPreview.demoNote}</p>
    </section>
  );
}
