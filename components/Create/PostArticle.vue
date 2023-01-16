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
        <label class="text-2xl dark:text-neutral-100 font-VCR">
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
        <label class="text-2xl dark:text-neutral-100 font-VCR">
            Slug
            <input
                type="text"
                v-model="slug"
                class="w-full rounded-md text-2xl text-black p-2 border border-black"
                ref="slug"
                id="slug"
                autocomplete="off"
                required
            />
            <p>
                your-title-slugified: <span class="input-value">{{ slug }}</span>
            </p>
        </label>
        <br />
        <label class="text-2xl dark:text-neutral-100 font-VCR">
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
        <label class="text-2xl dark:text-neutral-100 font-VCR">
            Content:
            <textarea
                v-model="content"
                class="w-full rounded text-black"
                ref="content"
                id="content"
                autocomplete="off"
                required
            ></textarea>
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
            class="bg-white dark:bg-black rounded-md text-black dark:text-white p-3 border dark:border-white"
        >
            Create Article
        </button>
    </form>
</template>

<script setup>

</script>

<script>
import { Directus } from '@directus/sdk'

// const config = useRuntimeConfig()
const directus = new Directus('https://app.ohko.org')
const articles = directus.items('articles')

export default {
    data() {
        return {
            title: '',
            description: '',
            slug: '',
            content: '',
        }
    },
    methods: {
        async createOne() {
            const postData = {
                title: this.title,
                slug: this.slug,
                description: this.description,
                content: this.content,
                featured_image: 'f8f03ddc-80ed-411b-9d3b-4613c315ef03',
                status: "published"
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
    background: #ff2147;
}
#submit-button:hover {
    color: white;
    background: #797979;
}
</style>
