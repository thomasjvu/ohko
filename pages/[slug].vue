<template>
    <div class="relative max-w-4xl px-6 pt-12 pb-12 mx-auto space-y-8">
    <NuxtLink
      class="flex items-center font-fragment font-bold uppercase text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-200"
      to="/"
    >
      <span class="mr-2 text-xl">←</span>
      Back to Feed
    </NuxtLink>
      <VLogo />
    <div class="relative pt-48 pb-10 overflow-hidden shadow-xl rounded-2xl">
      <img
        class="absolute inset-0 object-cover w-full h-full"
        :src="fileUrl(article.featured_image)"
      />
      <div class="absolute inset-0 bg-primary-500 mix-blend-multiply" />
      <div
        class="absolute inset-0 bg-gradient-to-t from-primary-600 via-primary-600 opacity-80"
      />
      <div class="relative px-8">
        <div class="relative text-lg font-medium latte md:flex-grow">
          <h1 class="text-6xl font-bold drop-shadow-sm">{{ article.title }}</h1>
        </div>
      </div>
    </div>
    <h2 class="text-sm font-extrabold uppercase drop-shadow-sm">Created By @{{ article.user_created }}</h2>
    <div class="article text-black dark:text-white" v-html="article.content" />
  <VFooter />
  <VCredits />
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
  data: article,
  pending,
  error,
} = await useAsyncData(
  path,
  () => {
    return $directus
      .items('articles')
      .readByQuery({ filter: { slug: { _eq: params.slug } }, limit: 1 })
  },
  {
    transform: (data) => data.data[0],
    pick: ['title', 'content', 'featured_image', 'user_created'],
  }
)

useHead({
  title: article.value.title,
})
</script>

<style>
</style>
