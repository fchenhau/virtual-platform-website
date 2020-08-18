import i18n from "i18next";
import { initReactI18next } from 'react-i18next';

import enTranslations from "../locales/en";
import cnTranslations from "../locales/cn";

i18n
    .use(initReactI18next)
    .init({
        lng: "en",
        fallbackLng: "en", // use en if detected lng is not available
        interpolation: {
            escapeValue: false // react already safes from xss
        },
        initImmediate : false,
        resources: {
            en: {
                translations: enTranslations
            },
            cn: {
                translations: cnTranslations
            },
        },

        // have a common namespace used around the full app
        ns: ["translations"],
        defaultNS: "translations"
    });

export default i18n;
