<template>
    <div class="">
        <div class="max-w-screen-sm sm:text-center sm:mx-auto flex items-center flex-col justify-center">
            <h1 id="page-title" class="mb-4 font-fugaz font-bold uppercase text-7xl sm:text-8xl text-black dark:text-white">Reviews</h1>
            <h2 class="font-fragment font-bold text-2xl sm:text-3xl text-neutral-700 dark:text-neutral-400">OHKO (One-hit Knockout)</h2>
        </div>
        <div class="flex justify-end items-center my-10">
            <NuxtLink to="/create/review">
                <!-- <span class="font-fragment text-3xl">New Review</span> -->
                <Icon name="pixelarticons:notes-plus" width="25" height="25" color="var(--infrared)" />
            </NuxtLink>
        </div>
        <!-- Post Blocks -->
        <div class="flex flex-col items-center font-fragment" v-for="post in posts">
            <div id="post-block" class="overflow-hidden transition-shadow duration-300 text-left border-b-2 dark:border-neutral-700 w-full py-10">
                <section id="post-inner-container" class="flex items-center justify-between gap-10">
                    <!-- Featured Image -->
                    <section id="post-image-container" class="w-4/12">
                        <img class="object-cover w-full rounded" v-bind:src="'https://app.ohko.org/assets/' + post.featured_image" />
                    </section>
                    <!-- End of Featured Image -->
                    <!-- Content Meta -->
                    <section id="post-content-container" class="py-5 w-8/12">
                        <p class="mb-2 text-sm post-date">
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
                        <!-- Content Description -->
                        <!-- <p class="mb-2 text-md text-neutral-700 dark:text-neutral-400"> -->
                        <!--     {{ post.description }} -->
                        <!-- </p> -->


                        <!-- Categories & Tags -->
                        <section class="flex gap-5">
                            <!-- Post Category -->
                            <div class="mt-5 flex flex-row flex-wrap gap-2">
                                <span class="font-fragment font-bold bg-neutral-300 text-neutral-900 text-lg px-2 rounded leading-10">
                                    Category: {{ post.category }}
                                </span>
                            </div>

                            <!-- Post Tags -->
                            <div class="mt-5 flex flex-row flex-wrap gap-2">
                                <section v-for="tag in post.tags" class="post-tags inline">
                                    <span class="font-fragment font-bold bg-infrared text-neutral-900 text-lg p-2 rounded leading-10"> #{{ tag }} </span>
                                </section>
                            </div>
                        </section>

                        <!-- User Created -->
                        <section class="flex gap-5 items-center mt-5">
                            <img v-bind:src="'https://app.ohko.org/assets/' + post.player_avatar" width="50" class="rounded-full border p-1 dark:border-neutral-700"/>
                            <p class="mb-2 font-fragment font-bold text-neutral-700 dark:text-neutral-300 text-sm">
                            @{{ post.player }}
                            </p>
                        </section>

                        <!-- Hearts -->
                        <section class="reactions flex justify-end mt-4">
                            <section class="font-fragment flex flex-col items-center">
                                <Icon name="pixelarticons:heart" size="2rem" class="text-infrared" />
                                <span class="text-infrared text-lg font-VCR">{{ post.hearts.length }}</span>
                            </section>
                        </section>
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

/* Responsive */
@media (max-width: 1000px) {
    #post-inner-container {
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    #post-image-container {
        width: 60%;
    }
    #post-content-container {
        display: flex;
        flex-flow: column;
        width: 100%;
    }
    #post-title {
        text-align: center;
    }
}
</style>
