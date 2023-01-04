<template>
    <VHeader />
    <div class="relative max-w-4xl px-6 pt-12 pb-12 mx-auto space-y-8">
        <h1
            id="page-title"
            class="mb-4 font-fugaz font-bold uppercase text-4xl sm:text-5xl text-black dark:text-white text-center"
        >
            New Article
        </h1>
        <CreatePostArticle />
        <VFooter />
    </div>
</template>

<script setup>
// Set Auth Middleware
definePageMeta({
    middleware: 'auth',
})

// Set Page Title
const title = 'Create Article'
useHead({
    title: title + ' | OHKO',
})
</script>

<script>
/*
export default {
    data() {
        return {
            title: '',
            content: ''
        }
    },
    methods: {
        async handleSubmit() {
            const postData = {
                this: this.title,
                content: this.content
            }
        }
}
*/
</script>
