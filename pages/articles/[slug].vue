<template>
    <!-- Back to Feed -->
    <NuxtLink class="flex items-center font-fragment font-bold uppercase mb-5 dark:text-neutral-200" to="/articles">
        <span class="mr-3 text-xl">←</span>
        Back to Articles
    </NuxtLink>
    <!-- End of Back to Feed -->
    <!-- Post Content -->
    <div v-if="post">
        <div v-if="post.featured_image" class="relative pt-96 pb-40 overflow-hidden shadow-xl rounded-2xl">
            <img class="absolute inset-0 object-cover w-full h-full" :src="fileUrl(post.featured_image)" />
            <div class="relative px-8"></div>
        </div>
        <h1 id="post-title" class="text-5xl sm:text-6xl my-16 font-bold drop-shadow-sm text-center dark:text-neutral-200">
            {{ post.title }}
        </h1>
        <section
            id="post-description-container"
            class="p-5 mt-10 mb-10 darker font-fragment italic border-y-2 text-neutral-900 dark:text-neutral-100"
        >
            <p class="text-3xl">" {{ post.description }} "</p>
        </section>

        <section id="post-content" class="font-fragment leading-loose text-2xl dark:text-neutral-200" v-html="post.content" />
        <!-- End of Post Content -->
        <!-- Start of Post Meta -->
        <section class="post-meta flex flex-col items-center gap-5 mt-1/4 bg-neutral-400 rounded-xl">
            <h4 class="text-md font-extrabold uppercase drop-shadow-sm dark:text-neutral-800">Created By @{{ post.user_created }}</h4>
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


        <!-- Edit & Delete buttons for the players who created the post -->
        <section id="post-buttons" class="flex justify-end mt-20">
            <Icon name="pixelarticons:trash" width="30" height="30" />
            <Icon name="pixelarticons:edit-box" width="30" height="30" />
        </section>
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
    data: post,
    pending,
    error,
} = await useAsyncData(
    path,
    () => {
        console.log('postdata', post)
        console.log('datapost', data)
        return $directus.items('articles').readByQuery({ filter: { slug: { _eq: params.slug } }, limit: 1 })
    },
    {
        transform: (data) => data.data[0],
        pick: ['title', 'content', 'description', 'featured_image', 'user_created', 'slug', 'positive', 'negative', 'neutral'],
    }
)
</script>

<style></style>
