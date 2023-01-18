<template>
      <div v-if="loading" class="flex items-center justify-center flex-1">
        <VLoading class="w-24 h-24 text-primary-600" />
      </div>
      <div
        v-else-if="articles.length === 0"
        class="relative mt-10 block w-full px-12 py-16 text-center border-2 border-gray-900 border-dashed rounded-lg dark:border-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
      >
        <p class="block mt-2 font-fragment font-medium text-gray-900 dark:text-gray-200">
          Explore. <br />What are you waiting for?
        </p>
        <VButton class="mt-2" @click="fetchArticles()" variant="primary">
          Load More</VButton
        >
      </div>
      <ul class="space-y-6" v-else-if="articles.length > 0">
        <li v-for="article in articles" :key="article.slug">
          <ExamplesPageCard class="mt-10"
            :path="`/articles/${article.slug}`"
            :image="fileUrl(article.featured_image)"
            :title="article.title"
            :description="`/${article.slug}`"
            :shortContent="article.short_content"
          />
        </li>
      </ul>
      <VButton
        v-if="articles.length > 0"
        class="mt-4"
        @click="articles = []"
        variant="default"
      >
        Clear Articles</VButton
      >
</template>

<script setup>
const { $directus } = useNuxtApp()
const { fileUrl } = useFiles()

const articles = ref([])
const loading = ref(false)

async function fetchArticles() {
  loading.value = true
  try {
    const { data } = await $directus.items('articles').readByQuery({
      filter: {
        status: { _eq: 'published' },
      },
      limit: 10,
    })
    articles.value = data
  } catch (e) {
    console.error(e)
  } finally {
    loading.value = false
  }
}
</script>
