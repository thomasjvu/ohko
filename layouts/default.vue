<template>
  <div class="min-h-screen transition duration-150 text-neutral-900 dark:text-neutral-100">
        <div id="page-container" class="relative max-w-7xl px-6 pt-12 pb-12 mx-auto space-y-8">
            <slot />
            <Footer />
        </div>
  </div>
</template>

<script>
</script>

<style>
#page-container {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
}
</style>
