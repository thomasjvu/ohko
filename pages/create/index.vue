<template>
    <div>
        <Logo />
        <h1 class="font-fugaz text-center uppercase">Create</h1>
        <section id="create-article" class="font-fragment border rounded-lg p-5">
            <h2 class="text-md">Create Article</h2>
        </section>
        <section id="create-review" class="rounded-lg">
            <h2>Create Article</h2>
        </section>
        <section id="create-meme" class="rounded-lg">
            <h2>Create Article</h2>
        </section>
    </div>
</template>

<script>
// Only authenticated users
definePageMeta({
    middleware: 'auth',
})

// Set Page Title
const title = 'Create'
useHead({
    title: title + ' | OHKO',
})
</script>

<style>
</style>
