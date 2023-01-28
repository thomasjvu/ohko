<template>
    <div>
        <!-- Back to Feed -->
        <NuxtLink class="flex items-center font-fragment font-bold uppercase mb-5 dark:text-neutral-200" to="/articles">
            <span class="mr-3 text-xl">←</span>
            Back to Articles
        </NuxtLink>

        <!-- Featured Image -->
        <div class="relative pt-96 pb-40 overflow-hidden shadow-xl rounded-2xl">
            <img class="absolute inset-0 object-cover w-full h-full" :src="fileUrl(post.featured_image)" />
            <div class="absolute inset-0 bg-gradient-to-t from-primary-600 via-primary-600 opacity-80" />
            <div class="relative px-8">
                <div class="relative text-lg font-medium ghost font-fugaz md:flex-grow"></div>
            </div>
        </div>

        <!-- Article Title -->
        <h1 id="post-title" class="text-6xl font-fragment font-bold drop-shadow-sm my-10 text-center">
            {{ post.title }}
        </h1>

        <!-- Article Description -->
        <section
            id="post-description-container"
            class="p-5 my-10 darker font-fragment italic border-y-2 dark:border-neutral-400 text-neutral-900 dark:text-neutral-400"
        >
            <p class="text-3xl">" {{ post.description }} "</p>
        </section>

        <!-- Article Content -->
        <section id="player-post-content" class="font-fragment leading-loose" v-html="post.content" />

        <!-- Player Details -->
        <section>
            <NuxtLink to="#" class="flex items-center gap-10 my-10">
                <img
                    v-bind:src="'https://app.ohko.org/assets/' + post.player_avatar"
                    width="100"
                    class="rounded-full border p-1 dark:border-neutral-700"
                />
                <h4 class="font-extrabold uppercase drop-shadow-sm">Created By @{{ post.player }}</h4>
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
        pick: [
            'id',
            'title',
            'content',
            'description',
            'featured_image',
            'user_created',
            'player',
            'player_avatar',
            'player_name',
            'slug',
            'positive',
            'negative',
            'neutral',
            'tags',
            'status',
        ],
    }
)

// Delete Article
/*
const { deleteItems } = useDirectusItems()

const deleteArticles = async () => {
    try {
        const items = []
        await deleteItems({ collection: 'articles', items })
    } catch (e) {}
}
*/
</script>

<script>
// Delete Stuff
/*
import { Directus } from '@directus/sdk'

// const config = useRuntimeConfig()
const directus = new Directus('https://app.ohko.org')
const articles = directus.items('articles')

export default {
    methods: {
        async deleteOne() {
            await articles.deleteOne(id)
            window.location.replace('/articles')
        },
    },
}
*/
</script>

<style></style>
