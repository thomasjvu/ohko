<template>
    <Sidebar />
  <main class="bg-neutral-300 dark:bg-neutral-900">
    <div id="page-container" class="relative max-w-5xl px-6 pt-12 pb-12 mx-auto space-y-8">
    <Hero />
    <NuxtLayout>
      <NuxtLoadingIndicator
        color="repeating-linear-gradient(to right,#ff2147 0%,#797979 100%)"
      />
      <NuxtPage />
    </NuxtLayout>
    <Footer />
    </div>
  </main>
</template>

<script>
</script>

<style>
main {
    margin-left: 10%;
}
</style>
