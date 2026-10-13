import { useI18n } from "../hooks/useI18n";
import { usePageTitle } from "../hooks/usePageTitle";

export default function Confidentialite() {
  const { t } = useI18n();
  usePageTitle(t.pages.confidentialite.metaTitle);

  return (
    <div className="section-px section-py mx-auto max-w-2xl">
      <h1 className="mb-6 font-display text-4xl font-semibold text-navy">
        {t.pages.confidentialite.title}
      </h1>
      <p className="mb-8 text-sm italic text-grey/60">{t.pages.confidentialite.intro}</p>
      {t.pages.confidentialite.sections.map((section) => (
        <section key={section.heading} className="mb-6">
          <h2 className="mb-2 font-display text-lg font-semibold text-navy">{section.heading}</h2>
          <p className="text-sm leading-relaxed text-grey/80">{section.body}</p>
        </section>
      ))}
    </div>
  );
}
