<template>
    <div class="max-w-3xl px-6 py-12 mx-auto space-y-8">
        <NuxtLink
            class="flex items-center font-bold text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-200"
            to="/"
        >
            <span class="mr-2 text-xl">←</span>
            Back to Home Page
        </NuxtLink>
        <VLogo />
        <h1 class="text-4xl font-bold dark:text-white text-center">
            Create Post
        </h1>

        <form @submit.prevent="createPost">
            <label for="title">Title:</label>
            <input v-model="title" id="title" type="text" />
            <br />
            <label for="content">Content:</label>
            <textarea v-model="content" id="content"></textarea>
            <br />
            <button type="submit" class="btn">Create Post</button>
        </form>

        <VButton class="block" @click="auth.logout()">Logout</VButton>
    </div>
</template>

<script setup>
import { useAuth } from '~~/store/auth'

const router = useRouter()

const auth = useAuth()

// Set middleware
definePageMeta({
    middleware: 'auth',
})

// Define the page title
useHead({
    title: 'Create Post',
})


</script>

<script>
// For Posting Content
export default {
    data() {
        return {
            title: '',
            content: ''
        }
    },
    methods: {
        createPost() {
            const client = new directusSDK({
                url: 'https://app.ohko.org/api',
                project: '_',
                token: 'YOUR_API_TOKEN'
    })

            const newPost = {
                title: this.title,
                content: this.content,
                status: 'published'
            }

            client.create('posts', newPost).then(response => {
                console.log(response)
            }).catch(error => {
                console.error(error)
            })
        }
    }
}
</script>

<style>
form {
    color: black;
}
input {
    color: black;
}
</style>
