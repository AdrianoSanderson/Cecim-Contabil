// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  css: ['../assets/css/main.css'],

  app: {
    head: {
      title: 'Cecim Contábil | Assessoria e Consultoria Contábil',
      htmlAttrs: {
        lang: 'pt-BR'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Assessoria e consultoria contábil especializada para empresas, médicos e advogados. Abra ou migre a sua empresa com a Cecim Contábil.' 
        },
        { name: 'format-detection', content: 'telephone=no' },

        { property: 'og:site_name', content: 'Cecim Contábil' },
        { name: 'apple-mobile-web-app-title', content: 'Cecim Contábil' },
        { name: 'google-site-verification', content: 'Eu_sByct0h5THw5FdRUpmeGR6eXIF4k8weLOzY-Cndc' },
        
        // Open Graph / Facebook / WhatsApp Preview
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Cecim Contábil | Assessoria e Consultoria Contábil' },
        { property: 'og:description', content: 'Soluções contábeis estratégicas para o seu negócio crescer com segurança.' },
        { property: 'og:image', content: '/og-image.jpg' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }
      ]
    }
  }
})