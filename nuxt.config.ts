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
        // Open Graph / Facebook / WhatsApp Preview
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Cecim Contábil | Assessoria e Consultoria Contábil' },
        { property: 'og:description', content: 'Soluções contábeis estratégicas para o seu negócio crescer com segurança.' },
        { property: 'og:image', content: '/og-image.jpg' } // Adicionar imagem na pasta public posteriormente
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})