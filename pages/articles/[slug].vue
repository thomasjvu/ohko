<template>
    <!-- Back to Feed -->
    <NuxtLink class="flex items-center font-fragment font-bold uppercase mb-5 dark:text-neutral-200" to="/articles">
        <span class="mr-3 text-xl">←</span>
        Back to Articles
    </NuxtLink>
    <!-- End of Back to Feed -->
    <!-- Post Content -->
    <div class="relative pt-96 pb-10 overflow-hidden shadow-xl rounded-2xl">
        <img class="absolute inset-0 object-cover w-full h-full" :src="fileUrl(post.featured_image)" />
        <div class="relative px-8">
            <div class="relative text-lg font-medium font-fugaz md:flex-grow"></div>
        </div>
    </div>
    <section id="post-description-container" class="p-5 mt-5 mb-5 bg-neutral-400 rounded-md darker font-fragment shadow-lg text-black">
        <p class="text-lg">
            {{ post.description }}
        </p>
    </section>
    <h1 id="post-title" class="text-5xl sm:text-6xl my-5 font-bold drop-shadow-sm text-center dark:text-neutral-200">
        {{ post.title }}
    </h1>

    <section id="" class="font-fragment leading-loose text-xl sm:text-2xl dark:text-neutral-200" v-html="post.content" />
    <!-- End of Post Content -->
    <!-- Start of Post Meta -->
    <section class="post-meta flex flex-col items-center gap-5 mt-20">
        <h4 class="text-md font-extrabold uppercase drop-shadow-sm dark:text-neutral-200">Created By @{{ post.user_created }}</h4>
        <!-- Reaction Counts -->
        <section class="reactions flex">
            <section class="font-fragment flex flex-col items-center">
                <Icon name="pixelarticons:mood-happy" size="2rem" />
                <span>{{ post.positive }}</span>
            </section>
            <section class="font-fragment flex flex-col items-center">
                <Icon name="pixelarticons:mood-neutral" size="2rem" />
                <span>{{ post.neutral }}</span>
            </section>
            <section class="font-fragment flex flex-col items-center">
                <Icon name="pixelarticons:mood-sad" size="2rem" />
                <span>{{ post.negative }}</span>
            </section>
        </section>
        <!-- End of Reaction Counts -->
    </section>
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
    data: post,
    pending,
    error,
} = await useAsyncData(
    path,
    () => {
        return $directus.items('articles').readByQuery({ filter: { slug: { _eq: params.slug } }, limit: 1 })
    },
    {
        transform: (data) => data.data[0],
        pick: ['title', 'content', 'description', 'featured_image', 'user_created', 'slug', 'positive', 'negative', 'neutral'],
    }
)
</script>

<style>

</style>
