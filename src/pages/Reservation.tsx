import { useI18n } from "../hooks/useI18n";
import { usePageTitle } from "../hooks/usePageTitle";
import ReservationForm from "../components/Reservation";

export default function ReservationPage() {
  const { t } = useI18n();
  usePageTitle(t.pages.reservation.metaTitle);

  return (
    <div className="section-px section-py mx-auto max-w-2xl">
      <header className="mb-10 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ocean">
          {t.reservation.kicker}
        </p>
        <h1 className="font-display text-4xl font-semibold text-navy sm:text-5xl">
          {t.reservation.title}
        </h1>
        <p className="mt-4 text-base text-grey/75">{t.reservation.subtitle}</p>
      </header>
      <ReservationForm />
    </div>
  );
}
