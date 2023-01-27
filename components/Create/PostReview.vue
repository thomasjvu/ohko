<template>
    <form @submit.prevent="createOne" class="flex flex-col font-fragment gap-2">
        <label class="text-xl text-neutral-500 font-fragment font-bold">
            Title:
            <input
                v-model="title"
                type="text"
                class="w-full text-2xl font-normal text-neutral-900 dark:text-neutral-100 font-vcr p-5 my-5"
                autocomplete="off"
                required
            />
        </label>
        <br />
        <label class="text-xl text-neutral-500 font-fragment font-bold">
            Description:
            <input
                type="text"
                v-model="description"
                class="w-full text-2xl font-normal text-neutral-900 dark:text-neutral-100 p-5 my-5"
                autocomplete="off"
                required
            />
        </label>
        <label class="text-xl text-neutral-500 font-fragment font-bold">
            Content:
            <TextEditor v-model="content" id="text-editor" class="font-normal text-neutral-900 dark:text-neutral-100"/>
        </label>
        <label class="text-xl font-fragment text-neutral-500 font-bold my-5">
            Rating:
            <input v-model="rating" type="number" min="0" max="100" step="0.5" placeholder="47" id="rating-input" class="text-neutral-900 dark:text-neutral-100" required/>
        </label>

        <section id="create-review-meta" class="flex flex-col items-start gap-5">
            <label class="text-xl font-fragment font-bold text-neutral-500 flex flex-col items-start justify-center gap-2">
                Category: 
                <select v-model="category" class="font-normal dark:text-neutral-100 dark:bg-neutral-900 rounded-lg" id="category-select">
                    <option value="Anime" class="dark:bg-neutral-900">Anime</option>
                    <option value="Video Game" class="dark:bg-neutral-900" selected>Video Game</option>
                    <option value="Original" class="dark:bg-neutral-900">Original</option>
                </select>
            </label>
            <label class="text-xl font-fragment font-bold text-neutral-500 flex flex-col items-start justify-center gap-2">
                Tags:
                <select v-model="tags" class="font-normal dark:text-neutral-100 rounded-lg" id="tag-select" multiple>
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
        <button id="submit-button" type="submit" class="rounded-md font-VCR font-black uppercase text-3xl p-3 mt-10">Create</button>
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


const runtimeConfig = useRuntimeConfig()
const directus = new Directus(runtimeConfig.directusUrl)

// DEBUGGING
console.log('auth info', auth)
console.log('auth user info', auth.user)
console.log('auth user ID', auth.user.id)
console.log('auth user username', auth.user.username)
console.log('user info', user)


// References & Other Variables
const reviews = directus.items('reviews')

const title = ref()
const description = ref()
const content = ref()
const category = ref()
const tags = ref()
const rating = ref()

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
            rating: rating.value,
            category: category.value,
            tags: tags.value,
            user_created: auth.user.id,
            player: auth.user.username,
            featured_image: 'c5e5a102-44bc-4995-bacc-f33aae0c0b25',
            status: 'published',
            moderated: false
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
    border-bottom: 1px solid #64748b !important;
}

textarea:focus,
input:focus,
input[type]:focus,
.uneditable-input:focus,
.ProseMirror:focus,
#text-editor:focus {
    border-color: var(--infrared);
    box-shadow: 0 0px 0px var(--infrared) inset, 0 0 0px var(--infrared);
    outline: 0 none;
}

#submit-button {
    color: var(--darker);
    background: var(--infrared);
    border: 0px;
}
#submit-button:hover {
    background: var(--dark-platinum);
}

#rating-input {
    width: 100%;
    margin-top: 1rem;
}

#category-select {
    width: 77rem;
    margin-top: 1rem;
}

#tag-select {
    height: 100%;
    width: 77rem;
    background: rgba(0, 0, 0, 0);
    margin-top: 1rem;
}

</style>
