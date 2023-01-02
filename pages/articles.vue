<template>
    <div class="relative max-w-4xl px-6 pt-12 pb-12 mx-auto space-y-8">
        <VLogo />
        <div
            class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
        >
            <div
                class="max-w-screen-sm sm:text-center sm:mx-auto flex items-center flex-col justify-center"
            >
                <h1
                    class="mb-4 text-7xl font-bold tracking-tight text-ghost font-fugaz sm:text-8xl sm:leading-none"
                >
                    OHKO
                </h1>
                <h2
                    class="text-3xl text-ghost md:text-3xl sm:px-4 font-fragment"
                >
                    One-hit
                    <span class="knockout text-red">Knockout!</span> Media
                    Platform
                </h2>
            </div>
            <div class="flex flex-col items-center" v-for="post in posts">
                <div
                    class="overflow-hidden transition-shadow duration-300 rounded m-5 text-center post-block border-solid border-5 border-gray-900 w-full"
                >
                    <div class="py-5">
                        <p class="mb-2 text-xs font-semibold post-date">
                            {{
                                new Date(post.date_created).toLocaleDateString()
                            }}
                        </p>
                        <NuxtLink
                            :to="`/article/${post.id}`"
                            class="inline-block mt-3 mb-3 text-red transition-colors duration-200 hover:text-red"
                            ><p
                                class="text-2xl font-bold leading-5 text-ghost post-title"
                            >
                                {{ post.title }}
                            </p></NuxtLink
                        >
                        <p class="mb-2 text-ghost">
                            {{ post.short_content }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <VFooter />
    </div>
</template>

<script setup>
const { getItems } = useDirectusItems()

const posts = await getItems({ collection: 'articles' })
</script>

<style>
/* Post List */
.post-block {
    background: #f8f8ff;
    box-shadow: 3px 3px 0 #070707, -1px -1px 0 #070707, 1px -1px 0 #070707,
        -1px 1px 0 #070707, 1px 1px 0 #070707;
}

.post-title {
    font-family: 'Fugaz One', 'Arial', sans-serif;
}

.post-date {
    color: #777777;
    font-family: 'Fragment Mono';
}
</style>
