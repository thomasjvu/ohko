<template>
    <div>
        <Logo />
        <h1 id="page-title" class="my-10 font-VCR font-bold uppercase text-4xl sm:text-6xl text-center text-infrared">New Article</h1>
        <!-- <Authenticate /> -->
        <CreatePostArticle />
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useAuth } from '~~/store/auth'

const auth = useAuth()
const { fileUrl } = useFiles()
const { isLoggedIn, user } = storeToRefs(auth)

// Only authenticated users
definePageMeta({
    middleware: 'auth',
})

// Set Page Title
const title = 'Create Article'
useHead({
    title: title + ' | OHKO',
})
</script>

<script></script>
