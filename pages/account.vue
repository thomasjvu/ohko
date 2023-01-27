<template>
    <div class="">
        <div class="header">
            <section id="profile-cover">
                <img class="w-screen h-96 object-cover" :src="fileUrl(user.cover)" />
            </section>
            <section class="profile-img flex justify-center">
                <img class="w-40 h-40 -mt-20 rounded-full border-2 border-neutral-700 border-50 shadow-md" :src="fileUrl(user.avatar)" />
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
            <section id="profile-section-1" class="w-1/4 flex flex-col gap-10">
                <section id="profile-biography" class="bg-infrared dark:bg-neutral-700 border border-neutral-700 rounded-lg p-20 font-fragment">
                    <h4 class="text-4xl font-bold text-center">{{ user.description }}</h4>
                </section>
                <section id="profile-biography" class="bg-neutral-300 dark:bg-neutral-700 border border-neutral-700 rounded-lg p-20 font-fragment">
                    <h4 class="font-bold text-center text-4xl">Social Links</h4>
                    <section id="profile-social-links" class="flex flex-col">
                        <NuxtLink
                            v-if="user.twitch_handle"
                            :to="`https://twitch.tv/${user.twitch_handle}`"
                            class="mt-10 flex items-center gap-5"
                            target="_blank"
                        >
                            <img src="../assets/icon/Twitch.png" />
                            <span class="font-bold text-xl">Twitch:</span>
                            <span class="text-xl">@{{ user.twitch_handle }}</span>
                        </NuxtLink>
                        <NuxtLink
                            v-if="user.twitter_handle"
                            :to="`https://twitter.com/${user.twitter_handle}`"
                            class="mt-10 flex items-center gap-5"
                            target="_blank"
                        >
                            <img src="../assets/icon/Twitter.png" />
                            <span class="font-bold text-xl">Twitter:</span>
                            <span class="text-xl">@{{ user.twitter_handle }}</span>
                        </NuxtLink>
                        <NuxtLink :to="`${user.website_link}`" class="mt-10 flex items-center gap-5" target="_blank">
                            <img src="../assets/icon/Exclamation.png" />
                            <span class="font-bold text-xl">Website:</span>
                            <span class="text-xl">{{ user.website_link }}</span>
                        </NuxtLink>
                    </section>
                </section>
                <section id="profile-biography" class="bg-neutral-300 dark:bg-neutral-700 border border-neutral-700 rounded-lg p-20 font-fragment">
                    <h4 class="font-bold text-center text-4xl">Allies</h4>
                </section>
            </section>

            <section id="profile-section-2" class="w-2/4">
                <section class="bg-infrared rounded-lg text-neutral-900 p-5 font-VCR font-bold uppercase">
                    <h3 class="text-center font-bold">Content Created</h3>
                </section>
                <!-- Articles Created -->
                <section v-for="article in articles">
                    <section
                        v-if="article.user_created === user.id"
                        class="w-full flex flex-col gap-5 mt-5 article-container bg-neutral-800 text-neutral-100 border border-neutral-700 rounded-lg p-20 font-fragment"
                    >
                        <NuxtLink :to="`/article/${article.slug}`" class="flex items-center">
                            <section id="article-image-container" class="w-3/12 mr-10">
                                <img class="object-cover w-full h-48 rounded" v-bind:src="'https://app.ohko.org/assets/' + article.featured_image" />
                            </section>
                            <section class="article-info-container w-8/12">
                                <h4 class="text-md font-fragment uppercase text-center mt-5">{{ article.title }}</h4>
                            </section>
                        </NuxtLink>
                    </section>
                </section>
                <!-- Reviews Created -->
                <section v-for="review in reviews">
                    <section
                        v-if="review.user_created === user.id"
                        class="w-full flex flex-col gap-5 mt-5 article-container bg-neutral-800 text-neutral-100 border border-neutral-700 rounded-lg p-20 font-fragment"
                    >
                        <NuxtLink :to="`/review/${review.slug}`" class="flex items-center">
                            <section id="review-image-container" class="w-3/12 mr-10">
                                <img class="object-cover w-full h-48 rounded" v-bind:src="'https://app.ohko.org/assets/' + review.featured_image" />
                            </section>
                            <section class="review-info-container w-8/12">
                                <h4 class="text-md font-fragment uppercase text-center mt-5">{{ review.title }}</h4>
                            </section>
                        </NuxtLink>
                    </section>
                </section>
            </section>

            <section id="profile-section-3" class="w-1/4 flex flex-col gap-10">
                <section>
                    <AdsDefault />
                </section>
                <section class="bg-neutral-300 dark:bg-neutral-700 border border-neutral-700 rounded-lg p-20 font-fragment">
                    <h3 class="text-center font-bold text-5xl">Sponsors</h3>
                    <div v-for="sponsor in user.sponsors">
                        <div class="sponsor-container my-10">
                            <p class="font-bold">{{ sponsor.sponsor_name }}</p>
                            <NuxtLink class="text-2xl" to="`${sponsor.sponsor_link}}`">{{ sponsor.sponsor_link }}</NuxtLink>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    </div>
</template>

<script></script>

<script setup>
import { storeToRefs } from 'pinia'
import { useAuth } from '~~/store/auth'

// Set Authentication
const auth = useAuth()
const { fileUrl } = useFiles()
const { isLoggedIn, user } = storeToRefs(auth)

// Set middleware
definePageMeta({
    middleware: 'auth',
    layout: 'profile',
})

// Get User Articles
const { getItems } = useDirectusItems()

const articles = await getItems({ collection: 'articles' })
const reviews = await getItems({ collection: 'reviews' })

// Define the page title
const pageTitle = 'Account'

useHead({
    title: pageTitle + ' | OHKO',
})
</script>

<style scoped>
@media (max-width: 1024px) {
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
