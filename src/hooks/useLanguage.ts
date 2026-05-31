import { useEffect, useState } from 'react';
import type { Language } from '../i18n/types';

const LANGUAGE_STORAGE_KEY = 'oriental-aquascape-demo-language';

function readStoredLanguage(): Language {
  if (typeof window === 'undefined') {
    return 'en';
  }

  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

  return storedLanguage === 'zh' ? 'zh' : 'en';
}

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(() => readStoredLanguage());

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  }, [language]);

  function toggleLanguage() {
    setLanguage((currentLanguage) => (currentLanguage === 'en' ? 'zh' : 'en'));
  }

  return { language, toggleLanguage };
}
