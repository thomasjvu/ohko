<template>

    <!-- Back to Feed -->
    <NuxtLink class="text-2xl font-fragment dark:text-neutral-200 uppercase flex items-center mb-5" to="/anime">
        <span class="text-2xl mr-3">←</span>
        Back to All Anime
    </NuxtLink>

    <!-- Post Content -->
    <div v-if="anime">
        <div v-if="anime.featured_image" class="relative pt-96 pb-40 overflow-hidden shadow-xl rounded-2xl">
            <img class="absolute inset-0 object-cover w-full h-full" :src="fileUrl(anime.featured_image)" />
            <div class="relative px-8"></div>
        </div>
        <h1 id="anime-title" class="font-fragment font-bold uppercase text-5xl sm:text-6xl my-16 drop-shadow-sm text-center dark:text-neutral-200">
            {{ anime.title }} 
            「{{ anime.title_jp }}」
        </h1>
        <section
            id="anime-description-container"
            class="p-5 mt-10 mb-10 darker font-fragment italic border-y-2 text-neutral-900 dark:text-neutral-100"
        >
            <p class="text-3xl">" {{ anime.description }} "</p>
        </section>

        <section id="anime-content" class="font-fragment leading-loose text-2xl dark:text-neutral-200" v-html="anime.content" />

        <!-- Anime Completion Status -->
        <section>
            <p>Completion Status: {{ anime.completion }}</p>
        </section>

        <!-- <!-1- Anime Episode Count -1-> -->
        <!-- <section> -->
        <!--     <p>Completion Status: {{ anime.episodes }}</p> -->
        <!-- </section> -->


        <!-- <!-1- Start of Post Meta -1-> -->
        <!-- <section class="anime-meta flex flex-col items-center gap-5 mt-1/4 bg-neutral-300 rounded-xl p-5"> -->
        <!--     <h4 class="text-md font-fragment font-extrabold uppercase drop-shadow-sm text-neutral-900">Created By @{{ anime.user_created }}</h4> -->
        <!-- </section> -->

        <!-- <!-1- Post Tags -1-> -->
        <!-- <div class="mt-5 flex flex-row flex-wrap gap-2"> -->
        <!--     <section v-for="tag in anime.tags" class="anime-tags inline"> -->
        <!--         <span class="font-fragment font-bold bg-infrared text-neutral-900 text-lg p-2 rounded leading-10"> #{{ tag }} </span> -->
        <!--     </section> -->
        <!-- </div> -->

        <!-- <!-1- Hearts -1-> -->
        <!-- <section class="flex justify-end mt-4"> -->
        <!--     <section class="font-fragment flex flex-col items-center"> -->
        <!--         <Icon name="pixelarticons:heart" size="2rem" class="text-infrared" /> -->
        <!--         <span v-if="anime.hearts" class="text-infrared text-lg font-VCR">{{ anime.hearts.length }}</span> -->
        <!--     </section> -->
        <!-- </section> -->

        <!-- <!-1- Edit & Delete buttons for the players who created the anime-1-> -->
        <!-- <section id="anime-buttons" class="flex justify-end mt-20"> -->
        <!--     <Icon id="trash-btn" name="pixelarticons:trash" width="30" height="30" /> -->
        <!--     <Icon id="edit-btn" name="pixelarticons:edit-box" width="30" height="30" /> -->
        <!-- </section> -->
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
    data: anime,
    pending,
    error,
} = await useAsyncData(
    path,
    () => {
        return $directus.items('anime').readByQuery({ filter: { slug: { _eq: params.slug } }, limit: 1 })
    },
    {
        transform: (data) => data.data[0],
        pick: [
            'title',
            'title_jp',
            'content',
            'description',
            'featured_image',
            'user_created',
            'slug',
            'positive',
            'negative',
            'neutral',
            'tags',
            'status',
            'completion',
            'genres',
        ],
    }
)
</script>

<style></style>
