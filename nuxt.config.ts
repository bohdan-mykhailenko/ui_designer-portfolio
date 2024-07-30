// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    [
      "@nuxtjs/i18n",
      {
        vueI18n: "./i18n.config.ts",
        locales: [
          {
            code: "en",
            name: "English",
          },
          {
            code: "ua",
            name: "Українська",
          },
          {
            code: "fr",
            name: "Français",
          },
        ],
        defaultLocale: "en",
      },
    ],
    [
      "@nuxt/eslint",
      {
        config: {
          stylistic: {
            semi: true,
            quotes: "double",
            arrowParens: "always",
          },
        },
      },
    ],
  ],
});
