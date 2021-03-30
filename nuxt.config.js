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
            {name: 'msapplication-TileColor', content: '#da532c'},
            {name: 'theme-color', content: '#615CFD'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no'},
            {hid: 'og:title', property: 'og:title', content: 'Henrique Vargas - Desenvolvedor web'},
            {hid: 'description', name: 'description', content: 'Com mais de 7 anos de experiência em programação e suporte ao cliente, trabalho com desenvolvimento de sites institucionais, blogs, lojas virtuais, hotsites, portais de notícias e landing pages focando sempre na usabilidade, acessibilidade e melhor performance para o usuário'},
            {hid: 'keywords', name: 'description', content: 'Desenvolvimento de sites, Web Design, Front-End, Back-End, E-Commerce, Wordpress, Nuxt.js, Blogs, Portais de notícias, Rio Grande, Rio Grande do Sul, Brasil'},
            {hid: 'og:description', property: 'og:description', content: 'Com mais de 7 anos de experiência em programação e suporte ao cliente, trabalho com desenvolvimento de sites institucionais, blogs, lojas virtuais, hotsites, portais de notícias e landing pages focando sempre na usabilidade, acessibilidade e melhor performance para o usuário'},
            {hid: 'twitter:description', property: 'twitter:description', content: 'Com mais de 7 anos de experiência em programação e suporte ao cliente, trabalho com desenvolvimento de sites institucionais, blogs, lojas virtuais, hotsites, portais de notícias e landing pages focando sempre na usabilidade, acessibilidade e melhor performance para o usuário'},
            {hid: 'og:type', property: 'og:type', content: 'website'},
            {hid: 'og:url', property: 'og:url', content: 'https://www.henriquevargas.com.br'},
            {hid: 'og:image', property: 'og:image', content: 'website'},
            {hid: 'twitter:image', property: 'twitter:image', content: 'http://henriquevargas.com.br/compartilhamento.png'},
            {hid: 'og:type', property: 'og:type', content: 'http://henriquevargas.com.br/compartilhamento.png'},
        ],
        link: [
            {rel: 'canonical', href: 'https://www.henriquevargas.com.br'},
            {rel: 'apple-touch-icon', href: '/apple-touch-icon.png'},
            {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'},
            {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'},
            {rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5'},
            {rel: 'manifest', href: '/site.webmanifest'},
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Kanit:wght@400;600;700&display=swap'},
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Mulish&display=swap'},
            {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css'},
            {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'},
        ],
        script: [
            {src: '/js/jquery.min.js', type: "text/javascript"},
            {src: '/js/bootstrap.min.js', type: "text/javascript"},
        ]
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
        '@nuxtjs/gtm',
        '@nuxtjs/ngrok',
        '@nuxtjs/fontawesome',
    ],
    gtm: { id: 'GTM-NNNB5LK', pageTracking: true },
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
            if(process.browser) {
                $('#navigation').collapse('hide');
            }
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
