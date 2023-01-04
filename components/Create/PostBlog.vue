<template>
    <p id="hello" class="font-fragment p-5 rounded">
        Hello <span id="username" class="uppercase">{{ user.first_name }}</span
        >, what do you want to create today?
    </p>
    <form @submit.prevent="createBlog" class="flex flex-col font-fragment gap-2">
        <label>
            Title:
            <input v-model="title" type="text" class="w-full rounded text-black" ref="title" id="title" />
            <p class="">
                Your "Title" is...: <span class="inputvalue">{{ title }}</span>
            </p>
        </label>
        <br />
        <label>
            Content:
            <textarea v-model="content" class="w-full rounded text-black" ref="content" id="content"></textarea>
            <p>
                Your "Content" is...: <span class="inputvalue">{{ content }}</span>
            </p>
        </label>
        <br />
        <button type="submit" class="bg-white dark:bg-black rounded text-black dark:text-white p-3 border dark:border-white">Create Blog Post</button>
    </form>
</template>

<script setup>
// Get user data from the store
import { ref, computed, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useAuth } from '~~/store/auth'

const auth = useAuth()
const { fileUrl } = useFiles()
const { isLoggedIn, user } = storeToRefs(auth)

const { createItems } = useDirectusItems()

// Create Items
const createBlog = async () => {
    const items = [
        {
            title: title,
            content: content,
            short_content: 'placeholder',
            status: 'published',
        },
    ]
    await createItems({ collection: 'blog', items })
}
</script>

<script>

// const { createItems } = useDirectusItems()

/*
export default {
    data() {
        return {
            title: '',
            content: '',
        }
    },
}
*/

</script>

<style>
#username {
    color: #ff2147;
}
#hello {
    border: 2px solid #ff2147;
}
.inputvalue {
    color: #ff2147;
}
</style>
