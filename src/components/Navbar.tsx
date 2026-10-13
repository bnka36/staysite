import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion } from "motion/react";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import Wordmark from "./Wordmark";
import { useI18n, SUPPORTED_LANGS, type Lang } from "../hooks/useI18n";

const navPaths = ["/", "/carte", "/galerie", "/restaurant", "/contact"] as const;

export default function Navbar() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navLabels: Record<(typeof navPaths)[number], string> = {
    "/": t.nav.home,
    "/carte": t.nav.menu,
    "/galerie": t.nav.gallery,
    "/restaurant": t.nav.restaurant,
    "/contact": t.nav.contact,
  };

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors hover:text-ocean ${
      isActive ? "text-ocean" : "text-grey/80"
    }`;

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="sticky top-0 z-[90] border-b border-navy/10 bg-ivory/95 backdrop-blur"
    >
      <div className="section-px flex items-center justify-between py-3">
        <Link to="/" onClick={() => setOpen(false)} aria-label="Dar El Hout — accueil">
          <Wordmark size="md" theme="light" />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navPaths.map((path) => (
            <NavLink key={path} to={path} className={linkClass} end={path === "/"}>
              {navLabels[path]}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangOpen((v) => !v)}
              aria-label={t.nav.languageLabel}
              aria-expanded={langOpen}
              className="flex items-center gap-1 rounded-full border border-navy/15 px-3 py-1.5 text-sm font-medium text-navy transition-colors hover:border-ocean hover:text-ocean"
            >
              <Globe size={15} />
              {lang.toUpperCase()}
              <ChevronDown size={14} />
            </button>
            {langOpen && (
              <div className="absolute end-0 top-full mt-2 w-36 overflow-hidden rounded-lg border border-navy/10 bg-ivory shadow-lg">
                {SUPPORTED_LANGS.map((l: Lang) => (
                  <button
                    key={l}
                    type="button"
                    onClick={() => {
                      setLang(l);
                      setLangOpen(false);
                    }}
                    className={`block w-full px-4 py-2 text-start text-sm hover:bg-navy/5 ${
                      l === lang ? "font-semibold text-ocean" : "text-grey"
                    }`}
                  >
                    {l === "fr" ? "Français" : l === "en" ? "English" : "العربية"}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/reservation"
            className="rounded-full bg-navy px-5 py-2 text-sm font-semibold text-ivory transition-colors hover:bg-ocean"
          >
            {t.nav.reserveCta}
          </Link>
        </div>

        <button
          type="button"
          className="text-navy md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="flex flex-col border-t border-navy/10 bg-ivory md:hidden">
          {navPaths.map((path) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `border-b border-navy/5 px-5 py-3.5 text-base font-medium ${
                  isActive ? "text-ocean" : "text-navy"
                }`
              }
            >
              {navLabels[path]}
            </NavLink>
          ))}

          <div className="flex items-center gap-2 px-5 py-3.5">
            <Globe size={16} className="text-navy/60" />
            {SUPPORTED_LANGS.map((l: Lang) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                className={`rounded-full px-3 py-1 text-sm font-medium ${
                  l === lang ? "bg-navy text-ivory" : "text-navy/70"
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          <Link
            to="/reservation"
            onClick={() => setOpen(false)}
            className="m-4 rounded-full bg-navy px-5 py-3 text-center text-base font-semibold text-ivory"
          >
            {t.nav.reserveCta}
          </Link>
        </div>
      )}
    </motion.header>
  );
}
