<template>
    <Logo />
    <div class="mt-10">
        <h1
            id="page-title"
            class="my-10 font-fugaz font-bold uppercase text-5xl sm:text-6xl text-neutral-900 dark:text-neutral-100 text-center"
        >
        {{ title }}
        </h1>
        <CreateNewPlayer />
    </div>
</template>

<script setup>
// Set Page Title
const title = 'Signup'
useHead({
    title: title + ' | OHKO',
})
</script>

<script>
</script>
