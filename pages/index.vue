<template>
    <div class="relative max-w-4xl px-6 pt-12 pb-12 mx-auto space-y-8">
        <VLogo />
            <ModalsMyAccount />
        <VDemoAlert />
        <div
            id="examples"
            class="relative flex-1 divide divide-gray-800 dark:divide-gray-400"
        >
            <!-- <h2 -->
            <!--     class="pb-6 text-3xl font-fugaz uppercase font-extrabold text-dark dark:text-white" -->
            <!-- > -->
            <!--     Home -->
            <!-- </h2> -->
            <!-- categories -->
            <div class="flex justify-around gap-5">
                <section
                    class="category null dark:text-white w-screen text-center h-80 flex items-center hover:shadow-xl hover:bg-black"
                >
                    <h3 class="text-2xl">📰 Articles</h3>
                </section>
                <section
                    class="category null dark:text-white w-screen text-center h-80 flex items-center hover:shadow-xl hover:bg-black"
                >
                    <h3 class="text-2xl">🦮 Guides</h3>
                </section>
                <section
                    class="category null dark:text-white w-sceren text-center h-80 flex items-center hover:shadow-xl hover:bg-black"
                >
                    <h3 class="text-2xl">⭐ Reviews</h3>
                </section>
                <section
                    class="category null dark:text-white w-screen text-center h-80 flex items-center hover:shadow-xl hover:bg-black"
                >
                    <h3 class="text-2xl">💩 Memes</h3>
                </section>
            </div>
            <ExamplesContent id="content" class="py-12" />
            <!-- Create Content -->
            <NuxtLink to="/create-content">
                <div class="create dark:text-white w-full text-center mt-10">
                    <h3>Create</h3>
                    <p class="mb-2">It's in your blood.</p>
                    <a class="btn">Create Content</a>
                </div>
            </NuxtLink>
            <!-- User Modal -->
        </div>
        <VFooter />
        <VCredits />
    </div>
</template>

<script setup>
const title = 'Home'

useHead({
    title: title + ' | OHKO',
})
</script>

<style>
.null {
    background: #333;
}
.category {
    padding: 50px;
    border-radius: 5px;

    color: white;
    font-family: 'Fragment Mono', monospace;
}
.create {
    padding: 75px;
    border: 2px dashed #ff2147;
    border-radius: 10px;

    font-family: 'Fragment Mono', monospace;
}
</style>
