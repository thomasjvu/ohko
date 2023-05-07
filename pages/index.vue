<template>
  <div>
    <Logo />
    <div class="flex items-center flex-col justify-center my-10">
      <!-- <h1 id="page-title" class="mb-4 font-fugaz font-bold uppercase text-7xl sm:text-8xl text-neutral-900 dark:text-neutral-100 text-center"> -->
      <!--     Featured -->
      <!-- </h1> -->
      <!-- <FeaturedArt /> -->
      <!-- <CarouselMain /> -->
      <FeaturedArticles />
      <FeaturedReviews />
      <!-- <FeaturedArtworks /> -->
      <!-- <FeaturedCosplays /> -->
    </div>
  </div>
</template>

<script setup>
const title = 'Home'

useHead({
  title: title + ' | OHKO',
})
</script>
