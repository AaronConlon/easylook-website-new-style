import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(
    resourcesToBackend(async (language, namespace) => {
      // i18next might pass 'zh' or 'zh-CN', ensuring it maps to our directory 'zh_CN'
      const lang = language === 'zh' || language === 'zh-CN' ? 'zh_CN' : language;

      if (import.meta.env.DEV) {
        return import(`./locales/${lang}/${namespace}.json`);
      }

      // Production: Load from OSS
      // Use current minute as eTag for minute-level caching
      const eTag = Math.floor(Date.now() / 60000);
      const res = await fetch(
        `https://easylook.oss-cn-beijing.aliyuncs.com/locales/${lang}/${namespace}.json?eTag=${eTag}`,
      );
      return res.json();
    }),
  )
  .use(initReactI18next)
  .init({
    fallbackLng: 'zh_CN',
    lng: 'zh_CN',
    ns: ['common'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;
