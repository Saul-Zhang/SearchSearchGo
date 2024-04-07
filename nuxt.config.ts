import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    host: '0.0.0.0'
  },
  // modules: ["nuxt-vite-legacy"],
  // Optionally, provide @vitejs/plugin-legacy options.
  // For example, for Chrome 49 you could use:
  // legacy: {
  //   targets: ["chrome 49"],
  //   additionalLegacyPolyfills: [
  //     // "mdn-polyfills/Element.prototype.getAttributeNames",
  //     "vuetify",
  //     // "vite"
  //   ],
  // },
  app: {
    head: {
      title: '云寻',
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' }
      ],
      meta: [
        { name: 'description', content: '一款极简体验、优雅、现代化、资源丰富、免费、无需登录的新一代网盘搜索引擎，来体验找寻资源的快乐吧~' }
      ],
    }
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    // "nuxt-vite-legacy"
  ],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
