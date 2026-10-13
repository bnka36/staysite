import { useI18n } from "../hooks/useI18n";
import { usePageTitle } from "../hooks/usePageTitle";
import Location from "../components/Location";

export default function Contact() {
  const { t } = useI18n();
  usePageTitle(t.pages.contact.metaTitle);

  return (
    <div>
      <header className="section-px mx-auto max-w-2xl pt-16 pb-4 text-center">
        <h1 className="font-display text-4xl font-semibold text-navy sm:text-5xl">
          {t.pages.contact.title}
        </h1>
        <p className="mt-4 text-base text-grey/75">{t.pages.contact.subtitle}</p>
      </header>
      <Location />
    </div>
  );
}
