export default defineNuxtConfig({
    // https://v3.nuxtjs.org/guide/directory-structure/nuxt.config/

    // As of RC12 Nuxt 3 supports Hybrid rendering mode
    // https://v3.nuxtjs.org/guide/concepts/rendering#route-rules
    //   routeRules: {
    //     '/pages/**': { swr: true },
    //     '/posts/**': { static: true },
    //   },

    css: [
        '~/assets/css/animations.css',
        '~/assets/css/style.css',
        '~/assets/css/colors.css',
        '~/assets/css/fonts.css',
    ],

    modules: [
        '@nuxtjs/tailwindcss',
        // https://pinia.esm.dev
        '@pinia/nuxt',
        // https://vueuse.org/
        '@vueuse/nuxt',
        'nuxt-icon',
        'nuxt-directus',
    ],


    directus: {
        url: process.env.DIRECTUS_URL,
        token: process.env.DIRECTUS_TOKEN
    },

    runtimeConfig: {
        public: {
            directusUrl: process.env.DIRECTUS_URL,
            demoUsername: process.env.DEMO_USER,
            demoPassword: process.env.DEMO_PASSWORD,
        },
    },

    postcss: {
        plugins: {
            'postcss-import': {},
            'tailwindcss/nesting': {},
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    //   Currently still needed
    build: {
        transpile: ['@heroicons/vue'],
    },

    vite: {
        define: {
            'process.env.DEBUG': false,
        },
        optimizeDeps: {
            include: [
                '@heroicons/vue/20/solid',
                '@heroicons/vue/24/solid',
                '@heroicons/vue/24/outline',
                '@headlessui/vue',
                'vue',
                'pinia',
            ],
        },
    },
})
