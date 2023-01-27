<template>
    <div class="">
        <div class="max-w-screen-sm sm:text-center sm:mx-auto flex items-center flex-col justify-center">
            <h1 id="page-title" class="mb-4 font-fugaz font-bold uppercase text-7xl sm:text-8xl text-black dark:text-white">Reviews</h1>
            <h2 class="font-fragment font-bold text-2xl sm:text-3xl text-neutral-700 dark:text-neutral-400">
                OHKO (One-hit Knockout)
            </h2>
        </div>
        <div class="flex justify-end items-center my-10">
            <NuxtLink to="/create/review">
                <!-- <span class="font-fragment text-3xl">New Review</span> -->
                <Icon name="pixelarticons:notes-plus" width="25" height="25" color="var(--infrared)"/>
            </NuxtLink>
        </div>
        <!-- Post Blocks -->
        <div class="flex flex-col items-center font-fragment" v-for="post in posts">
            <div
                id="post-block"
                class="overflow-hidden transition-shadow duration-300 text-left border-b-2 dark:border-neutral-700 w-full py-10"
            >
                <section id="inner-post-container" class="flex items-center justify-between gap-5">
                    <!-- Featured Image -->
                    <section id="image-container" class="w-5/12">
                        <img class="object-cover w-full rounded" v-bind:src="'https://app.ohko.org/assets/' + post.featured_image" />
                    </section>
                    <!-- Content Meta -->
                    <section class="py-5 w-7/12">
                        <p class="mb-2 text-xs font-semibold post-date">
                            {{ new Date(post.date_created).toLocaleDateString() }}
                        </p>
                        <NuxtLink :to="`/reviews/${post.slug}`" class="inline-block mt-3 mb-3 text-red transition-colors duration-200 font-fugaz"
                            ><h3
                                class="text-4xl font-bold leading-5 post-title text-black hover:text-stone-500 dark:text-white dark:hover:text-stone-500"
                            >
                                {{ post.title }}
                            </h3></NuxtLink
                        >
                        <!-- Content Description -->
                        <p class="mb-2 text-md text-neutral-700 dark:text-neutral-400">
                            {{ post.description }}
                        </p>
                        <!-- Content Reaction Counts -->
                        <!-- End of Content Reaction Counts -->
                    </section>
                </section>
            </div>
        </div>
        <!-- Post Blocks -->
    </div>
</template>

<script setup>
const { getItems } = useDirectusItems()

const posts = await getItems({ collection: 'reviews' })

const title = 'Reviews'

useHead({
    title: title + ' | OHKO',
})
</script>

<style>
.post-title {
    font-family: 'Fugaz One', sans-serif;
}

.post-date {
    color: #797979;
    font-family: 'Fragment Mono';
}
</style>
