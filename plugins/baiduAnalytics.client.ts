export default defineNuxtPlugin((nuxtApp) => {
  const hm = document.createElement('script')
  hm.src = 'https://hm.baidu.com/hm.js?7a262e7de00a9dca9f7686afd2bb84b1'
  const s = document.getElementsByTagName('html')[0]
  s.appendChild(hm)
})
