import { Link } from "react-router-dom";
import { Phone, Navigation, CalendarCheck } from "lucide-react";
import { business, hasPhone, unverified } from "../config/business";
import { useI18n } from "../hooks/useI18n";

/**
 * Mobile-only bottom action bar: call / directions / reserve. The call
 * action is omitted (not faked) while no phone number is confirmed.
 */
export default function MobileActionBar() {
  const { t } = useI18n();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-[80] grid grid-cols-3 border-t border-navy/10 bg-ivory/98 backdrop-blur sm:hidden">
      {hasPhone ? (
        <a
          href={unverified.phoneHref!}
          className="flex flex-col items-center gap-1 py-2.5 text-navy"
        >
          <Phone size={18} />
          <span className="text-[11px] font-medium">{t.mobileBar.call}</span>
        </a>
      ) : (
        <span
          title={t.common.phoneToConfirm}
          aria-disabled="true"
          className="flex flex-col items-center gap-1 py-2.5 text-grey/35"
        >
          <Phone size={18} />
          <span className="text-[11px] font-medium">{t.mobileBar.call}</span>
        </span>
      )}

      <a
        href={business.mapsSearchUrl}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center gap-1 border-s border-navy/10 py-2.5 text-navy"
      >
        <Navigation size={18} />
        <span className="text-[11px] font-medium">{t.mobileBar.directions}</span>
      </a>

      <Link
        to="/reservation"
        className="flex flex-col items-center gap-1 border-s border-navy/10 bg-navy py-2.5 text-ivory"
      >
        <CalendarCheck size={18} />
        <span className="text-[11px] font-medium">{t.mobileBar.reserve}</span>
      </Link>
    </nav>
  );
}
