import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en';

i18n.use(initReactI18next).init({
    resources: {
        en,
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: true,
    },
});

export default i18n;
