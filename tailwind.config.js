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
                stone: colors.stone,
                neutral: colors.neutral,
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
