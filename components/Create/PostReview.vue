<template>
    <form @submit.prevent="createOne" class="flex flex-col font-fragment gap-2">
        <label class="text-xl text-neutral-500 font-fragment">
            Title:
            <input
                v-model="title"
                type="text"
                class="w-full text-2xl text-neutral-900 dark:text-neutral-100 font-vcr p-5 my-5"
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
                autocomplete="off"
                required
            />
        </label>
        <label class="text-xl font-fragment">
            Content:
            <TextEditor v-model="content" class="text-neutral-900 dark:text-neutral-100"/>
        </label>

        <section id="create-review-meta" class="flex justify-around items-center">
            <label class="text-xl font-fragment">
                Category
                <select v-model="category" name="category" id="category">
                    <option value="anime">Anime</option>
                    <option value="video game">Video Game</option>
                    <option value="original">Original</option>
                </select>
            </label>
            <label class="text-xl font-fragment">
                Tags:
                <select v-model="tags" name="tags" id="tags" multiple>
                    <option value="nintendo">Nintendo</option>
                    <option value="playstation">Playstation</option>
                    <option value="xbox">Xbox</option>
                    <option value="pc">PC</option>
                    <option value="mobile">Mobile</option>
                </select>
            </label>
        </section>
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
        <button id="submit-button" type="submit" class="rounded-md text-black font-fragment text-3xl p-3 mt-10">Create Review</button>
    </form>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useAuth } from '~~/store/auth'
import { Directus } from '@directus/sdk'

// Authentication
const auth = useAuth()
const { fileUrl } = useFiles()
const { isLoggedIn, user } = storeToRefs(auth)

// Set middleware
definePageMeta({
    middleware: 'auth',
})

const runtimeConfig = useRuntimeConfig()
const directus = new Directus(runtimeConfig.directusUrl)

/*
// DEBUGGING
console.log('auth info', auth)
console.log('auth user info', auth.user)
console.log('auth user ID', auth.user.id)
console.log('auth user token', auth.user.token)
console.log('auth user username', auth.user.username)
console.log('user info', user)
*/


// References & Other Variables
const reviews = directus.items('reviews')

const title = ref()
const description = ref()
const content = ref()
const category = ref()
const tags = ref()

const error = ref(null)
const loading = ref(false)

async function createOne() {
    try {
        loading.value = true
        error.value = null
        const postData = {
            title: title.value,
            slug: slugify(title.value),
            description: description.value,
            content: content.value,
            category: category.value,
            tags: tags.value,
            player: auth.user.id,
            creator_name: auth.user.username,
            featured_image: 'c5e5a102-44bc-4995-bacc-f33aae0c0b25',
            status: 'published'
        }
        // Add Post
        await reviews.createOne(postData)
        window.location.replace('/reviews')
    } catch (e) {
        error.value = e.message
    } finally {
        loading.value = false
    }
}

</script>

<style scope>
input,
textarea,
#text-editor {
    background: rgba(0, 0, 0, 0) !important;
    border: 0;
    border-radius: 0px !important;
    border-bottom: 1px solid #64748b;
}

textarea:focus,
input:focus,
input[type]:focus,
.uneditable-input:focus,
.ProseMirror:focus,
#text-editor:focus {
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
