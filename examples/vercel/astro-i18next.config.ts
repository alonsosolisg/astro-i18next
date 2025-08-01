import type { AstroI18nextConfig } from "astro-i18next";

const config: AstroI18nextConfig = {
  defaultLocale: "en",
  locales: ["en", "fr", "es", "de"],
  namespaces: ["translation", "common"],
  defaultNamespace: "translation",
  routes: {
    about: {
      en: "about",
      fr: "a-propos",
      es: "sobre",
      de: "uber",
    },
    blog: {
      en: "blog",
      fr: "blog",
      es: "blog",
      de: "blog",
    },
    contact: {
      en: "contact",
      fr: "contact",
      es: "contacto",
      de: "kontakt",
    },
  },
  i18nextServer: {
    debug: false,
    fallbackLng: "en",
  },
  i18nextClient: {
    debug: false,
    fallbackLng: "en",
  },
  load: ["server", "client"],
  showDefaultLocale: false,
  trailingSlash: "ignore",
  resourcesBasePath: "/locales",
};

export default config;
