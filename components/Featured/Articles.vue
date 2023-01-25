<template>
    <h2 class="mt-10 text-5xl sm:text-6xl font-VCR uppercase text-center dark:text-neutral-100">Featured Articles</h2>
    <div class="flex flex-col items-center font-fragment" v-for="post in posts">
        <div
            id="post-block"
            class="overflow-hidden transition-shadow duration-300 text-left border-b-2 border-neutral-600 dark:border-white w-full py-10 px-5 mt-5 mb-5"
        >
            <NuxtLink :to="`/articles/${post.slug}`" class="inline-block mt-3 mb-3 text-red transition-colors duration-200 font-VCR">
                <section id="inner-post-container" class="flex items-center justify-between gap-5">
                    <!-- Featured Image -->
                    <section id="image-container" class="w-5/12">
                        <img class="object-cover w-full rounded" v-bind:src="'https://app.ohko.org/assets/' + post.featured_image" />
                    </section>
                    <!-- Content Meta -->
                    <section class="py-5 w-7/12">
                        <p class="mb-2 text-md font-semibold">
                            {{ new Date(post.date_created).toLocaleDateString() }}
                        </p>
                        <h3 class="text-3xl font-VCR font-bold uppercase text-black hover:text-stone-500 dark:text-white dark:hover:text-stone-500">
                            {{ post.title }}
                        </h3>

                        <!-- Content Description -->
                        <!-- <p class="mb-2 font-fragment text-neutral-900 dark:text-neutral-100 text-md"> -->
                        <!--     {{ post.description }} -->
                        <!-- </p> -->

                        <!-- User Created -->
                        <!-- <p class="mb-2 font-fragment font-bold text-infrared text-sm"> -->
                        <!-- By: @{{ post.user_created }} -->
                        <!-- </p> -->

                        <!-- Post Tags -->
                        <div class="mt-5 flex flex-row flex-wrap gap-2">
                            <section v-for="tag in post.tags" class="post-tags inline">
                                <span class="mb-2 font-fragment font-bold bg-infrared text-neutral-900 text-md p-2 rounded">
                                    {{ tag }}
                                </span>
                            </section>
                        </div>
                        <!-- <p class="mb-2 infrared">/articles/{{ post.slug }}</p> -->
                        <!-- End of Content Description -->
                        <!-- Reaction Counts -->
                        <section class="reactions flex justify-end mt-4">
                            <section class="font-fragment flex flex-col items-center">
                                <Icon name="pixelarticons:heart" size="2rem" class="text-infrared" />
                                <span class="text-infrared text-lg font-VCR">{{ post.hearts.length }}</span>
                            </section>
                        </section>
                        <!-- End of Reaction Counts -->
                        <!-- Beginning of Tags -->
                    </section>
                </section>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
const { getItems } = useDirectusItems()

const posts = await getItems({ collection: 'articles' })

// const title = 'Articles'

useHead({
    title: 'Articles' + ' | OHKO',
})

/*debug*/
</script>

<script></script>

<style></style>
