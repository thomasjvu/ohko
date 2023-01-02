<template>
    <div
        class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
        <div class="max-w-screen-sm sm:text-center sm:mx-auto">
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
            <h2
                class="mb-4 font-sans text-3xl font-bold tracking-tight text-white sm:text-6xl sm:leading-none"
            >
                {{ post.title }}
            </h2>
            <hr class="w-full my-8 border-gray-300" />
            <div class="post-status text-white uppercase"></div>
            <div
                class="post-content bg-white px-10 py-10 rounded-md text-justify"
            >
                <!-- <section -->
                <!--     class="featured-image flex items-center justify-center" -->
                <!-- > -->
                <!--     <img -->
                <!--         v-bind:src=" -->
                <!--             'https://app.ohko.org/assets/' + post.featured_image -->
                <!--         " -->
                <!--         alt="Featured Image" -->
                <!--         class="mb-5 border-2 border-black rounded-md" -->
                <!--     /> -->
                <!-- </section> -->
                <!-- <div v-html="post.content"></div> -->
            </div>
            <section class="post-tags mt-7">
                <!-- <span -->
                <!--     class="post-tag text-white rounded-md border-white border-2" -->
                <!--     >Tags: {{ post.tags }}</span -->
                <!-- > -->
                <!-- <div class="flex flex-col items-center" v-for="post in posts"> -->
                <!--     <li> {{post.tags}} </li> -->
                <!-- </div> -->
            </section>
        </div>
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
/*
h2 {
    font-size: 2rem;
}

h3 {
    font-size: 1.5rem;
}

p {
    margin: 10px 0px;
}
*/

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
    padding: 5px 10px;
    font-family: 'Fragment Mono', monospace;
}
</style>
