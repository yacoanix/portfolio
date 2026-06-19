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
        }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
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
