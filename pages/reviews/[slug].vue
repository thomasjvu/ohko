<template>
    <div>
        <!-- Back to Feed -->
        <NuxtLink class="flex items-center font-fragment font-bold uppercase mb-5 dark:text-neutral-200" to="/reviews">
            <span class="mr-3 text-xl">←</span>
            Back to Reviews
        </NuxtLink>

        <!-- Featured Image -->
        <div class="relative pt-96 pb-40 overflow-hidden shadow-xl rounded-2xl">
            <img class="absolute inset-0 object-cover w-full h-full" :src="fileUrl(review.featured_image)" />
            <div class="absolute inset-0 bg-gradient-to-t from-primary-600 via-primary-600 opacity-80" />
            <div class="relative px-8">
                <div class="relative text-lg font-medium ghost font-fugaz md:flex-grow"></div>
            </div>
        </div>

        <!-- Review Title -->
        <h1 id="review-title" class="text-6xl font-fragment font-bold drop-shadow-sm my-10 text-center">
            {{ review.title }}
        </h1>

        <!-- Review Description -->
        <section
            id="review-description-container"
            class="p-5 my-10 darker font-fragment italic border-y-2 dark:border-neutral-400 text-neutral-900 dark:text-neutral-400"
        >
            <p class="text-3xl">" {{ review.description }} "</p>
        </section>

        <!-- Review Content -->
        <section id="player-review-content" class="font-fragment leading-loose" v-html="review.content" />

        <!-- Review Rating -->
        <section id="player-rating" class="flex items-center flex-col border-y-2 p-5 my-10 dark:border-neutral-400 dark:text-neutral-400">
            <h4 class="font-VCR mb-5 text-3xl uppercase text-center">Rating</h4>
            <section id="rating" class="flex items-center justify-center shadow-md">
                <span id="rating-amount" class="text-4xl text-infrared font-extrabold font-VCR">{{ review.rating }} / 100</span>
            </section>
        </section>


        <!-- Player Details -->
        <section>
            <NuxtLink to="#" class="flex items-center gap-10 my-10">
                <img
                    v-bind:src="'https://app.ohko.org/assets/' + review.player_avatar"
                    width="100"
                    class="rounded-full border p-1 dark:border-neutral-700"
                />
                <h4 class="font-extrabold uppercase drop-shadow-sm">Created By @{{ review.player }}</h4>
            </NuxtLink>
        </section>

        <!-- Default Advertisement -->
        <AdsDefault />
        <!-- The End -->
    </div>
</template>

<script setup>
// Import the $directus plugin
const { $directus } = useNuxtApp()
const { fileUrl } = useFiles()

// Get the params from the Nuxt route
const { params, path } = useRoute()

// Fetch the page data from the Directus API using the Nuxt useAsyncData composable
// https://v3.nuxtjs.org/docs/usage/data-fetching#useasyncdata
const {
    data: review,
    pending,
    error,
} = await useAsyncData(
    path,
    () => {
        return $directus.items('reviews').readByQuery({ filter: { slug: { _eq: params.slug } }, limit: 1 })
    },
    {
        transform: (data) => data.data[0],
        pick: ['title', 'description', 'content', 'featured_image', 'player', 'player_avatar', 'creator_name', 'rating', 'tags', 'slug', 'id'],
    }
)

useHead({
    title: review.title,
})
</script>

<style></style>
