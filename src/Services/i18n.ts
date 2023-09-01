import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './Translations/i18n.en'
import { uk } from './Translations/i18n.ua';
import { ru } from './Translations/i18n.ru';

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: en,
      ru: ru,
      uk: uk
    }
  });

export default i18n;