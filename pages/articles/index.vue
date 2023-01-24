<template>
    <div class="max-w-screen-sm sm:text-center sm:mx-auto flex items-center flex-col justify-center">
        <h1 id="page-title" class="mb-4 font-VCR font-bold uppercase text-7xl sm:text-8xl tracking-wider text-black dark:text-white">Articles</h1>
    </div>
    <!-- Post Blocks -->
    <div class="flex flex-col items-center font-fragment" v-for="post in posts">
        <div
            id="post-block"
            class="overflow-hidden transition-shadow duration-300 rounded-md text-left bg-neutral-200 dark:bg-neutral-800 border-2 border-black dark:border-white w-full py-10 px-5 shadow-xl mt-5 mb-5"
        >
            <section id="inner-post-container" class="flex items-center justify-between gap-5">
                <!-- Featured Image -->
                <section id="image-container" class="w-5/12">
                    <img class="object-cover w-full rounded" v-bind:src="'https://app.ohko.org/assets/' + post.featured_image" />
                </section>
                <!-- Content Meta -->
                <section class="py-5 w-7/12">
                    <p class="mb-2 text-md font-semibold post-date">
                        {{ new Date(post.date_created).toLocaleDateString() }}
                    </p>
                    <NuxtLink :to="`/articles/${post.slug}`" class="inline-block mt-3 mb-3 text-red transition-colors duration-200 font-fugaz"
                        ><h3
                            class="text-3xl font-bold post-title text-black hover:text-stone-500 dark:text-white dark:hover:text-stone-500"
                        >
                            {{ post.title }}
                        </h3></NuxtLink
                    >
                    <!-- Content Description -->
                    <p class="mb-2 text-black dark:text-white">
                        {{ post.description }}
                    </p>
                    <p class="mb-2 infrared">/articles/{{ post.slug }}</p>
                    <!-- End of Content Description -->
                    <!-- Reaction Counts -->
                    <section class="reactions flex">
                        <section class="font-fragment flex flex-col items-center">
                            <Icon name="pixelarticons:mood-happy" size="2rem" />
                            <span>{{post.positive}}</span>
                        </section>
                        <section class="font-fragment flex flex-col items-center">
                            <Icon name="pixelarticons:mood-neutral" size="2rem" />
                            <span>{{post.neutral}}</span>
                        </section>
                        <section class="font-fragment flex flex-col items-center">
                            <Icon name="pixelarticons:mood-sad" size="2rem" />
                            <span>{{post.negative}}</span>
                        </section>
                    </section>
                    <!-- End of Reaction Counts -->
                </section>
            </section>
        </div>
    </div>
    <LoadArticles />
    <!-- End of Post Blocks -->
</template>

<script setup>
const { getItems } = useDirectusItems()

const posts = await getItems({ collection: 'articles' })

useHead({
    title: 'Articles' + ' | OHKO'
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
