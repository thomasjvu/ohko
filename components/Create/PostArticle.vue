<template>
    <form @submit.prevent="createOne" class="flex flex-col font-fragment gap-2">
        <label>
            Title:
            <input
                v-model="title"
                type="text"
                class="w-full rounded text-black"
                ref="title"
                id="title"
            />
            <p class="">
                Your "Title" is...: <span class="input-value">{{ title }}</span>
            </p>
        </label>
        <label>
            Slug
            <input
                v-model="slug"
                class="w-full rounded text-black p-2 border border-black"
                ref="slug"
                id="slug"
            />
            <!-- <p> -->
            <!--     Your "Description" is...: <span class="input-value">{{ content }}</span> -->
            <!-- </p> -->
        </label>
        <br />
        <label>
            Description
            <input
                v-model="description"
                class="w-full rounded text-black p-2 border border-black"
                ref="description"
                id="description"
            />
            <!-- <p> -->
            <!--     Your "Description" is...: <span class="input-value">{{ content }}</span> -->
            <!-- </p> -->
        </label>
        <label>
            Content:
            <textarea
                v-model="content"
                class="w-full rounded text-black"
                ref="content"
                id="content"
            ></textarea>
            <!-- <p> -->
            <!--     Your "Content" is...: <span class="input-value">{{ content }}</span> -->
            <!-- </p> -->
        </label>
        <br />
        <button
            id="submit-button"
            type="submit"
            class="bg-white dark:bg-black rounded text-black dark:text-white p-3 border dark:border-white"
        >
            Create Article
        </button>
    </form>
</template>

<script>
import { Directus } from '@directus/sdk'

// const config = useRuntimeConfig()
const directus = new Directus('https://app.ohko.org')
const articles = directus.items('articles')

export default {
    data() {
        return {
            title: '',
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
                featured_image: '63ec6be1-3796-4ef5-9d1f-4e7f9e877605',
                // status: "Published",
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
