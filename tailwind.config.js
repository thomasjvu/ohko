const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
    darkMode: 'class',
    content: [
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './app.vue',
        './plugins/**/*.{js,ts}',
        `./App.{js,ts,vue}`,
        `./app.{js,ts,vue}`,
        `./nuxt.config.{js,ts}`,
    ],
    theme: {
        extend: {
            colors: {
                primary: colors.black,
                black: colors.black,
                white: colors.white,
                gray: colors.slate,
                green: colors.green,
                red: colors.red,
                rose: colors.rose,
                neutral: colors.neutral,
                'infrared': {
                    50: '#fff1f3',
                    100: '#ffdfe4',
                    200: '#ffc5cf',
                    300: '#ff9dae',
                    400: '#ff647f',
                    500: '#ff2147',
                    600: '#ed153a',
                    700: '#c80d2d',
                    800: '#a50f29',
                    900: '#881428',
                },
            },
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
                mono: ['Fragment Mono', ...defaultTheme.fontFamily.mono],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio'),
    ],
}
