import { useI18n } from "../hooks/useI18n";
import { usePageTitle } from "../hooks/usePageTitle";
import Gallery from "../components/Gallery";

export default function Galerie() {
  const { t } = useI18n();
  usePageTitle(t.pages.galerie.metaTitle);

  return (
    <div className="pt-6">
      <header className="section-px mx-auto max-w-3xl pt-6 text-center">
        <h1 className="font-display text-4xl font-semibold text-navy sm:text-5xl">
          {t.pages.galerie.title}
        </h1>
        <p className="mt-4 text-base text-grey/75">{t.pages.galerie.subtitle}</p>
      </header>
      <Gallery showHeading={false} />
    </div>
  );
}
