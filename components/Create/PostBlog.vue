<template>
    <p id="hello" class="font-fragment p-5 rounded">
        Hello <span id="username" class="uppercase">{{ user.username }}</span
        >, what do you want to create today?
    </p>
    <form
        @submit.prevent="handleSubmit"
        class="flex flex-col font-fragment gap-2"
    >
        <label>
            Title:
            <input
                v-model="title"
                type="text"
                class="w-full rounded text-black"
                id="title"
            />
            <p class="">
                Your "Title" is...: <span class="inputvalue">{{ title }}</span>
            </p>
        </label>
        <br />
        <label>
            Content:
            <textarea
                v-model="content"
                class="w-full rounded text-black"
                id="content"
            ></textarea>
            <p>
                Your "Content" is...:
                <span class="inputvalue">{{ content }}</span>
            </p>
        </label>
        <br />
        <button
            type="submit"
            class="bg-white dark:bg-black rounded text-black dark:text-white p-3 border dark:border-white"
        >
            Create Blog Post
        </button>
    </form>
</template>

<script setup>
// Get user data from the store
import { storeToRefs } from 'pinia'
import { useAuth } from '~~/store/auth'

const auth = useAuth()
const { fileUrl } = useFiles()
const { isLoggedIn, user } = storeToRefs(auth)

const { createItems } = useDirectusItems()

const title = ref()
const content = ref()

/* console.log('this title', title) */
/* console.log('this content', content) */
/* console.log('this user', user) */
/* console.log('this user value', user.value) */
/* console.log('this user id', user.value.id) */
/* console.log('this user id', user.value.username) */

// Create Items
const handleSubmit = async () => {
    const items = [
        {
            title: title.value,
            content: content.value,
            user_created: user.value.id,
            user_username: user.value.username,
            short_content: 'placeholder',
            status: 'published',
        },
    ]
    await createItems({ collection: 'blogs', items })
}

</script>

<script>
</script>

<style>
</style>
