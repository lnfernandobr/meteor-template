// imports/i18n/i18n.tsx
import { i18n } from "meteor/universe:i18n";
import React, { createContext, useCallback, useContext } from "react";

const localeContext = createContext(i18n.getLocale());

export function useLocale() {
  return useContext(localeContext);
}

export const useTranslator = (prefix = "") => {
  const locale = useLocale();
  return useCallback(
    (key, ...args) => i18n.getTranslation(prefix, key, ...args),
    [locale],
  );
};
