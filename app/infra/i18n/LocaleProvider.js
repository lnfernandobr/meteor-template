import { i18n } from "meteor/universe:i18n";
import React, { createContext, useEffect, useState } from "react";
import { getLanguage } from "./getLanguage";

const localeContext = createContext(i18n.getLocale());

export const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState(getLanguage());
  i18n.setLocale(locale);
  useEffect(() => {
    i18n.onChangeLocale(setLocale);
    return () => {
      i18n.offChangeLocale(setLocale);
    };
  }, [setLocale]);

  return (
    <localeContext.Provider value={locale}>{children}</localeContext.Provider>
  );
};
