// src/i18n/utils.ts
import { defaultLang, languages, ui } from './lang';

export function getLangFromUrl(url: URL): keyof typeof languages {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as keyof typeof languages;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof languages) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key] || key;
  };
}
