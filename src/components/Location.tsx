import { motion } from "motion/react";
import { MapPin, Phone, MessageCircle, Navigation, Clock } from "lucide-react";
import { useI18n } from "../hooks/useI18n";
import {
  business,
  unverified,
  hasPhone,
  hasWhatsapp,
  hasHours,
  hasMapsEmbed,
  whatsappHref,
} from "../config/business";

export default function Location() {
  const { t } = useI18n();

  return (
    <section id="contact" className="section-px section-py bg-navy/3">
      <div className="mb-10 max-w-xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ocean">
          {t.location.kicker}
        </p>
        <h2 className="font-display text-3xl font-semibold text-navy sm:text-4xl">
          {t.location.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <h3 className="mb-2 flex items-center gap-2 font-display text-lg font-semibold text-navy">
              <MapPin size={18} className="text-ocean" />
              {t.location.addressTitle}
            </h3>
            <p className="text-base text-grey/85">
              {business.address.street}
              <br />
              {business.address.city}, {business.address.country}
            </p>
          </div>

          <div className="mb-8">
            <h3 className="mb-2 flex items-center gap-2 font-display text-lg font-semibold text-navy">
              <Clock size={18} className="text-ocean" />
              {t.location.hoursTitle}
            </h3>
            {hasHours ? (
              <table>
                <tbody>
                  {unverified.hours!.map((h) => (
                    <tr key={h.day}>
                      <td className="pe-4 py-1 text-sm font-medium text-navy">{h.day}</td>
                      <td className="py-1 text-sm text-grey/80">{h.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-sm italic text-grey/50">{t.common.hoursToConfirm}</p>
            )}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={business.mapsSearchUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-ivory transition-colors hover:bg-ocean"
            >
              <Navigation size={16} />
              {t.location.directions}
            </a>

            {hasPhone ? (
              <a
                href={unverified.phoneHref!}
                className="inline-flex items-center gap-2 rounded-full border border-navy/20 px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-ocean hover:text-ocean"
              >
                <Phone size={16} />
                {t.location.call}
              </a>
            ) : (
              <span
                title={t.common.phoneToConfirm}
                aria-disabled="true"
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-navy/10 px-5 py-2.5 text-sm font-semibold text-grey/40"
              >
                <Phone size={16} />
                {t.location.call}
              </span>
            )}

            {hasWhatsapp ? (
              <a
                href={whatsappHref() ?? "#"}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-navy/20 px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-ocean hover:text-ocean"
              >
                <MessageCircle size={16} />
                {t.location.whatsapp}
              </a>
            ) : (
              <span
                title={t.common.whatsappToConfirm}
                aria-disabled="true"
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-navy/10 px-5 py-2.5 text-sm font-semibold text-grey/40"
              >
                <MessageCircle size={16} />
                {t.location.whatsapp}
              </span>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex min-h-[280px] items-center justify-center overflow-hidden rounded-lg bg-navy/8"
          style={{ borderRadius: "var(--radius-lg)" }}
        >
          {hasMapsEmbed ? (
            <iframe
              title="Carte — Dar El Hout"
              src={unverified.mapsEmbedUrl!}
              className="h-full min-h-[280px] w-full border-0"
              loading="lazy"
            />
          ) : (
            <div className="flex flex-col items-center gap-3 p-8 text-center">
              <MapPin size={32} className="text-ocean/60" />
              <p className="max-w-xs text-sm text-grey/60">{t.location.mapUnavailable}</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
