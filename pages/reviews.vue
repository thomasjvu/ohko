<template>
    <VHeader />
    <div class="relative max-w-4xl px-6 pt-12 pb-12 mx-auto space-y-8">
        <div
            class="max-w-screen-sm sm:text-center sm:mx-auto flex items-center flex-col justify-center"
        >
            <h1
                id="page-title"
                class="mb-4 font-fugaz font-bold uppercase text-7xl sm:text-8xl text-black dark:text-white"
            >
                Reviews
            </h1>
            <h2 class="text-3xl md:text-3xl sm:px-4 font-fragment bold">
                One-hit
                <span class="knockout text-red">Knockout!</span> Media Platform
            </h2>
        </div>
        <div
            class="flex flex-col items-center font-fragment"
            v-for="post in posts"
        >
            <div
                id="post-block"
                class="overflow-hidden transition-shadow duration-300 rounded-md text-center border-2 border-black w-full py-10 px-5 shadow-xl"
            >
                <section
                    id="inner-post-container"
                    class="flex items-center justify-between gap-5"
                >
                    <section></section>
                    <section id="image-container" class="w-2/3">
                        <img
                            class="object-cover w-full rounded"
                            v-bind:src="
                                'https://app.ohko.org/assets/' +
                                post.featured_image
                            "
                        />
                    </section>
                    <div class="py-5">
                        <p class="mb-2 text-xs font-semibold post-date">
                            {{
                                new Date(post.date_created).toLocaleDateString()
                            }}
                        </p>
                        <NuxtLink
                            :to="`/review/${post.slug}`"
                            class="inline-block mt-3 mb-3 text-red transition-colors duration-200 hover:text-red"
                            ><p class="text-2xl font-bold leading-5 post-title">
                                {{ post.title }}
                            </p></NuxtLink
                        >
                        <p class="mb-2 text-ghost">
                            {{ post.short_content }}
                        </p>
                        <p class="mb-2 infrared">/{{ post.slug }}</p>
                    </div>
                </section>
            </div>
        </div>
        <VFooter />
    </div>
</template>

<script setup>
const { getItems } = useDirectusItems()

const posts = await getItems({ collection: 'reviews' })
</script>

<style>
#page-title {
}

/* Post List */
#post-block {
    background: #fff;
}

.post-title {
    font-family: 'Fugaz One', 'Arial', sans-serif;
}

.post-date {
    color: #777777;
    font-family: 'Fragment Mono';
}
</style>
