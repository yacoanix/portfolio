export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  ssr: true,

  app: {
    head: {
      title: 'Aymedeyacoan Rodriguez Ortega — Desarrollador Web',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Desarrollador web full-stack — PHP, Laravel, Vue.js, Node.js.'
        },
        { property: 'og:type', content: 'profile' },
        { property: 'og:title', content: 'Aymedeyacoan Rodriguez Ortega — Desarrollador Web' },
        {
          property: 'og:description',
          content: 'Desarrollador web full-stack — PHP, Laravel, Vue.js, Node.js.'
        },
        { property: 'og:image', content: 'https://yacoanix.com/foto_perfil.jpg' },
        { property: 'og:url', content: 'https://yacoanix.com' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Aymedeyacoan Rodriguez Ortega — Desarrollador Web' },
        {
          name: 'twitter:description',
          content: 'Desarrollador web full-stack — PHP, Laravel, Vue.js, Node.js.'
        },
        { name: 'twitter:image', content: 'https://yacoanix.com/foto_perfil.jpg' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap'
        }
      ]
    }
  },

  runtimeConfig: {
    public: {
      // TODO: ajustar si contact.php no vive en el mismo dominio
      contactEndpoint: '/contact.php'
    }
  },

  css: [
    'open-props/style',
    'devicon/devicon.min.css',
    '~/assets/scss/main.scss'
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    }
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/']
    },
    output: {
      publicDir: './dist'
    }
  }
})
