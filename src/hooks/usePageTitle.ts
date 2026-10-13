import { useEffect } from "react";

/** Sets the document title for the current page/locale. */
export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
