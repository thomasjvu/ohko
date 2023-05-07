<template>
    <div class="featured-reviews">
        <div class="flex items-center flex-col justify-center my-10">
            <Title title="Reviews" />
            <!-- <HeaderSubtitle /> -->
        </div>
        <!-- Post Blocks -->
        <div class="flex flex-col items-center font-fragment" v-for="post in posts">
            <div id="post-block" class="text-left border-b-2 dark:border-neutral-700 w-full py-10">
                <section id="post-inner-container" class="flex items-center justify-between gap-10">
                    <!-- Featured Image -->
                    <section id="post-image-container" class="w-4/12">
                        <img class="object-cover w-full rounded" v-bind:src="'https://app.ohko.org/assets/' + post.featured_image" />
                    </section>
                    <!-- End of Featured Image -->
                    <!-- Content Meta -->
                    <section id="post-content-container" class="py-5 w-8/12">
                        <section id="post-details-container">
                            <p id="post-date" class="mb-2 text-sm post-date">
                                {{ new Date(post.date_created).toLocaleDateString() }}
                            </p>
                            <NuxtLink :to="`/reviews/${post.slug}`" class="inline-block mt-3 mb-3 text-red transition-colors duration-200 font-fugaz"
                                ><h3
                                    id="post-title"
                                    class="text-4xl font-fragment font-bold uppercase leading-10 text-black hover:text-stone-500 dark:text-white dark:hover:text-stone-500"
                                >
                                    {{ post.title }}
                                </h3></NuxtLink
                            >
                        </section>
                        <!-- Content Description -->
                        <!-- <p class="mb-2 text-md text-neutral-700 dark:text-neutral-400"> -->
                        <!--     {{ post.description }} -->
                        <!-- </p> -->

                        <!-- Categories & Tags -->
                        <section id="post-meta-container" class="flex gap-5">
                            <!-- Post Category -->
                            <div class="mt-5 flex flex-row flex-wrap gap-2">
                                <span class="font-fragment font-bold bg-neutral-300 text-neutral-900 text-lg px-2 rounded leading-10">
                                    Type: {{ post.category }}
                                </span>
                            </div>

                            <!-- Post Tags -->
                            <div class="mt-5 flex flex-row flex-wrap gap-2">
                                <section v-for="tag in post.tags" class="post-tags inline">
                                    <span class="font-fragment font-bold bg-infrared text-neutral-900 text-lg p-2 rounded leading-10">
                                        #{{ tag }}
                                    </span>
                                </section>
                            </div>
                        </section>

                        <section class="flex items-center justify-between">
                            <!-- User Created -->
                            <section id="post-player-container" class="flex gap-5 items-center mt-5">
                                <img
                                    v-bind:src="'https://app.ohko.org/assets/' + post.player_avatar"
                                    width="50"
                                    class="rounded-full border p-1 dark:border-neutral-700"
                                />
                                <p class="mb-2 font-fragment font-bold text-neutral-700 dark:text-neutral-300 text-md">@{{ post.player }}</p>
                            </section>

                            <!-- Hearts -->
                            <section id="post-hearts-container" class="flex justify-end mt-4">
                                <section class="font-fragment flex flex-col items-center">
                                    <Icon name="pixelarticons:heart" size="2rem" class="text-infrared" />
                                    <span class="text-infrared text-lg font-VCR">{{ post.hearts.length }}</span>
                                </section>
                            </section>
                            <!-- End of Post Hearts -->
                        </section>
                    </section>
                </section>
            </div>
        </div>
        <!-- End of Post Blocks -->
    </div>
</template>

<script setup>
const { getItems } = useDirectusItems()

const posts = await getItems({ collection: 'reviews' })
// const posts = await getItems({ collection: 'reviews' }).readByQuery({ sort: ['id'] })
</script>

<style scoped>

#new-review:hover {
    color: var(--dark-platinum);
}

/* Responsive */
@media (max-width: 1024px) {
    #post-inner-container {
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    #post-image-container {
        width: 100%;
    }
    #post-content-container {
        display: flex;
        flex-flow: column;
        width: 100%;
    }
    #post-details-container {
        display: flex;
        flex-flow: column;
        justify-content: center;
        width: 100%;
    }
    #post-title,
    #post-date {
        text-align: center;
    }
    #post-meta-container {
        display: flex;
        justify-content: center;
    }
}
</style>
