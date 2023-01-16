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
            Create Content
        </h1>
        <p class="font-fragment text-center">Currently, users can only upload images.</p>
        <FileUpload
            v-model="files"
            :size-limit-mb="3"
            accept="image/png, image/jpeg"
        />
        <div
            class="flex flex-col p-4 mt-4 rounded-lg bg-gradient-to-b from-primary-600 to-primary-900"
        >
            <pre
                class="h-full p-4 overflow-x-auto text-sm text-gray-100 whitespace-pre bg-gray-800 border-2 rounded-lg border-primary-800"
                >{{ files }}</pre
            >
        </div>
        <VButton class="block" @click="auth.logout()">Logout</VButton>
    </div>
</template>

<script setup>
/*
import { useAuth } from '~~/store/auth'

const router = useRouter()

const auth = useAuth()
*/

// Set middleware
definePageMeta({
    middleware: 'auth',
})

// Define the page title
useHead({
    title: 'Create Content',
})

// Upload
const files = ref([])
</script>
