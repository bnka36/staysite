import { motion } from "motion/react";
import { useI18n } from "../hooks/useI18n";
import { usePageTitle } from "../hooks/usePageTitle";
import RealPlacePhoto from "../components/RealPlacePhoto";
import { restaurantPhotos } from "../config/photos";
import { business } from "../config/business";

export default function Restaurant() {
  const { t } = useI18n();
  usePageTitle(t.pages.restaurant.metaTitle);

  return (
    <div>
      <header className="section-px mx-auto max-w-3xl pt-16 pb-6 text-center">
        <h1 className="font-display text-4xl font-semibold text-navy sm:text-5xl">
          {t.pages.restaurant.title}
        </h1>
      </header>

      <div className="section-px mx-auto grid max-w-5xl grid-cols-1 gap-10 pb-16 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-lg"
          style={{ borderRadius: "var(--radius-lg)" }}
        >
          <RealPlacePhoto
            src={restaurantPhotos.facade1}
            alt="Façade de Dar El Hout"
            placeholderLabel="Photo de la façade à venir"
            className="h-[320px] w-full object-cover sm:h-[400px]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="mb-5 text-base leading-relaxed text-grey/85">{t.pages.restaurant.body1}</p>
          <p className="text-base leading-relaxed text-grey/85">{t.pages.restaurant.body2}</p>
        </motion.div>
      </div>

      <div className="section-px section-py bg-navy/3">
        <h2 className="mb-8 text-center font-display text-2xl font-semibold text-navy sm:text-3xl">
          {t.pages.restaurant.valuesTitle}
        </h2>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
          {t.pages.restaurant.values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="rounded-lg bg-ivory p-6 text-center shadow-sm ring-1 ring-navy/5"
              style={{ borderRadius: "var(--radius-md)" }}
            >
              <h3 className="mb-2 font-display text-lg font-semibold text-navy">{value.title}</h3>
              <p className="text-sm text-grey/75">{value.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="section-px section-py grid grid-cols-1 gap-4 sm:grid-cols-2">
        <RealPlacePhoto
          src={restaurantPhotos.salle2}
          alt="Salle de Dar El Hout"
          placeholderLabel="Photo de la salle à venir"
          className="h-64 w-full rounded-lg object-cover"
        />
        <RealPlacePhoto
          src={restaurantPhotos.facade2}
          alt={`Façade de ${business.name}`}
          placeholderLabel="Photo de la façade à venir"
          className="h-64 w-full rounded-lg object-cover"
        />
      </div>
    </div>
  );
}
