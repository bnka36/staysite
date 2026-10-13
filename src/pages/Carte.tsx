import { motion } from "motion/react";
import { useI18n } from "../hooks/useI18n";
import { usePageTitle } from "../hooks/usePageTitle";
import { menu, menuCategoryOrder, type MenuCategoryKey } from "../data/menu";

export default function Carte() {
  const { t } = useI18n();
  usePageTitle(t.pages.carte.metaTitle);

  return (
    <div className="section-px section-py mx-auto max-w-4xl">
      <header className="mb-12 text-center">
        <h1 className="font-display text-4xl font-semibold text-navy sm:text-5xl">
          {t.pages.carte.title}
        </h1>
        <p className="mt-4 text-base text-grey/75">{t.pages.carte.subtitle}</p>
        <p className="mx-auto mt-4 max-w-lg text-xs text-grey/50">{t.menuPreview.demoNote}</p>
      </header>

      {menuCategoryOrder.map((category: MenuCategoryKey, catIndex) => {
        const items = menu.filter((item) => item.category === category);
        if (items.length === 0) return null;

        return (
          <motion.section
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: catIndex * 0.03 }}
            className="mb-10"
          >
            <h2 className="mb-4 border-b border-gold/30 pb-2 font-display text-xl font-semibold text-navy">
              {t.menuCategories[category]}
            </h2>
            <ul className="flex flex-col gap-3">
              {items.map((item) => (
                <li key={item.name} className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium text-navy">{item.name}</p>
                    <p className="text-sm text-grey/70">{item.description}</p>
                  </div>
                  <span className="shrink-0 whitespace-nowrap font-semibold text-gold">
                    {item.priceMad} {t.common.currency}
                  </span>
                </li>
              ))}
            </ul>
          </motion.section>
        );
      })}
    </div>
  );
}
