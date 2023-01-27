<template>
    <div class="relative max-w-4xl px-6 pt-12 pb-12 mx-auto space-y-8">
        <NuxtLink
            class="flex items-center font-fragment font-bold uppercase text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-200"
            to="/"
        >
            <span class="mr-2 text-xl">←</span>
            Back to Reviews
        </NuxtLink>
        <VLogo />
        <div class="relative pt-48 pb-10 overflow-hidden shadow-xl rounded-2xl">
            <img
                class="absolute inset-0 object-cover w-full h-full"
                :src="fileUrl(review.featured_image)"
            />
            <div class="absolute inset-0 bg-primary-500 mix-blend-multiply" />
            <div
                class="absolute inset-0 bg-gradient-to-t from-primary-600 via-primary-600 opacity-80"
            />
            <div class="relative px-8">
                <div
                    class="relative text-lg font-medium ghost font-fugaz md:flex-grow"
                >
                    <h1 id="post-title" class="text-6xl font-bold drop-shadow-sm">
                        {{ review.title }}
                    </h1>
                </div>
            </div>
        </div>
        <section id="short-content" class="px-5 py-5 bg-infrared rounded-md darker font-fragment shadow-lg">
            <p class="text-sm font-extrabold drop-shadow-sm">
            {{ review.description }}
            </p>
        </section>
        <h4 class="text-sm font-extrabold uppercase drop-shadow-sm">
            Created By @{{ review.user_created }}
            Created By @{{ review.creator_name }}
        </h4>

        <section
            id="author-review"
            class="font-fragment leading-loose"
            v-html="review.content"
        />

        <section id="author-rating" class="flex items-center flex-col">
            <h4 class="font-fugaz mb-5 text-xl text-center">Rating:</h4>
            <section
                id="rating"
                class="flex items-center justify-center shadow-md"
            >
                <span
                    id="rating-amount"
                    class="text-xl font-extrabold text-white font-fugaz"
                    >{{ review.rating }} / 10</span
                >
            </section>
        </section>

        <VFooter />
    </div>
</template>

<script setup>
// Import the $directus plugin
const { $directus } = useNuxtApp()
const { fileUrl } = useFiles()

// Get the params from the Nuxt route
const { params, path } = useRoute()

// Fetch the page data from the Directus API using the Nuxt useAsyncData composable
// https://v3.nuxtjs.org/docs/usage/data-fetching#useasyncdata
const {
    data: review,
    pending,
    error,
} = await useAsyncData(
    path,
    () => {
        return $directus
            .items('reviews')
            .readByQuery({ filter: { slug: { _eq: params.slug } }, limit: 1 })
    },
    {
        transform: (data) => data.data[0],
        pick: [
            'title',
            'description',
            'content',
            'featured_image',
            'user_created',
            'creator_name',
            'rating',
            'tags',
            'slug',
            'id',
        ],
    }
)

useHead({
    title: review.title,
})

</script>

<style>
#post-title {
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #212121;
}

#rating {
    background: #ff2147;
    height: 100px;
    width: 100px;
    border-radius: 50%;

    border: 2px solid black;
}
</style>
