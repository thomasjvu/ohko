<template>
    <div class="relative max-w-4xl px-6 pt-12 pb-12 mx-auto space-y-8">
        <VLogo />
        <div class="sm:text-center sm:mx-auto mt-10">
            <div class="status mb-5">
                <span id="post-draft" v-if="post.status === 'draft'">
                    Draft
                </span>
                <span id="post-archived" v-else-if="post.status === 'archived'">
                    Archived
                </span>
                <span
                    id="post-published"
                    v-else-if="post.status === 'published'"
                >
                    Published
                </span>
            </div>
            <h2 class="mb-4 text-3xl font-bold sm:text-6xl font-fugaz">
                {{ post.title }}
            </h2>
            <hr class="w-full my-8 border-gray-300" />
            <div class="post-status text-white uppercase"></div>
            <div
                class="post-content bg-white px-10 py-10 rounded-md text-justify"
            >
                <section
                    class="featured-image flex items-center justify-center"
                >
                    <img
                        v-bind:src="
                            'https://app.ohko.org/assets/' + post.featured_image
                        "
                        alt="Featured Image"
                        class="mb-5 border-2 border-black rounded-md"
                    />
                </section>
                <div v-html="post.content"></div>
                <section id="post-tags" class="post-tags mt-7 px-5 py-5">
                    <span
                        class="post-tag text-white rounded-md border-white border-2 mb-5 pb-5"
                        >Tags: {{ post.tags }}</span
                    >
                </section>
            </div>

            <!-- post meta -->
            <div id="post-meta" class="flex justify-between items-center mt-5 mb-5">
                <section id="post-author" class="px-5 py-5 font-fragment rounded-md bg-stone-900 text-neutral-50">
                    <span>Created By: <br /> {{ post.user_created }}</span>
                </section>
                <section id="post-revenue" class="px-10 py-10 bg-green-500 rounded-md">
                    <span class="font-fragment bold text-white"
                        >$$$ Revenue</span
                    >
                </section>
            </div>
        </div>
        <VFooter />
        <VCredits />
    </div>
</template>

<script setup>
const { getItemById } = useDirectusItems()
const route = useRoute()

const post = await getItemById({
    collection: 'guides',
    id: route.params.id,
    title: route.params.title,
})

if (!post) throwError('No guide found, 404')
</script>

<style>

.status {
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-family: 'Fragment Mono', monospace;
}

#post-draft {
    background: #c4c4c4;
    padding: 5px 10px;
    border-radius: 5px;
}
#post-published {
    background: #44ff88;
    padding: 5px 10px;
    border-radius: 5px;
}
#post-archived {
    background: #ffbb33;
    padding: 5px 10px;
    border-radius: 5px;
}

.post-tag {
    background: #ff2147;
    font-family: 'Fragment Mono', monospace;
}
</style>
