<template>
    <form @submit.prevent="createOne" class="flex flex-col font-fragment gap-2">
        <!-- <label> -->
        <!--     <input -->
        <!--             v-model="user_created" -->
        <!--             type="text" -->
        <!--             ref="user_created" -->
        <!--             id="user_created" -->
        <!--             class="w-full rounded-md text-2xl text-black font-vcr" -->
        <!--     /> -->
        <!--     User Created -->
        <!-- </label> -->
        <label class="text-2xl dark:text-neutral-100 font-fragment">
            Title:
            <input
                v-model="title"
                type="text"
                class="w-full rounded-md text-2xl text-black font-vcr"
                ref="title"
                id="title"
                autocomplete="off"
                required
            />
            <p class="text-lg">
                Your "Title" is...: <span class="input-value">{{ title }}</span>
            </p>
        </label>
        <!-- <label class="text-2xl dark:text-neutral-100 font-fragment"> -->
        <!--     Slug -->
        <!--     <input -->
        <!--         type="text" -->
        <!--         v-model="slug" -->
        <!--         class="w-full rounded-md text-2xl text-black p-2 border border-black" -->
        <!--         ref="slug" -->
        <!--         id="slug" -->
        <!--         autocomplete="off" -->
        <!--         required -->
        <!--     /> -->
        <!--     <p> -->
        <!--         your-title-slugified: <span class="input-value">{{ slug }}</span> -->
        <!--     </p> -->
        <!-- </label> -->
        <br />
        <label class="text-2xl dark:text-neutral-100 font-fragment">
            Description
            <input
                type="text"
                v-model="description"
                class="w-full rounded-md text-2xl text-black p-2 border border-black"
                ref="description"
                id="description"
                autocomplete="off"
                required
            />
        </label>
        <label class="text-2xl dark:text-neutral-100 font-fragment">
            Content:
            <!-- <Editor -->
            <!--     v-model="content" class="w-full rounded text-black" ref="content" id="content" required -->
            <!--     api-key="no-api-key" -->
            <!--     :init="{ -->
            <!--         plugins: 'lists link image table code help wordcount', -->
            <!--     }" -->
            <!-- /> -->
            <textarea v-model="content" class="w-full rounded text-black" ref="content" id="content" autocomplete="off" required></textarea>
        </label>
        <!-- <label class="text-2xl dark:text-neutral-100 font-VCR"> -->
        <!--     Featured Image: -->
        <!--     <input -->
        <!--         type="image" -->
        <!--         v-model="featured_image" -->
        <!--         class="w-full rounded text-black" -->
        <!--         ref="featured_image" -->
        <!--         id="featured_image" -->
        <!--         required -->
        <!--         /> -->
        <!-- </label> -->
        <br />
        <button
            id="submit-button"
            type="submit"
            class="bg-white dark:bg-black rounded-md text-black dark:text-white p-3 border dark:border-white font-fragment text-3xl"
        >
            Create Article
        </button>
    </form>
</template>

<script setup>
import Editor from '@tinymce/tinymce-vue'
import { storeToRefs } from 'pinia'
import { useAuth } from '~~/store/auth'

const auth = useAuth()
const { fileUrl } = useFiles()
const { isLoggedIn, user } = storeToRefs(auth)

console.log('loggedin user', user)

definePageMeta({
    middleware: 'auth',
})
</script>

<script>
import { Directus } from '@directus/sdk'

// const config = useRuntimeConfig()
const directus = new Directus('https://app.ohko.org')
const articles = directus.items('articles')

// Use Token
// const token = useDirectusToken()
// console.log('token', token)

// Slugify
function slugify(str) {
    // convert title to lowercase
    str = str.toLowerCase()

    // replace spaces with -
    str = str.replace(/\s+/g, '-')

    // replace & with "-and-"
    str = str.replace(/&/g, '-and-')

    // output the result
    return str
}

export default {
    data() {
        return {
            title: '',
            description: '',
            content: '',
        }
    },
    methods: {
        async createOne() {
            const postData = {
                title: this.title,
                slug: slugify(this.title),
                description: this.description,
                content: this.content,
                featured_image: 'ac4b09ed-5aef-4115-a3a7-6ea188e8b007',
                status: 'pending',
            }
            await articles.createOne(postData)
            window.location.replace('/articles')
        },
    },
}
</script>

<style>
.input-value {
    color: #ff2147;
}

#submit-button {
    background: #797979;
}
#submit-button:hover {
    color: white;
    background: #ff2147;
}
</style>
