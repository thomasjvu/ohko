<template>
  <div id="error-page" class="bg-neutral-900 h-screen flex align-center justify-center gap-10 flex-col">
      <h1 class="text-5xl sm:text-6xl font-VCR text-center text-neutral-100">Error: {{error.statusCode}}</h1>
    <p v-if="error.statusMessage" class="text-3xl font-fragment text-neutral-300 text-center">[{{error.statusMessage}}]</p>
    <p v-if="!error.statusMessage" class="text-3xl font-fragment text-neutral-300 text-center">[Unknown Error]</p>
    <img v-if="error.statusCode === '404'" id="error-img" class="" src="./assets/img/error.png">
    <img v-if="error.statusCode === '500'" id="error-img" class="" src="./assets/img/error-500.png">
    <section class="flex align-center justify-center">
        <NuxtLink class="text-3xl font-fragment text-neutral-100 btn" to="/">Back to Homepage</NuxtLink>
    </section>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error'
  }
</script>

<style>
#error-img {
    max-width: 700px;
    border: 1px solid white;
    border-radius: 5px;
    margin: 0 auto;
}
</style>
