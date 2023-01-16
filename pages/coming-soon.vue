<template>
    <VHeader />
    <div class="relative max-w-5xl px-6 pt-12 pb-12 mx-auto space-y-8">
        <div>
            <h2 class="text-5xl sm:text-7xl text-center  uppercase font-fugaz mb-5">{{ title }}</h2>
            <img class="rounded border-2 border-black" src="https://res.cloudinary.com/dlcz9y0nv/image/upload/v1673314900/pixel-art-banner_ua5gqm.png" />
            <p class="font-fragment text-center text-2xl mt-5">We're sorry, this page is still under construction. <br /> Please come back another day!</p>
        </div>
        <VFooter />
    </div>
</template>

<script setup>


// Get the params from the Nuxt route
const { params, path } = useRoute()

// Meta
const title = 'Coming Soon'

useHead({
    title: title + ' | OHKO',
})
</script>

<style>
</style>
