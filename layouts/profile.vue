<template>
  <div class="profile-layout min-h-screen transition duration-150 text-neutral-900 dark:text-neutral-100">
        <section id="page-container" class="relative w-full pb-12 mx-auto ">
            <slot />
        </section>
  </div>
</template>

<script>
export default {
    layout: 'profile',
}
</script>

<style>
</style>
