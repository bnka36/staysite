import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { useI18n } from "../hooks/useI18n";
import { business, hasPhone, hasAnySocial, hasInstagram, hasFacebook, unverified } from "../config/business";
import Wordmark from "./Wordmark";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-navy/10 bg-navy text-ivory">
      <div className="section-px grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Wordmark size="sm" theme="dark" className="mb-4" />
          <p className="text-sm leading-relaxed text-ivory/70">{t.footer.aboutBody}</p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gold">
            {t.footer.quickLinksTitle}
          </h3>
          <ul className="flex flex-col gap-2 text-sm text-ivory/75">
            <li><Link to="/carte" className="hover:text-ivory">{t.nav.menu}</Link></li>
            <li><Link to="/galerie" className="hover:text-ivory">{t.nav.gallery}</Link></li>
            <li><Link to="/restaurant" className="hover:text-ivory">{t.nav.restaurant}</Link></li>
            <li><Link to="/reservation" className="hover:text-ivory">{t.nav.reservation}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gold">
            {t.footer.contactTitle}
          </h3>
          <ul className="flex flex-col gap-2.5 text-sm text-ivory/75">
            <li className="flex items-start gap-2">
              <MapPin size={15} className="mt-0.5 shrink-0 text-gold" />
              <span>
                {business.address.street}, {business.address.city}
              </span>
            </li>
            {hasPhone && (
              <li>
                <a href={unverified.phoneHref!} className="hover:text-ivory">
                  {unverified.phone}
                </a>
              </li>
            )}
            {hasAnySocial && (
              <li className="flex gap-3 pt-1">
                {hasInstagram && (
                  <a href={unverified.socials.instagram!} target="_blank" rel="noreferrer" className="hover:text-ivory">
                    Instagram
                  </a>
                )}
                {hasFacebook && (
                  <a href={unverified.socials.facebook!} target="_blank" rel="noreferrer" className="hover:text-ivory">
                    Facebook
                  </a>
                )}
              </li>
            )}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gold">
            {t.footer.legalTitle}
          </h3>
          <ul className="flex flex-col gap-2 text-sm text-ivory/75">
            <li><Link to="/mentions-legales" className="hover:text-ivory">{t.footer.mentionsLegales}</Link></li>
            <li><Link to="/confidentialite" className="hover:text-ivory">{t.footer.confidentialite}</Link></li>
          </ul>
        </div>
      </div>

      <div className="section-px border-t border-ivory/10 py-6 text-center">
        <p className="text-xs text-ivory/50">
          © {new Date().getFullYear()} {business.name}. {t.footer.rights}
        </p>
        <p className="mt-1 text-xs text-gold/70">{t.footer.demoSiteNote}</p>
      </div>
    </footer>
  );
}
