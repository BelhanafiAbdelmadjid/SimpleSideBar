// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/icon','nuxt-highcharts',],
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/',
        redirect: '/new-default-page'
      });
    }
  }
 
})