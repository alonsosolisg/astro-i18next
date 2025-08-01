import { defineConfig } from "astro/config";
import astroI18next from "astro-i18next";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel({
    isr: {
      expiration: 60 * 60 * 24,
    },
    maxDuration: 30,
  }),
  integrations: [
    astroI18next({
      defaultLocale: "en",
      locales: ["en", "fr", "es", "de"],
      namespaces: ["translation", "common"],
      defaultNamespace: "translation",
    }),
  ],
});
