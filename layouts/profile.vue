<template>
  <main class="min-h-screen transition duration-150 text-neutral-900 dark:text-neutral-100">
        <div id="page-container" class="relative w-full pb-12 mx-auto ">
            <slot />
        </div>
  </main>
</template>

<script>
export default {
    layout: 'profile',
}
</script>

<style>
main {
    margin-left: 20rem;
}
/* Responsive */
@media (max-width: 1024px) {
    main {
        margin-left: 0%;
    }
}
</style>
