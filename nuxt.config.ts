// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "AI Anything",
    },
  },
  runtimeConfig: {
    openaiApiKey: "",
  },
  modules: [
    "@anu-vue/nuxt",
    "@unocss/nuxt",
    "@nuxtjs/color-mode",
    "@vueuse/nuxt",
  ],
  css: ["@anu-vue/preset-theme-default/dist/style.css", "~/assets/global.css"],
  colorMode: {
    classSuffix: "",
  },
});