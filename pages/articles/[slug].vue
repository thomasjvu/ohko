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
        <h1 id="post-title" class="font-VCR font-bold uppercase text-5xl sm:text-6xl my-16 drop-shadow-sm text-center dark:text-neutral-200">
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
        <section class="post-meta flex flex-col items-center gap-5 mt-1/4 bg-neutral-300 rounded-xl p-5">
            <h4 class="text-md font-fragment font-extrabold uppercase drop-shadow-sm text-neutral-900">Created By @{{ post.user_created }}</h4>
        </section>

        <!-- Post Tags -->
        <div class="mt-5 flex flex-row flex-wrap gap-2">
            <section v-for="tag in post.tags" class="post-tags inline">
                <span class="font-fragment font-bold bg-infrared text-neutral-900 text-lg p-2 rounded leading-10"> #{{ tag }} </span>
            </section>
        </div>

        <!-- Hearts -->
        <section class="flex justify-end mt-4">
            <section class="font-fragment flex flex-col items-center">
                <Icon name="pixelarticons:heart" size="2rem" class="text-infrared" />
                <span v-if="post.hearts" class="text-infrared text-lg font-VCR">{{ post.hearts.length }}</span>
            </section>
        </section>

        <!-- Edit & Delete buttons for the players who created the post -->
        <section id="post-buttons" class="flex justify-end mt-20">
            <Icon @click="deleteOne" id="trash-btn" name="pixelarticons:trash" width="30" height="30" />
            <Icon id="edit-btn" name="pixelarticons:edit-box" width="30" height="30" />
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
