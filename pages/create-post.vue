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
            Create Article
        </h1>

        <form @submit.prevent="createArticle">
            <label class="dark:text-white font-fragment text-left" for="title">Slug:</label>
            <input v-model="slug" id="slug" type="text" />
            <br />
            <label class="dark:text-white font-fragment text-left" for="title">Title:</label>
            <input v-model="title" id="title" type="text" />
            <br />
            <label class="dark:text-white font-fragment" for="short_content">Short Content:</label>
            <textarea v-model="short_content" id="short_content"></textarea>
            <br />
            <label class="dark:text-white font-fragment" for="content" readonly>Content:</label>
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

const token = useDirectusToken()

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
// import { directusSDK } from '@directus/sdk'

function slugify(string) {
    return string.toLowerCase().replace(/[^a-z0-9-]/g, '-')
}

// For Posting Content
export default {
    data() {
        return {
            title: '',
            short_content: '',
            content: '',
        }
    },
    methods: {
        createPost() {
            const client = new directusSDK({
                url: 'https://app.ohko.org/',
                project: 'OHKO',
                token: token
    })

            const newArticle = {
                title: this.title,
                slug: slugify(this.title),
                short_content: this.short_content,
                content: this.content,
                status: 'published'
            }

            client.create('articles', newArticle).then(response => {
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
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    gap: 15px;
    color: black;

    font-family: "Fragment Mono", monospace;
}
label {
    text-align: left;
}
input {
    color: black;
    background: #e5e4e2;
    width: 100%;
}
textarea {
    width: 100%;
}

</style>
