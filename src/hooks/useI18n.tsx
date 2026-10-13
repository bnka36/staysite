import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import fr, { type Dictionary } from "../locales/fr";
import en from "../locales/en";
import ar from "../locales/ar";

export type Lang = "fr" | "en" | "ar";
export const SUPPORTED_LANGS: Lang[] = ["fr", "en", "ar"];
export const DEFAULT_LANG: Lang = "fr";

const dictionaries: Record<Lang, Dictionary> = { fr, en, ar };

const RTL_LANGS: Lang[] = ["ar"];

type I18nContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dictionary;
  dir: "ltr" | "rtl";
};

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "dar-el-hout-lang";

function readStoredLang(): Lang {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED_LANGS.includes(stored as Lang)) {
      return stored as Lang;
    }
  } catch {
    // localStorage can throw in private mode — fall back silently.
  }
  return DEFAULT_LANG;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() =>
    typeof window === "undefined" ? DEFAULT_LANG : readStoredLang()
  );

  const dir = RTL_LANGS.includes(lang) ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  const setLang = (next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore storage failures (private mode, blocked storage, etc.).
    }
  };

  const value = useMemo<I18nContextValue>(
    () => ({ lang, setLang, t: dictionaries[lang], dir }),
    [lang, dir]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return ctx;
}
