<template>
    <VHeader />
    <div class="relative max-w-4xl px-6 pt-12 pb-12 mx-auto space-y-8">
        <h1
            id="page-title"
            class="mb-4 font-fugaz font-bold uppercase text-4xl sm:text-5xl text-black dark:text-white text-center"
        >
            Signup
        </h1>
        <CreateUser />
        <VFooter />
    </div>
</template>

<script setup>
// Set Page Title
const title = 'User Signup'
useHead({
    title: title + ' | OHKO',
})
</script>

<script>
</script>
