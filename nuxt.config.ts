export default defineNuxtConfig({
  compatibilityDate: '2026-10-08',
  devtools: { enabled: false },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/stylelint-module',
    '@unocss/nuxt',
    '@element-plus/nuxt',
    '@nuxt/icon',
  ],
  stylelint: { lintOnStart: false },
  css: ['@unocss/reset/tailwind-compat.css', '@/assets/global.styl'],
  typescript: {
    tsConfig: {
      vueCompilerOptions: {
        plugins: ['@vue/language-plugin-pug'],
      },
    },
  },
})
