<template>
  <h2
    class="my-10 mb-4 font-fugaz font-bold uppercase text-7xl sm:text-8xl text-neutral-900 dark:text-neutral-100"
  >
    {{title}}
  </h2>
</template>

<script setup lang="ts">
const props = defineProps({
    title: String
})
</script>

<style></style>
