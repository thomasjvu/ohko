<template>
    <VHeader />
    <div class="relative max-w-4xl px-6 pt-12 pb-12 mx-auto space-y-8">
        <div class="max-w-screen-sm sm:text-center sm:mx-auto flex items-center flex-col justify-center">
            <h1 id="page-title" class="mb-4 font-fugaz font-bold uppercase text-7xl sm:text-8xl text-black dark:text-white">Guides</h1>
        </div>
        <!-- Post Blocks -->
        <div class="flex flex-col items-center font-fragment" v-for="post in posts">
            <div id="post-block" class="overflow-hidden transition-shadow duration-300 rounded-md text-left bg-white dark:bg-black border-2 border-black dark:border-white w-full py-10 px-5 shadow-xl">
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
                        <NuxtLink :to="`/guide/${post.slug}`" class="inline-block mt-3 mb-3 text-red transition-colors duration-200 font-fugaz"
                            ><h3 class="text-2xl font-bold leading-5 post-title text-black hover:text-stone-500 dark:text-white dark:hover:text-stone-500">
                                {{ post.title }}
                            </h3></NuxtLink
                        >
                        <!-- Content Description -->
                        <p class="mb-2 text-black">
                            {{ post.short_content }}
                        </p>
                        <p class="mb-2 infrared">/{{ post.slug }}</p>
                        <!-- Reaction Counts -->
                        <section class="reactions flex">
                            <section class="font-fragment flex flex-col items-center">
                                <Icon name="pixelarticons:mood-happy" size="2rem" />
                                <span>5</span>
                            </section>
                            <section class="font-fragment flex flex-col items-center">
                                <Icon name="pixelarticons:mood-neutral" size="2rem" />
                                <span>3</span>
                            </section>
                            <section class="font-fragment flex flex-col items-center">
                                <Icon name="pixelarticons:mood-sad" size="2rem" />
                                <span>1</span>
                            </section>
                        </section>
                    </section>
                </section>
            </div>
        </div>
        <VFooter />
    </div>
</template>

<script setup>
const { getItems } = useDirectusItems()

const posts = await getItems({ collection: 'guides' })

const title = 'Guides'

useHead({
    title: title + ' | OHKO',
})
</script>

<style>
/* Post List */

.post-title {
    font-family: 'Fugaz One', 'Arial', sans-serif;
}

.post-date {
    color: #797979;
    font-family: 'Fragment Mono';
}
</style>
