import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationES from './src/locales/es';
import translationEN from './src/locales/en';

const resources = {
  en: translationEN,
  es: translationES,
};

i18n.use(initReactI18next).use(LanguageDetector).init({
  resources,
  fallbackLng: 'en',
});

export default i18n;
