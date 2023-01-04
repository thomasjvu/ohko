<template>
    <VHeader />
    <div class="relative max-w-4xl px-6 pt-12 pb-12 mx-auto space-y-8">
        <div class="space-y-12">
            <!-- User Data -->
            <div class="">
                <ExamplesLoginForm v-if="!isLoggedIn" />
                <div v-if="isLoggedIn" class="flex flex-col items-start gap-5">
                    <div class="flex items-center justify-center">
                        <img class="w-20 h-20 mr-4 border-2 rounded-xl border-primary-300" :src="fileUrl(user.avatar)" />
                        <div class="">
                            <p class="text-2xl font-bold font-fragment dark:text-white">Hello, {{ user.first_name }}!</p>
                            <p class="text-sm font-medium font-fragment text-gray-500">
                                {{ user.email }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End of User Data -->
            <div class="flex flex-col sm:flex-row justify-between gap-5 font-fragment">
                <NuxtLink to="create/article" class="w-full sm:w-1/4">
                    <section
                        class="category bg-neutral-900 dark:text-white h-1/6 sm:h-60 hover:shadow-xl hover:bg-neutral-800 flex items-center justify-center text-center"
                    >
                        <h3 class="text-2xl">
                            📰 <br />
                            Articles
                        </h3>
                    </section>
                </NuxtLink>
                <NuxtLink to="/create/guide" class="w-full sm:w-1/4">
                    <section
                        class="category bg-neutral-900 dark:text-white h-1/6 sm:h-60 hover:shadow-xl hover:bg-neutral-800 flex items-center justify-center text-center"
                    >
                        <h3 class="text-2xl">
                            🦮 <br />
                            Guides
                        </h3>
                    </section>
                </NuxtLink>
                <NuxtLink to="/create/review" class="w-full sm:w-1/4">
                    <section
                        class="category bg-neutral-900 dark:text-white h-1/6 sm:h-full hover:shadow-xl hover:bg-neutral-800 flex items-center justify-center text-center"
                    >
                        <h3 class="text-2xl">
                            ⭐ <br />
                            Reviews
                        </h3>
                    </section>
                </NuxtLink>
                <NuxtLink to="/create/meme" class="w-full sm:w-1/4">
                    <section
                        class="category bg-neutral-900 dark:text-white h-1/6 sm:h-full hover:shadow-xl hover:bg-neutral-800 flex items-center justify-center text-center"
                    >
                        <h3 class="text-2xl">
                            💩 <br />
                            Memes
                        </h3>
                    </section>
                </NuxtLink>
            </div>
            <!-- Login Button -->
            <!-- Logout Button -->
            <VButton variant="primary" @click="auth.logout()" class="w-1/4"> Logout</VButton>
        </div>
        <VFooter />
    </div>
</template>

<script setup>
// Get user data from the store
import { storeToRefs } from 'pinia'
import { useAuth } from '~~/store/auth'
const auth = useAuth()
const { fileUrl } = useFiles()
const { isLoggedIn, user } = storeToRefs(auth)

const pageTitle = 'Account'

useHead({
    title: pageTitle + ' | OHKO',
})
</script>
