<template>
    <div class="">
        <div class="header">
            <section id="profile-cover">
                <img class="w-screen h-96" :src="fileUrl(user.cover)" />
            </section>
            <section class="profile-img flex justify-center">
                <img
                    class="w-40 h-40 -mt-20 rounded-full border-2 border-neutral-700 dark:border-neutral-300 border-50 shadow-xl"
                    :src="fileUrl(user.avatar)"
                />
            </section>
            <section id="profile-details" class="flex flex-col items-center justify-center gap-5 font-fragment mt-3">
                <p class="text-4xl font-bold">@{{ user.username }}</p>
                <section class="flex items-center gap-2">
                    <!-- <Icon name="pixelarticons:loader" /> -->
                    <p class="text-3xl bg-infrared px-5 py-2 rounded-lg font-VCR">{{ user.rank.toUpperCase() }}</p>
                </section>
            </section>
        </div>

        <div id="profile-sections" class="flex justify-center m-20 gap-40">
            <section id="profile-section-1" class="w-1/4 flex flex-col gap-5">
                <section id="profile-biography" class="bg-neutral-300 dark:bg-neutral-700 border border-neutral-700 rounded-lg p-20 font-fragment">
                    <h4 class="font-bold text-center text-4xl">Biography</h4>
                    <p class="text-md text-center mt-3">{{ user.description }}</p>
                    <section id="profile-social-links" class="flex flex-col">
                        <NuxtLink :to="`${user.twitch_link}`" class="mt-10 flex gap-5" target="_blank">
                            <span class="font-bold">Twitch:</span>
                            <span>{{user.twitch_link}}</span>
                        </NuxtLink>
                        <NuxtLink :to="`${user.twitter_link}`" class="mt-10" target="_blank">Twitter {{ user.twitter_link }}</NuxtLink>
                        <NuxtLink :to="`${user.website_link}`" class="mt-10" target="_blank">Website {{ user.website_link }}</NuxtLink>
                    </section>
                </section>
                <section id="profile-biography" class="bg-neutral-300 dark:bg-neutral-700 border border-neutral-700 rounded-lg p-20 font-fragment">
                    <h4 class="font-bold text-center text-4xl">Biography</h4>
                    <p class="text-md text-center">{{ user.description }}</p>
                </section>
                <section id="profile-biography" class="bg-neutral-300 dark:bg-neutral-700 border border-neutral-700 rounded-lg p-20 font-fragment">
                    <h4 class="font-bold text-center text-4xl">Biography</h4>
                    <p class="text-md text-center">{{ user.description }}</p>
                </section>
            </section>

            <section id="profile-section-2" class="w-2/4 bg-neutral-300 dark:bg-neutral-700 border border-neutral-700 rounded-lg p-20 font-fragment">
                <h4 class="text-center font-bold">Status Updates</h4>
            </section>

            <section id="profile-section-3" class="w-1/4 bg-neutral-300 dark:bg-neutral-700 border border-neutral-700 rounded-lg p-20 font-fragment">
                <h4 class="text-center font-bold">Sponsors</h4>
            </section>
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
    layout: 'profile',
})

// Define the page title
const pageTitle = 'Account'

useHead({
    title: pageTitle + ' | OHKO',
})
</script>

<style>
@media (max-width: 1000px) {
    #profile-sections {
        display: flex;
        flex-flow: column;
        align-items: center;
    }
    #profile-section-1 {
        width: 100%;
    }
    #profile-section-2 {
        width: 100%;
    }
    #profile-section-3 {
        width: 100%;
    }
}
</style>
