import VueGtag, { trackRouter } from 'vue-gtag-next'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: 'G-7P0S74N4LS'
    }
  })
  trackRouter(useRouter())
})