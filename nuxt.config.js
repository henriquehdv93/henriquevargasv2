export default {
    mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
        htmlAttrs: {
            lang: 'pt-br',
        },
        title: 'Henrique Vargas - Desenvolvedor web',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no'},
            {hid: 'description', name: 'description', content: 'colocar descrição'},
            {hid: 'og:title', property: 'og:title', content: 'Promed Call'},
            {hid: 'og:description', property: 'og:description', content: 'colocar descrição'},
            {hid: 'og:type', property: 'og:type', content: 'website'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?1'},
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Kanit:wght@400;600;700&display=swap'},
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Mulish&display=swap'},
            {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css'},
            {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'},
        ],
        // script: [
        //     {src: '/js/jquery-3.4.1.min.js', type: "text/javascript"},
        //     {src: '/js/bootstrap.min.js', type: "text/javascript"},
        //     {src: '/js/main.js', type: "text/javascript"}
        // ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#fff'},
    /*
    ** Global CSS
    */
    css: [
        // SCSS file in the project
        '~/assets/sass/bootstrap/bootstrap.scss',
        '~/assets/sass/main.scss',
        'aos/dist/aos.css',
        // CSS file in the project
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        // {src: `~plugins/popper.js`, ssr: true},
        {src: `~plugins/jquery.js`, ssr: true},
        {src: "@/plugins/aos", mode: "client" },
    ],
    purgeCSS: {
        whitelist: ["aos-init", "aos-animate", "data-aos-delay", "data-aos-duration", "fade-up", "zoom-in"],
    },
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
        '@nuxtjs/ngrok',
        '@nuxtjs/fontawesome',
    ],
    fontawesome: {
      icons: [
      ],
    },
    /*
    *   * Nuxt.js modules
    */
    modules: [
        // ['@nuxtjs/axios', { baseURL: process.env.NUXT_ENV_URL_API }],
        ['@nuxtjs/robots', {
          UserAgent: '*',
          Allow: '/'
      }],
      ['@nuxtjs/sitemap', {
        "hostname": "https://www.henriquevargas.com.br",
        exclude: [
            '/404'
        ]
      }],
    ],
    build: {
        transpile: [
            
        ],
        extractCSS: true,
        optimization: {
            splitChunks: {
                cacheGroups: {
                    styles: {
                        name: 'styles',
                        test: /\.(css|vue)$/,
                        chunks: 'async',
                        enforce: false
                    }
                }
            }
        },
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
            if (ctx.isClient) {
                // config.resolve.alias['vue$'] = 'vue/dist/vue.esm.js'
            }
        },
        postcss: {
            // Add plugin names as key and arguments as value
            // Install them before as dependencies with npm or yarn
            plugins: {
                "postcss-import": {
                    // path: ["../assets/css", "../components/@css", "../components"]
                }
                // Disable a plugin by passing false as value
                // 'postcss-url': true,
                // 'postcss-nested': {},
                // 'postcss-responsive-type': {},
                // 'postcss-hexrgba': {}
            },
            preset: {
                // Change the postcss-preset-env settings
                autoprefixer: {
                    grid: true
                }
            }
        },
        /**
         * add external plugins
         */
        vendor: [],
        plugins: [],
        env: {
            baseUrl: process.env.BASE_URL || 'http://localhost:3000'
        }
    },
    router: {
        scrollBehavior(to) {
          if (to.hash) {
            return window.scrollTo({
              top: document.querySelector(to.hash).offsetTop + window.innerHeight,
              behavior: 'smooth'
            })
          }
          return window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }
}
