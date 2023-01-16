<template>
    <div>
        <h1
            id="page-title"
            class="mb-4 font-VCR font-bold uppercase text-5xl sm:text-7xl text-black dark:text-white text-center"
        >
            New Article
        </h1>
            <section id="greeting">
                <h2 class="text-4xl font-VCR dark:text-neutral-100 uppercase">Hi @{{user.username}},</h2>
                <h2 class="text-4xl font-VCR dark:text-neutral-100 uppercase">Ready to create some greatness?</h2>
                <br />
            </section>
        <CreatePostArticle />
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useAuth } from '~~/store/auth'

const auth = useAuth()
const { fileUrl } = useFiles()
const { isLoggedIn, user } = storeToRefs(auth)

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
</script>
