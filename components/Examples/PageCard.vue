<template>
  <NuxtLink
    class="flex items-center justify-between overflow-hidden transition duration-150 bg-white rounded-lg shadow-lg dark:bg-gray-800 group hover:scale-105"
    :to="path"
  >
    <div class="flex h-48">
      <img class="object-cover w-48 h-full dark:brightness-50" :src="image" />
      <div class="p-4 flex flex-col justify-center">
        <p
          class="text-2xl font-bold transition duration-150 group-hover:text-primary-600 dark:text-white"
        >
          {{ title }}
        </p>
        <p class="mt-2 text-sm font-medium infrared font-fragment">
          {{ description }}
        </p>
        <p class="mt-2 text-sm font-medium text-gray-500 font-fragment">
          {{ shortContent }}
        </p>
      </div>
    </div>
    <span
      class="pr-4 text-3xl font-bold text-transparent transition duration-300 group-hover:text-primary-500"
      >→</span
    >
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  path: {
    type: String,
    default: '',
  },
  image: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  shortContent: {
    type: String,
    default: '',
  },
})
</script>
