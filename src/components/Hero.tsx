import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useI18n } from "../hooks/useI18n";
import { restaurantPhotos, stockPhotos } from "../config/photos";

/**
 * Hero background: tries the restaurant's own photo first
 * (public/images/restaurant/hero.jpg — not shipped in this repo, see
 * PHOTOS.md). If it's missing, falls back to a licensed stock photo of a
 * seafood dish (generic plate, no identifiable building or skyline, so it
 * can never be mistaken for an actual photo of Dar El Hout) and shows a
 * small, honest "photo d'illustration" badge in the corner.
 */
function HeroBackground() {
  const [usingFallback, setUsingFallback] = useState(false);

  return (
    <>
      <img
        src={usingFallback ? stockPhotos.heroFallback : restaurantPhotos.hero}
        alt=""
        onError={() => setUsingFallback(true)}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      {usingFallback && (
        <span className="absolute bottom-4 start-4 z-10 rounded-full bg-navy/60 px-3 py-1 text-[11px] font-medium tracking-wide text-ivory/80 backdrop-blur-sm">
          Photo d'illustration
        </span>
      )}
    </>
  );
}

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative isolate overflow-hidden" style={{ minHeight: "92svh" }}>
      <HeroBackground />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-navy/20" />

      <div className="relative z-10 flex h-full min-h-[92svh] flex-col justify-center section-px py-24">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold"
        >
          {t.hero.kicker}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl font-display text-5xl font-semibold leading-[1.05] text-ivory sm:text-6xl md:text-7xl"
        >
          {t.hero.titleLine1}
          <br />
          <span className="text-gold">{t.hero.titleLine2}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 max-w-md text-base leading-relaxed text-ivory/85 sm:text-lg"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            to="/reservation"
            className="rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy transition-transform hover:scale-[1.03]"
          >
            {t.hero.ctaReserve}
          </Link>
          <Link
            to="/carte"
            className="rounded-full border border-ivory/40 px-7 py-3.5 text-sm font-semibold text-ivory transition-colors hover:bg-ivory/10"
          >
            {t.hero.ctaMenu}
          </Link>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 start-1/2 z-10 hidden -translate-x-1/2 sm:block"
        aria-hidden="true"
      >
        <ChevronDown size={26} className="text-ivory/60" />
      </motion.div>
    </section>
  );
}
