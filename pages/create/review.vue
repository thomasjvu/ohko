<template>
    <div>
        <Logo />
        <h1 id="page-title" class="my-10 font-fugaz font-bold uppercase text-4xl sm:text-6xl text-center text-neutral-900 dark:text-neutral-100">New Review</h1>
        <!-- <Authenticate /> -->
        <CreatePostReview />
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
const title = 'Create Review'
useHead({
    title: title + ' | OHKO',
})
</script>

<style>
</style>
