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
        <label class="text-xl text-neutral-500 font-fragment">
            Title:
            <input
                v-model="title"
                type="text"
                class="w-full text-2xl text-neutral-900 dark:text-neutral-100 font-vcr p-5 my-5"
                ref="title"
                id="title"
                autocomplete="off"
                required
            />
        </label>
        <br />
        <label class="text-xl text-neutral-500 font-fragment">
            Description:
            <input
                type="text"
                v-model="description"
                class="w-full text-2xl text-neutral-900 dark:text-neutral-100 p-5 my-5"
                ref="description"
                id="description"
                autocomplete="off"
                required
            />
        </label>
        <label class="text-xl text-neutral-500 font-fragment">
            Content:
            <Editor v-model="content" />
            <!-- <textarea v-model="content" class="w-full text-2xl text-neutral-900 dark:text-neutral-100 p-5 my-5" ref="content" id="content" autocomplete="off" required></textarea> -->
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
            class="rounded-md text-black font-fragment text-3xl p-3"
        >
            Create Article
        </button>
    </form>
</template>

<script setup>
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
                // featured_image: 'ac4b09ed-5aef-4115-a3a7-6ea188e8b007',
                status: 'published',
            }
            await articles.createOne(postData)
            window.location.replace('/articles')
        },
    },
}
</script>

<style>
input,
textarea {

    background: rgba(0, 0, 0, 0) !important;
    border: 0;
    border-radius: 0px !important;
    border-bottom: 1px solid #797979;

}

textarea:focus, input:focus, input[type]:focus, .uneditable-input:focus {   
    border-color: rgba(255, 33, 71, 1);
    box-shadow: 0 0px 0px rgba(255, 33, 71, 1) inset, 0 0 0px rgba(255, 33, 71, 1);
    outline: 0 none;
}


#submit-button {
    color: black;
    background: #797979;
    border: 0px;
}
#submit-button:hover {
    background: #ff2147;
}
</style>
