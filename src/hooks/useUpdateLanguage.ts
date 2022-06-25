import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useUpdateLanguage = () => {
  const { i18n } = useTranslation();

  const getCurrentLanguage = () => i18n.language;

  const [currentLanguage, setCurrentLanguage] = useState(getCurrentLanguage() || 'en');

  const updateLanguage = (lang: 'es' | 'en') => {
    if (getCurrentLanguage() !== lang) {
      i18n.changeLanguage(lang);
      setCurrentLanguage(lang);
    }
  };
  return { getCurrentLanguage, currentLanguage, updateLanguage };
};
