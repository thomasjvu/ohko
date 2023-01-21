<template>
    <div class="">
        <div class="space-y-12">
            <!-- User Data -->
            <div
                class="flex flex-col items-start bg-neutral-200 p-10 rounded-md border border-neutral-900"
            >
                <div class="flex items-center justify-center">
                    <img
                        class="w-40 h-40 mr-8 rounded-full border-primary-300 border-50"
                        :src="fileUrl(user.avatar)"
                    />
                    <div class="">
                        <p
                            class="text-4xl font-bold font-fragment dark:text-white"
                        >
                            Hello, @{{ user.username }}!
                        </p>
                        <p
                            class="text-sm font-medium font-fragment text-neutral-800"
                        >
                            {{ user.email }}
                        </p>
                        <p
                            class="text-sm font-medium font-fragment text-neutral-900 uppercase"
                        >
                            {{ user.rank }}
                        </p>
                    </div>
                </div>
            </div>
            <!-- End of Profile Card -->
            <!-- Start of Followers Card -->
            <div
                class="flex flex-col items-start bg-neutral-200 p-10 rounded-md border border-neutral-900"
            >
                <h3 class="text-2xl font-fragment">Biography: </h3>
                <p>{{ user.following }}</p>
                <h3 class="text-2xl font-fragment">Something: </h3>
                <p>{{ user.followers }}</p>
            </div>
            <!-- Endof Followers Card -->
            <!-- Start of Followers Card -->
            <div
                class="flex flex-col items-start bg-neutral-200 p-10 rounded-md border border-neutral-900"
            >
                <h3 class="text-2xl font-fragment">Following: </h3>
                <p>{{ user.following }}</p>
                <h3 class="text-2xl font-fragment">Followers: </h3>
                <p>{{ user.followers }}</p>
            </div>
            <!-- Endof Followers Card -->
            <div
                v-if="isLoggedIn"
                class="flex flex-col items-center gap-5 bg-neutral-200 p-20 rounded-md border border-neutral-900"
            >
                <h2 class="text-5xl font-VCR text-center uppercase">
                    Ready to Create?
                </h2>
                <div
                    class="flex flex-col sm:flex-row justify-between gap-5 font-fragment"
                >
                    <CreatePostArticle />
                    <!-- <select v-model="selectedOption"> -->
                    <!--     <option value="article">Article</option> -->
                    <!--     <option value="blog">Blog</option> -->
                    <!--     <option value="review">Review</option> -->
                    <!--     <option value="guide">Guide</option> -->
                    <!-- </select> -->
                    <!-- <CreatePostArticle v-if="selectedOption === 'article'"/> -->
                    <!-- <CreatePostBlog v-if="selectedOption === 'blog'"/> -->
                    <!-- <CreatePostArticle v-if="selectedOption === 'review'"/> -->
                    <!-- GET LoggedIn Users Articles -->
                    <!-- GET LoggedIn Users Media -->
                    <!-- GET LoggedIn Users etc. -->
                    <!-- Login Button -->
                    <!-- Logout Button -->
                </div>
            </div>
            <VButton
                variant="primary"
                @click="auth.logout()"
                class="w-1/4 text-2xl"
            >
                Logout</VButton
            >
        </div>
    </div>
</template>

<script>
/*
data() {
    return {
        selectedOption: '',
    }
}
*/
</script>

<script setup>
import { storeToRefs } from 'pinia'
import { useAuth } from '~~/store/auth'

const auth = useAuth()
const { fileUrl } = useFiles()
const { isLoggedIn, user } = storeToRefs(auth)

// Set middleware
definePageMeta({
    middleware: 'auth',
})

// Define the page title
const pageTitle = 'Account'

useHead({
    title: pageTitle + ' | OHKO',
})
</script>
