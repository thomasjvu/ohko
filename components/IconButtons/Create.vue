<template>
      <NuxtLink to="/create/article">
          <span class="font-fragment text-3xl">{{text}}</span>
          <Icon name="pixelarticons:notes-plus" width="25" height="25" color="var(--infrared)" id="new-review" />
      </NuxtLink>
</template>

<script>
const props = defineProps({
    text: String
})
</script>

<style>

</style>
