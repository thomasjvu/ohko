<template>
    <NuxtLink to="/create/article">
        <section class="create-cta rounded-lg p-20 flex justify-end bg-infrared font-VCR uppercase text-neutral-100 hover:text-infrared">
            <h2 class="hover:text-neutral-400">Create Article +</h2>
        </section>
    </NuxtLink>
    <NuxtLink to="/create/review">
        <section class="create-cta rounded-lg p-20 flex justify-end bg-sunflower font-VCR uppercase text-neutral-100">
            <h2 class="hover:text-neutral-400">Create Review +</h2>
        </section>
    </NuxtLink>
    <NuxtLink to="#">
        <section class="rounded-lg p-20 flex justify-end bg-neutral-800 font-VCR uppercase text-neutral-700">
            <h2 class="">Create Meme +</h2>
        </section>
    </NuxtLink>
    <!-- <section class="rounded-lg p-20 flex justify-end bg-dark-platinum"> -->
    <!--     <h2>Create Guide</h2> -->
    <!-- </section> -->
</template>

<script>
// Get the params from the Nuxt route
const { params, path } = useRoute()

// Set Page Title
const title = 'Create'
useHead({
    title: title + ' | OHKO',
})
</script>

<style>
.create-cta {
    background: url('https://res.cloudinary.com/dlcz9y0nv/image/upload/v1673422807/four-heroes-banner_salimq.jpg');
    background-size: cover;
    background-position: top;
}
</style>
