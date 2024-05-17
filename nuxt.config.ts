import { resolve } from 'node:path'
import glsl from 'vite-plugin-glsl'
import { runtimeConfig } from './config/runtimeConfig'
import graphqlMiddleware from './config/graphqlMiddleware'
import multiCache from './config/multiCache'

const ONE_YEAR = 31_536_000


const LANGCODES = ['de', 'fr', 'it']

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  telemetry: false,

  app: {
    rootId: 'nuxt-root',
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'familleSuisse',
      htmlAttrs: {
        tagDuplicateStrategy: 'merge',
        lang: 'de',
      },
    },
  },

  /**
   * Nuxt.js modules
   */
  modules: [
    'nuxt-language-negotiation',
  ],


  languageNegotiation: {
    // Define the available languages.
    availableLanguages: LANGCODES,
    defaultLanguageNoPrefix: true,

    // We use two negotiators: Path prefix takes precedence. In cases where no
    // path prefix is available, we fall back to Accept-Language headers.
    negotiators: ['pathPrefix', 'acceptLanguage'],
  },


  experimental: {
    asyncContext: true,
  },
})
