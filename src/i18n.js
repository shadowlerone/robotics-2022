import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";

import translationEN from './assets/text/locales/en/translation.json';
import translationFR from './assets/text/locales/fr/translation.json'

// the translations
const resources = {
    en: {
      translation: translationEN
    },
    fr: {
      translation: translationFR
    }
  };

i18n
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;